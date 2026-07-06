import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Play, Users, MapPin, Camera, Video, Mic, Clock, Zap, MonitorPlay } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const FadeIn = ({ children, delay = 0, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10%" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

const Corporate = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#050505] min-h-screen font-sans selection:bg-[#00E56A] selection:text-black">
      <Navbar />
      
      {/* SECTION 1: FULL SCREEN HERO */}
      <section className="relative h-screen flex flex-col justify-end pb-24 px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent z-10" />
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src="/MLS Watch Party (6).jpg" 
            alt="MLS Event in Buenos Aires" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        
        <div className="relative z-20 max-w-5xl">
          <FadeIn>
            <span className="text-[9px] md:text-[11px] font-bold tracking-[0.4em] text-[#00E56A] uppercase mb-8 block opacity-80">
              CASE STUDY · MAJOR LEAGUE SOCCER
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl leading-[1.15] font-heading text-white mb-10 tracking-tight">
              Por qué la MLS <span className="text-white/40">(Major League Soccer)</span> eligió a <span className="text-[#00E56A]">TRINO</span> para producir su experiencia oficial en Buenos Aires.
            </h1>
          </FadeIn>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <FadeIn delay={0.2} className="max-w-2xl">
              <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed">
                La MLS <span className="text-white/50">(Major League Soccer)</span> convocó a <span className="text-white font-medium">TRINO</span> para producir su experiencia oficial en Buenos Aires. El desafío era reunir a periodistas, jugadores, influencers, celebridades, representantes de clubes e invitados estratégicos en un evento alineado con sus estándares globales.
                <br /><br />
                <span className="text-white/70 font-medium">No había margen para el error.</span>
              </p>
            </FadeIn>
            
            <FadeIn delay={0.4} className="shrink-0 flex flex-col items-start md:items-end gap-6">
              <a href="#historia" className="inline-flex items-center space-x-4 text-white hover:text-[#00E56A] transition-colors group">
                <span className="text-sm font-semibold tracking-[0.2em] uppercase">Descubrí la historia</span>
                <span className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center group-hover:border-[#00E56A]">
                  <ArrowRight size={16} className="transform rotate-90" />
                </span>
              </a>
              <div className="text-left md:text-right">
                <span className="text-[10px] text-gray-500 uppercase tracking-widest block mb-1">↓</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest block">Tiempo de lectura: 2 minutos</span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 2: SOCIAL PROOF */}
      <section className="py-24 border-b border-white/10" id="historia">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <h3 className="text-[10px] font-bold tracking-[0.3em] text-white/50 uppercase mb-16 text-center">
              Organizaciones que confiaron en TRINO.
            </h3>
          </FadeIn>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {[
              { name: 'MLS', file: '/logos/mls.png' },
              { name: 'Ledesma', file: '/logos/ledesma.png' },
              { name: 'Clínicas Bermejo', file: '/logos/bermejo.png' },
              { name: 'River Plate', file: '/logos/river.png' },
              { name: 'Lidherma', file: '/logos/lidherma.png' },
            ].map((brand, i) => (
              <FadeIn key={brand.name} delay={i * 0.1}>
                <div className="h-20 md:h-24 w-32 md:w-40 flex items-center justify-center bg-white/[0.04] rounded-xl border border-white/5 px-4 hover:bg-white/[0.08] transition-all duration-500">
                  <img
                    src={brand.file}
                    alt={brand.name}
                    className="max-h-12 md:max-h-16 max-w-full w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: EL DESAFÍO */}
      <section className="py-32 md:py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
            <div>
              <FadeIn>
                <h2 className="text-[10px] font-bold tracking-[0.3em] text-white uppercase mb-12">El desafío.</h2>
                <div className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed space-y-8">
                  <p>La Major League Soccer requería establecer su presencia institucional en Argentina a través de un evento de alto perfil.</p>
                  <p className="text-white text-2xl md:text-3xl font-normal">El mandato era estricto: representar los estándares internacionales de la liga en cada punto de contacto.</p>
                  
                  <div className="pt-8 pb-8">
                    <p className="text-xl md:text-2xl text-white font-normal mb-8">
                      La convocatoria reunió actores clave del ecosistema del fútbol argentino:
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 text-lg text-gray-300 font-light list-none pl-0">
                      <li className="flex items-center space-x-4">
                        <span className="text-[#00E56A] text-2xl leading-none mb-1">•</span> 
                        <span>Periodistas deportivos</span>
                      </li>
                      <li className="flex items-center space-x-4">
                        <span className="text-[#00E56A] text-2xl leading-none mb-1">•</span> 
                        <span>Jugadores</span>
                      </li>
                      <li className="flex items-center space-x-4">
                        <span className="text-[#00E56A] text-2xl leading-none mb-1">•</span> 
                        <span>Influencers</span>
                      </li>
                      <li className="flex items-center space-x-4">
                        <span className="text-[#00E56A] text-2xl leading-none mb-1">•</span> 
                        <span>Celebridades</span>
                      </li>
                      <li className="flex items-center space-x-4">
                        <span className="text-[#00E56A] text-2xl leading-none mb-1">•</span> 
                        <span>Representantes de clubes</span>
                      </li>
                      <li className="flex items-center space-x-4">
                        <span className="text-[#00E56A] text-2xl leading-none mb-1">•</span> 
                        <span>Invitados estratégicos</span>
                      </li>
                    </ul>
                  </div>
                  
                  <p>La complejidad operativa y el perfil de los asistentes exigían un nivel de ejecución superior.</p>
                  <p className="text-white text-2xl md:text-3xl font-normal">La organización no admitía margen de error.</p>
                </div>

                {/* CTA mid-page */}
                <FadeIn delay={0.3}>
                  <div className="mt-12 pt-10 border-t border-white/10">
                    <p className="text-sm text-gray-500 font-light mb-6 tracking-wide">¿Tu próximo proyecto requiere este nivel de ejecución?</p>
                    <a
                      href="#contacto"
                      className="inline-flex items-center space-x-4 group"
                    >
                      <span className="px-8 py-4 bg-[#00E56A] text-black text-xs font-bold tracking-[0.25em] uppercase group-hover:bg-white transition-colors duration-300">
                        Agendar una reunión
                      </span>
                      <span className="w-10 h-10 border border-[#00E56A]/40 flex items-center justify-center group-hover:border-white group-hover:bg-white/5 transition-all duration-300">
                        <ArrowRight size={14} className="text-[#00E56A] group-hover:text-white group-hover:translate-x-1 transition-all" />
                      </span>
                    </a>
                  </div>
                </FadeIn>
              </FadeIn>
            </div>
            <FadeIn delay={0.2} className="h-full">
              <div className="aspect-[3/4] md:aspect-auto md:h-[800px] w-full overflow-hidden relative group">
                <img
                  src="/MLS Watch Party (4).jpg"
                  alt="El desafío"
                  className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-all duration-1000"
                />
                {/* Overlay que desaparece al hover */}
                <div className="absolute inset-0 bg-[#00E56A]/10 mix-blend-color group-hover:opacity-0 transition-opacity duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/20 transition-all duration-1000" />
                {/* Tag que aparece al hover */}
                <div className="absolute bottom-8 left-8 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                  <span className="text-[10px] font-bold tracking-[0.3em] text-[#00E56A] uppercase">Johnny B. Good · Puerto Madero</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 4: LA CONFIANZA */}
      <section className="py-40 bg-black relative">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading leading-tight text-white mb-32">
              &ldquo;En proyectos de{' '}
              <span className="relative inline-block">
                <span className="text-[#00E56A]">escala internacional</span>
                <span className="absolute -bottom-2 left-0 w-full h-px bg-[#00E56A]/40" />
              </span>,<br/>
              la{' '}
              <span className="text-[#00E56A]">capacidad de ejecución</span>
              {' '}es la{' '}
              <span className="italic text-white">única métrica</span>.&rdquo;
            </h2>
          </FadeIn>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            <FadeIn>
              <div className="aspect-[4/5] overflow-hidden">
                <img src="/MLS Watch Party (2).jpg" alt="Confianza 1" className="w-full h-full object-cover opacity-80" />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="aspect-[4/5] overflow-hidden mt-0 md:mt-32">
                <img src="/MLS Watch Party (5).jpg" alt="Confianza 2" className="w-full h-full object-cover opacity-80" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 5: LA EJECUCIÓN */}
      <section className="py-32 md:py-40 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <h2 className="text-[10px] font-bold tracking-[0.3em] text-white uppercase mb-24 text-center">La Ejecución.</h2>
          </FadeIn>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-16 gap-x-8 mb-32">
            {[
              { icon: <CheckCircle2 size={24} strokeWidth={1} />, title: "Producción General" },
              { icon: <MapPin size={24} strokeWidth={1} />, title: "Logística" },
              { icon: <Users size={24} strokeWidth={1} />, title: "Hospitality" },
              { icon: <Video size={24} strokeWidth={1} />, title: "Audiovisual" },
              { icon: <MonitorPlay size={24} strokeWidth={1} />, title: "Pantallas LED" },
              { icon: <Mic size={24} strokeWidth={1} />, title: "Prensa" },
              { icon: <Zap size={24} strokeWidth={1} />, title: "Coordinación Integral" },
              { icon: <Clock size={24} strokeWidth={1} />, title: "Timing" },
              { icon: <Play size={24} strokeWidth={1} />, title: "Operación en tiempo real" },
              { icon: <Camera size={24} strokeWidth={1} />, title: "Content Generation" },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.05} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-[#0a0a0a] border border-white/5 flex items-center justify-center mb-6 text-[#00E56A] transition-transform duration-500 group-hover:scale-110">
                  {item.icon}
                </div>
                <h4 className="text-sm font-medium text-white">{item.title}</h4>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="aspect-video w-full overflow-hidden">
              <img src="/MLS Watch Party (3).jpg" alt="Ejecución" className="w-full h-full object-cover scale-105 hover:scale-100 transition-all duration-1000" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 6: EL RESULTADO */}
      <section className="py-40 md:py-56 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <h2 className="text-[10px] font-bold tracking-[0.3em] text-white uppercase mb-12">El Resultado.</h2>
            <p className="text-2xl md:text-4xl font-light text-white max-w-4xl mb-32 leading-relaxed">
              Una experiencia oficial operada en Buenos Aires bajo los estándares globales de la Major League Soccer.
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 mb-32">
            <FadeIn>
              <div className="text-7xl md:text-8xl font-heading text-[#00E56A] mb-8">+80</div>
              <div className="text-base font-semibold tracking-widest text-white uppercase mb-6">Actores Clave</div>
              <p className="text-base text-gray-300 font-light leading-relaxed">Periodistas, Jugadores, Influencers, Celebridades, Representantes de clubes.</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="text-7xl md:text-8xl font-heading text-white mb-8">100%</div>
              <div className="text-base font-semibold tracking-widest text-white uppercase mb-6">Ejecución Integral</div>
              <p className="text-base text-gray-300 font-light leading-relaxed">Gestión operativa impecable de principio a fin.</p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="text-7xl md:text-8xl font-heading text-white mb-8">360°</div>
              <div className="text-base font-semibold tracking-widest text-white uppercase mb-6">Contenido Generado</div>
              <p className="text-base text-gray-300 font-light leading-relaxed">Cobertura audiovisual y de prensa en tiempo real.</p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="text-7xl md:text-8xl font-heading text-white mb-8">MLS</div>
              <div className="text-base font-semibold tracking-widest text-white uppercase mb-6">Estándar Global</div>
              <p className="text-base text-gray-300 font-light leading-relaxed">Identidad y protocolos de la Major League Soccer aplicados localmente.</p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeIn>
               <img src="/MLS Watch Party (1).jpg" alt="Resultado 1" className="w-full aspect-video object-cover object-bottom" />
            </FadeIn>
            <FadeIn delay={0.2}>
               <img src="/MLS Watch Party (6).jpg" alt="Resultado 2" className="w-full aspect-video object-cover" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 7: LO QUE DIJO GABRIEL GABOR */}
      <section className="py-32 md:py-40 bg-[#070707] border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center">
            <FadeIn className="w-full md:w-5/12">
              <div className="aspect-[3/4] overflow-hidden">
                <img src="/MLS Watch Party (7) Gabriel Gabor y Julián Lettieri.jpg" alt="Gabriel Gabor" className="w-full h-full object-cover grayscale opacity-80" />
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="w-full md:w-7/12">
              <span className="text-8xl text-[#00E56A] font-serif leading-none block mb-6">"</span>
              <p className="text-3xl md:text-4xl font-light text-white leading-tight mb-12">
                Julián y su equipo en TRINO entendieron perfectamente cómo alinear nuestro evento con los estándares globales de la MLS. Su nivel de profesionalismo, atención al detalle y ejecución es verdaderamente de primer nivel.
              </p>
              <div>
                <h4 className="text-sm font-bold tracking-widest text-white uppercase mb-2">Gabriel Gabor</h4>
                <p className="text-[10px] text-gray-500 tracking-[0.2em] uppercase">Major League Soccer</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 8: MÁS CASOS DE ÉXITO */}
      <section className="py-32 md:py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <h2 className="text-[10px] font-bold tracking-[0.3em] text-white uppercase mb-12">Más casos de éxito.</h2>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
              <h3 className="text-2xl md:text-4xl font-light text-gray-400 max-w-2xl leading-relaxed">
                La MLS fue uno de nuestros proyectos más desafiantes. <br/>
                <span className="text-white">No fue el único.</span>
              </h3>
              <a href="/" className="inline-flex items-center space-x-4 text-[10px] font-bold tracking-[0.2em] text-[#00E56A] uppercase hover:text-white transition-colors shrink-0">
                <span>Ver más casos de éxito</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { client: "Clínicas Bermejo", desc: "Eventos corporativos de integración.", img: "/G&N-197.jpg" },
              { client: "Boda Juli Puente & Facu Miguelena", desc: "Producción integral.", img: "/LU & TOMI (1545).JPG" },
              { client: "Ledesma", desc: "Eventos institucionales.", img: "/event_corp_render.png" }
            ].map((card, i) => (
              <FadeIn key={i} delay={i * 0.1} className="group cursor-pointer">
                <div className="aspect-[4/5] overflow-hidden mb-8 bg-black">
                  <img src={card.img} alt={card.client} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
                </div>
                <h4 className="text-lg font-medium text-white mb-2">{card.client}</h4>
                <p className="text-sm text-gray-500 font-light">{card.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: LO QUE APRENDIMOS */}
      <section className="py-40 md:py-56 bg-[#030303] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <FadeIn>
            <h2 className="text-[10px] font-bold tracking-[0.3em] text-white uppercase mb-16">Nuestra visión.</h2>
            <p className="text-xl md:text-3xl text-gray-400 font-light leading-relaxed mb-32">
              Operar un evento oficial para la Major League Soccer reafirma nuestro enfoque principal.
              <br /><br />
              La excelencia técnica es un requisito indispensable.
              <br /><br />
              <span className="text-white">Pero el verdadero valor reside en la precisión de la ejecución.</span>
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h3 className="text-5xl md:text-7xl lg:text-8xl font-heading text-white leading-[1.1] tracking-tight">
              No organizamos eventos.<br/>
              <span className="text-[#00E56A]">Diseñamos experiencias que generan confianza.</span>
            </h3>
          </FadeIn>
        </div>
      </section>

      {/* FINAL SECTION */}
      <section className="relative py-48 md:py-64 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/90 z-10" />
          <img src="/MLS Watch Party (1).jpg" alt="Conversemos" className="w-full h-full object-cover grayscale" />
        </div>
        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading text-white mb-10 tracking-tight">El próximo desafío.</h2>
            <p className="text-xl md:text-2xl text-gray-400 font-light mb-16 max-w-2xl mx-auto leading-relaxed">
              Si tu organización —nacional o internacional— está planificando un proyecto donde la ejecución es crítica, <span className="text-white">conversemos.</span>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
              <a href="#" className="px-12 py-6 bg-[#00E56A] text-black text-xs md:text-sm font-bold tracking-[0.25em] uppercase shadow-[0_0_40px_rgba(0,229,106,0.2)] hover:shadow-[0_0_60px_rgba(0,229,106,0.4)] hover:bg-white hover:scale-105 transition-all duration-300 w-full sm:w-auto">
                Agendar una reunión
              </a>
              <a href="/" className="px-10 py-5 border border-white/20 text-white text-[10px] font-bold tracking-[0.2em] uppercase hover:border-white transition-colors w-full sm:w-auto">
                Ver más casos de éxito
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Corporate;
