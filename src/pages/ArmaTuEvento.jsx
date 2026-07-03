import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Send, CheckCircle2 } from 'lucide-react';
import Navbar from '../components/layout/Navbar';

const ArmaTuEvento = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    tipo: '',
    typeId: '',
    invitados: '',
    estilo: '',
    vibe: '',
    fecha: ''
  });
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleNext = () => setStep(prev => prev + 1);

  const startAnalysis = () => {
    setIsAnalyzing(true);
    // console.log('Final Data:', formData);
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResult(true);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      <Navbar />
      
      <main className="pt-32 pb-20 px-6 lg:px-8 max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 md:p-16 shadow-2xl relative overflow-hidden"
            >
              {/* Progress Bar */}
              <div className="absolute top-0 left-0 h-1 bg-[#00E56A] transition-all duration-500" style={{ width: `${(step/5) * 100}%` }} />

              <div className="mb-12">
                <span className="text-[10px] font-bold tracking-[0.3em] text-[#00E56A] uppercase">Propuesta IA Personalizada</span>
                <h1 className="text-4xl md:text-5xl font-heading mt-4 tracking-wider">DISEÑEMOS TU EXPERIENCIA</h1>
              </div>

              {step === 1 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                  <p className="text-xl text-gray-400 mb-8 font-light">¿Qué vamos a celebrar?</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { id: 'boda', label: 'Boda' },
                      { id: '15', label: 'Mis 15 Años' },
                      { id: 'corp', label: 'Fiesta Empresarial' },
                      { id: 'product', label: 'Lanzamiento / Inauguración' }
                    ].map(item => (
                      <button
                        key={item.id}
                        onClick={() => { setFormData({...formData, tipo: item.label, typeId: item.id}); handleNext(); }}
                        className={`p-6 text-left border rounded-xl transition-all ${formData.typeId === item.id ? 'border-[#00E56A] bg-[#00E56A]/5 text-black' : 'border-white/10 hover:border-white/30'}`}
                      >
                        <span className={`text-sm font-bold tracking-widest uppercase ${formData.typeId === item.id ? 'text-[#00E56A]' : 'text-white'}`}>{item.label}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                  <p className="text-xl text-gray-400 mb-8 font-light">¿Cuántos invitados tenés en mente?</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {['< 50', '50 - 150', '150+'].map(inv => (
                      <button
                        key={inv}
                        onClick={() => { setFormData({...formData, invitados: inv}); handleNext(); }}
                        className="p-6 text-center border border-white/10 rounded-xl hover:border-[#00E56A] transition-all group"
                      >
                        <span className="text-xl font-heading group-hover:text-[#00E56A]">{inv}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                  <p className="text-xl text-gray-400 mb-8 font-light">¿Cuál es el estilo que mejor te define?</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {['Minimalista & Elegante', 'Fiesta & Energía', 'Orgánico & Cálido', 'Vanguardista & Impactante'].map(est => (
                      <button
                        key={est}
                        onClick={() => { setFormData({...formData, estilo: est}); handleNext(); }}
                        className="p-6 text-left border border-white/10 rounded-xl hover:border-[#00E56A] transition-all"
                      >
                        <span className="text-sm font-bold tracking-widest uppercase">{est}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                  <p className="text-xl text-gray-400 mb-8 font-light">¿Qué atmósfera visual buscás?</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {['Nocturna & Sofisticada', 'Natural & Al Aire Libre', 'Industrial & Moderna', 'Clásica & Atemporal'].map(v => (
                      <button
                        key={v}
                        onClick={() => { setFormData({...formData, vibe: v}); handleNext(); }}
                        className="p-6 text-left border border-white/10 rounded-xl hover:border-[#00E56A] transition-all"
                      >
                        <span className="text-sm font-bold tracking-widest uppercase">{v}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 5 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                  <p className="text-xl text-gray-400 mb-8 font-light">¿Cuándo te gustaría realizarlo?</p>
                  <input 
                    type="date" 
                    className="w-full bg-transparent border-b border-white/20 py-4 text-2xl font-heading focus:border-[#00E56A] outline-none mb-12"
                    onChange={(e) => setFormData({...formData, fecha: e.target.value})}
                  />
                  <button
                    onClick={startAnalysis}
                    disabled={!formData.fecha}
                    className="w-full py-6 bg-[#00E56A] text-black font-bold tracking-[0.3em] uppercase rounded-xl flex items-center justify-center space-x-4 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
                  >
                    {isAnalyzing ? (
                      <>
                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        <span>Procesando visualización 3D...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles size={20} />
                        <span>Generar Propuesta y Visualización</span>
                      </>
                    )}
                  </button>
                </motion.div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-[#0a0a0a] border border-[#00E56A]/20 rounded-3xl p-8 md:p-16 shadow-2xl relative"
            >
              <div className="flex flex-col md:flex-row gap-12">
                <div className="w-full md:w-1/2 space-y-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-[#00E56A] rounded-full flex items-center justify-center text-black">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold tracking-[0.3em] text-[#00E56A] uppercase">Propuesta Generada</span>
                      <h2 className="text-3xl font-heading tracking-wider">RESULTADO DEL ANÁLISIS</h2>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-[#00E56A] text-xs font-bold tracking-widest uppercase mb-4">Bajada Creativa</h3>
                      <p className="text-xl text-white font-light leading-relaxed">
                        Para tu <span className="text-[#00E56A] font-semibold">{formData.tipo}</span> con estilo <span className="text-[#00E56A] font-semibold">{formData.estilo}</span> y atmósfera <span className="text-[#00E56A] lowercase italic">{formData.vibe}</span>, sugerimos un enfoque centrado en la <span className="italic font-script text-3xl">experiencia sensorial</span>. 
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      <div className="p-6 border border-white/5 rounded-2xl bg-white/5">
                        <h4 className="text-[10px] font-bold text-gray-500 uppercase mb-3">Qué tener en cuenta</h4>
                        <ul className="text-sm text-gray-300 space-y-2 font-light">
                          <li>• Coordinación técnica de alta precisión para {formData.invitados} invitados.</li>
                          <li>• Curaduría de proveedores boutique acorde al estilo {formData.estilo}.</li>
                          <li>• Diseño de flujo orgánico para la atmósfera {formData.vibe}.</li>
                        </ul>
                      </div>
                    </div>

                    <a 
                      href="https://wa.me/5491130668588?text=Hola,%20quería%20averiguar%20por%20un%20evento%20para%20hacer%20el%20día........"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-6 border border-[#00E56A] text-[#00E56A] font-bold tracking-[0.3em] uppercase rounded-xl flex items-center justify-center space-x-4 hover:bg-[#00E56A] hover:text-black transition-all"
                    >
                      <Send size={20} />
                      <span>Hablar con un experto</span>
                    </a>
                  </div>
                </div>

                <div className="w-full md:w-1/2">
                  <h3 className="text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-6">Conceptualización Visual 3D</h3>
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 group aspect-square md:aspect-auto md:h-full max-h-[500px]">
                    <img 
                      src={
                        formData.typeId === '15' ? '/event_15_render.png' :
                        formData.typeId === 'corp' ? '/event_corp_render.png' :
                        formData.typeId === 'product' ? '/event_product_render.png' :
                        '/event_boda_render.png'
                      } 
                      alt="3D Concept" 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-8 left-8 right-8">
                      <p className="text-white text-xs font-bold tracking-widest uppercase mb-2">Pre-visualización sugerida</p>
                      <p className="text-gray-400 text-[10px] leading-relaxed">
                        Este render simula la distribución espacial y la paleta de iluminación ideal para un evento de tipo {formData.tipo}.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default ArmaTuEvento;
