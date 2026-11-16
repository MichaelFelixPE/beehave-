-- Revoga explicitamente do role anon todas as permissões nas tabelas do módulo Aplicador.
-- Não altera tabelas, colunas, funções, triggers, policies, bucket ou código frontend.
-- Mantém intactos os grants para authenticated.

revoke all on public.aplicador_usuarios from anon;
revoke all on public.aplicador_criancas from anon;
revoke all on public.aplicador_locais from anon;
revoke all on public.aplicador_atribuicoes from anon;
revoke all on public.aplicador_atendimentos from anon;
revoke all on public.aplicador_auditoria from anon;

-- Revoga também privilégios de sequências (caso o anon os tenha herdado).
revoke all on sequence public.aplicador_criancas_id_seq from anon;
revoke all on sequence public.aplicador_locais_id_seq from anon;
revoke all on sequence public.aplicador_atendimentos_id_seq from anon;
revoke all on sequence public.aplicador_auditoria_id_seq from anon;
