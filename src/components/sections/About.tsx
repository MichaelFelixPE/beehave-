import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle, Target, Eye, Heart, Users, Award, MapPin, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  const values = ['Transparência', 'Cooperação', 'Ética e qualidade'];

  const images = {
    missao: 'https://i.imgur.com/8eC7zWT.jpeg',
    visao: 'https://i.imgur.com/tpV4ayQ.jpeg',
    valores: 'https://i.imgur.com/PYMsM7a.jpeg',
  };

  const [heroVisible, setHeroVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs1 = new IntersectionObserver(([e]) => { if (e.isIntersecting) setHeroVisible(true); }, { threshold: 0.1 });
    const obs2 = new IntersectionObserver(([e]) => { if (e.isIntersecting) setCardsVisible(true); }, { threshold: 0.1 });
    if (heroRef.current) obs1.observe(heroRef.current);
    if (cardsRef.current) obs2.observe(cardsRef.current);
    return () => { obs1.disconnect(); obs2.disconnect(); };
  }, []);

  const stats = [
    { icon: Award,    num: '6+',   label: 'Anos de experiência' },
    { icon: Users,    num: '350+', label: 'Alunos formados' },
    { icon: MapPin,   num: 'VSF',  label: 'Vale do São Francisco' },
    { icon: Sparkles, num: 'ABA',  label: 'Baseado em ciência' },
  ];

  const pillars = [
    { icon: '🎯', title: 'Pioneirismo',  desc: 'Inovação constante em ABA' },
    { icon: '🤝', title: 'Cooperação',   desc: 'Equipe multidisciplinar integrada' },
    { icon: '🔬', title: 'Ciência',      desc: 'Práticas baseadas em evidências' },
  ];

  const cardData = [
    {
      key: 'missao',
      img: images.missao,
      icon: Target,
      title: 'Missão',
      text: 'Prestar serviços éticos baseados em evidências científicas para melhoria da qualidade de vida de nossas(os) Aprendentes, clientes e Parceiras(os).',
      accentTop: '#FACC15',
      gradient: 'from-yellow-950/95 via-yellow-900/75 to-yellow-800/10',
      iconBg: 'bg-yellow-400',
      iconColor: 'text-gray-900',
      tagStyle: 'bg-yellow-400/20 border-yellow-400/40 text-yellow-200',
      tag: 'Nossa razão de existir',
    },
    {
      key: 'visao',
      img: images.visao,
      icon: Eye,
      title: 'Visão',
      text: 'Ser referência na produção de conhecimento e de serviço em Análise do Comportamento, impactando positivamente comunidades em todo o Brasil.',
      accentTop: '#F59E0B',
      gradient: 'from-amber-950/95 via-amber-900/75 to-amber-700/10',
      iconBg: 'bg-amber-500',
      iconColor: 'text-white',
      tagStyle: 'bg-amber-400/20 border-amber-400/40 text-amber-200',
      tag: 'Onde queremos chegar',
    },
    {
      key: 'valores',
      img: images.valores,
      icon: Heart,
      title: 'Valores',
      text: null,
      accentTop: '#FACC15',
      gradient: 'from-gray-950/97 via-gray-900/80 to-gray-800/10',
      iconBg: 'bg-gray-800 border border-yellow-400/50',
      iconColor: 'text-yellow-400',
      tagStyle: 'bg-white/10 border-white/20 text-gray-300',
      tag: 'O que nos guia',
    },
  ];

  return (
    <section id="about" className="bg-white overflow-hidden">

      {/* ══════════════════════════════════════════
          HERO ESCURO — título + stats
      ══════════════════════════════════════════ */}
      <div ref={heroRef} className="relative bg-gray-950 py-28 overflow-hidden">
        {/* Padrão hexagonal sutil */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23facc15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-400/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-400/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-yellow-400 mb-6">
                  <span className="w-8 h-px bg-yellow-400 inline-block" />
                  Quem somos
                </span>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-none">
                  Sobre a<br />
                  <span className="text-yellow-400">Beehave</span>
                </h2>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md lg:mb-2">
                Fundada em 2019 no Vale do São Francisco, somos especialistas em
                Análise do Comportamento Aplicada — ABA — comprometidos com ética,
                ciência e qualidade de vida.
              </p>
            </div>

            {/* Stats bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-800 rounded-2xl overflow-hidden border border-gray-800">
              {stats.map(({ icon: Icon, num, label }, i) => (
                <div
                  key={i}
                  className="bg-gray-900 px-6 py-6 flex items-center gap-4 hover:bg-gray-800/80 transition-colors duration-300"
                >
                  <div className="w-10 h-10 bg-yellow-400/10 border border-yellow-400/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-white leading-none">{num}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          HISTÓRIA + IMAGEM
      ══════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div
          className={`grid grid-cols-1 lg:grid-cols-5 gap-14 items-start mb-28 transition-all duration-700 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Imagem — 2/5 */}
          <div className="lg:col-span-2">
            <div className="sticky top-24">
              <div className="relative">
                <div className="absolute -top-3 -left-3 w-full h-full border-2 border-yellow-400 rounded-2xl" />
                <img
                  src="https://i.imgur.com/shWLLoV.jpeg"
                  alt="Atendimento especializado"
                  className="relative z-10 rounded-2xl w-full h-[480px] object-cover shadow-2xl"
                />
                {/* Badge ano */}
                <div className="absolute z-20 -bottom-6 -right-4 bg-yellow-400 rounded-2xl px-5 py-4 shadow-2xl border-4 border-white">
                  <p className="text-3xl font-black text-gray-900 leading-none">2019</p>
                  <p className="text-[11px] font-bold text-gray-700 tracking-wide uppercase mt-0.5">Fundada em</p>
                </div>
                {/* Abelha */}
                <div className="absolute z-20 -top-4 -right-4 bg-gray-900 rounded-full w-14 h-14 flex items-center justify-center shadow-xl border-2 border-yellow-400/30">
                  <span className="text-2xl">🐝</span>
                </div>
              </div>
            </div>
          </div>

          {/* Texto — 3/5 */}
          <div className="lg:col-span-3 space-y-8 lg:pt-6">
            <div>
              <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">
                Ciência do comportamento<br />
                <span className="text-yellow-400">a serviço das pessoas.</span>
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                A Beehave foi fundada sob o desejo das(o) sócias(o) Analistas do Comportamento em ofertar
                serviços de saúde e educação com{' '}
                <strong className="text-gray-900">transparência, ética e qualidade</strong> na região
                do Vale do São Francisco, cidades circunvizinhas e em outros Estados.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Seguimos os princípios da Ciência Análise do Comportamento Aplicada (do inglês,
                Applied Behavior Analysis – ABA), com rigor técnico e profundo comprometimento humano.
              </p>
            </div>

            {/* Card escuro — Por que Beehave */}
            <div className="bg-gray-950 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-400/5 rounded-full blur-2xl pointer-events-none" />
              <div className="relative z-10">
                <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-2xl">🐝</span>
                  Por que "Beehave"?
                </h4>
                <p className="text-gray-400 leading-relaxed mb-3 text-sm">
                  <span className="text-yellow-400 font-semibold">Bee</span> (Abelha) +{' '}
                  <span className="text-yellow-400 font-semibold">Behave</span> (comportar-se).
                  Uma junção que não foi ao acaso — nossos pilares são pioneirismo, trabalho em equipe,
                  tecnologia e eficiência.
                </p>
                <p className="text-gray-500 leading-relaxed text-sm">
                  Assim como as abelhas constroem a colmeia com organização e propósito coletivo,
                  nossa equipe se estrutura para oferecer o melhor a cada pessoa atendida.
                </p>
              </div>
            </div>

            {/* Pilares */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {pillars.map((item, i) => (
                <div
                  key={i}
                  className="bg-gray-50 border border-gray-100 rounded-xl p-5 hover:border-yellow-300 hover:bg-yellow-50 transition-all duration-300 group"
                >
                  <span className="text-2xl block mb-3">{item.icon}</span>
                  <p className="font-bold text-gray-900 text-sm mb-1 group-hover:text-yellow-700 transition-colors">{item.title}</p>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divisor */}
        <div className="flex items-center gap-6 mb-16">
          <div className="flex-1 h-px bg-gray-100" />
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-yellow-400 rounded-full" />
            <span className="text-sm font-bold text-gray-400 tracking-[0.2em] uppercase">Nossa essência</span>
            <div className="w-2 h-2 bg-yellow-400 rounded-full" />
          </div>
          <div className="flex-1 h-px bg-gray-100" />
        </div>

        {/* ══════════════════════════════════════════
            CARDS MVV
        ══════════════════════════════════════════ */}
        <div
          ref={cardsRef}
          className={`transition-all duration-700 delay-100 ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cardData.map(({ key, img, icon: Icon, title, text, accentTop, gradient, iconBg, iconColor, tagStyle, tag }, i) => (
              <div
                key={key}
                className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 min-h-[420px] flex flex-col justify-end cursor-default"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <img
                  src={img}
                  alt={title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${gradient}`} />
                <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: accentTop }} />

                <div className="relative z-10 p-8">
                  <div className={`inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-widest uppercase border rounded-full px-3 py-1 mb-5 ${tagStyle}`}>
                    {tag}
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-11 h-11 ${iconBg} rounded-xl flex items-center justify-center shadow-lg`}>
                      <Icon className={`w-5 h-5 ${iconColor}`} />
                    </div>
                    <h4 className="text-2xl font-black text-white">{title}</h4>
                  </div>

                  {text ? (
                    <p className="text-white/85 leading-relaxed text-sm">{text}</p>
                  ) : (
                    <ul className="space-y-3">
                      {values.map((v, vi) => (
                        <li key={vi} className="flex items-center gap-3">
                          <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-3 h-3 text-gray-900" />
                          </div>
                          <span className="text-white font-semibold text-sm">{v}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          FAIXA CTA FINAL
      ══════════════════════════════════════════ */}
      <div className="bg-yellow-400 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-yellow-900 mb-1">Faça parte da colmeia</p>
              <h3 className="text-2xl md:text-3xl font-black text-gray-900">
                Quer conhecer nossos cursos e serviços?
              </h3>
            </div>
            <a
              href="#contact"
              className="flex-shrink-0 bg-gray-900 text-yellow-400 font-bold text-sm tracking-wide px-8 py-4 rounded-xl hover:bg-gray-800 transition-colors shadow-lg"
            >
              Falar com a equipe →
            </a>
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;