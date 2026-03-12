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
    description: 'A 9ª edição do Curso de Aplicadora(dor) em ABA mais esperado do Vale do São Francisco está com inscrições abertas! Com carga horária de 60 horas e uma BeeEquipe, de Docentes e Monitoras, formada por Especialistas em ABA, Mestras(es) e Doutora em Análise do Comportamento. Todas(os) atuando como Analista do Comportamento Coordenadora(dor) ou Analista do Comportamento Supervisora(sor) na Beehave.Esse é o Curso ideal para quem deseja atuar com o público de pessoas com desenvolvimento atípico/TEA.O nosso Curso une teoria e prática sob o olhar de quem vive a rotina da Intervenção baseada em ABA todos os dias!',
    duration: '60 horas',
    format: 'Presencial',
    level: 'Iniciante',
    price: 'Consulte valores',
    rating: 4.9,
    students: 150,
    features: [
      'Material em ABA atualizado',
      'Teoria e Prática com domínio sequencial e gradual do conteúdo (Sistema Personalizado de Ensino, PSI)',
      'Sondagens processuais Teóricas e Práticas',
      'Aulas aos sábados',
      '60 horas de aulas presenciais',
      'Relatório de desempenho pós curso',
      'Certificado amplamente reconhecido pelo Selo Beehave Cursos',
      'Docentes e monitores especialistas em ABA',
    ],
    modules: [
      'Ciclo 01: Quero ser aplicadora(dor) em ABA: Por onde iniciar? ',
      'Ciclo 02: Quero ser aplicadora(dor) em ABA: O que preciso saber do planejamento da intervenção antes de iniciá-la?',
      'Ciclo 03: Quero ser aplicadora(dor) em ABA: Quais estratégias de ensino em ABA utilizarei no decorrer de meus atendimentos?',
      'Ciclo 04: Quero ser aplicadora(dor) em ABA: Comecei meu atendimento, quais as minhas funções?',
    ],
    image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    color: 'from-yellow-400 to-yellow-500',
  },
  {
    id: 2,
    title: 'Workshop: ColmeIA: Inovação terapêutica com Inteligência Artificial e Análise do Comportamento',
    subtitle: 'Gerenciamento Profissional de Crises Comportamentais',
    description: 'Olá, colegas da Análise do Comportamento! Sabemos que a rotina de uma(um) Profissional que trabalha com ABA exige criatividade constante e muito rigor técnico. Para otimizar seu tempo sem perder a qualidade, a Beehave traz o workshop ColmelA. Sob o comando da nossa Analista do Comportamento Coordenadora, Esp. Joice Izabela, vamos explorar como a Inteligência Artificial pode ser sua maior aliada na criação, adaptação e personalização de recursos terapêuticos.',
    duration: '40 horas',
    format: 'Online',
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
    image: 'https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    color: 'from-yellow-400 to-yellow-500',
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
      'Certificado válido por 2 anos',
    ],
    modules: [
      'Módulo 1: Atualizações Normativas',
      'Módulo 2: Novas Técnicas',
      'Módulo 3: Revisão Prática',
      'Módulo 4: Avaliação Final',
    ],
    image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    color: 'from-yellow-400 to-yellow-500',
  },
];

const CoursesPage: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section Automática (Sem Texto) */}
      <section className="relative h-[350px] md:h-[550px] overflow-hidden">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url('${img}')` }}
          />
        ))}
        {/* Overlay sutil para acabamento visual */}
        <div className="absolute inset-0 bg-black bg-opacity-5"></div>
      </section>

      {/* Seção de Conteúdo dos Cursos */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Nossos Cursos Especializados
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
          </div>

          <div className="space-y-16">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                {/* Header do Card do Curso */}
                <div className={`bg-gradient-to-r ${course.color} p-8 text-white`}>
                  <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">
                        {course.title}
                      </h3>
                      <p className="text-lg text-gray-900 mb-4">{course.subtitle}</p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center bg-white bg-opacity-30 px-3 py-1 rounded-full text-gray-900 font-medium">
                          <Star className="w-4 h-4 mr-1 fill-gray-900" />
                          <span>{course.rating}</span>
                        </div>
                        <div className="flex items-center bg-white bg-opacity-30 px-3 py-1 rounded-full text-gray-900 font-medium">
                          <Users className="w-4 h-4 mr-1" />
                          <span>{course.students}+ alunos</span>
                        </div>
                        <div className="flex items-center bg-white bg-opacity-30 px-3 py-1 rounded-full text-gray-900 font-medium">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>{course.format}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 lg:mt-0 lg:ml-8">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full lg:w-48 h-32 object-cover rounded-lg shadow-lg border-2 border-white/50"
                      />
                    </div>
                  </div>
                </div>

                {/* Detalhes do Curso */}
                <div className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <h4 className="text-xl font-semibold text-black mb-3 border-b-2 border-yellow-400 w-fit">Sobre o Curso</h4>
                        <p className="text-black text-lg leading-relaxed">{course.description}</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-gray-50 p-4 rounded-lg text-center border border-gray-100">
                          <Clock className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                          <p className="font-semibold text-black">{course.duration}</p>
                          <p className="text-sm text-gray-600">Duração</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg text-center border border-gray-100">
                          <BookOpen className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                          <p className="font-semibold text-black">{course.format}</p>
                          <p className="text-sm text-gray-600">Formato</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg text-center border border-gray-100">
                          <Users className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                          <p className="font-semibold text-black">{course.level}</p>
                          <p className="text-sm text-gray-600">Nível</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold text-black mb-4">Ciclos de conteúdo do Curso</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {course.modules.map((module, moduleIndex) => (
                            <div key={moduleIndex} className="flex items-center bg-white border border-yellow-200 p-3 rounded-lg">
                              <div className="w-8 h-8 bg-yellow-400 text-black rounded-full flex items-center justify-center text-sm font-bold mr-3 shrink-0">
                                {moduleIndex + 1}
                              </div>
                              <span className="text-black font-medium">{module}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Sidebar de Benefícios e Inscrição */}
                    <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl h-fit">
                      <h4 className="text-xl font-semibold text-black mb-4">Você vai receber:</h4>
                      <div className="space-y-3 mb-6">
                        {course.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-black">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="border-t border-gray-200 pt-6">
                        <div className="text-center mb-4">
                          <p className="text-2xl font-bold text-black">{course.price}</p>
                          <p className="text-sm text-gray-600">Investimento</p>
                        </div>
                        <div className="space-y-3">
                          <Button size="large" className="w-full bg-yellow-400 hover:bg-yellow-500 text-black border-none">
                            <Calendar className="w-5 h-5 mr-2" />
                            Inscrever-se Agora
                          </Button>
                          <Button variant="outline" size="large" className="w-full border-black text-black">
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

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-yellow-100 to-yellow-300">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-black mb-6">Pronto para transformar sua carreira?</h2>
          <Button size="large" className="bg-yellow-400 hover:bg-yellow-500 text-black border-none shadow-lg">
            Falar com um Consultor
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;