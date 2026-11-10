import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AplicadorAuthProvider, useAplicadorAuth } from './AplicadorAuthContext';
import AplicadorLogin from './pages/AplicadorLogin';

const AplicadorCarregando: React.FC = () => (
  <div className="min-h-screen flex flex-col items-center justify-center" style={{ background: '#0a0a0a' }}>
    <p className="text-gray-400 text-sm">Carregando...</p>
  </div>
);

const AplicadorNaoAutorizado: React.FC = () => (
  <div className="min-h-screen flex flex-col items-center justify-center px-6" style={{ background: '#0a0a0a' }}>
    <p className="text-white text-lg font-semibold">Acesso restrito</p>
    <p className="text-gray-400 text-sm mt-2 text-center max-w-xs">
      Sua conta não está ativa ou não tem permissão para acessar esta área.
    </p>
    <a href="/" className="mt-6 text-yellow-500 text-sm hover:text-yellow-400 transition-colors font-medium">
      Voltar para o site
    </a>
  </div>
);

interface RotaProtegidaProps {
  children: React.ReactNode;
  papeisPermitidos?: ('admin' | 'aplicador' | 'medico')[];
}

const RotaProtegida: React.FC<RotaProtegidaProps> = ({ children, papeisPermitidos }) => {
  const { user, perfil, loading } = useAplicadorAuth();

  if (loading) return <AplicadorCarregando />;
  if (!user) return <Navigate to="/aplicador" replace />;
  if (!perfil) return <AplicadorNaoAutorizado />;

  if (papeisPermitidos && !papeisPermitidos.includes(perfil.papel as 'admin' | 'aplicador' | 'medico')) {
    return <AplicadorNaoAutorizado />;
  }

  return <>{children}</>;
};

const AplicadorInicio: React.FC = () => {
  const { perfil, signOut } = useAplicadorAuth();

  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#0a0a0a' }}>
      <div style={{ background: '#F0B429', height: '4px', width: '100%' }} />
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <h1 className="text-white text-2xl font-bold mb-2">
          Bem-vindo, {perfil?.nome}
        </h1>
        <p className="text-gray-400 text-sm mb-8 capitalize">
          Papel: {perfil?.papel}
        </p>
        <p className="text-gray-500 text-sm text-center max-w-sm mb-8">
          Esta é a área do aplicador. As próximas etapas (check-in, check-out, painel admin e relatórios) serão implementadas a seguir.
        </p>
        <button
          onClick={() => signOut()}
          className="rounded-lg font-medium px-6 py-2.5 text-sm border border-gray-700 text-gray-300 hover:border-yellow-500 hover:text-yellow-500 transition-colors"
        >
          Sair
        </button>
      </div>
      <div style={{ background: '#F0B429', height: '4px', width: '100%' }} />
    </div>
  );
};

const AplicadorRotas: React.FC = () => {
  const { user, loading } = useAplicadorAuth();

  if (loading) return <AplicadorCarregando />;

  return (
    <Routes>
      <Route
        path="/"
        element={user ? <Navigate to="/aplicador/inicio" replace /> : <AplicadorLogin />}
      />
      <Route
        path="/inicio"
        element={
          <RotaProtegida>
            <AplicadorInicio />
          </RotaProtegida>
        }
      />
      <Route path="*" element={<Navigate to="/aplicador" replace />} />
    </Routes>
  );
};

const AplicadorApp: React.FC = () => {
  return (
    <AplicadorAuthProvider>
      <AplicadorRotas />
    </AplicadorAuthProvider>
  );
};

export default AplicadorApp;