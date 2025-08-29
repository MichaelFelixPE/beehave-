import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import beeLogo from '../../sections/beelogo.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', path: '#' },
    { name: 'Serviços', path: '#services' },
    { name: 'Sobre', path: '#about' },
    { name: 'Equipe', path: '#team' },
    { name: 'Depoimentos', path: '#testimonials' },
    { name: 'FAQ', path: '#faq' },
    { name: 'Contato', path: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img src="/sections/beelogo.png" alt="Beehave Logo" className="w-10 h-10 rounded-full" />
              <span className="ml-2 text-xl font-bold text-black">   beehave </span>
            </a>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="text-black hover:text-yellow-500 transition-colors px-3 py-2 text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-4 py-2 rounded-md transition-colors"
            >
              Agendar Reunião
            </a>
          </div>
          
          {/* Mobile Nav Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black hover:text-yellow-500 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-2 pt-2 pb-4 shadow-lg">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="text-black hover:text-yellow-500 transition-colors px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium mt-2 px-4 py-2 rounded-md transition-colors text-center"
              onClick={() => setIsOpen(false)}
            >
              Agendar Reunião
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;