import React, { useState, useEffect } from 'react';
import { Heart, Users, Lightbulb, Puzzle, Info } from 'lucide-react';

// ARRAY 1: Informações Rotativas (Destaques)
const highlightInfos = [
  {
    title: "O que significa Aprendente?",
    content: (
      <>
        Utilizamos esse termo para nos referir à pessoa que atenderemos, com desenvolvimento atípico ou típico. Essa pessoa é <span className="font-semibold text-yellow-700">Aprendente</span> por ser uma(um) <span className="font-semibold text-yellow-700">Agente ativo</span> em sua história individual e social, em <span className="font-semibold text-yellow-700">processo contínuo de aprendizagem</span>.
      </>
    )
  },
  {
    title: "Foco na Família",
    content: "Acreditamos que a evolução do aprendente acontece em conjunto. Por isso, todos os nossos serviços envolvem o suporte, acolhimento e a participação ativa da família e cuidadores no processo terapêutico."
  },
  {
    title: "Base Científica (ABA)",
    content: "Nossas intervenções utilizam a Análise do Comportamento Aplicada. Planejamos cada passo com base em dados e evidências para garantir que o ensino seja efetivo, ético e focado na autonomia."
  }
];

// ARRAY 2: Seus Serviços Originais
const serviceItems = [
  {
    title: 'Avaliação Comportamental',
    description: 'Avaliação individualizada, que, por meio de Protocolos de Avaliação publicados, a nossa Equipe de Avaliação identificará os déficits e excessos comportamentais do Aprendente, a fim de auxiliar na produção efetiva e científica de uma Plano de Ensino Individualizado (PEI).',
    icon: Puzzle,
  },
  {
    title: 'Intervenção Comportamental',
    description: 'Intervenção baseada nos resultados da Avaliação comportamental, totalmente individualizada. Analistas Supervisores elaboram Programas de Ensino aplicados por aplicadores treinados, configurando o modelo de Equipe ABA.',
    icon: Users,
  },
  {
    title: 'Psicoterapia',
    description: 'Sessões baseadas na Ciência da Análise do Comportamento para pessoas com desenvolvimento atípico ou típico. Visa promover autoconhecimento, regulação emocional e repertórios comportamentais flexíveis.',
    icon: Heart,
  },
  {
    title: 'Orientação Parental',
    description: 'Suporte para pais e cuidadores compreenderem comportamentos e aplicarem estratégias que melhorem a comunicação, gerenciem conflitos e fortaleçam vínculos familiares.',
    icon: Lightbulb,
  },
];

const Services = () => {
  const [currentInfo, setCurrentInfo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInfo((prev) => (prev + 1) % highlightInfos.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="services" className="py-16 bg-gradient-to-b from-yellow-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* PARTE INVERTIDA: O BLOCO DE DESTAQUE AGORA VEM NO TOPO */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-yellow-500 p-8 rounded-lg shadow-md max-w-4xl mx-auto relative overflow-hidden">
            <div className="flex items-start gap-4 transition-all duration-500">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-yellow-500 shadow-sm">
                  <Info className="text-white w-6 h-6" />
                </div>
              </div>
              <div className="flex-1 min-h-[120px]">
                <h3 className="text-lg font-semibold text-yellow-900 mb-2 transition-all">
                  {highlightInfos[currentInfo].title}
                </h3>
                <div className="text-gray-700 leading-relaxed">
                  {highlightInfos[currentInfo].content}
                </div>
              </div>
            </div>

            {/* Indicadores de Progresso (Bolinhas) */}
            <div className="flex justify-center gap-2 mt-4">
              {highlightInfos.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentInfo(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentInfo ? 'w-8 bg-yellow-500' : 'w-2 bg-yellow-200 hover:bg-yellow-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* PARTE INVERTIDA: O CABEÇALHO "NOSSA BEEHAVE" DESCEU PARA O MEIO */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black">Nossa Beehave Serviços</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto my-4"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            Ofertamos uma variety de serviços em ABA para Aprendentes e suas famílias, Profissionais da Saúde e da Educação, Clínicas e Escolas.
          </p>
        </div>

        {/* GRID DE SERVIÇOS (OS CARDS) FICA POR ÚLTIMO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceItems.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="inline-block p-4 bg-yellow-100 rounded-2xl mb-6">
                  <IconComponent className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-black">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;