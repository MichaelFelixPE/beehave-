import { useState } from 'react';

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
    bio: 'Olá! Me chamo Jacqueline Iukisa. Sou formada em Psicologia pela Univasf e em Língua Inglesa pela UPE. Tenho mestrado em Teoria e Pesquisa do Comportamento pela UFPA, e atuo na área de desenvolvimento atípico há mais de 13 anos. Enquanto professora de formação, minha paixão é a educação.',
    children: [
      {
        name: 'Dra. Thais Guimarães',
        role: 'Sócia | Diretora de Marketing e Operações',
        image: 'https://i.imgur.com/fN975T0.jpeg',
        level: 'B',
        crm: 'CRP-02/15644',
        formations: [
          'Certificação Internacional de Instrutora em PCM',
          'Formação no Protocolo IGLR',
          'Formação em Seletividade Alimentar com intervenção baseada em ABA',
          'Formação em PECS',
          'Capacitação para Supervisão de Intervenção Comportamental em ABA',
        ],
        bio: 'Olá! Eu sou Thais Maria Monteiro Guimarães. Tenho Doutorado e Mestrado em Teoria e Pesquisa do Comportamento pela UFPA. Atuo como Pesquisadora, Docente e Analista do Comportamento Supervisora nas áreas de desenvolvimento atípico/TEA.',
        children: [
          { name: 'Me. Luiz Felipe Alves', role: 'Sócio', image: 'https://i.imgur.com/BU6tqCO.jpeg', level: 'C', crm: 'CRP-02/20334', formations: ['Graduação em Psicologia (UNIVASF)', 'Mestrado em Teoria e Pesquisa do Comportamento (UFPA)', 'Doutorado em andamento em Teoria e Pesquisa do Comportamento (UFPA)'], bio: 'Sou psicólogo formado pela Univasf, mestre e doutorando pela UFPA. Atuo na Beehave como supervisor em ABA há 8 anos.' },
          { name: 'Me. Murilo da Cruz', image: 'https://i.imgur.com/DJR131G.jpeg', level: 'C', crm: 'CRP-02/21135', formations: ['Graduação em Psicologia (Univasf)', 'Mestrado em Psicologia (Univasf)', 'Certificado em Gerenciamento Profissional de Crises P2 (PCMA)'], bio: 'Bacharel e Mestre em Psicologia pela Univasf. Supervisor ABA desde 2022.' },
          { name: 'Me. Rafael Alves', image: 'https://i.imgur.com/Qz9WLJ6.jpeg', level: 'C', crm: 'CRP-02/26926', formations: ['Mestrado em Processos Cognitivos e Comportamentais (UNIVASF)', 'Graduação em Psicologia pela UNIVASF', 'Especialista em ABA para Autismo e Deficiência Intelectual'], bio: 'Mestre em Processos Cognitivos e Comportamentais pela UNIVASF. Supervisor parceiro da Beehave.' },
          { name: 'Ma. Thamires Iukisa', image: 'https://i.imgur.com/8082mo0.jpeg', level: 'C', crm: 'CFEP-19002082', formations: ['Graduação em História (UPE)', 'Pós-graduação em ABA para Autismo e DI (CBI of Miami)', 'Mestrado em Psicologia (UNIVASF)'], bio: 'Historiadora pela UPE, pós-graduada em ABA e Mestre em Psicologia. Trabalha com Análise do Comportamento há 8 anos.' },
          { name: 'Dra. Thais Guimarães', image: 'https://i.imgur.com/fN975T0.jpeg', level: 'C', crm: 'CRP-02/15644', formations: ['Doutorado em Teoria e Pesquisa do Comportamento (UFPA)', 'Mestrado em Teoria e Pesquisa do Comportamento (UFPA)'], bio: 'Pesquisadora, Docente e Analista do Comportamento Supervisora nas áreas de desenvolvimento atípico/TEA.' },
          { name: 'Ma. Jacqueline Iukisa', image: 'https://i.imgur.com/ZEhbVZI.jpeg', level: 'C', crm: 'CRP-02/17658', formations: ['Graduação em Psicologia (UNIVASF)', 'Mestrado em Teoria e Pesquisa do Comportamento (UFPA)'], bio: 'Supervisora em ABA e sócia-fundadora da Beehave. Atua na área de desenvolvimento atípico há mais de 13 anos.' },
          { name: 'Me. Álex Rosas', image: 'https://i.imgur.com/57Xr5pn.jpeg', level: 'C', crm: 'CRP-02/26874', formations: ['Graduação em Psicologia (UNIVASF)', 'Mestrado em Psicologia', 'Especialização em ABA'], bio: 'Psicólogo, mestre em Psicologia e especialista em ABA. Supervisor de intervenção ABA na Beehave.' },
          { name: 'Ma. Joíra Ribeiro', image: 'https://i.imgur.com/zJGPMaX.jpg', level: 'C', crm: 'CRP-03/15556', formations: ['Graduação em Psicologia (UNIVASF)', 'Pós-graduação em ABA ao TEA', 'Mestrado em Psicologia (UNIVASF)'], bio: 'Graduada e Mestre em Psicologia pela UNIVASF. Supervisora no Instituto Tacto.' },
          { name: 'Esp. Andrea Teixeira', image: 'https://i.imgur.com/bPV6yn9.jpeg', level: 'D', crm: 'CRP-02/25615', formations: ['Graduação em Psicologia (FACESF)', 'Pós-graduação em Neuropsicologia', 'Pós-graduação em ABA ao TEA'], bio: 'Psicóloga com 4 anos dedicados à intervenção ABA. Pós-graduada em Neuropsicologia e ABA aplicada ao TEA.' },
          { name: 'Esp. Erica Tamires', image: 'https://i.imgur.com/EGe56gz.jpeg', level: 'D', crm: 'CRP-02/264110', formations: ['Graduação em Psicologia', 'Graduação em Pedagogia', 'Especialização em ABA'], bio: 'Professora de formação e psicóloga especialista em ABA. Coordenadora de equipe ABA na Beehave.' },
          { name: 'Esp. Jamille Mota', image: 'https://i.imgur.com/RltbllC.jpeg', level: 'D', crm: 'CRP-03/19674', formations: ['Especialização em Psicologia Organizacional', 'Graduação em Psicologia'], bio: 'Psicóloga, Coordenadora ABA e Analista do Comportamento. Atua com PRT, SBT, HRE e CAA.' },
          { name: 'Esp. Joice Izabela', image: 'https://i.imgur.com/5kDExFR.jpeg', level: 'D', crm: 'CRP-02/26606', formations: ['Graduação em Psicologia (UNIVASF)', 'Especialização em ABA para TEA e DI (CBI of Miami)', 'Formação em Gerenciamento Profissional de Crises – Praticante Nível 2'], bio: 'Coordenadora em ABA há mais de três anos na Beehave. Praticante Nível 2 em Gerenciamento Profissional de Crises.' },
          { name: 'Esp. Fernando Costa', image: 'https://i.imgur.com/JsbcOvA.jpeg', level: 'D', crm: 'CRP-02/26753', formations: ['Graduação em Psicologia (FTC)', 'Especialização em ABA'], bio: 'Psicólogo e Coordenador ABA com mais de 6 anos de experiência, especializado em TEA nível 3.' },
          { name: 'Esp. Joyce Ribeiro', image: 'https://i.imgur.com/veAEOsy.jpeg', level: 'D', crm: 'CRP-02/26518', formations: ['Graduação em Psicologia', 'Pós-graduação em ABA', 'Pós-graduação em andamento em ABA com foco em TEA e DI'], bio: 'Psicóloga, pós-graduada em ABA. Coordenadora em ABA na Beehave.' },
          { name: 'Esp. Thays Cruz', image: 'https://i.imgur.com/gwY6B0k.jpeg', level: 'D', crm: 'CRP-03/31285', formations: ['Graduação em Psicologia', 'Mestrado em Psicologia (Univasf)', 'Doutoranda em Análise do Comportamento (UEL)'], bio: 'Psicóloga e Analista do Comportamento, Doutoranda pela UEL e Mestra pela Univasf. Praticante PCM Nível 1.' },
          { name: 'Esp. Nayara Queiroz', image: 'https://i.imgur.com/W6FVLyd.jpeg', level: 'D', crm: 'CRP 02/28286', formations: ['Licenciatura em Artes Visuais', 'Graduação em Psicologia', 'Pós-graduação em ABA para TEA', 'Formação em PCM e PECS'], bio: 'Licenciada em Artes Visuais e psicóloga. Coordenadora parceira da Beehave.' },
          { name: 'Esp. Carlane Machado', image: 'https://i.imgur.com/9ekDBk6.jpg', level: 'D', crm: 'CRP-03/29529', formations: ['Graduação em Psicologia', 'Pós-graduação em ABA', 'Pós-graduação em andamento em Neuropsicologia'], bio: 'Psicóloga, Coordenadora ABA com 7 anos de experiência. Especializada em avaliação e intervenção em TEA.' },
          { name: 'Aline Rodrigues', image: 'https://i.imgur.com/vrqMI2m.jpeg', level: 'E', crm: 'CRP-02/23629', formations: ['Graduação em Psicologia (Uninassau)', 'Especialização em ABA para TEA'], bio: 'Psicóloga com especialização em ABA para TEA. Experiência como aplicadora ABA e psicoterapia infantil.' },
          { name: 'Gutemberg dos Santos', image: 'https://i.imgur.com/luGPgKa.jpeg', level: 'E', crm: 'CRP-02/20367', formations: ['Graduação em Psicologia (UNIVASF)', 'Pós-graduando em ABA (Facuminas)'], bio: 'Psicólogo com atuação voltada ao público infanto-juvenil. Trabalha com crianças e adolescentes típicos e atípicos desde 2022.' },
          { name: 'Núbia Costa', image: 'https://i.imgur.com/nD3QWnm.jpeg', level: 'E', crm: 'CRP-03/18294', formations: ['Bacharelado em Psicologia (Univasf)', 'Pós-graduação em ABA para Autismo e DI (CBI of Miami)', 'Pós-graduanda em Psicopedagogia (UPE)'], bio: 'Psicóloga com experiência como aplicadora e coordenadora em ABA. Atualmente Psicóloga pela Beehave.' },
          { name: 'Renata Dantas', image: 'https://i.imgur.com/TGufhH3.jpeg', level: 'E', crm: 'CRP-02/30345', formations: ['Graduação em Psicologia (Uninassau)', 'Especialização em ABA para TEA', 'Formação em Terapias Contextuais'], bio: 'Psicóloga com atuação infantil especializada em TEA. Prática fundamentada na Análise do Comportamento.' },
          { name: 'Adson Raul', image: 'https://i.imgur.com/Cc4mOuy.jpeg', level: 'E-EVAL', crm: '', formations: ['Graduação em Psicologia (UNINASSAU)', 'Pós-graduação em ABA para TEA (em andamento)'], bio: 'Psicólogo formado pela UNINASSAU. Mais de 3 anos como aplicador com experiência em avaliação comportamental.' },
          { name: 'Brenda Souza', image: 'https://i.imgur.com/DcKJBzc.jpeg', level: 'E-EVAL', crm: '', formations: ['Graduação em Psicologia (UNINASSAU)', 'Formação em ABA (Instituto Fratelli)', 'Curso de Aplicadora ABA (Beehave)'], bio: 'Bacharela em Psicologia. Cofundadora da LAAC. Experiência como aplicadora ABA e coleta de dados VB-MAPP/ABLLS.' },
          { name: 'Luégina Sena', image: 'https://i.imgur.com/4RpCe4h.jpeg', level: 'E-EVAL', crm: '', formations: ['Graduação em Pedagogia (UNEB)', 'Pós-graduação em ABA e DI (CBI of Miami)', 'Pós-graduanda em Psicopedagogia (FAVENI)'], bio: 'Pedagoga e aplicadora ABA há quase 4 anos. Atua na Equipe de Avaliação da Beehave com protocolos baseados em ABA.' },
          { name: 'Patrícia Matos', image: 'https://i.imgur.com/TxZAhzt.jpeg', level: 'E-EVAL', crm: '', formations: ['Graduação em Serviço Social (UFBA)', 'Pós-graduação em ABA e DI (CBI of Miami)', 'Formação como Aplicadora ABA (Beehave)'], bio: 'Graduada em Serviço Social pela UFBA. Pós-graduada em ABA e DI pelo CBI of Miami.' },
          { name: 'Waleska Oliveira', image: 'https://i.imgur.com/sT3ZMfi.jpeg', level: 'E-EVAL', crm: '', formations: ['ABA e Autismo (Beehave)', 'VB-MAPP Descomplicado (Beehave)', 'Workshop de Inovação Terapêutica com IA'], bio: 'Estudante de Fonoaudiologia e aplicadora ABA há mais de 2 anos. Atuação voltada ao TEA.' },
        ],
      },
    ],
  },
];

// Flatten hierarchy
const allChildren = teamHierarchy[0]?.children?.[0]?.children || [];
const directors = teamHierarchy;
const subDirectors = teamHierarchy[0]?.children || [];
const supervisors = allChildren.filter(m => m.level === 'C');
const coordinators = allChildren.filter(m => m.level === 'D');
const therapists = allChildren.filter(m => m.level === 'E');
const evaluationTeam = allChildren.filter(m => m.level === 'E-EVAL');

const TIER_CONFIG = {
  A: { ring: '#F59E0B', glow: '#FDE68A', badge: 'Diretoria', size: 'large' },
  B: { ring: '#F59E0B', glow: '#FDE68A', badge: 'Diretoria', size: 'large' },
  C: { ring: '#FCD34D', glow: '#FEF3C7', badge: 'Supervisão', size: 'medium' },
  D: { ring: '#FDE68A', glow: '#FFFBEB', badge: 'Coordenação', size: 'medium' },
  E: { ring: '#E5E7EB', glow: '#F9FAFB', badge: 'Psicoterapia', size: 'small' },
  'E-EVAL': { ring: '#D1D5DB', glow: '#F3F4F6', badge: 'Avaliação', size: 'small' },
};

interface HexProps {
  member: TeamMember;
  size?: 'large' | 'medium' | 'small';
  onClick: () => void;
}

const HexCard = ({ member, size = 'medium', onClick }: HexProps) => {
  const cfg = TIER_CONFIG[member.level as keyof typeof TIER_CONFIG] || TIER_CONFIG['E'];
  const dim = size === 'large' ? 130 : size === 'medium' ? 105 : 88;

  return (
    <button
      onClick={onClick}
      className="hex-card group"
      style={{ '--hex-dim': `${dim}px`, '--ring': cfg.ring, '--glow': cfg.glow } as React.CSSProperties}
    >
      <div className="hex-outer">
        <div className="hex-inner">
          <img
            src={member.image}
            alt={member.name}
            className="hex-img"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                `https://via.placeholder.com/200x200/FCD34D/1F2937?text=${encodeURIComponent(member.name.split(' ').slice(-1)[0])}`;
            }}
          />
        </div>
      </div>
      <div className="hex-label">
        <p className="hex-name">{member.name}</p>
        {member.role && <p className="hex-role">{member.role}</p>}
      </div>
    </button>
  );
};

const Modal = ({ member, onClose }: { member: TeamMember; onClose: () => void }) => {
  const cfg = TIER_CONFIG[member.level as keyof typeof TIER_CONFIG] || TIER_CONFIG['E'];
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-panel" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <div className="modal-header">
          <div className="modal-hex-wrap" style={{ '--ring': cfg.ring, '--glow': cfg.glow } as React.CSSProperties}>
            <img src={member.image} alt={member.name} className="modal-img"
              onError={(e) => { (e.target as HTMLImageElement).src = `https://via.placeholder.com/200x200/FCD34D/1F2937?text=${encodeURIComponent(member.name.split(' ').slice(-1)[0])}`; }} />
          </div>
          <div className="modal-title-wrap">
            <h2 className="modal-name">{member.name}</h2>
            {member.role && <p className="modal-role">{member.role}</p>}
            {member.crm && <span className="modal-crm">{member.crm}</span>}
          </div>
        </div>
        {member.bio && <p className="modal-bio">{member.bio}</p>}
        {member.formations && member.formations.length > 0 && (
          <div className="modal-formations">
            <h3 className="modal-formations-title">Formações</h3>
            <ul className="modal-formations-list">
              {member.formations.map((f, i) => (
                <li key={i} className="modal-formation-item">
                  <span className="modal-dot" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

interface TierSectionProps {
  title: string;
  members: TeamMember[];
  size?: 'large' | 'medium' | 'small';
  accent?: string;
  onSelect: (m: TeamMember) => void;
}

const TierSection = ({ title, members, size = 'medium', accent = '#F59E0B', onSelect }: TierSectionProps) => (
  <div className="tier-section">
    <div className="tier-header">
      <div className="tier-line" style={{ background: `linear-gradient(to right, transparent, ${accent})` }} />
      <span className="tier-label" style={{ color: accent, borderColor: accent }}>{title}</span>
      <div className="tier-line" style={{ background: `linear-gradient(to left, transparent, ${accent})` }} />
    </div>
    <div className="tier-members">
      {members.map((m, i) => (
        <HexCard key={i} member={m} size={size} onClick={() => onSelect(m)} />
      ))}
    </div>
  </div>
);

export default function Team() {
  const [selected, setSelected] = useState<TeamMember | null>(null);

  return (
    <>
      <style>{`
        .team-section {
          padding: 80px 0 100px;
          background: #0D0D0F;
          position: relative;
          overflow: hidden;
        }
        .team-bg-glow {
          position: absolute;
          top: -200px;
          left: 50%;
          transform: translateX(-50%);
          width: 800px;
          height: 800px;
          background: radial-gradient(ellipse at center, rgba(251,191,36,0.07) 0%, transparent 65%);
          pointer-events: none;
        }
        .team-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
        }
        .team-headline {
          text-align: center;
          margin-bottom: 72px;
        }
        .team-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #F59E0B;
          margin-bottom: 16px;
        }
        .team-eyebrow-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #F59E0B;
          box-shadow: 0 0 8px #F59E0B;
        }
        .team-title {
          font-size: clamp(32px, 5vw, 52px);
          font-weight: 800;
          color: #FAFAFA;
          line-height: 1.1;
          letter-spacing: -0.03em;
          font-family: Georgia, 'Times New Roman', serif;
        }
        .team-title em {
          font-style: italic;
          color: #F59E0B;
        }
        .team-subtitle {
          margin-top: 16px;
          font-size: 17px;
          color: #6B7280;
          max-width: 480px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }

        /* Tier sections */
        .tier-section {
          margin-bottom: 56px;
        }
        .tier-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 32px;
        }
        .tier-line {
          flex: 1;
          height: 1px;
          opacity: 0.3;
        }
        .tier-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 5px 16px;
          border: 1px solid;
          border-radius: 100px;
          white-space: nowrap;
        }
        .tier-members {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 8px 4px;
        }

        /* Hex Card */
        .hex-card {
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
          width: calc(var(--hex-dim) + 16px);
        }
        .hex-card:hover {
          transform: translateY(-6px) scale(1.04);
        }
        .hex-outer {
          width: var(--hex-dim);
          height: var(--hex-dim);
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          background: linear-gradient(135deg, var(--ring), color-mix(in srgb, var(--ring) 60%, white));
          padding: 2.5px;
          transition: box-shadow 0.3s ease;
          position: relative;
        }
        .hex-card:hover .hex-outer {
          filter: drop-shadow(0 0 14px var(--ring));
        }
        .hex-inner {
          width: 100%;
          height: 100%;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          overflow: hidden;
          background: #1a1a20;
        }
        .hex-img {
          width: 110%;
          height: 110%;
          object-fit: cover;
          object-position: center top;
          margin: -5%;
          transition: transform 0.3s ease;
        }
        .hex-card:hover .hex-img {
          transform: scale(1.08);
        }
        .hex-label {
          text-align: center;
          max-width: var(--hex-dim);
        }
        .hex-name {
          font-size: 11.5px;
          font-weight: 600;
          color: #E5E7EB;
          line-height: 1.3;
          margin: 0;
        }
        .hex-role {
          font-size: 10px;
          color: #6B7280;
          margin: 2px 0 0;
          line-height: 1.3;
        }

        /* Modal */
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.75);
          backdrop-filter: blur(6px);
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        .modal-panel {
          background: #111113;
          border: 1px solid #2a2a30;
          border-radius: 20px;
          max-width: 580px;
          width: 100%;
          max-height: 85vh;
          overflow-y: auto;
          padding: 40px;
          position: relative;
          box-shadow: 0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(251,191,36,0.08);
        }
        .modal-close {
          position: absolute;
          top: 20px; right: 20px;
          background: #222228;
          border: 1px solid #333;
          color: #9CA3AF;
          width: 32px; height: 32px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 14px;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.2s;
        }
        .modal-close:hover { background: #2d2d35; color: #fff; }
        .modal-header {
          display: flex;
          gap: 24px;
          align-items: flex-start;
          margin-bottom: 24px;
        }
        .modal-hex-wrap {
          flex-shrink: 0;
          width: 100px; height: 100px;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          background: linear-gradient(135deg, var(--ring), color-mix(in srgb, var(--ring) 60%, white));
          padding: 2px;
        }
        .modal-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          display: block;
        }
        .modal-title-wrap { flex: 1; padding-top: 4px; }
        .modal-name {
          font-size: 20px;
          font-weight: 700;
          color: #FAFAFA;
          margin: 0 0 4px;
        }
        .modal-role {
          font-size: 13px;
          color: #F59E0B;
          margin: 0 0 8px;
          font-weight: 500;
        }
        .modal-crm {
          display: inline-block;
          font-size: 11px;
          color: #6B7280;
          background: #1c1c22;
          border: 1px solid #2a2a30;
          padding: 3px 10px;
          border-radius: 100px;
        }
        .modal-bio {
          font-size: 14px;
          color: #9CA3AF;
          line-height: 1.7;
          margin-bottom: 24px;
        }
        .modal-formations {
          border-top: 1px solid #1e1e26;
          padding-top: 20px;
        }
        .modal-formations-title {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #6B7280;
          margin: 0 0 14px;
        }
        .modal-formations-list {
          list-style: none;
          padding: 0; margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .modal-formation-item {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          font-size: 13.5px;
          color: #D1D5DB;
          line-height: 1.5;
        }
        .modal-dot {
          flex-shrink: 0;
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #F59E0B;
          margin-top: 6px;
        }

        @media (max-width: 600px) {
          .modal-header { flex-direction: column; align-items: center; text-align: center; }
          .modal-panel { padding: 28px 20px; }
        }
      `}</style>

      {selected && <Modal member={selected} onClose={() => setSelected(null)} />}

      <section id="team" className="team-section">
        <div className="team-bg-glow" />
        <div className="team-container">
          <div className="team-headline">
            <div className="team-eyebrow">
              <span className="team-eyebrow-dot" />
              Conheça quem faz a Beehave
            </div>
            <h2 className="team-title">Nossa <em>BeeEquipe</em></h2>
            <p className="team-subtitle">Profissionais especializados em ABA, unidos pelo compromisso com o desenvolvimento e qualidade de vida.</p>
          </div>

          <TierSection
            title="Diretorias"
            members={[...directors, ...subDirectors]}
            size="large"
            accent="#F59E0B"
            onSelect={setSelected}
          />

          {supervisors.length > 0 && (
            <TierSection
              title="Analistas do Comportamento Supervisoras(es)"
              members={supervisors}
              size="medium"
              accent="#FCD34D"
              onSelect={setSelected}
            />
          )}

          {coordinators.length > 0 && (
            <TierSection
              title="Analistas do Comportamento Coordenadoras(es)"
              members={coordinators}
              size="medium"
              accent="#FDE68A"
              onSelect={setSelected}
            />
          )}

          {therapists.length > 0 && (
            <TierSection
              title="Psicoterapeutas"
              members={therapists}
              size="small"
              accent="#9CA3AF"
              onSelect={setSelected}
            />
          )}

          {evaluationTeam.length > 0 && (
            <TierSection
              title="Equipe de Avaliação"
              members={evaluationTeam}
              size="small"
              accent="#6B7280"
              onSelect={setSelected}
            />
          )}
        </div>
      </section>
    </>
  );
}