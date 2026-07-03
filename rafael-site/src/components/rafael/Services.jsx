import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sliders, Music, Activity, Mic, Target, X } from 'lucide-react';

const services = [
  {
    icon: <Sliders className="text-accent" />,
    title: 'PRODUCCIÓN MUSICAL',
    desc: 'Desarrollo integral del concepto sonoro de tu proyecto.',
    detail: 'Desde la preproducción hasta el master final. Rafa trabaja codo a codo con el artista para construir el universo sonoro de cada disco: arreglos, dirección de músicos, selección de gears, captura en estudio. Ha producido más de 50 artistas de géneros tan diversos como tango, funk, rock, R&B y folklore.'
  },
  {
    icon: <Music className="text-accent" />,
    title: 'BASS SESSIONS',
    desc: 'Bajos grabados con identidad y criterio musical.',
    detail: 'Con más de 25 años de experiencia como bajista, Rafa ofrece sesiones de bajo para discos, shows en vivo y contenido audiovisual. Su sonido combina groove funk con sensibilidad jazzística y potencia rockera. Grabaciones en su estudio Toma 33 o en formato remoto.'
  },
  {
    icon: <Activity className="text-accent" />,
    title: 'MIXING',
    desc: 'Mezclas que transmiten emoción, profundidad y claridad.',
    detail: 'Mezcla híbrida (in-the-box + outboard) en Pro Tools. Rafa integra procesadores analógicos de alta gama con plugins de referencia mundial para lograr mezclas que suenan grandes en cualquier plataforma: Spotify, Tidal, vinyl. Géneros: pop, rock, jazz, electrónica, folklore.'
  },
  {
    icon: <Mic className="text-accent" />,
    title: 'GRABACIÓN',
    desc: 'Grabación profesional con atención al más mínimo detalle.',
    detail: 'El estudio Toma 33 / Electric Sauce cuenta con una consola analógica de alta gama, monitores de campo cercano Genelec y un arsenal de micrófonos y preamplificadores de referencia. Ideal para voz, instrumentos acústicos, secciones de cuerdas y grabaciones multitrack en vivo.'
  },
  {
    icon: <Target className="text-accent" />,
    title: 'DIRECCIÓN ARTÍSTICA',
    desc: 'Mirada integral para llevar tu música al siguiente nivel.',
    detail: 'Como docente en la Universidad de Palermo (área audiovisual) y con décadas de experiencia en sellos como Sony Music, Pop Art y Oui Oui Records, Rafa ofrece una visión completa del proyecto artístico: identidad sonora, repertorio, timing de lanzamiento y estrategia visual.'
  }
];

const Services = () => {
  const [selected, setSelected] = useState(null);

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
              className="group cursor-pointer p-6 rounded-lg border border-transparent hover:border-accent/20 hover:bg-accent/[0.02] transition-all"
              onClick={() => setSelected(selected === index ? null : index)}
            >
              <div className="mb-8 w-12 h-12 flex items-center justify-center relative">
                <div className={`absolute inset-0 rounded-lg blur-md transition-all ${selected === index ? 'bg-accent/40' : 'bg-accent/15 group-hover:bg-accent/30'}`}></div>
                {service.icon}
              </div>
              <h3 className={`text-sm font-bold tracking-widest mb-4 transition-colors ${selected === index ? 'text-accent' : 'text-white group-hover:text-accent'}`}>
                {service.title}
              </h3>
              <p className="text-xs text-white/70 leading-relaxed mb-8">
                {service.desc}
              </p>
              <span className={`text-[10px] font-bold tracking-widest transition-colors flex items-center gap-2 ${selected === index ? 'text-accent' : 'text-accent/50 group-hover:text-accent'}`}>
                {selected === index ? 'CERRAR' : 'VER MÁS'} <span>{selected === index ? '↑' : '→'}</span>
              </span>

              {/* Mobile Inline Expanded Panel */}
              <div className="lg:hidden">
                <AnimatePresence>
                  {selected === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 mt-6 border-t border-white/10">
                        <h4 className="text-accent text-xs font-bold tracking-[0.3em] mb-3">{service.title}</h4>
                        <p className="text-white/70 text-sm leading-relaxed">{service.detail}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* PC Expandable Detail Panel (Bottom) */}
        <div className="hidden lg:block">
          <AnimatePresence>
          {selected !== null && (
            <motion.div
              key={selected}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }}
              className="overflow-hidden"
            >
              <div className="mt-16 border-t border-white/10 pt-12 flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-accent/20 rounded-lg blur-md"></div>
                  {services[selected].icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-accent text-xs font-bold tracking-[0.3em] mb-4">{services[selected].title}</h4>
                  <p className="text-white/70 text-sm leading-relaxed max-w-3xl">{services[selected].detail}</p>
                </div>
                <button 
                  onClick={() => setSelected(null)} 
                  className="text-white/30 hover:text-white transition-colors flex-shrink-0"
                >
                  <X size={20} />
                </button>
              </div>
            </motion.div>
          )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Services;
