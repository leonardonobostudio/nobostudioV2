import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface AboutSectionTwoProps {
  onMoreAboutClick: () => void;
}

export const AboutSectionTwo: React.FC<AboutSectionTwoProps> = ({ onMoreAboutClick }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [typedCount, setTypedCount] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsInView(true);
      setTypedCount(14);
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      setIsInView(true);
      setTypedCount(14);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          } else if (entry.boundingClientRect.top > 0) {
            // Re-arm when user scrolls back above the section
            setIsInView(false);
            setTypedCount(0);
          }
        });
      },
      { threshold: 0.18 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) {
      setTypedCount(0);
      return;
    }

    let count = 0;
    const interval = setInterval(() => {
      count += 1;
      setTypedCount(count);
      if (count >= 14) {
        clearInterval(interval);
      }
    }, 75); // Tipeo rítmico y dinámico estilo máquina de escribir

    return () => clearInterval(interval);
  }, [isInView]);

  const sobreText = "SOBRE ".slice(0, Math.min(typedCount, 6));
  const nosotrosText = typedCount > 6 ? "NOSOTROS".slice(0, typedCount - 6) : "";
  const isTyping = isInView && typedCount < 14;

  const serviceList1 = [
    { title: 'Identidad de marca', icon: '/images/icons/about-icon2-1.png' },
    { title: 'GEO', icon: '/images/icons/about-icon2-2.png' },
    { title: 'Embudos de marketing', icon: '/images/icons/about-icon2-3.png' },
    { title: 'Agentes de IA', icon: '/images/icons/about-icon2-4.png' },
    { title: 'CRM', icon: '/images/icons/about-icon2-5.png' },
  ];

  const serviceList2 = [
    { title: 'Paid Media', icon: '/images/icons/about-icon2-6.png' },
    { title: 'Social Ads', icon: '/images/icons/about-icon2-1.png' },
    { title: 'Desarrollo web', icon: '/images/icons/about-icon2-2.png' },
    { title: 'Relaciones públicas internacionales', icon: '/images/icons/about-icon2-3.png' },
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative w-full py-16 sm:py-24 lg:py-32 bg-[#14101a] border-t border-[#261e33] overflow-hidden select-none"
    >
      
      {/* Floating 3D Chrome Metallic Cubes (shape6.png) in bottom right corner */}
      <div className="hidden lg:block absolute right-0 sm:right-4 bottom-0 pointer-events-none z-10 w-[200px] lg:w-[260px] xl:w-[310px]">
        <img 
          src="/images/icons/shape6.png" 
          alt="3D chrome metallic cubes sculpture" 
          className="w-full h-auto animation__rotateY drop-shadow-[0_20px_50px_rgba(255,255,255,0.08)]"
        />
      </div>

      <div className="max-w-[1806px] mx-auto px-4 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-start">
          
          {/* Left Column: Image with motion blur (about2-1.jpg) with entrance animation */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className={`w-full max-w-[540px] aspect-[4/4.6] rounded-[16px] overflow-hidden border transition-all duration-1000 ease-out ${
              isInView 
                ? 'opacity-100 translate-y-0 scale-100 border-[#e3a5c7]/25 shadow-[0_20px_60px_rgba(227,165,199,0.16)]' 
                : 'opacity-0 translate-y-12 scale-95 border-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.9)]'
            }`}>
              <img 
                src="/images/resource/about2-1.jpg" 
                alt="Creative digital agency practitioner in motion" 
                className={`w-full h-full object-cover transition-all duration-1000 ease-out hover:scale-105 ${
                  isInView ? 'filter-none' : 'blur-sm'
                }`}
              />
            </div>
          </div>

          {/* Right Column: Title, Description, 2-Column Feature List, Button */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            
            {/* Monumental Headline: SOBRE NOSOTROS con animación de entrada tipo máquina de escribir */}
            <h2 
              className="font-clash text-white font-semibold text-[52px] sm:text-[90px] md:text-[120px] lg:text-[140px] xl:text-[165px] 2xl:text-[185px] leading-[0.88] tracking-[-0.04em] mb-6 sm:mb-8"
              aria-label="SOBRE NOSOTROS"
            >
              <span>
                {sobreText}
                {isTyping && typedCount <= 6 && (
                  <span 
                    className="inline-block w-[4px] sm:w-[6px] lg:w-[8px] h-[0.7em] bg-[#e3a5c7] ml-2 align-middle rounded-sm animate-pulse shadow-[0_0_12px_rgba(227,165,199,0.85)]"
                    aria-hidden="true"
                  />
                )}
              </span>
              {nosotrosText && (
                <span className="text-[#e3a5c7] ml-2 sm:ml-4 inline">
                  {nosotrosText}
                  {isTyping && (
                    <span 
                      className="inline-block w-[4px] sm:w-[6px] lg:w-[8px] h-[0.7em] bg-[#e3a5c7] ml-2 align-middle rounded-sm animate-pulse shadow-[0_0_12px_rgba(227,165,199,0.85)]"
                      aria-hidden="true"
                    />
                  )}
                </span>
              )}
            </h2>

            {/* Description Paragraph */}
            <p className="font-manrope text-base sm:text-xl lg:text-[24px] xl:text-[28px] font-normal leading-[1.35] text-neutral-300 mb-8 sm:mb-10 max-w-3xl">
              Somos un estudio de comunicación y creatividad especializado en marketing digital y estrategias de posicionamiento. Nuestro enfoque se basa en la personalización rigurosa, creando planes estratégicos que reflejan los objetivos y la identidad singular de cada cliente.
            </p>

            {/* Service / Feature List in 2 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 xl:gap-x-16 gap-y-4 mb-10 max-w-2xl">
              {/* Column 1 */}
              <ul className="space-y-4">
                {serviceList1.map((item) => (
                  <li key={item.title} className="flex items-center gap-3 text-white font-manrope text-[15px] sm:text-[17px] font-medium">
                    <span 
                      className="w-5 h-5 shrink-0 inline-block bg-[#e3a5c7]"
                      style={{
                        maskImage: `url(${item.icon})`,
                        WebkitMaskImage: `url(${item.icon})`,
                        maskSize: 'contain',
                        WebkitMaskSize: 'contain',
                        maskRepeat: 'no-repeat',
                        WebkitMaskRepeat: 'no-repeat',
                        maskPosition: 'center',
                        WebkitMaskPosition: 'center',
                      }}
                    />
                    <span>{item.title}</span>
                  </li>
                ))}
              </ul>

              {/* Column 2 */}
              <ul className="space-y-4">
                {serviceList2.map((item) => (
                  <li key={item.title} className="flex items-center gap-3 text-white font-manrope text-[15px] sm:text-[17px] font-medium">
                    <span 
                      className="w-5 h-5 shrink-0 inline-block bg-[#e3a5c7]"
                      style={{
                        maskImage: `url(${item.icon})`,
                        WebkitMaskImage: `url(${item.icon})`,
                        maskSize: 'contain',
                        WebkitMaskSize: 'contain',
                        maskRepeat: 'no-repeat',
                        WebkitMaskRepeat: 'no-repeat',
                        maskPosition: 'center',
                        WebkitMaskPosition: 'center',
                      }}
                    />
                    <span>{item.title}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button: Más sobre nosotros ↗ */}
            <div>
              <button
                type="button"
                onClick={onMoreAboutClick}
                className="theme-btn-four"
              >
                <span>Más sobre nosotros</span>
                <span className="btn-icon">
                  <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                </span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
