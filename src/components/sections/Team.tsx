import { Users } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  level: string;
  children?: TeamMember[];
}

const teamHierarchy: TeamMember[] = [
  {
    name: 'Ma. Jacqueline Iukisa',
    role: 'Diretora de Finanças e RH',
    image: 'https://via.placeholder.com/150',
    level: 'A',
    children: [
      {
        name: 'Dra. Thais Guimarães',
        role: 'Diretora de Marketing e Operações',
        image: 'https://via.placeholder.com/150',
        level: 'B',
        children: [
          {
            name: 'Me. Luiz Felipe Alves',
            role: 'Supervisor (CRP-02/20334)',
            image: 'https://via.placeholder.com/150',
            level: 'C',
          },
          {
            name: 'Me. Murilo da Cruz',
            role: 'Supervisor (CRP-02/21135)',
            image: 'https://via.placeholder.com/150',
            level: 'C',
          },
          {
            name: 'Me. Rafael Alves',
            role: 'Supervisor (CRP-02/26926)',
            image: 'https://via.placeholder.com/150',
            level: 'C',
          },
          {
            name: 'Ma. Thamires Iukisa',
            role: 'Supervisora (CFEP-19002082)',
            image: 'https://via.placeholder.com/150',
            level: 'C',
          },
          {
            name: 'Dra. Thais Guimarães',
            role: 'Supervisora (CRP-02/15644)',
            image: 'https://via.placeholder.com/150',
            level: 'C',
          },
          {
            name: 'Ma. Jacqueline Iukisa',
            role: 'Supervisora (CRP-02/17658)',
            image: 'https://via.placeholder.com/150',
            level: 'C',
          },
          {
            name: 'Andrea Teixeira',
            role: 'Coordenadora (CRP-02/25615)',
            image: 'https://via.placeholder.com/150',
            level: 'D',
          },
          {
            name: 'Erica Tamires',
            role: 'Coordenadora (CRP-02/26411)',
            image: 'https://via.placeholder.com/150',
            level: 'D',
          },
          {
            name: 'Gabriel Barão',
            role: 'Coordenador (CRP-02/30450)',
            image: 'https://via.placeholder.com/150',
            level: 'D',
          },
          {
            name: 'Jamille Mota',
            role: 'Coordenadora (CRP-03/19674)',
            image: 'https://via.placeholder.com/150',
            level: 'D',
          },
          {
            name: 'Joice Izabela',
            role: 'Coordenadora (CRP-02/26606)',
            image: 'https://via.placeholder.com/150',
            level: 'D',
          },
          {
            name: 'Fernando Costa',
            role: 'Coordenador (CRP-02/26753)',
            image: 'https://via.placeholder.com/150',
            level: 'D',
          },
          {
            name: 'Joyce Ribeiro',
            role: 'Coordenadora (CRP-02/26518)',
            image: 'https://via.placeholder.com/150',
            level: 'D',
          },
          {
            name: 'Nayara Queiroz',
            role: 'Coordenadora (CRP-02/28286)',
            image: 'https://via.placeholder.com/150',
            level: 'D',
          },
          {
            name: 'Aline Rodrigues',
            role: 'Psicoterapeuta (CRP-02/23629)',
            image: 'https://via.placeholder.com/150',
            level: 'E',
          },
          {
            name: 'Gutemberg dos Santos',
            role: 'Psicoterapeuta (CRP-02/20367)',
            image: 'https://via.placeholder.com/150',
            level: 'E',
          },
          {
            name: 'Núbia Costa',
            role: 'Psicoterapeuta (CRP-03/18294)',
            image: 'https://via.placeholder.com/150',
            level: 'E',
          },
          {
            name: 'Renata Dantas',
            role: 'Psicoterapeuta (CRP-02/30345)',
            image: 'https://via.placeholder.com/150',
            level: 'E',
          },
        ],
      },
    ],
  },
];

const Team = () => {
  const getAllMembers = (members: TeamMember[]): TeamMember[] => {
    let allMembers: TeamMember[] = [];
    members.forEach(member => {
      allMembers.push(member);
      if (member.children) {
        allMembers = allMembers.concat(getAllMembers(member.children));
      }
    });
    return allMembers;
  };

  const allTeamMembers = getAllMembers(teamHierarchy);

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Users className="h-12 w-12 text-yellow-500" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossa Equipe</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Profissionais qualificados e comprometidos com a excelência
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {allTeamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
