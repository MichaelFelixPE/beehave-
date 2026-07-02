import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import About from '../components/sections/About';
import Team from '../components/sections/Team';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';
import FAQ from '../components/sections/FAQ';

const HomePage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1);
      const element = document.getElementById(sectionId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Services />
      <Team />
      <Testimonials />
      <FAQ />
      <Contact />
    </div>
  );
};

export default HomePage;