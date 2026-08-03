import React, { useState, useEffect } from 'react';
import { BookOpen, Clock, Users, CheckCircle2, Calendar, Star, MapPin, X, ChevronRight } from 'lucide-react';
import Button from '../components/ui/Button';

const heroImages = [
  'https://i.imgur.com/2bgyz3q.jpg',
  'https://i.imgur.com/na6VSwk.jpeg',
  'https://i.imgur.com/ZvtxFKV.jpeg',
  'https://i.imgur.com/LrOIX8y.jpeg',
  'https://imgur.com/xjGT9JD',
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
    image: 'https://i.imgur.com/PcsGugO.jpg',
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
    enrollLink: 'https://hotmart.com/pt-br/marketplace/produtos/workshop-colmeia-inovacao-terapeutica-com-inteligencia-artificial-e-analise-do-comportamento/X106048986Y?sck=HOTMART_PRODUCT_PAGE',
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
        description: 'Ciclo 01: Quero ser aplicadora(dor) em ABA: Por onde iniciar? Neste Ciclo, você aprenderá a base para qualquer profissional que deseja trabalhar com ABA: TEORIA da Análise do Comportamento. Lembrando! Como o velho Skinner (que apresentamos antes a vocês) dizia: “Confusão na teoria significa, confusão na prática.” (Skinner, 1953/2003, p. 10). Embora Skinner se refira aí, que definições imprecisas podem prejudicar um consenso científico, nós ampliamos para a nossa Prática, pois se eu não entendo a Teoria, terei uma prática confusa e com isso prejudicando o Aprendente que atendo. Portanto... É necessário saber sobre aspectos conceituais de reforçamento, punição, comportamento verbal, definir comportamento, técnicas de registro e, especificamente, a ABA. E a relação dessa com o público de desenvolvimento atípico, incluindo o Autismo. No Ciclo 01, tem tudo isso e muito mais! ',
        tags: ['IA', 'Fundamentos', 'Tecnologia'],
      },
      {
        title: 'Ciclo 02: Fundamentos de ABA Relevantes',
        description: 'Ciclo 02: Quero ser aplicadora(dor) em ABA: O que preciso saber do planejamento da intervenção antes de iniciá-la? Ah, aqui... Você verá como é o processo de planejamento da intervenção baseada em ABA. Ou seja, o que você fará na etapa de Avaliação Comportamental com Aprendente (pessoa alvo da Avaliação)? E na etapa de aplicação dos Programas de Ensino? Você vai entender a relação das Dimensões da ABA com cada componente de um Programa de Ensino (bem elaborado) e vai colocar a “mão na massa”! Pois bem, aqui você vai começar a suar com as Práticas haha ',
        tags: ['ABA', 'Revisão', 'Integração'],
      },
      {
        title: 'Ciclo 03: Prompts e exemplos práticos.',
        description: 'Ciclo 03: Quero ser aplicadora(dor) em ABA: Quais estratégias de ensino em ABA utilizarei no decorrer de meus atendimentos? No Ciclo 03, a suadeira continua... RsrsVocê aprenderá a teoria das Estratégias de ensino: Ensino por Tentativa Discreta (do inglês, Discrete Trial Training, DTT) e Ensino naturalístico (considerando o ambiente escolar também). E praticará cada uma delas!',
        tags: ['Prompts', 'Prática', 'Materiais'],
      },
      {
        title: 'Ciclo 04: Inteligência artificial e ética.',
        description: 'Ciclo 04: Quero ser aplicadora(dor) em ABA: Comecei meu atendimento, quais as minhas funções? Quando você chegar neste Ciclo, estará com todos os pré-requisitos para desempenhar as suas funções, seguindo o fluxo de como estivesse recebendo uma(um) Aprendente para atender: Com mais Teoria e Práticas, você aprenderá sobre Organização de ambiente para atender, aplicação completa de Programas de Ensino, Manejo de comportamentos desafiadores, Coleta e análise de dados, como deve ocorrer o entrelaçamento entre os Agentes de Ensino de uma Equipe, e Ética em ABA.',
        tags: ['Ética', 'Privacidade', 'Responsabilidade'],
      },
    ],
    image: 'https://i.imgur.com/EeKVsoT.jpeg',
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
    enrollLink: 'https://hotmart.com/pt-br/marketplace/produtos/curso-de-avaliacao-funcional-beehave/T106293965T',
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
  },
];

interface CycleModal {
  title: string;
  num: number;
  courseTitle: string;
  description: string;
  tags: string[];
}

// shared hexagon clip-path used across icons / badges — the recurring motif of the redesign
const HEX = '[clip-path:polygon(25%_5%,75%_5%,100%_50%,75%_95%,25%_95%,0%_50%)]';

const CoursesPage: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedCycle, setSelectedCycle] = useState<CycleModal | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // triggers the staggered entrance animation on the course cards after first paint
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

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
    <div className="pt-20 bg-[#FFFBF2]">
      {/* one-off design tokens + keyframes for this page — move to tailwind.config.js / index.css when you have access to them */}
      <style>{`
        @keyframes bh-rise { from { opacity:0; transform: translateY(18px);} to { opacity:1; transform: translateY(0);} }
        @keyframes bh-drift { from { background-position: 0 0; } to { background-position: 70px 70px; } }
        .bh-hexbg {
          background-image:
            repeating-linear-gradient(60deg, transparent 0 34px, rgba(255,255,255,.16) 34px 36px),
            repeating-linear-gradient(-60deg, transparent 0 34px, rgba(255,255,255,.10) 34px 36px);
          animation: bh-drift 40s linear infinite;
        }
      `}</style>

      {/* ── MODAL DE CICLO ── */}
      {selectedCycle && (
        <div
          className="fixed inset-0 bg-[#241B0D]/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedCycle(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden"
            style={{ animation: 'bh-rise .3s ease forwards' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative p-6 bg-gradient-to-br from-[#FFC933] via-[#F5A623] to-[#D98A0F] overflow-hidden">
              <div className="absolute inset-0 bh-hexbg opacity-40" />
              <button
                onClick={() => setSelectedCycle(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-black/10 hover:bg-black/20 rounded-full flex items-center justify-center transition-all z-10"
              >
                <X className="w-4 h-4 text-[#241B0D]" />
              </button>

              <div className="relative flex items-center gap-4">
                <div className={`w-12 h-12 bg-[#241B0D] text-[#FFC933] ${HEX} flex items-center justify-center text-lg font-extrabold shrink-0`}>
                  {selectedCycle.num}
                </div>
                <div>
                  <p className="text-xs text-[#241B0D]/70 uppercase tracking-widest font-bold mb-1">
                    Ciclo {selectedCycle.num}
                  </p>
                  <h3 className="text-lg font-bold text-[#241B0D] leading-snug">
                    {selectedCycle.title}
                  </h3>
                </div>
              </div>
            </div>

            <div className="p-6">
              <p className="text-xs text-gray-400 mb-3 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                {selectedCycle.courseTitle}
              </p>

              <p className="text-gray-700 text-sm leading-relaxed mb-5">
                {selectedCycle.description}
              </p>

              {selectedCycle.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedCycle.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-[#FFF4D6] text-[#8a5c0f] text-xs font-semibold px-3 py-1 rounded-full border border-[#FFE29A]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setSelectedCycle(null)}
                  className="px-5 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 text-sm font-medium transition-all"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── HERO SLIDER ── */}
      <section className="relative h-[380px] md:h-[560px] overflow-hidden bg-[#241B0D]">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center scale-110 blur-2xl opacity-50"
              style={{ backgroundImage: `url('${img}')` }}
            />
            <div
              className="absolute inset-0 bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${img}')` }}
            />
          </div>
        ))}
        {/* legibility gradient + eyebrow so the slider reads as intentional, not just a photo stack */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#241B0D]/70 via-transparent to-[#241B0D]/20" />
        <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center gap-4">
          <div className="flex gap-2">
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentImage(i)}
                aria-label={`Ir para imagem ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === currentImage ? 'w-6 bg-[#FFC933]' : 'w-1.5 bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CURSOS ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#1B1A17] mb-4 tracking-tight">
              Nossos Cursos Especializados
            </h2>
            <div className="w-16 h-1.5 rounded-full mx-auto bg-gradient-to-r from-[#FFC933] to-[#5C8A72]" />
          </div>

          <div className="space-y-14">
            {courses.map((course, courseIndex) => (
              <div
                key={course.id}
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-[#1B1A17]/[0.06]"
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? 'translateY(0)' : 'translateY(24px)',
                  transition: 'opacity .6s ease, transform .6s ease',
                  transitionDelay: `${courseIndex * 100}ms`,
                }}
              >
                {/* Header do curso */}
                <div className="relative bg-gradient-to-br from-[#FFC933] via-[#F5A623] to-[#D98A0F] p-8 overflow-hidden">
                  <div className="absolute inset-0 bh-hexbg opacity-30" />
                  <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-extrabold mb-2 text-[#241B0D] leading-tight">
                        {course.title}
                      </h3>
                      <p className="text-lg text-[#241B0D]/80 mb-4 font-medium">{course.subtitle}</p>
                      <div className="flex flex-wrap gap-3 text-sm">
                        <div className="flex items-center bg-[#241B0D] text-[#FFC933] px-3 py-1.5 rounded-full font-bold">
                          <Star className="w-4 h-4 mr-1.5 fill-[#FFC933]" />
                          <span>{course.rating}</span>
                        </div>
                        <div className="flex items-center bg-white/60 px-3 py-1.5 rounded-full text-[#241B0D] font-bold">
                          <Users className="w-4 h-4 mr-1.5" />
                          <span>{course.students}+ alunos</span>
                        </div>
                        <div className="flex items-center bg-white/60 px-3 py-1.5 rounded-full text-[#241B0D] font-bold">
                          <MapPin className="w-4 h-4 mr-1.5" />
                          <span>{course.format}</span>
                        </div>
                      </div>
                    </div>
                    <div className="shrink-0">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full lg:w-52 h-36 object-cover rounded-2xl shadow-lg border-4 border-white/40 rotate-1 hover:rotate-0 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Corpo do curso */}
                <div className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    <div className="lg:col-span-2 space-y-8">
                      <div>
                        <h4 className="text-xl font-bold text-[#1B1A17] mb-3 flex items-center gap-2.5">
                          <span className="w-2 h-6 rounded bg-gradient-to-b from-[#FFC933] to-[#5C8A72]" />
                          Sobre o Curso
                        </h4>
                        <p className="text-[#3A362C] text-[15.5px] leading-relaxed max-w-2xl">{course.description}</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div className="bg-[#FFF6E3] p-5 rounded-2xl text-center border border-[#1B1A17]/[0.05] hover:-translate-y-1 hover:shadow-md transition-all duration-200">
                          <div className={`w-11 h-11 bg-[#FFF4D6] ${HEX} flex items-center justify-center mx-auto mb-2.5`}>
                            <Clock className="w-5 h-5 text-[#D98A0F]" />
                          </div>
                          <p className="font-bold text-[#1B1A17] text-sm">{course.duration}</p>
                          <p className="text-xs text-[#3A362C]/60">Duração</p>
                        </div>
                        <div className="bg-[#FFF6E3] p-5 rounded-2xl text-center border border-[#1B1A17]/[0.05] hover:-translate-y-1 hover:shadow-md transition-all duration-200">
                          <div className={`w-11 h-11 bg-[#FFF4D6] ${HEX} flex items-center justify-center mx-auto mb-2.5`}>
                            <BookOpen className="w-5 h-5 text-[#D98A0F]" />
                          </div>
                          <p className="font-bold text-[#1B1A17] text-sm">{course.format}</p>
                          <p className="text-xs text-[#3A362C]/60">Formato</p>
                        </div>
                        <div className="bg-[#FFF6E3] p-5 rounded-2xl text-center border border-[#1B1A17]/[0.05] hover:-translate-y-1 hover:shadow-md transition-all duration-200">
                          <div className={`w-11 h-11 bg-[#FFF4D6] ${HEX} flex items-center justify-center mx-auto mb-2.5`}>
                            <Users className="w-5 h-5 text-[#D98A0F]" />
                          </div>
                          <p className="font-bold text-[#1B1A17] text-sm">{course.level}</p>
                          <p className="text-xs text-[#3A362C]/60">Nível</p>
                        </div>
                      </div>

                      {/* Ciclos — clicáveis */}
                      <div>
                        <h4 className="text-xl font-bold text-[#1B1A17] mb-1.5 flex items-center gap-2.5">
                          <span className="w-2 h-6 rounded bg-gradient-to-b from-[#FFC933] to-[#5C8A72]" />
                          Ciclos de conteúdo do Curso
                        </h4>
                        <p className="text-sm text-[#456B57] font-semibold mb-4 ml-[18px]">Clique em um ciclo para saber mais</p>
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
                              className="relative flex items-center bg-white border border-[#1B1A17]/[0.08] p-4 pl-[60px] rounded-2xl text-left hover:border-[#F5A623] hover:shadow-[0_14px_30px_-20px_rgba(217,138,15,0.5)] hover:-translate-y-0.5 transition-all duration-200 group w-full"
                            >
                              <div className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-[#FFC933] to-[#D98A0F] ${HEX} flex items-center justify-center text-xs font-extrabold text-[#241B0D] shrink-0`}>
                                {moduleIndex + 1}
                              </div>
                              <span className="text-[#1B1A17] font-semibold text-sm flex-1 leading-snug">
                                {module.title.replace(/^Ciclo \d+:\s*/, '')}
                              </span>
                              <ChevronRight className="w-4 h-4 text-[#D98A0F] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all ml-2 shrink-0" />
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Sidebar de inscrição */}
                    <div className="lg:sticky lg:top-24 h-fit">
                      <div className="bg-[#FFF6E3] border border-[#1B1A17]/[0.06] p-6 rounded-2xl shadow-sm">
                        <h4 className="text-lg font-bold text-[#1B1A17] mb-4">Você vai receber:</h4>
                        <div className="space-y-3 mb-6">
                          {course.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start gap-2.5">
                              <span className="mt-0.5 w-5 h-5 rounded-full bg-[#5C8A72] flex items-center justify-center shrink-0">
                                <CheckCircle2 className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                              </span>
                              <span className="text-[#3A362C] text-sm leading-snug">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <div className="border-t border-dashed border-[#1B1A17]/15 pt-5">
                          <div className="text-center mb-4">
                            <p className="text-xs uppercase tracking-wide font-bold text-[#3A362C]/60">Investimento</p>
                            <p className="text-xl font-extrabold text-[#1B1A17]">{course.price}</p>
                          </div>
                          <div className="space-y-2.5">
                            <a href={course.enrollLink || '#'} target="_blank" rel="noopener noreferrer" className="block w-full">
                              <Button
                                size="large"
                                className="w-full !bg-gradient-to-r !from-[#FFC933] !to-[#D98A0F] hover:!brightness-105 !text-[#241B0D] !border-none !font-extrabold shadow-[0_12px_24px_-10px_rgba(217,138,15,0.6)] hover:!-translate-y-0.5 transition-transform"
                              >
                                <Calendar className="w-5 h-5 mr-2" />
                                Inscrever-se Agora
                              </Button>
                            </a>
                            <Button
                              variant="outline"
                              size="large"
                              className="w-full !border-[#1B1A17]/20 !text-[#1B1A17] hover:!bg-white"
                            >
                              Mais Informações
                            </Button>
                          </div>
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
      <section className="relative py-20 bg-gradient-to-br from-[#FFE29A] via-[#FFC933] to-[#F5A623] overflow-hidden">
        <div className="absolute inset-0 bh-hexbg opacity-30" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#241B0D] mb-6 tracking-tight">
            Pronto para transformar sua carreira?
          </h2>
          <Button
            size="large"
            className="!bg-[#241B0D] !text-[#FFC933] hover:!bg-[#1B1A17] !border-none shadow-lg !font-bold"
          >
            Falar com um Consultor
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;