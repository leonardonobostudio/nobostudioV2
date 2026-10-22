import React from 'react';

export const FooterSection: React.FC = () => {
  return (
    <footer className="w-full bg-[#000002] text-white pt-16 pb-12 relative overflow-hidden">
      {/* Contenedor principal alineado: max-w-[1806px] */}
      <div className="max-w-[1806px] mx-auto px-4 sm:px-8 lg:px-12 w-full">
        
        {/* ========================================================= */}
        {/* Insignia / Emblema Holográfico de la Imagen 3            */}
        {/* ========================================================= */}
        <div className="mb-14">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 group">
            <svg 
              viewBox="0 0 100 100" 
              className="w-full h-full filter drop-shadow-[0_0_25px_rgba(168,85,247,0.35)] transition-transform duration-700 group-hover:rotate-45"
            >
              <defs>
                {/* Gradiente Iridiscente Cósmico idéntico al de la imagen 3 */}
                <radialGradient id="iridescentGradient" cx="40%" cy="35%" r="65%">
                  <stop offset="0%" stopColor="#38BDF8" />
                  <stop offset="35%" stopColor="#6366F1" />
                  <stop offset="70%" stopColor="#C084FC" />
                  <stop offset="90%" stopColor="#F43F5E" />
                  <stop offset="100%" stopColor="#FB923C" />
                </radialGradient>
              </defs>
              
              {/* Estrella poligonal facetada de 14 puntas */}
              <polygon 
                points="
                  50,4 58,16 72,12 76,26 90,28 88,42 98,50 
                  88,58 90,72 76,74 72,88 58,84 50,96 
                  42,84 28,88 24,74 10,72 12,58 2,50 
                  12,42 10,28 24,26 28,12 42,16
                "
                fill="url(#iridescentGradient)"
              />
            </svg>
          </div>
        </div>

        {/* ========================================================= */}
        {/* Barra Inferior del Footer (exacta a la Imagen 3)          */}
        {/* ========================================================= */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          
          {/* Lado Izquierdo: NoboStudio · Madrid & Guayaquil · © 2026 Todos los derechos reservados */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-zinc-400">
            <span className="font-bold text-white tracking-tight text-base font-syne">
              NoboStudio
            </span>
            <span className="text-zinc-600">·</span>
            <span className="text-zinc-300">
              Madrid &amp; Guayaquil
            </span>
            <span className="text-zinc-600">·</span>
            <span className="text-zinc-500">
              © 2026 Todos los derechos reservados
            </span>
          </div>

          {/* Lado Derecho: Enlaces de Navegación & Botón Social */}
          <div className="flex items-center gap-6 sm:gap-8">
            <nav className="flex items-center gap-6 text-zinc-400 text-sm font-medium">
              <a 
                href="#about" 
                className="hover:text-white transition-colors"
              >
                Nosotros
              </a>
              <a 
                href="#service" 
                className="hover:text-white transition-colors"
              >
                Servicios
              </a>
              <a 
                href="#projects" 
                className="hover:text-white transition-colors"
              >
                Proyectos
              </a>
            </nav>

            {/* Icono Social Redondo (Facebook f) como en la Imagen 3 */}
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Facebook de NoboStudio"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white transition-all cursor-pointer"
            >
              <svg 
                className="w-4 h-4 fill-current" 
                viewBox="0 0 24 24"
              >
                <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.6 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" />
              </svg>
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};
