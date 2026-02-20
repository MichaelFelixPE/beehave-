import React, { useState, useEffect } from 'react';
import { BookOpen, Clock, Users, Award, CheckCircle, Calendar, Star, MapPin } from 'lucide-react';
import Button from '../components/ui/Button';

/* ================= HERO IMAGES ================= */

const heroImages = [
  'https://i.etsystatic.com/38939223/r/il/cfd0a5/5827636191/il_fullxfull.5827636191_gbfr.jpg',
  'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg',
  'https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg',
];

/* ================= COURSES ================= */

const courses = [
  // (seus cursos continuam exatamente iguais aqui)
];

const CoursesPage: React.FC = () => {

  /* ================= SLIDER STATE ================= */

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1
      );
    }, 4000); // troca a cada 4 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-20 bg-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative py-20 overflow-hidden">

        {/* SLIDER BACKGROUND */}
        <div className="absolute inset-0">
          {heroImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
                index === currentImage ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-yellow-400 bg-opacity-80"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Beehave Cursos
            </h1>
            <div className="w-32 h-1 bg-black mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-black max-w-4xl mx-auto mb-10 opacity-90">
              Capacitação profissional em Análise do Comportamento Aplicada (ABA) e gerenciamento de crises,
              com cursos reconhecidos e ministrados por especialistas qualificados.
            </p>

            <div className="flex flex-wrap justify-center gap-8 text-black">
              <div className="flex items-center bg-black bg-opacity-10 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                <Award className="w-6 h-6 mr-3" />
                <span className="font-semibold">Certificação Reconhecida</span>
              </div>
              <div className="flex items-center bg-black bg-opacity-10 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                <Users className="w-6 h-6 mr-3" />
                <span className="font-semibold">Instrutores Qualificados</span>
              </div>
              <div className="flex items-center bg-black bg-opacity-10 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                <BookOpen className="w-6 h-6 mr-3" />
                <span className="font-semibold">Material Atualizado</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= RESTANTE DO SEU CÓDIGO CONTINUA IGUAL ================= */}

    </div>
  );
};

export default CoursesPage;