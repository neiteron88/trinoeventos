import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Corporate = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: "Activaciones de Marca",
      desc: "Lanzamientos de producto y PR events. Diseñamos experiencias que logran cobertura orgánica y engagement real."
    },
    {
      title: "Watch Parties & Transmisiones",
      desc: "Como hicimos con la MLS, organizamos eventos inmersivos en torno a hitos deportivos o culturales con presencia de medios."
    },
    {
      title: "Family Day & Team Building",
      desc: "Jornadas que fidelizan. Espacios donde los colaboradores se sienten valorados y desconectan de la rutina."
    },
    {
      title: "Fiestas de Fin de Año",
      desc: "Eventos épicos que marcan el cierre del ciclo corporativo, con el mismo nivel de clímax que una boda de lujo."
    },
    {
      title: "Exposiciones & Convenciones",
      desc: "Elevamos la barra del B2B. Adiós a los stands aburridos; creamos recorridos inmersivos que destacan tu marca."
    }
  ];

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img 
            src="/MLS%20Watch%20Party%20(4).jpg" 
            alt="Corporate Event" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading text-white uppercase"
          >
            Servicios <br className="md:hidden" />
            <span className="text-[#ccff00]">Corporativos</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-gray-300 max-w-2xl mx-auto font-light"
          >
            Llevamos el nivel de detalle y obsesión de una boda de lujo al Experiential Marketing B2B.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-[10px] font-bold tracking-widest text-[#ccff00] uppercase mb-4">
              Nuestra Propuesta
            </h2>
            <h3 className="text-4xl md:text-5xl font-heading text-white mb-8">
              PALETA DE SOLUCIONES
            </h3>
            <p className="text-gray-400 font-light leading-relaxed mb-12">
              Sabemos que cada empresa tiene un objetivo distinto. Ya sea fidelizar a tu equipo interno o impactar a tus clientes más importantes, diseñamos el evento a medida para maximizar el retorno de inversión emocional de tu marca.
            </p>
            
            <div className="space-y-8">
              {services.map((srv, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  key={i} 
                  className="flex items-start group"
                >
                  <CheckCircle2 className="text-[#ccff00] mt-1 shrink-0" size={20} />
                  <div className="ml-4">
                    <h4 className="text-lg text-white font-medium mb-1 group-hover:text-[#ccff00] transition-colors">{srv.title}</h4>
                    <p className="text-sm text-gray-400 font-light">{srv.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-[#0a0a0a] border border-white/10 p-8 md:p-12 rounded-xl h-fit sticky top-32">
            <h3 className="text-2xl font-heading text-white mb-6">¿LISTO PARA IMPACTAR?</h3>
            <p className="text-sm text-gray-400 mb-8 font-light">
              Dejanos los detalles de tu próximo hito corporativo y te contactaremos para diseñar la experiencia.
            </p>
            <form className="space-y-4">
              <input type="text" placeholder="Nombre de la Empresa" className="w-full bg-black border border-white/20 rounded-md p-4 text-white focus:border-[#ccff00] outline-none text-sm" />
              <input type="email" placeholder="Email corporativo" className="w-full bg-black border border-white/20 rounded-md p-4 text-white focus:border-[#ccff00] outline-none text-sm" />
              <select className="w-full bg-black border border-white/20 rounded-md p-4 text-white focus:border-[#ccff00] outline-none text-sm appearance-none">
                <option value="">Tipo de Evento</option>
                <option value="lanzamiento">Activación / Lanzamiento</option>
                <option value="findeano">Fiesta de Fin de Año</option>
                <option value="team">Team Building / Day Off</option>
                <option value="otro">Otro</option>
              </select>
              <button className="w-full bg-[#ccff00] text-black font-bold uppercase tracking-widest py-4 text-xs mt-4 hover:bg-white transition-colors">
                Solicitar Propuesta
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Corporate;
