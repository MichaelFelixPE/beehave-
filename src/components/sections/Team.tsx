const HexagonMember = ({ member, onClick }: { member: TeamMember; onClick: () => void }) => {
  return (
    <div
      className="relative group cursor-pointer flex flex-col items-center"
      onClick={onClick}
      style={{ width: 130 }}
    >
      <div className="relative transition-transform duration-300 group-hover:scale-105">
        <div className="hexagon-wrapper" style={{ width: 112, height: 112 }}>
          <div className="hexagon-outer">
            <div className="hexagon-inner">
              <img
                src={member.image}
                alt={member.name}
                className="hexagon-image"
                onError={(e) => {
                  const t = e.target as HTMLImageElement;
                  t.onerror = null;
                  t.src = `https://via.placeholder.com/200x200/FCD34D/1F2937?text=${encodeURIComponent(member.name.split(' ')[0])}`;
                }}
                loading="lazy"
                crossOrigin="anonymous"
              />
            </div>
          </div>
        </div>
        <div className="hexagon-hover-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="text-center mt-3 px-1">
        <p className="text-[13px] font-semibold text-gray-900 leading-tight">{member.name}</p>
        {member.role && (
          <p className="text-[11px] text-yellow-600 mt-0.5 leading-tight">{member.role}</p>
        )}
      </div>
    </div>
  );
};

const MemberModal = ({ member, onClose }: { member: TeamMember; onClose: () => void }) => {
  return (
    <Modal isOpen={true} onClose={onClose}>
      <div className="p-8">
        <div className="flex flex-col items-center">
          <div className="relative mb-6" style={{ width: 140, height: 140 }}>
            <div className="hexagon-wrapper-lg">
              <div className="hexagon-outer-lg">
                <div className="hexagon-inner-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      const t = e.target as HTMLImageElement;
                      t.onerror = null;
                      t.src = `https://via.placeholder.com/400x400/FCD34D/1F2937?text=${encodeURIComponent(member.name.split(' ')[0])}`;
                    }}
                    crossOrigin="anonymous"
                  />
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h2>
          {member.role && <p className="text-yellow-600 font-medium mb-2">{member.role}</p>}
          {member.crm && (
            <span className="text-xs tracking-widest uppercase text-gray-500 border border-gray-200 rounded-full px-3 py-1 mb-5">
              {member.crm}
            </span>
          )}

          {member.bio && (
            <p className="text-gray-600 text-sm text-center mb-6 max-w-xl leading-relaxed">
              {member.bio}
            </p>
          )}

          {member.formations && member.formations.length > 0 && (
            <div className="w-full max-w-xl border-t border-gray-100 pt-5">
              <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-yellow-500 mb-4">
                Formações
              </p>
              <ul className="space-y-2">
                {member.formations.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-sm bg-yellow-400 flex-shrink-0 rotate-45" />
                    {f}
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

const SectionDivider = ({ title }: { title: string }) => (
  <div className="w-full flex items-center gap-4 my-8">
    <div className="flex-1 h-px bg-gradient-to-r from-transparent to-yellow-300" />
    <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-yellow-600 whitespace-nowrap">
      {title}
    </span>
    <div className="flex-1 h-px bg-gradient-to-l from-transparent to-yellow-300" />
  </div>
);

const Team = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const directors = teamHierarchy;
  const subDirectors = directors[0]?.children || [];
  const supervisors = subDirectors[0]?.children?.filter(m => m.level === 'C') || [];
  const coordinators = subDirectors[0]?.children?.filter(m => m.level === 'D') || [];
  const evaluationTeam = subDirectors[0]?.children?.filter(m => m.level === 'E-EVAL') || [];
  const therapists = subDirectors[0]?.children?.filter(m => m.level === 'E') || [];

  return (
    <>
      {selectedMember && (
        <MemberModal member={selectedMember} onClose={() => setSelectedMember(null)} />
      )}

      <section id="team" className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-x-hidden">
        <style>{`
          .hexagon-wrapper { margin: 0 auto; position: relative; }

          .hexagon-outer {
            width: 100%; height: 100%;
            clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
            background: linear-gradient(135deg, #f5c518, #d4a017);
            padding: 2.5px;
            display: flex; align-items: center; justify-content: center;
          }

          .hexagon-inner {
            width: 100%; height: 100%;
            clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
            background: #fff;
            overflow: hidden;
            display: flex; align-items: center; justify-content: center;
          }

          .hexagon-image {
            width: 120%; height: 120%;
            object-fit: cover; object-position: center;
          }

          .hexagon-hover-overlay {
            position: absolute; inset: 0;
            clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
            background: rgba(245, 197, 24, 0.15);
            pointer-events: none;
          }

          .hexagon-wrapper-lg { width: 140px; height: 140px; }
          .hexagon-outer-lg {
            width: 100%; height: 100%;
            clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
            background: linear-gradient(135deg, #f5c518, #d4a017);
            padding: 3px;
            display: flex; align-items: center; justify-content: center;
          }
          .hexagon-inner-lg {
            width: 100%; height: 100%;
            clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
            background: #f9f9f9;
            overflow: hidden;
          }

          .hexagon-image[src*="BU6tqCO"] { width: 112%; height: 112%; }
        `}</style>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl border border-yellow-300 bg-yellow-50 mb-5">
              <Users className="h-6 w-6 text-yellow-500" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Nossa BeeEquipe</h2>
            <div className="w-16 h-0.5 bg-yellow-400 mx-auto rounded-full" />
          </div>

          <div className="flex flex-col items-center">

            <SectionDivider title="Diretorias" />
            <div className="flex flex-wrap justify-center gap-8">
              {directors.map((d, i) => (
                <HexagonMember key={i} member={d} onClick={() => setSelectedMember(d)} />
              ))}
              {subDirectors.map((d, i) => (
                <HexagonMember key={i} member={d} onClick={() => setSelectedMember(d)} />
              ))}
            </div>

            {supervisors.length > 0 && (
              <>
                <SectionDivider title="Analistas do Comportamento Supervisoras(es)" />
                <div className="flex flex-wrap justify-center gap-6 max-w-4xl">
                  {supervisors.map((m, i) => (
                    <HexagonMember key={i} member={m} onClick={() => setSelectedMember(m)} />
                  ))}
                </div>
              </>
            )}

            {coordinators.length > 0 && (
              <>
                <SectionDivider title="Analistas do Comportamento Coordenadoras(es)" />
                <div className="flex flex-wrap justify-center gap-6 max-w-5xl">
                  {coordinators.map((m, i) => (
                    <HexagonMember key={i} member={m} onClick={() => setSelectedMember(m)} />
                  ))}
                </div>
              </>
            )}

            {therapists.length > 0 && (
              <>
                <SectionDivider title="Psicoterapeutas" />
                <div className="flex flex-wrap justify-center gap-6 max-w-4xl">
                  {therapists.map((m, i) => (
                    <HexagonMember key={i} member={m} onClick={() => setSelectedMember(m)} />
                  ))}
                </div>
              </>
            )}

            {evaluationTeam.length > 0 && (
              <>
                <SectionDivider title="Equipe de Avaliação" />
                <div className="flex flex-wrap justify-center gap-6 max-w-5xl">
                  {evaluationTeam.map((m, i) => (
                    <HexagonMember key={i} member={m} onClick={() => setSelectedMember(m)} />
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