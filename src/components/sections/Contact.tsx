import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = {
    address: "Endereço da sua empresa, Petrolina - PE",
    phone: "(87) 9xxxx-xxxx",
    email: "contato@suaempresa.com.br",
    hours: [
      { days: "Segunda a Sexta", time: "08:00 - 18:00" },
      { days: "Sábado", time: "08:00 - 12:00" },
      { days: "Domingo", time: "Fechado" }
    ],
    coordinates: { lat: -9.3881401, lng: -40.5053187 }
  };

  const handleDirections = () => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${contactInfo.coordinates.lat},${contactInfo.coordinates.lng}`,
      '_blank'
    );
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título da Seção */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Como Chegar
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos localizados em Petrolina. Venha nos visitar!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Coluna de Informações */}
          <div className="space-y-6">
            {/* Card de Endereço */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Endereço
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {contactInfo.address}
                  </p>
                  <button
                    onClick={handleDirections}
                    className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    Ver rotas no Google Maps
                  </button>
                </div>
              </div>
            </div>

            {/* Card de Contato */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Telefone
                    </h3>
                    
                      href={`tel:${contactInfo.phone.replace(/\D/g, '')}`}
                      className="text-gray-600 hover:text-green-600 transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 pt-4 border-t border-gray-100">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      E-mail
                    </h3>
                    
                      href={`mailto:${contactInfo.email}`}
                      className="text-gray-600 hover:text-purple-600 transition-colors break-all"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Card de Horários */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Horário de Funcionamento
                  </h3>
                  <div className="space-y-2">
                    {contactInfo.hours.map((schedule, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
                      >
                        <span className="text-gray-700 font-medium">
                          {schedule.days}
                        </span>
                        <span className="text-gray-600">
                          {schedule.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna do Mapa */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-[600px] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.123456789!2d-40.5053187!3d-9.3881401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMjMnMTcuMyJTIDQwwrAzMCcxOS4xIlc!5e0!3m2!1spt-BR!2sbr!4v1635959542842!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Empresa"
                  className="grayscale-0 hover:grayscale-0 transition-all duration-300"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;