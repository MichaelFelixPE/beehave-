import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Sobre */}
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="flex items-center mb-4" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img src="https://i.imgur.com/KukZ26T.png" alt="Beehave Logo" className="w-10 h-10" />
              <span className="ml-2 text-xl font-bold text-white">beehave: Soluções Comportamentais </span>
            </a>
            <p className="text-gray-300 mb-4">
              Cuidado psicológico especializado para crianças autistas, promovendo crescimento, compreensão e bem-estar.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-yellow-400 transition-colors">Nossos Serviços</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-yellow-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#team" className="text-gray-300 hover:text-yellow-400 transition-colors">Nossa Equipe</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-yellow-400 transition-colors">Perguntas Frequentes</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-yellow-400 transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Informações de Contato */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Contate-nos</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-yellow-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">Rua Bahia, N 808, Vila Moco <br />Petrolina-PE, CEP 56306430</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-yellow-400 flex-shrink-0" />
                <a href="tel:+55111234567" className="text-gray-300 hover:text-yellow-400 transition-colors">(55) 87 98828-7826 </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-yellow-400 flex-shrink-0" />
                <a href="empresabeehave@gmail.com" className="text-gray-300 hover:text-yellow-400 transition-colors">empresabeehave@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Horário de Funcionamento */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Horários</h3>
            <ul className="space-y-2">
              <li className="flex justify-between text-gray-300">
                <span>Segunda - Sexta:</span>
                <span>8:00 - 18:00</span>
              </li>
              <li className="flex justify-between text-gray-300">
                <span>Sábado:</span>
                <span>Fechado</span>
              </li>
              <li className="flex justify-between text-gray-300">
                <span>Domingo:</span>
                <span>Fechado</span>
              </li>
            </ul>

            {/* Redes Sociais */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4 text-yellow-400">Siga-nos</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} beehave Psicologia. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Política de Privacidade</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Termos de Serviço</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;