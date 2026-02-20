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
  {
    id: 1,
    title: 'Curso de Aplicador em ABA Beehave',
    subtitle: 'Formação Completa em Análise do Comportamento Aplicada',
    description:
      'Curso completo para formação de aplicadores em Análise do Comportamento Aplicada (ABA), com foco em intervenções baseadas em evidências para pessoas com Transtorno do Espectro Autista.',
    duration: '120 horas',
    format: 'Presencial e Online',
    level: 'Iniciante a Intermediário',
    price: 'Consulte valores',
    rating: 4.9,
    students: 150,
    features: [
      'Fundamentos teóricos da ABA',
      'Técnicas de avaliação comportamental',
      'Estratégias de intervenção',
      'Coleta e análise de dados',
      'Supervisão prática',
      'Certificado reconhecido',
      'Material didático completo',
      'Suporte pós-curso',
    ],
    modules: [
      'Módulo 1: Introdução à ABA',
      'Módulo 2: Princípios do Comportamento',
      'Módulo 3: Avaliação Funcional',
      'Módulo 4: Técnicas de Intervenção',
      'Módulo 5: Coleta de Dados',
      'Módulo 6: Prática Supervisionada',
    ],
    image:
      'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    color: 'from-yellow-400 to-yellow-500',
  },
  {
    id: 2,
    title: 'Curso Professional Crisis Management (PCM)',
    subtitle: 'Gerenciamento Profissional de Crises Comportamentais',
    description:
      'Treinamento especializado em gerenciamento profissional de crises, focado em técnicas de prevenção, intervenção e manejo de situações de crise comportamental.',
    duration: '40 horas',
    format: 'Presencial',
    level: 'Intermediário a Avançado',
    price: 'Consulte valores',
    rating: 4.8,
    students: 85,
    enrollLink: 'https://forms.gle/gM57dboC5otEoxn67',
    features: [
      'Identificação de sinais de crise',
      'Técnicas de desescalada',
      'Intervenções físicas seguras',
      'Prevenção de lesões',
      'Documentação e relatórios',
      'Certificação internacional',
      'Treinamento prático intensivo',
      'Protocolo de segurança',
    ],
    modules: [
      'Módulo 1: Fundamentos do PCM',
      'Módulo 2: Identificação de Riscos',
      'Módulo 3: Técnicas de Desescalada',
      'Módulo 4: Intervenções Físicas',
      'Módulo 5: Documentação Legal',
      'Módulo 6: Certificação Prática',
    ],
    image:
      'https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    color: 'from-yellow-400 to-yellow-500',
  },
  {
    id: 3,
    title: 'Curso Recertificação Professional Crisis Management (PCM)',
    subtitle: 'Atualização e Renovação da Certificação PCM',
    description:
      'Curso de atualização e recertificação para profissionais já certificados em PCM, mantendo as competências atualizadas conforme os padrões internacionais.',
    duration: '16 horas',
    format: 'Presencial',
    level: 'Recertificação',
    price: 'Consulte valores',
    rating: 4.9,
    students: 120,
    features: [
      'Revisão de técnicas atualizadas',
      'Novas diretrizes de segurança',
      'Prática supervisionada',
      'Avaliação de competências',
      'Renovação da certificação',
      'Materiais atualizados',
      'Networking profissional',
      'Certificado válido por 2 anos',
    ],
    modules: [
      'Módulo 1: Atualizações Normativas',
      'Módulo 2: Novas Técnicas',
      'Módulo 3: Revisão Prática',
      'Módulo 4: Avaliação Final',
    ],
    image:
      'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    color: 'from-yellow-400 to-yellow-500',
  },
];

const CoursesPage: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-20 bg-white">

      {/* HERO */}
      <section className="relative py-20 overflow-hidden">

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

        <div className="absolute inset-0 bg-yellow-400 bg-opacity-80"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
            Beehave Cursos
          </h1>
          <div className="w-32 h-1 bg-black mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-black max-w-4xl mx-auto mb-10 opacity-90">
            Capacitação profissional em ABA e gerenciamento de crises.
          </p>
        </div>

      </section>

      {/* COURSES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold mb-4">{course.title}</h2>
                <p className="mb-4">{course.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default CoursesPage;