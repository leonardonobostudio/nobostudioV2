import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

/**
 * ==============================================================================================
 * 📌 GUÍA DE DOCUMENTACIÓN: CÓMO CAMBIAR O PERSONALIZAR MANUALMENTE LOS LOGOS DE CLIENTES
 * ==============================================================================================
 * 
 * ¿DÓNDE CAMBIAR TUS LOGOS MANUALMENTE?
 * Justo abajo en el array `CLIENT_LOGOS` (Líneas 40 a 160).
 * 
 * PARA USAR TUS PROPIAS IMÁGENES (PNG, JPG, SVG o WEBP):
 * 1. Guarda tu imagen en la carpeta `/public/images/clients/` (por ejemplo: `mi-cliente.png`)
 *    o usa una URL externa directa (`https://tusitio.com/logo.png`).
 * 2. En el cliente correspondiente, asigna la propiedad `logoUrl`:
 *       logoUrl: '/images/clients/mi-cliente.png',
 *    Si `logoUrl` tiene una ruta, el sistema cargará tu imagen automáticamente.
 *    Si `logoUrl` está vacío (`logoUrl: ''`), se muestra el logotipo vectorial SVG integrado.
 * 
 * REGLAS VISUALES AUTOMÁTICAS:
 * - En pantalla se ven exactamente 5 logos al mismo tiempo en desktop (de los 7 totales).
 * - En reposo: Se muestran 100% en blanco y negro (grayscale monochrome) para elegancia.
 * - Al pasar el cursor (hover): Se transforma automáticamente a todo color original con brillo.
 * - Carrusel automático con pausa al pasar el cursor y controles manuales (flechas + puntos).
 * ==============================================================================================
 */

export interface ClientLogoItem {
  id: number;
  name: string;
  category: string;
  brandColor: string;
  /**
   * 👉 COLOCA AQUÍ LA RUTA DE TU IMAGEN:
   * Ejemplo: '/images/clients/logo-teresa-noboa.png' o 'https://...'
   * Si lo dejas vacío (''), se usará el logotipo vectorial SVG predeterminado.
   */
  logoUrl?: string;
  /** Logotipo gráfico vectorial renderizado como imagen */
  renderSvg: (brandColor: string) => React.ReactNode;
}

export const CLIENT_LOGOS: ClientLogoItem[] = [
  // 1. CLIENTE 1: TERESA NOBOA
  {
    id: 1,
    name: 'Teresa Noboa',
    category: 'Haute Couture & Moda',
    brandColor: '#E11D48',
    // 👈 [IMAGEN CLIENTE 1]: Cambia aquí la URL de tu primer cliente
    logoUrl: 'https://www.museodelafelicidad.com/wp-content/uploads/2025/02/cropped-Logotipp-museo-de-la-felicidad.png',
    renderSvg: (brandColor: string) => (
      <svg viewBox="0 0 260 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-h-14">
        {/* Monograma de Lujo TN */}
        <g transform="translate(10, 5)">
          <circle cx="30" cy="30" r="28" stroke={brandColor} strokeWidth="1.5" strokeDasharray="3 2" className="opacity-70" />
          <circle cx="30" cy="30" r="24" stroke={brandColor} strokeWidth="1" className="opacity-90" />
          <path d="M22 20H38M30 20V42" stroke={brandColor} strokeWidth="2.5" strokeLinecap="round" />
          <path d="M26 42V24L38 42V24" stroke="#D4AF37" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        {/* Wordmark Tipográfico de Alta Costura */}
        <g transform="translate(78, 12)">
          <text x="0" y="24" fill={brandColor} fontFamily="serif" fontSize="19" fontWeight="700" letterSpacing="0.22em">
            TERESA NOBOA
          </text>
          <text x="1" y="42" fill="#D4AF37" fontFamily="sans-serif" fontSize="9.5" fontWeight="600" letterSpacing="0.45em">
            HAUTE COUTURE
          </text>
        </g>
      </svg>
    ),
  },

  // 2. CLIENTE 2: CÁMARA DE LA CONSTRUCCIÓN
  {
    id: 2,
    name: 'Cámara de la Construcción',
    category: 'Gremio & Desarrollo',
    brandColor: '#2563EB',
    // 👈 [IMAGEN CLIENTE 2]: Cambia aquí la URL de tu segundo cliente
    logoUrl: 'https://www.museodelafelicidad.com/wp-content/uploads/2025/02/cropped-Logotipp-museo-de-la-felicidad.png',
    renderSvg: (brandColor: string) => (
      <svg viewBox="0 0 260 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-h-14">
        {/* Isotipo Arquitectónico Hexagonal */}
        <g transform="translate(10, 8)">
          <path d="M28 4L50 16V42L28 54L6 42V16L28 4Z" stroke={brandColor} strokeWidth="2" fill={`${brandColor}15`} />
          <path d="M28 4V54M6 16L50 42M6 42L50 16" stroke="#38BDF8" strokeWidth="1.2" opacity="0.85" />
          <rect x="22" y="20" width="12" height="18" fill={brandColor} rx="1" />
        </g>
        {/* Wordmark Institucional */}
        <g transform="translate(74, 12)">
          <text x="0" y="18" fill="#FFFFFF" fontFamily="sans-serif" fontSize="10.5" fontWeight="700" letterSpacing="0.28em">
            CÁMARA DE LA
          </text>
          <text x="0" y="36" fill={brandColor} fontFamily="sans-serif" fontSize="16" fontWeight="900" letterSpacing="0.12em">
            CONSTRUCCIÓN
          </text>
          <text x="1" y="49" fill="#38BDF8" fontFamily="sans-serif" fontSize="8" fontWeight="600" letterSpacing="0.35em">
            GREMIO EMPRESARIAL
          </text>
        </g>
      </svg>
    ),
  },

  // 3. CLIENTE 3: MUSEO DE LA FELICIDAD
  {
    id: 3,
    name: 'Museo de la Felicidad',
    category: 'Experiencia Cultural',
    brandColor: '#F59E0B',
    // 👈 [IMAGEN CLIENTE 3]: Cambia aquí la URL de tu tercer cliente
    logoUrl: 'https://www.museodelafelicidad.com/wp-content/uploads/2025/02/cropped-Logotipp-museo-de-la-felicidad.png',
    renderSvg: (brandColor: string) => (
      <svg viewBox="0 0 260 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-h-14">
        {/* Isotipo Sonrisa Radiante / Sol */}
        <g transform="translate(12, 7)">
          <circle cx="28" cy="28" r="26" stroke={brandColor} strokeWidth="1.8" />
          <path d="M15 28C15 36 21 41 28 41C35 41 41 36 41 28" stroke={brandColor} strokeWidth="3" strokeLinecap="round" />
          <circle cx="21" cy="22" r="2.5" fill="#FF6B6B" />
          <circle cx="35" cy="22" r="2.5" fill="#FF6B6B" />
          {/* Rayos dorados de alegría */}
          <path d="M28 4V9M47 13L43 17M9 13L13 17" stroke="#FFD166" strokeWidth="2" strokeLinecap="round" />
        </g>
        {/* Wordmark Cultural */}
        <g transform="translate(76, 13)">
          <text x="0" y="18" fill="#FFD166" fontFamily="sans-serif" fontSize="10.5" fontWeight="600" letterSpacing="0.32em">
            MUSEO DE LA
          </text>
          <text x="0" y="37" fill={brandColor} fontFamily="sans-serif" fontSize="17" fontWeight="900" letterSpacing="0.14em">
            FELICIDAD
          </text>
          <text x="1" y="49" fill="#FF6B6B" fontFamily="sans-serif" fontSize="8" fontWeight="600" letterSpacing="0.3em">
            EXPERIENCIA & CULTURA
          </text>
        </g>
      </svg>
    ),
  },

  // 4. CLIENTE 4: EXPOSICIÓN TEMPLARIOS
  {
    id: 4,
    name: 'Exposición Templarios',
    category: 'Patrimonio Histórico',
    brandColor: '#DC2626',
    // 👈 [IMAGEN CLIENTE 4]: Cambia aquí la URL de tu cuarto cliente
    logoUrl: 'https://www.museodelafelicidad.com/wp-content/uploads/2025/02/cropped-Logotipp-museo-de-la-felicidad.png',
    renderSvg: (brandColor: string) => (
      <svg viewBox="0 0 260 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-h-14">
        {/* Escudo Heráldico con Cruz Templaria */}
        <g transform="translate(12, 5)">
          <path d="M28 4L48 10V32C48 45 28 56 28 56C28 56 8 45 8 32V10L28 4Z" stroke={brandColor} strokeWidth="1.8" fill={`${brandColor}18`} />
          {/* Cruz Paté Templaria */}
          <path d="M28 15V43M14 29H42M21 16H35M21 42H35M15 22V36M41 22V36" stroke="#EF4444" strokeWidth="2.4" strokeLinecap="round" />
          <circle cx="28" cy="29" r="2.5" fill="#D4AF37" />
        </g>
        {/* Wordmark Histórico */}
        <g transform="translate(74, 12)">
          <text x="0" y="24" fill={brandColor} fontFamily="serif" fontSize="19" fontWeight="800" letterSpacing="0.25em">
            TEMPLARIOS
          </text>
          <text x="1" y="42" fill="#D4AF37" fontFamily="sans-serif" fontSize="8.5" fontWeight="700" letterSpacing="0.4em">
            EXPOSICIÓN HISTÓRICA
          </text>
        </g>
      </svg>
    ),
  },

  // 5. CLIENTE 5: GALÁPAGOS EVOLUTION
  {
    id: 5,
    name: 'Galápagos Evolution',
    category: 'Conservación & Ciencia',
    brandColor: '#059669',
    // 👈 [IMAGEN CLIENTE 5]: Cambia aquí la URL de tu quinto cliente
    logoUrl: 'https://www.museodelafelicidad.com/wp-content/uploads/2025/02/cropped-Logotipp-museo-de-la-felicidad.png',
    renderSvg: (brandColor: string) => (
      <svg viewBox="0 0 260 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-h-14">
        {/* Emblema Tortuga Marina & Olas */}
        <g transform="translate(10, 6)">
          <circle cx="28" cy="28" r="26" stroke={brandColor} strokeWidth="1.6" />
          <path d="M16 28C16 21 21 16 28 16C35 16 40 21 40 28C40 35 34 39 28 39C22 39 16 35 16 28Z" stroke="#34D399" strokeWidth="1.8" fill={`${brandColor}22`} />
          <path d="M28 16V39M16 28H40M20 22L36 34M20 34L36 22" stroke={brandColor} strokeWidth="1.2" />
          <path d="M10 44C18 39 38 39 46 44" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
        </g>
        {/* Wordmark Conservación */}
        <g transform="translate(74, 12)">
          <text x="0" y="21" fill="#FFFFFF" fontFamily="sans-serif" fontSize="15" fontWeight="900" letterSpacing="0.18em">
            GALÁPAGOS
          </text>
          <text x="0" y="38" fill={brandColor} fontFamily="sans-serif" fontSize="13" fontWeight="800" letterSpacing="0.32em">
            EVOLUTION
          </text>
          <text x="1" y="49" fill="#34D399" fontFamily="sans-serif" fontSize="7.5" fontWeight="600" letterSpacing="0.4em">
            CONSERVACIÓN & CIENCIA
          </text>
        </g>
      </svg>
    ),
  },

  // 6. CLIENTE 6: MEIK WIKING
  {
    id: 6,
    name: 'Meik Wiking',
    category: 'Hygge & Global Research',
    brandColor: '#D97706',
    // 👈 [IMAGEN CLIENTE 6]: Cambia aquí la URL de tu sexto cliente
    logoUrl: 'https://www.museodelafelicidad.com/wp-content/uploads/2025/02/cropped-Logotipp-museo-de-la-felicidad.png',
    renderSvg: (brandColor: string) => (
      <svg viewBox="0 0 260 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-h-14">
        {/* Isotipo Minimalista Escandinavo Hygge / Vela y Corazón */}
        <g transform="translate(12, 6)">
          <circle cx="28" cy="28" r="26" stroke={brandColor} strokeWidth="1.5" />
          {/* Llama nórdica de bienestar */}
          <path d="M28 14C28 14 36 22 36 28C36 33 32.5 37 28 37C23.5 37 20 33 20 28C20 22 28 14 28 14Z" fill={brandColor} opacity="0.9" />
          <circle cx="28" cy="29" r="3" fill="#FDE68A" />
          <path d="M24 43H32" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
        </g>
        {/* Wordmark Nórdico */}
        <g transform="translate(74, 12)">
          <text x="0" y="22" fill={brandColor} fontFamily="sans-serif" fontSize="17" fontWeight="900" letterSpacing="0.22em">
            MEIK WIKING
          </text>
          <text x="1" y="38" fill="#F59E0B" fontFamily="sans-serif" fontSize="8.5" fontWeight="700" letterSpacing="0.35em">
            HAPPINESS RESEARCH
          </text>
          <text x="1" y="49" fill="#FBBF24" fontFamily="sans-serif" fontSize="7.5" fontWeight="500" letterSpacing="0.45em">
            INSTITUTE COPENHAGEN
          </text>
        </g>
      </svg>
    ),
  },

  // 7. CLIENTE 7: VIVESMART INC
  {
    id: 7,
    name: 'Vivesmart INC',
    category: 'Escala & Marketing VSL',
    brandColor: '#FF4B2F',
    // 👈 [IMAGEN CLIENTE 7]: Cambia aquí la URL de tu séptimo cliente
    logoUrl: 'https://www.museodelafelicidad.com/wp-content/uploads/2025/02/cropped-Logotipp-museo-de-la-felicidad.png',
    renderSvg: (brandColor: string) => (
      <svg viewBox="0 0 260 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-h-14">
        {/* Isotipo Vector Cohete / Chevron de Crecimiento Acelerado */}
        <g transform="translate(10, 8)">
          <rect x="2" y="2" width="48" height="48" rx="12" fill={`${brandColor}15`} stroke={brandColor} strokeWidth="1.8" />
          <path d="M16 38L26 14L36 38L26 31L16 38Z" fill={brandColor} />
          <path d="M26 14V31" stroke="#FFA38F" strokeWidth="2" strokeLinecap="round" />
          <circle cx="26" cy="24" r="2.5" fill="#FFFFFF" />
        </g>
        {/* Wordmark Tech & Growth Marketing */}
        <g transform="translate(72, 12)">
          <text x="0" y="22" fill="#FFFFFF" fontFamily="sans-serif" fontSize="18" fontWeight="900" letterSpacing="0.16em">
            VIVESMART
          </text>
          <text x="0" y="39" fill={brandColor} fontFamily="sans-serif" fontSize="11" fontWeight="800" letterSpacing="0.32em">
            INC <tspan fill="#FFA38F" fontSize="9" fontWeight="600">• VSL 30K BUDGET</tspan>
          </text>
          <text x="1" y="50" fill="#FFA38F" fontFamily="sans-serif" fontSize="7.5" fontWeight="500" letterSpacing="0.35em">
            GROWTH & STRATEGY
          </text>
        </g>
      </svg>
    ),
  },
];

export const ClientLogosCarousel: React.FC = () => {
  // Estado para el índice del carrusel (0 a 6)
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const totalLogos = CLIENT_LOGOS.length; // 7 marcas

  // Auto-rotación suave cada 3.5 segundos cuando no esté pausado por el usuario
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalLogos);
    }, 3500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, totalLogos]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalLogos) % totalLogos);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalLogos);
  };

  /**
   * Creamos una lista circular extendida para que al desplazarse
   * siempre haya exactamente 5 logos nítidos y continuos en pantalla en desktop.
   */
  const extendedLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section 
      id="clients" 
      className="relative w-full py-16 sm:py-24 bg-[#000002] border-t border-b border-white/5 select-none overflow-hidden"
    >
      {/* 
        ========================================================================
        ALINEACIÓN Y MÁRGENES UNIFORMES
        Usamos max-w-[1806px] mx-auto px-4 sm:px-8 lg:px-12 w-full
        idéntico al inicio, proyectos y testimonios para coherencia geométrica.
        ========================================================================
      */}
      <div className="max-w-[1806px] mx-auto px-4 sm:px-8 lg:px-12 w-full relative z-10">
        
        {/* Cabecera de la Sección de Clientes con Controles Interactivos */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#FF4B2F] animate-pulse" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-white/70 font-semibold">
                CLIENTES & MARCAS ALIADAS
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-creato text-white tracking-tight">
              Marcas que Confían en el Ecosistema <span className="text-[#FF4B2F]">Creovibe</span>
            </h3>
          </div>

          {/* Controles de Navegación y Estado */}
          <div className="flex items-center gap-3">
            <span className="hidden md:inline-flex text-xs text-white/40 tracking-wider">
              5 en pantalla • Hover para ver color real
            </span>

            {/* Botón Pausa / Reproducción */}
            <button
              type="button"
              onClick={() => setIsPaused(!isPaused)}
              aria-label={isPaused ? "Reanudar rotación automática" : "Pausar rotación"}
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white flex items-center justify-center transition-all cursor-pointer"
              title={isPaused ? "Reanudar rotación automática" : "Pausar rotación"}
            >
              {isPaused ? <Play className="w-3.5 h-3.5 ml-0.5" /> : <Pause className="w-3.5 h-3.5" />}
            </button>

            {/* Flecha Anterior */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Cliente anterior"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white flex items-center justify-center transition-all cursor-pointer active:scale-95"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Flecha Siguiente */}
            <button
              type="button"
              onClick={handleNext}
              aria-label="Siguiente cliente"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white flex items-center justify-center transition-all cursor-pointer active:scale-95"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 
          ========================================================================
          CARRUSEL AUTOMÁTICO CON EXACTAMENTE 5 LOGOS EN PANTALLA EN DESKTOP
          - Desktop (lg:): exactamente 5 visibles (w-1/5 = 20% del ancho cada uno).
          - Tablet (sm/md:): 3 visible (w-1/3 = 33.33%).
          - Móvil: 2 visibles (w-1/2 = 50%).
          - Blanco y Negro por defecto -> Color completo e iluminación en hover.
          - Son exclusivamente imágenes y logotipos vectoriales gráficos (NO texto plano).
          ========================================================================
        */}
        <div 
          className="relative w-full overflow-hidden rounded-2xl bg-white/[0.015] border border-white/10 p-3 sm:p-5"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Sombras difuminadas en los extremos para un fade elegante */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-[#000002] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-[#000002] to-transparent z-10 pointer-events-none" />

          {/* Track del carrusel con animación suave por desplazamiento */}
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              // Desplaza suavemente 1 elemento hacia la izquierda
              // En desktop: 1 elemento = 20% (para mantener exactamente 5 visibles)
              transform: `translateX(-${(currentIndex * 100) / 5}%)`,
            }}
          >
            {extendedLogos.map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="w-1/2 sm:w-1/3 md:w-1/3 lg:w-1/5 flex-shrink-0 px-2 sm:px-3"
              >
                {/* 
                  Tarjeta de Logotipo:
                  - En estado normal: Grayscale 100% (Blanco y Negro puro), opacidad reducida.
                  - En estado hover: Grayscale 0% (Color Original Vibrante), escala 105% y brillo de marca.
                */}
                <div 
                  className="group relative h-28 sm:h-32 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300 flex items-center justify-center p-3 sm:p-4 cursor-pointer overflow-hidden shadow-sm"
                  style={{
                    // En hover aplicamos borde sutil con el color de marca
                    borderColor: 'rgba(255,255,255,0.08)',
                  }}
                  title={`${client.name} — ${client.category}`}
                >
                  {/* Resplandor suave en hover con el color de la marca */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none blur-xl -z-10"
                    style={{ backgroundColor: `${client.brandColor}18` }}
                  />

                  {/* 
                    LOGOTIPO GRÁFICO (IMAGEN REAL O SVG VECTORIAL)
                    REGLA: En blanco y negro por defecto, a color en hover.
                    'grayscale contrast-75 brightness-90 opacity-60 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 group-hover:opacity-100'
                  */}
                  <div className="w-full h-full flex items-center justify-center grayscale contrast-75 brightness-90 opacity-60 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105">
                    {client.logoUrl ? (
                      /* Si el usuario suministró la URL de una imagen PNG/JPG/SVG/WEBP */
                      <img 
                        src={client.logoUrl} 
                        alt={client.name}
                        className="max-h-14 max-w-[85%] w-auto h-auto object-contain"
                        loading="lazy"
                      />
                    ) : (
                      /* Logotipo gráfico vectorial oficial como imagen gráfica completa */
                      <div className="w-full h-full flex items-center justify-center max-w-[210px]">
                        {client.renderSvg(client.brandColor)}
                      </div>
                    )}
                  </div>

                  {/* Línea de acento inferior en hover */}
                  <div 
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{ backgroundColor: client.brandColor }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicadores de los 7 Clientes */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {CLIENT_LOGOS.map((client, idx) => {
            const isActive = currentIndex === idx;
            return (
              <button
                key={client.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Ir al logo de ${client.name}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  isActive 
                    ? 'w-7 h-2 bg-[#FF4B2F]' 
                    : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                }`}
                title={client.name}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
};
