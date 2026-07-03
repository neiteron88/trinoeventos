import React from 'react';
import { motion } from 'framer-motion';

const milestones = [
  { year: '1990', text: 'Comienza su carrera como bajista profesional.' },
  { year: '2013', text: 'Premio Gardel por producción de Baltasar Comotto.', image: '/gardel_award.png' },
  { year: '2018', text: 'Sesiona con grandes artistas internacionales en giras mundiales.' },
  { year: '2022', text: 'Docente en la Universidad de Palermo (UP).' },
  { year: '2025', text: 'Gillespi. Giras y grabaciones.' },
];

const Timeline = () => {
  return (
    <section id="trayectoria" className="py-32 bg-black overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Left Side Header */}
          <div className="lg:w-1/4">
            <p className="text-[10px] font-bold tracking-[0.4em] text-accent mb-4 uppercase">Trayectoria</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight mb-8">
              UN CAMINO <br /> CON HISTORIA.
            </h2>
            <a href="#" className="inline-flex items-center gap-3 text-[10px] font-bold tracking-widest text-white/40 hover:text-white transition-colors group">
              VER TODA LA HISTORIA
              <motion.span 
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="text-accent"
              >
                →
              </motion.span>
            </a>
          </div>

          {/* Timeline Wrapper */}
          <div className="lg:w-3/4 relative pt-12">
            {/* The Line */}
            <div className="absolute top-[280px] left-0 w-full h-[1px] bg-white/10 hidden lg:block"></div>
            
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 lg:justify-between relative">
              {milestones.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative lg:w-40"
                >
                  {/* Content above the line */}
                  <div className="mb-12 h-40 flex flex-col justify-end">
                    <span className="text-xl font-bold text-white mb-4 block">{item.year}</span>
                    <p className="text-xs text-white/50 leading-relaxed font-medium">
                      {item.text}
                    </p>
                    {item.image && (
                      <div className="mt-4 w-12 h-16 relative group">
                        <img src={item.image} alt="Award" className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all" />
                        <div className="absolute inset-0 bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                    )}
                  </div>

                  {/* Dot on the line */}
                  <div className="hidden lg:flex items-center justify-center absolute top-[280px] left-0 -translate-y-1/2 -translate-x-1/2">
                    <div className="w-2 h-2 rounded-full bg-accent ring-4 ring-accent/20"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
