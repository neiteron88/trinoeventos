import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronUp, ChevronDown, Play, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FeaturedEvents = () => {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState(null);
  const [activeModalImage, setActiveModalImage] = useState(null);

  // Reset active modal image when event selection changes
  useEffect(() => {
    if (selectedEventId) {
      const event = eventsList.find(e => e.id === selectedEventId);
      setActiveModalImage(event?.placeholder);
    } else {
      setActiveModalImage(null);
    }
  }, [selectedEventId]);

  const eventsList = [
    {
      id: '01',
      type: 'BODA',
      title: 'GUADA & NAHUE',
      venue: 'Estancia La Linda',
      photographer: 'Germán Dianez',
      photographerUrl: 'https://www.instagram.com/germandianez.ph/',
      quoteStart: '"Una noche inolvidable que superó todas nuestras ',
      quoteHighlight: 'expectativas.',
      quoteEnd: '"',
      mediaType: 'video',
      videoUrl: 'https://www.youtube.com/embed/0YaUJyE8bdI?autoplay=1',
      placeholder: '/G&N-552.jpg',
      thumbnails: ['/G&N-142.jpg', '/G&N-479.jpg', '/G&N-693.jpg'],
      description: 'Nahue y Guada vivieron una noche donde la elegancia y la fiesta se fusionaron perfectamente. Fue un evento de alta energía donde cada detalle fue curado para reflejar su personalidad vibrante. Desde la recepción hasta el amanecer, la pista nunca se detuvo.',
      testimony: 'Gracias por hacer que todo saliera mejor de lo que imaginamos. Fue la noche de nuestras vidas.'
    },
    {
      id: '02',
      type: 'BODA ÍNTIMA',
      title: 'LU & TOMI',
      venue: 'Jardín Privado',
      photographer: 'Estudio Alto Contraste',
      photographerUrl: 'https://www.instagram.com/estudioaltocontraste/',
      quoteStart: '"Son lo mas!! Hicieron que todo sea mejor de lo que ',
      quoteHighlight: 'soñamos.',
      quoteEnd: '"',
      mediaType: 'image',
      placeholder: '/LU%20&%20TOMI%20RESUMEN%20(271).JPG',
      thumbnails: ['/LU%20&%20TOMI%20(1544).JPG', '/LU%20&%20TOMI%20(898).JPG', '/LU%20&%20TOMI%20(725).JPG'],
      description: 'Una celebración íntima centrada en la calidez y las conexiones reales. Lu y Tomi eligieron un formato boutique donde el diseño floral y la iluminación ambiental crearon una atmósfera de ensueño.',
      testimony: 'Son lo mas!! Hicieron que todo sea mejor de lo que soñamos. Gracias por la dedicación.'
    },
    {
      id: '03',
      type: 'CORPORATIVO',
      title: 'WATCH PARTY MLS',
      venue: 'Music House',
      photographer: 'Karen Bogado',
      photographerUrl: 'https://www.instagram.com/karenbogadoph/',
      quoteStart: '"Nuestra marca cobró vida superando todos los ',
      quoteHighlight: 'estándares.',
      quoteEnd: '"',
      mediaType: 'image',
      placeholder: '/MLS%20Watch%20Party%20(6).jpg',
      thumbnails: ['/MLS%20Watch%20Party%20(1).jpg', '/MLS%20Watch%20Party%20(3).jpg', '/MLS%20Watch%20Party%20(5).jpg'],
      description: 'Organizamos una experiencia de marca de alto impacto para la MLS. Un evento que combinó networking estratégico, tecnología de punta y entretenimiento de primer nivel para fans y partners.',
      testimony: 'Excelente ejecución. La marca se lució y los invitados quedaron impactados por la puesta técnica.'
    },
    {
      id: '04',
      type: 'BODA',
      title: 'MICA & NICO',
      venue: 'Rincón de Pilar',
      photographer: 'Germán Dianez',
      photographerUrl: 'https://www.instagram.com/germandianez.ph/',
      quoteStart: '"Una celebración mágica en Rincón de Pilar donde el amor fue el único ',
      quoteHighlight: 'protagonista.',
      quoteEnd: '"',
      mediaType: 'image',
      placeholder: '/M&N-714.jpg',
      thumbnails: ['/M&N-24.jpg', '/M&N-41.jpg', '/M&N-889.jpg'],
      description: 'Una boda de gran escala en Rincón de Pilar que desafió los límites de la producción convencional. Con una puesta en escena teatral y una coordinación impecable de múltiples equipos, logramos una noche que fluyó con una energía imparable.',
      testimony: 'Equipo! Buen día, cómo andan?\nRecién paramos con Mica para almorzar y nos parece una gran oportunidad para agradecerles:\n\nGracias a todos por la increíble fiesta que tuvimos. Cómo dije, nunca se notó que fueran dos equipos, y eso se debe a lo profesionales que son todos. Podemos decir que fue la mejor noche de nuestras vidas.\n\nEspecial agradecimiento a @Julián Lettieri y @Sol Cusinato que sabemos que estás no son unas fiestas más. \nCómo dije en los votos, desde el cielo están todos celebrando.\n\nInfinitas gracias.\nMica y Nico'
    }
  ];

  const currentEvent = eventsList[currentEventIndex];

  const nextEvent = () => {
    setIsVideoPlaying(false);
    setCurrentEventIndex((prev) => (prev === eventsList.length - 1 ? 0 : prev + 1));
  };

  const prevEvent = () => {
    setIsVideoPlaying(false);
    setCurrentEventIndex((prev) => (prev === 0 ? eventsList.length - 1 : prev - 1));
  };

  return (
    <section className="bg-black py-20 relative border-t border-white/10" id="eventos">
      <div className="max-w-7xl mx-auto px-0 md:px-6 lg:px-8 flex flex-col md:flex-row">
        
        {/* Left Side: Large Image & Numbering */}
        <div className="w-full md:w-1/2 relative px-6 md:px-0 mb-12 md:mb-0">
          <div className="absolute top-10 -left-6 md:-left-12 opacity-30 pointer-events-none select-none z-0">
            <span 
              className="text-[10rem] md:text-[15rem] font-heading leading-none"
              style={{
                WebkitTextStroke: '1px rgba(255,255,255,0.5)',
                color: 'transparent'
              }}
            >
              {currentEvent.id}
            </span>
          </div>
          
          <div className="relative z-10 w-full aspect-[4/3] md:aspect-square mt-20 md:mt-10 overflow-hidden bg-black/50">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentEvent.id + (isVideoPlaying ? '-video' : '-img')}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full absolute inset-0"
              >
                {!isVideoPlaying ? (
                  <>
                    <img 
                      src={currentEvent.placeholder} 
                      alt={currentEvent.title}
                      className="w-full h-full object-cover"
                    />
                    {currentEvent.mediaType === 'video' && (
                      <div 
                        onClick={() => setIsVideoPlaying(true)}
                        className="absolute inset-0 flex flex-col items-center justify-center group cursor-pointer transition-all duration-300 hover:bg-black/20"
                      >
                        <div className="w-16 h-16 rounded-full border border-white flex items-center justify-center bg-black/30 group-hover:bg-[#00E56A] group-hover:border-[#00E56A] transition-colors duration-300">
                          <Play className="text-white group-hover:text-black ml-1" size={24} fill="currentColor" />
                        </div>
                        <span className="mt-4 text-[10px] font-bold tracking-widest text-white uppercase shadow-sm group-hover:text-[#00E56A]">Ver video con sonido</span>
                      </div>
                    )}
                  </>
                ) : (
                  <iframe 
                    className="w-full h-full absolute inset-0"
                    src={currentEvent.videoUrl} 
                    title={currentEvent.title} 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="mt-6 flex items-center justify-between px-6 md:px-0">
            <div className="flex items-center text-xs font-heading tracking-widest text-white">
              <span className="text-[#00E56A]">{currentEvent.id}</span>
              <span className="mx-2 text-gray-500">/</span>
              <span className="text-gray-500">0{eventsList.length}</span>
            </div>
            
            {/* Mobile Controls */}
            <div className="flex md:hidden items-center justify-between w-full mt-8 bg-white/5 p-4 rounded-lg border border-white/10">
              <button onClick={prevEvent} className="flex items-center space-x-2 text-gray-400 hover:text-[#00E56A]">
                <ChevronUp size={24} className="-rotate-90" />
                <span className="text-[10px] font-bold tracking-widest uppercase">Anterior</span>
              </button>
              <div className="text-[10px] tracking-[0.2em] text-gray-500 uppercase">Proyectos</div>
              <button onClick={nextEvent} className="flex items-center space-x-2 text-gray-400 hover:text-[#00E56A]">
                <span className="text-[10px] font-bold tracking-widest uppercase">Siguiente</span>
                <ChevronDown size={24} className="-rotate-90" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Details & Thumbnails */}
        <div className="w-full md:w-1/2 flex flex-col md:flex-row pl-0 md:pl-12 lg:pl-20 px-6 md:px-0">
          
          {/* Details */}
          <div className="flex-1 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentEvent.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-[10px] font-bold tracking-widest text-white uppercase flex flex-col mb-4">
                  <div className="flex items-center">
                    {currentEvent.type} <span className="text-[#00E56A] ml-2 text-lg">*</span>
                  </div>
                  {currentEvent.venue && (
                    <div className="text-gray-500 mt-1">{currentEvent.venue}</div>
                  )}
                </div>
                <h2 className="text-5xl md:text-7xl font-heading text-white mb-8">
                  {currentEvent.title}
                </h2>
                <div className="mb-12 relative max-w-sm">
                  <p className="font-sans text-xl md:text-2xl text-gray-300 leading-relaxed font-light italic">
                    {currentEvent.quoteStart}
                    <span className="font-script text-4xl md:text-5xl text-[#00E56A] mx-2 not-italic inline-block translate-y-1">
                      {currentEvent.quoteHighlight}
                    </span>
                    {currentEvent.quoteEnd}
                  </p>
                  {currentEvent.photographer && (
                    <div className="mt-4 text-[9px] tracking-widest text-gray-600 uppercase">
                      Ph: <a href={currentEvent.photographerUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#00E56A] transition-colors">{currentEvent.photographer}</a>
                    </div>
                  )}
                </div>
                
                <button 
                  onClick={() => setSelectedEventId(currentEvent.id)}
                  className="flex items-center text-xs font-semibold tracking-widest text-white group w-fit"
                >
                  <span className="border-b border-white/30 pb-1 group-hover:border-[#00E56A] transition-colors uppercase">
                    Ver proyecto completo
                  </span>
                  <ArrowRight size={16} className="ml-4 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Thumbnails Sidebar (Hidden on Mobile) */}
          <div className="hidden md:flex w-24 flex-col items-center justify-center space-y-4 ml-8 border-l border-white/10 pl-8 group/sidebar">
            <p className="text-[8px] tracking-[0.3em] text-gray-500 uppercase vertical-text mb-4 group-hover/sidebar:text-[#00E56A] transition-colors">Siguiente</p>
            <button onClick={prevEvent} className="text-gray-500 hover:text-[#00E56A] transition-colors mb-4">
              <ChevronUp size={24} />
            </button>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentEvent.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4 w-full"
              >
                {currentEvent.thumbnails.map((thumb, index) => (
                  <div 
                    key={index} 
                    onClick={nextEvent}
                    className={`w-full aspect-[4/3] overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 ${index === 0 ? 'opacity-100 border-2 border-[#00E56A]/50' : 'opacity-40 hover:opacity-100'}`}
                  >
                    <img src={thumb} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
            <button onClick={nextEvent} className="text-gray-500 hover:text-[#00E56A] transition-colors mt-4">
              <ChevronDown size={24} />
            </button>
          </div>

        </div>

      </div>

      {/* Modal View */}
      <AnimatePresence>
        {selectedEventId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/90 backdrop-blur-md"
          >
            {eventsList.filter(e => e.id === selectedEventId).map(event => (
              <motion.div
                key={`modal-${event.id}`}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="w-full max-w-5xl h-full max-h-[80vh] bg-[#0a0a0a] rounded-2xl overflow-hidden flex flex-col md:flex-row relative border border-white/10 shadow-2xl"
              >
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedEventId(null)}
                  className="absolute top-6 right-6 z-50 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-[#00E56A] hover:text-black transition-all border border-white/10"
                >
                  <X size={24} />
                </button>

                {/* Modal Content - Left: Image */}
                <div className="w-full md:w-1/2 h-64 md:h-full relative overflow-hidden bg-black">
                  <AnimatePresence mode="wait">
                    <motion.img 
                      key={activeModalImage}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      src={activeModalImage} 
                      alt={event.title} 
                      className="absolute inset-0 w-full h-full object-cover" 
                    />
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8">
                    <h3 className="text-4xl md:text-6xl font-heading text-white">{event.title}</h3>
                    <p className="text-[#00E56A] text-xs font-bold tracking-[0.3em] uppercase mt-2">{event.venue || 'MOMENTO ÚNICO'}</p>
                  </div>
                </div>

                {/* Modal Content - Right: Story */}
                <div className="w-full md:w-1/2 h-full overflow-y-auto p-8 md:p-12 flex flex-col custom-scrollbar">
                  <div className="mb-8">
                    <h4 className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-4">La Experiencia</h4>
                    <div className="w-12 h-[1px] bg-[#00E56A] mb-6" />
                    <p className="text-gray-300 font-light leading-relaxed text-sm md:text-base mb-10">
                      {event.description}
                    </p>

                    {event.testimony && (
                      <div className="mb-10 p-6 bg-white/5 rounded-2xl border-l-2 border-[#00E56A]">
                        <h4 className="text-[10px] font-bold tracking-[0.2em] text-[#00E56A] uppercase mb-4 italic">Testimonio</h4>
                        <p className="text-white font-sans text-sm italic leading-relaxed whitespace-pre-line">
                          "{event.testimony}"
                        </p>
                      </div>
                    )}

                    {/* Mini Gallery */}
                    <h4 className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-4">Explorá el evento</h4>
                    <div className="grid grid-cols-3 gap-2">
                      {[event.placeholder, ...event.thumbnails].map((thumb, i) => (
                        <div 
                          key={i} 
                          onClick={() => setActiveModalImage(thumb)}
                          className={`aspect-square rounded-lg overflow-hidden border cursor-pointer transition-all duration-300 ${activeModalImage === thumb ? 'border-[#00E56A] opacity-100' : 'border-white/5 opacity-50 hover:opacity-100'}`}
                        >
                          <img src={thumb} alt="Gallery" className="w-full h-full object-cover" loading="lazy" />
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-8 border-t border-white/5 flex flex-col space-y-4">
                    <div className="flex justify-between items-center text-[10px] tracking-widest uppercase">
                      <span className="text-gray-500">Categoría</span>
                      <span className="text-white">{event.type}</span>
                    </div>
                    {event.photographer && (
                      <div className="flex justify-between items-center text-[10px] tracking-widest uppercase">
                        <span className="text-gray-500">Fotografía</span>
                        <a href={event.photographerUrl} target="_blank" rel="noopener noreferrer" className="text-[#00E56A] hover:underline">
                          {event.photographer}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FeaturedEvents;
