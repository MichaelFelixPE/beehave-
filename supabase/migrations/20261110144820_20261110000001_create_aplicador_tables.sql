/*
# Criar tabelas da área do aplicador (Etapa 1)

1. Novas Tabelas (todas com prefixo "aplicador_" para não colidir com tabelas existentes)

- `aplicador_usuarios`
  - `id` (uuid, PK, ligado a auth.users)
  - `nome` (text, obrigatório)
  - `papel` (text, obrigatório — 'admin', 'aplicador' ou 'medico')
  - `ativo` (boolean, padrão true)
  - `created_at` (timestamptz, padrão now())
  - `updated_at` (timestamptz, padrão now())

- `aplicador_criancas`
  - `id` (uuid, PK)
  - `nome` (text, obrigatório)
  - `medico_id` (uuid, FK para aplicador_usuarios, opcional — médico responsável pela criança)
  - `ativo` (boolean, padrão true)
  - `created_at` / `updated_at`

- `aplicador_locais`
  - `id` (uuid, PK)
  - `nome` (text, obrigatório)
  - `endereco` (text, opcional)
  - `latitude` (double precision, obrigatório)
  - `longitude` (double precision, obrigatório)
  - `raio_m` (integer, padrão 200 — raio aceitável em metros)
  - `ativo` (boolean, padrão true)
  - `created_at` / `updated_at`

- `aplicador_atribuicoes`
  - `id` (uuid, PK)
  - `aplicador_id` (uuid, FK para aplicador_usuarios)
  - `crianca_id` (uuid, FK para aplicador_criancas)
  - `local_id` (uuid, FK para aplicador_locais)
  - `ativo` (boolean, padrão true)
  - `created_at` / `updated_at`
  - Restrição única: (aplicador_id, crianca_id) — um aplicador não pode ter duas atribuições para a mesma criança

- `aplicador_atendimentos`
  - Metadados apenas — NÃO guarda texto do resumo nem fotos
  - `id` (uuid, PK)
  - `aplicador_id` (uuid, FK)
  - `crianca_id` (uuid, FK)
  - `local_id` (uuid, FK)
  - `checkin_em` (timestamptz) / `checkin_lat` / `checkin_lng` / `checkin_precisao_m` / `checkin_dist_m` / `checkin_no_local` (boolean)
  - `checkout_em` (timestamptz) / `checkout_lat` / `checkout_lng` / `checkout_precisao_m` / `checkout_dist_m` / `checkout_no_local` (boolean)
  - `duracao_min` (integer, calculado)
  - `status` (text: 'em_andamento', 'finalizado', 'revisar')
  - `drive_resumo_id` / `drive_resumo_url` / `drive_foto_checkin_id` / `drive_foto_checkout_id` / `drive_status` (text: 'pendente', 'enviado', 'erro')
  - `created_at` / `updated_at`
  - Índice único parcial: só 1 atendimento 'em_andamento' por aplicador

- `aplicador_auditoria`
  - `id` (uuid, PK)
  - `usuario_id` (uuid, FK para aplicador_usuarios, opcional)
  - `acao` (text — ex: 'login', 'export_csv', 'editar_atendimento')
  - `tabela` (text — nome da tabela afetada)
  - `registro_id` (uuid, opcional)
  - `valor_antigo` (jsonb, opcional)
  - `valor_novo` (jsonb, opcional)
  - `created_at` (timestamptz, padrão now())

2. Funções Auxiliares (SECURITY DEFINER)
- `aplicador_current_papel()` — retorna o papel do usuário autenticado
- `aplicador_is_admin()` — boolean, true se o usuário é admin
- `aplicador_is_assigned_to(p_crianca_id uuid)` — boolean, true se o aplicador tem atribuição ativa para a criança
- `aplicador_is_medico_of(p_crianca_id uuid)` — boolean, true se o médico é responsável pela criança

3. Segurança (RLS em todas as tabelas)
- `aplicador_usuarios`: admin vê todos; aplicador/medico veem apenas o próprio registro. INSERT/UPDATE/DELETE só admin.
- `aplicador_criancas`: admin vê todos; aplicador vê as crianças atribuídas a ele; medico vê as crianças ligadas a ele. INSERT/UPDATE/DELETE só admin.
- `aplicador_locais`: admin vê todos; aplicador vê os locais das suas atribuições; medico vê os locais das crianças ligadas a ele. INSERT/UPDATE/DELETE só admin.
- `aplicador_atribuicoes`: admin vê todos; aplicador vê as suas; medico vê as das crianças ligadas a ele. INSERT/UPDATE/DELETE só admin.
- `aplicador_atendimentos`: admin vê/edita todos; aplicador vê/cria/edita só os das crianças atribuídas a ele; medico só lê os das crianças ligadas a ele. DELETE só admin.
- `aplicador_auditoria`: admin vê todos e insere. Sem update/delete.
- Todas as tabelas concedem acesso a `authenticated` e `service_role` conforme necessário.

4. Índices
- Índice único em aplicador_atribuicoes (aplicador_id, crianca_id)
- Índice único parcial em aplicador_atendimentos (aplicador_id) WHERE status = 'em_andamento'
- Índices em aplicador_atendimentos (aplicador_id), (crianca_id), (status), (checkin_em)
*/

-- ============================================================
-- TABELAS
-- ============================================================

CREATE TABLE IF NOT EXISTS aplicador_usuarios (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  nome text NOT NULL,
  papel text NOT NULL CHECK (papel IN ('admin', 'aplicador', 'medico')),
  ativo boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS aplicador_locais (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nome text NOT NULL,
  endereco text,
  latitude double precision NOT NULL,
  longitude double precision NOT NULL,
  raio_m integer NOT NULL DEFAULT 200,
  ativo boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS aplicador_criancas (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nome text NOT NULL,
  medico_id uuid REFERENCES aplicador_usuarios(id) ON DELETE SET NULL,
  ativo boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS aplicador_atribuicoes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  aplicador_id uuid NOT NULL REFERENCES aplicador_usuarios(id) ON DELETE CASCADE,
  crianca_id uuid NOT NULL REFERENCES aplicador_criancas(id) ON DELETE CASCADE,
  local_id uuid NOT NULL REFERENCES aplicador_locais(id) ON DELETE CASCADE,
  ativo boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (aplicador_id, crianca_id)
);

CREATE TABLE IF NOT EXISTS aplicador_atendimentos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  aplicador_id uuid NOT NULL REFERENCES aplicador_usuarios(id) ON DELETE CASCADE,
  crianca_id uuid NOT NULL REFERENCES aplicador_criancas(id) ON DELETE CASCADE,
  local_id uuid NOT NULL REFERENCES aplicador_locais(id) ON DELETE CASCADE,
  checkin_em timestamptz,
  checkin_lat double precision,
  checkin_lng double precision,
  checkin_precisao_m double precision,
  checkin_dist_m double precision,
  checkin_no_local boolean,
  checkout_em timestamptz,
  checkout_lat double precision,
  checkout_lng double precision,
  checkout_precisao_m double precision,
  checkout_dist_m double precision,
  checkout_no_local boolean,
  duracao_min integer,
  status text NOT NULL DEFAULT 'em_andamento' CHECK (status IN ('em_andamento', 'finalizado', 'revisar')),
  drive_resumo_id text,
  drive_resumo_url text,
  drive_foto_checkin_id text,
  drive_foto_checkout_id text,
  drive_status text NOT NULL DEFAULT 'pendente' CHECK (drive_status IN ('pendente', 'enviado', 'erro')),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS aplicador_auditoria (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  usuario_id uuid REFERENCES aplicador_usuarios(id) ON DELETE SET NULL,
  acao text NOT NULL,
  tabela text,
  registro_id uuid,
  valor_antigo jsonb,
  valor_novo jsonb,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- ============================================================
-- ÍNDICES
-- ============================================================

CREATE INDEX IF NOT EXISTS idx_aplicador_atribuicoes_aplicador ON aplicador_atribuicoes (aplicador_id);
CREATE INDEX IF NOT EXISTS idx_aplicador_atribuicoes_crianca ON aplicador_atribuicoes (crianca_id);

CREATE UNIQUE INDEX IF NOT EXISTS idx_aplicador_atendimentos_em_andamento_por_aplicador
  ON aplicador_atendimentos (aplicador_id)
  WHERE status = 'em_andamento';

CREATE INDEX IF NOT EXISTS idx_aplicador_atendimentos_aplicador ON aplicador_atendimentos (aplicador_id);
CREATE INDEX IF NOT EXISTS idx_aplicador_atendimentos_crianca ON aplicador_atendimentos (crianca_id);
CREATE INDEX IF NOT EXISTS idx_aplicador_atendimentos_status ON aplicador_atendimentos (status);
CREATE INDEX IF NOT EXISTS idx_aplicador_atendimentos_checkin_em ON aplicador_atendimentos (checkin_em);

CREATE INDEX IF NOT EXISTS idx_aplicador_auditoria_usuario ON aplicador_auditoria (usuario_id);
CREATE INDEX IF NOT EXISTS idx_aplicador_auditoria_created_at ON aplicador_auditoria (created_at);

-- ============================================================
-- FUNÇÕES AUXILIARES (SECURITY DEFINER — bypassa RLS para leitura de papel)
-- ============================================================

CREATE OR REPLACE FUNCTION aplicador_current_papel()
RETURNS text
LANGUAGE sql
SECURITY DEFINER
STABLE
SET search_path = public
AS $$
  SELECT papel FROM aplicador_usuarios WHERE id = auth.uid();
$$;

CREATE OR REPLACE FUNCTION aplicador_is_admin()
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
STABLE
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM aplicador_usuarios
    WHERE id = auth.uid() AND papel = 'admin' AND ativo = true
  );
$$;

CREATE OR REPLACE FUNCTION aplicador_is_assigned_to(p_crianca_id uuid)
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
STABLE
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM aplicador_atribuicoes
    WHERE aplicador_id = auth.uid()
      AND crianca_id = p_crianca_id
      AND ativo = true
  );
$$;

CREATE OR REPLACE FUNCTION aplicador_is_medico_of(p_crianca_id uuid)
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
STABLE
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM aplicador_criancas
    WHERE id = p_crianca_id
      AND medico_id = auth.uid()
      AND ativo = true
  );
$$;

-- Revogar EXECUTE de PUBLIC e anon, conceder só a authenticated
REVOKE EXECUTE ON FUNCTION aplicador_current_papel() FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION aplicador_current_papel() TO authenticated;

REVOKE EXECUTE ON FUNCTION aplicador_is_admin() FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION aplicador_is_admin() TO authenticated;

REVOKE EXECUTE ON FUNCTION aplicador_is_assigned_to(uuid) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION aplicador_is_assigned_to(uuid) TO authenticated;

REVOKE EXECUTE ON FUNCTION aplicador_is_medico_of(uuid) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION aplicador_is_medico_of(uuid) TO authenticated;

-- ============================================================
-- RLS — aplicador_usuarios
-- ============================================================

ALTER TABLE aplicador_usuarios ENABLE ROW LEVEL SECURITY;

GRANT SELECT, INSERT, UPDATE, DELETE ON aplicador_usuarios TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON aplicador_usuarios TO service_role;

DROP POLICY IF EXISTS "aplicador_usuarios_select" ON aplicador_usuarios;
CREATE POLICY "aplicador_usuarios_select" ON aplicador_usuarios FOR SELECT
  TO authenticated USING (
    aplicador_is_admin() OR auth.uid() = id
  );

DROP POLICY IF EXISTS "aplicador_usuarios_insert" ON aplicador_usuarios;
CREATE POLICY "aplicador_usuarios_insert" ON aplicador_usuarios FOR INSERT
  TO authenticated WITH CHECK (aplicador_is_admin());

DROP POLICY IF EXISTS "aplicador_usuarios_update" ON aplicador_usuarios;
CREATE POLICY "aplicador_usuarios_update" ON aplicador_usuarios FOR UPDATE
  TO authenticated USING (aplicador_is_admin()) WITH CHECK (aplicador_is_admin());

DROP POLICY IF EXISTS "aplicador_usuarios_delete" ON aplicador_usuarios;
CREATE POLICY "aplicador_usuarios_delete" ON aplicador_usuarios FOR DELETE
  TO authenticated USING (aplicador_is_admin());

-- ============================================================
-- RLS — aplicador_criancas
-- ============================================================

ALTER TABLE aplicador_criancas ENABLE ROW LEVEL SECURITY;

GRANT SELECT, INSERT, UPDATE, DELETE ON aplicador_criancas TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON aplicador_criancas TO service_role;

DROP POLICY IF EXISTS "aplicador_criancas_select" ON aplicador_criancas;
CREATE POLICY "aplicador_criancas_select" ON aplicador_criancas FOR SELECT
  TO authenticated USING (
    aplicador_is_admin()
    OR aplicador_is_assigned_to(id)
    OR aplicador_is_medico_of(id)
  );

DROP POLICY IF EXISTS "aplicador_criancas_insert" ON aplicador_criancas;
CREATE POLICY "aplicador_criancas_insert" ON aplicador_criancas FOR INSERT
  TO authenticated WITH CHECK (aplicador_is_admin());

DROP POLICY IF EXISTS "aplicador_criancas_update" ON aplicador_criancas;
CREATE POLICY "aplicador_criancas_update" ON aplicador_criancas FOR UPDATE
  TO authenticated USING (aplicador_is_admin()) WITH CHECK (aplicador_is_admin());

DROP POLICY IF EXISTS "aplicador_criancas_delete" ON aplicador_criancas;
CREATE POLICY "aplicador_criancas_delete" ON aplicador_criancas FOR DELETE
  TO authenticated USING (aplicador_is_admin());

-- ============================================================
-- RLS — aplicador_locais
-- ============================================================

ALTER TABLE aplicador_locais ENABLE ROW LEVEL SECURITY;

GRANT SELECT, INSERT, UPDATE, DELETE ON aplicador_locais TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON aplicador_locais TO service_role;

DROP POLICY IF EXISTS "aplicador_locais_select" ON aplicador_locais;
CREATE POLICY "aplicador_locais_select" ON aplicador_locais FOR SELECT
  TO authenticated USING (
    aplicador_is_admin()
    OR EXISTS (
      SELECT 1 FROM aplicador_atribuicoes a
      WHERE a.local_id = aplicador_locais.id
        AND a.aplicador_id = auth.uid()
        AND a.ativo = true
    )
    OR EXISTS (
      SELECT 1 FROM aplicador_criancas c
      JOIN aplicador_atribuicoes a ON a.crianca_id = c.id
      WHERE c.medico_id = auth.uid()
        AND a.local_id = aplicador_locais.id
        AND c.ativo = true
        AND a.ativo = true
    )
  );

DROP POLICY IF EXISTS "aplicador_locais_insert" ON aplicador_locais;
CREATE POLICY "aplicador_locais_insert" ON aplicador_locais FOR INSERT
  TO authenticated WITH CHECK (aplicador_is_admin());

DROP POLICY IF EXISTS "aplicador_locais_update" ON aplicador_locais;
CREATE POLICY "aplicador_locais_update" ON aplicador_locais FOR UPDATE
  TO authenticated USING (aplicador_is_admin()) WITH CHECK (aplicador_is_admin());

DROP POLICY IF EXISTS "aplicador_locais_delete" ON aplicador_locais;
CREATE POLICY "aplicador_locais_delete" ON aplicador_locais FOR DELETE
  TO authenticated USING (aplicador_is_admin());

-- ============================================================
-- RLS — aplicador_atribuicoes
-- ============================================================

ALTER TABLE aplicador_atribuicoes ENABLE ROW LEVEL SECURITY;

GRANT SELECT, INSERT, UPDATE, DELETE ON aplicador_atribuicoes TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON aplicador_atribuicoes TO service_role;

DROP POLICY IF EXISTS "aplicador_atribuicoes_select" ON aplicador_atribuicoes;
CREATE POLICY "aplicador_atribuicoes_select" ON aplicador_atribuicoes FOR SELECT
  TO authenticated USING (
    aplicador_is_admin()
    OR aplicador_id = auth.uid()
    OR EXISTS (
      SELECT 1 FROM aplicador_criancas c
      WHERE c.id = aplicador_atribuicoes.crianca_id
        AND c.medico_id = auth.uid()
    )
  );

DROP POLICY IF EXISTS "aplicador_atribuicoes_insert" ON aplicador_atribuicoes;
CREATE POLICY "aplicador_atribuicoes_insert" ON aplicador_atribuicoes FOR INSERT
  TO authenticated WITH CHECK (aplicador_is_admin());

DROP POLICY IF EXISTS "aplicador_atribuicoes_update" ON aplicador_atribuicoes;
CREATE POLICY "aplicador_atribuicoes_update" ON aplicador_atribuicoes FOR UPDATE
  TO authenticated USING (aplicador_is_admin()) WITH CHECK (aplicador_is_admin());

DROP POLICY IF EXISTS "aplicador_atribuicoes_delete" ON aplicador_atribuicoes;
CREATE POLICY "aplicador_atribuicoes_delete" ON aplicador_atribuicoes FOR DELETE
  TO authenticated USING (aplicador_is_admin());

-- ============================================================
-- RLS — aplicador_atendimentos
-- ============================================================

ALTER TABLE aplicador_atendimentos ENABLE ROW LEVEL SECURITY;

GRANT SELECT, INSERT, UPDATE ON aplicador_atendimentos TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON aplicador_atendimentos TO service_role;

DROP POLICY IF EXISTS "aplicador_atendimentos_select" ON aplicador_atendimentos;
CREATE POLICY "aplicador_atendimentos_select" ON aplicador_atendimentos FOR SELECT
  TO authenticated USING (
    aplicador_is_admin()
    OR (aplicador_id = auth.uid() AND aplicador_is_assigned_to(crianca_id))
    OR aplicador_is_medico_of(crianca_id)
  );

DROP POLICY IF EXISTS "aplicador_atendimentos_insert" ON aplicador_atendimentos;
CREATE POLICY "aplicador_atendimentos_insert" ON aplicador_atendimentos FOR INSERT
  TO authenticated WITH CHECK (
    aplicador_is_admin()
    OR (aplicador_id = auth.uid() AND aplicador_is_assigned_to(crianca_id))
  );

DROP POLICY IF EXISTS "aplicador_atendimentos_update" ON aplicador_atendimentos;
CREATE POLICY "aplicador_atendimentos_update" ON aplicador_atendimentos FOR UPDATE
  TO authenticated USING (
    aplicador_is_admin()
    OR (aplicador_id = auth.uid() AND aplicador_is_assigned_to(crianca_id))
  )
  WITH CHECK (
    aplicador_is_admin()
    OR (aplicador_id = auth.uid() AND aplicador_is_assigned_to(crianca_id))
  );

DROP POLICY IF EXISTS "aplicador_atendimentos_delete" ON aplicador_atendimentos;
CREATE POLICY "aplicador_atendimentos_delete" ON aplicador_atendimentos FOR DELETE
  TO authenticated USING (aplicador_is_admin());

-- ============================================================
-- RLS — aplicador_auditoria
-- ============================================================

ALTER TABLE aplicador_auditoria ENABLE ROW LEVEL SECURITY;

GRANT SELECT, INSERT ON aplicador_auditoria TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON aplicador_auditoria TO service_role;

DROP POLICY IF EXISTS "aplicador_auditoria_select" ON aplicador_auditoria;
CREATE POLICY "aplicador_auditoria_select" ON aplicador_auditoria FOR SELECT
  TO authenticated USING (aplicador_is_admin());

DROP POLICY IF EXISTS "aplicador_auditoria_insert" ON aplicador_auditoria;
CREATE POLICY "aplicador_auditoria_insert" ON aplicador_auditoria FOR INSERT
  TO authenticated WITH CHECK (auth.uid() = usuario_id OR aplicador_is_admin());

-- ============================================================
-- TRIGGER updated_at
-- ============================================================

CREATE OR REPLACE FUNCTION aplicador_set_updated_at()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_aplicador_usuarios_updated_at ON aplicador_usuarios;
CREATE TRIGGER trg_aplicador_usuarios_updated_at
  BEFORE UPDATE ON aplicador_usuarios
  FOR EACH ROW EXECUTE FUNCTION aplicador_set_updated_at();

DROP TRIGGER IF EXISTS trg_aplicador_criancas_updated_at ON aplicador_criancas;
CREATE TRIGGER trg_aplicador_criancas_updated_at
  BEFORE UPDATE ON aplicador_criancas
  FOR EACH ROW EXECUTE FUNCTION aplicador_set_updated_at();

DROP TRIGGER IF EXISTS trg_aplicador_locais_updated_at ON aplicador_locais;
CREATE TRIGGER trg_aplicador_locais_updated_at
  BEFORE UPDATE ON aplicador_locais
  FOR EACH ROW EXECUTE FUNCTION aplicador_set_updated_at();

DROP TRIGGER IF EXISTS trg_aplicador_atribuicoes_updated_at ON aplicador_atribuicoes;
CREATE TRIGGER trg_aplicador_atribuicoes_updated_at
  BEFORE UPDATE ON aplicador_atribuicoes
  FOR EACH ROW EXECUTE FUNCTION aplicador_set_updated_at();

DROP TRIGGER IF EXISTS trg_aplicador_atendimentos_updated_at ON aplicador_atendimentos;
CREATE TRIGGER trg_aplicador_atendimentos_updated_at
  BEFORE UPDATE ON aplicador_atendimentos
  FOR EACH ROW EXECUTE FUNCTION aplicador_set_updated_at();

REVOKE EXECUTE ON FUNCTION aplicador_set_updated_at() FROM PUBLIC, anon;
