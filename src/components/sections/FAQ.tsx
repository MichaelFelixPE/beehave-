import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={toggleOpen}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-black">{question}</h3>
        <span className="ml-6 flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-yellow-500" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-400" />
          )}
        </span>
      </button>
      {isOpen && (
        <div className="mt-3 text-gray-700">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems = [
    {
      question: "O que é a terapia ABA?",
      answer: "A intervenção baseada em ABA (conhecida, popularmente, como terapia ABA). ABA é uma sigla do inglês, Applied Behavior Analysis, traduzida para o português como Análise do Comportamento Aplicada. Ela é a parte da pesquisa aplicada e da prestação de serviço da Análise do Comportamento, uma ciência do comportamento. A intervenção baseada em ABA tem como objetivos principais ensinar habilidades socialmente relevantes e reduzir comportamentos que dificultam a aprendizagem dessas habilidades. É conhecida especialmente na intervenção para pessoas autistas, mas também pode ser aplicada em outros contextos, como organizacional, escolas, terapia para pessoas típicas, serviços públicos etc."
    },
    {
      question: "Por que a ABA é indicada para autistas?",
      answer: "Segundo a Organização Mundial de Saúde (OMS), a intervenção baseada em ABA é a que possui melhores resultados para pessoas com Desenvolvimento atípico/Transtorno do Espectro Autista (TEA)."
    },
    {
      question: "A família participa das sessões da intervenção baseada em ABA?",
      answer: "Depende! A família é parte essencial do processo dessa intervenção. Contudo, a participação na sessão dependerá dos objetivos elaborados para a(o) Aprendente. Além das sessões, a manutenção e generalização de habilidades são importantes para que essa(e) Aprendente consiga colocar em prática o que aprendeu na sessão, e nessa etapa a participação da família é fundamental."
    },
    {
      question: "A Beehave faz acompanhamento escolar?",
      answer: "Sim! A(o) Aplicadora(dor) pode fazer acompanhamento no ambiente escolar, desde que a Equipe ABA avalie essa necessidade.  Porém, é importante entender as diferenças dos papeis entre Agente de ensino da Equipe ABA e a Escola: a(o) Aplicadora(dor) tem função, basicamente, de mediar as relações da(o) Aprendente com outras pessoas, auxiliar na comunicação, manejar comportamentos desafiadores, (a depender do repertório da(o) Aprendente, pode haver objetivos acadêmicos); enquanto a Escola deve cumprir com as suas funções pedagógicas com essa(e) Aprendente."
    },
    {
      question: "A partir de qual idade minha filha ou meu filho pode começar?",
      answer: "Não há idade mínima para iniciar a intervenção baseada em ABA. As(os) Agentes de ensino da Equipe ABA farão as adaptações necessárias para promover o melhor atendimento às pessoas de qualquer idade."
    },
    {
      question: "O que é necessário para iniciar a intervenção baseada em ABA?",
      answer: "Basta entrar em contato com a Recepção da Beehave e agendar um horário para a Avaliação Comportamental. Não é necessário laudo ou qualquer outro documento de outro profissional. Esse mesmo procedimento pode ser feito para contratar outros serviço da Beehave."
    },
    {
      question: "Vocês atendem por Planos de saúde?",
      answer: "Infelizmente não, os atendimentos são particulares. Caso você tenha um Plano de saúde, você pode solicitar atendimento na sua Operadora de saúde e pedir encaminhamento para a Beehave, mas a decisão final cabe à Operadora de saúde."
    },
    {
      question: "Qual é a carga horária recomendada para a intervenção baseada em ABA?",
      answer: "A definição da carga horária é individualizada. Ela é definida após a Avaliação Comportamental, em que um dos produtos é o Plano de Ensino Individualizado (PEI). Nesse documento, com os objetivos de ensino aprovados pela família, leva-se em consideração a real necessidade de Aprendente, junto a sua família. Dito isso, geralmente a CH indicada varia entre 10 e 40 horas semanais, seja em ambiente escolar, domiciliar, e ainda ambientes externos, como parques e praças, dependendo da atividade a ser desempenhada, incluindo também o tempo de descanso para a(o) Aprendente."
    },
    {
      question: "A Beehave oferta outros serviços, além do de intervenção baseada em ABA para desenvolvimento atípico/TEA?",
      answer: "Sim, a Beehave oferta serviços de saúde por meio da Beehave Serviços, como Consultoria ou Assessoria em ABA para Clínica, Escola, Serviço público de Educação e Saúde; Supervisão em ABA para Coordenadora(dor) e/ou Supervisora(sor) de Equipe ABA; Profissional da saúde e da educação.; Supervisão Clínica para Psicóloga(o); Psicoterapia infantil, adolescente e adulto. Além disso, por meio da Beehave Cursos, oferta Cursos livres (ex.: Aplicadora(dor) em ABA; PCM; PEI); Treinamento em ABA para Profissionais da saúde e educação; Roda de Conversa; Palestra; Workshop; Docente para ministrar aula em Pós-graduação."
    }
  ];

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black">Perguntas Frequentes</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto my-4"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            Encontre respostas para as perguntas frequentes sobre os nossos Serviços em ABA!
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              toggleOpen={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-700 mb-4">Ainda tem dúvidas? Estamos aqui para ajudar.</p>
          <a 
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