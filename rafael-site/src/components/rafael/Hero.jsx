import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const Hero = ({ lang }) => {
  const content = {
    ES: {
      role: "Productor • Bajista • Ingeniero de Sonido",
      tagline: "Música. Tecnología. Emoción.",
      description: "Más de 25 años creando, grabando y produciendo música junto a los más grandes artistas.",
      button: "VER SHOWREEL"
    },
    EN: {
      role: "Producer • Bassist • Sound Engineer",
      tagline: "Music. Technology. Emotion.",
      description: "Over 25 years creating, recording and producing music alongside the greatest artists.",
      button: "WATCH SHOWREEL"
    }
  };

  const { role, tagline, description, button } = content[lang];

  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden bg-black flex items-center">

      {/* ── Photo Background ── */}
      <div className="absolute inset-0 z-0">
        {/* On mobile, center the image. On PC, object-left pushes the image right so the face is on the right */}
        <img
          src="/hero_studio_final_v2.jpg"
          alt="Rafael Franceschelli"
          className="w-full h-full object-cover opacity-80 object-[30%_20%] scale-[1.2] translate-x-[10%] md:object-[left_45%] md:scale-[1.15] md:translate-x-[10%]"
        />
        {/* Gradient fades out earlier so it doesn't cover his face on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 md:to-transparent"></div>
      </div>

      {/* ── Text content ── */}
      <div className="w-full px-6 md:px-16 lg:px-24 relative z-10 pt-20">
        <div className="max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[10px] font-bold tracking-[0.5em] text-white/60 mb-6 uppercase"
          >
            {role}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[14vw] md:text-8xl lg:text-9xl xl:text-[9rem] font-bold leading-[0.85] tracking-tighter mb-8"
          >
            RAFA <br />
            <span className="text-white">FRAN</span><br />
            <span
              className="text-transparent inline-block backdrop-blur-[2px] bg-white/[0.01] rounded-lg glitch-effect"
              style={{
                WebkitTextStroke: '2px #7c3aed',
                textShadow: '0 0 30px rgba(124,58,237,0.4)'
              }}
            >CESCHELLI</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-accent font-bold tracking-[0.3em] text-sm md:text-base mb-12 uppercase"
          >
            {tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-white/40 text-sm md:text-lg max-w-lg mb-12 font-medium leading-relaxed"
          >
            {description}
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-6 group"
          >
            <span className="text-[10px] font-bold tracking-[0.4em] text-white/80 group-hover:text-accent transition-colors">
              {button}
            </span>
            <div className="relative flex items-center justify-center w-12 h-12">
              <div className="absolute inset-0 border border-white/20 rounded-full group-hover:border-accent transition-colors duration-500"></div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-t border-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              ></motion.div>
              <Play size={12} className="fill-white text-white group-hover:text-accent transition-colors" />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Visualizer Bars */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-end gap-1.5 h-16 pointer-events-none opacity-40">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ height: [10, Math.random() * 60 + 10, 15, Math.random() * 40 + 5, 10] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.05 }}
            className="w-[2px] bg-accent/60 rounded-full"
          ></motion.div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
