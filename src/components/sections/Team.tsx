import { motion } from 'framer-motion';

// ... (mantenha sua interface e dados)

export default function TeamHive() {
  const flatTeam = flattenTeam(teamHierarchy);

  return (
    <div className="bg-zinc-950 py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Container da Colmeia */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-x-2 md:gap-y-12">
          {flatTeam.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1, zIndex: 20 }}
              transition={{ delay: index * 0.05 }}
              className="relative w-40 h-48 md:w-52 md:h-60 cursor-pointer group"
              onClick={() => setSelectedMember(member)}
            >
              {/* O Hexágono */}
              <div className="hexagon-shape w-full h-full bg-zinc-800 relative overflow-hidden border-b-4 border-beehave-gold">
                
                {/* Imagem com filtro moderno */}
                <img 
                  src={member.image} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                
                {/* Overlay de Vidro (Glassmorphism) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                
                {/* Texto Curto */}
                <div className="absolute bottom-4 left-0 right-0 px-2 text-center">
                  <p className="text-white text-xs md:text-sm font-bold truncate">
                    {member.name.split(' ').slice(0, 2).join(' ')}
                  </p>
                  <p className="text-[10px] text-beehave-gold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    {member.level}
                  </p>
                </div>
              </div>

              {/* Detalhe da Abelha (Animação flutuante sutil) */}
              <motion.div 
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -top-2 -right-2 w-8 h-8 bg-beehave-gold rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <div className="w-4 h-4 bg-black rounded-full" style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}