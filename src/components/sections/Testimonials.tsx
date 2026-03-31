import React, { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    quote: "Quero expressar minha gratidão pelo cuidado excepcional que vocês têm com o Aprendente L. A dedicação e carinho de vocês fazem toda a diferença na vida dele! A equipe ABA, liderada pelo supervisor Rafael e pela coordenadora Joyce, é simplesmente incrível. O psicólogo Gutemberg faz um trabalho maravilhoso, lúdico, dedicado, sempre com muita paciência e carinho. É incrível ver o progresso dele!",
    author: "Edisônia",
  },
  {
    quote: "Minha experiência com a clínica Beehave é extremamente positiva e marcada por muita confiança, gratidão e reconhecimento. Grande parte das conquistas do Aprendente E. são resultado do trabalho sério, comprometido e preciso realizado por essa equipe. A Beehave transmite segurança, acolhimento e profissionalismo. É uma clínica em que confio plenamente e que recomendo com muita segurança a outras famílias.",
    author: "Luciana Feitoza",
  },
  {
    quote: "A experiência na Beehave tem sido fundamental para o desenvolvimento do meu filho. É um ambiente de acolhimento, cuidado e respeito, onde cada conquista é valorizada. A parceria entre supervisora, coordenadora e AT tem sido o ponto chave para a evolução do Aprendente D. Estou muito satisfeita com o trabalho da clínica.",
    author: "Janaína",
  },
  {
    quote: "Gratidão, palavra que define toda caminhada com a família Beehave, pelo carinho, profissionalismo e dedicação nessa caminhada árdua. Só quem tem filho(a) atípico(a) sabe o quanto é desafiador, mas a evolução desenvolvida nos faz entender que existem profissionais excelentes em nossa jornada. Obrigado!",
    author: "José Pires",
  },
  {
    quote: "A clínica Beehave faz um excelente trabalho de qualidade nos atendimentos prestados. Tem uma equipe de profissionais preparados e capacitados, dentro da ética e comprometimento com a aprendizagem da criança. Acredito muito na ciência, e que todo trabalho para melhorar o bem-estar de cada ser humano é bem-vindo, e a Beehave faz parte dessa transformação!",
    author: "Josineide",
  },
  {
    quote: "A experiência com a Beehave tem sido positiva e pautada na confiança, sobretudo na atuação do coordenador Fernando, que se destaca pela clareza, responsabilidade e preocupação com a segurança tanto do paciente quanto da nossa família. A clínica acolheu nosso desafio com competência e dedicação.",
    author: "Adriana",
  },
  {
    quote: "A Beehave para nossa família é um divisor de águas. Nosso filho tem se desenvolvido cada vez mais graças ao trabalho multidisciplinar entre escola, terapeutas e o acompanhamento da equipe Beehave. Uma equipe preparada, responsável, humana e que de fato conhece o meu filho. Vocês são um presente para nós. Muito obrigada!",
    author: "Kelly Gadelha de Castro",
  },
  {
    quote: "A clínica superou todas as nossas expectativas. A equipe de Supervisão, Coordenação e ATs estão desenvolvendo um brilhante trabalho de acompanhamento com nosso filho, e as evoluções são notoriamente visíveis no dia a dia. Com vocês o trabalho realmente acontece!",
    author: "Juliana",
  },
  {
    quote: "A nossa experiência na Beehave vem de alguns anos, com resultados excelentes no desenvolvimento da minha criança. Carinho, acolhimento e amor pela profissão são alguns elogios a fazer a esses profissionais. Gratidão a todos por tanta dedicação. Relato de uma mãe feliz e realizada!",
    author: "Laura Monteiro",
  },
];

function getInitials(name: string) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('');
}

const INTERVAL = 5000;

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const elapsed = useRef(0);

  const goTo = (index: number) => {
    setCurrent((index + testimonials.length) % testimonials.length);
    elapsed.current = 0;
    setProgress(0);
  };

  useEffect(() => {
    const tick = setInterval(() => {
      if (paused) return;
      elapsed.current += 50;
      setProgress((elapsed.current / INTERVAL) * 100);
      if (elapsed.current >= INTERVAL) {
        elapsed.current = 0;
        setCurrent((prev) => (prev + 1) % testimonials.length);
      }
    }, 50);
    return () => clearInterval(tick);
  }, [paused]);

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-200 rounded-full px-4 py-1.5 text-xs text-yellow-800 mb-4">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#F5C400">
              <ellipse cx="12" cy="12" rx="5" ry="8" />
              <line x1="7" y1="8" x2="3" y2="5" stroke="#F5C400" strokeWidth="1.5" />
              <line x1="17" y1="8" x2="21" y2="5" stroke="#F5C400" strokeWidth="1.5" />
            </svg>
            Beehave
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Depoimentos de clientes
          </h2>
          <div className="w-14 h-1 bg-yellow-400 mx-auto my-4 rounded-full" />
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            Veja o que nossas e nossos clientes têm a dizer sobre a experiência
            delas(es) em nossos serviços!
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Card */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="min-w-full bg-yellow-50 border border-yellow-100 rounded-2xl px-8 py-10 md:px-12 md:py-12"
                >
                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <svg key={s} className="w-5 h-5 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote mark */}
                  <div className="text-center text-5xl leading-none text-yellow-300 font-serif mb-1 select-none">
                    "
                  </div>

                  {/* Text */}
                  <blockquote className="text-gray-700 text-sm md:text-base text-center italic leading-relaxed max-h-44 overflow-y-auto px-2 scrollbar-thin scrollbar-thumb-yellow-300 scrollbar-track-transparent">
                    {t.quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center justify-center gap-3 mt-8 pt-6 border-t border-yellow-200">
                    <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-sm font-semibold text-yellow-900 flex-shrink-0">
                      {getInitials(t.author)}
                    </div>
                    <span className="text-sm font-medium text-gray-500">{t.author}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-4 h-0.5 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-yellow-400 rounded-full transition-none"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-5">
            <button
              onClick={() => goTo(current - 1)}
              className="w-9 h-9 rounded-full border border-gray-200 bg-white hover:border-yellow-400 hover:bg-yellow-50 flex items-center justify-center text-gray-400 hover:text-yellow-600 transition-colors"
              aria-label="Anterior"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? 'bg-yellow-400 w-5' : 'bg-gray-200 w-1.5'
                  }`}
                  aria-label={`Ir para depoimento ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => goTo(current + 1)}
              className="w-9 h-9 rounded-full border border-gray-200 bg-white hover:border-yellow-400 hover:bg-yellow-50 flex items-center justify-center text-gray-400 hover:text-yellow-600 transition-colors"
              aria-label="Próximo"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm italic">
            Queremos fazer a diferença na vida das pessoas por meio da ABA com Afeto, Ciência e Ética!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;