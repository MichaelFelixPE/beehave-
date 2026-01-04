import React from 'react';
import { Heart, Users, Lightbulb, Puzzle } from 'lucide-react';

const serviceItems = [
  {
    title: 'Avaliação Comportamental',
    description: 'Avaliação individualizada, que, por meio de Protocolos de Avaliação publicados, a nossa Equipe de Avaliação identificará os déficits e excessos comportamentais do Aprendente, a fim de auxiliar na produção efetiva e científica de uma Plano de Ensino Individualizado (PEI). A depender da necessidade da(o) Aprendente, junto a sua família, essa Avaliação pode ser abrangente, quando avalia diferentes áreas de habilidades (ex: comunicação, social, motoras, acadêmicas); ou focal, quando uma área de habilidades é escolhida para avaliar.',
    icon: Puzzle,
  },
  {
    title: 'Intervenção Comportamental',
    description: 'Intervenção baseada nos resultados da Avaliação comportamental, totalmente individualizada. Nossas(os) Analistas do Comportamentos Supervisores(as), baseadas(os) em evidências científicas, elaboram Programas de Ensino para alcançar os objetivos do PEI. Tais Programas são aplicados por nossas(os) Aplicadoras(es) treinados e acompanhadas(os) por nossas(os) Analistas do Comportamentos Coordenadoras(es). Assim, configura-se o nosso modelo de Equipe ABA, em que três ou mais Agentes de Ensino trabalham em prol da(o) Aprendente, junto à sua família.',
    icon: Users,
  },
  {
    title: 'Psicoterapia',
    description: 'Sessões, baseadas(os) na Ciência da Análise do Comportamento, realizadas por nossas(os) Psicólogas(os), que atendem Aprendentes (pessoas com desenvolvimento atípico ou típico) de diversas idades. Esse acompanhamento psicoterapêutico visa promover autoconhecimento, regulação emocional, repertórios comportamentais mais flexíveis, aumentando o bem-estar da(o) Aprendente.',
    icon: Heart,
  },
  {
    title: 'Orientação Parental',
    description: 'Atendimentos realizados com mãe, pai, e/ou outras(os) Cuidadoras(es) para auxiliá-las(os) a compreender os comportamentos de sua filha ou de seu filho. Durante a Orientação, ofertamos suporte para encaminhar estratégias comportamentais para melhorar a comunicação, manejar comportamentos desafiadores, gerenciar conflitos e fortalecer vínculos familiares, promovendo, assim, um ambiente familiar saudável. Se necessário, poderá ocorrer Treino parental, no qual, por meio de prática, basicamente, ensinaremos as estratégias para manejar comportamentos.',
    icon: Lightbulb,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-gradient-to-b from-yellow-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black">Nossa Beehave Serviços</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto my-4"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            Ofertamos uma variedade de serviços em ABA para Aprendentes e suas família, Profissionais da Saúde e da Educação, Clínicas e Escolas.
          </p>
        </div>

        <div className="mb-12">
          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-yellow-500 p-8 rounded-lg shadow-md max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-yellow-500">
                  <span className="text-white font-bold text-lg">i</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-yellow-900 mb-2">O que significa Aprendente?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Utilizamos esse termo para nos referir à pessoa que atenderemos, com desenvolvimento atípico ou típico. Essa pessoa é <span className="font-semibold text-yellow-700">Aprendente</span> por ser uma(um) <span className="font-semibold text-yellow-700">Agente ativo</span> em sua história individual e social, em <span className="font-semibold text-yellow-700">processo contínuo de aprendizagem</span>.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

      </div>
    </section>
  );
};

export default Services;