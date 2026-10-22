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
    <section id="services" className="relative w-full py-20 lg:py-28 bg-[#000002] border-t border-[#1a1a1a] select-none scroll-mt-28">
      <div className="max-w-[1806px] mx-auto px-4 sm:px-8 lg:px-12 w-full relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 lg:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="font-creato text-base sm:text-lg font-medium text-[#FF4B2F] uppercase tracking-wider mb-2">
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
                className={`relative rounded-[22px] bg-[#161616] p-8 sm:p-10 lg:p-11 overflow-hidden transition-all duration-300 flex flex-col justify-between min-h-[380px] sm:min-h-[400px] group cursor-pointer ${
                  isHighlighted 
                    ? 'border border-[#FF4B2F] shadow-[0_12px_40px_rgba(255,75,47,0.18)]' 
                    : 'border border-white/5 hover:border-[#FF4B2F]/60'
                }`}
              >
                {/* Red dot-matrix pattern shape in the top-right corner */}
                <div className="absolute top-0 right-0 pointer-events-none opacity-85">
                  <img 
                    src="/images/icons/shape1.png" 
                    alt="" 
                    className="w-36 sm:w-44 h-auto object-contain"
                  />
                </div>

                {/* Top: Wireframe icon */}
                <div className="relative z-10 mb-12 sm:mb-16">
                  <div className="w-14 h-14">
                    <img 
                      src={service.icon} 
                      alt={service.title} 
                      className={`w-full h-full object-contain transition-all duration-300 ${
                        isHighlighted 
                          ? 'filter-none transform -scale-x-100 scale-105' 
                          : 'brightness-0 invert opacity-90 group-hover:filter-none group-hover:-scale-x-100 group-hover:scale-105'
                      }`}
                    />
                  </div>
                </div>

                {/* Middle: Title & Description */}
                <div className="relative z-10 mb-8">
                  <h3 className="font-clash text-2xl sm:text-[26px] font-semibold text-white mb-3 tracking-tight group-hover:text-[#FF4B2F] transition-colors leading-snug">
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
                          ? 'bg-[#FF4B2F] text-white shadow-md' 
                          : 'bg-[#242424] text-white group-hover:bg-[#FF4B2F]'
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
