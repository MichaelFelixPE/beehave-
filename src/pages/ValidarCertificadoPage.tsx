// src/pages/ValidarCertificadoPage.tsx
//
// Página que abre quando alguém escaneia o QR Code de um certificado.
// Lê nome, curso e assinatura da URL e confirma se o certificado é válido.

import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { verificarAssinatura } from '../utils/certificado';

type Resultado = 'carregando' | 'valido' | 'invalido';

export default function ValidarCertificadoPage() {
  const [searchParams] = useSearchParams();
  const [resultado, setResultado] = useState<Resultado>('carregando');

  const nome = searchParams.get('nome') || '';
  const curso = searchParams.get('curso') || '';
  const sig = searchParams.get('sig') || '';

  useEffect(() => {
    if (!nome || !curso || !sig) {
      setResultado('invalido');
      return;
    }
    const valido = verificarAssinatura({ nome, curso }, sig);
    setResultado(valido ? 'valido' : 'invalido');
  }, [nome, curso, sig]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-16">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 shadow-sm p-8 text-center">
        {resultado === 'carregando' && (
          <p className="text-gray-500">Verificando certificado...</p>
        )}

        {resultado === 'valido' && (
          <>
            <div className="text-5xl mb-4">✅</div>
            <h1 className="text-xl font-bold text-green-700 mb-4">
              Certificado Válido
            </h1>
            <div className="text-left bg-gray-50 rounded-lg p-4 space-y-2">
              <p>
                <span className="font-semibold">Nome:</span>{' '}
                {decodeURIComponent(nome.replace(/-/g, ' '))}
              </p>
              <p>
                <span className="font-semibold">Curso:</span>{' '}
                {decodeURIComponent(curso.replace(/-/g, ' '))}
              </p>
            </div>
            <p className="text-sm text-gray-400 mt-6">
              Certificado confirmado pela Behave.
            </p>
          </>
        )}

        {resultado === 'invalido' && (
          <>
            <div className="text-5xl mb-4">❌</div>
            <h1 className="text-xl font-bold text-red-700 mb-4">
              Certificado Inválido
            </h1>
            <p className="text-gray-500">
              Não foi possível validar este certificado. Verifique se o QR Code
              está correto ou entre em contato com a Behave.
            </p>
          </>
        )}
      </div>
    </div>
  );
}