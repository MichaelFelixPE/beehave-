import React from 'react';

const teamMembers = [
  {
    name: 'MA. Jacqueline Iukisa',
    role: 'Analista do Comportamento Supervisora; Professora; e Sócia-Diretora de Finanças e Recursos Humanos',
    image: 'https://images.pexels.com/photos/5325840/pexels-photo-5325840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    bio: 'Dra. Johnson tem mais de 15 anos de experiência trabalhando com crianças autistas. Ela é especialista em terapia cognitivo-comportamental e abordagens de integração sensorial.',
  },
  {
    name: 'Dra. Thais Guimarães',
    role: 'Analista do Comportamento Supervisora; Professora; e Sócia-Diretora de Operações e Marketing',
    image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    bio: 'Dr. Rodriguez concentra-se em avaliações neuropsicológicas abrangentes e desenvolvimento de planos de tratamento individualizados para crianças com necessidades complexas.',
  },
  {
    name: 'Me. Luiz Felipe Alves',
    role: 'Especialista em Habilidades Sociais',
    image: 'https://images.pexels.com/photos/5699516/pexels-photo-5699516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    bio: 'Sarah lidera nossos grupos de habilidades sociais e trabalha individualmente com crianças para desenvolver habilidades de comunicação e construção de relacionamentos.',
  },
  {
    name: 'David Chen',
    role: 'Terapeuta Comportamental',
    image: 'https://images.pexels.com/photos/5324973/pexels-photo-5324973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    bio: 'David é especialista em análise do comportamento aplicada e estratégias de suporte comportamental positivo para crianças com autismo e desafios relacionados.',
  },
];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black">Nossa Beequipe </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto my-4"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            Conheça nossa Beequipe dedicada e comprometida em ofertar serviços baseados em ABA que priorizem ciência, afeto e ética.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2">
              <div className="relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black">{member.name}</h3>
                <p className="text-yellow-600 mb-3">{member.role}</p>
                <p className="text-gray-700 text-sm mb-4">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-700 max-w-3xl mx-auto mb-8">
            Nossa equipe participa regularmente de treinamentos avançados e se mantém atualizada com as últimas pesquisas 
            para fornecer as abordagens terapêuticas mais eficazes para crianças autistas.
          </p>
          <a 
            href="#contact"
            className="inline-block bg-black text-white hover:bg-gray-800 px-6 py-3 rounded-md font-medium transition-colors"
          >
            Agende uma Consulta com Nossa Equipe
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;