import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  try {
    const { nome, email, telefone, cargo, mensagem, curriculoBase64, curriculoNome } = req.body;

    if (!nome || !email || !curriculoBase64 || !curriculoNome) {
      return res.status(400).json({ error: 'Campos obrigatórios faltando' });
    }

    await resend.emails.send({
      from: 'BeeEquipe <onboarding@resend.dev>', // trocar depois de verificar o domínio da Behave
      to: 'beehave.rh@gmail.com', // trocar pelo e-mail real que vai receber os currículos
      replyTo: email,
      subject: `Nova candidatura - BeeEquipe: ${nome}`,
      html: `
        <h2>Nova candidatura recebida</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${telefone || 'Não informado'}</p>
        <p><strong>Área / Cargo de interesse:</strong> ${cargo || 'Não informado'}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${mensagem || 'Sem mensagem'}</p>
      `,
      attachments: [
        {
          filename: curriculoNome,
          content: curriculoBase64,
        },
      ],
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    return res.status(500).json({ error: 'Erro ao enviar e-mail' });
  }
}