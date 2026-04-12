import React, { useState } from 'react';

type Category = 'todos' | 'aba' | 'familia' | 'servicos' | 'valores';

const faqs = [
  {
    cat: 'aba',
    icon: '🧠',
    color: 'bg-blue-50',
    q: 'O que é a terapia ABA?',
    a: 'A intervenção baseada em ABA (conhecida, popularmente, como terapia ABA). ABA é uma sigla do inglês, Applied Behavior Analysis, traduzida para o português como Análise do Comportamento Aplicada. Ela é a parte da pesquisa aplicada e da prestação de serviço da Análise do Comportamento, uma ciência do comportamento. A intervenção baseada em ABA tem como objetivos principais ensinar habilidades socialmente relevantes e reduzir comportamentos que dificultam a aprendizagem dessas habilidades. É conhecida especialmente na intervenção para pessoas autistas, mas também pode ser aplicada em outros contextos, como organizacional, escolas, terapia para pessoas típicas, serviços públicos etc.',
  },
  {
    cat: 'aba',
    icon: '♾️',
    color: 'bg-purple-50',
    q: 'Por que a ABA é indicada para autistas?',
    a: 'Segundo a Organização Mundial de Saúde (OMS), a intervenção baseada em ABA é a que possui melhores resultados para pessoas com Desenvolvimento atípico/Transtorno do Espectro Autista (TEA).',
  },
  {
    cat: 'familia',
    icon: '👨‍👩‍👧',
    color: 'bg-pink-50',
    q: 'A família participa das sessões da intervenção baseada em ABA?',
    a: 'Depende! A família é parte essencial do processo dessa intervenção. Contudo, a participação na sessão dependerá dos objetivos elaborados para a(o) Aprendente. Além das sessões, a manutenção e generalização de habilidades são importantes para que essa(e) Aprendente consiga colocar em prática o que aprendeu na sessão, e nessa etapa a participação da família é fundamental.',
  },
  {
    cat: 'servicos',
    icon: '🏫',
    color: 'bg-teal-50',
    q: 'A Beehave faz acompanhamento escolar?',
    a: 'Sim! A(o) Aplicadora(dor) pode fazer acompanhamento no ambiente escolar, desde que a Equipe ABA avalie essa necessidade. Porém, é importante entender as diferenças dos papeis entre Agente de ensino da Equipe ABA e a Escola: a(o) Aplicadora(dor) tem função, basicamente, de mediar as relações da(o) Aprendente com outras pessoas, auxiliar na comunicação, manejar comportamentos desafiadores; enquanto a Escola deve cumprir com as suas funções pedagógicas com essa(e) Aprendente.',
  },
  {
    cat: 'familia',
    icon: '👶',
    color: 'bg-green-50',
    q: 'A partir de qual idade minha filha ou meu filho pode começar?',
    a: 'Não há idade mínima para iniciar a intervenção baseada em ABA. As(os) Agentes de ensino da Equipe ABA farão as adaptações necessárias para promover o melhor atendimento às pessoas de qualquer idade.',
  },
  {
    cat: 'servicos',
    icon: '📋',
    color: 'bg-amber-50',
    q: 'O que é necessário para iniciar a intervenção baseada em ABA?',
    a: 'Basta entrar em contato com a Recepção da Beehave e agendar um horário para a Avaliação Comportamental. Não é necessário laudo ou qualquer outro documento de outro profissional. Esse mesmo procedimento pode ser feito para contratar outros serviços da Beehave.',
  },
  {
    cat: 'valores',
    icon: '🏥',
    color: 'bg-red-50',
    q: 'Vocês atendem por Planos de saúde?',
    a: 'Infelizmente não, os atendimentos são particulares. Caso você tenha um Plano de saúde, você pode solicitar atendimento na sua Operadora de saúde e pedir encaminhamento para a Beehave, mas a decisão final cabe à Operadora de saúde.',
  },
  {
    cat: 'aba',
    icon: '🕐',
    color: 'bg-blue-50',
    q: 'Qual é a carga horária recomendada para a intervenção baseada em ABA?',
    a: 'A definição da carga horária é individualizada. Ela é definida após a Avaliação Comportamental, em que um dos produtos é o Plano de Ensino Individualizado (PEI). Geralmente a CH indicada varia entre 10 e 40 horas semanais, seja em ambiente escolar, domiciliar, e ainda ambientes externos, como parques e praças, dependendo da atividade a ser desempenhada, incluindo também o tempo de descanso para a(o) Aprendente.',
  },
  {
    cat: 'servicos',
    icon: '📚',
    color: 'bg-purple-50',
    q: 'A Beehave oferta outros serviços, além do de intervenção baseada em ABA?',
    a: 'Sim, a Beehave oferta serviços de saúde por meio da Beehave Serviços, como Consultoria ou Assessoria em ABA para Clínica, Escola, Serviço público de Educação e Saúde; Supervisão em ABA; Supervisão Clínica para Psicóloga(o); Psicoterapia infantil, adolescente e adulto. Além disso, por meio da Beehave Cursos, oferta Cursos livres, Treinamento em ABA, Roda de Conversa, Palestra, Workshop e Docente para ministrar aula em Pós-graduação.',
  },
];

const cats: { key: Category; label: string }[] = [
  { key: 'todos', label: 'Todos' },
  { key: 'aba', label: 'Sobre ABA' },
  { key: 'familia', label: 'Família' },
  { key: 'servicos', label: 'Serviços' },
  { key: 'valores', label: 'Valores' },
];

const FAQ: React.FC = () => {
  const [cat, setCat] = useState<Category>('todos');
  const [open, setOpen] = useState<number | null>(0);

  const filtered = faqs.filter((f) => cat === 'todos' || f.cat === cat);

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black">Perguntas Frequentes</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto my-4"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            Encontre respostas para as perguntas frequentes sobre os nossos Serviços em ABA!
          </p>
        </div>

        {/* Filtros por categoria */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {cats.map((c) => (
            <button
              key={c.key}
              onClick={() => { setCat(c.key); setOpen(null); }}
              className={`px-4 py-1.5 rounded-full text-sm border transition-all ${
                cat === c.key
                  ? 'bg-gray-900 text-yellow-400 border-gray-900'
                  : 'bg-white text-gray-500 border-gray-200 hover:border-gray-400 hover:text-gray-700'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Lista de perguntas */}
        <div className="flex flex-col gap-2">
          {filtered.map((f, i) => (
            <div
              key={i}
              onClick={() => setOpen(open === i ? null : i)}
              className={`bg-white border rounded-xl overflow-hidden cursor-pointer transition-all ${
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
                  open === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-5 pb-4 pl-16 text-sm text-gray-600 leading-relaxed">
                  {f.a}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <p className="text-gray-700 mb-4">Ainda tem dúvidas? Estamos aqui para ajudar.</p>
          
            href="#contact"
            className="inline-flex items-center text-black bg-yellow-400 hover:bg-yellow-500 px-5 py-2 rounded-md font-medium transition-colors"
          >
            Entre em Contato
          </a>
        </div>

      </div>
    </section>
  );
};

export default FAQ;