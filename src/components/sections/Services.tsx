import React, { useState, useEffect } from 'react';
import { Heart, Users, Lightbulb, Puzzle, Info } from 'lucide-react';

const highlightInfos = [
  {
    title: "O que significa Aprendente?",
    tag: "NOSSO CONCEITO",
    content: (
      <>
        Utilizamos esse termo para nos referir à pessoa que atenderemos, com desenvolvimento atípico ou típico. Essa pessoa é <span className="font-bold text-yellow-600">Aprendente</span> por ser uma(um) <span className="font-bold text-yellow-600">Agente ativo</span> em sua história individual e social.
      </>
    )
  },
  {
    title: "Foco na Família",
    tag: "SUPORTE INTEGRAL",
    content: "Acreditamos que a evolução do aprendente acontece em conjunto. Por isso, todos os nossos serviços envolvem o suporte, acolhimento e a participação ativa da família no processo terapêutico."
  },
  {
    title: "Base Científica (ABA)",
    tag: "METODOLOGIA",
    content: "Nossas intervenções utilizam a Análise do Comportamento Aplicada. Planejamos cada passo com base em dados e evidências para garantir um ensino efetivo, ético e focado na autonomia."
  }
];

const serviceItems = [
  {
    title: 'Avaliação Comportamental',
    description: 'Avaliação individualizada por meio de Protocolos de Avaliação publicados para identificar déficits e excessos, auxiliando na produção do PEI.',
    icon: Puzzle,
  },
  {
    title: 'Intervenção Comportamental',
    description: 'Intervenção baseada nos resultados da avaliação. Analistas Supervisores elaboram programas aplicados por técnicos treinados em modelo ABA.',
    icon: Users,
  },
  {
    title: 'Psicoterapia',
    description: 'Sessões baseadas na Ciência da Análise do Comportamento para promover autoconhecimento, regulação emocional e repertórios flexíveis.',
    icon: Heart,
  },
  {
    title: 'Orientação Parental',
    description: 'Suporte para pais compreenderem comportamentos e aplicarem estratégias que fortaleçam vínculos e melhorem a comunicação.',
    icon: Lightbulb,
  },
];

const Services = () => {
  const [currentInfo, setCurrentInfo] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInfo((prev) => (prev + 1) % highlightInfos.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="services" className="py-24 bg-[#FAFAFA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CARROSSEL COM DESIGN MODERNO (GLASSMORPHISM) */}
        <div className="mb-32 relative">
          {/* Blobs Decorativos de Fundo */}
          <div className="absolute -top-16 -left-16 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse shadow-2xl"></div>

          <div className="relative bg-white/70 backdrop-blur-xl border border-white/40 p-10 md:p-16 rounded-[2.5rem] shadow-[0_32px_64px_-15px_rgba(0,0,0,0.07)] max-w-5xl mx-auto">
            
            <div 
              key={currentInfo} 
              className="flex flex-col md:flex-row items-center md:items-start gap-10 animate-[fadeIn_0.6s_ease-out]"
            >
              {/* Ícone Estilizado */}
              <div className="flex-shrink-0">
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                  <div className="relative flex items-center justify-center h-20 w-20 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 shadow-lg shadow-yellow-200">
                    <Info className="text-white w-10 h-10" />
                  </div>
                </div>
              </div>

              {/* Texto do Slide */}
              <div className="flex-1 text-center md:text-left">
                <span className="text-yellow-600 font-bold text-xs uppercase tracking-[0.3em] mb-3 block">
                  {highlightInfos[currentInfo].tag}
                </span>
                <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 tracking-tight">
                  {highlightInfos[currentInfo].title}
                </h3>
                <div className="text-gray-600 text-lg md:text-xl leading-relaxed font-normal italic">
                  "{highlightInfos[currentInfo].content}"
                </div>
              </div>
            </div>

            {/* Navegação Minimalista */}
            <div className="flex justify-center md:justify-start gap-3 mt-12">
              {highlightInfos.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentInfo(idx)}
                  className="group relative h-1.5 focus:outline-none"
                >
                  <div className={`h-full rounded-full transition-all duration-700 ${
                    idx === currentInfo 
                      ? 'w-16 bg-yellow-500' 
                      : 'w-4 bg-gray-200 hover:bg-yellow-300'
                  }`} />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* CABEÇALHO DA SEÇÃO DE SERVIÇOS */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Nossa Beehave Serviços
          </h2>
          <div className="w-20 h-1.5 bg-yellow-400 mx-auto mt-6 rounded-full"></div>
          <p className="mt-8 max-w-2xl mx-auto text-gray-500 text-lg">
            Ofertamos uma variedade de serviços especializados para o desenvolvimento humano com rigor científico e empatia.
          </p>
        </div>

        {/* GRID DE SERVIÇOS (CARDS REESTILIZADOS) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {serviceItems.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index} 
                className="group bg-white p-10 rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-gray-100 hover:border-yellow-200 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(251,191,36,0.1)] hover:-translate-y-2"
              >
                <div className="inline-block p-5 bg-yellow-50 rounded-2xl mb-8 group-hover:scale-110 group-hover:bg-yellow-100 transition-all duration-500">
                  <IconComponent className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-yellow-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-base md:text-lg font-light">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Adicione este CSS global ou no seu arquivo de estilos para a animação fadeIn */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Services;