import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Un músico completo, un productor brillante y una gran persona.",
    author: "BALTASAR COMOTTO"
  },
  {
    quote: "Rafa is a world class musician and producer. So much groove and taste.",
    author: "COLABORADOR INTERNACIONAL"
  }
];

const Testimonials = () => {
  return (
    <section className="py-32 bg-black border-t border-white/5">
      <div className="container-custom">
        <div className="mb-20">
          <p className="text-[10px] font-bold tracking-[0.4em] text-accent mb-4 uppercase">Palabras de quienes trabajaron conmigo</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {testimonials.map((test, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-8 group"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-accent transition-colors flex-shrink-0">
                <img src="/testimonials.png" alt={test.author} className="w-full h-full object-cover filter grayscale" />
              </div>
              <div className="max-w-xs">
                <p className="text-sm italic text-white/60 mb-4 leading-relaxed">
                  "{test.quote}"
                </p>
                <h4 className="text-[10px] font-bold tracking-[0.2em] text-white uppercase">{test.author}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
