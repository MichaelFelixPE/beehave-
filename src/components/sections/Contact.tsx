import React from 'react';
import {
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  Star,
} from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative py-20 overflow-hidden bg-gradient-to-br from-yellow-50 via-white to-yellow-100"
    >
      {/* EFEITO DE FUNDO */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-yellow-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TITULO */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 font-medium text-sm mb-4">
            📍 Nossa Localização
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900">
            Venha conhecer a Beehave
          </h2>

          <p className="text-zinc-600 mt-5 max-w-2xl mx-auto text-lg leading-relaxed">
            Um ambiente acolhedor, moderno e preparado para oferecer a melhor experiência
            para você e sua família.
          </p>
        </div>

        {/* CONTAINER */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* CARD INFORMAÇÕES */}
          <div className="bg-white/80 backdrop-blur-md border border-yellow-100 rounded-[32px] shadow-2xl p-8 md:p-10">

            {/* TITULO CARD */}
            <div className="mb-10">
              <h3 className="text-3xl font-bold text-zinc-900">
                Informações da Clínica
              </h3>

              <p className="text-zinc-600 mt-3">
                Estamos localizados em uma região de fácil acesso para melhor atender você.
              </p>
            </div>

            {/* ITENS */}
            <div className="space-y-7">

              {/* ENDEREÇO */}
              <div className="flex items-start gap-5">

                <div className="min-w-[60px] h-[60px] rounded-2xl bg-yellow-400 flex items-center justify-center shadow-lg shadow-yellow-200">
                  <MapPin className="text-zinc-900" size={26} />
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-zinc-900">
                    Endereço
                  </h4>

                  <p className="text-zinc-600 mt-1">
                    Petrolina - Pernambuco
                  </p>
                </div>
              </div>

              {/* HORÁRIO */}
              <div className="flex items-start gap-5">

                <div className="min-w-[60px] h-[60px] rounded-2xl bg-yellow-400 flex items-center justify-center shadow-lg shadow-yellow-200">
                  <Clock className="text-zinc-900" size={26} />
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-zinc-900">
                    Horário de Atendimento
                  </h4>

                  <p className="text-zinc-600 mt-1">
                    Segunda à Sexta • 08h às 18h
                  </p>
                </div>
              </div>

              {/* TELEFONE */}
              <div className="flex items-start gap-5">

                <div className="min-w-[60px] h-[60px] rounded-2xl bg-yellow-400 flex items-center justify-center shadow-lg shadow-yellow-200">
                  <Phone className="text-zinc-900" size={26} />
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-zinc-900">
                    Contato
                  </h4>

                  <p className="text-zinc-600 mt-1">
                    (87) 99999-9999
                  </p>
                </div>
              </div>

              {/* AVALIAÇÃO */}
              <div className="flex items-start gap-5">

                <div className="min-w-[60px] h-[60px] rounded-2xl bg-yellow-400 flex items-center justify-center shadow-lg shadow-yellow-200">
                  <Star className="text-zinc-900" size={26} />
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-zinc-900">
                    Avaliações
                  </h4>

                  <p className="text-zinc-600 mt-1">
                    4.9 estrelas no Google
                  </p>
                </div>
              </div>
            </div>

            {/* BOTÕES */}
            <div className="flex flex-wrap gap-4 mt-10">

              {/* WHATSAPP */}
              <a
                href="https://wa.me/5587999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  bg-yellow-400
                  hover:bg-yellow-500
                  transition-all
                  duration-300
                  text-zinc-900
                  font-semibold
                  px-7
                  py-4
                  rounded-2xl
                  shadow-lg
                  shadow-yellow-200
                  hover:scale-105
                "
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>

              {/* MAPA */}
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  border-2
                  border-yellow-300
                  hover:border-yellow-400
                  hover:bg-yellow-50
                  transition-all
                  duration-300
                  text-zinc-800
                  font-semibold
                  px-7
                  py-4
                  rounded-2xl
                "
              >
                Como chegar
              </a>
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
                      Ambiente acolhedor e preparado para você.
                    </p>
                  </div>

                  <div className="flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-xl">
                    <Star
                      size={18}
                      className="text-yellow-500 fill-yellow-500"
                    />

                    <span className="font-semibold text-zinc-900">
                      4.9
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