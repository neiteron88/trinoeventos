import React from 'react';
import { motion } from 'framer-motion';
import { Play, MessageCircle, Mail, Send, Music, Video, Radio } from 'lucide-react';
import { Link } from 'react-router-dom';

import Sidebar from '../components/rafael/Sidebar';
import Services from '../components/rafael/Services';
import Works from '../components/rafael/Works';

const MasteringLanding = () => {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-accent selection:text-white">
      <Sidebar />
      
      {/* Minimal Nav con Redes Sociales */}
      <nav className="fixed w-full z-50 px-6 md:px-12 py-6 bg-black/50 backdrop-blur-md border-b border-white/5 flex justify-between items-center">
        <Link to="/" className="text-2xl font-black tracking-tighter hover:text-accent transition-colors">
          RF
        </Link>
        <div className="flex items-center gap-6">
          <div className="hidden sm:flex gap-4 items-center border-r border-white/20 pr-6">
            <a href="https://open.spotify.com/intl-es/artist/4Q8PShTPnCd1b0XmY1vPfN" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-accent transition-colors"><Music size={16} /></a>
            <a href="https://www.youtube.com/@rafafranH4Z4R" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-accent transition-colors"><Video size={16} /></a>
            <a href="#" className="text-white/40 hover:text-accent transition-colors"><Radio size={16} /></a>
          </div>
          <a href="#contacto" className="text-[10px] font-bold tracking-[0.2em] px-4 py-2 border border-white/20 rounded-full hover:border-accent hover:text-accent transition-all">
            CONTACTAR
          </a>
        </div>
      </nav>

      {/* Hero Section (Aesthetic Matched to Main Site) */}
      <section className="relative h-screen w-full flex items-center pt-20 overflow-hidden bg-black">
        {/* ── Photo Background Exact Copy from Hero.jsx ── */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero_studio_final_v2.jpg"
            alt="Rafael Franceschelli Mastering"
            className="w-full h-full object-cover opacity-80 object-[30%_20%] scale-[1.2] translate-x-[10%] md:object-[left_45%] md:scale-[1.15] md:translate-x-[10%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/20 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 md:to-transparent"></div>
        </div>

        <div className="w-full px-6 md:px-16 lg:px-24 relative z-10 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <p className="text-[10px] font-bold tracking-[0.4em] text-accent mb-6 uppercase">
              ESTUDIO TOMA 33
            </p>
            <h1 className="max-w-2xl text-[11vw] md:text-7xl lg:text-7xl font-black leading-[0.9] tracking-tighter mb-8">
              LLEVÁ TU MÚSICA <br />
              AL <span 
                className="text-transparent inline-block backdrop-blur-[2px] bg-white/[0.01] rounded-lg glitch-effect"
                style={{
                  WebkitTextStroke: '2px #7c3aed',
                  textShadow: '0 0 30px rgba(124,58,237,0.4)'
                }}
              >ESTÁNDAR</span> <br />
              <span className="text-white">PROFESIONAL.</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl font-medium max-w-2xl leading-relaxed mb-12">
              Desarrollo integral desde la preproducción hasta el master final. Sonido con identidad, potencia y claridad, listo para destacar en todas las plataformas.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <a href="#contacto" className="w-full sm:w-auto px-10 py-5 bg-accent text-white font-bold tracking-[0.3em] text-[10px] text-center hover:bg-white hover:text-black transition-all">
                COTIZAR PROYECTO
              </a>
              <a href="#servicios" className="w-full sm:w-auto px-10 py-5 border border-white/20 text-white font-bold tracking-[0.3em] text-[10px] text-center hover:border-accent hover:text-accent transition-all">
                VER SERVICIOS
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Servicios Reutilizado */}
      <Services />

      {/* The Studio */}
      <section className="py-24 bg-surface border-t border-b border-white/5 relative z-10">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8">EL ESTUDIO. <br/><span className="text-white/30">LA TRAYECTORIA.</span></h2>
              <p className="text-white/60 leading-relaxed mb-6 text-lg">
                Producción, mezcla y mastering en el estudio <strong>Toma 33</strong>. Ganador del premio <strong>Carlos Gardel (2018)</strong> por el disco <em>Elite</em> de Baltasar Comotto (Productor, Ing. de Mezcla y Bajista).
              </p>
              <p className="text-white/60 leading-relaxed mb-6 text-lg">
                Fundador de los sellos discográficos <strong>Boomtrak Records</strong> y <strong>Untren Records</strong>. Docente titular en la <strong>Universidad de Palermo</strong> en Diseño Audiovisual y Creación Sonora.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div>
                  <p className="text-3xl font-black text-accent mb-2">25+</p>
                  <p className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">Años de Trayectoria</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-accent mb-2">50+</p>
                  <p className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">Artistas Producidos</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
               <img src="/rafael_studio_new3.jpg" alt="Studio Gear" className="rounded-sm w-full h-full object-cover aspect-[4/5] opacity-80" />
               <img src="/rafael_studio_synth.jpg" alt="Synthesizers" className="rounded-sm w-full h-full object-cover aspect-[4/5] opacity-80 mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Trabajos Destacados Reutilizado */}
      <div className="relative z-10 bg-black">
        <Works />
      </div>

      {/* Final CTA Footer */}
      <footer id="contacto" className="bg-surface pt-24 pb-12 border-t border-white/5 relative overflow-hidden z-10">
        {/* Visualizer bg */}
        <div className="absolute bottom-0 left-0 w-full flex items-end gap-1 h-32 opacity-5 pointer-events-none">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ height: [10, Math.random() * 100 + 20, 10] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.05 }}
                className="flex-1 bg-accent"
              ></motion.div>
            ))}
        </div>

        <div className="container-custom relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8">
            ¿LISTO PARA QUE TU DISCO <br className="hidden md:block" /> SUENE INCREÍBLE?
          </h2>
          <p className="text-white/50 text-lg mb-16 max-w-2xl mx-auto">
            Contame sobre tu proyecto, las referencias sonoras que tenés en mente y armamos un plan de trabajo y presupuesto a medida.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-32">
             <a 
              href="https://wa.me/5491140624145" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-5 bg-accent text-white font-bold tracking-[0.3em] text-[10px] flex items-center justify-center gap-4 hover:bg-white hover:text-black transition-all"
            >
              <MessageCircle size={18} /> ESCRIBIR AL WHATSAPP
            </a>
            <a 
              href="mailto:rafainternacional@gmail.com" 
              className="w-full sm:w-auto px-10 py-5 border border-white/20 text-white font-bold tracking-[0.3em] text-[10px] flex items-center justify-center gap-4 hover:border-accent hover:text-accent transition-all"
            >
              <Mail size={18} /> ENVIAR EMAIL
            </a>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
            <Link to="/" className="text-2xl font-black tracking-tighter hover:text-accent transition-colors">
              RF
            </Link>
            <p className="text-[10px] font-bold text-white/20 tracking-widest uppercase">
              © 2026 Rafael Franceschelli. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MasteringLanding;
