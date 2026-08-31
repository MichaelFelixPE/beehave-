import CryptoJS from 'crypto-js';

const SECRET = import.meta.env.VITE_CERT_SECRET;

export interface DadosCertificado {
  nome: string;
  curso: string;
}

export function gerarAssinatura(dados: DadosCertificado): string {
  if (!SECRET) {
    console.error(
      'VITE_CERT_SECRET não foi configurada. Configure essa variável no ambiente do projeto.'
    );
    return '';
  }

  const texto = `${dados.nome}|${dados.curso}`;

  const hash = CryptoJS.HmacSHA256(texto, SECRET);

  return hash.toString(CryptoJS.enc.Hex).substring(0, 16);
}

export function verificarAssinatura(
  dados: DadosCertificado,
  assinaturaRecebida: string
): boolean {
  if (!SECRET) {
    console.error('VITE_CERT_SECRET não configurada.');
    return false;
  }

  if (!dados.nome || !dados.curso || !assinaturaRecebida) {
    return false;
  }

  const assinaturaCorreta = gerarAssinatura(dados);

  if (!assinaturaCorreta) {
    return false;
  }

  return assinaturaCorreta === assinaturaRecebida;
}

export function gerarUrlValidacao(
  dados: DadosCertificado,
  baseUrl: string
): string {
  const sig = gerarAssinatura(dados);

  if (!sig) {
    throw new Error(
      'Não foi possível gerar a assinatura. VITE_CERT_SECRET não configurada.'
    );
  }

  const params = new URLSearchParams({
    nome: dados.nome,
    curso: dados.curso,
    sig,
  });

  return `${baseUrl}/validar-certificado?${params.toString()}`;
}