do $$
declare r record;
begin
  for r in
    select policyname, tablename from pg_policies
    where schemaname = 'public' and tablename like 'aplicador\_%'
  loop
    execute format('drop policy %I on public.%I', r.policyname, r.tablename);
  end loop;
end $$;

drop table if exists public.aplicador_atendimentos;
drop table if exists public.aplicador_atribuicoes;
drop table if exists public.aplicador_locais;
drop table if exists public.aplicador_criancas;
drop table if exists public.aplicador_auditoria;
drop table if exists public.aplicador_usuarios;

drop function if exists public.aplicador_current_papel();
drop function if exists public.aplicador_is_admin();
drop function if exists public.aplicador_is_assigned_to(uuid);
drop function if exists public.aplicador_is_medico_of(uuid);
drop function if exists public.aplicador_set_updated_at();
