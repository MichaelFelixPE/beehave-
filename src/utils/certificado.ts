// src/utils/certificado.ts
//
// Utilitário de geração e verificação de assinatura de certificados.
// Usado pela página ValidarCertificadoPage.tsx para confirmar que os dados
// que vieram na URL do QR Code não foram alterados.

import CryptoJS from 'crypto-js';

// Chave secreta. Definida no arquivo .env do projeto como:
// VITE_CERT_SECRET=uma-frase-bem-longa-e-aleatoria-aqui
const SECRET = import.meta.env.VITE_CERT_SECRET as string;

export interface DadosCertificado {
  nome: string;
  curso: string;
}

// Gera a assinatura a partir dos dados do certificado
export function gerarAssinatura(dados: DadosCertificado): string {
  const texto = `${dados.nome}|${dados.curso}`;
  const hash = CryptoJS.HmacSHA256(texto, SECRET);
  return hash.toString(CryptoJS.enc.Hex).substring(0, 16);
}

// Verifica se a assinatura recebida na URL bate com os dados recebidos
export function verificarAssinatura(
  dados: DadosCertificado,
  assinaturaRecebida: string
): boolean {
  if (!assinaturaRecebida) return false;
  const assinaturaCorreta = gerarAssinatura(dados);
  return assinaturaCorreta === assinaturaRecebida;
}

// Monta a URL completa de validação (usada só na geração dos QR Codes, não no site)
export function gerarUrlValidacao(dados: DadosCertificado, baseUrl: string): string {
  const sig = gerarAssinatura(dados);
  const params = new URLSearchParams({
    nome: dados.nome,
    curso: dados.curso,
    sig,
  });
  return `${baseUrl}/validar-certificado?${params.toString()}`;
}