import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { verificarAssinatura } from '../utils/certificado';

type Resultado = 'carregando' | 'valido' | 'invalido';

function formatarTexto(valor: string): string {
  try {
    return decodeURIComponent(valor.replace(/-/g, ' '));
  } catch {
    return valor.replace(/-/g, ' ');
  }
}

export default function ValidarCertificadoPage() {
  const [searchParams] = useSearchParams();

  const [resultado, setResultado] =
    useState<Resultado>('carregando');

  const [selado, setSelado] = useState(false);

  const nome = searchParams.get('nome') || '';
  const curso = searchParams.get('curso') || '';
  const sig = searchParams.get('sig') || '';

  useEffect(() => {
    setSelado(false);

    // Sem os dados necessários = inválido
    if (!nome || !curso || !sig) {
      setResultado('invalido');
      return;
    }

    // Assinaturas claramente usadas apenas para teste
    // nunca devem ser consideradas válidas.
    const assinaturasDeTeste = [
      'teste',
      'teste123',
      'test',
      '123456',
      'abc123',
      'fake',
      'invalid',
      'assinatura-teste',
    ];

    if (assinaturasDeTeste.includes(sig.toLowerCase().trim())) {
      setResultado('invalido');
      return;
    }

    try {
      const valido = verificarAssinatura(
        {
          nome,
          curso,
        },
        sig
      );

      setResultado(valido ? 'valido' : 'invalido');
    } catch (error) {
      console.error('Erro ao validar certificado:', error);
      setResultado('invalido');
    }
  }, [nome, curso, sig]);

  useEffect(() => {
    if (resultado === 'valido') {
      const timer = setTimeout(() => {
        setSelado(true);
      }, 150);

      return () => clearTimeout(timer);
    }
  }, [resultado]);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-16"
      style={{
        backgroundColor: '#FAF7F1',
      }}
    >
      {/* CARREGANDO */}
      {resultado === 'carregando' && (
        <div className="text-center">
          <p
            style={{
              color: '#8A8478',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            Verificando certificado...
          </p>
        </div>
      )}

      {/* CERTIFICADO VÁLIDO */}
      {resultado === 'valido' && (
        <div
          className="w-full max-w-lg rounded-3xl p-10 text-center relative overflow-hidden"
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #E8E2D4',
            boxShadow:
              '0 20px 60px -20px rgba(44, 95, 91, 0.25)',
          }}
        >
          {/* Selo */}
          <div
            className="mx-auto mb-6 flex items-center justify-center rounded-full transition-all duration-500 ease-out"
            style={{
              width: 88,
              height: 88,
              backgroundColor: '#2C5F5B',
              transform: selado
                ? 'scale(1) rotate(0deg)'
                : 'scale(0.5) rotate(-15deg)',
              opacity: selado ? 1 : 0,
            }}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
            >
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
            style={{
              color: '#C9A66B',
              fontFamily: 'Inter, sans-serif',
            }}
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
            style={{
              color: '#5C574C',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            Sua conclusão do curso foi confirmada pela Beehave.
          </p>

          <div
            className="text-left rounded-2xl p-5"
            style={{
              backgroundColor: '#FAF7F1',
            }}
          >
            <div className="flex justify-between items-start gap-4 py-2">
              <span
                style={{
                  color: '#8A8478',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                Curso
              </span>

              <span
                className="text-right font-medium"
                style={{
                  color: '#2A2A2A',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                {formatarTexto(curso)}
              </span>
            </div>
          </div>

          <p
            className="text-xs mt-8"
            style={{
              color: '#B3AC9C',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            Beehave · Formação e supervisão técnica em ABA
          </p>
        </div>
      )}

      {/* CERTIFICADO INVÁLIDO */}
      {resultado === 'invalido' && (
        <div
          className="w-full max-w-md rounded-3xl p-10 text-center"
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #E8E2D4',
            boxShadow:
              '0 20px 60px -20px rgba(0, 0, 0, 0.08)',
          }}
        >
          {/* Ícone X */}
          <div
            className="mx-auto mb-6 flex items-center justify-center rounded-full"
            style={{
              width: 72,
              height: 72,
              backgroundColor: '#F3E7E2',
            }}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="#C4634A"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <p
            className="text-sm tracking-wide mb-2"
            style={{
              color: '#C4634A',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            Validação não realizada
          </p>

          <h1
            className="mb-3"
            style={{
              fontFamily: '"Fraunces", serif',
              fontSize: '1.7rem',
              color: '#2A2A2A',
              fontWeight: 600,
            }}
          >
            Certificado não encontrado
          </h1>

          <p
            style={{
              color: '#8A8478',
              fontFamily: 'Inter, sans-serif',
              lineHeight: 1.6,
            }}
          >
            Não foi possível validar este certificado.
            Verifique se o QR Code está correto ou entre em
            contato com a Beehave.
          </p>
        </div>
      )}
    </div>
  );
}