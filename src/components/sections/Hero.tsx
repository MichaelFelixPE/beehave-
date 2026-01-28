import React from 'react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  // FUNÇÃO DO WHATSAPP COM SEU LINK
  const handleWhatsappClick = () => {
    const whatsappUrl = "https://wa.me/message/HOVDY5ONMWA4A1?src=qr";
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative pt-24 pb-16 overflow-hidden bg-[#FFFCF0]">
      {/* BACKGROUND PATTERN DE COLMEIA */}
      <div className="absolute inset-0 opacity-[0.06] z-0" 
        style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'56\' height=\'98\' viewBox=\'0 0 28 49\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.32v12.86l10.99 6.34 11-6.35V17.32L14 10.98 3 17.32z\' fill=\'%23eab308\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
          backgroundSize: '56px 98px'
        }}>
      </div>

      {/* EFEITOS DE BRILHO (GLOWS) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-200/40 rounded-full blur-[120px] z-0"></div>
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-amber-100/50 rounded-full blur-[100px] z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
              ABA em suas diferentes
              <span className="text-yellow-500"> áreas </span> 
              de aplicação
            </h1>
            
            <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto lg:mx-0">
              Na Beehave, ofertamos uma variedade de serviços em ABA (do inglês, Applied Behavior Analysis  ou Análise do Comportamento Aplicada), por meio de duas linhas organizacionais entrelaçadas: a Beehave Serviços e a Beehave Cursos. A Beehave Serviços fornece serviços em ABA de assistência à(ao) Cliente, como  Avaliação comportamental, Intervenção baseada em ABA, Psicoterapia, Supervisão técnica à profissionais da saúde e educação, Consultorias para Clínicas e Escolas. A Beehave Cursos oferta formações em ABA, como Cursos de Aplicadora(dor), Curso PCM (gerenciamento de crises), Treinamentos de Profissionais. Nossa BeeEquipe é composta por profissionais qualificados em ABA, com Especialização, Mestrado e/ou Doutorado. Trabalhamos com Afeto, Ciência e Ética. Entre em contato conosco para nos conhecer!
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Button size="large" onClick={handleWhatsappClick}>
                Agende uma Reunião
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="bg-white/80 backdrop-blur-md p-4 rounded-lg shadow-md text-center border border-yellow-100">
                <p className="text-3xl font-bold text-yellow-500">25+</p>
                <p className="text-gray-700 text-sm mt-1">Especialistas</p>
              </div>
              <div className="bg-white/80 backdrop-blur-md p-4 rounded-lg shadow-md text-center border border-yellow-100">
                <p className="text-3xl font-bold text-yellow-500">6+</p>
                <p className="text-gray-700 text-sm mt-1">Anos de Experiência</p>
              </div>
              <div className="bg-white/80 backdrop-blur-md p-4 rounded-lg shadow-md text-center border border-yellow-100">
                <p className="text-3xl font-bold text-yellow-500">300+</p>
                <p className="text-gray-700 text-sm mt-1">Aprendentes Atendidas(os)</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-yellow-400 rounded-full opacity-40"></div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-yellow-400 rounded-full opacity-30"></div>
            <img 
              src="https://images.pexels.com/photos/8612927/pexels-photo-8612927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Criança em sessão de terapia" 
              className="rounded-lg shadow-xl relative z-10 w-full object-cover object-center h-[500px]"
            />
          </div>
        </div>
      </div>

      {/* Curved divider do original */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#FFFFFF" fillOpacity="1" d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,176C672,160,768,160,864,176C960,192,1056,224,1152,224C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;