import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início',           path: '/' },
    { name: 'Sobre',            path: '/#about' },
    { name: 'Beehave Serviços', path: '/#services' },
    { name: 'Beehave Cursos',   path: '/cursos' },
    { name: 'BeeEquipe',        path: '/#team' },
    { name: 'Depoimentos',      path: '/#testimonials' },
    { name: 'FAQ',              path: '/#faq' },
  ];

  const handleNavClick = (path: string) => {
    if (path === '#') return;
    if (path === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (path.startsWith('/#')) {
      const el = document.getElementById(path.substring(2));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname === path;

  const renderDesktopLink = (link: { name: string; path: string }) => {
    const active = isActive(link.path);
    const isAnchor = link.path.startsWith('/#') || link.path === '/';
    const classes = `relative font-bunday text-sm font-medium px-3 py-1.5 rounded-lg transition-all duration-200
      ${active
        ? 'text-gray-900 bg-yellow-400'
        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
      }`;

    return isAnchor ? (
      <a key={link.name} href={link.path}
        onClick={(e) => { e.preventDefault(); handleNavClick(link.path); }}
        className={classes}
      >
        {link.name}
      </a>
    ) : (
      <Link key={link.name} to={link.path} className={classes}>
        {link.name}
      </Link>
    );
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500
          ${isScrolled ? 'top-0' : 'top-4'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between h-16 px-4 lg:px-6 transition-all duration-500
              ${isScrolled
                ? 'bg-white border-b border-gray-200 shadow-sm rounded-none -mx-4 sm:-mx-6 lg:-mx-8 px-8 sm:px-10 lg:px-12'
                : 'bg-white border border-gray-200 rounded-2xl shadow-lg'
              }`}
          >
            {/* Logo */}
            <a
              href="#"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex-shrink-0"
            >
              <img
                src="https://i.imgur.com/vAT2VjM.png"
                alt="Beehave Logo"
                className="h-9 w-auto"
              />
            </a>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map(renderDesktopLink)}
            </div>

            {/* CTA + mobile btn */}
            <div className="flex items-center gap-3">
              <a
                href="/#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick('/#contact'); }}
                className="hidden lg:inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-bunday font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors duration-200"
              >
                Contato
                <span className="w-2 h-2 bg-yellow-400 rounded-full" />
              </a>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden w-9 h-9 flex items-center justify-center rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ── MOBILE DRAWER ── */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300
          ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300
            ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsOpen(false)}
        />

        {/* Drawer deslizante da direita */}
        <div
          className={`absolute top-0 right-0 h-full w-[280px] bg-white shadow-2xl transition-transform duration-300 ease-in-out
            ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
            <img src="https://i.imgur.com/vAT2VjM.png" alt="Beehave" className="h-8 w-auto" />
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-500 transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Links */}
          <div className="px-4 py-6 flex flex-col gap-1">
            {[...navLinks, { name: 'Contato', path: '/#contact' }].map((link) => {
              const active = isActive(link.path);
              const isAnchor = link.path.startsWith('/#') || link.path === '/';
              const classes = `flex items-center justify-between font-bunday text-sm font-medium px-4 py-3 rounded-xl transition-all duration-200
                ${active
                  ? 'bg-yellow-400 text-gray-900'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                }`;

              const inner = (
                <>
                  <span>{link.name}</span>
                  {active && <span className="w-1.5 h-1.5 bg-gray-900 rounded-full" />}
                </>
              );

              return isAnchor ? (
                <a key={link.name} href={link.path}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.path); }}
                  className={classes}
                >
                  {inner}
                </a>
              ) : (
                <Link key={link.name} to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={classes}
                >
                  {inner}
                </Link>
              );
            })}
          </div>

          {/* Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100 bg-gray-50">
            <p className="text-xs text-gray-400 font-bunday text-center">
              🐝 Beehave · Soluções Comportamentais
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;