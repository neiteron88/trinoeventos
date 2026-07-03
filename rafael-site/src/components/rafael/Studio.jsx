import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Photo 1 (ZukerXP) DELETED per user request
// Photo 5 (bad quality) DELETED per user request
const studioImages = [
  {
    id: 2,
    src: '/rafael_studio_bn_2.jpg',
    alt: 'Rafael en la consola de mezcla',
    position: 'center center',
    // No color filter per user request
    colorize: false,
  },
  {
    id: 3,
    src: '/rafael_studio_synth.jpg',
    alt: 'Rafael con remera Gorillaz',
    position: 'center 10%', // Moved from 100% to 10% to show head instead of torso/legs
  },
  {
    id: 4,
    src: '/rafael_studio_gorillaz.jpg',
    alt: 'Rafael trabajando en el estudio',
    position: 'center 30%', // Moved from 15% to 30% to show more face, less hair
  },
  {
    id: 6,
    src: '/rafael_studio_new2.jpg',
    alt: 'Rafael en sesión',
    position: 'center 35%', // Reverted back to 35% as requested
  },
  {
    id: 7,
    src: '/rafael_studio_new3.jpg',
    alt: 'Rafael en la consola grande',
    position: 'center center',
  },
];

const Studio = ({ lang }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const content = {
    ES: {
      title: <>DONDE LAS IDEAS SE TRANSFORMAN EN <span className="glitch-effect text-accent inline-block">SONIDO.</span></>,
      description: "Equipamiento analógico y digital de primer nivel en un espacio diseñado para la creatividad y la excelencia sonora.",
      button: "EXPLORAR ESTUDIO"
    },
    EN: {
      title: "WHERE IDEAS TRANSFORM INTO SOUND.",
      description: "First-class analog and digital equipment in a space designed for creativity and sonic excellence.",
      button: "EXPLORE STUDIO"
    }
  };

  const { title, description, button } = content[lang || 'ES'];

  const prev = () => setActiveIndex(i => (i - 1 + studioImages.length) % studioImages.length);
  const next = () => setActiveIndex(i => (i + 1) % studioImages.length);

  useEffect(() => {
    const t = setInterval(next, 4500);
    return () => clearInterval(t);
  }, []);

  const activeImg = studioImages[activeIndex];

  return (
    <section id="estudio" className="py-20 md:py-32 bg-black">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start lg:items-center">
          {/* Text */}
          <div className="lg:w-1/3">
            <p className="text-[10px] font-bold tracking-[0.4em] text-accent mb-4 uppercase">El Estudio</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-tight mb-8">{title}</h2>
            <p className="text-white/40 text-sm leading-relaxed mb-12 max-w-sm">{description}</p>
            <button
              onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-6 group"
            >
              <span className="text-[10px] font-bold tracking-[0.4em] text-white/80 group-hover:text-accent transition-colors">{button}</span>
              <div className="relative flex items-center justify-center w-12 h-12">
                <div className="absolute inset-0 border border-white/20 rounded-full group-hover:border-accent transition-colors duration-500"></div>
                <div className="w-1.5 h-1.5 bg-accent rounded-full group-hover:scale-150 transition-transform"></div>
              </div>
            </button>
          </div>

          {/* Slider */}
          <div className="lg:w-2/3 w-full">
            <div className="relative w-full h-[300px] md:h-[520px] overflow-hidden rounded-sm mb-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeImg.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <img
                    src={activeImg.src}
                    alt={activeImg.alt}
                    className="w-full h-full object-cover"
                    style={{
                      objectPosition: activeImg.position || 'center center',
                      // Colorize B&W photo with a warm/purple tint
                      filter: activeImg.colorize
                        ? 'sepia(0.5) saturate(1.4) hue-rotate(220deg) brightness(1.1)'
                        : 'none'
                    }}
                  />
                  {/* Subtle accent tint overlay for colorized photo */}
                  {activeImg.colorize && (
                    <div className="absolute inset-0 bg-violet-900/20 mix-blend-color pointer-events-none"></div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Arrows */}
              <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/60 border border-white/20 flex items-center justify-center hover:border-accent hover:text-accent transition-all text-white">
                <ChevronLeft size={18} />
              </button>
              <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/60 border border-white/20 flex items-center justify-center hover:border-accent hover:text-accent transition-all text-white">
                <ChevronRight size={18} />
              </button>

              {/* Dots */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {studioImages.map((_, i) => (
                  <button key={i} onClick={() => setActiveIndex(i)}
                    className={`h-1.5 rounded-full transition-all ${i === activeIndex ? 'bg-accent w-5' : 'bg-white/40 w-1.5'}`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 overflow-x-auto no-scrollbar">
              {studioImages.map((img, i) => (
                <button key={img.id} onClick={() => setActiveIndex(i)}
                  className={`flex-shrink-0 w-16 h-11 md:w-24 md:h-16 rounded-sm overflow-hidden border-2 transition-all ${
                    activeIndex === i ? 'border-accent opacity-100' : 'border-white/10 opacity-40 hover:opacity-80'
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                    style={{
                      objectPosition: img.position || 'center center',
                      filter: img.colorize ? 'sepia(0.5) saturate(1.4) hue-rotate(220deg)' : 'none'
                    }}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Studio;
