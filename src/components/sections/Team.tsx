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
            role: 'Supervisor',
            image: 'https://via.placeholder.com/150',
            level: 'C',
          },
          {
            name: 'Me. Murilo da Cruz',
            role: 'Supervisor',
            image: 'https://via.placeholder.com/150',
            level: 'C',
          },
          {
            name: 'Me. Rafael Alves',
            role: 'Supervisor',
            image: 'https://via.placeholder.com/150',
            level: 'C',
          },
          {
            name: 'Ma. Thamires Iukisa',
            role: 'Supervisora',
            image: 'https://via.placeholder.com/150',
            level: 'C',
          },
          {
            name: 'Dra. Thais Guimarães',
            role: 'Supervisora',
            image: 'https://via.placeholder.com/150',
            level: 'C',
          },
          {
            name: 'Ma. Jacqueline Iukisa',
            role: 'Supervisora',
            image: 'https://via.placeholder.com/150',
            level: 'C',
          },
          {
            name: 'Andrea Teixeira',
            role: 'Coordenadora',
            image: 'https://via.placeholder.com/150',
            level: 'D',
          },
          {
            name: 'Erica Tamires',
            role: 'Coordenadora',
            image: 'https://via.placeholder.com/150',
            level: 'D',
          },
          {
            name: 'Gabriel Barão',
            role: 'Coordenador',
            image: 'https://via.placeholder.com/150',
            level: 'D',
          },
          {
            name: 'Jamille Mota',
            role: 'Coordenadora',
            image: 'https://via.placeholder.com/150',
            level: 'D',
          },
          {
            name: 'Joice Izabela',
            role: 'Coordenadora',
            image: 'https://via.placeholder.com/150',
            level: 'D',
          },
          {
            name: 'Fernando Costa',
            role: 'Coordenador',
            image: 'https://via.placeholder.com/150',
            level: 'D',
          },
          {
            name: 'Joyce Ribeiro',
            role: 'Coordenadora',
            image: 'https://via.placeholder.com/150',
            level: 'D',
          },
          {
            name: 'Nayara Queiroz',
            role: 'Coordenadora',
            image: 'https://via.placeholder.com/150',
            level: 'D',
          },
          {
            name: 'Aline Rodrigues',
            role: 'Psicoterapeuta',
            image: 'https://via.placeholder.com/150',
            level: 'E',
          },
          {
            name: 'Gutemberg dos Santos',
            role: 'Psicoterapeuta',
            image: 'https://via.placeholder.com/150',
            level: 'E',
          },
          {
            name: 'Núbia Costa',
            role: 'Psicoterapeuta',
            image: 'https://via.placeholder.com/150',
            level: 'E',
          },
          {
            name: 'Renata Dantas',
            role: 'Psicoterapeuta',
            image: 'https://via.placeholder.com/150',
            level: 'E',
          },
        ],
      },
    ],
  },
];

const HexagonMember = ({ member }: { member: TeamMember }) => {
  return (
    <div className="relative group">
      <div className="hexagon-wrapper">
        <div className="hexagon bg-gradient-to-br from-yellow-400 to-amber-500 p-0.5">
          <div className="hexagon-inner bg-white">
            <img
              src={member.image}
              alt={member.name}
              className="hexagon-image"
            />
          </div>
        </div>
      </div>
      <div className="text-center mt-2">
        <h4 className="text-xs font-semibold text-gray-900">{member.name}</h4>
        <p className="text-xs text-gray-600">{member.role}</p>
      </div>
    </div>
  );
};

const Team = () => {
  const directors = teamHierarchy;
  const subDirectors = directors[0]?.children || [];
  const supervisors = subDirectors[0]?.children?.filter(m => m.level === 'C') || [];
  const coordinators = subDirectors[0]?.children?.filter(m => m.level === 'D') || [];
  const therapists = subDirectors[0]?.children?.filter(m => m.level === 'E') || [];

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-x-auto">
      <style>{`
        .hexagon-wrapper {
          width: 90px;
          height: 90px;
          margin: 0 auto;
        }

        .hexagon {
          width: 100%;
          height: 100%;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          transition: transform 0.3s ease;
        }

        .hexagon:hover {
          transform: scale(1.1);
        }

        .hexagon-inner {
          width: 100%;
          height: 100%;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hexagon-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .connector-line {
          position: absolute;
          background: linear-gradient(to bottom, #fbbf24, #f59e0b);
          z-index: -1;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Users className="h-12 w-12 text-yellow-500" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossa Colmeia</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estrutura organizacional da equipe Beehave
          </p>
        </div>

        <div className="relative flex flex-col items-center space-y-8">
          <div className="flex justify-center gap-12">
            {directors.map((director, idx) => (
              <HexagonMember key={idx} member={director} />
            ))}
          </div>

          {subDirectors.length > 0 && (
            <div className="flex justify-center gap-12">
              {subDirectors.map((subDir, idx) => (
                <HexagonMember key={idx} member={subDir} />
              ))}
            </div>
          )}

          {supervisors.length > 0 && (
            <>
              <div className="text-center w-full">
                <h3 className="text-lg font-bold text-gray-700 mb-4">Supervisores</h3>
              </div>
              <div className="flex justify-center gap-6 flex-wrap max-w-4xl">
                {supervisors.map((supervisor, idx) => (
                  <HexagonMember key={idx} member={supervisor} />
                ))}
              </div>
            </>
          )}

          {coordinators.length > 0 && (
            <>
              <div className="text-center w-full">
                <h3 className="text-lg font-bold text-gray-700 mb-4">Coordenadores</h3>
              </div>
              <div className="flex justify-center gap-6 flex-wrap max-w-5xl">
                {coordinators.map((coordinator, idx) => (
                  <HexagonMember key={idx} member={coordinator} />
                ))}
              </div>
            </>
          )}

          {therapists.length > 0 && (
            <>
              <div className="text-center w-full">
                <h3 className="text-lg font-bold text-gray-700 mb-4">Psicoterapeutas</h3>
              </div>
              <div className="flex justify-center gap-6 flex-wrap max-w-4xl">
                {therapists.map((therapist, idx) => (
                  <HexagonMember key={idx} member={therapist} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Team;
