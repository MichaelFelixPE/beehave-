import React from 'react';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    'Abordagem centrada na criança',
    'Respeito à neurodiversidade e diferenças individuais',
    'Técnicas terapêuticas baseadas em evidências',
    'Envolvimento e educação familiar',
    'Desenvolvimento profissional contínuo',
    'Cuidado colaborativo com escolas e outros profissionais'
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-black opacity-5 transform rotate-3 rounded-lg"></div>
              <img 
                src="https://unex.edu.br/wp-content/uploads/2024/05/close-up-child-enjoying-didactic-game-1-1024x683.jpg" 
                alt="Psicólogo trabalhando com criança" 
                className="rounded-lg shadow-lg relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-yellow-200 rounded-full opacity-20 z-0"></div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-black">Sobre a beehave Psicologia</h2>
              <div className="w-24 h-1 bg-yellow-400"></div>
              
              <p className="text-gray-900">
               A Beehave: Soluções comportamentais foi fundada no dia 02 de abril de 2019 sob o desejo das(o) sócias (o) Analistas do Comportamento em ofertar serviços de saúde e educação com transparência, ética e qualidade na região do Vale do São Francisco, cidades circunvizinhas e em outros Estados, de modo a seguir os princípios da Ciência Análise do Comportamento Aplicada (do inglês, Applied Behavior Analysis – ABA). Portanto, a BeehaVe tem construído a sua trajetória buscando fornecer diversos serviços baseados em ABA com a melhor qualidade que a nossa Equipe pode oferecer. 
              </p>  

              <p className="text-gray-700">
Muitas pessoas se perguntam sobre o porquê desse nome que escolhemos para a nossa empresa. Primeiramente, BeehaVe é um trocadilho a partir da junção de duas palavras da língua inglesa. São elas: Bee (Abelha) e Behave (do verbo to behave, que significa comportar-se). A junção das duas não foi ao acaso. Temos como pilar da nossa empresa os conceitos de pioneirismo, trabalho em equipe, tecnologia e eficiência, e nada melhor para representar isso do que a palavra “bee”.
              </p>
              
              <p className="text-gray-700">
                As abelhas trabalham em um sistema de hierarquia de forma organizada, em que o papel de cada uma na Colmeia é de extrema importância. Conhecidas por trabalharem de forma cooperativa e serem muito eficientes no que fazem, a escolha desse inseto foi a combinação perfeita para como a nossa equipe se organiza, e como o nosso foco em eficiência é central no nosso trabalho. E para fechar, não haveria palavra melhor para agregar à nossa imagem do que “behave”. Somos analistas do comportamento, e portanto trabalhamos na compreensão e intervenção sobre o comportamento humano e todas as suas facetas.
              </p>
              
              <h3 className="text-xl font-semibold mt-8 mb-4 text-black">Nossos Valores Fundamentais</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="flex-shrink-0 w-5 h-5 text-yellow-500 mr-2 mt-0.5" />
                    <span className="text-gray-700">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;