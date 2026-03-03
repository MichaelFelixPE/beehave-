import { Users, GraduationCap, Award, Info } from 'lucide-react';
import { useState } from 'react';
import Modal from '../ui/Modal';

// ... (Interface TeamMember mantida igual)

export const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // Flattening a lista para exibir todos de forma harmônica, ou você pode mapear por níveis
  const allMembers = teamHierarchy.flatMap(leader => [leader, ...(leader.children || [])]);

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="p-3 bg-amber-100 rounded-2xl mb-4">
            <Users className="w-8 h-8 text-amber-600" />
          </div>
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Nossa Colmeia</h2>
          <p className="text-slate-600 max-w-2xl text-lg">
            Conheça os especialistas dedicados a transformar vidas através da Ciência Analítico-comportamental.
          </p>
        </div>

        {/* Grid Adaptativo com Hexágonos Modernos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
          {allMembers.map((member, idx) => (
            <div 
              key={idx}
              className="group relative flex flex-col items-center cursor-pointer transition-all duration-500 hover:-translate-y-2"
              onClick={() => setSelectedMember(member)}
            >
              {/* Moldura Hexagonal Moderna */}
              <div className="relative w-48 h-52">
                <div className="absolute inset-0 bg-amber-400 opacity-20 group-hover:opacity-40 rounded-[2rem] rotate-6 transition-all duration-500 scale-105" />
                
                {/* Imagem com Clip-path de Hexágono Suave */}
                <div 
                  className="relative w-full h-full overflow-hidden bg-white shadow-xl"
                  style={{ 
                    clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" 
                  }}
                >
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                  />
                </div>

                {/* Badge de Nível */}
                <div className="absolute -bottom-2 -right-2 bg-white shadow-lg w-10 h-10 rounded-full flex items-center justify-center text-amber-600 font-bold border-2 border-amber-50">
                  {member.level}
                </div>
              </div>

              {/* Info */}
              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold text-slate-800 group-hover:text-amber-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-amber-500 uppercase tracking-wider mb-1">
                  {member.role}
                </p>
                {member.crm && (
                  <span className="text-xs text-slate-400 font-mono bg-slate-100 px-2 py-1 rounded">
                    {member.crm}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Modernizado */}
      {selectedMember && (
        <Modal isOpen={!!selectedMember} onClose={() => setSelectedMember(null)}>
          <div className="max-w-4xl flex flex-col md:flex-row gap-8 p-2">
            <div className="md:w-1/3">
              <div className="sticky top-0">
                <img 
                  src={selectedMember.image} 
                  className="w-full rounded-3xl shadow-2xl border-4 border-white rotate-1" 
                  alt={selectedMember.name} 
                />
                <div className="mt-6 p-4 bg-amber-50 rounded-2xl border border-amber-100">
                  <h4 className="flex items-center gap-2 font-bold text-amber-800 mb-3">
                    <GraduationCap className="w-5 h-5" /> Formação
                  </h4>
                  <ul className="text-sm text-amber-900/80 space-y-2">
                    {selectedMember.formations?.map((f, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-amber-500">•</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-slate-800">{selectedMember.name}</h2>
                <p className="text-amber-600 font-semibold text-lg">{selectedMember.role}</p>
              </div>
              
              <div className="prose prose-slate max-w-none">
                <h4 className="flex items-center gap-2 text-slate-800 font-bold mb-2">
                  <Info className="w-5 h-5 text-amber-500" /> Sobre
                </h4>
                <p className="text-slate-600 leading-relaxed text-justify">
                  {selectedMember.bio}
                </p>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};