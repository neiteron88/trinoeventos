import React, { useState } from 'react';
import { ArrowRight, ChevronUp, ChevronDown, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FeaturedEvents = () => {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const eventsList = [
    {
      id: '01',
      type: 'BODA',
      title: 'GUADA & NAHUE',
      quoteStart: '"Una noche inolvidable que superó todas nuestras ',
      quoteHighlight: 'expectativas.',
      quoteEnd: '"',
      mediaType: 'video',
      videoUrl: 'https://www.youtube.com/embed/0YaUJyE8bdI?autoplay=1',
      placeholder: '/G&N-552.jpg',
      thumbnails: ['/G&N-142.jpg', '/G&N-479.jpg', '/G&N-693.jpg']
    },
    {
      id: '02',
      type: 'BODA ÍNTIMA',
      title: 'LU & TOMI',
      quoteStart: '"Son lo mas!! Hicieron que todo sea mejor de lo que ',
      quoteHighlight: 'soñamos.',
      quoteEnd: '"',
      mediaType: 'image',
      placeholder: '/LU%20&%20TOMI%20RESUMEN%20(271).JPG',
      thumbnails: ['/LU%20&%20TOMI%20(1544).JPG', '/LU%20&%20TOMI%20(898).JPG', '/LU%20&%20TOMI%20(725).JPG']
    },
    {
      id: '03',
      type: 'CORPORATIVO',
      title: 'WATCH PARTY MLS',
      quoteStart: '"Nuestra marca cobró vida superando todos los ',
      quoteHighlight: 'estándares.',
      quoteEnd: '"',
      mediaType: 'image',
      placeholder: '/MLS%20Watch%20Party%20(6).jpg',
      thumbnails: ['/MLS%20Watch%20Party%20(1).jpg', '/MLS%20Watch%20Party%20(3).jpg', '/MLS%20Watch%20Party%20(5).jpg']
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
                        <div className="w-16 h-16 rounded-full border border-white flex items-center justify-center bg-black/30 group-hover:bg-[#ccff00] group-hover:border-[#ccff00] transition-colors duration-300">
                          <Play className="text-white group-hover:text-black ml-1" size={24} fill="currentColor" />
                        </div>
                        <span className="mt-4 text-[10px] font-bold tracking-widest text-white uppercase shadow-sm group-hover:text-[#ccff00]">Ver video con sonido</span>
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
              <span className="text-[#ccff00]">{currentEvent.id}</span>
              <span className="mx-2 text-gray-500">/</span>
              <span className="text-gray-500">0{eventsList.length}</span>
            </div>
            
            {/* Mobile Controls */}
            <div className="flex md:hidden items-center justify-between w-full mt-8 bg-white/5 p-4 rounded-lg border border-white/10">
              <button onClick={prevEvent} className="flex items-center space-x-2 text-gray-400 hover:text-[#ccff00]">
                <ChevronUp size={24} className="-rotate-90" />
                <span className="text-[10px] font-bold tracking-widest uppercase">Anterior</span>
              </button>
              <div className="text-[10px] tracking-[0.2em] text-gray-500 uppercase">Proyectos</div>
              <button onClick={nextEvent} className="flex items-center space-x-2 text-gray-400 hover:text-[#ccff00]">
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
                <div className="text-[10px] font-bold tracking-widest text-white uppercase flex items-center mb-4">
                  {currentEvent.type} <span className="text-[#ccff00] ml-2 text-lg">*</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-heading text-white mb-8">
                  {currentEvent.title}
                </h2>
                <div className="mb-12 relative max-w-sm">
                  <p className="font-script text-3xl md:text-4xl text-gray-300 leading-relaxed">
                    {currentEvent.quoteStart}
                    <span className="relative text-white z-10 inline-block">
                      {currentEvent.quoteHighlight}
                      <svg className="absolute -inset-2 w-[120%] h-[150%] text-[#ccff00] -z-10" viewBox="0 0 100 50" preserveAspectRatio="none">
                        <path d="M10,25 C10,10 50,5 90,25 C130,45 50,45 10,25" fill="none" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    </span>
                    {currentEvent.quoteEnd}
                  </p>
                </div>
                
                <a href="#proyecto" className="flex items-center text-xs font-semibold tracking-widest text-white group w-fit">
                  <span className="border-b border-white/30 pb-1 group-hover:border-white transition-colors uppercase">
                    Ver proyecto completo
                  </span>
                  <ArrowRight size={16} className="ml-4 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Thumbnails Sidebar (Hidden on Mobile) */}
          <div className="hidden md:flex w-24 flex-col items-center justify-center space-y-4 ml-8 border-l border-white/10 pl-8 group/sidebar">
            <p className="text-[8px] tracking-[0.3em] text-gray-500 uppercase vertical-text mb-4 group-hover/sidebar:text-[#ccff00] transition-colors">Siguiente</p>
            <button onClick={prevEvent} className="text-gray-500 hover:text-[#ccff00] transition-colors mb-4">
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
                    className={`w-full aspect-[4/3] overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 ${index === 0 ? 'opacity-100 border-2 border-[#ccff00]/50' : 'opacity-40 hover:opacity-100'}`}
                  >
                    <img src={thumb} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
            <button onClick={nextEvent} className="text-gray-500 hover:text-[#ccff00] transition-colors mt-4">
              <ChevronDown size={24} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FeaturedEvents;
