import React from 'react';
import { MessageCircle, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { TrinologoWordmark, TrinologoIcon } from '../ui/TrinologoLogo';

const Footer = () => {
  return (
    <footer className="relative bg-black" id="contacto">
      {/* CTA Section */}
      <div className="relative py-32 px-6 lg:px-8 border-t border-white/10 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#000511]/80 mix-blend-multiply z-10" />
          <img 
            src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop" 
            alt="Concert lights" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-20 flex flex-col md:flex-row items-center justify-between">
          
          <div className="mb-12 md:mb-0 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-heading text-white flex flex-col md:flex-row md:items-center">
              ¿TENÉS ALGO EN MENTE? 
              <span className="font-script text-[#00E56A] lowercase text-5xl md:text-6xl md:ml-6 mt-4 md:mt-0 font-normal">
                Hablemos
              </span>
            </h2>
          </div>

          <div className="flex flex-col space-y-4 w-full md:w-auto">
            <a 
              href="https://wa.me/5491130668588?text=Hola,%20quería%20averiguar%20por%20un%20evento%20para%20hacer%20el%20día........" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full md:w-auto px-8 py-4 bg-[#00E56A] text-black text-[10px] font-bold tracking-widest uppercase flex items-center justify-center hover:bg-white transition-colors duration-300"
            >
              <MessageCircle size={16} className="mr-3" />
              Escribir por Whatsapp
            </a>
            <button className="w-full md:w-auto px-8 py-4 bg-transparent border border-white text-white text-[10px] font-bold tracking-widest uppercase flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300">
              <Calendar size={16} className="mr-3" />
              Agendar una llamada
            </button>
          </div>

        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-[#050505] py-12 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
          
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <span style={{ fontFamily: "'Satoshi', 'Inter', sans-serif", fontWeight: 900, fontSize: 28, color: '#00E56A', letterSpacing: '-1px', lineHeight: 1 }}>
              trino
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 text-[10px] font-bold tracking-widest text-gray-400 uppercase">
            <div className="flex space-x-6 md:space-x-8">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">Pinterest</a>
              <a href="#" className="hover:text-white transition-colors">Tiktok</a>
            </div>
            <div className="hidden md:block w-[1px] h-4 bg-gray-700 mx-8"></div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8 mt-4 md:mt-0">
              <a href="mailto:hola@trino.com.ar" className="hover:text-white transition-colors lowercase tracking-normal font-medium text-xs">
                organiza.trino@gmail.com
              </a>
              <span className="text-gray-500">Buenos Aires, ARG.</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-[10px] text-gray-600 tracking-wider">
            © 2026 trino
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
