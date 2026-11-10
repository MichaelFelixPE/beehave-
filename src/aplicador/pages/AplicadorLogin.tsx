import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, ArrowLeft, AlertCircle, CheckCircle } from 'lucide-react';
import { useAplicadorAuth } from '../AplicadorAuthContext';
import LogoAbelha from '../components/LogoAbelha';

const AplicadorLogin: React.FC = () => {
  const { signIn, resetPassword } = useAplicadorAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [erro, setErro] = useState<string | null>(null);
  const [enviando, setEnviando] = useState(false);

  const [modoRecuperar, setModoRecuperar] = useState(false);
  const [emailRecuperar, setEmailRecuperar] = useState('');
  const [recuperarEnviado, setRecuperarEnviado] = useState(false);
  const [recuperarErro, setRecuperarErro] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro(null);
    setEnviando(true);

    const { error } = await signIn(email.trim(), senha);
    setEnviando(false);

    if (error) {
      setErro(error);
    } else {
      navigate('/aplicador/inicio');
    }
  };

  const handleRecuperar = async (e: React.FormEvent) => {
    e.preventDefault();
    setRecuperarErro(null);
    setEnviando(true);

    const { error } = await resetPassword(emailRecuperar.trim());
    setEnviando(false);

    if (error) {
      setRecuperarErro(error);
    } else {
      setRecuperarEnviado(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#0a0a0a' }}>
      {/* Topo */}
      <div style={{ background: '#F0B429', height: '4px', width: '100%' }} />

      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="bg-white/10 rounded-2xl p-4 mb-4">
            <LogoAbelha size={56} />
          </div>
          <h1 className="text-white text-2xl font-bold tracking-tight">Área do Aplicador</h1>
          <p className="text-gray-400 text-sm mt-1">Behave — Soluções Comportamentais</p>
        </div>

        {!modoRecuperar ? (
          /* Login */
          <div className="w-full max-w-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              {erro && (
                <div
                  className="flex items-start gap-2 rounded-lg px-4 py-3 text-sm"
                  style={{ background: 'rgba(239,68,68,0.15)', color: '#fca5a5' }}
                >
                  <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
                  <span>{erro}</span>
                </div>
              )}

              <div>
                <label className="block text-gray-300 text-sm mb-1.5">E-mail</label>
                <div className="relative">
                  <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu@email.com"
                    className="w-full rounded-lg border border-gray-700 bg-gray-900 text-white pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-yellow-500 transition-colors"
                    autoComplete="email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm mb-1.5">Senha</label>
                <div className="relative">
                  <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    type={mostrarSenha ? 'text' : 'password'}
                    required
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    placeholder="••••••••"
                    className="w-full rounded-lg border border-gray-700 bg-gray-900 text-white pl-10 pr-10 py-3 text-sm focus:outline-none focus:border-yellow-500 transition-colors"
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={() => setMostrarSenha(!mostrarSenha)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                    aria-label={mostrarSenha ? 'Ocultar senha' : 'Mostrar senha'}
                  >
                    {mostrarSenha ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={enviando}
                className="w-full rounded-lg font-bold text-black py-3 text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: enviando ? '#666' : '#F0B429',
                  transition: 'background 0.2s, transform 0.1s',
                }}
                onMouseEnter={(e) => { if (!enviando) e.currentTarget.style.background = '#FBC02D'; }}
                onMouseLeave={(e) => { if (!enviando) e.currentTarget.style.background = '#F0B429'; }}
              >
                {enviando ? 'Entrando...' : 'Entrar'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <button
                type="button"
                onClick={() => { setModoRecuperar(true); setRecuperarEnviado(false); setRecuperarErro(null); }}
                className="text-gray-400 text-sm hover:text-yellow-500 transition-colors"
              >
                Esqueceu sua senha?
              </button>
            </div>
          </div>
        ) : (
          /* Recuperar senha */
          <div className="w-full max-w-sm">
            {recuperarEnviado ? (
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <CheckCircle size={48} className="text-green-400" />
                </div>
                <p className="text-white text-sm">
                  Se o e-mail existir, enviamos um link de recuperação para <strong>{emailRecuperar}</strong>.
                </p>
                <button
                  type="button"
                  onClick={() => { setModoRecuperar(false); setRecuperarEnviado(false); setEmailRecuperar(''); }}
                  className="text-yellow-500 text-sm hover:text-yellow-400 transition-colors font-medium"
                >
                  Voltar para o login
                </button>
              </div>
            ) : (
              <form onSubmit={handleRecuperar} className="space-y-4">
                {recuperarErro && (
                  <div
                    className="flex items-start gap-2 rounded-lg px-4 py-3 text-sm"
                    style={{ background: 'rgba(239,68,68,0.15)', color: '#fca5a5' }}
                  >
                    <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
                    <span>{recuperarErro}</span>
                  </div>
                )}

                <p className="text-gray-400 text-sm text-center mb-4">
                  Digite seu e-mail e enviaremos um link para redefinir sua senha.
                </p>

                <div>
                  <label className="block text-gray-300 text-sm mb-1.5">E-mail</label>
                  <div className="relative">
                    <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                      type="email"
                      required
                      value={emailRecuperar}
                      onChange={(e) => setEmailRecuperar(e.target.value)}
                      placeholder="seu@email.com"
                      className="w-full rounded-lg border border-gray-700 bg-gray-900 text-white pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-yellow-500 transition-colors"
                      autoComplete="email"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={enviando}
                  className="w-full rounded-lg font-bold text-black py-3 text-sm transition-all disabled:opacity-50"
                  style={{ background: enviando ? '#666' : '#F0B429' }}
                >
                  {enviando ? 'Enviando...' : 'Enviar link'}
                </button>

                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => setModoRecuperar(false)}
                    className="inline-flex items-center gap-1.5 text-gray-400 text-sm hover:text-yellow-500 transition-colors"
                  >
                    <ArrowLeft size={16} />
                    Voltar para o login
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* Voltar para o site */}
        <div className="mt-10">
          <a
            href="/"
            className="inline-flex items-center gap-1.5 text-gray-500 text-xs hover:text-yellow-500 transition-colors"
          >
            <ArrowLeft size={14} />
            Voltar para o site
          </a>
        </div>
      </div>

      <div style={{ background: '#F0B429', height: '4px', width: '100%' }} />
    </div>
  );
};

export default AplicadorLogin;
