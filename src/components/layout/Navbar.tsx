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
    { name: 'Início', path: '/' },
    { name: 'Sobre', path: '/#about' },
    { name: 'Beehave Serviços', path: '/#services' },
    { name: 'Beehave Cursos', path: '/cursos' },
    { name: 'BeeEquipe', path: '/#team' },
    { name: 'Depoimentos', path: '/#testimonials' },
    { name: 'FAQ', path: '/#faq' },
    { name: 'Contato', path: '/#contact' },
    { name: 'Trabalhe Conosco', path: '/trabalhe-conosco' },
    { name: 'Aplicadores', path: '/aplicador' },
  ];

  const handleSectionClick = (
    e: React.MouseEvent,
    path: string
  ) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const sectionId = path.substring(2);
      const element = document.getElementById(sectionId);

      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }

    setIsOpen(false);
  };

  const handleHomeClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              to="/"
              className="flex items-center"
              onClick={handleHomeClick}
            >
              <img
                src="https://i.imgur.com/vAT2VjM.png"
                alt="Beehave Logo"
                className="w-36 sm:w-40 xl:w-44 h-auto"
                fetchPriority="high"
                decoding="async"
              />
            </Link>
          </div>

          {/* Desktop Nav (apenas a partir de xl: 1280px para não sobrepor a logo) */}
          <div className="hidden xl:flex items-center justify-end gap-x-1 2xl:gap-x-2">
            {navLinks.map((link) => {
              const commonClass =
                "whitespace-nowrap text-black hover:text-yellow-500 transition-colors px-2 py-2 text-xs 2xl:text-sm font-medium font-bunday";

              if (link.path === '/') {
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={handleHomeClick}
                    className={commonClass}
                  >
                    {link.name}
                  </Link>
                );
              }

              if (link.path.startsWith('/#')) {
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={(e) =>
                      handleSectionClick(e, link.path)
                    }
                    className={commonClass}
                  >
                    {link.name}
                  </Link>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={commonClass}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile/Tablet Nav Button */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black hover:text-yellow-500 transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Nav Menu */}
      {isOpen && (
        <div className="xl:hidden bg-white px-4 pt-2 pb-4 shadow-lg border-t border-gray-100">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              if (link.path === '/') {
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={handleHomeClick}
                    className="text-black hover:text-yellow-500 transition-colors px-3 py-2 text-base font-medium font-bunday"
                  >
                    {link.name}
                  </Link>
                );
              }

              if (link.path.startsWith('/#')) {
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={(e) =>
                      handleSectionClick(e, link.path)
                    }
                    className="text-black hover:text-yellow-500 transition-colors px-3 py-2 text-base font-medium font-bunday"
                  >
                    {link.name}
                  </Link>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-black hover:text-yellow-500 transition-colors px-3 py-2 text-base font-medium font-bunday"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;