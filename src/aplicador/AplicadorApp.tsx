import { useEffect, useState } from 'react';
import type { Session } from '@supabase/supabase-js';
import { supabase, supabaseConfigurado } from './supabase';
import type { Perfil } from './supabase';
import AplicadorLogin from './LoginAplicador';
import CheckinPanel from './CheckinPanel';
import AdminPanel from './AdminPanel';
import LogoAbelha from './LogoAbelha';
import { btnSecCls, cardCls } from './util';

const NOME_PAPEL = { admin: 'Administrador', aplicador: 'Aplicador', medico: 'Médico' } as const;

export default function AplicadorApp() {
  const [session, setSession] = useState<Session | null>(null);
  const [perfil, setPerfil] = useState<Perfil | null>(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    if (!supabaseConfigurado) {
      setCarregando(false);
      return;
    }
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      if (!data.session) setCarregando(false);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_evento, s) => {
      setSession(s);
      if (!s) {
        setPerfil(null);
        setCarregando(false);
      }
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  const uid = session?.user.id;

  useEffect(() => {
    if (!uid) return;
    let ativo = true;
    supabase
      .from('aplicador_usuarios')
      .select('*')
      .eq('id', uid)
      .maybeSingle()
      .then(({ data }) => {
        if (!ativo) return;
        setPerfil((data as Perfil | null) ?? null);
        setCarregando(false);
      });
    return () => {
      ativo = false;
    };
  }, [uid]);

  let conteudo;
  if (!supabaseConfigurado) {
    conteudo = (
      <div className={`${cardCls} mx-auto max-w-md text-sm text-gray-700`}>
        A área do aplicador ainda não está configurada (faltam as variáveis VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY).
      </div>
    );
  } else if (carregando) {
    conteudo = <p className="text-center text-gray-500">Carregando…</p>;
  } else if (!session) {
    conteudo = <AplicadorLogin />;
  } else if (!perfil || !perfil.ativo) {
    conteudo = (
      <div className={`${cardCls} mx-auto max-w-md text-center`}>
        <p className="mb-3 text-sm text-gray-700">
          Seu acesso ainda não foi liberado pela Behave. Fale com o administrador.
        </p>
        <button className={btnSecCls} onClick={() => supabase.auth.signOut()}>Sair</button>
      </div>
    );
  } else {
    conteudo = (
      <>
        <header className="mb-5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <LogoAbelha size={36} />
            <div>
              <p className="font-bold text-gray-900">Olá, {perfil.nome.split(' ')[0]}</p>
              <p className="text-xs text-gray-500">{NOME_PAPEL[perfil.papel]}</p>
            </div>
          </div>
          <button className={btnSecCls} onClick={() => supabase.auth.signOut()}>Sair</button>
        </header>
        {perfil.papel === 'aplicador' ? <CheckinPanel perfil={perfil} /> : <AdminPanel perfil={perfil} />}
      </>
    );
  }

  return (
    <div className="min-h-screen bg-amber-50/40 px-4 pb-12 pt-28">
      <div className="mx-auto max-w-5xl">{conteudo}</div>
    </div>
  );
}