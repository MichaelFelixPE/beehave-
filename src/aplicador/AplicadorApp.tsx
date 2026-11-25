import { useCallback, useEffect, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { createClient } from '@supabase/supabase-js';
import type { Session } from '@supabase/supabase-js';

// ARQUIVO ÚNICO: contém toda a área do aplicador (login, check-in, painel do admin).
// Para trocar o logo, altere a linha CAMINHO_LOGO mais abaixo.

// ===== supabase.ts =====
const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

// Se as variáveis não existirem, o site NÃO quebra: só a área do aplicador avisa.
const supabaseConfigurado = Boolean(url && key);

const supabase = createClient(
  url || 'https://placeholder.supabase.co',
  key || 'placeholder-key',
  { auth: { storageKey: 'behave-aplicador-auth' } }
);

type Papel = 'admin' | 'aplicador' | 'medico';

interface Perfil {
  id: string;
  nome: string;
  email: string | null;
  papel: Papel;
  ativo: boolean;
}

// ===== util.ts =====
const inputCls =
  'w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-400';
const btnCls =
  'rounded-lg bg-amber-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-amber-600 disabled:cursor-not-allowed disabled:opacity-50';
const btnSecCls =
  'rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50';
const btnDangerCls =
  'rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50';
const cardCls = 'rounded-2xl border border-gray-200 bg-white p-5 shadow-sm';
const labelCls = 'mb-1 block text-sm font-medium text-gray-700';

interface Posicao {
  lat: number;
  lng: number;
  prec: number;
}

function obterPosicao(): Promise<Posicao> {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Este aparelho não oferece localização.'));
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (p) => resolve({ lat: p.coords.latitude, lng: p.coords.longitude, prec: p.coords.accuracy }),
      (e) =>
        reject(
          new Error(
            e.code === 1
              ? 'Permissão de localização negada. Ative a localização no navegador e tente de novo.'
              : 'Não foi possível obter a localização. Tente em um local aberto.'
          )
        ),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 0 }
    );
  });
}

function fmtDataHora(iso: string | null): string {
  if (!iso) return '—';
  return new Date(iso).toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });
}

function fmtDuracao(seg: number): string {
  const p = (n: number) => String(n).padStart(2, '0');
  return `${p(Math.floor(seg / 3600))}:${p(Math.floor((seg % 3600) / 60))}:${p(seg % 60)}`;
}

function paraInputLocal(iso: string | null): string {
  if (!iso) return '';
  const d = new Date(iso);
  const p = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}T${p(d.getHours())}:${p(d.getMinutes())}`;
}

function msgErro(e: unknown): string {
  return e instanceof Error ? e.message : 'Erro inesperado. Tente novamente.';
}