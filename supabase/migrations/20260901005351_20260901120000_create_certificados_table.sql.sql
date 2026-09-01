/*
# Criar tabela de certificados

1. Novas Tabelas
- `certificados`
  - `id` (uuid, chave primária, gerado automaticamente)
  - `codigo_certificado` (texto, único e obrigatório — código usado na validação via QR Code/URL)
  - `nome` (texto, obrigatório — nome da pessoa certificada)
  - `curso` (texto, obrigatório — nome do curso concluído)
  - `carga_horaria` (texto, obrigatório — ex: "60 horas")
  - `data_conclusao` (data — data em que o curso foi concluído)
  - `data_emissao` (data — data em que o certificado foi emitido)
  - `status` (texto, padrão 'valido' — pode ser 'valido', 'invalido', 'revogado')
  - `created_at` (timestamp, preenchido automaticamente)
  - `updated_at` (timestamp, atualizado automaticamente)

2. Segurança
- RLS habilitado na tabela `certificados`.
- Como o app não tem tela de login, as políticas permitem leitura pública (anon + authenticated)
  para que a página de validação possa consultar certificados pela chave anônima.
- Inserção, alteração e exclusão também permitidas para anon + authenticated
  (a área administrativa ainda não existe; quando for criada, essas permissões
  deverão ser restritas a usuários autenticados com role administrativa).

3. Índices
- Índice único em `codigo_certificado` para consultas rápidas na validação.
- Índice em `nome` para busca por nome.
*/

CREATE TABLE IF NOT EXISTS certificados (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  codigo_certificado text UNIQUE NOT NULL,
  nome text NOT NULL,
  curso text NOT NULL,
  carga_horaria text NOT NULL,
  data_conclusao date,
  data_emissao date DEFAULT CURRENT_DATE,
  status text NOT NULL DEFAULT 'valido',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE certificados ENABLE ROW LEVEL SECURITY;

-- SELECT: leitura pública (necessária para a página de validação de certificados)
DROP POLICY IF EXISTS "anon_select_certificados" ON certificados;
CREATE POLICY "anon_select_certificados" ON certificados FOR SELECT
  TO anon, authenticated USING (true);

-- INSERT: permitido para anon + authenticated (temporário até criar área admin)
DROP POLICY IF EXISTS "anon_insert_certificados" ON certificados;
CREATE POLICY "anon_insert_certificados" ON certificados FOR INSERT
  TO anon, authenticated WITH CHECK (true);

-- UPDATE: permitido para anon + authenticated (temporário até criar área admin)
DROP POLICY IF EXISTS "anon_update_certificados" ON certificados;
CREATE POLICY "anon_update_certificados" ON certificados FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

-- DELETE: permitido para anon + authenticated (temporário até criar área admin)
DROP POLICY IF EXISTS "anon_delete_certificados" ON certificados;
CREATE POLICY "anon_delete_certificados" ON certificados FOR DELETE
  TO anon, authenticated USING (true);

-- Índices para consultas frequentes
CREATE INDEX IF NOT EXISTS idx_certificados_codigo ON certificados (codigo_certificado);
CREATE INDEX IF NOT EXISTS idx_certificados_nome ON certificados (nome);
