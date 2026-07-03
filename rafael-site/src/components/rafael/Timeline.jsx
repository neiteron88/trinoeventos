import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const timelineData = [
  {
    era: "Música Electrónica , Live sets y Editor Audiovisual",
    years: "2026 - Presente",
    items: [
      {
        title: "H4Z4R",
        desc: "Bajo este alias RF explora su faceta más electrórock y experimental. ha editado varios álbumes y eps, entre ellos HOLIDAY (2025) mis canciones electro rockeras MAO música instrumental de sinteizadores ambient organica. AEROLINEAS H4Z4R remixes del legendario grupo Los Mirlos cumbia psicodélica.Ha realizado sessiones y live sets de música electrónica enfocados en house, afrobeat y ambient (live in paris 2 / 4x4 alpa corral)."
      },
      {
        title: "Ketanguero",
        desc: "proyecto de tango electrónico de vanguardia diseñado para el mercado de lujo europeo y la escena local del tango y las milongas. un setup híbrido: roland sp-404mk2, microkorg y kaoss pad, procesando bandoneón y sintetizadores en tiempo real. fusión de la herencia del puerto argentino con beats de alta fidelidad y estética cinematográfica."
      },
      {
        title: "Editor de Videos",
        desc: "Utilizando el finalcut como herramienta principal , viene realizando variedad de video para los artistas con los que trabaja y sus propias producciones."
      },
      {
        title: "Masterizacion en formato digital y vinilos",
        desc: "Hoy dia realizando mastering para diferentes artistas y estilos para la subida a plataformas digitales. También para la fabricación de discos Vinilo, el ultimo trabajo es el álbum Forma de Gillespi/Torres 2025"
      }
    ]
  },
  {
    era: "JAZZ FUNK & ALTERNATIVO",
    years: "2010 - 2025",
    items: [
      {
        title: "Gillespi Band (2009 - 2025)",
        desc: "Bajista en vivo de la banda desde el 2014 ingeniero de grabación y mezcla de álbumes GILLERAMA(2009) sesiones de estudio y ON FIRE (2020) grabaciones en vivo. Temas fundamentales del jazz-funk como Churroteca y Splatch. Sesiones en TV con Lito Vitale."
      },
      {
        title: "Katie Viqueira & Araceli Matus & Podcast (2024- 2021)",
        desc: "Ingeniería de sonido y mezcla para sus aclamados trabajos solistas, logrando audios acústicos orgánicos y cristalinos dentro de los generos del folclore, la canción y la música rioplatense. DENINGUN LUGAR 2024 KV AUDIOCRONICAS 2022 una fusión entre música y literatura MATUSEANDOSE 2021 AM"
      },
      {
        title: "Rafunk (2013-2021)",
        desc: "En Rafunk funciono como lider bajista y cantante dandole forma a tres discos y eps con temas propios y algunos covers con muchisimos shows. Donde tambien realizo la ingenieria de grabacion y mezcla como parte de la autoproduccion de este grupo. NADA NADA 2016 COMO UN VOLCAN 2019 NADADOR VOLCANICO 2020"
      },
      {
        title: "SUMO X PETTINATO (2020 – 2024)",
        desc: "Bajista del proyecto de Roberto haciendo canciones de la mitica banda SUMO"
      }
    ]
  },
  {
    era: "ERA DE ESTUDIO",
    years: "2000 - 2009",
    items: [
      {
        title: "Zuker XP (2004 - 2008)",
        desc: "Bajista estable en el proyecto de Javier Zuker que unió rock y pistas de baile. Hitos: Creamfields BA (2004/05), Vive Latino México y Pepsi Music."
      },
      {
        title: "Los Pulpas / Mama Pulpa",
        desc: "Shows masivos en estadios y el under porteño, compartiendo proyectos y grabaciones con el ícono Tom Lupo."
      },
      {
        title: "Guerra y Todo",
        desc: "Registro en vivo e ingeniería del show en directo en Rosario 2008."
      }
    ]
  },
  {
    era: "INICIOS DIGITALES & GROOVE MESTIZO",
    years: "1986 - 1999",
    items: [
      {
        title: "El Salto Tecnológico (1995)",
        desc: "Incursión pionera en la ingeniería digital utilizando los primeros sistemas ProTools 5.1 y la interfaz Digi 01."
      },
      {
        title: "El Relieve del Mundo (RDM)",
        desc: "Bajista, cantante y compositor cruzando funk-metal, disco y hip-hop. Mezcla del track Birimba Tiwa, primer tema mezclado 100% digital."
      },
      {
        title: "Producción Artística de Gustavo Cerati (1988)",
        desc: "Grabación del single 'Señor Ogro' de Mama Pulpa bajo la producción artística de Gustavo Cerati en el pico de popularidad de Soda Stereo."
      }
    ]
  }
];

const TimelineAccordion = ({ eraData, isOpen, onClick }) => {
  return (
    <div className="border-b border-white/10 last:border-0">
      <button 
        onClick={onClick}
        className="w-full py-8 flex items-center justify-between group hover:bg-white/[0.02] transition-colors px-4 md:px-8"
      >
        <div className="text-left">
          <span className="text-accent font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase block mb-2">
            {eraData.years}
          </span>
          <h3 className="text-xl md:text-3xl font-bold text-white group-hover:text-accent transition-colors">
            {eraData.era}
          </h3>
        </div>
        <div className={`w-10 h-10 rounded-full border border-white/20 flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'rotate-180 bg-accent border-accent text-white' : 'text-white/50 group-hover:border-white'}`}>
          <ChevronDown size={20} />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden px-4 md:px-8"
          >
            <div className="pb-8 pt-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {eraData.items.map((item, i) => (
                <div key={i} className="relative pl-6">
                  <div className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-accent/50"></div>
                  <h4 className="text-white font-bold mb-2 text-base">{item.title}</h4>
                  <p className="text-white/50 text-sm leading-relaxed" dangerouslySetInnerHTML={{__html: item.desc.replace(/H4Z4R|Ketanguero|Final Cut|Gillespi|Katie Viqueira|Araceli Matus|Rafunk|SUMO|Roland/g, match => `<span class="text-white/80 font-semibold">${match}</span>`)}} />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Timeline = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section id="trayectoria" className="py-24 md:py-32 bg-black">
      <div className="container-custom">
        <div className="mb-16">
          <p className="text-[10px] font-bold tracking-[0.4em] text-accent mb-4 uppercase">Trayectoria Conceptual</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[0.9]">
            UN CAMINO <br className="hidden md:block"/> CON HISTORIA.
          </h2>
        </div>

        <div className="border border-white/10 rounded-sm overflow-hidden bg-black/50 backdrop-blur-sm">
          {timelineData.map((data, idx) => (
            <TimelineAccordion 
              key={idx} 
              eraData={data} 
              isOpen={openIndex === idx} 
              onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
