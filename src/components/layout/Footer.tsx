import React from 'react';
import { Mail, Phone, MapPin, Instagram, MessageCircle, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer style={{ background: '#0a0a0a', color: '#fff', fontFamily: "'Inter', sans-serif" }}>

      {/* Honeycomb accent divider */}
      <div style={{ background: '#F0B429', height: '3px', width: '100%' }} />

      {/* CTA Strip */}
      <div style={{
        background: '#111111',
        padding: '48px 0',
        borderBottom: '1px solid #1f1f1f',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 32px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
        }}>
          <div>
            <p style={{ color: '#F0B429', fontSize: '13px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '8px' }}>
              Pronto para começar?
            </p>
            <h2 style={{ fontSize: '32px', fontWeight: 700, lineHeight: 1.2, margin: 0 }}>
              Agende uma Reunião
            </h2>
          </div>
          <a
            href="https://wa.me/5587988287826"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: '#F0B429',
              color: '#0a0a0a',
              fontWeight: 700,
              fontSize: '15px',
              padding: '16px 28px',
              borderRadius: '50px',
              textDecoration: 'none',
              letterSpacing: '0.02em',
              transition: 'transform 0.2s, box-shadow 0.2s',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 24px rgba(240,180,41,0.35)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
            }}
          >
            <MessageCircle size={18} />
            Fale pelo WhatsApp
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '64px 32px 48px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '48px',
      }}>

        {/* Brand Column */}
        <div style={{ gridColumn: 'span 1' }}>
          <a href="#" onClick={scrollToTop} style={{ display: 'inline-block', marginBottom: '20px' }}>
            <img src="https://i.imgur.com/LqSTFWW.png" alt="Beehave Logo" style={{ height: '52px', width: 'auto' }} />
          </a>
          <p style={{ color: '#888', fontSize: '14px', lineHeight: 1.7, maxWidth: '240px', margin: '0 0 28px' }}>
            Cuidando da sua saúde mental com acolhimento, ética e ciência.
          </p>
          {/* Social */}
          <div style={{ display: 'flex', gap: '12px' }}>
            {[
              {
                href: 'https://www.instagram.com/beehave_sc/',
                icon: <Instagram size={18} />,
                label: 'Instagram',
              },
              {
                href: 'https://wa.me/5587988287826',
                icon: <MessageCircle size={18} />,
                label: 'WhatsApp',
              },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: '1px solid #2a2a2a',
                  color: '#888',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s, color 0.2s, background 0.2s',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = '#F0B429';
                  el.style.color = '#F0B429';
                  el.style.background = 'rgba(240,180,41,0.08)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = '#2a2a2a';
                  el.style.color = '#888';
                  el.style.background = 'transparent';
                }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <p style={{ color: '#F0B429', fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '20px' }}>
            Navegação
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { href: '#services', label: 'Serviços' },
              { href: '#about', label: 'Sobre Nós' },
              { href: '#team', label: 'Nossa Equipe' },
              { href: '#faq', label: 'Perguntas Frequentes' },
              { href: '#contact', label: 'Contato' },
            ].map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  style={{
                    color: '#888',
                    textDecoration: 'none',
                    fontSize: '14px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = '#F0B429')}
                  onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = '#888')}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p style={{ color: '#F0B429', fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '20px' }}>
            Contato
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {[
              {
                icon: <MapPin size={16} />,
                content: (
                  <span>Rua Bahia, N 808, Vila Moco<br />Petrolina-PE, CEP 56.306-430</span>
                ),
              },
              {
                icon: <Phone size={16} />,
                content: (
                  <a href="tel:+5587988287826" style={{ color: '#888', textDecoration: 'none' }}>87 98828-7826</a>
                ),
              },
              {
                icon: <Mail size={16} />,
                content: (
                  <a href="mailto:empresabeehave@gmail.com" style={{ color: '#888', textDecoration: 'none', wordBreak: 'break-word' }}>
                    empresabeehave@gmail.com
                  </a>
                ),
              },
            ].map(({ icon, content }, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <span style={{ color: '#F0B429', marginTop: '2px', flexShrink: 0 }}>{icon}</span>
                <span style={{ color: '#888', fontSize: '14px', lineHeight: 1.6 }}>{content}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hours */}
        <div>
          <p style={{ color: '#F0B429', fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '20px' }}>
            Horários
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div>
              <p style={{ color: '#ccc', fontSize: '14px', fontWeight: 600, marginBottom: '4px' }}>Segunda — Sexta</p>
              <p style={{ color: '#888', fontSize: '13px', margin: 0 }}>8:00 – 12:00 · 14:00 – 18:00</p>
            </div>
            <div style={{ height: '1px', background: '#1f1f1f' }} />
            <div style={{ display: 'flex', gap: '24px' }}>
              <div>
                <p style={{ color: '#444', fontSize: '13px', fontWeight: 600, marginBottom: '2px' }}>Sábado</p>
                <p style={{ color: '#444', fontSize: '13px', margin: 0 }}>Fechado</p>
              </div>
              <div>
                <p style={{ color: '#444', fontSize: '13px', fontWeight: 600, marginBottom: '2px' }}>Domingo</p>
                <p style={{ color: '#444', fontSize: '13px', margin: 0 }}>Fechado</p>
              </div>
            </div>
            <p style={{ color: '#444', fontSize: '12px', fontStyle: 'italic', margin: 0 }}>
              * Fechado das 12h às 14h para almoço
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid #1a1a1a', padding: '24px 32px' }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
        }}>
          <p style={{ color: '#444', fontSize: '13px', margin: 0 }}>
            © {new Date().getFullYear()} Beehave Psicologia. Todos os direitos reservados.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            {['Política de Privacidade', 'Termos de Serviço'].map(label => (
              <a
                key={label}
                href="#"
                style={{ color: '#444', fontSize: '13px', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = '#F0B429')}
                onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = '#444')}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;