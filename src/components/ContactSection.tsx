import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Phone, 
  MapPin, 
  Mail, 
  Send, 
  MessageSquare, 
  CheckCircle,
  ChevronDown
} from 'lucide-react';
import { VectorSwitch } from './VectorSwitch.tsx';
import { VectorPenFrame } from './VectorPenFrame.tsx';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    nombreCompleto: '',
    correoCorporativo: '',
    sedePreferencia: 'Madrid, España',
    servicioPrincipal: 'Identidad de Marca y Editorial',
    mensaje: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      nombreCompleto: '',
      correoCorporativo: '',
      sedePreferencia: 'Madrid, España',
      servicioPrincipal: 'Identidad de Marca y Editorial',
      mensaje: '',
    });
  };

  return (
    <section 
      id="contact" 
      className="relative w-full py-24 sm:py-32 bg-[#000002] border-t border-white/5 overflow-hidden text-white"
    >
      {/* Resplandor ambiental de fondo */}
      <div className="absolute top-1/4 -left-48 w-[600px] h-[600px] bg-[#FF4B2F]/[0.035] blur-[170px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-[#3B82F6]/[0.03] blur-[160px] rounded-full pointer-events-none -z-10" />

      {/* Contenedor principal alineado: max-w-[1806px] mx-auto px-4 sm:px-8 lg:px-12 */}
      <div className="max-w-[1806px] mx-auto px-4 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ========================================================= */}
          {/* COLUMNA IZQUIERDA: Título, Datos de Contacto y Gráficos */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full pt-2">
            <div>
              {/* Badge superior "CONTACT US" + Switch Vectorial */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="inline-flex items-center px-4 py-1.5 rounded-md bg-[#131316] border border-white/10 text-white/80 text-xs font-semibold tracking-widest uppercase shadow-sm">
                  CONTACT US
                </div>
                <VectorSwitch size="sm" showLabel={true} label="MODO VECTOR" />
              </div>

              {/* Título Principal de Impacto: "Ready to Bring Your Vision to Life?" */}
              <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-white leading-[1.12] mb-8">
                Ready to Bring Your<br />
                Vision to <span className="text-[#FF4B2F]">Life?</span>
              </h2>

              {/* Canales y Datos de Contacto Directos (de la Imagen 3) */}
              <div className="space-y-4 my-8">
                {/* Sitio Web */}
                <a 
                  href="https://www.nobostudio.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 text-zinc-300 hover:text-white group transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-white/20 transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-sm sm:text-base">www.nobostudio.com</span>
                </a>

                {/* Teléfono & WhatsApp */}
                <a 
                  href="https://wa.me/34624416931?text=Hola%20NoboStudio,%20quiero%20coordinar%20una%20propuesta" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 text-zinc-300 hover:text-white group transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-white/20 transition-all">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-sm sm:text-base">+34 624416931 (Llamadas / WhatsApp)</span>
                </a>

                {/* Sedes Físicas */}
                <div className="flex items-center gap-3.5 text-zinc-300">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-sm sm:text-base">Madrid, España · Guayaquil, Ecuador</span>
                </div>

                {/* Correo Electrónico */}
                <a 
                  href="mailto:hola@nobostudio.com"
                  className="flex items-center gap-3.5 text-zinc-300 hover:text-white group transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-white/20 transition-all">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-sm sm:text-base">hola@nobostudio.com</span>
                </a>
              </div>
            </div>

            {/* Elementos Gráficos Inferiores de la Imagen 1:
                - Emblema circular "ABOUT US • CREOVIBE"
                - Flecha dibujada a mano apuntando al formulario
            */}
            <div className="hidden sm:flex items-center gap-8 mt-10 pt-4">
              {/* Badge Circular Giratorio / Emblema */}
              <div className="relative w-28 h-28 flex items-center justify-center shrink-0">
                <svg className="w-full h-full animate-spin-slow" viewBox="0 0 120 120">
                  <path
                    id="circlePath"
                    d="M 60, 60 m -45, 0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0"
                    fill="none"
                  />
                  <text className="text-[10px] uppercase font-bold tracking-[0.28em] fill-white/80">
                    <textPath xlinkHref="#circlePath" startOffset="0%">
                      • ABOUT US • CREOVIBE • ABOUT US • CREOVIBE
                    </textPath>
                  </text>
                </svg>
                {/* Centro del monograma */}
                <div className="absolute inset-4 rounded-full bg-[#18181C] border border-white/10 flex items-center justify-center shadow-inner">
                  <span className="text-xl font-bold font-serif text-white">N</span>
                </div>
              </div>

              {/* Flecha espiral blanca apuntando al formulario */}
              <div className="flex-1 max-w-[170px] opacity-80">
                <svg viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                  <path 
                    d="M20 75 C 10 30, 70 10, 80 40 C 90 70, 50 85, 45 55 C 40 25, 110 20, 125 55" 
                    stroke="white" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeDasharray="1 0" 
                  />
                  <path 
                    d="M115 55 L 127 57 L 126 44" 
                    stroke="white" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* COLUMNA DERECHA: Formulario con las preguntas de la Imagen 2 */}
          {/* ========================================================= */}
          <div className="lg:col-span-7">
            <VectorPenFrame showHandles={true} showPenIcon={true}>
              <div className="bg-[#0D0A14] border border-white/10 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden backdrop-blur-md">
              
              {submitted ? (
                <div className="py-16 text-center flex flex-col items-center animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                    ¡Solicitud enviada con éxito!
                  </h3>
                  <p className="text-zinc-400 text-base max-w-md mx-auto leading-relaxed mb-8">
                    Gracias por ponerte en contacto. Nuestro equipo de directores estratégicos revisará tus objetivos y te responderá en menos de 24 horas.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-sm font-semibold transition-all cursor-pointer"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Fila 1: Nombre completo y Correo corporativo */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                    {/* Campo 1: Nombre completo * */}
                    <div className="space-y-2">
                      <label 
                        htmlFor="nombreCompleto" 
                        className="block text-sm font-medium text-zinc-300"
                      >
                        Nombre completo *
                      </label>
                      <input
                        id="nombreCompleto"
                        type="text"
                        required
                        value={formData.nombreCompleto}
                        onChange={(e) => setFormData({ ...formData, nombreCompleto: e.target.value })}
                        placeholder="Ej. Martín Soler"
                        className="w-full px-4 py-3.5 rounded-xl bg-[#14101E] border border-white/10 text-white placeholder-zinc-500 text-sm sm:text-base focus:outline-none focus:border-[#FF4B2F] focus:ring-1 focus:ring-[#FF4B2F] transition-all"
                      />
                    </div>

                    {/* Campo 2: Correo corporativo * */}
                    <div className="space-y-2">
                      <label 
                        htmlFor="correoCorporativo" 
                        className="block text-sm font-medium text-zinc-300"
                      >
                        Correo corporativo *
                      </label>
                      <input
                        id="correoCorporativo"
                        type="email"
                        required
                        value={formData.correoCorporativo}
                        onChange={(e) => setFormData({ ...formData, correoCorporativo: e.target.value })}
                        placeholder="martin@empresa.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-[#14101E] border border-white/10 text-white placeholder-zinc-500 text-sm sm:text-base focus:outline-none focus:border-[#FF4B2F] focus:ring-1 focus:ring-[#FF4B2F] transition-all"
                      />
                    </div>
                  </div>

                  {/* Fila 2: Sede de preferencia y Servicio Principal */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                    {/* Campo 3: Sede de preferencia */}
                    <div className="space-y-2">
                      <label 
                        htmlFor="sedePreferencia" 
                        className="block text-sm font-medium text-zinc-300"
                      >
                        Sede de preferencia
                      </label>
                      <div className="relative">
                        <select
                          id="sedePreferencia"
                          value={formData.sedePreferencia}
                          onChange={(e) => setFormData({ ...formData, sedePreferencia: e.target.value })}
                          className="w-full appearance-none px-4 py-3.5 rounded-xl bg-[#14101E] border border-white/10 text-white text-sm sm:text-base focus:outline-none focus:border-[#FF4B2F] focus:ring-1 focus:ring-[#FF4B2F] transition-all cursor-pointer pr-10"
                        >
                          <option value="Madrid, España" className="bg-[#14101E] text-white">Madrid, España</option>
                          <option value="Guayaquil, Ecuador" className="bg-[#14101E] text-white">Guayaquil, Ecuador</option>
                          <option value="Remoto / Internacional" className="bg-[#14101E] text-white">Remoto / Internacional</option>
                        </select>
                        <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
                      </div>
                    </div>

                    {/* Campo 4: Servicio Principal (opciones idénticas a la imagen 2) */}
                    <div className="space-y-2">
                      <label 
                        htmlFor="servicioPrincipal" 
                        className="block text-sm font-medium text-zinc-300"
                      >
                        Servicio Principal
                      </label>
                      <div className="relative">
                        <select
                          id="servicioPrincipal"
                          value={formData.servicioPrincipal}
                          onChange={(e) => setFormData({ ...formData, servicioPrincipal: e.target.value })}
                          className="w-full appearance-none px-4 py-3.5 rounded-xl bg-[#14101E] border border-white/10 text-white text-sm sm:text-base focus:outline-none focus:border-[#FF4B2F] focus:ring-1 focus:ring-[#FF4B2F] transition-all cursor-pointer pr-10"
                        >
                          <option value="Identidad de Marca y Editorial" className="bg-[#14101E] text-white">
                            Identidad de Marca y Editorial
                          </option>
                          <option value="Desarrollo Web a Medida" className="bg-[#14101E] text-white">
                            Desarrollo Web a Medida
                          </option>
                          <option value="Relaciones Públicas y Prensa" className="bg-[#14101E] text-white">
                            Relaciones Públicas y Prensa
                          </option>
                          <option value="Publicidad Digital y Rendimiento" className="bg-[#14101E] text-white">
                            Publicidad Digital y Rendimiento
                          </option>
                          <option value="Producción Audiovisual y Spots" className="bg-[#14101E] text-white">
                            Producción Audiovisual y Spots
                          </option>
                          <option value="Marketing Integral 360°" className="bg-[#14101E] text-white">
                            Marketing Integral 360°
                          </option>
                        </select>
                        <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Campo 5: Mensaje o descripción del proyecto * */}
                  <div className="space-y-2">
                    <label 
                      htmlFor="mensaje" 
                      className="block text-sm font-medium text-zinc-300"
                    >
                      Mensaje o descripción del proyecto *
                    </label>
                    <textarea
                      id="mensaje"
                      required
                      rows={4}
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      placeholder="Describe los objetivos clave, fechas estimadas o retos de tu marca..."
                      className="w-full px-4 py-3.5 rounded-xl bg-[#14101E] border border-white/10 text-white placeholder-zinc-500 text-sm sm:text-base focus:outline-none focus:border-[#FF4B2F] focus:ring-1 focus:ring-[#FF4B2F] transition-all resize-y min-h-[110px]"
                    />
                  </div>

                  {/* Fila 3: Botones de Acción (Enviar solicitud directa & WhatsApp directo) */}
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                    {/* Botón Principal: Enviar solicitud directa */}
                    <button
                      type="submit"
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#FDF8EC] text-[#0A0A0C] hover:bg-white font-semibold text-sm sm:text-base transition-all duration-300 shadow-md cursor-pointer active:scale-98"
                    >
                      <Send className="w-4 h-4 text-[#0A0A0C]" />
                      <span>Enviar solicitud directa</span>
                    </button>

                    {/* Botón Secundario: WhatsApp directo */}
                    <a
                      href="https://wa.me/34624416931?text=Hola%20NoboStudio,%20quiero%20conversar%20sobre%20un%20proyecto"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#181423] border border-white/10 hover:border-white/20 hover:bg-[#211c30] text-white font-medium text-sm sm:text-base transition-all duration-300 cursor-pointer active:scale-98"
                    >
                      <MessageSquare className="w-4 h-4 text-[#25D366]" />
                      <span>WhatsApp directo</span>
                    </a>
                  </div>

                  {/* Aviso de privacidad (exacto como en la imagen 2) */}
                  <p className="text-xs text-zinc-500 pt-1 leading-relaxed">
                    Respetamos tu privacidad. Tus datos solo se utilizarán para coordinar la propuesta estratégica.
                  </p>
                </form>
              )}

            </div>
          </VectorPenFrame>
        </div>

        </div>
      </div>
    </section>
  );
};
