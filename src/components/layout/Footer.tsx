import React, { useState } from 'react';

type Category = 'todos' | 'servicos' | 'agendamento' | 'valores' | 'online';

const faqs = [
  {
    cat: 'servicos',
    icon: '🧠',
    color: 'bg-blue-50',
    q: 'Quais serviços a Beehave oferece?',
    a: 'Oferecemos atendimento psicológico individual para adultos e adolescentes, orientação para pais, acompanhamento de crianças e sessões online. Trabalhamos com diversas abordagens terapêuticas adaptadas às necessidades de cada cliente.',
  },
  {
    cat: 'agendamento',
    icon: '📅',
    color: 'bg-teal-50',
    q: 'Como posso agendar uma consulta?',
    a: 'Você pode entrar em contato pelo nosso WhatsApp (87 98828-7826), por e-mail em empresabeehave@gmail.com ou presencialmente em nossa unidade na Rua Bahia, 808, Vila Moco, Petrolina-PE. Respondemos em horário comercial.',
  },
  {
    cat: 'valores',
    icon: '💳',
    color: 'bg-amber-50',
    q: 'Quais são os valores das sessões?',
    a: 'Os valores variam de acordo com o tipo de atendimento e profissional. Entre em contato conosco para obter informações detalhadas sobre os planos disponíveis e possibilidade de deslizamento social.',
  },
  {
    cat: 'online',
    icon: '💻',
    color: 'bg-purple-50',
    q: 'Vocês realizam atendimento online?',
    a: 'Sim! Oferecemos atendimento psicológico 100% online por videoconferência. As sessões têm a mesma qualidade do atendimento presencial e são especialmente indicadas para quem tem rotina agitada ou mora fora de Petrolina.',
  },
  {
    cat: 'agendamento',
    icon: '🕐',
    color: 'bg-green-50',
    q: 'Qual é a duração de uma sessão?',
    a: 'Cada sessão tem duração de 50 minutos, que é o tempo padrão para psicoterapia individual. Em casos de avaliação ou orientação, a duração pode variar conforme a necessidade.',
  },
  {
    cat: 'servicos',
    icon: '👶',
    color: 'bg-pink-50',
    q: 'Vocês atendem crianças?',
    a: 'Sim, temos psicólogos especializados em psicologia infantil. Atendemos crianças a partir dos 3 anos, utilizando técnicas lúdicas e adequadas para cada faixa etária. Também oferecemos orientação para os pais.',
  },
  {
    cat: 'valores',
    icon: '🏥',
    color: 'bg-red-50',
    q: 'Aceitam convênios ou planos de saúde?',
    a: 'Atualmente trabalhamos com pagamento particular. Caso tenha plano de saúde, verifique com sua operadora sobre o reembolso de sessões de psicologia — muitos planos cobrem parte do valor.',
  },
  {
    cat: 'agendamento',
    icon: '🔄',
    color: 'bg-teal-50',
    q: 'Posso cancelar ou remarcar uma sessão?',
    a: 'Sim. Pedimos apenas que o cancelamento ou remarcação seja feito com no mínimo 24 horas de antecedência, para que possamos oferecer o horário a outro paciente. Cancelamentos tardios podem ser cobrados.',
  },
];

const cats: { key: Category; label: string }[] = [
  { key: 'todos', label: 'Todos' },
  { key: 'servicos', label: 'Serviços' },
  { key: 'agendamento', label: 'Agendamento' },
  { key: 'valores', label: 'Valores' },
  { key: 'online', label: 'Online' },
];

const FAQ: React.FC = () => {
  const [cat, setCat] = useState<Category>('todos');
  const [open, setOpen] = useState<number | null>(null);

  const filtered = faqs.filter((f) => cat === 'todos' || f.cat === cat);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-10">
          <span className="inline-block bg-yellow-200 text-yellow-800 text-xs font-medium px-4 py-1 rounded-full mb-3 tracking-wide">
            FAQ
          </span>
          <h2 className="text-3xl font-semibold text-gray-900 mb-2">Perguntas frequentes</h2>
          <p className="text-gray-500">
            Encontre respostas rápidas sobre nossos serviços, agendamentos e muito mais.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {cats.map((c) => (
            <button
              key={c.key}
              onClick={() => { setCat(c.key); setOpen(null); }}
              className={`px-4 py-1.5 rounded-full text-sm border transition-all ${
                cat === c.key
                  ? 'bg-gray-900 text-yellow-400 border-gray-900'
                  : 'bg-gray-100 text-gray-500 border-gray-200 hover:border-gray-400 hover:text-gray-700'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          {filtered.map((f, i) => (
            <div
              key={i}
              onClick={() => setOpen(open === i ? null : i)}
              className={`border rounded-xl overflow-hidden cursor-pointer transition-all ${
                open === i ? 'border-gray-300' : 'border-gray-100'
              }`}
            >
              <div className="flex items-center gap-3 px-5 py-4">
                <div className={`w-8 h-8 rounded-lg ${f.color} flex items-center justify-center text-sm flex-shrink-0`}>
                  {f.icon}
                </div>
                <span className="flex-1 text-sm font-medium text-gray-800">{f.q}</span>
                <svg
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                    open === i ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 20 20"
                >
                  <path d="M5 7.5l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  open === i ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-5 pb-4 pl-16 text-sm text-gray-500 leading-relaxed">
                  {f.a}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-gray-50 rounded-xl p-6 text-center border border-gray-100">
          <p className="text-sm text-gray-500 mb-4">
            Não encontrou o que procurava? Fale diretamente com nossa equipe.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            
              href="https://wa.me/5587988287826"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white text-sm px-5 py-2 rounded-lg font-medium hover:bg-green-600 transition-colors"
            >
              WhatsApp
            </a>
            
              href="mailto:empresabeehave@gmail.com"
              className="bg-white text-gray-700 border border-gray-200 text-sm px-5 py-2 rounded-lg hover:border-gray-400 transition-colors"
            >
              E-mail
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;