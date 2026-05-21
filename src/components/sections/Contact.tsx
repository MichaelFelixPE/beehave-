import React from 'react';
import {
  MapPin,
  Star,
  ShieldCheck,
  HeartHandshake,
} from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative py-20 overflow-hidden bg-gradient-to-br from-yellow-50 via-white to-yellow-100"
    >
      {/* EFEITOS FUNDO */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-yellow-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TITULO */}
        <div className="text-center mb-14">

          <span className="inline-block px-5 py-2 rounded-full bg-yellow-100 text-yellow-700 font-medium text-sm mb-5">
            🐝 Nossa Localização
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900">
            Um espaço preparado para acolher você
          </h2>

          <p className="text-zinc-600 mt-5 max-w-3xl mx-auto text-lg leading-relaxed">
            Nossa clínica foi desenvolvida para proporcionar conforto,
            tranquilidade e uma experiência acolhedora desde o primeiro contato.
          </p>
        </div>

        {/* CONTAINER */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LADO ESQUERDO */}
          <div className="space-y-6">

            {/* CARD PRINCIPAL */}
            <div className="bg-white/80 backdrop-blur-md border border-yellow-100 rounded-[32px] p-8 shadow-2xl">

              <div className="flex items-center gap-4 mb-6">

                <div className="w-16 h-16 rounded-2xl bg-yellow-400 flex items-center justify-center shadow-lg shadow-yellow-200">
                  <MapPin className="text-zinc-900" size={28} />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-zinc-900">
                    Fácil localização
                  </h3>

                  <p className="text-zinc-600 mt-1">
                    Ambiente moderno e acessível para melhor atender você.
                  </p>
                </div>
              </div>

              <p className="text-zinc-600 leading-relaxed text-[17px]">
                Estamos localizados em uma região estratégica da cidade,
                oferecendo praticidade, conforto e uma estrutura preparada
                para proporcionar uma experiência leve e acolhedora.
              </p>

              {/* MINI CARDS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">

                <div className="bg-yellow-50 border border-yellow-100 rounded-2xl p-5">

                  <div className="w-12 h-12 rounded-xl bg-yellow-400 flex items-center justify-center mb-4">
                    <ShieldCheck className="text-zinc-900" size={22} />
                  </div>

                  <h4 className="font-semibold text-zinc-900">
                    Ambiente Seguro
                  </h4>

                  <p className="text-sm text-zinc-600 mt-2">
                    Estrutura pensada para trazer conforto e tranquilidade.
                  </p>
                </div>

                <div className="bg-yellow-50 border border-yellow-100 rounded-2xl p-5">

                  <div className="w-12 h-12 rounded-xl bg-yellow-400 flex items-center justify-center mb-4">
                    <HeartHandshake className="text-zinc-900" size={22} />
                  </div>

                  <h4 className="font-semibold text-zinc-900">
                    Atendimento Humanizado
                  </h4>

                  <p className="text-sm text-zinc-600 mt-2">
                    Um espaço acolhedor preparado para receber você.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD AVALIAÇÃO */}
            <div className="bg-zinc-900 rounded-[28px] p-7 shadow-2xl overflow-hidden relative">

              <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-400 opacity-10 rounded-full blur-3xl"></div>

              <div className="relative z-10">

                <div className="flex items-center gap-3 mb-4">

                  <div className="w-14 h-14 rounded-2xl bg-yellow-400 flex items-center justify-center">
                    <Star
                      className="text-zinc-900 fill-zinc-900"
                      size={24}
                    />
                  </div>

                  <div>
                    <h4 className="text-white font-bold text-xl">
                      Experiência acolhedora
                    </h4>

                    <p className="text-zinc-300 text-sm">
                      Cada detalhe pensado para o seu bem-estar.
                    </p>
                  </div>
                </div>

                <p className="text-zinc-300 leading-relaxed">
                  Nossa missão é oferecer um ambiente confortável,
                  leve e preparado para transformar cada atendimento
                  em uma experiência positiva.
                </p>
              </div>
            </div>
          </div>

          {/* MAPA */}
          <div className="relative h-[550px] rounded-[32px] overflow-hidden shadow-2xl border-4 border-white">

            {/* GLOW */}
            <div className="absolute inset-0 bg-yellow-300 opacity-10 blur-2xl z-0"></div>

            {/* MAPA */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.123456789!2d-40.5053187!3d-9.3881401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMjMnMTcuMyJTIDQwwrAzMCcxOS4xIlc!5e0!3m2!1spt-BR!2sbr!4v1635959542842!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Beehave Psicologia"
              className="relative z-10"
            ></iframe>

            {/* CARD FLUTUANTE */}
            <div className="absolute bottom-6 left-6 right-6 z-20">

              <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-5 border border-yellow-100">

                <div className="flex items-center justify-between flex-wrap gap-4">

                  <div>
                    <h4 className="font-bold text-zinc-900 text-lg">
                      🐝 Beehave Psicologia
                    </h4>

                    <p className="text-zinc-600 text-sm mt-1">
                      Um ambiente moderno, acolhedor e preparado para você.
                    </p>
                  </div>

                  <div className="flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-xl">
                    <Star
                      size={18}
                      className="text-yellow-500 fill-yellow-500"
                    />

                    <span className="font-semibold text-zinc-900">
                      Ambiente Premium
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;