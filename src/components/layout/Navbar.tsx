import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
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
    { name: 'Contato',          path: '/#contact' },
  ];

  const handleNavClick = (path: string) => {
    if (path === '#') return;
    if (path === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (path.startsWith('/#')) {
      const sectionId = path.substring(2);
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  const linkClass = (path: string, mobile = false) =>
    `relative font-bunday text-sm font-medium transition-colors duration-200 group
    ${mobile ? 'block px-4 py-3 text-base rounded-xl' : 'px-3 py-2'}
    ${isActive(path)
      ? 'text-yellow-500'
      : mobile
        ? 'text-gray-800 hover:text-yellow-500 hover:bg-yellow-50'
        : 'text-gray-800 hover:text-yellow-500'
    }`;

  const renderLink = (link: { name: string; path: string }, mobile = false) => {
    const isAnchor = link.path.startsWith('/#') || link.path === '/';
    const content = (
      <>
        {link.name}
        {/* underline animado — só desktop */}
        {!mobile && (
          <span
            className={`absolute bottom-0 left-3 right-3 h-0.5 bg-yellow-400 rounded-full transition-transform duration-200 origin-left
              ${isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
          />
        )}
      </>
    );

    return isAnchor ? (
      <a
        key={link.name}
        href={link.path}
        onClick={(e) => { e.preventDefault(); handleNavClick(link.path); }}
        className={linkClass(link.path, mobile)}
      >
        {content}
      </a>
    ) : (
      <Link
        key={link.name}
        to={link.path}
        onClick={() => setIsOpen(false)}
        className={linkClass(link.path, mobile)}
      >
        {content}
      </Link>
    );
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300
        ${isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.06)] border-b border-gray-100'
          : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a
            href="#"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex-shrink-0 flex items-center"
          >
            <img
              src="https://i.imgur.com/vAT2VjM.png"
              alt="Beehave Logo"
              className="h-10 w-auto"
            />
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => renderLink(link))}
          </div>

          {/* CTA + hamburguer */}
          <div className="flex items-center gap-3">
            {/* Botão CTA — só desktop */}
            <a
              href="/#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('/#contact'); }}
              className="hidden lg:inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bunday font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors duration-200 shadow-sm"
            >
              <span>🐝</span>
              Fale conosco
            </a>

            {/* Hamburguer — mobile */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 hover:bg-gray-50 text-gray-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="bg-white border-t border-gray-100 px-4 py-4 shadow-lg">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => renderLink(link, true))}
          </div>

          {/* CTA mobile */}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <a
              href="/#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('/#contact'); }}
              className="flex items-center justify-center gap-2 w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bunday font-semibold text-sm px-5 py-3 rounded-xl transition-colors duration-200"
            >
              <span>🐝</span>
              Fale conosco
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;