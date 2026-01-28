import React from 'react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  const handleWhatsappClick = () => {
    const whatsappUrl = "https://wa.me/message/HOVDY5ONMWA4A1?src=qr";
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative pt-24 pb-16 overflow-hidden bg-[#FFFCF0]">
      {/* PADRÃO DE COLMEIA NO FUNDO */}
      <div 
        className="absolute inset-0 opacity-[0.06] z-0" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='98' viewBox='0 0 28 49'%3E%3Cpath fill='%23eab308' d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.32v12.86l10.99 6.34 11-6.35V17.32L14 10.98 3 17.32z'/%3E%3C/svg%3E")`,
          backgroundSize: '56px 98px'
        }}
      ></div>

      {/* GRADIENTES DE LUZ (GLOWS) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-200/40 rounded-full blur-[120px] z-0"></div>
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-amber-100/50 rounded-full blur-[100px] z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1]">
              ABA em suas diferentes
              <span className="block text-yellow-500"> áreas </span> 
              de aplicação
            </h1>
            
            <p className="mt-8 text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Na <span className="text-yellow-600 font-bold">Na Beehave, ofertamos uma variedade de serviços em ABA (do inglês, Applied Behavior Analysis ou Análise do Comportamento Aplicada), por meio de duas linhas organizacionais interligadas: a Beehave Serviços e a Beehave Cursos. A Beehave Serviços fornece serviços em ABA de assistência (a/o) Cliente, como Avaliação comportamental, Intervenção baseada em ABA, Psicoterapia, Supervisão técnica a profissionais da saúde e educação, Consultorias para Clínicas e Escolas. A Beehave Cursos oferta formações em ABA, como Cursos de Aplicador(a), Cursos PCM (gerenciamento de crises), Treinamentos de Profissionais. Nossa BeeEquipe é composta por profissionais qualificados em ABA, com Especialização, Mestrado ou Doutorado. Trabalhamos com Afeto, Ciência e Ética. Entre em contato conosco para nos conhecer!</span>.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              {/* APENAS O BOTÃO DE WHATSAPP AGORA */}
              <Button size="large" onClick={handleWhatsappClick}>
                Agende uma Reunião
              </Button>
            </div>

            {/* STATS CARDS */}
            <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0">
              {[
                { label: 'Especialistas', val: '25+' },
                { label: 'Anos de Exp.', val: '6+' },
                { label: 'Aprendentes', val: '300+' }
              ].map((stat, i) => (
                <div key={i} className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-yellow-100 flex flex-col items-center hover:scale-105 transition-transform">
                  <p className="text-3xl font-black text-yellow-500">{stat.val}</p>
                  <p className="text-slate-500 text-[11px] font-bold uppercase tracking-wider mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* IMAGEM COM MOLDURA */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-yellow-400/20 rounded-[2rem] blur-2xl z-0"></div>
            <img 
              src="https://images.pexels.com/photos/8612927/pexels-photo-8612927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Criança em sessão de terapia" 
              className="rounded-[2rem] shadow-2xl relative z-10 w-full object-cover h-[550px] border-8 border-white"
            />
          </div>

        </div>
      </div>

      {/* DIVISOR DE ONDA SUAVE */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
        <svg fill="#FFFFFF" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px]">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V49.75C51.26,80.42,149.6,95.29,249.23,85.21,290.41,81.07,321.39,56.44,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;