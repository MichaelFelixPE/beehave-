import { Users, X } from 'lucide-react';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Interfaces ---
interface TeamMember {
  name: string;
  role?: string;
  image: string;
  level: string;
  crm?: string;
  formations?: string[];
  bio?: string;
  children?: TeamMember[];
}

// --- Dados ( teamHierarchy ) ---
const teamHierarchy: TeamMember[] = [
  {
    name: 'Ma. Jacqueline Iukisa',
    role: 'Sócia | Diretora de Finanças e RH',
    image: 'https://i.imgur.com/ZEhbVZI.jpeg', 
    level: 'A',
    crm: 'CRP-02/17658',
    formations: [
      'Graduação em Psicologia (UNIVASF)',
      'Graduação em Língua Inglesa (UPE)',
      'Mestrado em Teoria e Pesquisa do Comportamento (UFPA)'
    ],
    bio: 'Olá! Me chamo Jacqueline Iukisa. Sou formada em Psicologia pela Univasf e em Língua Inglesa pela UPE. Tenho mestrado em Teoria e Pesquisa do Comportamento pela UFPA, e atuo na área de desenvolvimento atípico há mais de 13 anos...',
    children: [
      {
        name: 'Dra. Thais Guimarães',
        role: 'Sócia | Diretora de Marketing e Operações',
        image: 'https://i.imgur.com/fN975T0.jpeg',
        level: 'B',
        crm: 'CRP-02/15644',
        formations: ['Doutorado e Mestrado em Teoria e Pesquisa do Comportamento (UFPA)', 'Bacharel em Psicologia (Univasf)'],
        bio: 'Olá! Eu sou Thais Maria Monteiro Guimarães... Atuo como Pesquisadora, Docente e Analista do Comportamento Supervisora.',
        children: [
          {
            name: 'Me. Luiz Felipe Alves',
            role: 'Sócio | Supervisor',
            image: 'https://i.imgur.com/BU6tqCO.jpeg',
            level: 'C',
            crm: 'CRP-02/20334',
            formations: ['Mestrado em Teoria e Pesquisa do Comportamento (UFPA)', 'Doutorado em andamento'],
            bio: 'Oi! Eu sou o Luiz Felipe Alves. Sou psicólogo formado pela Univasf...',
          },
          {
            name: 'Me. Murilo da Cruz',
            role: 'Supervisor ABA',
            image: 'https://i.imgur.com/DJR131G.jpeg',
            level: 'C',
            crm: 'CRP-02/21135',
            formations: ['Mestrado em Psicologia (Univasf)'],
            bio: 'Olá! Eu sou Murilo da Cruz Santos. Bacharel e Mestre em Psicologia...',
          },
          {
            name: 'Me. Rafael Alves',
            role: 'Supervisor Parceiro',
            image: 'https://i.imgur.com/Qz9WLJ6.jpeg',
            level: 'C',
            crm: 'CRP-02/26926',
            formations: ['Mestrado em Processos Cognitivos e Comportamentais (UNIVASF)'],
            bio: 'Sou Rafael Alves Rodrigues, mestre pela UNIVASF...',
          },
          {
             name: 'Ma. Thamires Iukisa',
             role: 'Supervisora em ABA',
             image: 'https://i.imgur.com/8082mo0.jpeg',
             level: 'C',
             crm: 'CFEP-19002082',
             formations: ['Mestrado em Psicologia (UNIVASF)', 'Pós-graduação em Intervenção ABA'],
             bio: 'Olá! Me chamo Thamires Iukisa e sou Historiadora com pós em ABA...',
          },
          {
            name: 'Me. Álex Rosas',
            role: 'Supervisor de Intervenção',
            image: 'https://i.imgur.com/57Xr5pn.jpeg',
            level: 'C',
            crm: 'CRP-02/26874',
            formations: ['Mestrado em Psicologia', 'Especialista em ABA'],
            bio: 'Me chamo Álex Jonatas, sou Psicólogo formado na Univasf...',
          },
          {
            name: 'Ma. Joíra Ribeiro',
            role: 'Supervisora Técnica',
            image: 'https://i.imgur.com/zJGPMaX.jpg',
            level: 'C',
            crm: 'CRP-03/15556',
            formations: ['Mestrado em Psicologia (UNIVASF)'],
            bio: 'Sou graduada em Psicologia, Mestre em Psicologia pela UNIVASF...',
          },
          {
            name: 'Esp. Andrea Teixeira',
            role: 'Coordenadora ABA',
            image: 'https://i.imgur.com/bPV6yn9.jpeg',
            level: 'D',
            crm: 'CRP-02/25615',
            formations: ['Pós em Neuropsicologia', 'Pós em ABA aplicada ao TEA'],
            bio: 'Sou Andrea Teixeira, psicóloga formada pela FACESF...',
          },
          {
            name: 'Esp. Erica Tamires',
            role: 'Coordenadora de Equipe',
            image: 'https://i.imgur.com/EGe56gz.jpeg',
            level: 'D',
            crm: 'CRP-02/264110',
            formations: ['Especialização em ABA', 'Graduação em Pedagogia'],
            bio: 'Olá, me chamo Erica Tamires, apaixonada pela infância...',
          },
          {
            name: 'Esp. Jamille Mota',
            role: 'Coordenadora ABA',
            image: 'https://i.imgur.com/RltbllC.jpeg',
            level: 'D',
            crm: 'CRP-03/19674',
            formations: ['Analista do Comportamento', 'Especialização em Psicologia Organizacional'],
            bio: 'Sou Jamille Mota, psicóloga de ofício, Coordenadora ABA por função...',
          },
          {
            name: 'Esp. Joice Izabela',
            role: 'Coordenadora ABA',
            image: 'https://i.imgur.com/5kDExFR.jpeg',
            level: 'D',
            crm: 'CRP-02/26606',
            formations: ['Especialização em ABA (CBI of Miami)', 'Praticante Nível 2 PCM'],
            bio: 'Meu nome é Joice Izabela, sou psicóloga formada pela UNIVASF...',
          },
          {
            name: 'Esp. Fernando Costa',
            role: 'Coordenador ABA (Nível 3)',
            image: 'https://i.imgur.com/JsbcOvA.jpeg',
            level: 'D',
            crm: 'CRP-02/26753',
            formations: ['Especialização em ABA', 'Foco em TEA Nível 3'],
            bio: 'Sou Fernando Costa, psicólogo e coordenador ABA há 6 anos...',
          },
          {
            name: 'Esp. Joyce Ribeiro',
            role: 'Coordenadora ABA',
            image: 'https://i.imgur.com/veAEOsy.jpeg',
            level: 'D',
            crm: 'CRP-02/26518',
            formations: ['Pós-graduação em ABA', 'Foco em TEA e DI'],
            bio: 'Me chamo Joyce Maria, sou Psicóloga pós-graduada em ABA...',
          },
          {
            name: 'Esp. Thays Cruz',
            role: 'Coordenadora de Equipe',
            image: 'https://i.imgur.com/gwY6B0k.jpeg',
            level: 'D',
            crm: 'CRP-03/31285',
            formations: ['Doutoranda em Análise do Comportamento (UEL)', 'Mestra em Psicologia'],
            bio: 'Olá! Eu me chamo Thays, sou Psicóloga e Analista do Comportamento...',
          },
          {
            name: 'Esp. Nayara Queiroz',
            role: 'Coordenadora ABA',
            image: 'https://i.imgur.com/W6FVLyd.jpeg',
            level: 'D',
            crm: 'CRP 02/28286',
            formations: ['Artes Visuais', 'Psicologia', 'Pós em ABA'],
            bio: 'Olá, sou Nayara Queiroz. Licenciada em Artes Visuais e Psicóloga...',
          },
          {
            name: 'Esp. Carlane Machado',
            role: 'Coordenadora Técnica',
            image: 'https://i.imgur.com/9ekDBk6.jpg',
            level: 'D',
            crm: 'CRP-03/29529',
            formations: ['Pós-graduação em ABA', 'Pós em Neuropsicologia'],
            bio: 'Me chamo Carlane Machado, psicóloga e coordenadora técnica...',
          },
          {
            name: 'Aline Rodrigues',
            level: 'E',
            image: 'https://i.imgur.com/vrqMI2m.jpeg',
            role: 'Psicoterapeuta',
            crm: 'CRP-02/23629',
            bio: 'Sou Aline Rodrigues, Psicóloga voltada para o público infantil...',
          },
          {
            name: 'Gutemberg dos Santos',
            level: 'E',
            image: 'https://i.imgur.com/luGPgKa.jpeg',
            role: 'Psicoterapeuta',
            crm: 'CRP-02/20367',
            bio: 'Sou Gutemberg Santos, Psicólogo formado pela UNIVASF...',
          },
          {
            name: 'Núbia Costa',
            level: 'E',
            image: 'https://i.imgur.com/nD3QWnm.jpeg',
            role: 'Psicóloga',
            crm: 'CRP-03/18294',
            bio: 'Sou Núbia de Sousa, Bacharel em Psicologia pela Univasf...',
          },
          {
            name: 'Renata Dantas',
            level: 'E',
            image: 'https://i.imgur.com/TGufhH3.jpeg',
            role: 'Psicóloga',
            crm: 'CRP-02/30345',
            bio: 'Sou Renata Dantas, Psicóloga formada pela Faculdade Uninassau...',
          },
          {
            name: 'Adson Raul',
            level: 'E-EVAL',
            image: 'https://i.imgur.com/Cc4mOuy.jpeg',
            role: 'Equipe de Avaliação',
            bio: 'Olá, me chamo Adson Raul, sou psicólogo formado pela UNINASSAU...',
          },
          {
            name: 'Brenda Souza',
            level: 'E-EVAL',
            image: 'https://i.imgur.com/DcKJBzc.jpeg',
            role: 'Equipe de Avaliação',
            bio: 'Me chamo Brenda Souza, Bacharela em Psicologia...',
          },
          {
            name: 'Luégina Sena',
            level: 'E-EVAL',
            image: 'https://i.imgur.com/4RpCe4h.jpeg',
            role: 'Equipe de Avaliação',
            bio: 'Sou Luégina de Sena Dias, graduada em Pedagogia pela UNEB...',
          },
          {
            name: 'Patrícia Matos',
            level: 'E-EVAL',
            image: 'https://i.imgur.com/TxZAhzt.jpeg',
            role: 'Equipe de Avaliação',
            bio: 'Olá, me chamo Patrícia Matos Oliveira, graduada em Serviço Social...',
          },
          {
            name: 'Waleska Oliveira',
            level: 'E-EVAL',
            image: 'https://i.imgur.com/sT3ZMfi.jpeg',
            role: 'Equipe de Avaliação',
            bio: 'Sou Waleska Oliveira, estudante de Fonoaudiologia e aplicadora ABA...',
          }
        ]
      }
    ]
  }
];

// --- Componentes de Apoio ---

const HexagonMember = ({ member, onClick }: { member: TeamMember; onClick: () => void }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.05, zIndex: 10 }}
      className="flex flex-col items-center cursor-pointer w-32 md:w-40" 
      onClick={onClick}
    >
      <div className="hexagon-container relative w-24 h-28 md:w-32 md:h-36">
        <div className="hexagon-border bg-gradient-to-b from-yellow-400 to-amber-600 p-[2px]">
          <div className="hexagon-inner bg-white">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="text-center mt-3">
        <h4 className="text-[12px] md:text-sm font-bold text-gray-800 leading-tight">{member.name}</h4>
        <p className="text-[10px] md:text-xs text-amber-600 font-medium uppercase tracking-tighter mt-1">{member.role || member.level}</p>
      </div>
    </motion.div>
  );
};

const MemberModal = ({ member, onClose }: { member: TeamMember; onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
      >
        <button onClick={onClose} className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10">
          <X className="w-6 h-6 text-gray-500" />
        </button>

        <div className="p-6 md:p-10">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
              <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{member.name}</h2>
              <p className="text-amber-600 font-semibold text-lg mt-1">{member.role}</p>
              {member.crm && <span className="inline-block mt-2 px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full font-mono">{member.crm}</span>}
              
              <div className="mt-6">
                <h3 className="text-sm uppercase tracking-widest text-gray-400 font-bold mb-2">Sobre</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">{member.bio}</p>
              </div>

              {member.formations && (
                <div className="mt-6">
                  <h3 className="text-sm uppercase tracking-widest text-gray-400 font-bold mb-3">Formação Acadêmica</h3>
                  <ul className="space-y-2">
                    {member.formations.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// --- Componente Principal ---

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // Extrai todos os membros sem duplicatas
  const members = useMemo(() => {
    const all: TeamMember[] = [];
    const seen = new Set();
    const recurse = (items: TeamMember[]) => {
      items.forEach(item => {
        if (!seen.has(item.name)) {
          seen.add(item.name);
          all.push(item);
        }
        if (item.children) recurse(item.children);
      });
    };
    recurse(teamHierarchy);
    return all;
  }, []);

  const groups = {
    directors: members.filter(m => ['A', 'B'].includes(m.level)),
    supervisors: members.filter(m => m.level === 'C'),
    coordinators: members.filter(m => m.level === 'D'),
    specialists: members.filter(m => ['E', 'E-EVAL'].includes(m.level))
  };

  return (
    <section className="bg-white py-24 overflow-hidden min-h-screen">
      <style>{`
        .hexagon-container { clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%); }
        .hexagon-border { width: 100%; height: 100%; clip-path: inherit; }
        .hexagon-inner { width: 100%; height: 100%; clip-path: inherit; overflow: hidden; }
      `}</style>

      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-block p-3 bg-amber-50 rounded-2xl mb-4">
            <Users className="w-8 h-8 text-amber-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">Nossa BeeEquipe</h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto font-medium">Conheça os especialistas que transformam vidas através da ciência e do afeto.</p>
        </div>

        <div className="space-y-24">
          {/* Loop pelas seções */}
          {[
            { title: "Diretoria Executiva", data: groups.directors },
            { title: "Analistas Supervisoras(es)", data: groups.supervisors },
            { title: "Analistas Coordenadoras(es)", data: groups.coordinators },
            { title: "Psicoterapeutas e Avaliação", data: groups.specialists }
          ].map((section, idx) => (
            section.data.length > 0 && (
              <div key={idx} className="relative">
                <h3 className="text-center text-xs uppercase tracking-[0.3em] text-amber-500 font-black mb-12">{section.title}</h3>
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-12 md:gap-x-8">
                  {section.data.map((member, i) => (
                    <HexagonMember 
                      key={i} 
                      member={member} 
                      onClick={() => setSelectedMember(member)} 
                    />
                  ))}
                </div>
              </div>
            )
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedMember && (
          <MemberModal member={selectedMember} onClose={() => setSelectedMember(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}