import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Music, Video, Radio } from 'lucide-react';

const Sidebar = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [activeSection, setActiveSection] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollPos / height;
      
      if (progress < 0.2) setActiveSection(1);
      else if (progress < 0.4) setActiveSection(2);
      else if (progress < 0.6) setActiveSection(3);
      else if (progress < 0.8) setActiveSection(4);
      else setActiveSection(5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Left Sidebar - Socials */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-8"
      >
        <a href="https://open.spotify.com/intl-es/artist/4Q8PShTPnCd1b0XmY1vPfN" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-accent transition-colors"><Music size={20} /></a>
        <a href="https://www.youtube.com/@rafafranH4Z4R" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-accent transition-colors"><Video size={20} /></a>
        <a href="#" className="text-white/40 hover:text-accent transition-colors"><Radio size={20} /></a>
      </motion.div>

      {/* Right Sidebar - Pagination */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-6"
      >
        <motion.span className="text-[10px] font-bold text-white mb-2 tracking-widest">
          {activeSection.toString().padStart(2, '0')}
        </motion.span>
        <div className="flex flex-col gap-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <motion.div 
              key={i}
              animate={{ 
                scale: activeSection === i ? 1.5 : 1,
                backgroundColor: activeSection === i ? "#9B30FF" : "rgba(255,255,255,0.2)"
              }}
              className="w-1.5 h-1.5 rounded-full cursor-pointer"
            ></motion.div>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator with progress bar */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-12 right-8 z-40 hidden xl:flex flex-col items-center gap-4"
      >
        <span className="text-[8px] font-bold tracking-[0.3em] uppercase vertical-text">Scroll</span>
        <div className="relative w-[1px] h-24 bg-white/10">
          <motion.div 
            style={{ scaleY }}
            className="absolute top-0 left-0 w-full bg-accent origin-top"
          ></motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
