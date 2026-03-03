import { Users, Award, MapPin, BookOpenText } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion'; // Biblioteca de animação
import Modal from '../ui/Modal'; // Assumindo que este componente existe

interface TeamMember {
  name: string;
  role: string;
  image: string;
  level: string; // A, B, C, D, E
  crm?: string;
  formations?: string[];
  bio?: string;
  children?: TeamMember[];
}

// --- DADOS (Simplificados no código para leitura, use o seu objeto completo) ---
const teamHierarchy: TeamMember[] = [
  {
    name: 'Ma. Jacqueline Iukisa',
    role: 'Sócia | Diretora de Finanças e RH',
    image: 'https://i.imgur.com/ZEhbVZI.jpeg',
    level: 'A',
    crm: 'CRP-02/17658',
    formations: ['Mestrado em Teoria e Pesquisa do Comportamento (UFPA)'],
    bio: 'Olá! Me chamo Jacqueline Iukisa...',
    children: [
      {
        name: 'Dra. Thais Guimarães',
        role: 'Sócia | Diretora de Marketing',
        image: 'https://i.imgur.com/fN975T0.jpeg',
        level: 'B',
        bio: 'Olá! Eu sou Thais...',
        children: [
            // ... adicione o restante dos dados aqui
        ]
      }
    ]
  }
];

// --- FUNÇÃO AUXILIAR PARA APLANAR A HIERARQUIA ---
// Para o design moderno de colmeia, funciona melhor tratar como uma lista visual
// e usar o "level" para estilização, em vez de recuo físico.
const flattenTeam = (members: TeamMember[], flatList: TeamMember[] = []) => {
  members.forEach(member => {
    flatList.push(member);
    if (member.children) {
      flattenTeam(member.children, flatList);
    }
  });
  return flatList;
};

// --- CONFIGURAÇÕES DE ANIMAÇÃO (Framer Motion) ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Animação em cascata (um após o outro)
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0, scale: 0.9 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15
    },
  },
};


// --- COMPONENTE DO CARTÃO HEXAGONAL (A Abelha) ---
const HexagonMemberCard = ({ member, onClick }: { member: TeamMember, onClick: () => void }) => {
  
  // Estilização baseada no nível hierárquico
  const getLevelStyles = (level: string) => {
    switch (level) {
      case 'A': return 'border-beehave-gold shadow-[0_0_15px_rgba(255,193,7,0.5)]'; // Brilho para líderes
      case 'B': return 'border-beehave-amber';
      default: return 'border-zinc-700 hover:border-beehave-gold';
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      className="relative group cursor-pointer"
      onClick={onClick}
      whileHover={{ scale: 1.05, zIndex: 10 }} // Levanta levemente ao passar o mouse
    >
      {/* Container Hexagonal com CSS Clip-Path */}
      <div className={`relative aspect-w-10 aspect-h-11 bg-beehave-card backdrop-blur-sm border-2 ${getLevelStyles(member.level)} overflow-hidden transition-all duration-300 ease-in-out group-hover:shadow-[0_0_20px_rgba(255,193,7,0.3)]`}
           style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
        
        {/* Imagem de Fundo (P&B por padrão, colorida no hover) */}
        <img 
          src={member.image} 
          alt={member.name} 
          className="absolute inset-0 w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
        />

        {/* Overlay em Gradiente (Efeito Mel/Âmbar no hover) */}
        <div className="absolute inset-0 bg-gradient-to-t from-beehave-dark via-beehave-dark/80 to-transparent group-hover:from-beehave-amber/80 group-hover:via-beehave-gold/40 transition-all duration-500" />

        {/* Conteúdo de Texto (Nome e Cargo) */}
        <div className="absolute bottom-0 left-0 right-0 p-4 pb-6 text-center z-10 flex flex-col items-center justify-end h-1/2">
          <h3 className="text-sm md:text-base font-bold text-white leading-tight font-sans tracking-tight">
            {member.name}
          </h3>
          <p className="text-xs text-zinc-300 group-hover:text-beehave-dark mt-1 font-medium transition-colors line-clamp-2">
            {member.role}
          </p>
          
          {/* Tag de Nível (Opcional, discreta) */}
          <span className="absolute top-8 right-8 text-[10px] font-mono bg-white/10 px-2 py-0.5 rounded-full text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity">
            Lvl {member.level}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

// --- COMPONENTE PRINCIPAL ---
export default function TeamHive() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  
  // Aplanamos a lista para criar a grade dinâmica
  const flatTeam = flattenTeam(teamHierarchy);

  return (
    <section className="py-16 bg-beehave-dark min-h-screen text-zinc-100 overflow-hidden relative">
      
      {/* Detalhe de fundo sutil (Colmeia abstrata) */}
      <div className="absolute inset-0 opacity-5 pattern-hexagons pattern-zinc-600 pattern-bg-transparent pattern-size-10 pattern-opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Cabeçalho Moderno */}
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.div 
            initial={{ rotate: -10, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-beehave-gold/10 p-4 rounded-full border border-beehave-gold/20 mb-4"
          >
            <Users className="w-10 h-10 text-beehave-gold" strokeWidth={1.5} />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter mb-2">
            Nossa <span className="text-beehave-gold">Colmeia</span> Terapêutica
          </h2>
          <p className="text-zinc-400 max-w-2xl text-lg">
            Uma estrutura colaborativa de especialistas dedicados ao desenvolvimento e bem-estar, agindo em harmonia como uma colmeia.
          </p>
        </div>

        {/* GRADE DA COLMEIA (CSS Grid com encaixe hexagonal manual sutil) */}
        {/* Usamos classes negativas de margem (md:-mt-10) em linhas alternadas para o encaixe perfeito */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-2 pb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" // Anima quando entra na tela
          viewport={{ once: true, amount: 0.2 }}
        >
          {flatTeam.map((member, index) => (
            <div key={index} className={`
              ${(Math.floor(index / 2) % 2 === 0) ? 'md:mt-0' : 'md:-mt-12'} 
              ${(index % 2 === 0) ? '' : 'mt-12 md:mt-0'}
              transition-all duration-500
            `}>
              <HexagonMemberCard 
                member={member} 
                onClick={() => setSelectedMember(member)} 
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* MODAL DE DETALHES (Modernizado) */}
      {selectedMember && (
        <Modal isOpen={!!selectedMember} onClose={() => setSelectedMember(null)}>
          <div className="flex flex-col md:flex-row gap-8 p-2">
            {/* Coluna da Imagem */}
            <div className="flex-shrink-0 flex flex-col items-center md:items-start w-full md:w-1/3">
              <div className="w-40 h-40 md:w-full md:h-auto aspect-square rounded-2xl overflow-hidden border-4 border-beehave-gold shadow-lg mb-4">
                <img src={selectedMember.image} alt={selectedMember.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-white text-center md:text-left tracking-tight">{selectedMember.name}</h3>
              <p className="text-beehave-gold font-medium text-center md:text-left mb-2">{selectedMember.role}</p>
              {selectedMember.crm && (
                <span className="text-xs font-mono bg-zinc-800 px-3 py-1 rounded-full text-zinc-400 border border-zinc-700">
                  {selectedMember.crm}
                </span>
              )}
            </div>

            {/* Coluna das Informações (Scrollable) */}
            <div className="flex-grow space-y-6 max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar text-zinc-300">
              
              {selectedMember.bio && (
                <div className="bg-zinc-800/50 p-5 rounded-xl border border-zinc-700">
                  <p className="text-sm leading-relaxed whitespace-pre-line">{selectedMember.bio}</p>
                </div>
              )}

              {selectedMember.formations && selectedMember.formations.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-3 text-white border-b border-zinc-700 pb-2">
                    <BookOpenText className="w-5 h-5 text-beehave-gold" />
                    <h4 className="text-lg font-semibold tracking-tight">Formação Acadêmica</h4>
                  </div>
                  <ul className="space-y-2.5 list-none">
                    {selectedMember.formations.map((form, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm bg-zinc-900 p-3 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-colors">
                        <Award className="w-4 h-4 text-beehave-amber mt-0.5 flex-shrink-0" />
                        <span>{form}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}