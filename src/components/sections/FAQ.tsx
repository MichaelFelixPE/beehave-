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
      question: "Quais faixas etárias vocês atendem?",
      answer: "Atendemos crianças e adolescentes de 2 a 18 anos. Nossas abordagens terapêuticas são adaptadas para serem apropriadas ao desenvolvimento de cada faixa etária."
    },
    {
      question: "Vocês aceitam convênio?",
      answer: "Sim, aceitamos os principais convênios. Entre em contato com nosso escritório para verificar a cobertura específica do seu plano para serviços psicológicos."
    },
    {
      question: "Qual a duração das sessões de terapia?",
      answer: "As sessões individuais geralmente duram 45-50 minutos. Avaliações e diagnósticos iniciais podem levar mais tempo, geralmente 1-2 horas, dependendo da complexidade das necessidades."
    },
    {
      question: "Qual é a abordagem de vocês para terapia autista?",
      answer: "Utilizamos abordagens baseadas em evidências, incluindo Terapia Cognitivo-Comportamental (TCC), Análise do Comportamento Aplicada (ABA) e técnicas de integração sensorial. Nossa abordagem é sempre personalizada para os pontos fortes, desafios e interesses únicos de cada criança."
    },
    {
      question: "Como os pais participam do processo terapêutico?",
      answer: "Acreditamos fortemente no envolvimento familiar. Os pais recebem atualizações regulares, participam de sessões familiares e aprendem estratégias para apoiar o desenvolvimento de seus filhos em casa. Também oferecemos sessões de orientação e educação para pais."
    },
    {
      question: "Como saber se meu filho precisa de uma avaliação?",
      answer: "Se você notou dificuldades persistentes com interação social, comunicação, comportamento ou processamento sensorial que impactam o funcionamento diário, uma avaliação pode ser útil. Oferecemos consultas telefônicas gratuitas de 15 minutos para discutir suas preocupações e determinar se uma avaliação seria benéfica."
    }
  ];

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black">Perguntas Frequentes</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto my-4"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            Encontre respostas para as perguntas mais comuns sobre nossos serviços e abordagem.
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