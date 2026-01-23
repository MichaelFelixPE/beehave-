import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Olá, equipe Beehave! Quero expressar minha gratidão pelo cuidado excepcional que vocês têm com o Aprendente L.. A dedicação e carinho de vocês fazem toda a diferença na vida dele! A equipe ABA, liderada pelo supervisor Rafael e pela coordenadora Joyce, é simplesmente incrível. Eles são profissionais exemplares, carinhosos e atenciosos. A mesma gratidão vale para o psicólogo Gutemberg, que faz um trabalho maravilhoso, lúdico, dedicado, e sempre com muita paciência e carinho. E não posso deixar de mencionar a Zel, a recepcionista, que é uma pessoa lindaaa, amorosa e dedicada. Ela é demaissssss! Muito obrigado por tudo! Adoro como vocês ajudam o APRENDENTE L. a se desenvolver de forma incrível, sempre com muita paciência e profissionalismo. É incrível ver o progresso dele! Da nossa família MÃE , Edisonia PAPAI , Jeanderson Sua irmã , Bia ",
    author: "Cliente: Edisônia",
    rating: 5
  },
  {
    quote: "Bom dia! A Beehave para nossa família é um divisor de águas Nosso filho tem se desenvolvido cada vez mais graças ao trabalho multidisciplinar entre escola, terapeutas e o acompanhamento da equipe Beehave. Uma equipe preparada, responsável, humana e que de fato conhece o meu filho. Dessa forma trabalha o que ele precisa desenvolver para alcançar sua autonomia. Vcs são um presente de Deus para nós. Muito obrigada",
    author: "Cliente: Kelly Gadelha de Castro",
    rating: 5
  },
  {
    quote: "O grupo de habilidades sociais da BeeHave ajudou meu filho a fazer amigos pela primeira vez. Os terapeutas criaram um ambiente tão acolhedor onde ele se sentiu confortável e aceito.",
    author: "Pai do Noah, 9 anos",
    rating: 5
  },
  {
    quote: "A Dra. Johnson e sua equipe vão além. Eles não apenas trabalham com minha filha, mas dedicam tempo para educar e apoiar toda a nossa família. Vimos um progresso notável.",
    author: "Mãe da Lily, 7 anos",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black">Depoimentos de Clientes</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto my-4"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            Veja o que nossas e nossos Clientes têm a dizer sobre a experiência delas(es) em nossos Serviços!
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-yellow-50 rounded-lg p-8 md:p-12 shadow-lg">
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            
            <blockquote className="text-xl md:text-2xl text-center text-gray-800 mb-8 italic">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            
            <p className="text-center text-gray-600 font-medium">— {testimonials[currentIndex].author}</p>
            
            <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2">
              <div className="inline-flex bg-white rounded-full shadow-md">
                <button
                  onClick={prevTestimonial}
                  className="p-3 text-gray-700 hover:text-yellow-500 transition-colors"
                  aria-label="Depoimento anterior"
                >
                  <ChevronLeft size={20} />
                </button>
                <div className="px-4 py-3 text-sm border-l border-r border-gray-200">
                  {currentIndex + 1} / {testimonials.length}
                </div>
                <button
                  onClick={nextTestimonial}
                  className="p-3 text-gray-700 hover:text-yellow-500 transition-colors"
                  aria-label="Próximo depoimento"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Elementos decorativos */}
          <div className="absolute -top-6 -left-6 w-16 h-16 bg-yellow-200 rounded-full opacity-50 hidden md:block"></div>
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-yellow-200 rounded-full opacity-50 hidden md:block"></div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-700 max-w-2xl mx-auto">
            Queremos fazer a diferença na vida das pessoas por meio da ABA com Afeto, Ciência e Ética!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;