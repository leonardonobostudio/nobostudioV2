import React from 'react';

export const MarqueeSeparator: React.FC = () => {
  const marqueeItems1 = [
    'Digital Agency',
    'Development',
    'Mobile App Development',
    'Project & Product Consulting',
    'Web Design',
  ];

  const marqueeItems2 = [
    'Project & Product Consulting',
    'Mobile App Development',
    'Development',
    'Web Design',
    'Digital Agency',
  ];

  // Repeat items for seamless infinite loop
  const renderList = (items: string[], times = 4, darkText = false) => {
    return Array.from({ length: times }).flatMap((_, idx) =>
      items.map((item, itemIdx) => (
        <span key={`${idx}-${itemIdx}`} className="inline-flex items-center whitespace-nowrap">
          <span className={`text-xl sm:text-2xl lg:text-[28px] font-bold uppercase tracking-wider font-creato ${
            darkText ? 'text-[#14101a]' : 'text-white'
          }`}>
            {item}
          </span>
          <img 
            src="/images/icons/marquee2.png" 
            alt="✦" 
            className={`w-4 h-4 sm:w-5 sm:h-5 mx-6 sm:mx-8 shrink-0 object-contain ${
              darkText ? 'brightness-0' : ''
            }`}
          />
        </span>
      ))
    );
  };

  return (
    <section className="relative w-full py-16 sm:py-24 bg-[#14101a] overflow-hidden select-none">
      
      {/* 1. Dark Horizontal Ribbon (Background) */}
      <div className="relative w-full bg-[#1c1626] py-6 sm:py-7 overflow-hidden flex items-center z-10 border-t border-b border-white/5">
        <div className="animate-marquee-left flex items-center">
          {renderList(marqueeItems1)}
        </div>
      </div>

      {/* 2. Purple Angled Ribbon (Foreground, rotated -3.44deg) */}
      <div className="relative w-[115%] -left-[7.5%] -mt-8 sm:-mt-11 bg-[#e3a5c7] py-6 sm:py-7 shadow-[0_15px_40px_rgba(227,165,199,0.35)] transform -rotate-[3.44deg] overflow-hidden flex items-center z-20">
        <div className="animate-marquee-right flex items-center">
          {renderList(marqueeItems2, 4, true)}
        </div>
      </div>

    </section>
  );
};
