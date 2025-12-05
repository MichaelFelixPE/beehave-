import React from 'react';
import { Brain, Heart, Users, Lightbulb, MessageSquare, Puzzle } from 'lucide-react';

const serviceItems = [
  {
    title: 'Avaliação Cognitiva',
    description: 'Avaliação abrangente para compreender pontos fortes e desafios cognitivos, fornecendo base para planos terapêuticos personalizados.',
    icon: Brain,
  },
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
  {
    title: 'Avaliação Comportamental',
    description: 'Avaliação individualizada, que, por meio de Protocolos de Avaliação publicados, a nossa Equipe de Avaliação identificará os déficits e excessos comportamentais do Aprendente, a fim de auxiliar na produção efetiva e científica de uma Plano de Ensino Individualizado (PEI). A depender da necessidade da(o) Aprendente, junto a sua família, essa Avaliação pode ser abrangente, quando avalia diferentes áreas de habilidades (ex: comunicação, social, motoras, acadêmicas); ou focal, quando uma área de habilidades é escolhida para avaliar.',
    icon: MessageSquare,
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
            Ofertamos uma variedade de serviços em ABA para Aprendentes* e suas família, Profissionais da Saúde e da Educação, Clínicas e Escolas.
            Utilizamos esse termo para nos referir a pessoa que atenderemos, com desenvolvimento atípico ou típico. Essa pessoa é Aprendente por ser uma(um) Agente ativo em sua história individual e social, em processo contínuo de aprendizagem.
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
          <p className="text-gray-700 max-w-3xl mx-auto">
            Nossa abordagem é individualizada para atender às necessidades específicas de cada criança,
            focando no desenvolvimento de pontos fortes enquanto abordamos os desafios.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;