import React, { useState, useEffect } from 'react';
import { BookOpen, Clock, Users, Award, CheckCircle, Calendar, Star, MapPin } from 'lucide-react';
import Button from '../components/ui/Button';

// Imagens para o slider automático
const heroImages = [
  'https://i.etsystatic.com/38939223/r/il/cfd0a5/5827636191/il_fullxfull.5827636191_gbfr.jpg',
  'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
];

const courses = [
  { 
    id: 1,
    title: 'Curso de Aplicadora(dor) em Análise do Comportamento Aplicada (ABA)',
    subtitle: 'às pessoas com desenvolvimento atípico/ TEA – 9ª Edição',
    enrollLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfMLn2NbyM7ETo4DERkaz60Ob850K90gd59sBhBmBEyrH3pxg/viewform',

    description: 'A 9ª edição do Curso de Aplicadora(dor) em ABA mais esperado do Vale do São Francisco está com inscrições abertas! Com carga horária de 60 horas e uma BeeEquipe, de Docentes e Monitoras, formada por Especialistas em ABA, Mestras(es) e Doutora em Análise do Comportamento.',

    duration: '60 horas',
    format: 'Presencial',
    level: 'Iniciante',
    price: 'Consulte valores',
    rating: 4.9,
    students: 150,

    features: [
      'Material em ABA atualizado',
      'Teoria e Prática com domínio sequencial',
      'Sondagens processuais Teóricas e Práticas',
      'Aulas aos sábados',
      '60 horas de aulas presenciais',
      'Relatório de desempenho pós curso',
      'Certificado reconhecido pelo Selo Beehave Cursos',
      'Docentes especialistas em ABA',
    ],

    modules: [
      'Ciclo 01: Quero ser aplicadora(dor) em ABA',
      'Ciclo 02: Planejamento da intervenção',
      'Ciclo 03: Estratégias de ensino em ABA',
      'Ciclo 04: Funções do aplicador',
    ],

    image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg',
    color: 'from-yellow-400 to-yellow-500',
  },

  {
    id: 2,
    title: 'Workshop: ColmeIA',
    subtitle: 'Inovação terapêutica com Inteligência Artificial',
    enrollLink: 'https://forms.gle/gM57dboC5otEoxn67',

    description: 'Workshop focado no uso da Inteligência Artificial na criação e adaptação de recursos terapêuticos em ABA.',

    duration: '40 horas',
    format: 'Online',
    level: 'Iniciante',
    price: 'Consulte valores',
    rating: 4.8,
    students: 85,

    features: [
      'Identificação de sinais de crise',
      'Técnicas de desescalada',
      'Intervenções seguras',
      'Documentação profissional',
      'Certificação',
      'Treinamento prático',
    ],

    modules: [
      'Ciclo 01: O que é Inteligência Artificial?',
      'Ciclo 02: Fundamentos de ABA',
      'Ciclo 03: Prompts práticos',
      'Ciclo 04: Ética na IA',
    ],

    image: 'https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg',
    color: 'from-yellow-400 to-yellow-500',
  },

  {
    id: 3,
    title: 'Curso Recertificação PCM',
    subtitle: 'Atualização da Certificação PCM',
    enrollLink: 'https://link-do-curso-3.com',

    description: 'Curso de atualização e recertificação para profissionais já certificados em PCM.',

    duration: '16 horas',
    format: 'Presencial',
    level: 'Recertificação',
    price: 'Consulte valores',
    rating: 4.9,
    students: 120,

    features: [
      'Revisão de técnicas',
      'Novas diretrizes',
      'Prática supervisionada',
      'Avaliação final',
      'Renovação da certificação',
    ],

    modules: [
      'Módulo 1: Atualizações',
      'Módulo 2: Técnicas',
      'Módulo 3: Revisão prática',
      'Módulo 4: Avaliação',
    ],

    image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg',
    color: 'from-yellow-400 to-yellow-500',
  },
];

const CoursesPage = () => {

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {

    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);

  }, []);

  return (

    <div className="pt-20 bg-white">

      {/* HERO */}
      <section className="relative h-[350px] md:h-[550px] overflow-hidden">

        {heroImages.map((img, index) => (

          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: `url('${img}')` }}
          />

        ))}

      </section>

      {/* CURSOS */}
      <section className="py-20">

        <div className="max-w-7xl mx-auto px-4">

          <div className="space-y-16">

            {courses.map((course) => (

              <div key={course.id} className="bg-white rounded-2xl shadow-xl">

                <div className={`bg-gradient-to-r ${course.color} p-8`}>

                  <h3 className="text-3xl font-bold">{course.title}</h3>
                  <p>{course.subtitle}</p>

                </div>

                <div className="p-8 grid lg:grid-cols-3 gap-8">

                  <div className="lg:col-span-2">

                    <p className="mb-6">{course.description}</p>

                    <h4 className="font-bold mb-3">Ciclos</h4>

                    {course.modules.map((module, index) => (

                      <div key={index}>{module}</div>

                    ))}

                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl">

                    <h4 className="font-bold mb-4">Você vai receber</h4>

                    {course.features.map((feature, index) => (

                      <div key={index} className="flex mb-2">

                        <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                        {feature}

                      </div>

                    ))}

                    <div className="mt-6">

                      <p className="text-xl font-bold mb-4">{course.price}</p>

                      <a
                        href={course.enrollLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >

                        <Button
                          size="large"
                          className="w-full bg-yellow-400 hover:bg-yellow-500 text-black"
                        >
                          <Calendar className="w-5 h-5 mr-2" />
                          Inscrever-se Agora
                        </Button>

                      </a>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

    </div>

  );

};

export default CoursesPage;