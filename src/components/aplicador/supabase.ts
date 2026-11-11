import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

// Se as variáveis não existirem, o site NÃO quebra: só a área do aplicador avisa.
export const supabaseConfigurado = Boolean(url && key);

export const supabase = createClient(
  url || 'https://placeholder.supabase.co',
  key || 'placeholder-key',
  { auth: { storageKey: 'behave-aplicador-auth' } }
);

export type Papel = 'admin' | 'aplicador' | 'medico';

export interface Perfil {
  id: string;
  nome: string;
  email: string | null;
  papel: Papel;
  ativo: boolean;
}