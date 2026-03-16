import React, { useState, useEffect } from 'react';
import { BookOpen, Clock, Users, Award, CheckCircle, Calendar, Star, MapPin, X, ChevronRight } from 'lucide-react';
import Button from '../components/ui/Button';

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
    description: 'A 9ª edição do Curso de Aplicadora(dor) em ABA mais esperado do Vale do São Francisco está com inscrições abertas! Com carga horária de 60 horas e uma BeeEquipe, de Docentes e Monitoras, formada por Especialistas em ABA, Mestras(es) e Doutora em Análise do Comportamento.',
    duration: '60 horas',
    format: 'Presencial',
    level: 'Iniciante',
    price: 'Consulte valores',
    rating: 4.9,
    students: 150,
    enrollLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfMLn2NbyM7ETo4DERkaz60Ob850K90gd59sBhBmBEyrH3pxg/viewform',
    features: [
      'Material em ABA atualizado',
      'Teoria e Prática com domínio sequencial e gradual do conteúdo',
      'Sondagens processuais Teóricas e Práticas',
      'Aulas aos sábados',
      '60 horas de aulas presenciais',
      'Relatório de desempenho pós curso',
      'Certificado amplamente reconhecido',
      'Docentes e monitores especialistas em ABA',
    ],
    modules: [
      {
        title: 'Ciclo 01: Quero ser aplicadora(dor) em ABA: Por onde iniciar?',
        description: 'Introdução aos conceitos fundamentais da Análise do Comportamento Aplicada. Você vai entender o papel do(a) aplicador(a) no processo terapêutico, ética profissional e os primeiros passos para atuar na área com segurança e responsabilidade.',
        tags: ['Introdução', 'Ética', 'Fundamentos'],
      },
      {
        title: 'Ciclo 02: Quero ser aplicadora(dor) em ABA: O que preciso saber?',
        description: 'Aprofundamento nos princípios comportamentais essenciais: reforço, punição, extinção e controle de estímulos. Base teórica necessária para a prática clínica eficaz com pessoas com TEA e desenvolvimento atípico.',
        tags: ['Teoria', 'Princípios ABA', 'Reforço'],
      },
      {
        title: 'Ciclo 03: Quero ser aplicadora(dor) em ABA: Quais estratégias de ensino?',
        description: 'Apresentação das principais estratégias de ensino em ABA, como DTT, NET e PRT. Você aprenderá como aplicar cada abordagem de acordo com o perfil e as necessidades individuais de cada pessoa atendida.',
        tags: ['Estratégias', 'DTT', 'NET', 'PRT'],
      },
      {
        title: 'Ciclo 04: Quero ser aplicadora(dor) em ABA: Comecei meu atendimento.',
        description: 'Prática supervisionada e gestão dos primeiros atendimentos. Coleta e análise de dados, elaboração de programas terapêuticos e comunicação efetiva com a equipe multidisciplinar e as famílias dos atendidos.',
        tags: ['Prática', 'Dados', 'Supervisão', 'Família'],
      },
    ],
    image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    color: 'from-yellow-400 to-yellow-500',
  },
  {
    id: 2,
    title: 'Workshop: ColmeIA: Inovação terapêutica com Inteligência Artificial',
    subtitle: 'Gerenciamento Profissional de Crises Comportamentais',
    description: 'Sabemos que a rotina de uma(um) Profissional que trabalha com ABA exige criatividade constante e muito rigor técnico. A Beehave traz o workshop ColmelA.',
    duration: '40 horas',
    format: 'Online',
    level: 'Iniciante',
    price: 'Consulte valores',
    rating: 4.8,
    students: 85,
    enrollLink: 'https://',
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
      {
        title: 'Ciclo 01: O que é Inteligência Artificial?',
        description: 'Ciclo 01: Quero ser aplicadora(dor) em ABA: Por onde iniciar? Neste Ciclo, você aprenderá a base para qualquer profissional que deseja trabalhar com ABA: TEORIA da Análise do Comportamento. Lembrando! Como o velho Skinner (que apresentamos antes a vocês) dizia: “Confusão na teoria significa, confusão na prática.” (Skinner, 1953/2003, p. 10). Embora Skinner se refira aí, que definições imprecisas podem prejudicar um consenso científico, nós ampliamos para a nossa Prática, pois se eu não entendo a Teoria, terei uma prática confusa e com isso prejudicando o Aprendente que atendo. Portanto... É necessário saber sobre aspectos conceituais de reforçamento, punição, comportamento verbal, definir comportamento, técnicas de registro e, especificamente, a ABA. E a relação dessa com o público de desenvolvimento atípico, incluindo o Autismo. No Ciclo 01, tem tudo isso e muito mais! 
',
        tags: ['IA', 'Fundamentos', 'Tecnologia'],
      },
      {
        title: 'Ciclo 02: Fundamentos de ABA Relevantes',
        description: 'Revisão dos principais conceitos de ABA que serão potencializados com o uso de IA. Como integrar o rigor técnico da análise do comportamento com ferramentas tecnológicas modernas.',
        tags: ['ABA', 'Revisão', 'Integração'],
      },
      {
        title: 'Ciclo 03: Prompts e exemplos práticos.',
        description: 'Aprenda a criar prompts eficazes para gerar materiais terapêuticos, programas de ensino e relatórios com apoio de IA. Exemplos práticos voltados ao dia a dia do(a) profissional de ABA.',
        tags: ['Prompts', 'Prática', 'Materiais'],
      },
      {
        title: 'Ciclo 04: Inteligência artificial e ética.',
        description: 'Discussão aprofundada sobre os limites éticos do uso de IA na prática clínica. Como utilizar a tecnologia com responsabilidade, preservando a privacidade dos clientes e a qualidade do atendimento.',
        tags: ['Ética', 'Privacidade', 'Responsabilidade'],
      },
    ],
    image: 'https://i.imgur.com/EeKVsoT.jpeg',
    color: 'from-yellow-400 to-yellow-500',
  },
  {
    id: 3,
    title: 'Curso de Avaliação Funcional',
    subtitle: 'Atualização e Renovação da Certificação PCM',
    description: 'Olá! Um profissional de excelência em ABA não atua com base no "eu acho". Ele atua com base em dados e avaliação funcional. E você deseja sair do nível básico e aprender a formular hipóteses funcionais consistentes para o manejo de comportamentos, convidamos você para o curso de Avaliação Funcional.',
    duration: '10 horas',
    format: 'Online',
    level: 'Iniciante',
    price: 'Consulte valores',
    rating: 4.9,
    students: 120,
    enrollLink: 'https://link-recertificacao-pcm.com',
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
      {
        title: 'Ciclo 01: Fundamentos da avaliação funcional em ABA',
        description: 'Introdução à avaliação funcional como ferramenta central na prática em ABA. Entenda por que avaliar a função do comportamento é indispensável para intervenções eficazes e éticas.',
        tags: ['Fundamentos', 'Avaliação', 'ABA'],
      },
      {
        title: 'Ciclo 02: Topografia versus Função',
        description: 'Aprenda a diferenciar a forma como um comportamento se apresenta (topografia) de sua função no contexto comportamental. Essa distinção é essencial para planejar intervenções personalizadas e eficazes.',
        tags: ['Topografia', 'Função', 'Diferenciação'],
      },
      {
        title: 'Ciclo 03: Classes funcionais do comportamento',
        description: 'Exploração das quatro principais funções do comportamento: atenção, acesso a itens/atividades, fuga/esquiva e automática. Como identificá-las e utilizá-las no planejamento da intervenção.',
        tags: ['Classes', 'Funções', 'Identificação'],
      },
      {
        title: 'Ciclo 04: Avaliação funcional indireta',
        description: 'Uso de entrevistas, questionários e escalas de avaliação comportamental com famílias, cuidadores e profissionais. Como coletar informações relevantes sem observação direta do comportamento.',
        tags: ['Indireta', 'Entrevistas', 'Questionários'],
      },
      {
        title: 'Ciclo 05: Avaliação funcional direta',
        description: 'Técnicas de observação direta e sistemática do comportamento em ambiente natural. Registro de dados, identificação de antecedentes e consequências e análise de padrões comportamentais.',
        tags: ['Direta', 'Observação', 'Registro'],
      },
      {
        title: 'Ciclo 06: Avaliação funcional em diferentes contextos',
        description: 'Como adaptar a avaliação funcional para contextos variados: clínica, escola e domicílio. Considerações específicas para cada ambiente e suas implicações no processo avaliativo.',
        tags: ['Contextos', 'Escola', 'Clínica', 'Domicílio'],
      },
      {
        title: 'Ciclo 07: Análise de dados e formulação de hipóteses funcionais',
        description: 'Transforme dados coletados em hipóteses funcionais consistentes. Aprenda a organizar, interpretar e utilizar os dados para fundamentar as decisões clínicas com rigor técnico.',
        tags: ['Dados', 'Hipóteses', 'Análise'],
      },
      {
        title: 'Ciclo 08: Relatando os resultados',
        description: 'Como elaborar relatórios de avaliação funcional claros, objetivos e tecnicamente adequados. Comunicação dos resultados para famílias, equipes e outros profissionais envolvidos no atendimento.',
        tags: ['Relatório', 'Comunicação', 'Documentação'],
      },
    ],
    image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    color: 'from-yellow-400 to-yellow-500',
  },
];

interface CycleModal {
  title: string;
  num: number;
  courseTitle: string;
  description: string;
  tags: string[];
}

const CoursesPage: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedCycle, setSelectedCycle] = useState<CycleModal | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Bloqueia o scroll do body quando o modal estiver aberto
  useEffect(() => {
    if (selectedCycle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedCycle]);

  return (
    <div className="pt-20 bg-white">

      {/* ── MODAL DE CICLO ── */}
      {selectedCycle && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedCycle(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header amarelo */}
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-6 relative">
              <button
                onClick={() => setSelectedCycle(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-black bg-opacity-10 hover:bg-opacity-20 rounded-full flex items-center justify-center transition-all"
              >
                <X className="w-4 h-4 text-gray-900" />
              </button>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white bg-opacity-30 text-gray-900 rounded-full flex items-center justify-center text-xl font-bold shrink-0 border-2 border-white border-opacity-50">
                  {selectedCycle.num}
                </div>
                <div>
                  <p className="text-xs text-gray-800 uppercase tracking-widest font-medium mb-1">
                    Ciclo {selectedCycle.num}
                  </p>
                  <h3 className="text-lg font-bold text-gray-900 leading-snug">
                    {selectedCycle.title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Corpo */}
            <div className="p-6">
              <p className="text-xs text-gray-400 mb-3 flex items-center gap-1">
                <BookOpen className="w-3 h-3" />
                {selectedCycle.courseTitle}
              </p>

              <p className="text-gray-700 text-sm leading-relaxed mb-5">
                {selectedCycle.description}
              </p>

              {/* Tags */}
              {selectedCycle.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedCycle.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full border border-yellow-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setSelectedCycle(null)}
                  className="px-5 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 text-sm transition-all"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── HERO SLIDER ── */}
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
        <div className="absolute inset-0 bg-black bg-opacity-5"></div>
      </section>

      {/* ── CURSOS ── */}
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
                {/* Header do curso */}
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

                {/* Corpo do curso */}
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

                      {/* Ciclos — clicáveis */}
                      <div>
                        <h4 className="text-xl font-semibold text-black mb-4">Ciclos de conteúdo do Curso</h4>
                        <p className="text-sm text-gray-500 mb-3">Clique em um ciclo para saber mais</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {course.modules.map((module, moduleIndex) => (
                            <button
                              key={moduleIndex}
                              onClick={() =>
                                setSelectedCycle({
                                  title: module.title.replace(/^Ciclo \d+:\s*/, ''),
                                  num: moduleIndex + 1,
                                  courseTitle: course.title,
                                  description: module.description,
                                  tags: module.tags,
                                })
                              }
                              className="flex items-center bg-white border border-yellow-200 p-3 rounded-lg text-left hover:bg-yellow-50 hover:border-yellow-400 hover:shadow-md transition-all duration-200 group w-full"
                            >
                              <div className="w-8 h-8 bg-yellow-400 text-black rounded-full flex items-center justify-center text-sm font-bold mr-3 shrink-0 group-hover:bg-yellow-500 transition-colors">
                                {moduleIndex + 1}
                              </div>
                              <span className="text-black font-medium flex-1">{module.title}</span>
                              <ChevronRight className="w-4 h-4 text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity ml-2 shrink-0" />
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Sidebar de inscrição */}
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
                          <a href={course.enrollLink || '#'} target="_blank" rel="noopener noreferrer" className="block w-full">
                            <Button size="large" className="w-full bg-yellow-400 hover:bg-yellow-500 text-black border-none">
                              <Calendar className="w-5 h-5 mr-2" />
                              Inscrever-se Agora
                            </Button>
                          </a>
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

      {/* ── CTA FINAL ── */}
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