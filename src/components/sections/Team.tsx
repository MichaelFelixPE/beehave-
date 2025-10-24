import React from 'react';

const teamHierarchy = [
  {
    name: 'MA. Jacqueline Iukisa',
    role: 'Sócia-Diretora de Finanças e RH',
    image: 'https://images.pexels.com/photos/5325840/pexels-photo-5325840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    level: 'A',
    children: [
      {
        name: 'Dra. Thais Guimarães',
        role: 'Sócia-Diretora de Operações e Marketing',
        image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        level: 'B',
        children: [
          {
            name: 'Me. Luiz Felipe Alves',
            role: 'Supervisor e Professor',
            image: 'https://images.pexels.com/photos/5699516/pexels-photo-5699516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            level: 'C',
          },
          {
            name: 'David Chen',
            role: 'Terapeuta Comportamental',
            image: 'https://images.pexels.com/photos/5324973/pexels-photo-5324973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            level: 'C',
          },
        ],
      },
    ],
  },
];

const HexNode = ({ member }) => {
  return (
    <div className="relative flex flex-col items-center text-center">
      {/* Hexágono */}
      <div className="hexagon bg-white border-4 border-yellow-400 shadow-lg">
        <img
          src={member.image}
          alt={member.name}
          className="w-20 h-20 rounded-full object-cover"
        />
      </div>

      {/* Texto */}
      <h3 className="mt-3 font-semibold text-black">{member.name}</h3>
      <p className="text-gray-600 text-sm max-w-[150px]">{member.role}</p>

      {/* Conexões e filhos */}
      {member.children && (
        <div className="relative mt-12 flex justify-center gap-20">
          {/* Linha vertical */}
          <div className="absolute top-[-2.5rem] left-1/2 w-0.5 h-10 bg-gray-400 -translate-x-1/2"></div>

          {member.children.map((child, i) => (
            <div key={i} className="relative">
              {/* Linha diagonal */}
              <div className="absolute top-[-2.5rem] left-1/2 w-0.5 h-10 bg-gray-400 -translate-x-1/2"></div>
              <HexNode member={child} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Team = () => {
  return (
    <section id="team" className="py-20 bg-gray-50">
      {/* Cabeçalho */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-black">Nossa Beequipe</h2>
        <div className="w-24 h-1 bg-yellow-400 mx-auto my-4"></div>
        <p className="max-w-2xl mx-auto text-gray-700">
          Conheça nossa equipe organizada em uma estrutura inspirada em colmeias — 
          representando conexão, cooperação e liderança.
        </p>
      </div>

      {/* Árvore */}
      <div className="flex justify-center">
        {teamHierarchy.map((leader, index) => (
          <HexNode key={index} member={leader} />
        ))}
      </div>

      {/* Rodapé */}
      <div className="mt-16 text-center">
        <p className="text-gray-700 max-w-3xl mx-auto mb-8">
          Nossa equipe participa de formações contínuas e mantém práticas baseadas em evidências,
          garantindo o melhor acompanhamento para cada criança.
        </p>
        <a
          href="#contact"
          className="inline-block bg-black text-white hover:bg-gray-800 px-6 py-3 rounded-md font-medium transition-colors"
        >
          Agende uma Consulta com Nossa Equipe
        </a>
      </div>
    </section>
  );
};

export default Team;
