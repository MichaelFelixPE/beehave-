import React, { useState } from 'react';
import { Briefcase, User, Mail, Phone, Link as LinkIcon, MessageSquare, Send } from 'lucide-react';

const TrabalheConosco: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/SEU_ID_AQUI', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="relative pt-24 pb-16 overflow-hidden bg-[#FFFCF0] min-h-screen">
      <div
        className="absolute inset-0 opacity-[0.06] z-0"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width=\'56\' height=\'98\' viewBox=\'0 0 28 49\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.32v12.86l10.99 6.34 11-6.35V17.32L14 10.98 3 17.32z\' fill=\'%23eab308\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
          backgroundSize: '56px 98px',
        }}
      ></div>

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-200/40 rounded-full blur-[120px] z-0"></div>
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-amber-100/50 rounded-full blur-[100px] z-0"></div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-8 relative z-10">
        <div className="text-center mb-10">
          <div className="w-14 h-14 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-5">
            <Briefcase className="text-black" size={24} />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-black leading-tight">
            Trabalhe Conosco
          </h1>
          <p className="mt-4 text-gray-700 max-w-xl mx-auto">
            Quer fazer parte da BeeEquipe? Envie seu currículo e nos conte sobre você.
            <br />
            Buscamos profissionais comprometidos com o Afeto, Ciência e a Ética.
          </p>
        </div>

        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-yellow-100">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="nome" className="block text-sm font-semibold text-gray-800 mb-1">
                Nome completo *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  required
                  placeholder="Seu nome completo"
                  className="w-full pl-9 pr-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400/30 focus:border-yellow-400"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-1">
                E-mail *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="seu@email.com"
                  className="w-full pl-9 pr-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400/30 focus:border-yellow-400"
                />
              </div>
            </div>

            <div>
              <label htmlFor="telefone" className="block text-sm font-semibold text-gray-800 mb-1">
                Telefone / WhatsApp
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  placeholder="(87) 99999-9999"
                  className="w-full pl-9 pr-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400/30 focus:border-yellow-400"
                />
              </div>
            </div>

            <div>
              <label htmlFor="cargo" className="block text-sm font-semibold text-gray-800 mb-1">
                Área / Cargo de interesse
              </label>
              <div className="relative">
                <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="text"
                  id="cargo"
                  name="cargo"
                  placeholder="Ex: Aplicadora em ABA, Psicóloga, etc."
                  className="w-full pl-9 pr-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400/30 focus:border-yellow-400"
                />
              </div>
            </div>

            <div>
              <label htmlFor="curriculo" className="block text-sm font-semibold text-gray-800 mb-1">
                Link do currículo (Google Drive, etc.)
              </label>
              <div className="relative">
                <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="url"
                  id="curriculo"
                  name="curriculo"
                  required
                  placeholder="https://drive.google.com/..."
                  className="w-full pl-9 pr-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400/30 focus:border-yellow-400"
                />
              </div>
            </div>

            <div>
              <label htmlFor="mensagem" className="block text-sm font-semibold text-gray-800 mb-1">
                Mensagem / Carta de apresentação
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 text-gray-400" size={16} />
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={4}
                  placeholder="Conte um pouco sobre você e por que quer fazer parte da BeeEquipe..."
                  className="w-full pl-9 pr-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400/30 focus:border-yellow-400 resize-none"
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-md transition-colors disabled:opacity-60"
            >
              <Send size={16} />
              {status === 'sending' ? 'Enviando...' : 'Enviar currículo'}
            </button>

            {status === 'success' && (
              <p className="text-green-600 font-medium text-center text-sm">
                Currículo enviado com sucesso! Entraremos em contato em breve.
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-500 font-medium text-center text-sm">
                Algo deu errado ao enviar. Tente novamente ou entre em contato pelo WhatsApp.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default TrabalheConosco;