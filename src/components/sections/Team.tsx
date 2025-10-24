import React, { useState } from 'react';

// === LISTA COMPLETA DA EQUIPE ===
const teamMembers = [
  // DIRETORAS
  {
    name: 'Ma. Jacqueline Iukisa',
    role: 'Diretora de Finanças e RH',
    category: 'Diretora',
    image: 'https://images.pexels.com/photos/1181681/pexels-photo-1181681.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Analista do Comportamento Supervisora, Professora e Sócia-Diretora de Finanças e Recursos Humanos.'
  },
  {
    name: 'Dra. Thais Guimarães',
    role: 'Diretora de Marketing e Operações',
    category: 'Diretora',
    image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Analista do Comportamento Supervisora, Professora e Sócia-Diretora de Operações e Marketing.'
  },

  // SUPERVISORES
  {
    name: 'Me. Luiz Felipe Alves',
    role: 'Supervisor',
    category: 'Supervisor',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Analista do Comportamento Supervisor, Professor e Sócio. Atua em práticas baseadas em evidências em ABA.'
  },
  {
    name: 'Me. Murilo da Cruz',
    role: 'Supervisor',
    category: 'Supervisor',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Especialista em ABA com foco em desenvolvimento de habilidades funcionais e sociais.'
  },
  {
    name: 'Me. Rafael Alves',
    role: 'Supervisor',
    category: 'Supervisor',
    image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Experiência em coordenação clínica e avaliação comportamental.'
  },
  {
    name: 'Ma. Thamires Iukisa',
    role: 'Supervisora',
    category: 'Supervisor',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Supervisora com experiência em ABA e desenvolvimento infantil.'
  },

  // COORDENADORES
  {
    name: 'Andrea Teixeira',
    role: 'Coordenadora',
    category: 'Coordenadora',
    image: 'https://images.pexels.com/photos/3768146/pexels-photo-3768146.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Responsável pela coordenação de atendimentos e suporte técnico à equipe terapêutica.'
  },
  {
    name: 'Erica Tamires',
    role: 'Coordenadora',
    category: 'Coordenadora',
    image: 'https://images.pexels.com/photos/1181422/pexels-photo-1181422.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Coordena projetos clínicos com foco em análise do comportamento aplicada.'
  },
  {
    name: 'Gabriel Barão',
    role: 'Coordenador',
    category: 'Coordenador',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Coordena equipes multidisciplinares voltadas à aplicação de ABA.'
  },
  {
    name: 'Jamille Mota',
    role: 'Coordenadora',
    category: 'Coordenadora',
    image: 'https://images.pexels.com/photos/1181680/pexels-photo-1181680.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Coordenação com foco em processos terapêuticos e formação continuada.'
  },
  {
    name: 'Joice Izabela',
    role: 'Coordenadora',
    category: 'Coordenadora',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Coordenadora responsável por garantir a qualidade dos atendimentos ABA.'
  },
  {
    name: 'Fernando Costa',
    role: 'Coordenador',
    category: 'Coordenador',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Foco em treinamento de equipe e práticas comportamentais positivas.'
  },
  {
    name: 'Joyce Ribeiro',
    role: 'Coordenadora',
    category: 'Coordenadora',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Atua com desenvolvimento infantil e suporte familiar.'
  },
  {
    name: 'Nayara Queiroz',
    role: 'Coordenadora',
    category: 'Coordenadora',
    image: 'https://images.pexels.com/photos/1181415/pexels-photo-1181415.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Experiência em gestão de casos clínicos e supervisão terapêutica.'
  },

  // PSICOTERAPEUTAS
  {
    name: 'Aline Rodrigues',
    role: 'Psicoterapeuta',
    category: 'Psicoterapeuta',
    image: 'https://images.pexels.com/photos/846015/pexels-photo-846015.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Atua com ABA voltada para crianças e adolescentes com autismo.'
  },
  {
    name: 'Gutemberg dos Santos',
    role: 'Psicoterapeuta',
    category: 'Psicoterapeuta',
    image: 'https://images.pexels.com/photos/3777948/pexels-photo-3777948.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Experiência em psicoterapia comportamental e habilidades sociais.'
  },
  {
    name: 'Núbia Costa',
    role: 'Psicoterapeuta',
    category: 'Psicoterapeuta',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Psicoterapeuta com experiência em desenvolvimento infantil e ABA.'
  },
  {
    name: 'Renata Dantas',
    role: 'Psicoterapeuta',
    category: 'Psicoterapeuta',
    image: 'https://images.pexels.com/photos/1181421/pexels-photo-1181421.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Foco em terapia comportamental e treinamento de pais.'
  },
];

const Team = () => {
  const [selected, setSelected] = useState(null);

  const grouped = teamMembers.reduce((acc, member) => {
    if (!acc[member.category]) acc[member.category] = [];
    acc[member.category].push(member);
    return acc;
  }, {});

  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold text-black mb-10">Nossa Beequipe</h2>

      {Object.keys(grouped).map((category) => (
        <div key={category} className="mb-16">
          <h3 className="text-2xl font-semibold text-yellow-600 mb-8">{category}s</h3>
          <div className="flex flex-wrap justify-center gap-10">
            {grouped[category].map((member, index) => (
              <div
                key={index}
                className="hover-lift cursor-pointer"
                onClick={() => setSelected(member)}
              >
                <div className="hexagon shadow-md border-4 border-yellow-300 hover:border-yellow-500 transition-all">
                  <img src={member.image} alt={member.name} />
                </div>
                <h4 className="text-lg font-semibold mt-4">{member.name}</h4>
                <p className="text-yellow-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* MODAL POPUP */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-lg relative text-center">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-2 right-3 text-gray-500 hover:text-black text-2xl"
            >
              &times;
            </button>
            <div className="hexagon mx-auto mb-4">
              <img src={selected.image} alt={selected.name} />
            </div>
            <h3 className="text-2xl font-bold">{selected.name}</h3>
            <p className="text-yellow-600 mb-3">{selected.role}</p>
            <p className="text-gray-700">{selected.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Team;
import React, { useState } from 'react';

// === LISTA COMPLETA DA EQUIPE ===
const teamMembers = [
  // DIRETORAS
  {
    name: 'Ma. Jacqueline Iukisa',
    role: 'Diretora de Finanças e RH',
    category: 'Diretora',
    image: 'https://images.pexels.com/photos/1181681/pexels-photo-1181681.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Analista do Comportamento Supervisora, Professora e Sócia-Diretora de Finanças e Recursos Humanos.'
  },
  {
    name: 'Dra. Thais Guimarães',
    role: 'Diretora de Marketing e Operações',
    category: 'Diretora',
    image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Analista do Comportamento Supervisora, Professora e Sócia-Diretora de Operações e Marketing.'
  },

  // SUPERVISORES
  {
    name: 'Me. Luiz Felipe Alves',
    role: 'Supervisor',
    category: 'Supervisor',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Analista do Comportamento Supervisor, Professor e Sócio. Atua em práticas baseadas em evidências em ABA.'
  },
  {
    name: 'Me. Murilo da Cruz',
    role: 'Supervisor',
    category: 'Supervisor',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Especialista em ABA com foco em desenvolvimento de habilidades funcionais e sociais.'
  },
  {
    name: 'Me. Rafael Alves',
    role: 'Supervisor',
    category: 'Supervisor',
    image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Experiência em coordenação clínica e avaliação comportamental.'
  },
  {
    name: 'Ma. Thamires Iukisa',
    role: 'Supervisora',
    category: 'Supervisor',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Supervisora com experiência em ABA e desenvolvimento infantil.'
  },

  // COORDENADORES
  {
    name: 'Andrea Teixeira',
    role: 'Coordenadora',
    category: 'Coordenadora',
    image: 'https://images.pexels.com/photos/3768146/pexels-photo-3768146.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Responsável pela coordenação de atendimentos e suporte técnico à equipe terapêutica.'
  },
  {
    name: 'Erica Tamires',
    role: 'Coordenadora',
    category: 'Coordenadora',
    image: 'https://images.pexels.com/photos/1181422/pexels-photo-1181422.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Coordena projetos clínicos com foco em análise do comportamento aplicada.'
  },
  {
    name: 'Gabriel Barão',
    role: 'Coordenador',
    category: 'Coordenador',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Coordena equipes multidisciplinares voltadas à aplicação de ABA.'
  },
  {
    name: 'Jamille Mota',
    role: 'Coordenadora',
    category: 'Coordenadora',
    image: 'https://images.pexels.com/photos/1181680/pexels-photo-1181680.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Coordenação com foco em processos terapêuticos e formação continuada.'
  },
  {
    name: 'Joice Izabela',
    role: 'Coordenadora',
    category: 'Coordenadora',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Coordenadora responsável por garantir a qualidade dos atendimentos ABA.'
  },
  {
    name: 'Fernando Costa',
    role: 'Coordenador',
    category: 'Coordenador',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Foco em treinamento de equipe e práticas comportamentais positivas.'
  },
  {
    name: 'Joyce Ribeiro',
    role: 'Coordenadora',
    category: 'Coordenadora',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Atua com desenvolvimento infantil e suporte familiar.'
  },
  {
    name: 'Nayara Queiroz',
    role: 'Coordenadora',
    category: 'Coordenadora',
    image: 'https://images.pexels.com/photos/1181415/pexels-photo-1181415.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Experiência em gestão de casos clínicos e supervisão terapêutica.'
  },

  // PSICOTERAPEUTAS
  {
    name: 'Aline Rodrigues',
    role: 'Psicoterapeuta',
    category: 'Psicoterapeuta',
    image: 'https://images.pexels.com/photos/846015/pexels-photo-846015.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Atua com ABA voltada para crianças e adolescentes com autismo.'
  },
  {
    name: 'Gutemberg dos Santos',
    role: 'Psicoterapeuta',
    category: 'Psicoterapeuta',
    image: 'https://images.pexels.com/photos/3777948/pexels-photo-3777948.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Experiência em psicoterapia comportamental e habilidades sociais.'
  },
  {
    name: 'Núbia Costa',
    role: 'Psicoterapeuta',
    category: 'Psicoterapeuta',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Psicoterapeuta com experiência em desenvolvimento infantil e ABA.'
  },
  {
    name: 'Renata Dantas',
    role: 'Psicoterapeuta',
    category: 'Psicoterapeuta',
    image: 'https://images.pexels.com/photos/1181421/pexels-photo-1181421.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Foco em terapia comportamental e treinamento de pais.'
  },
];

const Team = () => {
  const [selected, setSelected] = useState(null);

  const grouped = teamMembers.reduce((acc, member) => {
    if (!acc[member.category]) acc[member.category] = [];
    acc[member.category].push(member);
    return acc;
  }, {});

  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold text-black mb-10">Nossa Beequipe</h2>

      {Object.keys(grouped).map((category) => (
        <div key={category} className="mb-16">
          <h3 className="text-2xl font-semibold text-yellow-600 mb-8">{category}s</h3>
          <div className="flex flex-wrap justify-center gap-10">
            {grouped[category].map((member, index) => (
              <div
                key={index}
                className="hover-lift cursor-pointer"
                onClick={() => setSelected(member)}
              >
                <div className="hexagon shadow-md border-4 border-yellow-300 hover:border-yellow-500 transition-all">
                  <img src={member.image} alt={member.name} />
                </div>
                <h4 className="text-lg font-semibold mt-4">{member.name}</h4>
                <p className="text-yellow-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* MODAL POPUP */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-lg relative text-center">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-2 right-3 text-gray-500 hover:text-black text-2xl"
            >
              &times;
            </button>
            <div className="hexagon mx-auto mb-4">
              <img src={selected.image} alt={selected.name} />
            </div>
            <h3 className="text-2xl font-bold">{selected.name}</h3>
            <p className="text-yellow-600 mb-3">{selected.role}</p>
            <p className="text-gray-700">{selected.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Team;
