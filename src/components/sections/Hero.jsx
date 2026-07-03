import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronUp, ChevronDown, Sparkles } from 'lucide-react';
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
    { 
      id: '04', 
      title: 'BODA', 
      subtitle: 'Mica & Nico', 
      image: '/M&N-714.jpg' 
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
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading="lazy"
            decoding="async"
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
            className="text-7xl md:text-8xl lg:text-[10rem] font-heading leading-[0.8] text-white tracking-tighter"
          >
            NO ORGANIZAMOS <br />
            EVENTOS. <br />
            CREAMOS <span className="font-script text-[0.4em] md:text-[0.5em] text-[#00E56A] lowercase font-normal ml-6 relative inline-block leading-none -rotate-6 md:translate-y-[-10%] translate-y-[-40%] whitespace-nowrap tracking-wider drop-shadow-[0_0_15px_rgba(0,229,106,0.4)]">
              recuerdos
              <span className="absolute -top-12 -right-16 text-7xl font-sans text-[#00E56A] opacity-80 select-none">
                <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M50 10 L60 40 L90 40 L65 60 L75 90 L50 70 L25 90 L35 60 L10 40 L40 40 Z" />
                </svg>
              </span>
              <svg className="absolute -bottom-6 left-0 w-[120%] h-4 text-[#00E56A]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 L100 5 M5 8 L95 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
              </svg>
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-16 text-gray-300 text-lg md:text-xl max-w-sm font-light tracking-wide"
          >
            Creamos experiencias que conectan personas, ideas y oportunidades.
          </motion.p>

          <div className="mt-12 md:mt-20 flex flex-col sm:flex-row items-center gap-6 group cursor-pointer w-fit">
            <a 
              href="#experiencias"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('experiencias')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center"
            >
              <div className="w-12 h-12 rounded-full border border-[#00E56A]/50 flex items-center justify-center text-[#00E56A] group-hover:bg-[#00E56A] group-hover:text-black transition-all duration-300">
                <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
              </div>
              <span className="ml-4 font-semibold tracking-widest text-[#00E56A] text-[10px] uppercase group-hover:tracking-[0.2em] transition-all duration-300">
                EXPLORÁ EXPERIENCIAS
              </span>
            </a>

            <a 
              href="/armatuevento"
              className="flex items-center px-8 py-4 border border-white/20 rounded-full hover:border-[#00E56A] hover:bg-[#00E56A]/5 transition-all group"
            >
              <Sparkles size={16} className="text-[#00E56A] mr-3 group-hover:animate-pulse" />
              <span className="font-semibold tracking-widest text-white text-[10px] uppercase">
                COTIZÁ TU EVENTO CON IA
              </span>
            </a>
          </div>
        </div>

        {/* Right Content - Vertical Slider Indicators (Desktop Only) */}
        <div className="hidden md:flex flex-col items-end space-y-16">
          <div className="space-y-12 text-right pr-4">
            {events.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <div 
                  key={item.id} 
                  onClick={() => setActiveIndex(index)}
                  className={`group cursor-pointer transition-all duration-500 flex flex-col items-end ${isActive ? 'opacity-100' : 'opacity-30 hover:opacity-60'}`}
                >
                  <div className="text-4xl font-heading tracking-wider mb-2">{item.id}</div>
                  <div className="text-[10px] font-bold tracking-[0.2em] text-white mb-1 uppercase">{item.title}</div>
                  <div className="text-[12px] font-light text-gray-400 tracking-wide">{item.subtitle}</div>
                  {isActive && (
                    <motion.div layoutId="activeLine" className="h-[2px] w-16 bg-[#00E56A] mt-4" />
                  )}
                </div>
              )
            })}
          </div>

          <div className="flex flex-col items-center mt-20 space-y-6">
            <span className="text-[9px] tracking-[0.4em] text-white/40 rotate-180 font-light" style={{ writingMode: 'vertical-rl' }}>
              SCROLL PARA EXPLORAR
            </span>
            <div className="w-[1px] h-20 bg-white/20 relative">
              <div className="absolute -left-[3px] bottom-0 w-[7px] h-[7px] bg-[#00E56A] rounded-full" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
