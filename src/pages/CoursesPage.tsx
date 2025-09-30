import React from 'react';
import { BookOpen, Clock, Users, Award, CheckCircle, Calendar } from 'lucide-react';
import Button from '../components/ui/Button';

const courses = [
  {
    id: 1,
    title: 'Curso de Aplicador em ABA Beehave',
    description: 'Curso completo para formação de aplicadores em Análise do Comportamento Aplicada (ABA), com foco em intervenções baseadas em evidências para pessoas com Transtorno do Espectro Autista.',
    duration: '120 horas',
    format: 'Presencial e Online',
    level: 'Iniciante a Intermediário',
    features: [
      'Fundamentos teóricos da ABA',
      'Técnicas de avaliação comportamental',
      'Estratégias de intervenção',
      'Coleta e análise de dados',
      'Supervisão prática',
      'Certificado reconhecido'
    ],
    image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 2,
    title: 'Curso Professional Crisis Management (PCM)',
    description: 'Treinamento especializado em gerenciamento profissional de crises, focado em técnicas de prevenção, intervenção e manejo de situações de crise comportamental.',
    duration: '40 horas',
    format: 'Presencial',
    level: 'Intermediário a Avançado',
    features: [
      'Identificação de sinais de crise',
      'Técnicas de desescalada',
      'Intervenções físicas seguras',
      'Prevenção de lesões',
      'Documentação e relatórios',
      'Certificação internacional'
    ],
    image: 'https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 3,
    title: 'Curso Recertificação Professional Crisis Management (PCM)',
    description: 'Curso de atualização e recertificação para profissionais já certificados em PCM, mantendo as competências atualizadas conforme os padrões internacionais.',
    duration: '16 horas',
    format: 'Presencial',
    level: 'Recertificação',
    features: [
      'Revisão de técnicas atualizadas',
      'Novas diretrizes de segurança',
      'Prática supervisionada',
      'Avaliação de competências',
      'Renovação da certificação',
      'Materiais atualizados'
    ],
    image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

const CoursesPage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-50 to-yellow-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Beehave Cursos
            </h1>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Capacitação profissional em Análise do Comportamento Aplicada (ABA) e gerenciamento de crises, 
              com cursos reconhecidos e ministrados por especialistas qualificados.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center">
                <Award className="w-5 h-5 mr-2 text-yellow-500" />
                <span>Certificação Reconhecida</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2 text-yellow-500" />
                <span>Instrutores Qualificados</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-yellow-500" />
                <span>Material Atualizado</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Nossos Cursos
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Oferecemos cursos especializados para profissionais que desejam se capacitar 
              em ABA e gerenciamento de crises comportamentais.
            </p>
          </div>

          <div className="space-y-12">
            {courses.map((course, index) => (
              <div 
                key={course.id} 
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="lg:w-1/2">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-64 lg:h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
                
                <div className="lg:w-1/2 space-y-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                      {course.title}
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {course.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-yellow-50 p-4 rounded-lg text-center">
                      <Clock className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
                      <p className="font-semibold text-black">{course.duration}</p>
                      <p className="text-sm text-gray-600">Duração</p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg text-center">
                      <BookOpen className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
                      <p className="font-semibold text-black">{course.format}</p>
                      <p className="text-sm text-gray-600">Formato</p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg text-center">
                      <Users className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
                      <p className="font-semibold text-black">{course.level}</p>
                      <p className="text-sm text-gray-600">Nível</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-black mb-3">
                      O que você vai aprender:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {course.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="large">
                      <Calendar className="w-5 h-5 mr-2" />
                      Inscrever-se
                    </Button>
                    <Button variant="outline" size="large">
                      Mais Informações
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Pronto para se capacitar?
          </h2>
          <p className="text-xl text-black mb-8 opacity-90">
            Entre em contato conosco para mais informações sobre nossos cursos 
            e próximas turmas disponíveis.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="secondary" size="large">
              Falar com Consultor
            </Button>
            <Button variant="outline" size="large" className="bg-white text-black border-black hover:bg-gray-50">
              Ver Calendário de Cursos
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;