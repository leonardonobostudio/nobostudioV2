import React, { useState } from 'react';
import { ArrowDownRight, Plus } from 'lucide-react';
import { AgencyArrowLogo } from './AgencyArrowLogo.tsx';

interface HeroSectionProps {
  isTechMode: boolean;
  onToggleTechMode: () => void;
  onAgencyCardClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  isTechMode,
  onToggleTechMode,
  onAgencyCardClick,
}) => {
  const [torusHovered, setTorusHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const rect = currentTarget.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((clientY - rect.top) / rect.height - 0.5) * 20;
    setMousePos({ x, y });
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative w-full bg-diagonal-stripes px-6 md:px-10 lg:px-12 pt-6 pb-14 overflow-hidden flex flex-col justify-between"
    >
      {/* Subtle top ambient glow */}
      <div 
        className="pointer-events-none absolute -top-32 left-1/4 w-[500px] h-[350px] rounded-full blur-[130px] opacity-20 transition-colors duration-700"
        style={{ backgroundColor: isTechMode ? '#00e5ff' : '#ff3811' }}
      />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto w-full flex flex-col justify-between">
        
        {/* Top Tag / Kicker: — DIGITAL GROWTH */}
        <div className="flex items-center gap-3.5 mb-4 select-none">
          <span 
            className="w-8 h-[2px] transition-colors duration-300"
            style={{ backgroundColor: isTechMode ? '#00e5ff' : '#ff3811' }}
          />
          <span className="text-xs sm:text-sm md:text-base font-bold tracking-[0.25em] text-white uppercase font-sans">
            DIGITAL GROWTH
          </span>
        </div>

        {/* Hero Headline Area */}
        <div className="relative py-2 select-none w-full">
          {/* Row 1: DESIGN & + Technical Doodle Grid + 3D Coral Torus */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 sm:gap-6 flex-wrap sm:flex-nowrap">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[4.8rem] xl:text-[5.9rem] 2xl:text-[6.6rem] font-black font-syne tracking-tight text-white leading-none whitespace-nowrap">
                DESIGN &amp;
              </h1>

              {/* Technical Coordinate Grid with Sketchy Doodle */}
              <div className="relative w-24 h-18 sm:w-32 sm:h-22 md:w-40 md:h-26 red-coord-grid border border-[#ff3811]/30 rounded-sm flex items-center justify-center p-2 overflow-hidden shadow-inner shrink-0">
                <div className="absolute top-1 left-1.5 text-[8px] font-mono text-[#ff3811]/60">x:04 y:18</div>
                
                {/* White Doodle Vector with arc and sparks */}
                <svg 
                  viewBox="0 0 160 100" 
                  className="w-full h-full stroke-white fill-none stroke-[2.2] stroke-linecap-round stroke-linejoin-round"
                >
                  <path d="M 12 28 C 25 15, 45 15, 60 45 C 75 75, 85 85, 95 65" />
                  <path d="M 95 65 C 105 45, 115 40, 120 70" />
                  <path d="M 120 70 L 138 42" />
                  <path d="M 125 70 L 148 65" />
                  <path d="M 122 75 L 142 85" />
                  <path d="M 85 20 L 95 30" strokeWidth="1.5" />
                  <path d="M 95 20 L 85 30" strokeWidth="1.5" />
                </svg>
              </div>
            </div>

            {/* Floating 3D Coral Beaded Torus Asset with soft radial mask */}
            <div 
              onMouseEnter={() => setTorusHovered(true)}
              onMouseLeave={() => setTorusHovered(false)}
              style={{
                transform: `perspective(1000px) rotateX(${-mousePos.y * 0.7}deg) rotateY(${mousePos.x * 0.7}deg) scale(${torusHovered ? 1.05 : 1})`,
                transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              className="w-28 h-28 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 xl:w-68 xl:h-68 shrink-0 relative flex items-center justify-center cursor-grab active:cursor-grabbing select-none -mt-2"
            >
              <div 
                className="absolute inset-2 rounded-full blur-2xl opacity-40 transition-all duration-500 pointer-events-none"
                style={{ backgroundColor: isTechMode ? '#00e5ff' : '#ff451a' }}
              />
              <img
                src="/src/assets/images/coral_beaded_torus_1792598948099.jpg"
                alt="3D coral beaded organic mobius torus sculpture"
                style={{
                  maskImage: 'radial-gradient(circle, black 60%, transparent 72%)',
                  WebkitMaskImage: 'radial-gradient(circle, black 60%, transparent 72%)',
                }}
                className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(255,69,26,0.45)] animate-float-slow select-none pointer-events-none"
              />
            </div>
          </div>

          {/* Row 2: TECHNO + Interactive Pill Switch [ O ] + LOGY (All in ONE single horizontal line) */}
          <div className="flex items-center flex-nowrap whitespace-nowrap gap-x-1.5 sm:gap-x-3 md:gap-x-4 mt-2 overflow-x-auto no-scrollbar">
            <span className="text-4xl sm:text-6xl md:text-7xl lg:text-[4.8rem] xl:text-[5.9rem] 2xl:text-[6.6rem] font-black font-syne tracking-tight text-white leading-none whitespace-nowrap">
              TECHNO
            </span>

            {/* Interactive Pill Dimension Switch for letter 'O' */}
            <div className="relative inline-flex items-center select-none shrink-0 mx-1 sm:mx-1.5">
              {/* CAD Dimension Guide Line on the left */}
              <div 
                className="absolute -left-2 sm:-left-3 top-0 bottom-0 w-2 flex flex-col items-center justify-between pointer-events-none"
                title="CAD Dimension Guide"
              >
                <span className="w-1.5 sm:w-2 h-[2px] bg-white" />
                <span className="w-[1.5px] h-full bg-white/80" />
                <span className="w-1.5 sm:w-2 h-[2px] bg-white" />
              </div>

              {/* The Pill Slider Toggle */}
              <button
                type="button"
                onClick={onToggleTechMode}
                aria-label={`Toggle mode: Currently in ${isTechMode ? 'Tech' : 'Design'} mode. Click to toggle.`}
                className="group relative h-[32px] sm:h-[44px] md:h-[54px] lg:h-[64px] xl:h-[72px] w-[70px] sm:w-[98px] md:w-[124px] lg:w-[148px] xl:w-[168px] rounded-full border-[2.5px] sm:border-[3px] md:border-[4px] border-white bg-black px-1 sm:px-1.5 flex items-center transition-all duration-300 hover:border-neutral-200 cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.15)] shrink-0"
              >
                {/* Switch knob */}
                <span
                  className={`w-5 h-5 sm:w-7 sm:h-7 md:w-9 md:h-9 lg:w-11 lg:h-11 xl:w-13 xl:h-13 rounded-full bg-white shadow-md transform transition-all duration-300 ease-out flex items-center justify-center ${
                    isTechMode 
                      ? 'translate-x-[34px] sm:translate-x-[48px] md:translate-x-[64px] lg:translate-x-[78px] xl:translate-x-[90px]' 
                      : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            {/* LOGY in fiery neon red-orange */}
            <span 
              className="text-4xl sm:text-6xl md:text-7xl lg:text-[4.8rem] xl:text-[5.9rem] 2xl:text-[6.6rem] font-black font-syne tracking-tight leading-none transition-colors duration-500 whitespace-nowrap"
              style={{ color: isTechMode ? '#00e5ff' : '#ff3811' }}
            >
              LOGY
            </span>
          </div>
        </div>

        {/* Lower Row: Logo Arrow | Divider | Philosophy & Social Proof | "Hey!" Card */}
        <div className="mt-8 md:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center">
          
          {/* Left + Center: Big Orange Arrow Logo + Divider + Description & Avatars */}
          <div className="lg:col-span-8 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
            {/* The Bold Brutalist Arrow Mark */}
            <AgencyArrowLogo 
              color={isTechMode ? '#00e5ff' : '#FF3811'} 
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 shrink-0"
            />

            {/* Vertical Divider */}
            <div className="hidden md:block w-[1px] h-24 bg-white/15 shrink-0" />

            {/* Mission Statement & Social Proof Stack */}
            <div className="flex flex-col gap-5 max-w-lg">
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
                We blend creative design with cutting-edge technology to build digital experiences that are visually stunning, highly functional, and built to scale.
              </p>

              {/* Avatar stack + 18k+ customers word */}
              <div className="flex items-center gap-4">
                {/* 3 Circular Avatars + 1 Plus Icon */}
                <div className="flex items-center -space-x-3.5">
                  <img
                    src="/src/assets/images/avatar_hijab_designer_1792598976744.jpg"
                    alt="Customer portrait 1"
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border-2 border-[#09090b] shadow-md"
                  />
                  <img
                    src="/src/assets/images/avatar_senior_leader_1792598976572.jpg"
                    alt="Customer portrait 2"
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border-2 border-[#09090b] shadow-md"
                  />
                  <img
                    src="/src/assets/images/avatar_creative_director_1792598976533.jpg"
                    alt="Customer portrait 3"
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border-2 border-[#09090b] shadow-md"
                  />
                  {/* Plus Circle */}
                  <div 
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center text-white border-2 border-[#09090b] shadow-md transition-colors duration-300 -ml-3.5"
                    style={{ backgroundColor: isTechMode ? '#00e5ff' : '#FF3811' }}
                  >
                    <Plus className="w-5 h-5 text-white stroke-[2.5]" />
                  </div>
                </div>

                {/* 18k+ customers word */}
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-white tracking-tight leading-none font-syne">
                    18k+
                  </span>
                  <span className="text-xs sm:text-sm text-neutral-400 mt-0.5">
                    customers word.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: "Hey! Word - Class Digital Agency" Card */}
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <div 
              onClick={onAgencyCardClick}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onAgencyCardClick();
                }
              }}
              aria-label="Learn more about our World Class Digital Agency"
              className="w-full sm:w-[320px] md:w-[340px] bg-[#111114] border border-white/10 hover:border-white/20 rounded-[2rem] p-7 md:p-8 relative overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
            >
              {/* Background ambient watermarks or subtle glow */}
              <div 
                className="absolute -right-8 -bottom-8 w-40 h-40 rounded-full blur-3xl opacity-15 transition-colors duration-500 pointer-events-none"
                style={{ backgroundColor: isTechMode ? '#00e5ff' : '#ff3811' }}
              />

              <div className="flex flex-col justify-between h-40 sm:h-44 relative z-10">
                {/* Hey! Heading */}
                <h2 className="text-6xl md:text-7xl font-bold font-syne text-white tracking-tight leading-none">
                  Hey!
                </h2>

                {/* Word - Class Digital Agency Text + Round Action Button */}
                <div className="flex items-end justify-between gap-4 mt-4">
                  <div className="text-base sm:text-lg font-medium text-white leading-snug font-sans">
                    <div>Word - Class</div>
                    <div>Digital Agency</div>
                  </div>

                  {/* White circular action button with black arrow */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white text-black flex items-center justify-center shrink-0 shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-45">
                    <ArrowDownRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
