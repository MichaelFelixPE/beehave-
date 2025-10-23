import React from 'react';

const team = {
  diretoras: [
    {
      name: 'Ma. Jacqueline Iukisa',
      role: 'Diretora de Finanças e RH',
      image: 'https://images.pexels.com/photos/5325840/pexels-photo-5325840.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Dra. Thais Guimarães',
      role: 'Diretora de Marketing e Operações',
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ],
  supervisores: [
    { name: 'Dra. Thais Guimarães', role: 'CRP-02/15644', image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Ma. Jacqueline Iukisa', role: 'CRP-02/17658', image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Me. Luiz Felipe Alves', role: 'CRP-02/20334', image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Me. Murilo da Cruz', role: 'CRP-02/21135', image: 'https://images.pexels.com/photos/936133/pexels-photo-936133.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Me. Rafael Alves', role: 'CRP-02/26926', image: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Ma. Thamires Iukisa', role: 'CFEP-19002082', image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600' },
  ],
  coordenadores: [
    { name: 'Andrea Teixeira', role: 'CRP-02/25615', image: 'https://images.pexels.com/photos/1181691/pexels-photo-1181691.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Erica Tamires', role: 'CRP-02/26411', image: 'https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Gabriel Barão', role: 'CRP-02/30450', image: 'https://images.pexels.com/photos/5325845/pexels-photo-5325845.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Jamille Mota', role: 'CRP-03/19674', image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Joice Izabela', role: 'CRP-02/26606', image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Fernando Costa', role: 'CRP-02/26753', image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Joyce Ribeiro', role: 'CRP-02/26518', image: 'https://images.pexels.com/photos/3771099/pexels-photo-3771099.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Nayara Queiroz', role: 'CRP-02/28286', image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600' },
  ],
  psicoterapeutas: [
    { name: 'Aline Rodrigues', role: 'CRP-02/23629', image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Gutemberg dos Santos', role: 'CRP-02/20367', image: 'https://images.pexels.com/photos/936133/pexels-photo-936133.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Núbia Costa', role: 'CRP-03/18294', image: 'https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Renata Dantas', role: 'CRP-02/30345', image: 'https://images.pexels.com/photos/1181681/pexels-photo-1181681.jpeg?auto=compress&cs=tinysrgb&w=600' },
  ],
};

const Team = () => {
  const renderHexMember = (member, index) => (
    <div key={index} className="hexagon bg-white shadow-md hover:shadow-xl transition-all duration-300 p-4 text-center">
      <img
        src={member.image}
        alt={member.name}
        className="w-20 h-20 object-cover rounded-full mx-auto mb-2 border-4 border-yellow-400"
      />
      <h4 className="text-black font-semibold text-sm">{member.name}</h4>
      <p className="text-yellow-600 text-xs">{member.role}</p>
    </div>
  );

  return (
    <section id="team" className="py-16 bg-gray-50 honeycomb-bg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black">Nossa Beequipe</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-3 mb-5"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Conheça nossa Beequipe dedicada, que garante qualidade e ética em cada atendimento.
          </p>
        </div>

        {/* Diretoras */}
        <div className="text-center mb-16">
          <h3 className="text-xl font-bold text-yellow-700 mb-6">Diretoras</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {team.diretoras.map(renderHexMember)}
          </div>
        </div>

        {/* Supervisores */}
        <div className="text-center mb-16">
          <h3 className="text-xl font-bold text-yellow-700 mb-6">Supervisores</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {team.supervisores.map(renderHexMember)}
          </div>
        </div>

        {/* Coordenadores */}
        <div className="text-center mb-16">
          <h3 className="text-xl font-bold text-yellow-700 mb-6">Coordenadores</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {team.coordenadores.map(renderHexMember)}
          </div>
        </div>

        {/* Psicoterapeutas */}
        <div className="text-center mb-10">
          <h3 className="text-xl font-bold text-yellow-700 mb-6">Psicoterapeutas</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {team.psicoterapeutas.map(renderHexMember)}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-700 max-w-3xl mx-auto mb-8">
            Nossa equipe participa regularmente de treinamentos e se mantém atualizada com as últimas pesquisas 
            para oferecer as melhores práticas em Análise do Comportamento Aplicada (ABA).
          </p>
          <a
            href="#contact"
            className="inline-block bg-black text-white hover:bg-gray-800 px-6 py-3 rounded-md font-medium transition-colors"
          >
            Agende uma Consulta
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;
