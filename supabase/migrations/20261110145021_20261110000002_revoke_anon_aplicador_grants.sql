/*
# Revoke anon grants on aplicador_ tables

The aplicador area requires sign-in, so anon should have no table-level privileges.
All policies target TO authenticated only. Revoking anon ensures least privilege.
Also revoking DELETE from authenticated on aplicador_atendimentos (only service_role/admin via RLS can delete).
*/

REVOKE ALL ON aplicador_usuarios FROM anon;
REVOKE ALL ON aplicador_criancas FROM anon;
REVOKE ALL ON aplicador_locais FROM anon;
REVOKE ALL ON aplicador_atribuicoes FROM anon;
REVOKE ALL ON aplicador_atendimentos FROM anon;
REVOKE ALL ON aplicador_auditoria FROM anon;

REVOKE DELETE ON aplicador_atendimentos FROM authenticated;
