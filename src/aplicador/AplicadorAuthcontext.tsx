import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { Session, User } from '@supabase/supabase-js';
import { aplicadorSupabase } from '../utils/aplicadorSupabaseClient';

type AplicadorPapel = 'admin' | 'aplicador' | 'medico' | null;

interface AplicadorUsuario {
  id: string;
  nome: string;
  papel: AplicadorPapel;
  ativo: boolean;
}

interface AplicadorAuthContextValue {
  user: User | null;
  session: Session | null;
  perfil: AplicadorUsuario | null;
  loading: boolean;
  signIn: (email: string, senha: string) => Promise<{ error: string | null }>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<{ error: string | null }>;
  refreshPerfil: () => Promise<void>;
}

const AplicadorAuthContext = createContext<AplicadorAuthContextValue | undefined>(undefined);

export const AplicadorAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [perfil, setPerfil] = useState<AplicadorUsuario | null>(null);
  const [loading, setLoading] = useState(true);

  const carregarPerfil = useCallback(async (uid: string) => {
    const { data, error } = await aplicadorSupabase
      .from('aplicador_usuarios')
      .select('id, nome, papel, ativo')
      .eq('id', uid)
      .maybeSingle();

    if (error) {
      setPerfil(null);
      return;
    }

    if (data && data.ativo) {
      setPerfil(data as AplicadorUsuario);
    } else {
      setPerfil(null);
    }
  }, []);

  const refreshPerfil = useCallback(async () => {
    if (user) {
      await carregarPerfil(user.id);
    }
  }, [user, carregarPerfil]);

  useEffect(() => {
    let mounted = true;

    aplicadorSupabase.auth.getSession().then(({ data }) => {
      if (!mounted) return;
      setSession(data.session);
      setUser(data.session?.user ?? null);

      if (data.session?.user) {
        carregarPerfil(data.session.user.id).finally(() => {
          if (mounted) setLoading(false);
        });
      } else {
        setLoading(false);
      }
    });

    const { data: authListener } = aplicadorSupabase.auth.onAuthStateChange((_event, newSession) => {
      (async () => {
        if (!mounted) return;
        setSession(newSession);
        setUser(newSession?.user ?? null);

        if (newSession?.user) {
          await carregarPerfil(newSession.user.id);
        } else {
          setPerfil(null);
        }
        setLoading(false);
      })();
    });

    return () => {
      mounted = false;
      authListener.subscription.unsubscribe();
    };
  }, [carregarPerfil]);

  const signIn = useCallback(async (email: string, senha: string) => {
    const { error } = await aplicadorSupabase.auth.signInWithPassword({
      email,
      password: senha,
    });

    if (error) {
      return { error: traduzirErroAuth(error.message) };
    }
    return { error: null };
  }, []);

  const signOut = useCallback(async () => {
    await aplicadorSupabase.auth.signOut();
    setUser(null);
    setSession(null);
    setPerfil(null);
  }, []);

  const resetPassword = useCallback(async (email: string) => {
    const { error } = await aplicadorSupabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/aplicador`,
    });

    if (error) {
      return { error: traduzirErroAuth(error.message) };
    }
    return { error: null };
  }, []);

  return (
    <AplicadorAuthContext.Provider
      value={{ user, session, perfil, loading, signIn, signOut, resetPassword, refreshPerfil }}
    >
      {children}
    </AplicadorAuthContext.Provider>
  );
};

export const useAplicadorAuth = (): AplicadorAuthContextValue => {
  const ctx = useContext(AplicadorAuthContext);
  if (!ctx) {
    throw new Error('useAplicadorAuth deve ser usado dentro de AplicadorAuthProvider');
  }
  return ctx;
};

function traduzirErroAuth(msg: string): string {
  const m = msg.toLowerCase();
  if (m.includes('invalid login credentials')) return 'E-mail ou senha incorretos.';
  if (m.includes('email not confirmed')) return 'E-mail ainda não confirmado.';
  if (m.includes('user not found')) return 'Usuário não encontrado.';
  if (m.includes('rate limit')) return 'Muitas tentativas. Aguarde alguns instantes e tente novamente.';
  if (m.includes('network')) return 'Sem conexão com a internet. Verifique sua rede.';
  return 'Ocorreu um erro. Tente novamente.';
}
