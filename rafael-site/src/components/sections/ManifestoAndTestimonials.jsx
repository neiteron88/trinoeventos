import React from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ManifestoAndTestimonials = () => {
  const testimonials = [
    {
      quote: "J&A entendió perfectamente cómo alinear nuestro evento con los estándares globales de la MLS. Su nivel de profesionalismo, atención al detalle y ejecución es verdaderamente de primer nivel.",
      author: "- GABRIEL GABOR (MLS)",
    },
    {
      quote: "Son lo mas!! Gracias por ponerse el evento al hombro y hacer que sea mejor que lo que soñamos 💗 Son un equipazo.",
      author: "- LU",
    },
    {
      quote: "Gracias por hacernos pasar la mejor noche de nuestras vidas. De verdad estuvo todo hermoso y salió todo como lo planeado y mejor aún.",
      author: "- TOMI",
    },
  ];

  return (
    <section className="bg-black text-white relative" id="manifiesto">
      <div className="flex flex-col lg:flex-row min-h-[600px]">
        
        {/* Left Side: Manifesto */}
        <div className="w-full lg:w-1/2 flex flex-col md:flex-row relative">
          {/* Photo */}
          <div className="w-full md:w-1/2 aspect-[3/4] md:aspect-auto h-[500px] md:h-full relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 md:hidden" />
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-black/90 z-10 hidden md:block" />
             <img 
               src="/LU%20&%20TOMI%20RESUMEN%20(256).JPG" 
               alt="Julián Lettieri" 
               className="w-full h-full object-cover scale-[1.3] origin-[60%_35%]"
             />
          </div>
          
          {/* Content */}
          <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-20 bg-black/80 md:bg-transparent -mt-20 md:mt-0">
            <h2 className="text-[10px] font-bold tracking-widest text-white uppercase flex items-center mb-6">
              NUESTRO MANIFIESTO <span className="text-[#ccff00] text-lg ml-2">*</span>
            </h2>
            <p className="font-script text-3xl md:text-4xl text-gray-200 mb-6 leading-tight">
              Creemos en los detalles <br className="hidden md:block"/> que nadie ve, pero <br className="hidden md:block"/> todos sienten.
            </p>
            <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed mb-8 max-w-md">
              Con más de dos décadas de trayectoria en la industria de los eventos, he explorado cada ángulo de esta pasión. J&A nace de esa experiencia acumulada, transformando la creatividad en nuestro motor y la precisión técnica en nuestra firma.
              <br /><br />
              Cada experiencia que diseñamos es un tributo a la excelencia y un compromiso con el legado que Anto Martín sembró: la convicción de que los grandes momentos merecen ser perfectos.
            </p>
            <div className="mb-10">
              <p className="text-[#ccff00] font-script text-4xl md:text-5xl leading-none">Julián Lettieri</p>
              <p className="text-[10px] tracking-[0.3em] text-gray-500 uppercase mt-2">Director & Founder</p>
            </div>
            <a href="#historia" className="flex items-center text-xs font-semibold tracking-widest text-white group w-fit">
              <span className="border-b border-white/30 pb-1 group-hover:border-[#ccff00] transition-colors uppercase">
                Conocer nuestra historia
              </span>
              <ArrowRight size={16} className="ml-4 text-[#ccff00] group-hover:translate-x-1 transition-all" />
            </a>
          </div>
        </div>

        {/* Right Side: Testimonials */}
        <div className="w-full lg:w-1/2 bg-[#0a0a0a] p-8 md:p-16 lg:p-20 flex flex-col border-t lg:border-t-0 lg:border-l border-white/10 relative">
          
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-[10px] font-bold tracking-widest text-white uppercase flex items-center">
              LO QUE DICEN <span className="text-[#ccff00] text-lg ml-2">*</span>
            </h2>
            <div className="flex space-x-4">
              <button className="text-gray-500 hover:text-white transition-colors">
                <ChevronLeft size={20} />
              </button>
              <button className="text-gray-500 hover:text-white transition-colors">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-auto h-full">
            {testimonials.map((test, index) => (
              <div key={index} className="flex flex-col">
                <span className="font-heading text-6xl text-gray-800 leading-none mb-4">“</span>
                <p className="text-sm text-gray-300 font-light leading-relaxed mb-6 flex-1">
                  "{test.quote}"
                </p>
                <span className="text-[10px] font-bold tracking-widest text-white uppercase border-t border-white/10 pt-4 mt-auto">
                  {test.author}
                </span>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center space-x-2 mt-12 md:hidden">
             <div className="w-1.5 h-1.5 rounded-full bg-[#ccff00]"></div>
             <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
             <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
             <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ManifestoAndTestimonials;
