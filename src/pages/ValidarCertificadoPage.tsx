// src/pages/ValidarCertificadoPage.tsx
//
// Página que abre quando alguém escaneia o QR Code de um certificado.
// Lê nome, curso e assinatura da URL, confirma se o certificado é válido
// e mostra uma tela de celebração com o nome da pessoa.
//
// Requer a fonte "Fraunces" carregada globalmente (ver instruções de instalação
// enviadas junto com este arquivo) para o efeito de destaque no nome.

import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { verificarAssinatura } from '../utils/certificado';

type Resultado = 'carregando' | 'valido' | 'invalido';

function formatarTexto(valor: string): string {
  return decodeURIComponent(valor.replace(/-/g, ' '));
}

export default function ValidarCertificadoPage() {
  const [searchParams] = useSearchParams();
  const [resultado, setResultado] = useState<Resultado>('carregando');
  const [selado, setSelado] = useState(false);

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

  useEffect(() => {
    if (resultado === 'valido') {
      const t = setTimeout(() => setSelado(true), 150);
      return () => clearTimeout(t);
    }
  }, [resultado]);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-16"
      style={{ backgroundColor: '#FAF7F1' }}
    >
      {resultado === 'carregando' && (
        <p style={{ color: '#8A8478' }}>Verificando certificado...</p>
      )}

      {resultado === 'valido' && (
        <div
          className="w-full max-w-lg rounded-3xl p-10 text-center relative overflow-hidden"
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #E8E2D4',
            boxShadow: '0 20px 60px -20px rgba(44, 95, 91, 0.25)',
          }}
        >
          {/* Selo de verificação */}
          <div
            className="mx-auto mb-6 flex items-center justify-center rounded-full transition-all duration-500 ease-out"
            style={{
              width: 88,
              height: 88,
              backgroundColor: '#2C5F5B',
              transform: selado ? 'scale(1) rotate(0deg)' : 'scale(0.5) rotate(-15deg)',
              opacity: selado ? 1 : 0,
            }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 13l4 4L19 7"
                stroke="#FAF7F1"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <p
            className="text-sm tracking-wide mb-2"
            style={{ color: '#C9A66B', fontFamily: 'Inter, sans-serif' }}
          >
            Certificado verificado
          </p>

          <h1
            className="mb-1 leading-tight"
            style={{
              fontFamily: '"Fraunces", serif',
              fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
              color: '#2A2A2A',
              fontWeight: 600,
            }}
          >
            Parabéns, {formatarTexto(nome)}!
          </h1>

          <p
            className="mb-8"
            style={{ color: '#5C574C', fontFamily: 'Inter, sans-serif' }}
          >
            Sua conclusão do curso foi confirmada pela Behave.
          </p>

          <div
            className="text-left rounded-2xl p-5"
            style={{ backgroundColor: '#FAF7F1' }}
          >
            <div className="flex justify-between items-start gap-4 py-2">
              <span
                style={{ color: '#8A8478', fontFamily: 'Inter, sans-serif' }}
              >
                Curso
              </span>
              <span
                className="text-right font-medium"
                style={{ color: '#2A2A2A', fontFamily: 'Inter, sans-serif' }}
              >
                {formatarTexto(curso)}
              </span>
            </div>
          </div>

          <p
            className="text-xs mt-8"
            style={{ color: '#B3AC9C', fontFamily: 'Inter, sans-serif' }}
          >
            Behave · Formação e supervisão técnica em ABA
          </p>
        </div>
      )}

      {resultado === 'invalido' && (
        <div
          className="w-full max-w-md rounded-3xl p-10 text-center"
          style={{ backgroundColor: '#FFFFFF', border: '1px solid #E8E2D4' }}
        >
          <div
            className="mx-auto mb-6 flex items-center justify-center rounded-full"
            style={{ width: 72, height: 72, backgroundColor: '#F3E7E2' }}
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="#C4634A"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <h1
            className="mb-3"
            style={{
              fontFamily: '"Fraunces", serif',
              fontSize: '1.5rem',
              color: '#2A2A2A',
            }}
          >
            Certificado não encontrado
          </h1>
          <p style={{ color: '#8A8478', fontFamily: 'Inter, sans-serif' }}>
            Não foi possível validar este certificado. Verifique se o QR Code
            está correto ou entre em contato com a Behave.
          </p>
        </div>
      )}
    </div>
  );
}