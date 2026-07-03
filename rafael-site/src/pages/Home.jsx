import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import Vibes from '../components/sections/Vibes';
import FeaturedEvents from '../components/sections/FeaturedEvents';
import Process from '../components/sections/Process';
import ManifestoAndTestimonials from '../components/sections/ManifestoAndTestimonials';

const Home = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <main>
        <Hero />
        <Vibes />
        <FeaturedEvents />
        <Process />
        <ManifestoAndTestimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
