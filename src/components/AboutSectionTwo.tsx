import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface AboutSectionTwoProps {
  onMoreAboutClick: () => void;
}

export const AboutSectionTwo: React.FC<AboutSectionTwoProps> = ({ onMoreAboutClick }) => {
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
    <section id="about" className="relative w-full py-16 sm:py-24 lg:py-32 bg-[#000002] border-t border-[#1a1a1a] overflow-hidden select-none">
      
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
          
          {/* Left Column: Image with motion blur (about2-1.jpg) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="w-full max-w-[540px] aspect-[4/4.6] rounded-[16px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.9)] border border-white/5">
              <img 
                src="/images/resource/about2-1.jpg" 
                alt="Creative digital agency practitioner in motion" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column: Title, Description, 2-Column Feature List, Button */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            
            {/* Monumental Headline: SOBRE NOSOTROS */}
            <h2 className="font-clash text-white font-semibold text-[52px] sm:text-[90px] md:text-[120px] lg:text-[140px] xl:text-[165px] 2xl:text-[185px] leading-[0.88] tracking-[-0.04em] mb-6 sm:mb-8">
              SOBRE NOSOTROS
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
                    <img 
                      src={item.icon} 
                      alt="" 
                      className="w-5 h-5 shrink-0 object-contain"
                    />
                    <span>{item.title}</span>
                  </li>
                ))}
              </ul>

              {/* Column 2 */}
              <ul className="space-y-4">
                {serviceList2.map((item) => (
                  <li key={item.title} className="flex items-center gap-3 text-white font-manrope text-[15px] sm:text-[17px] font-medium">
                    <img 
                      src={item.icon} 
                      alt="" 
                      className="w-5 h-5 shrink-0 object-contain"
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
