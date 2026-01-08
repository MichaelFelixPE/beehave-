import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {

  return (
    <section id="contact" className="py-16 bg-white relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-100 rounded-full opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-200 rounded-full opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black">Entre em Contato</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto my-4"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            Entre em contato para saber mais sobre os nossos Serviços em ABA!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Mapa */}
          <div className="lg:col-span-2 mb-12">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-80 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.123456789!2d-40.5053187!3d-9.3881401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMjMnMTcuMyJTIDQwwrAzMCcxOS4xIlc!5e0!3m2!1spt-BR!2sbr!4v1635959542842!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Beehave Psicologia"
                ></iframe>
              </div>
              <div className="p-4 bg-yellow-50">
                <div className="flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-yellow-500 mr-2" />
                  <span className="text-gray-700 font-medium">
                    Rua Bahia, N 808, Vila Mocó - Petrolina-PE, CEP 56.306-430
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Informações de Contato */}
          <div className="bg-yellow-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-6 text-black">Fale Conosco</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-yellow-200 p-3 rounded-full mr-4">
                  <MapPin className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-black">Nosso Endereço</h4>
                  <p className="text-gray-700 mt-1">
                    Rua Bahia, N 808, Vila Mocó<br />
                    Petrolina-PE, CEP 56.306-430
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-yellow-200 p-3 rounded-full mr-4">
                  <Phone className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-black">Telefone</h4>
                  <p className="text-gray-700 mt-1">
                    <a href="tel:+55111234567" className="hover:text-yellow-600 transition-colors">
                      (87) 9 8828-7826
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-yellow-200 p-3 rounded-full mr-4">
                  <Mail className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-black">E-mail</h4>
                  <p className="text-gray-700 mt-1">
                    <a href="mailto:empresabeehave@gmail.com" className="hover:text-yellow-600 transition-colors">
                      empresabeehave@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-yellow-200 p-3 rounded-full mr-4">
                  <Clock className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-black">Horário de Funcionamento</h4>
                  <p className="text-gray-700 mt-1">
                    Segunda - Sexta: 8:00 - 18:00<br />
                    Sábado: Fechado<br />
                    Domingo: Fechado
                  </p>
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