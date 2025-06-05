import React from 'react';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import About from '../components/sections/About';
import Team from '../components/sections/Team';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';
import FAQ from '../components/sections/FAQ';

const HomePage: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Services />
      <About />
      <Team />
      <Testimonials />
      <FAQ />
      <Contact />
    </div>
  );
};

export default HomePage;