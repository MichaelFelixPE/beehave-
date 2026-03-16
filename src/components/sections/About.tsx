import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle, Target, Eye, Heart } from 'lucide-react';

const About: React.FC = () => {
  const values = ['Transparência', 'Cooperação', 'Ética e qualidade'];

  const images = {
    missao: 'https://i.imgur.com/8eC7zWT.jpeg',
    visao: 'https://i.imgur.com/tpV4ayQ.jpeg',
    valores: 'https://i.imgur.com/PYMsM7a.jpeg',
  };

  // Simple intersection observer for fade-in on scroll
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Título ── */}
        <div className="text-center mb-20">
          <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-yellow-600 bg-yellow-50 border border-yellow-200 px-4 py-1.5 rounded-full mb-4">
            Quem somos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
            Sobre a <span className="text-yellow-400">Beehave</span>
          </h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto rounded-full"></div>
        </div>

        {/* ── Seção principal ── */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-28 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Imagem com decoração */}
          <div className="relative">
            {/* Moldura decorativa amarela */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-yellow-400 rounded-2xl z-0"></div>
            <img
              src="https://i.imgur.com/shWLLoV.jpeg"
              alt="Psicólogo trabalhando com criança"
              className="relative z-10 rounded-2xl shadow-2xl w-full h-[420px] object-cover"
            />
            {/* Badge flutuante */}
            <div className="absolute z-20 -bottom-5 -right-5 bg-yellow-400 text-gray-900 rounded-2xl px-5 py-4 shadow-xl border-2 border-white">
              <p className="text-2xl font-bold leading-none">2019</p>
              <p className="text-xs font-semibold tracking-wide mt-0.5">Fundada em</p>
            </div>
          </div>

          {/* Textos */}
          <div className="space-y-6">
            <div className="border-l-4 border-yellow-400 pl-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                A Beehave: Soluções comportamentais foi fundada no dia 02 de abril de 2019 sob o desejo das(o) sócias(o) Analistas do Comportamento em ofertar serviços de saúde e educação com{' '}
                <strong className="text-gray-900">transparência, ética e qualidade</strong> na região do Vale do São Francisco, cidades circunvizinhas e em outros Estados.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-7 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                <span className="text-2xl">🐝</span>
                Por que "Beehave"?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>Bee</strong> (Abelha) + <strong>Behave</strong> (comportar-se). A junção não foi ao acaso — temos como pilares o pioneirismo, trabalho em equipe, tecnologia e eficiência.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm">
                As abelhas trabalham de forma cooperativa e extremamente eficiente. Conhecidas pela organização hierárquica da colmeia, foram a combinação perfeita para representar como nossa equipe se estrutura.
              </p>
            </div>

            {/* Destaques rápidos */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              {[
                { num: '6+', label: 'Anos de atuação' },
                { num: 'ABA', label: 'Baseado em ciência' },
                { num: '100%', label: 'Ética profissional' },
              ].map((item, i) => (
                <div key={i} className="text-center bg-yellow-50 border border-yellow-100 rounded-xl py-4 px-2">
                  <p className="text-2xl font-bold text-yellow-600">{item.num}</p>
                  <p className="text-xs text-gray-600 mt-0.5 leading-snug">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Cards Missão / Visão / Valores ── */}
        <div
          className={`transition-all duration-700 delay-200 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Label de seção */}
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Nossa <span className="text-yellow-400">essência</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Card Missão */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 min-h-[360px] flex flex-col justify-end">
              <img
                src={images.missao}
                alt="Missão"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradiente sempre visível na base */}
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/95 via-yellow-800/60 to-transparent"></div>
              {/* Borda superior decorativa */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-yellow-400"></div>

              <div className="relative z-10 p-7">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                    <Target className="w-5 h-5 text-gray-900" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Missão</h4>
                </div>
                <p className="text-yellow-100 leading-relaxed text-sm">
                  Prestar serviços éticos baseados em evidências científicas para melhoria da qualidade de vida de nossas(os) Aprendentes, clientes e Parceiras(os).
                </p>
              </div>
            </div>

            {/* Card Visão */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 min-h-[360px] flex flex-col justify-end">
              <img
                src={images.visao}
                alt="Visão"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-950/95 via-amber-800/60 to-transparent"></div>
              <div className="absolute top-0 left-0 right-0 h-1 bg-amber-500"></div>

              <div className="relative z-10 p-7">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center shadow-lg">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Visão</h4>
                </div>
                <p className="text-amber-100 leading-relaxed text-sm">
                  Ser referência na produção de conhecimento e de serviço em Análise do Comportamento.
                </p>
              </div>
            </div>

            {/* Card Valores */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 min-h-[360px] flex flex-col justify-end">
              <img
                src={images.valores}
                alt="Valores"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/97 via-gray-900/70 to-transparent"></div>
              <div className="absolute top-0 left-0 right-0 h-1 bg-yellow-400"></div>

              <div className="relative z-10 p-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gray-800 border border-yellow-400/40 rounded-full flex items-center justify-center shadow-lg">
                    <Heart className="w-5 h-5 text-yellow-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Valores</h4>
                </div>
                <ul className="space-y-2.5">
                  {values.map((value, index) => (
                    <li key={index} className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                      <span className="text-gray-100 text-sm font-medium">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;