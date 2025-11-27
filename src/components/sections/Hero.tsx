import React from 'react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-white opacity-90 z-0">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23FFF9C4" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
              Especialistas em 
              <span className="text-yellow-500"> ABA </span> 
              aplicado ao TEA
            </h1>
            
            <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto lg:mx-0">
              Na Beehave, temos duas linhas organizacionais entrelaçadas: a Beehave Serviços e a Beehave Cursos. A primeira é direcionada para assistência à(ao) cliente (e.g., Avaliação comportamental, Supervisão, Consultorias) e a segunda, para formação continuada de cliente (e.g., Cursos livres, Acompanhamento acadêmico, treinamentos) Nossas(os) clientes são desde pessoas físicas (Aprendentes com desenvolvimento atípico e típico), a pessoas jurídicas (ex.: operadoras de saúde, clínicas).
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Button size="large">
                Agende uma Reunião
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <p className="text-3xl font-bold text-yellow-500">25+</p>
                <p className="text-gray-700 text-sm mt-1">Especialistas</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <p className="text-3xl font-bold text-yellow-500">6+</p>
                <p className="text-gray-700 text-sm mt-1">Anos de Experiência</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
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

      {/* Curved divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#FFF9C4" fillOpacity="0.3" d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,176C672,160,768,160,864,176C960,192,1056,224,1152,224C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;