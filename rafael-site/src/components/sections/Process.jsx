import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Process = () => {
  const steps = [
    {
      number: '1.',
      title: 'ESCUCHAMOS',
      description: 'Entendemos tu historia, tus ideas y lo que querés sentir.',
    },
    {
      number: '2.',
      title: 'CREAMOS',
      description: 'Diseñamos una propuesta hecha a medida para vos.',
    },
    {
      number: '3.',
      title: 'PRODUCIMOS',
      description: 'Nos encargamos de todo para que vos no tengas que preocuparte por nada.',
    },
    {
      number: '4.',
      title: 'VIVÍS',
      description: 'Llegás, disfrutás y te llevás recuerdos que duran para siempre.',
    },
  ];

  return (
    <section className="bg-[#f2f2f2] text-black py-24" id="proceso">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row">
        
        {/* Left Header */}
        <div className="w-full lg:w-1/3 pr-0 lg:pr-12 mb-16 lg:mb-0">
          <h2 className="text-3xl md:text-4xl font-heading flex items-center mb-6">
            ASÍ TRABAJAMOS <span className="text-[#aaff00] text-2xl ml-2 font-sans">*</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base font-light max-w-xs mb-10">
            Un proceso creativo, ordenado y obsesionado con los detalles.
          </p>
          <a href="#proceso-detalle" className="flex items-center text-xs font-semibold tracking-widest text-black group w-fit">
            <span className="border-b border-black/30 pb-1 group-hover:border-black transition-colors uppercase">
              Conocer más
            </span>
            <ArrowRight size={16} className="ml-4 text-gray-500 group-hover:text-black group-hover:translate-x-1 transition-all" />
          </a>
        </div>

        {/* Right Steps Grid */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-[1px] border-t border-dashed border-gray-300 z-0"></div>

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative z-10 flex flex-col md:items-center text-left md:text-center"
            >
              <div className="bg-[#f2f2f2] md:px-2 inline-block mb-6 md:mb-8">
                <span className="font-script text-5xl md:text-6xl text-black inline-block">
                  {step.number}
                </span>
              </div>
              <h3 className="text-[10px] font-bold tracking-widest text-black uppercase mb-3">
                {step.title}
              </h3>
              <p className="text-xs text-gray-600 font-light leading-relaxed max-w-[200px] md:mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;
