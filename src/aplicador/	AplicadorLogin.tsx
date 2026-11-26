import { useState } from 'react';
import type { FormEvent } from 'react';
import { supabase } from './supabase';
import LogoAbelha from './LogoAbelha';
import { btnCls, cardCls, inputCls, labelCls } from './util';

export default function AplicadorLogin() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [busy, setBusy] = useState(false);

  async function entrar(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    setErro('');
    const { error } = await supabase.auth.signInWithPassword({ email: email.trim(), password: senha });
    if (error) setErro('E-mail ou senha incorretos.');
    setBusy(false);
  }

  return (
    <div className={`${cardCls} mx-auto max-w-sm`}>
      <div className="mb-4 flex items-center gap-3">
        <LogoAbelha size={40} />
        <div>
          <h1 className="text-xl font-bold text-gray-900">Área do aplicador</h1>
          <p className="text-sm text-gray-500">Acesso restrito à equipe Behave</p>
        </div>
      </div>
      <form onSubmit={entrar} className="space-y-3">
        <div>
          <label htmlFor="ap-email" className={labelCls}>E-mail</label>
          <input id="ap-email" type="email" required autoComplete="username" className={inputCls}
            value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="ap-senha" className={labelCls}>Senha</label>
          <input id="ap-senha" type="password" required autoComplete="current-password" className={inputCls}
            value={senha} onChange={(e) => setSenha(e.target.value)} />
        </div>
        {erro && <p role="alert" className="text-sm text-red-600">{erro}</p>}
        <button type="submit" disabled={busy} className={`${btnCls} w-full`}>
          {busy ? 'Entrando…' : 'Entrar'}
        </button>
        <p className="text-center text-xs text-gray-500">
          Esqueceu a senha? Peça ao administrador da Behave para redefinir.
        </p>
      </form>
    </div>
  );
}