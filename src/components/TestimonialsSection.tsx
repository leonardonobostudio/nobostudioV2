import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export interface TestimonialItem {
  id: number;
  stars: number;
  quote: string;
  authorName: string;
  authorRole: string;
  authorCompany: string;
  authorAvatar: string;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 1,
    stars: 5,
    quote:
      "¡Trabajar con este estudio marcó un antes y un después! Transformaron nuestra presencia digital con un diseño impecable y una estrategia que generó resultados tangibles y medibles desde el primer mes.",
    authorName: "Arlene McCoy",
    authorRole: "Directora de Marketing",
    authorCompany: "Apex Global Dynamics",
    authorAvatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 2,
    stars: 5,
    quote:
      "La estrategia de Video Sales Letter (VSL) con presupuesto de $30K multiplicó nuestra captación de clientes de alto valor en tiempo récord. El retorno de inversión y la precisión técnica del embudo superaron todas nuestras expectativas.",
    authorName: "Vivesmart INC",
    authorRole: "Executive Board",
    authorCompany: "Vivesmart INC (Estrategia VSL $30K)",
    authorAvatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 3,
    stars: 5,
    quote:
      "Capturaron con maestría la sofisticación y el legado de alta costura que requeríamos para nuestra expansión internacional. La identidad visual y la plataforma web proyectan exactamente el lujo atemporal de Teresa Noboa.",
    authorName: "Teresa Noboa",
    authorRole: "Directora Creativa & Fundadora",
    authorCompany: "Teresa Noboa Haute Couture",
    authorAvatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 4,
    stars: 5,
    quote:
      "Diseñaron una experiencia interactiva que transmitió la esencia científica y emocional del Hygge y el bienestar. El posicionamiento digital logró un récord de asistencia y menciones en medios de comunicación.",
    authorName: "Museo de la Felicidad & Meik Wiking",
    authorRole: "Dirección de Experiencia & Relaciones Públicas",
    authorCompany: "Happiness Research Collaboration",
    authorAvatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
  },
];

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotación cada 6.5 segundos
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const currentTestimonial = TESTIMONIALS_DATA[currentIndex];

  return (
    <section id="testimonials" className="relative w-full py-20 sm:py-28 bg-[#14101a] text-white overflow-hidden select-none">
      {/* Luces de fondo ambientales */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#e3a5c7]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-[#e3a5c7]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1806px] mx-auto px-4 sm:px-8 lg:px-12 w-full relative z-10">
        
        {/* Cabecera idéntica a la referencia de diseño */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-white/80 text-xs font-semibold tracking-wider uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e3a5c7]" />
              TESTIMONIOS DE CLIENTES
            </div>

            {/* Título en grande en español con acento de color */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-creato tracking-tight text-white leading-[1.12]">
              Descubre Por Qué Aman<br />
              Trabaj<span className="text-[#e3a5c7]">ar Con Nosotros</span>
            </h2>
          </div>

          <p className="text-white/60 text-sm sm:text-base max-w-md font-normal leading-relaxed lg:pb-2">
            La confianza de nuestros clientes se construye con resultados medibles, diseño de vanguardia y estrategias de marketing empresarial de alto rendimiento.
          </p>
        </div>

        {/* Layout de dos columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* COLUMNA IZQUIERDA: Logo de Certificación META */}
          <div className="lg:col-span-4 bg-[#1c1626] border border-white/10 rounded-3xl p-8 sm:p-10 flex flex-col items-center justify-center relative overflow-hidden shadow-2xl group min-h-[340px] sm:min-h-[380px]">
            {/* Brillo ambiental sutil detrás del logo */}
            <div className="absolute -top-16 -left-16 w-48 h-48 bg-[#e3a5c7]/15 rounded-full blur-3xl pointer-events-none group-hover:bg-[#e3a5c7]/25 transition-all duration-700" />
            <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-[#e3a5c7]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Logo de Certificación META */}
            <div className="relative z-10 w-full flex items-center justify-center p-2 sm:p-4">
              <img
                src="https://static.xx.fbcdn.net/mci_ab/public/cms/?ab_b=e&ab_page=CMS&ab_entry=1195761015495519&version=1792187751&transcode_extension=webp"
                alt="Certificación META - Estrategia de marketing empresarial"
                className="w-full max-w-[220px] sm:max-w-[260px] md:max-w-[290px] h-auto object-contain transition-transform duration-500 group-hover:scale-105 filter drop-shadow-[0_12px_28px_rgba(227,165,199,0.25)]"
                loading="lazy"
              />
            </div>
          </div>

          {/* COLUMNA DERECHA: Tarjeta Larga de Testimonios */}
          <div 
            className="lg:col-span-8 bg-[#1c1626] border border-white/10 rounded-3xl p-8 sm:p-12 lg:p-14 flex flex-col justify-between relative overflow-hidden shadow-2xl transition-all duration-300"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Marca de agua gigante con comilla de cita tipográfica */}
            <div className="absolute top-2 right-8 text-white/[0.04] font-serif text-[180px] sm:text-[220px] leading-none select-none pointer-events-none">
              “
            </div>

            {/* Parte Superior: Estrellas Doradas y Tag */}
            <div>
              <div className="flex items-center justify-between mb-8">
                {/* 5 Estrellas amarillas como en el diseño */}
                <div className="flex items-center gap-1.5">
                  {[...Array(currentTestimonial.stars)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 fill-[#FFB800] stroke-[#FFB800]"
                    />
                  ))}
                </div>

                {/* Contador de testimonios */}
                <span className="text-xs font-mono text-white/40 tracking-widest uppercase">
                  {String(currentIndex + 1).padStart(2, '0')} / {String(TESTIMONIALS_DATA.length).padStart(2, '0')}
                </span>
              </div>

              {/* Cita testimonial en formato largo y tipografía imponente */}
              <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-[28px] font-semibold text-white/95 leading-relaxed tracking-normal font-creato mb-10 min-h-[140px] flex items-center">
                "{currentTestimonial.quote}"
              </blockquote>
            </div>

            {/* Parte Inferior: Autor (izquierda) y Controles de Navegación < > (derecha) */}
            <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              
              {/* Información del Cliente */}
              <div className="flex items-center gap-4">
                <img
                  src={currentTestimonial.authorAvatar}
                  alt={currentTestimonial.authorName}
                  className="w-13 h-13 rounded-full object-cover border-2 border-[#e3a5c7]/40 shadow-md"
                />
                <div>
                  <h3 className="text-lg font-bold text-white font-creato">
                    {currentTestimonial.authorName}
                  </h3>
                  <p className="text-sm text-white/60">
                    {currentTestimonial.authorRole} • <span className="text-white/40">{currentTestimonial.authorCompany}</span>
                  </p>
                </div>
              </div>

              {/* Botones de navegación circulares interactivos (< y >) */}
              <div className="flex items-center gap-3">
                {/* Indicadores de bolitas */}
                <div className="flex items-center gap-1.5 mr-2">
                  {TESTIMONIALS_DATA.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      type="button"
                      onClick={() => setCurrentIndex(dotIdx)}
                      aria-label={`Ir al testimonio ${dotIdx + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        currentIndex === dotIdx
                          ? 'w-6 bg-[#e3a5c7]'
                          : 'w-2 bg-white/20 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Testimonio anterior"
                  className="w-12 h-12 rounded-full border border-white/20 bg-white/5 hover:bg-[#e3a5c7] hover:border-[#e3a5c7] text-white hover:text-[#14101a] flex items-center justify-center transition-all duration-300 active:scale-95 cursor-pointer shadow-md"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Testimonio siguiente"
                  className="w-12 h-12 rounded-full border border-white/20 bg-white/5 hover:bg-[#e3a5c7] hover:border-[#e3a5c7] text-white hover:text-[#14101a] flex items-center justify-center transition-all duration-300 active:scale-95 cursor-pointer shadow-md"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
