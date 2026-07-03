import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mic, Tv, Newspaper, Star } from 'lucide-react';

const Vibes = () => {
  const [selectedId, setSelectedId] = useState(null);

  const cards = [
    {
      id: 1,
      title: 'Íntimo',
      subtitle: 'EMOCIONES REALES',
      image: '/LU%20&%20TOMI%20(704).JPG',
      philosophy: 'Nos alejamos de la "perfección plástica". Creemos en la autenticidad y la calidez.',
      details: 'El enfoque de trino está en los detalles invisibles que hacen que los invitados se sientan abrazados por el evento. No es solo un casamiento o encuentro con pocos invitados; es un refugio temporal donde todos son protagonistas, con un ritmo orgánico y real.',
      gallery: ['/LU%20&%20TOMI%20(811).JPG', '/LU%20&%20TOMI%20(1545).JPG']
    },
    {
      id: 2,
      title: 'Energía',
      subtitle: 'FIESTAS QUE EXPLOTAN',
      image: '/G&N-601.jpg',
      philosophy: 'Diseñamos fiestas donde la energía no cae nunca. Cada momento está pensado para sorprender y hacer vibrar a tus invitados.',
      details: 'Desde el line-up del DJ hasta los efectos especiales en la pista. Coordinamos técnica, luces y barra para que el clímax de la noche sea constante. Tu única preocupación será no dejar de bailar.',
      gallery: ['/G&N-458.jpg', '/G&N-142.jpg']
    },
    {
      id: 3,
      title: 'Impacto',
      subtitle: 'MARCAS QUE INSPIRAN',
      image: '/MLS%20Watch%20Party%20(6).jpg',
      philosophy: 'Traemos la emoción y pasión por el detalle de una boda de lujo al mundo corporativo.',
      details: 'Organizamos una Watch Party exclusiva para ver al Inter de Miami. Realizamos una rueda de prensa con un jugador de 1era división y convocamos a los periodistas deportivos de los principales medios del país. El evento culminó con un saludo en VIVO del comentarista del partido.',
      highlights: [
        { icon: <Mic size={20} />, label: 'Rueda de Prensa' },
        { icon: <Tv size={20} />, label: 'Transmisión en Vivo' },
        { icon: <Newspaper size={20} />, label: 'Cobertura de Medios' },
        { icon: <Star size={20} />, label: 'Presencia VIP' },
      ],
      gallery: ['/MLS%20Watch%20Party%20(7)%20Gabriel%20Gabor%20y%20Juli%C3%A1n%20Lettieri.jpg', '/MLS%20Watch%20Party%20(4).jpg']
    },
  ];

  return (
    <section className="bg-black py-24 md:py-32 relative border-t border-white/10" id="experiencias">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 relative">
          <div className="w-full lg:w-1/3">
            <h2 className="text-4xl md:text-5xl font-heading text-white flex items-center">
              ELEGÍ TU VIBRA <span className="text-[#00E56A] text-2xl ml-2 font-sans">*</span>
            </h2>
            <p className="text-gray-400 mt-6 text-sm font-light max-w-xs">
              Cada evento tiene una energía. <br />
              ¿Cuál estás buscando?
            </p>
          </div>
          
          <div className="hidden lg:flex absolute left-1/3 -bottom-10 w-32 h-32 items-center justify-center pointer-events-none">
             <div className="absolute inset-0 border border-[#00E56A]/20 rounded-full animate-[spin_10s_linear_infinite] border-dashed"></div>
             <div className="w-2 h-2 bg-[#00E56A] rounded-full"></div>
             <svg viewBox="0 0 100 100" className="absolute w-full h-full animate-[spin_20s_linear_infinite]">
                <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                <text className="text-[10px] tracking-widest fill-[#00E56A] uppercase font-semibold">
                  <textPath href="#circlePath" startOffset="0%">
                    Pasión • Energía • Magia • 
                  </textPath>
                </text>
              </svg>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 h-[600px] md:h-[500px]">
          {cards.map((card, index) => (
            <motion.div
              layoutId={`card-container-${card.id}`}
              key={card.id}
              onClick={() => setSelectedId(card.id)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative group overflow-hidden cursor-pointer ${index !== 2 ? 'md:border-r md:border-white/10' : ''}`}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-all duration-700 z-10" />
              <motion.img
                layoutId={`card-image-${card.id}`}
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center">
                <motion.h3 
                  layoutId={`card-title-${card.id}`}
                  className="font-script text-5xl md:text-6xl text-white mb-4 shadow-sm group-hover:text-[#00E56A] transition-colors duration-300"
                >
                  {card.title}
                </motion.h3>
                <motion.p 
                  layoutId={`card-subtitle-${card.id}`}
                  className="text-[10px] font-bold tracking-[0.2em] text-white uppercase transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
                >
                  {card.subtitle}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expanded Modal */}
        <AnimatePresence>
          {selectedId && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/90 backdrop-blur-sm"
            >
              {cards.filter(c => c.id === selectedId).map(card => (
                <motion.div
                  layoutId={`card-container-${card.id}`}
                  key={`modal-${card.id}`}
                  className="w-full max-w-6xl h-full max-h-[85vh] bg-[#0a0a0a] rounded-xl overflow-hidden flex flex-col md:flex-row relative border border-white/10"
                >
                  {/* Close Button */}
                  <button 
                    onClick={() => setSelectedId(null)}
                    className="absolute top-6 right-6 z-50 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-[#00E56A] hover:text-black transition-colors border border-white/20"
                  >
                    <X size={20} />
                  </button>

                  {/* Left Side: Hero Image & Title */}
                  <div className="w-full md:w-1/2 h-64 md:h-full relative">
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black via-black/40 to-transparent z-10" />
                    <motion.img
                      layoutId={`card-image-${card.id}`}
                      src={card.image}
                      alt={card.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 z-20 flex flex-col justify-end md:justify-center p-8 md:p-16">
                      <motion.h3 
                        layoutId={`card-title-${card.id}`}
                        className="font-script text-6xl md:text-8xl text-white mb-2"
                      >
                        {card.title}
                      </motion.h3>
                      <motion.p 
                        layoutId={`card-subtitle-${card.id}`}
                        className="text-xs md:text-sm font-bold tracking-[0.3em] text-[#00E56A] uppercase"
                      >
                        {card.subtitle}
                      </motion.p>
                    </div>
                  </div>

                  {/* Right Side: Content & Gallery */}
                  <div className="w-full md:w-1/2 h-full overflow-y-auto p-8 md:p-16 flex flex-col">
                    <h4 className="text-[10px] font-bold tracking-widest text-white uppercase mb-6 flex items-center">
                      Nuestra Filosofía <span className="text-[#00E56A] ml-2 text-lg">*</span>
                    </h4>
                    
                    <p className="text-xl md:text-2xl font-light text-white leading-relaxed mb-8">
                      "{card.philosophy}"
                    </p>
                    
                    <p className="text-sm text-gray-400 font-light leading-relaxed mb-8">
                      {card.details}
                    </p>

                    {card.highlights && (
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        {card.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center space-x-3 text-gray-300">
                            <div className="text-[#00E56A]">{highlight.icon}</div>
                            <span className="text-xs font-semibold uppercase tracking-wider">{highlight.label}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Button to Corporate Services */}
                    {card.id === 3 && (
                      <div className="mb-12">
                        <a 
                          href="/corporativo" 
                          className="inline-flex items-center px-6 py-3 border border-[#00E56A] text-[#00E56A] hover:bg-[#00E56A] hover:text-black transition-colors text-xs font-bold tracking-widest uppercase"
                        >
                          Ver Servicios Corporativos
                        </a>
                      </div>
                    )}

                    {/* Mini Gallery */}
                    <div className="grid grid-cols-2 gap-4 mt-auto">
                      {card.gallery.map((img, i) => (
                        <div key={i} className="aspect-square rounded-lg overflow-hidden border border-white/5">
                          <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Vibes;
