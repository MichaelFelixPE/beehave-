import React from 'react';
import { BookOpen, Clock, Users, Award, CheckCircle, Calendar, Star, MapPin } from 'lucide-react';
import Button from '../components/ui/Button';

const courses = [
  {
    id: 1,
    title: 'Curso de Aplicador em ABA Beehave',
    subtitle: 'Formação Completa em Análise do Comportamento Aplicada',
    description: 'Curso completo para formação de aplicadores em Análise do Comportamento Aplicada (ABA), com foco em intervenções baseadas em evidências para pessoas com Transtorno do Espectro Autista.',
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
      'Suporte pós-curso'
    ],
    modules: [
      'Módulo 1: Introdução à ABA',
      'Módulo 2: Princípios do Comportamento',
      'Módulo 3: Avaliação Funcional',
      'Módulo 4: Técnicas de Intervenção',
      'Módulo 5: Coleta de Dados',
      'Módulo 6: Prática Supervisionada'
    ],
    image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    color: 'from-yellow-400 to-yellow-500'
  },
  {
    id: 2,
    title: 'Curso Professional Crisis Management (PCM)',
    subtitle: 'Gerenciamento Profissional de Crises Comportamentais',
    description: 'Treinamento especializado em gerenciamento profissional de crises, focado em técnicas de prevenção, intervenção e manejo de situações de crise comportamental.',
    duration: '40 horas',
    format: 'Presencial',
    level: 'Intermediário a Avançado',
    price: 'Consulte valores',
    rating: 4.8,
    students: 85,
    features: [
      'Identificação de sinais de crise',
      'Técnicas de desescalada',
      'Intervenções físicas seguras',
      'Prevenção de lesões',
      'Documentação e relatórios',
      'Certificação internacional',
      'Treinamento prático intensivo',
      'Protocolo de segurança'
    ],
    modules: [
      'Módulo 1: Fundamentos do PCM',
      'Módulo 2: Identificação de Riscos',
      'Módulo 3: Técnicas de Desescalada',
      'Módulo 4: Intervenções Físicas',
      'Módulo 5: Documentação Legal',
      'Módulo 6: Certificação Prática'
    ],
    image: 'https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    color: 'from-yellow-400 to-yellow-500'
  },
  {
    id: 3,
    title: 'Curso Recertificação Professional Crisis Management (PCM)',
    subtitle: 'Atualização e Renovação da Certificação PCM',
    description: 'Curso de atualização e recertificação para profissionais já certificados em PCM, mantendo as competências atualizadas conforme os padrões internacionais.',
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
      'Certificado válido por 2 anos'
    ],
    modules: [
      'Módulo 1: Atualizações Normativas',
      'Módulo 2: Novas Técnicas',
      'Módulo 3: Revisão Prática',
      'Módulo 4: Avaliação Final'
    ],
    image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    color: 'from-yellow-400 to-yellow-500'
  }
];

const CoursesPage: React.FC = () => {
  return (
    <div className="pt-20 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              beehave Cursos
            </h1>
            <div className="w-32 h-1 bg-black mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-black max-w-4xl mx-auto mb-10 opacity-90">
              Capacitação profissional em Análise do Comportamento Aplicada (ABA) e gerenciamento de crises, 
              com cursos reconhecidos e ministrados por especialistas qualificados.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-black">
              <div className="flex items-center bg-white bg-opacity-20 px-6 py-3 rounded-full">
                <Award className="w-6 h-6 mr-3" />
                <span className="font-medium">Certificação Reconhecida</span>
              </div>
              <div className="flex items-center bg-white bg-opacity-20 px-6 py-3 rounded-full">
                <Users className="w-6 h-6 mr-3" />
                <span className="font-medium">Instrutores Qualificados</span>
              </div>
              <div className="flex items-center bg-white bg-opacity-20 px-6 py-3 rounded-full">
                <BookOpen className="w-6 h-6 mr-3" />
                <span className="font-medium">Material Atualizado</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Nossos Cursos Especializados
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Oferecemos cursos especializados para profissionais que desejam se capacitar 
              em ABA e gerenciamento de crises comportamentais.
            </p>
          </div>

          <div className="space-y-16">
            {courses.map((course, index) => (
              <div 
                key={course.id} 
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className={`bg-gradient-to-r ${course.color} p-8 text-white`}>
                  <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">
                        {course.title}
                      </h3>
                      <p className="text-lg opacity-90 mb-4">{course.subtitle}</p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center bg-white bg-opacity-20 px-3 py-1 rounded-full">
                          <Star className="w-4 h-4 mr-1" />
                          <span>{course.rating}</span>
                        </div>
                        <div className="flex items-center bg-white bg-opacity-20 px-3 py-1 rounded-full">
                          <Users className="w-4 h-4 mr-1" />
                          <span>{course.students}+ alunos</span>
                        </div>
                        <div className="flex items-center bg-white bg-opacity-20 px-3 py-1 rounded-full">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>{course.format}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 lg:mt-0 lg:ml-8">
                      <img 
                        src={course.image} 
                        alt={course.title}
                        className="w-full lg:w-48 h-32 object-cover rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Informações do Curso */}
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <h4 className="text-xl font-semibold text-black mb-3">Sobre o Curso</h4>
                        <p className="text-gray-700 text-lg leading-relaxed">
                          {course.description}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-gray-50 p-4 rounded-lg text-center">
                          <Clock className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                          <p className="font-semibold text-black">{course.duration}</p>
                          <p className="text-sm text-gray-600">Duração</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg text-center">
                          <BookOpen className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                          <p className="font-semibold text-black">{course.format}</p>
                          <p className="text-sm text-gray-600">Formato</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg text-center">
                          <Users className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                          <p className="font-semibold text-black">{course.level}</p>
                          <p className="text-sm text-gray-600">Nível</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold text-black mb-4">
                          Módulos do Curso
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {course.modules.map((module, moduleIndex) => (
                            <div key={moduleIndex} className="flex items-center bg-yellow-50 p-3 rounded-lg">
                              <div className="w-8 h-8 bg-yellow-400 text-black rounded-full flex items-center justify-center text-sm font-bold mr-3">
                                {moduleIndex + 1}
                              </div>
                              <span className="text-gray-800 font-medium">{module}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Sidebar com Benefícios */}
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h4 className="text-xl font-semibold text-black mb-4">
                        O que você vai receber:
                      </h4>
                      <div className="space-y-3 mb-6">
                        {course.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="border-t pt-6">
                        <div className="text-center mb-4">
                          <p className="text-2xl font-bold text-black">{course.price}</p>
                          <p className="text-sm text-gray-600">Investimento</p>
                        </div>
                        
                        <div className="space-y-3">
                          <Button size="large" className="w-full">
                            <Calendar className="w-5 h-5 mr-2" />
                            Inscrever-se Agora
                          </Button>
                          <Button variant="outline" size="large" className="w-full">
                            Mais Informações
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 via-yellow-500 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Pronto para transformar sua carreira?
          </h2>
          <p className="text-xl text-black mb-10 opacity-80">
            Entre em contato conosco para mais informações sobre nossos cursos 
            e próximas turmas disponíveis. Nossa equipe está pronta para ajudar você!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button size="large" className="bg-black hover:bg-gray-800 text-yellow-400 border-2 border-black">
              <Users className="w-5 h-5 mr-2" />
              Falar com Consultor
            </Button>
            <Button variant="outline" size="large" className="border-black text-black hover:bg-black hover:text-yellow-400 border-2">
              <Calendar className="w-5 h-5 mr-2" />
              Ver Calendário de Cursos
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;