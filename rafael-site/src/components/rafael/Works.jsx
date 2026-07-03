import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ChevronLeft, ChevronRight, X } from 'lucide-react';

const works = [
  {
    title: 'BALTASAR COMOTTO',
    subtitle: 'Elite (Preproducción)',
    role: 'Productor',
    year: '2012',
    image: '/baltasar_oficial.jpg',
    link: 'https://open.spotify.com/album/4vK9eJd2qHkVn1M23vLh0z'
  },
  {
    title: 'ARACELI MATUS',
    subtitle: 'Matuseándose',
    role: 'Productor / Ingeniero',
    year: '2020',
    image: '/works_araceli.jpg',
    link: 'https://open.spotify.com/album/1M8N2J4K7L8HkVn1M23vLh'
  },
  {
    title: 'GILLESPI',
    subtitle: 'Gillerama / On Fire',
    role: 'Bajista / Ing. de Mezcla',
    year: '2009-2025',
    image: '/works_gillespi.jpg',
    link: 'https://open.spotify.com/search/Gillespi'
  },
  {
    title: 'REMIXES OFICIALES',
    subtitle: 'Los Twist / Decadentes / Caligaris',
    role: 'Remezclas Electrónicas',
    year: '2000s',
    image: '/rafael_studio_bn_1.jpg',
    link: 'popup'
  },
  {
    title: 'ZUKER XP',
    subtitle: 'Grandes Festivales',
    role: 'Bajista Estable',
    year: '2004-2008',
    image: '/rafael_zukerxp.jpg',
    link: 'https://open.spotify.com/search/Zuker%20XP'
  },
  {
    title: 'RAFUNK',
    subtitle: 'Proyecto Personal',
    role: 'Líder / Bajista / Prod.',
    year: '2013-2021',
    image: '/rafael_studio_new3.jpg',
    link: 'https://open.spotify.com/search/Rafunk'
  },
  {
    title: 'LOS PULPAS',
    subtitle: 'Proyecto Personal',
    role: 'Shows y Grabaciones',
    year: '2000s',
    image: '/rafael_studio_new2.jpg',
    link: 'https://open.spotify.com/search/Los%20Pulpas'
  },
  {
    title: 'RELIEVE DEL MUNDO',
    subtitle: 'Proyecto Personal',
    role: 'Bajista / Cantante',
    year: '1995',
    image: '/works_collage.png',
    link: 'https://open.spotify.com/search/Relieve%20del%20Mundo'
  }
];

const Works = () => {
  const sliderRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="trabajos" className="py-32 bg-black">
      <div className="container-custom">
        <div className="flex justify-between items-end mb-16">
          <div>
            <p className="text-[10px] font-bold tracking-[0.4em] text-accent mb-4 uppercase">Trabajos Destacados</p>
          </div>
          <div className="flex items-center gap-8">
            <a href="https://www.youtube.com/watch?v=FNlcGrhOIlU&list=PLT5jf14GztNw-UCETbSqbtV0c05fekVXs" target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold tracking-[0.2em] text-white/40 hover:text-white transition-colors">VER TODOS LOS TRABAJOS →</a>
            <div className="flex gap-4">
              <button onClick={() => scroll('left')} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-accent hover:text-accent transition-all">
                <ChevronLeft size={20} />
              </button>
              <button onClick={() => scroll('right')} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-accent hover:text-accent transition-all">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div ref={sliderRef} className="flex gap-6 overflow-x-auto pb-12 no-scrollbar scroll-smooth" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {works.map((work, index) => {
            const Wrapper = work.link === 'popup' ? 'div' : 'a';
            const wrapperProps = work.link === 'popup' 
              ? { onClick: () => setShowPopup(true), className: "cursor-pointer" } 
              : { href: work.link, target: "_blank", rel: "noopener noreferrer", className: "block" };

            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="min-w-[300px] group relative"
              >
                <Wrapper {...wrapperProps}>
                  <div className="aspect-[3/4] overflow-hidden rounded-sm relative mb-6">
                    <img 
                      src={work.image} 
                      alt={work.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500">
                        <Play size={24} className="fill-white text-white ml-1" />
                      </div>
                    </div>

                    <div className="absolute bottom-6 left-6 flex items-center justify-center w-8 h-8 rounded-full border border-white/30">
                       <Play size={10} className="fill-white text-white ml-0.5" />
                    </div>
                  </div>

                  <h3 className="text-sm font-bold tracking-widest mb-1 group-hover:text-accent transition-colors">{work.title}</h3>
                  <p className="text-[10px] font-medium text-white/60 mb-2 uppercase tracking-wide">{work.subtitle}</p>
                  <div className="flex justify-between items-center text-[10px] font-bold text-white/30 uppercase tracking-widest">
                    <span>{work.role}</span>
                    <span>{work.year}</span>
                  </div>
                </Wrapper>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Popup Modal para Remixes Oficiales */}
      <AnimatePresence>
        {showPopup && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-6"
            onClick={() => setShowPopup(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-surface border border-white/10 p-8 md:p-12 max-w-lg w-full rounded-sm relative"
            >
              <button onClick={() => setShowPopup(false)} className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors">
                <X size={24} />
              </button>
              
              <h3 className="text-2xl font-black tracking-tighter mb-2">REMIXES OFICIALES</h3>
              <p className="text-[10px] font-bold tracking-[0.3em] text-accent uppercase mb-8">Escuchá los tracks</p>
              
              <div className="flex flex-col gap-4">
                <a href="https://open.spotify.com/search/Los%20Twist%20Remix" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-4 border border-white/10 hover:border-accent/50 hover:bg-white/[0.02] transition-all">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors">
                    <Play size={16} className="fill-white text-white ml-1" />
                  </div>
                  <div>
                    <h4 className="font-bold tracking-widest text-sm mb-1 group-hover:text-accent transition-colors">LOS TWIST</h4>
                    <p className="text-[10px] text-white/50 uppercase tracking-widest">Explosivo 96 (Remix)</p>
                  </div>
                </a>

                <a href="https://open.spotify.com/search/Los%20Autenticos%20Decadentes%20Remix" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-4 border border-white/10 hover:border-accent/50 hover:bg-white/[0.02] transition-all">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors">
                    <Play size={16} className="fill-white text-white ml-1" />
                  </div>
                  <div>
                    <h4 className="font-bold tracking-widest text-sm mb-1 group-hover:text-accent transition-colors">LOS AUTÉNTICOS DECADENTES</h4>
                    <p className="text-[10px] text-white/50 uppercase tracking-widest">Los Amigos del Campeón (Remix)</p>
                  </div>
                </a>

                <a href="https://open.spotify.com/search/Los%20Caligaris%20Remix" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-4 border border-white/10 hover:border-accent/50 hover:bg-white/[0.02] transition-all">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors">
                    <Play size={16} className="fill-white text-white ml-1" />
                  </div>
                  <div>
                    <h4 className="font-bold tracking-widest text-sm mb-1 group-hover:text-accent transition-colors">LOS CALIGARIS</h4>
                    <p className="text-[10px] text-white/50 uppercase tracking-widest">Transpirando Alegría (Remix)</p>
                  </div>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Works;
