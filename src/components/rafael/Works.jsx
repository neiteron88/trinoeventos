import React from 'react';
import { motion } from 'framer-motion';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

const works = [
  {
    title: 'BALTASAR COMOTTO',
    subtitle: 'Denominación de Origen',
    role: 'Productor / Ingeniero',
    year: '2012'
  },
  {
    title: 'GILLEPSI',
    subtitle: 'Piscis',
    role: 'Bajista',
    year: '1997'
  },
  {
    title: 'VARIOS ARTISTAS',
    subtitle: 'Sesiones',
    role: 'Productor / Músico',
    year: '2020 - 2023'
  },
  {
    title: 'ZUKER XP',
    subtitle: 'Tecnópolis 2025',
    role: 'Bajista',
    year: '2025'
  },
  {
    title: 'BEBOP CON GILLEPSI',
    subtitle: 'Sesiones en Vivo',
    role: 'Bajista',
    year: '2018'
  }
];

const Works = () => {
  return (
    <section id="trabajos" className="py-32 bg-black">
      <div className="container-custom">
        <div className="flex justify-between items-end mb-16">
          <div>
            <p className="text-[10px] font-bold tracking-[0.4em] text-accent mb-4 uppercase">Trabajos Destacados</p>
          </div>
          <div className="flex items-center gap-8">
            <a href="#" className="text-[10px] font-bold tracking-[0.2em] text-white/40 hover:text-white transition-colors">VER TODOS LOS TRABAJOS →</a>
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-accent hover:text-accent transition-all">
                <ChevronLeft size={20} />
              </button>
              <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-accent hover:text-accent transition-all">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-12 no-scrollbar">
          {works.map((work, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="min-w-[300px] group relative"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-sm relative mb-6">
                <img 
                  src="/works_collage.png" 
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
