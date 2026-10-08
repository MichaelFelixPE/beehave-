// src/pages/ValidarCertificadoPage.tsx
//
// Página que abre quando alguém escaneia o QR Code de um certificado.
// Busca o certificado no Supabase (tabela "certificados") pelo código
// recebido na URL (?id=CODIGO) e mostra o resultado.

import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { supabase } from '../utils/supabaseClient';

type Resultado = 'carregando' | 'valido' | 'invalido';

interface Certificado {
  nome: string;
  curso: string;
  carga_horaria: string;
  data_conclusao: string | null;
  data_emissao: string | null;
}

export default function ValidarCertificadoPage() {
  const [searchParams] = useSearchParams();
  const [resultado, setResultado] = useState<Resultado>('carregando');
  const [selado, setSelado] = useState(false);
  const [certificado, setCertificado] = useState<Certificado | null>(null);

  const codigo = searchParams.get('id') || '';

  useEffect(() => {
    setSelado(false);

    if (!codigo) {
      setResultado('invalido');
      return;
    }

    const buscar = async () => {
      try {
        const { data, error } = await supabase
          .from('certificados')
          .select('nome, curso, carga_horaria, data_conclusao, data_emissao, status')
          .eq('codigo_certificado', codigo)
          .maybeSingle();

        if (error) {
          console.error('Erro ao consultar certificado:', error);
          setResultado('invalido');
          return;
        }

        if (data && data.status === 'valido') {
          setCertificado({
            nome: data.nome,
            curso: data.curso,
            carga_horaria: data.carga_horaria,
            data_conclusao: data.data_conclusao,
            data_emissao: data.data_emissao,
          });
          setResultado('valido');
        } else {
          setResultado('invalido');
        }
      } catch (err) {
        console.error('Erro ao validar certificado:', err);
        setResultado('invalido');
      }
    };

    buscar();
  }, [codigo]);

  useEffect(() => {
    if (resultado === 'valido') {
      const t = setTimeout(() => setSelado(true), 150);
      return () => clearTimeout(t);
    }
  }, [resultado]);

  function formatarData(iso: string | null): string {
    if (!iso) return '';
    try {
      const [ano, mes, dia] = iso.split('-');
      return `${dia}/${mes}/${ano}`;
    } catch {
      return iso;
    }
  }

  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-[80vh] px-4 py-16 overflow-hidden"
      style={{ backgroundColor: '#FFFCF0' }}
    >
      {/* BACKGROUND PATTERN DE COLMEIA (igual ao do Hero) */}
      <div
        className="absolute inset-0 opacity-[0.06] z-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'56\' height=\'98\' viewBox=\'0 0 28 49\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.32v12.86l10.99 6.34 11-6.35V17.32L14 10.98 3 17.32z\' fill=\'%23eab308\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
          backgroundSize: '56px 98px',
        }}
      ></div>

      {/* EFEITOS DE BRILHO (GLOWS) (igual ao do Hero) */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-200/40 rounded-full blur-[120px] z-0 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div
        className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-amber-100/50 rounded-full blur-[100px] z-0 pointer-events-none"
        aria-hidden="true"
      ></div>

      {/* CONTEÚDO POR CIMA DO FUNDO */}
      <div className="relative z-10 w-full flex flex-col items-center">
      {resultado === 'carregando' && (
        <p style={{ color: '#8A8478', fontFamily: 'Inter, sans-serif' }}>
          Verificando certificado...
        </p>
      )}

      {resultado === 'valido' && certificado && (
        <div
          className="w-full max-w-lg rounded-3xl p-10 text-center relative overflow-hidden"
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #E8E2D4',
            // sombra agora em tom amarelo
            boxShadow: '0 20px 60px -20px rgba(245, 184, 46, 0.35)',
          }}
        >
          <div
            className="mx-auto mb-6 flex items-center justify-center rounded-full transition-all duration-500 ease-out"
            style={{
              width: 88,
              height: 88,
              // círculo agora amarelo
              backgroundColor: '#F0B429',
              transform: selado ? 'scale(1) rotate(0deg)' : 'scale(0.5) rotate(-15deg)',
              opacity: selado ? 1 : 0,
            }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 13l4 4L19 7"
                // check escuro para dar contraste sobre o amarelo
                stroke="#2A2A2A"
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
            Parabéns, {certificado.nome}!
          </h1>

          <p
            className="mb-8"
            style={{ color: '#5C574C', fontFamily: 'Inter, sans-serif' }}
          >
            Sua conclusão do curso foi confirmada pela Beehave.
          </p>

          <div className="text-left rounded-2xl p-5" style={{ backgroundColor: '#FAF7F1' }}>
            <div className="flex justify-between items-start gap-4 py-2">
              <span style={{ color: '#8A8478', fontFamily: 'Inter, sans-serif' }}>Curso</span>
              <span
                className="text-right font-medium"
                style={{ color: '#2A2A2A', fontFamily: 'Inter, sans-serif' }}
              >
                {certificado.curso}
              </span>
            </div>

            <div className="flex justify-between items-start gap-4 py-2">
              <span style={{ color: '#8A8478', fontFamily: 'Inter, sans-serif' }}>
                Carga horária
              </span>
              <span
                className="text-right font-medium"
                style={{ color: '#2A2A2A', fontFamily: 'Inter, sans-serif' }}
              >
                {certificado.carga_horaria}
              </span>
            </div>

            {certificado.data_conclusao && (
              <div className="flex justify-between items-start gap-4 py-2">
                <span style={{ color: '#8A8478', fontFamily: 'Inter, sans-serif' }}>
                  Conclusão
                </span>
                <span
                  className="text-right font-medium"
                  style={{ color: '#2A2A2A', fontFamily: 'Inter, sans-serif' }}
                >
                  {formatarData(certificado.data_conclusao)}
                </span>
              </div>
            )}
          </div>

          <p className="text-xs mt-8" style={{ color: '#B3AC9C', fontFamily: 'Inter, sans-serif' }}>
            Beehave · Formação e supervisão técnica em ABA
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
            style={{ fontFamily: '"Fraunces", serif', fontSize: '1.5rem', color: '#2A2A2A' }}
          >
            Certificado não encontrado
          </h1>
          <p style={{ color: '#8A8478', fontFamily: 'Inter, sans-serif' }}>
            Não foi possível validar este certificado. Verifique se o QR Code
            está correto ou entre em contato com a Beehave.
          </p>
        </div>
      )}
      </div>
    </div>
  );
}