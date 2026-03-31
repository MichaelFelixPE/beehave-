import React, { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    quote: "Olá, equipe Beehave! 🐝🌟 Quero expressar minha gratidão pelo cuidado excepcional que vocês têm com o Aprendente L.. A dedicação e carinho de vocês fazem toda a diferença na vida dele! A equipe ABA, liderada pelo supervisor Rafael e pela coordenadora Joyce, é simplesmente incrível. Eles são profissionais exemplares, carinhosos e atenciosos. A mesma gratidão vale para o psicólogo Gutemberg, que faz um trabalho maravilhoso, lúdico, dedicado, e sempre com muita paciência e carinho. E não posso deixar de mencionar a Zel, a recepcionista, que é uma pessoa lindaaa, amorosa e dedicada. Ela é demaissssss! Muito obrigado por tudo! Adoro como vocês ajudam o APRENDENTE L. a se desenvolver de forma incrível, sempre com muita paciência e profissionalismo. É incrível ver o progresso dele! Da nossa família: MÃE Edisonia, PAPAI Jeanderson, Sua irmã Bia ♥️😍✨🙏🏻",
    author: "Edisônia",
  },
  {
    quote: "Minha experiência com a clínica Beehave é extremamente positiva e marcada por muita confiança, gratidão e reconhecimento. Meu filho, Aprendente E., é acompanhado pela equipe da Beehave há cerca de três anos, desde muito próximo ao seu diagnóstico de autismo. Ao longo desse tempo, pude acompanhar de perto o quanto esse suporte foi essencial para o seu desenvolvimento. Grande parte das conquistas e evoluções do Aprendente E. são resultado do trabalho sério, comprometido e preciso realizado por essa equipe. A Beehave é uma clínica que transmite segurança, acolhimento e profissionalismo. Desde o início, sempre nos sentimos ouvidos como pais. Sou imensamente grata à clínica Beehave por todo o suporte, acolhimento e profissionalismo ao longo desses anos. É uma clínica em que confio plenamente e que recomendo com muita segurança a outras famílias.",
    author: "Luciana Feitoza",
  },
  {
    quote: "A experiência na Beehave tem sido fundamental para o desenvolvimento do meu filho. É um ambiente de acolhimento, cuidado e respeito, onde cada conquista é valorizada. Os profissionais trabalham com dedicação e sensibilidade, trazendo segurança para a criança e apoio para a família. Cada avanço representa um passo importante na evolução e na construção de um futuro com mais possibilidades. Sem falar no atendimento da AT (Aplicadora) que ajudou a melhorar bastante o desenvolvimento de Aprendente D.. A parceria entre supervisora, coordenadora e At (Aplicadora) tem sido o ponto chave para a evolução do meu filho. Estou satisfeita com o trabalho da clínica.",
    author: "Janaína",
  },
  {
    quote: "Gratidão, palavra que define toda caminhada com a família Beehave, pelo carinho, profissionalismo e dedicação nessa caminhada árdua. Só quem tem filho(a) atípica sabe o quanto é desafiador, mas a evolução desenvolvida nos faz entender que existe um Deus maravilhoso e profissionais excelentes em nossa jornada. Obrigado 🙏🏾",
    author: "José Pires",
  },
  {
    quote: "Eu sou Josineide, mãe de um aprendente de suporte nível 3, não verbal. Ele faz terapia na clínica beehave que desenvolve um papel fundamental em intervenção comportamental ABA. A clínica beehave faz um excelente trabalho de qualidade nos atendimentos prestados. Tem uma equipe de profissionais preparados e capacitados, dentro da ética e comprometimento com a aprendizagem da criança, seguindo todos os critérios adotados, utilizando de várias técnicas na intervenção comportamental ABA, respeitando os limites do aprendente. Acredito muito na ciência, e que todo trabalho desenvolvido para melhorar o bem-estar de cada ser humano é bem vindo, e a Beehave faz parte dessa transformação na vida cada um deles!",
    author: "Josineide",
  },
  {
    quote: "A experiência com a Beehave tem sido positiva e pautada na confiança, sobretudo na atuação do coordenador Fernando, que se destaca pela clareza, responsabilidade e pela preocupação com a segurança tanto do paciente quanto da nossa família. O caso trata-se de um paciente em fase quase adulta, com o Transtorno do Espectro Autistas (TEA) nível de suporte 3, o que representa um grande desafio terapêutico, especialmente diante de um histórico complexo. Ainda assim, a clínica acolheu esse desafio. Deus seja louvado por isso! Deus é Bom. Salmo 136:1. Amém Senhor e Salvador Jesus Cristo.",
    author: "Adriana",
  },
  {
    quote: "Bom dia! A Beehave para nossa família é um divisor de águas. Nosso filho tem se desenvolvido cada vez mais graças ao trabalho multidisciplinar entre escola, terapeutas e o acompanhamento da equipe Beehave. Uma equipe preparada, responsável, humana e que de fato conhece o meu filho. Dessa forma trabalha o que ele precisa desenvolver para alcançar sua autonomia. Vocês são um presente de Deus para nós. Muito obrigada",
    author: "Kelly Gadelha de Castro",
  },
  {
    quote: "Venho aqui com muita satisfação em nome da nossa família e em especial do nosso querido e amado filho, paciente da Clínica Beehave, descrever com carinho o belíssimo trabalho que vem desenvolvendo. Chegamos até a Beehave pelas excelentes indicações de outras famílias, e realmente a Clínica superou todas as nossas expectativas. As evoluções são notoriamente visíveis no dia a dia. A equipe Beehave do meu filho é Muuuuito Top, só temos a agradecer a todos os profissionais que fizeram e fazem parte dessa nossa caminhada!!! Parabéns Beehave, com vocês o trabalho realmente acontece!!! 🥰❤️👏🏻👏🏻👏🏻 😉🐝 Mamãe Juliana, Papai William e toda família",
    author: "Juliana",
  },
  {
    quote: "Hoje nesse depoimento, começo falando, por quê indicar a Beehave? É minha gente, a nossa experiência na Beehave vem de alguns anos. Experiência essa que obtivemos resultados excelentes no desenvolvimento da minha criança. Hoje agradeço a essa equipe por tamanha dedicação e compromisso que tem em fazer o melhor para nossas crianças. Carinho, acolhimento, amor pela profissão, são alguns elogios, diante de muitos, a fazer a esses profissionais. Gratidão a todos por tanta dedicação. Relato de uma mãe feliz e realizada. 🤭🫶🏼",
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
                  <blockquote className="text-gray-700 text-sm md:text-base text-center italic leading-relaxed px-2">
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