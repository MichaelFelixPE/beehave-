import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Button from '../ui/Button';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    childAge: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de envio do formulário aqui
    alert('Obrigado pela sua mensagem. Entraremos em contato em breve!');
    // Resetar formulário
    setFormData({
      name: '',
      email: '',
      phone: '',
      childAge: '',
      message: ''
    });
  };

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
            Entre em contato para agendar uma consulta ou saber mais sobre nossos serviços.
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
                    Rua Bahia, N808, Vila Mocó - Petrolina-PE, CEP 56.306-430
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
          
          {/* Formulário de Contato */}
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-2xl font-semibold mb-6 text-black">Envie uma Mensagem</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Seu Nome *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="childAge" className="block text-sm font-medium text-gray-700 mb-1">
                  Idade da Criança *
                </label>
                <select
                  id="childAge"
                  name="childAge"
                  value={formData.childAge}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                  required
                >
                  <option value="">Selecione</option>
                  <option value="2-4">2-4 anos</option>
                  <option value="5-8">5-8 anos</option>
                  <option value="9-12">9-12 anos</option>
                  <option value="13-18">13-18 anos</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Sua Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                  required
                ></textarea>
              </div>
              
              <div className="flex items-start">
                <input
                  id="privacy"
                  name="privacy"
                  type="checkbox"
                  className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded mt-1"
                  required
                />
                <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                  Concordo com o armazenamento das informações enviadas para que possam responder à minha consulta. Veja nossa{' '}
                  <a href="#" className="text-yellow-600 hover:underline">política de privacidade</a> para saber mais sobre como usamos os dados.
                </label>
              </div>
              
              <div className="pt-2">
                <Button type="submit" size="large" className="w-full">
                  Enviar Mensagem
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;