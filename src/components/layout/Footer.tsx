import React from 'react';
import { Mail, Phone, MapPin, Instagram, MessageCircle } from 'lucide-react';

const HexIcon = ({ children }: { children: React.ReactNode }) => (
  <div className="relative w-9 h-9 flex-shrink-0 flex items-center justify-center">
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 36 36" fill="none">
      <polygon points="18,2 33,10 33,26 18,34 3,26 3,10"
        fill="rgba(245,197,24,0.07)" stroke="rgba(245,197,24,0.18)" strokeWidth="1" />
    </svg>
    <span className="relative z-10 text-yellow-400">{children}</span>
  </div>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-16 pb-8 relative overflow-hidden">

      {/* Hex texture background */}
      <div className="absolute inset-0 pointer-events-none opacity-100"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='69' viewBox='0 0 60 69'%3E%3Cpolygon points='30,1 59,17 59,51 30,67 1,51 1,17' fill='none' stroke='%23f5c518' stroke-opacity='0.04' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 69px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">

        {/* Top accent line */}
        <div className="w-full h-px mb-16"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(245,197,24,0.5) 30%, rgba(245,197,24,0.5) 70%, transparent)' }}
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Logo */}
          <div className="col-span-1">
            <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center group">
              <img src="https://i.imgur.com/LqSTFWW.png" alt="Beehave Logo"
                className="w-14 h-14 transition-all duration-300 group-hover:drop-shadow-[0_0_16px_rgba(245,197,24,0.6)]" />
            </a>
          </div>

          {/* Links Rápidos */}
          <div className="col-span-1">
            <SectionTitle>Links Rápidos</SectionTitle>
            <ul className="space-y-3">
              {[
                { href: '#services', label: 'Beehave Serviços' },
                { href: '#about',    label: 'Sobre Nós' },
                { href: '#team',     label: 'Nossa BeeEquipe' },
                { href: '#faq',      label: 'Perguntas Frequentes' },
                { href: '#contact',  label: 'Contato' },
              ].map(link => (
                <li key={link.href}>
                  <a href={link.href}
                    className="text-sm text-gray-500 hover:text-yellow-400 transition-all duration-200 hover:pl-2 flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div className="col-span-1">
            <SectionTitle>Contate-nos</SectionTitle>
            <div className="space-y-2.5">
              <ContactCard icon={<MapPin size={14} />} label="Endereço">
                <p className="text-sm text-gray-400 leading-relaxed">
                  Rua Bahia, N 808, Vila Moco<br />Petrolina-PE, CEP 56.306-430
                </p>
              </ContactCard>
              <ContactCard icon={<Phone size={14} />} label="Telefone">
                <a href="tel:+5587988287826" className="text-sm text-gray-400 hover:text-yellow-400 transition-colors">
                  87 98828-7826
                </a>
              </ContactCard>
              <ContactCard icon={<Mail size={14} />} label="Email">
                <p className="text-sm text-gray-400">empresabeehave@gmail.com</p>
              </ContactCard>
            </div>
          </div>

          {/* Horários + Redes */}
          <div className="col-span-1">
            <SectionTitle>Horários</SectionTitle>
            <div className="space-y-2">
              <HourRow day="Segunda — Sexta" time={"8:00–12:00 / 14:00–18:00"} open />
              <HourRow day="Sábado" closed />
              <HourRow day="Domingo" closed />
            </div>
            <p className="text-xs text-gray-600 italic mt-3 pl-1">
              *Fechado das 12:00 às 14:00 para almoço
            </p>

            <div className="mt-8">
              <SectionTitle>Siga-nos</SectionTitle>
              <div className="flex gap-3">
                <SocialBtn href="https://www.instagram.com/beehave_sc/" label="Instagram">
                  <Instagram size={16} />
                </SocialBtn>
                <SocialBtn href="https://wa.me/5587988287826" label="WhatsApp">
                  <MessageCircle size={16} />
                </SocialBtn>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#161616] mt-14 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} beehave Psicologia. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-gray-600 hover:text-yellow-400 transition-colors">Política de Privacidade</a>
            <a href="#" className="text-xs text-gray-600 hover:text-yellow-400 transition-colors">Termos de Serviço</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

/* ---- Sub-components ---- */

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-2 mb-5">
    <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-yellow-400 whitespace-nowrap">
      {children}
    </p>
    <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(245,197,24,0.2), transparent)' }} />
  </div>
);

const ContactCard = ({ icon, label, children }: {
  icon: React.ReactNode; label: string; children: React.ReactNode;
}) => (
  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#111] border border-[#1e1e1e] hover:border-yellow-400/20 hover:bg-[#141414] transition-all duration-200">
    <HexIcon>{icon}</HexIcon>
    <div>
      <p className="text-[10px] tracking-widest uppercase text-yellow-400 mb-1">{label}</p>
      {children}
    </div>
  </div>
);

const HourRow = ({ day, time, open, closed }: {
  day: string; time?: string; open?: boolean; closed?: boolean;
}) => (
  <div className={`flex justify-between items-center px-3.5 py-2.5 rounded-lg border transition-colors
    ${open ? 'bg-[#111] border-yellow-400/10' : 'bg-[#0d0d0d] border-[#1a1a1a]'}`}>
    <span className={`text-xs font-semibold ${open ? 'text-white' : 'text-gray-600'}`}>{day}</span>
    {closed
      ? <span className="text-xs italic text-gray-600">Fechado</span>
      : <span className="text-xs text-yellow-400 text-right leading-snug">{time}</span>
    }
  </div>
);

const SocialBtn = ({ href, label, children }: {
  href: string; label: string; children: React.ReactNode;
}) => (
  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
    className="w-10 h-10 rounded-xl border border-[#222] bg-[#111] flex items-center justify-center text-gray-600
      hover:border-yellow-400 hover:text-yellow-400 hover:bg-yellow-400/5 hover:-translate-y-0.5
      transition-all duration-200">
    {children}
  </a>
);

export default Footer;