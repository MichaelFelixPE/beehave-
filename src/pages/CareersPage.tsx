import React, { useState } from 'react';
import { Briefcase, Mail, Phone, User, MessageSquare, Link2, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import Button from '../components/ui/Button';
import { supabase } from '../lib/supabase';

const CareersPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: '',
    resumeUrl: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      setStatus('error');
      setErrorMessage('Por favor, preencha pelo menos seu nome e email.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const { error } = await supabase.from('job_applications').insert({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || null,
        position: formData.position || null,
        message: formData.message || null,
        resume_url: formData.resumeUrl || null,
      });

      if (error) throw error;

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', position: '', message: '', resumeUrl: '' });
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Ocorreu um erro ao enviar. Tente novamente.');
    }
  };

  return (
    <div className="pt-20 bg-gradient-to-b from-[#FFFCF0] to-white min-h-screen">
      {/* Hero */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06] z-0"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'56\' height=\'98\' viewBox=\'0 0 28 49\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.32v12.86l10.99 6.34 11-6.35V17.32L14 10.98 3 17.32z\' fill=\'%23eab308\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
            backgroundSize: '56px 98px'
          }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-200/40 rounded-full blur-[120px] z-0"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-400 rounded-2xl shadow-lg shadow-yellow-200 mb-6">
            <Briefcase className="text-zinc-900" size={36} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
            Trabalhe Conosco
          </h1>
          <p className="mt-5 text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Quer fazer parte da BeeEquipe? Envie seu currículo e nos conte sobre você.
            Buscamos profissionais comprometidos com o Afeto, Ciência e Ética.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="pb-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 backdrop-blur-md border border-yellow-100 rounded-[32px] p-8 md:p-10 shadow-2xl">
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                  <CheckCircle className="text-green-600" size={40} />
                </div>
                <h2 className="text-2xl font-bold text-zinc-900 mb-3">
                  Currículo enviado com sucesso!
                </h2>
                <p className="text-zinc-600 mb-8">
                  Agradecemos seu interesse em fazer parte da BeeEquipe.
                  Entraremos em contato caso seu perfil se encaixe em uma vaga.
                </p>
                <Button
                  variant="outline"
                  size="large"
                  onClick={() => setStatus('idle')}
                >
                  Enviar outro currículo
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nome */}
                <div>
                  <label className="block text-sm font-semibold text-zinc-900 mb-2">
                    Nome completo *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Seu nome completo"
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 outline-none transition-all text-zinc-900 placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-zinc-900 mb-2">
                    E-mail *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="seu@email.com"
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 outline-none transition-all text-zinc-900 placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* Telefone */}
                <div>
                  <label className="block text-sm font-semibold text-zinc-900 mb-2">
                    Telefone / WhatsApp
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(87) 99999-9999"
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 outline-none transition-all text-zinc-900 placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* Posição de interesse */}
                <div>
                  <label className="block text-sm font-semibold text-zinc-900 mb-2">
                    Área / Cargo de interesse
                  </label>
                  <div className="relative">
                    <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="text"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      placeholder="Ex: Aplicadora em ABA, Psicóloga, etc."
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 outline-none transition-all text-zinc-900 placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* Link do currículo */}
                <div>
                  <label className="block text-sm font-semibold text-zinc-900 mb-2">
                    Link do currículo (Google Drive, etc.)
                  </label>
                  <div className="relative">
                    <Link2 className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="url"
                      name="resumeUrl"
                      value={formData.resumeUrl}
                      onChange={handleChange}
                      placeholder="https://drive.google.com/..."
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 outline-none transition-all text-zinc-900 placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* Mensagem */}
                <div>
                  <label className="block text-sm font-semibold text-zinc-900 mb-2">
                    Mensagem / Carta de apresentação
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 text-gray-400" size={18} />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Conte um pouco sobre você e por que quer fazer parte da BeeEquipe..."
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 outline-none transition-all text-zinc-900 placeholder-gray-400 resize-none"
                    />
                  </div>
                </div>

                {/* Error message */}
                {status === 'error' && (
                  <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4">
                    <AlertCircle className="text-red-500 shrink-0 mt-0.5" size={18} />
                    <p className="text-red-700 text-sm">{errorMessage}</p>
                  </div>
                )}

                {/* Submit */}
                <Button
                  type="submit"
                  size="large"
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black border-none"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Enviar currículo
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
