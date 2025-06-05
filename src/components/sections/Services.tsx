import React from 'react';
import { Brain, Heart, Users, Lightbulb, MessageSquare, Puzzle } from 'lucide-react';

const serviceItems = [
  {
    title: 'Avaliação Cognitiva',
    description: 'Avaliação abrangente para compreender pontos fortes e desafios cognitivos, fornecendo base para planos terapêuticos personalizados.',
    icon: Brain,
  },
  {
    title: 'Terapia de Integração Sensorial',
    description: 'Técnicas especializadas para ajudar crianças a processar informações sensoriais e desenvolver respostas apropriadas a estímulos sensoriais.',
    icon: Puzzle,
  },
  {
    title: 'Desenvolvimento de Habilidades Sociais',
    description: 'Programas estruturados para aprimorar a interação social, comunicação e habilidades de construção de relacionamentos em grupos e individualmente.',
    icon: Users,
  },
  {
    title: 'Regulação Emocional',
    description: 'Orientação no reconhecimento, compreensão e gerenciamento eficaz das emoções através de abordagens terapêuticas baseadas em evidências.',
    icon: Heart,
  },
  {
    title: 'Orientação para Pais',
    description: 'Capacitação dos pais com estratégias, técnicas e compreensão para apoiar o desenvolvimento e bem-estar de seus filhos.',
    icon: Lightbulb,
  },
  {
    title: 'Terapia de Comunicação',
    description: 'Abordagens especializadas para desenvolver habilidades de comunicação verbal e não verbal, melhorando a autoexpressão e compreensão.',
    icon: MessageSquare,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-gradient-to-b from-yellow-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black">Nossos Serviços Especializados</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto my-4"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            Oferecemos uma variedade de abordagens terapêuticas baseadas em evidências, adaptadas às necessidades únicas de cada criança.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="inline-block p-3 bg-yellow-100 rounded-full mb-4">
                  <IconComponent className="w-6 h-6 text-yellow-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-black">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-6 text-gray-700 max-w-3xl mx-auto">
            Nossa abordagem é individualizada para atender às necessidades específicas de cada criança, 
            focando no desenvolvimento de pontos fortes enquanto abordamos os desafios.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center text-black bg-yellow-400 hover:bg-yellow-500 px-6 py-3 rounded-md font-medium transition-colors"
          >
            Agende uma Avaliação Inicial
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;