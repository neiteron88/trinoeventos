import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const events = [
    { 
      id: '01', 
      title: 'CORPORATIVO', 
      subtitle: 'Watch Party MLS', 
      image: '/MLS%20Watch%20Party%20(6).jpg' 
    },
    { 
      id: '02', 
      title: 'BODA', 
      subtitle: 'Guada & Nahue', 
      image: '/G&N-601.jpg' 
    },
    { 
      id: '03', 
      title: 'BODA ÍNTIMA', 
      subtitle: 'Lu & Tomi', 
      image: '/LU%20&%20TOMI%20(811).JPG' 
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let timeout;
    const handleWheel = (e) => {
      // Very basic scroll detection for the Hero slider
      if (window.scrollY < window.innerHeight) {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
          if (e.deltaY > 50 && activeIndex < events.length - 1) {
            setActiveIndex(prev => prev + 1);
          } else if (e.deltaY < -50 && activeIndex > 0) {
            setActiveIndex(prev => prev - 1);
          }
        }, 100);
      }
    };

    window.addEventListener('wheel', handleWheel);
    return () => {
      window.removeEventListener('wheel', handleWheel);
      if (timeout) clearTimeout(timeout);
    };
  }, [activeIndex]);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Images with Crossfade */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 z-10" />
        
        <AnimatePresence mode="wait">
          <motion.img
            key={activeIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.85, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            src={events[activeIndex].image}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover object-[80%_center]"
          />
        </AnimatePresence>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-20 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left Content */}
        <div className="w-full md:w-2/3 mt-12 md:mt-0">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-8xl lg:text-[7rem] font-heading leading-[0.85] text-white"
          >
            NO ORGANIZAMOS <br />
            EVENTOS. <br />
            CREAMOS <span className="font-script text-[1.2em] text-[#ccff00] lowercase font-normal ml-2 relative inline-block">
              recuerdos
              <span className="absolute -top-4 -right-8 text-4xl font-sans text-[#ccff00]">*</span>
              <svg className="absolute -bottom-2 left-0 w-full h-2 text-[#ccff00]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 0" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M0 8 Q 50 13 100 3" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
              </svg>
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-10 text-gray-300 text-lg md:text-xl max-w-sm font-light"
          >
            Diseñamos experiencias únicas que conectan personas, marcas y emociones.
          </motion.p>

          <div className="mt-8 md:mt-12 flex flex-col sm:flex-row items-center gap-6 group cursor-pointer w-fit">
            <a 
              href="#experiencias"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('experiencias')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center"
            >
              <div className="w-12 h-12 rounded-full border border-[#ccff00]/50 flex items-center justify-center text-[#ccff00] group-hover:bg-[#ccff00] group-hover:text-black transition-all duration-300">
                <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
              </div>
              <span className="ml-4 font-semibold tracking-widest text-[#ccff00] text-sm group-hover:tracking-[0.2em] transition-all duration-300">
                EXPLORÁ EXPERIENCIAS
              </span>
            </a>
          </div>
        </div>

        {/* Right Content - Vertical Slider Indicators (Desktop Only) */}
        <div className="hidden md:flex flex-col items-end space-y-12 bg-black/10 backdrop-blur-[2px] p-6 rounded-2xl border border-white/5">
          <div className="space-y-8 text-right">
            {events.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <div 
                  key={item.id} 
                  onClick={() => setActiveIndex(index)}
                  className={`group cursor-pointer transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-40 hover:opacity-80'}`}
                >
                  <div className="text-sm font-heading tracking-wider mb-1">{item.id}</div>
                  <div className="text-[10px] font-bold tracking-widest text-gray-400 mb-1 uppercase">{item.title}</div>
                  <div className="text-xs text-white">{item.subtitle}</div>
                  {isActive && (
                    <motion.div layoutId="activeLine" className="h-[1px] w-12 bg-white mt-3 ml-auto" />
                  )}
                </div>
              )
            })}
          </div>

          <div className="flex flex-col items-center mt-12 space-y-4">
            <span className="text-[10px] tracking-[0.2em] text-gray-400 rotate-180" style={{ writingMode: 'vertical-rl' }}>
              SCROLL PARA EXPLORAR
            </span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-gray-400 to-transparent relative">
              <div className="absolute -left-1 -bottom-2 w-2 h-2 border border-gray-400 rounded-full" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
