import React, { useState, useEffect } from 'react';
// ... outros imports

const CoursesPage: React.FC = () => {
  // 1. Lista de imagens para o carrossel (temas ABA e Treinamento)
  const images = [
    'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1600'
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // 2. Lógica para trocar a imagem automaticamente a cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section com Carrossel Animado */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden flex items-center">
        {/* Renderização das Imagens com Transição */}
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url('${img}')` }}
          />
        ))}

        {/* Overlay Amarelo Beehave (Conforme a referência) */}
        <div className="absolute inset-0 bg-yellow-400/80 backdrop-blur-[2px]"></div>

        {/* Conteúdo Central */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="text-center">
             {/* Logo ou Ícone (Opcional, simulando a abelhinha da referência) */}
             <div className="mb-6 flex justify-center">
                <div className="bg-black p-4 rounded-full shadow-2xl">
                   <Award className="w-12 h-12 text-yellow-400" />
                </div>
             </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-black mb-6 tracking-tight">
              Beehave Cursos
            </h1>
            
            <div className="w-48 h-1.5 bg-black mx-auto mb-8 rounded-full"></div>
            
            <p className="text-xl md:text-2xl text-black max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
              Capacitação profissional em Análise do Comportamento Aplicada (ABA) e gerenciamento de crises.
            </p>

            {/* Badges de Destaque estilo a imagem de referência */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              <div className="flex flex-col items-center group">
                <div className="bg-white p-4 rounded-full shadow-lg mb-3 group-hover:scale-110 transition-transform">
                  <Award className="w-8 h-8 text-black" />
                </div>
                <span className="font-bold text-sm uppercase tracking-wider text-black">Certificação</span>
              </div>
              
              <div className="flex flex-col items-center group">
                <div className="bg-white p-4 rounded-full shadow-lg mb-3 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-black" />
                </div>
                <span className="font-bold text-sm uppercase tracking-wider text-black">Manejo de Crises</span>
              </div>

              <div className="flex flex-col items-center group">
                <div className="bg-white p-4 rounded-full shadow-lg mb-3 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-8 h-8 text-black" />
                </div>
                <span className="font-bold text-sm uppercase tracking-wider text-black">Conteúdo Exclusivo</span>
              </div>
            </div>
          </div>
        </div>

        {/* Indicadores de Slide (Bolinhas) */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {images.map((_, i) => (
            <div 
              key={i} 
              className={`h-2 rounded-full transition-all ${i === currentImage ? 'w-8 bg-black' : 'w-2 bg-black/30'}`}
            />
          ))}
        </div>
      </section>

      {/* ... Restante das seções de cursos */}
    </div>
  );
};

export default CoursesPage;