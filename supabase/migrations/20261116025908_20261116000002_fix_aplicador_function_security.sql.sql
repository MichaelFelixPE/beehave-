/*
# Fix search_path and EXECUTE grants on aplicador functions

## Changes
1. Set `search_path = public` on `aplicador_calc_duracao` and `aplicador_dist_m` (trigger + immutable helper).
2. Revoke EXECUTE from public, anon on `aplicador_papel` and `aplicador_audit` (both SECURITY DEFINER).
3. Re-grant EXECUTE on `aplicador_papel` to authenticated (audit is trigger-only, no direct grant needed).
*/

create or replace function public.aplicador_dist_m(
  lat1 double precision, lng1 double precision, lat2 double precision, lng2 double precision)
returns double precision language sql immutable set search_path = public as $$
  select 2 * 6371000 * asin(sqrt(
    power(sin(radians(lat2 - lat1) / 2), 2) +
    cos(radians(lat1)) * cos(radians(lat2)) * power(sin(radians(lng2 - lng1) / 2), 2)))
$$;

create or replace function public.aplicador_calc_duracao()
returns trigger language plpgsql set search_path = public as $$
begin
  if new.checkout_em is not null then
    new.duracao_min := greatest(1, round(extract(epoch from (new.checkout_em - new.checkin_em)) / 60));
  else
    new.duracao_min := null;
  end if;
  return new;
end $$;

-- recriar triggers que dependem da função alterada
drop trigger if exists aplicador_trg_duracao on public.aplicador_atendimentos;
create trigger aplicador_trg_duracao before insert or update on public.aplicador_atendimentos
  for each row execute function public.aplicador_calc_duracao();

-- revoke execute on SECURITY DEFINER functions que ainda estavam abertas
revoke execute on function public.aplicador_papel() from public, anon;
revoke execute on function public.aplicador_audit() from public, anon;
