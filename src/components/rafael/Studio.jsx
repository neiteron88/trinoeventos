import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown } from 'lucide-react';

const studioImages = [
  { id: 1, src: '/studio_main.png', alt: 'Vista principal del estudio' },
  { id: 2, src: '/studio_back.png', alt: 'Rafael trabajando en la consola' },
  { id: 3, src: '/hero_rafael_studio.png', alt: 'Rafael sesionando con el bajo' },
  { id: 4, src: '/works_collage.png', alt: 'Detalle de equipamiento' },
];

const Studio = ({ lang }) => {
  const [activeImg, setActiveImg] = useState(studioImages[0]);

  const content = {
    ES: {
      title: "DONDE LAS IDEAS SE TRANSFORMAN EN SONIDO.",
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

  return (
    <section id="estudio" className="py-32 bg-black">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Text Content */}
          <div className="lg:w-1/3">
            <p className="text-[10px] font-bold tracking-[0.4em] text-accent mb-4 uppercase">El Estudio</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight mb-8">
              {title}
            </h2>
            <p className="text-white/40 text-sm leading-relaxed mb-12 max-w-sm">
              {description}
            </p>
            <button 
              onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-6 group"
            >
              <span className="text-[10px] font-bold tracking-[0.4em] text-white/80 group-hover:text-accent transition-colors">
                {button}
              </span>
              <div className="relative flex items-center justify-center w-12 h-12">
                <div className="absolute inset-0 border border-white/20 rounded-full group-hover:border-accent transition-colors duration-500"></div>
                <div className="w-1.5 h-1.5 bg-accent rounded-full group-hover:scale-150 transition-transform"></div>
              </div>
            </button>
          </div>

          {/* Image Display */}
          <div className="lg:w-2/3 flex flex-col md:flex-row gap-4 h-[400px] md:h-[600px]">
            <div className="flex-1 relative overflow-hidden rounded-sm group">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeImg.id}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
                  src={activeImg.src} 
                  alt={activeImg.alt} 
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-accent/5 pointer-events-none"></div>
            </div>
            
            {/* Thumbnails Sidebar */}
            <div className="flex md:flex-col gap-4 justify-center items-center py-4 px-2">
              <button className="text-white/20 hover:text-accent transition-colors hidden md:block"><ChevronUp size={20} /></button>
              <div className="flex md:flex-col gap-4">
                {studioImages.map((img) => (
                  <motion.div 
                    key={img.id}
                    onClick={() => setActiveImg(img)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-20 h-14 md:w-24 md:h-16 rounded-sm overflow-hidden cursor-pointer border-2 transition-colors ${activeImg.id === img.id ? 'border-accent' : 'border-white/10 opacity-50 hover:opacity-100'}`}
                  >
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                  </motion.div>
                ))}
              </div>
              <button className="text-white/20 hover:text-accent transition-colors hidden md:block"><ChevronDown size={20} /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Studio;
