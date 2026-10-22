import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onServiceClick: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onServiceClick }) => {
  // Card 0 (or hovered card) is highlighted like in the reference screenshot
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);

  const services = [
    {
      id: 1,
      title: 'Identidad de Marca',
      desc: 'Desde logotipos hasta guías de estilo completas, creamos identidades visuales memorables y coherentes que generan máxima confianza.',
      icon: '/images/icons/service-icon1-1.png',
    },
    {
      id: 2,
      title: 'Publicidad Digital',
      desc: 'Estrategias de adquisición de pago y paid media diseñadas para aumentar el engagement, captar nuevos clientes y escalar tu visibilidad.',
      icon: '/images/icons/service-icon1-2.png',
    },
    {
      id: 3,
      title: 'Estrategia de Marca',
      desc: 'Construimos el posicionamiento estratégico, la narrativa corporativa y la arquitectura de valor para diferenciar tu marca en el mercado.',
      icon: '/images/icons/service-icon1-3.png',
    },
    {
      id: 4,
      title: 'Desarrollo Web',
      desc: 'Creamos sitios web y aplicaciones interactivas de alto rendimiento, optimizadas para conversión, velocidad y experiencia de usuario impecable.',
      icon: '/images/icons/service-icon1-4.png',
    },
    {
      id: 5,
      title: 'Relaciones Públicas Internacionales',
      desc: 'Impulsamos tu presencia global en los principales medios de comunicación, foros sectoriales y ecosistemas de innovación internacional.',
      icon: '/images/icons/service-icon1-5.png',
    },
    {
      id: 6,
      title: 'Marketing 360',
      desc: 'Soluciones integrales de crecimiento omnicanal que combinan creatividad, analítica de datos, SEO y optimización continua de embudos.',
      icon: '/images/icons/service-icon3-1.png',
    },
  ];

  return (
    <section id="services" className="relative w-full py-20 lg:py-28 bg-[#14101a] border-t border-[#261e33] select-none scroll-mt-28">
      <div className="max-w-[1806px] mx-auto px-4 sm:px-8 lg:px-12 w-full relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 lg:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="font-creato text-base sm:text-lg font-medium text-[#e3a5c7] uppercase tracking-wider mb-2">
              Servicios Que Ofrecemos
            </div>
            <h2 className="font-clash text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight">
              Soluciones Diseñadas para Crecer
            </h2>
          </div>
          <p className="font-manrope text-sm sm:text-base text-neutral-400 max-w-md">
            Desarrollamos experiencias de marca y plataformas de alto impacto para negocios que buscan liderar su categoría.
          </p>
        </div>

        {/* 6 Cards Grid (3 per row on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {services.map((service, index) => {
            const isHighlighted = activeCardIndex === index;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveCardIndex(index)}
                onClick={() => onServiceClick(service.title)}
                className={`relative rounded-[22px] bg-[#1c1527] p-8 sm:p-10 lg:p-11 overflow-hidden transition-all duration-300 flex flex-col justify-between min-h-[380px] sm:min-h-[400px] group cursor-pointer ${
                  isHighlighted 
                    ? 'border border-[#e3a5c7] shadow-[0_12px_40px_rgba(227,165,199,0.22)]' 
                    : 'border border-white/5 hover:border-[#e3a5c7]/60'
                }`}
              >
                {/* Dot-matrix pattern shape in the top-right corner */}
                <div 
                  className="absolute top-0 right-0 pointer-events-none w-36 sm:w-44 h-36 sm:h-44 bg-[#e3a5c7]/35"
                  style={{
                    maskImage: 'url(/images/icons/shape1.png)',
                    WebkitMaskImage: 'url(/images/icons/shape1.png)',
                    maskSize: 'contain',
                    WebkitMaskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    WebkitMaskRepeat: 'no-repeat',
                    maskPosition: 'top right',
                    WebkitMaskPosition: 'top right',
                  }}
                />

                {/* Top: Wireframe icon */}
                <div className="relative z-10 mb-12 sm:mb-16">
                  <div className="w-14 h-14">
                    <div 
                      className={`w-full h-full transition-all duration-300 ${
                        isHighlighted 
                          ? 'bg-[#e3a5c7] transform -scale-x-100 scale-105' 
                          : 'bg-white/80 group-hover:bg-[#e3a5c7] group-hover:-scale-x-100 group-hover:scale-105'
                      }`}
                      style={{
                        maskImage: `url(${service.icon})`,
                        WebkitMaskImage: `url(${service.icon})`,
                        maskSize: 'contain',
                        WebkitMaskSize: 'contain',
                        maskRepeat: 'no-repeat',
                        WebkitMaskRepeat: 'no-repeat',
                        maskPosition: 'left center',
                        WebkitMaskPosition: 'left center',
                      }}
                    />
                  </div>
                </div>

                {/* Middle: Title & Description */}
                <div className="relative z-10 mb-8">
                  <h3 className="font-clash text-2xl sm:text-[26px] font-semibold text-white mb-3 tracking-tight group-hover:text-[#e3a5c7] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="font-manrope text-[15px] sm:text-base text-neutral-400 leading-relaxed font-normal">
                    {service.desc}
                  </p>
                </div>

                {/* Bottom: Read More Action Button */}
                <div className="relative z-10 pt-1">
                  <div className="inline-flex items-center gap-3 text-base font-medium text-white">
                    <span className="font-manrope">Read More</span>
                    <span 
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 group-hover:translate-x-1 ${
                        isHighlighted 
                          ? 'bg-[#e3a5c7] text-[#14101a] shadow-md' 
                          : 'bg-[#291f37] text-white group-hover:bg-[#e3a5c7] group-hover:text-[#14101a]'
                      }`}
                    >
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
