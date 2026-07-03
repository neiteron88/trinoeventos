import React from 'react';
import { motion } from 'framer-motion';
import { Music, Video, Radio, MessageCircle, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contacto" className="bg-black pt-32 pb-12 border-t border-white/5">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-20 mb-32">
          {/* Logo & Manifesto */}
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-bold tracking-tighter mb-8">RF</h2>
            <p className="text-[10px] font-bold text-white/40 leading-loose tracking-[0.2em] uppercase">
              SONIDO CON HISTORIA. <br />
              MÚSICA CON PROPÓSITO. <br />
              TECNOLOGÍA AL SERVICIO <br />
              DE LA EMOCIÓN.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <p className="text-[10px] font-bold tracking-[0.4em] text-accent mb-8 uppercase">Contacto</p>
            <div className="flex flex-col gap-4 text-xs font-semibold text-white/60">
              <a href="mailto:rafainternacional@gmail.com" className="hover:text-white transition-colors">rafainternacional@gmail.com</a>
              <a href="tel:+5491140624145" className="hover:text-white transition-colors">+54 9 11 4062-4145</a>
              <p>Buenos Aires, Argentina</p>
            </div>
          </div>

          {/* Connect */}
          <div>
            <p className="text-[10px] font-bold tracking-[0.4em] text-accent mb-8 uppercase">Conectemos</p>
            <div className="flex flex-col gap-6">
              <a href="https://open.spotify.com/intl-es/artist/4Q8PShTPnCd1b0XmY1vPfN" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-xs font-bold text-white/40 hover:text-white transition-colors">
                <Music size={18} /> Instagram
              </a>
              <a href="https://www.youtube.com/@rafafranH4Z4R" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-xs font-bold text-white/40 hover:text-white transition-colors">
                <Video size={18} /> YouTube
              </a>
              <a href="https://open.spotify.com/intl-es/artist/4Q8PShTPnCd1b0XmY1vPfN" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-xs font-bold text-white/40 hover:text-white transition-colors">
                <Radio size={18} /> Spotify
              </a>
            </div>
          </div>

          {/* CTA */}
          <div>
            <p className="text-[10px] font-bold tracking-[0.4em] text-accent mb-8 uppercase">Agenda tu sesión</p>
            <a 
              href="https://wa.me/5491140624145" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-4 px-6 border border-white/10 rounded-sm flex items-center justify-between group hover:border-accent hover:bg-accent/5 transition-all"
            >
              <span className="text-[10px] font-bold tracking-[0.3em]">ESCRIBIR POR WHATSAPP</span>
              <MessageCircle size={20} className="text-accent" />
            </a>
          </div>
        </div>

        {/* Contact Form for Mobile/Extended */}
        <div className="max-w-4xl mx-auto mb-32 bg-surface p-8 lg:p-12 rounded-sm border border-white/5">
           <h3 className="text-3xl font-bold tracking-tighter mb-12">HABLEMOS DE TU <br /> PRÓXIMO PROYECTO.</h3>
           <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <input type="text" placeholder="Nombre y Apellido" className="bg-transparent border-b border-white/10 py-4 text-sm focus:border-accent outline-none transition-colors" />
              <input type="email" placeholder="Correo electrónico" className="bg-transparent border-b border-white/10 py-4 text-sm focus:border-accent outline-none transition-colors" />
              <input type="text" placeholder="Asunto" className="md:col-span-2 bg-transparent border-b border-white/10 py-4 text-sm focus:border-accent outline-none transition-colors" />
              <textarea placeholder="Mensaje" rows="4" className="md:col-span-2 bg-transparent border-b border-white/10 py-4 text-sm focus:border-accent outline-none transition-colors resize-none"></textarea>
              <button className="md:col-span-2 py-6 bg-accent text-white font-bold tracking-[0.5em] text-[10px] flex items-center justify-center gap-4 group hover:bg-accent-dark transition-colors">
                ENVIAR <Send size={14} className="group-hover:translate-x-2 transition-transform" />
              </button>
           </form>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
          <p className="text-[10px] font-bold text-white/20 tracking-widest uppercase">
            © 2025 Rafael Franceschelli. Todos los derechos reservados.
          </p>

          {/* Visualizer Bars (Small) */}
          <div className="flex items-end gap-1 h-8 opacity-20">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ height: [4, Math.random() * 20 + 4, 6] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                className="w-[1.5px] bg-accent rounded-full"
              ></motion.div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
