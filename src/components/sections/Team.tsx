import { Users } from 'lucide-react';
import { useState } from 'react';
import Modal from '../ui/Modal';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  level: string;
  crm?: string;
  formations?: string[];
  bio?: string;
  children?: TeamMember[];
}

const teamHierarchy: TeamMember[] = [
  {
    name: 'Ma. Jacqueline Iukisa',
    role: 'Diretora de Finanças e RH',
    image: 'https://imgur.com/ZEhbVZI',
    level: 'A',
    crm: 'CRP 00/00000',
    formations: [
      'Mestrado em Psicologia',
      'Especialização em Gestão de Pessoas',
      'Graduação em Psicologia'
    ],
    bio: 'Profissional com ampla experiência em gestão de recursos humanos e finanças.',
    children: [
      {
        name: 'Dra. Thais Guimarães',
        role: 'Diretora de Marketing e Operações',
        image: 'https://i.imgur.com/fN975T0.jpeg',
        level: 'B',
        crm: 'CRP 00/00000',
        formations: [
          'Doutorado em Psicologia',
          'Mestrado em Psicologia Clínica',
          'Graduação em Psicologia'
        ],
        bio: 'Especialista em marketing e operações clínicas.',
        children: [
          {
            name: 'Me. Luiz Felipe Alves',
            role: 'Supervisor',
            image: 'https://imgur.com/BU6tqCO',
            level: 'C',
            crm: 'CRP 00/00000',
            formations: [
              'Mestrado em Psicologia',
              'Especialização em Análise do Comportamento',
              'Graduação em Psicologia'
            ],
            bio: 'Supervisor com experiência em análise comportamental aplicada.',
          },
          {
            name: 'Me. Murilo da Cruz',
            role: 'Supervisor',
            image: 'https://i.imgur.com/kExt69r.jpeg',
            level: 'C',
            crm: 'CRP 00/00000',
            formations: [
              'Mestrado em Psicologia',
              'Especialização em Terapia Cognitivo-Comportamental',
              'Graduação em Psicologia'
            ],
            bio: 'Supervisor especializado em intervenções cognitivo-comportamentais.',
          },
          {
            name: 'Me. Rafael Alves',
            role: 'Supervisor',
            image: 'https://i.imgur.com/Xu7oJx7.jpeg',
            level: 'C',
            crm: 'CRP 00/00000',
            formations: [
              'Mestrado em Psicologia',
              'Especialização em Psicologia Clínica',
              'Graduação em Psicologia'
            ],
            bio: 'Supervisor com foco em atendimento clínico e supervisão de casos.',
          },
          {
            name: 'Ma. Thamires Iukisa',
            role: 'Supervisora',
            image: 'https://i.imgur.com/NdpFqu4.jpeg',
            level: 'C',
            crm: 'CRP 00/00000',
            formations: [
              'Mestrado em Psicologia',
              'Especialização em Análise do Comportamento',
              'Graduação em Psicologia'
            ],
            bio: 'Supervisora com experiência em análise comportamental e supervisão clínica.',
          },
          {
            name: 'Dra. Thais Guimarães',
            role: 'Supervisora',
            image: 'https://i.imgur.com/fN975T0.jpeg',
            level: 'C',
            crm: 'CRP 00/00000',
            formations: [
              'Doutorado em Psicologia',
              'Mestrado em Psicologia Clínica',
              'Graduação em Psicologia'
            ],
            bio: 'Especialista em marketing e operações clínicas.',
          },
          {
            name: 'Ma. Jacqueline Iukisa',
            role: 'Supervisora',
            image: 'https://i.imgur.com/WTK7fkF.jpeg',
            level: 'C',
            crm: 'CRP 00/00000',
            formations: [
              'Mestrado em Psicologia',
              'Especialização em Gestão de Pessoas',
              'Graduação em Psicologia'
            ],
            bio: 'Profissional com ampla experiência em gestão de recursos humanos e finanças.',
          },
          {
            name: 'Andrea Teixeira',
            role: 'Coordenadora',
            image: 'https://i.imgur.com/eT15gxN.jpeg',
            level: 'D',
            crm: 'CRP 00/00000',
            formations: [
              'Especialização em Psicologia Clínica',
              'Graduação em Psicologia'
            ],
            bio: 'Coordenadora com foco em gestão de equipes e atendimento clínico.',
          },
          {
            name: 'Erica Tamires',
            role: 'Coordenadora',
            image: 'https://i.imgur.com/p8KNHwi.jpeg',
            level: 'D',
            crm: 'CRP 00/00000',
            formations: [
              'Especialização em Terapia Cognitivo-Comportamental',
              'Graduação em Psicologia'
            ],
            bio: 'Coordenadora especializada em processos terapêuticos e gestão de casos.',
          },
          {
            name: 'Gabriel Barão',
            role: 'Coordenador',
            image: 'https://i.imgur.com/FELQnv7.jpeg',
            level: 'D',
            crm: 'CRP 00/00000',
            formations: [
              'Especialização em Análise do Comportamento',
              'Graduação em Psicologia'
            ],
            bio: 'Coordenador com experiência em análise comportamental e coordenação de equipes.',
          },
          {
            name: 'Jamille Mota',
            role: 'Coordenadora',
            image: 'https://i.imgur.com/e13IKtU.jpeg',
            level: 'D',
            crm: 'CRP 00/00000',
            formations: [
              'Especialização em Psicologia Organizacional',
              'Graduação em Psicologia'
            ],
            bio: 'Coordenadora com foco em processos organizacionais e desenvolvimento de equipes.',
          },
          {
            name: 'Joice Izabela',
            role: 'Coordenadora',
            image: 'https://i.imgur.com/WMrJii0.jpeg',
            level: 'D',
            crm: 'CRP 00/00000',
            formations: [
              'Especialização em Psicologia Clínica',
              'Graduação em Psicologia'
            ],
            bio: 'Coordenadora especializada em atendimento clínico e supervisão de casos.',
          },
          {
            name: 'Fernando Costa',
            role: 'Coordenador',
            image: 'https://i.imgur.com/7ZeVyrD.jpeg',
            level: 'D',
            crm: 'CRP 00/00000',
            formations: [
              'Especialização em Análise do Comportamento',
              'Graduação em Psicologia'
            ],
            bio: 'Coordenador com experiência em análise comportamental aplicada.',
          },
          {
            name: 'Joyce Ribeiro',
            role: 'Coordenadora',
            image: 'https://i.imgur.com/1TxQF0m.jpeg',
            level: 'D',
            crm: 'CRP 00/00000',
            formations: [
              'Especialização em Terapia Cognitivo-Comportamental',
              'Graduação em Psicologia'
            ],
            bio: 'Coordenadora com foco em intervenções cognitivo-comportamentais.',
          },
          {
            name: 'Nayara Queiroz',
            role: 'Coordenadora',
            image: 'https://i.imgur.com/AzpmCik.jpeg',
            level: 'D',
            crm: 'CRP 00/00000',
            formations: [
              'Especialização em Psicologia Clínica',
              'Graduação em Psicologia'
            ],
            bio: 'Coordenadora especializada em processos clínicos e gestão de equipes.',
          },
          {
            name: 'Aline Rodrigues',
            role: 'Psicoterapeuta',
            image: 'https://i.imgur.com/vyQlmGB.jpeg',
            level: 'E',
            crm: 'CRP 00/00000',
            formations: [
              'Graduação em Psicologia',
              'Formação em Terapia Cognitivo-Comportamental'
            ],
            bio: 'Psicoterapeuta dedicada ao atendimento clínico individual.',
          },
          {
            name: 'Gutemberg dos Santos',
            role: 'Psicoterapeuta',
            image: 'https://i.imgur.com/w3IO4mA.jpeg',
            level: 'E',
            crm: 'CRP 00/00000',
            formations: [
              'Graduação em Psicologia',
              'Formação em Análise do Comportamento'
            ],
            bio: 'Psicoterapeuta com foco em análise comportamental aplicada.',
          },
          {
            name: 'Núbia Costa',
            role: 'Psicoterapeuta',
            image: 'https://i.imgur.com/adggXBn.jpeg',
            level: 'E',
            crm: 'CRP 00/00000',
            formations: [
              'Graduação em Psicologia',
              'Formação em Terapia Cognitivo-Comportamental'
            ],
            bio: 'Psicoterapeuta especializada em atendimento clínico individual e em grupo.',
          },
          {
            name: 'Renata Dantas',
            role: 'Psicoterapeuta',
            image: 'https://i.imgur.com/BhrH4CK.jpeg',
            level: 'E',
            crm: 'CRP 00/00000',
            formations: [
              'Graduação em Psicologia',
              'Formação em Psicologia Clínica'
            ],
            bio: 'Psicoterapeuta com experiência em atendimento clínico e acolhimento.',
          },
        ],
      },
    ],
  },
];

const HexagonMember = ({ member, onClick }: { member: TeamMember; onClick: () => void }) => {
  return (
    <div className="relative group cursor-pointer" onClick={onClick}>
      <div className="hexagon-wrapper">
        <div className="hexagon bg-gradient-to-br from-yellow-400 to-amber-500 p-0.5">
          <div className="hexagon-inner bg-white">
            <img
              src={member.image}
              alt={member.name}
              className="hexagon-image"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = 'https://via.placeholder.com/200x200/FCD34D/1F2937?text=' + encodeURIComponent(member.name.split(' ')[0]);
              }}
              loading="lazy"
              crossOrigin="anonymous"
            />
          </div>
        </div>
      </div>
      <div className="text-center mt-3">
        <h4 className="text-sm font-semibold text-gray-900">{member.name}</h4>
        <p className="text-sm text-gray-600">{member.role}</p>
      </div>
    </div>
  );
};

const MemberModal = ({ member, onClose }: { member: TeamMember; onClose: () => void }) => {
  return (
    <Modal isOpen={true} onClose={onClose}>
      <div className="p-8">
        <div className="flex flex-col items-center">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-yellow-400 mb-6">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover object-center"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = 'https://via.placeholder.com/400x400/FCD34D/1F2937?text=' + encodeURIComponent(member.name.split(' ')[0]);
              }}
              crossOrigin="anonymous"
            />
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-2">{member.name}</h2>
          <p className="text-xl text-yellow-600 font-semibold mb-4">{member.role}</p>

          {member.crm && (
            <p className="text-lg text-gray-700 mb-6">{member.crm}</p>
          )}

          {member.bio && (
            <p className="text-gray-600 text-center mb-6 max-w-xl">{member.bio}</p>
          )}

          {member.formations && member.formations.length > 0 && (
            <div className="w-full max-w-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Formações</h3>
              <ul className="space-y-2">
                {member.formations.map((formation, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{formation}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

const Team = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const directors = teamHierarchy;
  const subDirectors = directors[0]?.children || [];
  const supervisors = subDirectors[0]?.children?.filter(m => m.level === 'C') || [];
  const coordinators = subDirectors[0]?.children?.filter(m => m.level === 'D') || [];
  const therapists = subDirectors[0]?.children?.filter(m => m.level === 'E') || [];

  return (
    <>
      {selectedMember && (
        <MemberModal
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
    <section id="team" className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-x-auto">
      <style>{`
        .hexagon-wrapper {
          width: 120px;
          height: 120px;
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
          width: 120%;
          height: 120%;
          object-fit: cover;
          object-position: center;
          image-rendering: -webkit-optimize-contrast;
          image-rendering: crisp-edges;
        }

        .hexagon-image[src*="andrea"] {
          width: 100%;
          height: 100%;
        }

        .hexagon-image[src*="fernando"] {
          width: 110%;
          height: 110%;
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
          <div className="flex justify-center gap-12 mb-8">
            {directors.map((director, idx) => (
              <HexagonMember key={idx} member={director} onClick={() => setSelectedMember(director)} />
            ))}
            {subDirectors.length > 0 && subDirectors.map((subDir, idx) => (
              <HexagonMember key={idx} member={subDir} onClick={() => setSelectedMember(subDir)} />
            ))}
          </div>

          {supervisors.length > 0 && (
            <>
              <div className="text-center w-full">
                <h3 className="text-lg font-bold text-gray-700 mb-4">Supervisores</h3>
              </div>
              <div className="flex justify-center gap-6 flex-wrap max-w-4xl">
                {supervisors.map((supervisor, idx) => (
                  <HexagonMember key={idx} member={supervisor} onClick={() => setSelectedMember(supervisor)} />
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
                  <HexagonMember key={idx} member={coordinator} onClick={() => setSelectedMember(coordinator)} />
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
                  <HexagonMember key={idx} member={therapist} onClick={() => setSelectedMember(therapist)} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
    </>
  );
};

export default Team;
