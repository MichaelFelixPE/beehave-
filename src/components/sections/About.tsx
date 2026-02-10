import React from 'react';
import { CheckCircle, Target, Eye, Heart } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    'Transparência',
    'Cooperação',
    'Ética e qualidade'
  ];

  // Defina aqui os links das imagens para cada card
  const images = {
    missao: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
    visao: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
    valores: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Sobre a Beehave</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        {/* ... (Seção superior permanece igual) ... */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity blur-xl"></div>
            <div className="relative">
              <img
                src="https://i.imgur.com/shWLLoV.jpeg" 
                alt="Psicólogo trabalhando com criança"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-yellow-400 rounded-full opacity-30 blur-2xl"></div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-yellow-400">
              <p className="text-gray-800 leading-relaxed text-lg">
                A Beehave: Soluções comportamentais foi fundada no dia 02 de abril de 2019 sob o desejo das(o) sócias (o) Analistas do Comportamento em ofertar serviços de saúde e educação com transparência, ética e qualidade na região do Vale do São Francisco, cidades circunvizinhas e em outros Estados, de modo a seguir os princípios da Ciência Análise do Comportamento Aplicada (do inglês, Applied Behavior Analysis – ABA).
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-3xl mr-3">🐝</span>
                Por que "Beehave"?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Beehave é um trocadilho a partir da junção de duas palavras da língua inglesa: <strong>Bee</strong> (Abelha) e <strong>Behave</strong> (comportar-se). A junção das duas não foi ao acaso. Temos como pilar da nossa empresa os conceitos de pioneirismo, trabalho em equipe, tecnologia e eficiência.
              </p>
              <p className="text-gray-700 leading-relaxed">
                As abelhas trabalham em um sistema de hierarquia de forma organizada, em que o papel de cada uma na Colmeia é de extrema importância. Conhecidas por trabalharem de forma cooperativa e serem muito eficientes no que fazem, a escolha desse inseto foi a combinação perfeita para como a nossa equipe se organiza.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card Missão */}
            <div 
              className="relative overflow-hidden rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow border-t-4 border-yellow-500 min-h-[300px] flex flex-col justify-center"
              style={{ backgroundImage: `url(${images.missao})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="absolute inset-0 bg-yellow-600/80 mix-blend-multiply"></div> {/* Overlay */}
              <div className="relative z-10">
                <div className="flex items-center justify-center w-16 h-16 bg-yellow-500 rounded-full mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Missão</h3>
                <p className="text-white leading-relaxed font-medium">
                  Prestar serviços éticos baseados em evidências científicas para melhoria da qualidade de vida de nossas(os) Aprendentes, clientes e Parceiras(os).
                </p>
              </div>
            </div>

            {/* Card Visão */}
            <div 
              className="relative overflow-hidden rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow border-t-4 border-amber-600 min-h-[300px] flex flex-col justify-center"
              style={{ backgroundImage: `url(${images.visao})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="absolute inset-0 bg-amber-800/80 mix-blend-multiply"></div> {/* Overlay */}
              <div className="relative z-10">
                <div className="flex items-center justify-center w-16 h-16 bg-amber-600 rounded-full mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Visão</h3>
                <p className="text-white leading-relaxed font-medium">
                  Ser referência na produção de conhecimento e de serviço em Análise do Comportamento.
                </p>
              </div>
            </div>

            {/* Card Valores */}
            <div 
              className="relative overflow-hidden rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow border-t-4 border-gray-900 min-h-[300px] flex flex-col justify-center"
              style={{ backgroundImage: `url(${images.valores})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="absolute inset-0 bg-gray-900/85"></div> {/* Overlay mais escuro para os valores */}
              <div className="relative z-10">
                <div className="flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full mb-6 border border-gray-700">
                  <Heart className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Valores</h3>
                <ul className="space-y-3">
                  {values.map((value, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="flex-shrink-0 w-5 h-5 text-yellow-400 mr-3 mt-0.5" />
                      <span className="text-gray-100 font-semibold">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;