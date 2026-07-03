import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';

const Navbar = ({ lang, setLang }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = {
    ES: [
      { name: 'INICIO', href: '#inicio' },
      { name: 'TRAYECTORIA', href: '#trayectoria' },
      { name: 'ESTUDIO', href: '#estudio' },
      { name: 'SERVICIOS', href: '#servicios' },
      { name: 'TRABAJOS', href: '#trabajos' },
      { name: 'SESIONES', href: '#sesiones' },
      { name: 'CONTACTO', href: '#contacto' },
    ],
    EN: [
      { name: 'HOME', href: '#inicio' },
      { name: 'CAREER', href: '#trayectoria' },
      { name: 'STUDIO', href: '#estudio' },
      { name: 'SERVICES', href: '#servicios' },
      { name: 'WORKS', href: '#trabajos' },
      { name: 'SESSIONS', href: '#sesiones' },
      { name: 'CONTACT', href: '#contacto' },
    ]
  };

  const currentLinks = navLinks[lang];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/5">
      <div className="container-custom py-6 flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-tighter"
        >
          RF
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-8 items-center">
          {currentLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="text-xs font-semibold tracking-[0.2em] text-white/70 hover:text-accent transition-colors"
              whileHover={{ y: -2 }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Language & Mobile Toggle */}
        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-2 text-[10px] font-bold tracking-widest text-white/50">
            <span 
              onClick={() => setLang('ES')}
              className={`${lang === 'ES' ? 'text-white' : 'hover:text-white'} cursor-pointer transition-colors`}
            >ES</span>
            <span>/</span>
            <span 
              onClick={() => setLang('EN')}
              className={`${lang === 'EN' ? 'text-white' : 'hover:text-white'} cursor-pointer transition-colors`}
            >EN</span>
          </div>
          
          <button 
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-black z-40 flex flex-col p-8 pt-24 gap-8"
          >
            {currentLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-3xl font-bold tracking-tighter border-b border-white/10 pb-4"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="mt-auto flex gap-4 text-sm font-bold">
              <span 
                onClick={() => setLang('ES')}
                className={lang === 'ES' ? 'text-accent' : ''}
              >ES</span>
              <span className="text-white/30">/</span>
              <span 
                onClick={() => setLang('EN')}
                className={lang === 'EN' ? 'text-accent' : ''}
              >EN</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
