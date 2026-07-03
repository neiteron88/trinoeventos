import React from 'react';
import { motion } from 'framer-motion';
import { Sliders, Music, Activity, Mic, Target } from 'lucide-react';

const services = [
  {
    icon: <Sliders className="text-accent" />,
    title: 'PRODUCCIÓN MUSICAL',
    desc: 'Desarrollo integral del concepto sonoro de tu proyecto.'
  },
  {
    icon: <Music className="text-accent" />,
    title: 'BASS SESSIONS',
    desc: 'Bajos grabados con identidad y criterio musical.'
  },
  {
    icon: <Activity className="text-accent" />,
    title: 'MIXING',
    desc: 'Mezclas que transmiten emoción, profundidad y claridad.'
  },
  {
    icon: <Mic className="text-accent" />,
    title: 'RECORDING',
    desc: 'Grabación profesional con atención al más mínimo detalle.'
  },
  {
    icon: <Target className="text-accent" />,
    title: 'DIRECCIÓN ARTÍSTICA',
    desc: 'Mirada integral para llevar tu música al siguiente nivel.'
  }
];

const Services = () => {
  return (
    <section id="servicios" className="py-32 bg-black">
      <div className="container-custom">
        <div className="mb-20">
          <p className="text-[10px] font-bold tracking-[0.4em] text-accent mb-4 uppercase">Servicios</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="mb-8 w-12 h-12 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-accent/10 rounded-lg blur-md group-hover:bg-accent/20 transition-all"></div>
                {service.icon}
              </div>
              <h3 className="text-sm font-bold tracking-widest mb-4 group-hover:text-accent transition-colors">{service.title}</h3>
              <p className="text-xs text-white/40 leading-relaxed mb-8">
                {service.desc}
              </p>
              <a href="#" className="text-[10px] font-bold tracking-widest text-white/30 hover:text-white transition-colors flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                VER MÁS <span>→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
