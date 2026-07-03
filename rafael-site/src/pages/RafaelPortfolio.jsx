import React, { useState } from 'react';
import Navbar from '../components/rafael/Navbar';
import Sidebar from '../components/rafael/Sidebar';
import Hero from '../components/rafael/Hero';
import Timeline from '../components/rafael/Timeline';
import Studio from '../components/rafael/Studio';
import Services from '../components/rafael/Services';
import Works from '../components/rafael/Works';
import Testimonials from '../components/rafael/Testimonials';
import Footer from '../components/rafael/Footer';

import '../styles/rafael-portfolio.css';

const RafaelPortfolio = () => {
  const [lang, setLang] = useState('ES');

  return (
    <div className="rafael-theme min-h-screen">
      <Navbar lang={lang} setLang={setLang} />
      <Sidebar lang={lang} />
      <main>
        <Hero lang={lang} />
        <Timeline lang={lang} />
        <Studio lang={lang} />
        <Services lang={lang} />
        <Works lang={lang} />
        <Testimonials lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
};

export default RafaelPortfolio;
