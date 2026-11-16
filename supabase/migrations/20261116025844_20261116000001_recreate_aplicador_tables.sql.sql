/*
# Recriar tabelas da área do aplicador (Beehave)

## Resumo
Recria todas as tabelas do módulo "aplicador" que foram removidas anteriormente.
Inclui tabelas, funções, triggers, políticas de RLS, bucket de fotos e grants.

## Tabelas criadas
1. **aplicador_usuarios** — usuários do módulo (admin, aplicador, medico). FK para auth.users.
2. **aplicador_criancas** — crianças atendidas. Referencia medico_id.
3. **aplicador_locais** — locais autorizados para check-in/out com geolocalização e raio.
4. **aplicador_atribuicoes** — relacionamento N:N entre aplicadores e crianças.
5. **aplicador_atendimentos** — registros de check-in/check-out com fotos, distância, duração e status.
6. **aplicador_auditoria** — log de edições administrativas.

## Funções criadas
- **aplicador_papel()** — retorna o papel do usuário autenticado atual.
- **aplicador_dist_m()** — calcula distância em metros entre duas coordenadas (Haversine).
- **aplicador_calc_duracao()** — trigger que recalcula duração_min automaticamente.
- **aplicador_audit()** — trigger que registra edições de admin na auditoria.
- **aplicador_checkin()** — RPC de check-in (valida papel, atribuição, local e distância).
- **aplicador_checkout()** — RPC de check-out (valida resumo, distância e define status).
- **aplicador_admin_vincular()** — RPC para admin vincular um usuário já existente em auth.users.
- **aplicador_registrar()** — RPC para registrar ação na auditoria.

## Segurança
- RLS habilitado em todas as tabelas.
- Políticas por papel: admin (CRUD total), aplicador (SELECT próprio + via RPC), medico (SELECT das suas crianças/atendimentos).
- Auditoria: só admin lê.
- Funções SECURITY DEFINER com REVOKE de public/anon e GRANT para authenticated.
- Bucket privado "aplicador-fotos" com políticas de pasta por usuário.
- Grants de SELECT/INSERT/UPDATE/DELETE para authenticated em todas as tabelas.
- Grants de USAGE em sequences para authenticated (bigserial).

## Notas
- O primeiro admin deve ser criado manualmente após criar o usuário em Authentication > Users.
- As fotos são armazenadas no bucket privado "aplicador-fotos" (provisório até integração com Google Drive).
*/

-- ---------- TABELAS ----------
create table if not exists public.aplicador_usuarios (
  id        uuid primary key references auth.users(id) on delete cascade,
  nome      text not null,
  email     text,
  papel     text not null default 'aplicador' check (papel in ('admin','aplicador','medico')),
  ativo     boolean not null default true,
  criado_em timestamptz not null default now()
);

create table if not exists public.aplicador_criancas (
  id              bigserial primary key,
  nome            text not null,
  data_nascimento date,
  medico_id       uuid references public.aplicador_usuarios(id),
  ativa           boolean not null default true
);

create table if not exists public.aplicador_locais (
  id          bigserial primary key,
  crianca_id  bigint not null references public.aplicador_criancas(id) on delete cascade,
  descricao   text not null,
  endereco    text not null,
  latitude    double precision not null,
  longitude   double precision not null,
  raio_metros int not null default 200
);

create table if not exists public.aplicador_atribuicoes (
  aplicador_id uuid   not null references public.aplicador_usuarios(id) on delete cascade,
  crianca_id   bigint not null references public.aplicador_criancas(id) on delete cascade,
  primary key (aplicador_id, crianca_id)
);

create table if not exists public.aplicador_atendimentos (
  id            bigserial primary key,
  aplicador_id  uuid   not null references public.aplicador_usuarios(id),
  crianca_id    bigint not null references public.aplicador_criancas(id),
  local_id      bigint not null references public.aplicador_locais(id),

  checkin_em        timestamptz not null default now(),
  checkin_lat       double precision,
  checkin_lng       double precision,
  checkin_precisao_m double precision,
  checkin_dist_m    double precision,
  checkin_no_local  boolean,
  checkin_foto      text,

  checkout_em        timestamptz,
  checkout_lat       double precision,
  checkout_lng       double precision,
  checkout_precisao_m double precision,
  checkout_dist_m    double precision,
  checkout_no_local  boolean,
  checkout_foto      text,

  duracao_min   int,
  resumo        text check (char_length(resumo) <= 400),
  status        text not null default 'em_andamento'
                check (status in ('em_andamento','finalizado','revisar')),
  observacao_admin text,
  drive_status  text not null default 'pendente'
);

-- só 1 atendimento em andamento por aplicador
create unique index if not exists aplicador_uq_aberto
  on public.aplicador_atendimentos (aplicador_id) where status = 'em_andamento';
create index if not exists aplicador_idx_data on public.aplicador_atendimentos (checkin_em);
create index if not exists aplicador_idx_crianca on public.aplicador_atendimentos (crianca_id, checkin_em);

create table if not exists public.aplicador_auditoria (
  id          bigserial primary key,
  usuario_id  uuid,
  acao        text not null,
  tabela      text,
  registro_id text,
  antes       jsonb,
  depois      jsonb,
  em          timestamptz not null default now()
);

-- ---------- FUNÇÕES AUXILIARES ----------
create or replace function public.aplicador_papel()
returns text language sql stable security definer set search_path = public as $$
  select papel from public.aplicador_usuarios where id = auth.uid() and ativo
$$;

create or replace function public.aplicador_dist_m(
  lat1 double precision, lng1 double precision, lat2 double precision, lng2 double precision)
returns double precision language sql immutable as $$
  select 2 * 6371000 * asin(sqrt(
    power(sin(radians(lat2 - lat1) / 2), 2) +
    cos(radians(lat1)) * cos(radians(lat2)) * power(sin(radians(lng2 - lng1) / 2), 2)))
$$;

-- recalcula a duração sempre que o atendimento for gravado
create or replace function public.aplicador_calc_duracao()
returns trigger language plpgsql as $$
begin
  if new.checkout_em is not null then
    new.duracao_min := greatest(1, round(extract(epoch from (new.checkout_em - new.checkin_em)) / 60));
  else
    new.duracao_min := null;
  end if;
  return new;
end $$;

drop trigger if exists aplicador_trg_duracao on public.aplicador_atendimentos;
create trigger aplicador_trg_duracao before insert or update on public.aplicador_atendimentos
  for each row execute function public.aplicador_calc_duracao();

-- auditoria: registra toda edição feita por administrador
create or replace function public.aplicador_audit()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  if public.aplicador_papel() = 'admin' then
    insert into public.aplicador_auditoria (usuario_id, acao, tabela, registro_id, antes, depois)
    values (auth.uid(), 'editou', tg_table_name, old.id::text, to_jsonb(old), to_jsonb(new));
  end if;
  return new;
end $$;

drop trigger if exists aplicador_trg_audit_atend on public.aplicador_atendimentos;
create trigger aplicador_trg_audit_atend after update on public.aplicador_atendimentos
  for each row execute function public.aplicador_audit();
drop trigger if exists aplicador_trg_audit_usr on public.aplicador_usuarios;
create trigger aplicador_trg_audit_usr after update on public.aplicador_usuarios
  for each row execute function public.aplicador_audit();

-- ---------- CHECK-IN / CHECK-OUT ----------
create or replace function public.aplicador_checkin(
  p_local_id bigint, p_lat double precision, p_lng double precision,
  p_prec double precision, p_foto text)
returns public.aplicador_atendimentos
language plpgsql security definer set search_path = public as $$
declare v_loc public.aplicador_locais; v_dist double precision; v_ok boolean; v_row public.aplicador_atendimentos;
begin
  if public.aplicador_papel() is distinct from 'aplicador' then
    raise exception 'Acesso não autorizado.';
  end if;
  select * into v_loc from public.aplicador_locais where id = p_local_id;
  if not found then raise exception 'Local não encontrado.'; end if;
  if not exists (select 1 from public.aplicador_atribuicoes
                 where aplicador_id = auth.uid() and crianca_id = v_loc.crianca_id) then
    raise exception 'Você não está atribuído a esta criança.';
  end if;
  if exists (select 1 from public.aplicador_atendimentos
             where aplicador_id = auth.uid() and status = 'em_andamento') then
    raise exception 'Você já tem um atendimento em andamento.';
  end if;
  v_dist := public.aplicador_dist_m(p_lat, p_lng, v_loc.latitude, v_loc.longitude);
  v_ok := v_dist <= v_loc.raio_metros;
  insert into public.aplicador_atendimentos
    (aplicador_id, crianca_id, local_id, checkin_em, checkin_lat, checkin_lng,
     checkin_precisao_m, checkin_dist_m, checkin_no_local, checkin_foto)
  values (auth.uid(), v_loc.crianca_id, v_loc.id, now(), p_lat, p_lng,
          p_prec, v_dist, v_ok, p_foto)
  returning * into v_row;
  return v_row;
end $$;

create or replace function public.aplicador_checkout(
  p_lat double precision, p_lng double precision, p_prec double precision,
  p_foto text, p_resumo text)
returns public.aplicador_atendimentos
language plpgsql security definer set search_path = public as $$
declare v_at public.aplicador_atendimentos; v_loc public.aplicador_locais;
        v_dist double precision; v_ok boolean; v_resumo text; v_row public.aplicador_atendimentos;
begin
  if public.aplicador_papel() is distinct from 'aplicador' then
    raise exception 'Acesso não autorizado.';
  end if;
  v_resumo := btrim(coalesce(p_resumo, ''));
  if char_length(v_resumo) < 10 or char_length(v_resumo) > 400 then
    raise exception 'O resumo deve ter entre 10 e 400 caracteres.';
  end if;
  select * into v_at from public.aplicador_atendimentos
   where aplicador_id = auth.uid() and status = 'em_andamento' for update;
  if not found then raise exception 'Nenhum atendimento em andamento.'; end if;
  select * into v_loc from public.aplicador_locais where id = v_at.local_id;
  v_dist := public.aplicador_dist_m(p_lat, p_lng, v_loc.latitude, v_loc.longitude);
  v_ok := v_dist <= v_loc.raio_metros;
  update public.aplicador_atendimentos set
    checkout_em = now(), checkout_lat = p_lat, checkout_lng = p_lng,
    checkout_precisao_m = p_prec, checkout_dist_m = v_dist, checkout_no_local = v_ok,
    checkout_foto = p_foto, resumo = v_resumo,
    status = case when v_at.checkin_no_local and v_ok then 'finalizado' else 'revisar' end
  where id = v_at.id
  returning * into v_row;
  return v_row;
end $$;

-- admin libera acesso a alguém que já foi criado em Authentication > Users
create or replace function public.aplicador_admin_vincular(p_email text, p_nome text, p_papel text)
returns void language plpgsql security definer set search_path = public, auth as $$
declare v_id uuid;
begin
  if public.aplicador_papel() is distinct from 'admin' then raise exception 'Apenas administradores.'; end if;
  if p_papel not in ('admin','aplicador','medico') then raise exception 'Papel inválido.'; end if;
  select id into v_id from auth.users where lower(email) = lower(btrim(p_email));
  if v_id is null then
    raise exception 'Esse e-mail ainda não existe em Authentication > Users no Supabase. Crie o usuário lá primeiro.';
  end if;
  insert into public.aplicador_usuarios (id, nome, email, papel)
  values (v_id, btrim(p_nome), lower(btrim(p_email)), p_papel)
  on conflict (id) do update set nome = excluded.nome, papel = excluded.papel, ativo = true;
end $$;

create or replace function public.aplicador_registrar(p_acao text, p_detalhe jsonb)
returns void language sql security definer set search_path = public as $$
  insert into public.aplicador_auditoria (usuario_id, acao, depois)
  select auth.uid(), p_acao, p_detalhe where public.aplicador_papel() is not null
$$;

revoke execute on function public.aplicador_checkin(bigint,double precision,double precision,double precision,text) from public, anon;
revoke execute on function public.aplicador_checkout(double precision,double precision,double precision,text,text) from public, anon;
revoke execute on function public.aplicador_admin_vincular(text,text,text) from public, anon;
revoke execute on function public.aplicador_registrar(text,jsonb) from public, anon;
grant execute on function public.aplicador_checkin(bigint,double precision,double precision,double precision,text) to authenticated;
grant execute on function public.aplicador_checkout(double precision,double precision,double precision,text,text) to authenticated;
grant execute on function public.aplicador_admin_vincular(text,text,text) to authenticated;
grant execute on function public.aplicador_registrar(text,jsonb) to authenticated;
grant execute on function public.aplicador_papel() to authenticated;

-- ---------- GRANTS DE TABELAS ----------
grant select, insert, update, delete on public.aplicador_usuarios to authenticated;
grant select, insert, update, delete on public.aplicador_criancas to authenticated;
grant select, insert, update, delete on public.aplicador_locais to authenticated;
grant select, insert, update, delete on public.aplicador_atribuicoes to authenticated;
grant select, insert, update, delete on public.aplicador_atendimentos to authenticated;
grant select on public.aplicador_auditoria to authenticated;

-- ---------- GRANTS DE SEQUENCES (bigserial) ----------
grant usage, select on sequence public.aplicador_criancas_id_seq to authenticated;
grant usage, select on sequence public.aplicador_locais_id_seq to authenticated;
grant usage, select on sequence public.aplicador_atendimentos_id_seq to authenticated;
grant usage, select on sequence public.aplicador_auditoria_id_seq to authenticated;

-- ---------- SEGURANÇA (RLS) ----------
alter table public.aplicador_usuarios     enable row level security;
alter table public.aplicador_criancas     enable row level security;
alter table public.aplicador_locais       enable row level security;
alter table public.aplicador_atribuicoes  enable row level security;
alter table public.aplicador_atendimentos enable row level security;
alter table public.aplicador_auditoria    enable row level security;

-- usuarios
drop policy if exists aplicador_usr_admin on public.aplicador_usuarios;
create policy aplicador_usr_admin on public.aplicador_usuarios for all to authenticated
  using (public.aplicador_papel() = 'admin') with check (public.aplicador_papel() = 'admin');
drop policy if exists aplicador_usr_proprio on public.aplicador_usuarios;
create policy aplicador_usr_proprio on public.aplicador_usuarios for select to authenticated
  using (id = auth.uid());
drop policy if exists aplicador_usr_medico on public.aplicador_usuarios;
create policy aplicador_usr_medico on public.aplicador_usuarios for select to authenticated
  using (public.aplicador_papel() = 'medico' and id in (
    select a.aplicador_id from public.aplicador_atendimentos a));

-- criancas
drop policy if exists aplicador_cri_admin on public.aplicador_criancas;
create policy aplicador_cri_admin on public.aplicador_criancas for all to authenticated
  using (public.aplicador_papel() = 'admin') with check (public.aplicador_papel() = 'admin');
drop policy if exists aplicador_cri_aplicador on public.aplicador_criancas;
create policy aplicador_cri_aplicador on public.aplicador_criancas for select to authenticated
  using (exists (select 1 from public.aplicador_atribuicoes t
                 where t.crianca_id = aplicador_criancas.id and t.aplicador_id = auth.uid()));
drop policy if exists aplicador_cri_medico on public.aplicador_criancas;
create policy aplicador_cri_medico on public.aplicador_criancas for select to authenticated
  using (public.aplicador_papel() = 'medico' and medico_id = auth.uid());

-- locais
drop policy if exists aplicador_loc_admin on public.aplicador_locais;
create policy aplicador_loc_admin on public.aplicador_locais for all to authenticated
  using (public.aplicador_papel() = 'admin') with check (public.aplicador_papel() = 'admin');
drop policy if exists aplicador_loc_aplicador on public.aplicador_locais;
create policy aplicador_loc_aplicador on public.aplicador_locais for select to authenticated
  using (exists (select 1 from public.aplicador_atribuicoes t
                 where t.crianca_id = aplicador_locais.crianca_id and t.aplicador_id = auth.uid()));
drop policy if exists aplicador_loc_medico on public.aplicador_locais;
create policy aplicador_loc_medico on public.aplicador_locais for select to authenticated
  using (public.aplicador_papel() = 'medico' and exists (
    select 1 from public.aplicador_criancas c
    where c.id = aplicador_locais.crianca_id and c.medico_id = auth.uid()));

-- atribuicoes
drop policy if exists aplicador_atr_admin on public.aplicador_atribuicoes;
create policy aplicador_atr_admin on public.aplicador_atribuicoes for all to authenticated
  using (public.aplicador_papel() = 'admin') with check (public.aplicador_papel() = 'admin');
drop policy if exists aplicador_atr_proprio on public.aplicador_atribuicoes;
create policy aplicador_atr_proprio on public.aplicador_atribuicoes for select to authenticated
  using (aplicador_id = auth.uid());

-- atendimentos
drop policy if exists aplicador_ate_admin on public.aplicador_atendimentos;
create policy aplicador_ate_admin on public.aplicador_atendimentos for all to authenticated
  using (public.aplicador_papel() = 'admin') with check (public.aplicador_papel() = 'admin');
drop policy if exists aplicador_ate_proprio on public.aplicador_atendimentos;
create policy aplicador_ate_proprio on public.aplicador_atendimentos for select to authenticated
  using (aplicador_id = auth.uid());
drop policy if exists aplicador_ate_medico on public.aplicador_atendimentos;
create policy aplicador_ate_medico on public.aplicador_atendimentos for select to authenticated
  using (public.aplicador_papel() = 'medico' and exists (
    select 1 from public.aplicador_criancas c
    where c.id = aplicador_atendimentos.crianca_id and c.medico_id = auth.uid()));

-- auditoria: só admin lê
drop policy if exists aplicador_aud_admin on public.aplicador_auditoria;
create policy aplicador_aud_admin on public.aplicador_auditoria for select to authenticated
  using (public.aplicador_papel() = 'admin');

-- ---------- FOTOS (bucket privado) ----------
insert into storage.buckets (id, name, public)
values ('aplicador-fotos', 'aplicador-fotos', false)
on conflict (id) do nothing;

drop policy if exists aplicador_fotos_insert on storage.objects;
create policy aplicador_fotos_insert on storage.objects for insert to authenticated
  with check (bucket_id = 'aplicador-fotos' and (storage.foldername(name))[1] = auth.uid()::text);
drop policy if exists aplicador_fotos_select on storage.objects;
create policy aplicador_fotos_select on storage.objects for select to authenticated
  using (bucket_id = 'aplicador-fotos' and
         ((storage.foldername(name))[1] = auth.uid()::text or public.aplicador_papel() = 'admin'));
