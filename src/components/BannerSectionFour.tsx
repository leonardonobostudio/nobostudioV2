import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { TypewriterHeroTitle } from './TypewriterHeroTitle.tsx';

interface BannerSectionFourProps {
  onHeyCardClick?: () => void;
}

export const BannerSectionFour: React.FC<BannerSectionFourProps> = ({ onHeyCardClick }) => {
  const [toggleActive, setToggleActive] = useState(false);

  return (
    <section className="relative w-full pt-[210px] pb-16 overflow-hidden min-h-[calc(100vh-88px)] flex flex-col justify-between select-none">
      {/* Background Graphic Texture - Diagonal Technical Mesh (Malla de Fondo) matching reference */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundColor: '#14101a',
          backgroundImage: `
            repeating-linear-gradient(65deg, rgba(255, 255, 255, 0.038) 0px, rgba(255, 255, 255, 0.038) 1px, transparent 1px, transparent 7px),
            radial-gradient(ellipse 800px 500px at 70% 30%, rgba(227, 165, 199, 0.16) 0%, transparent 70%),
            radial-gradient(circle at 50% 50%, rgba(28, 22, 38, 0.4) 0%, #14101a 95%)
          `,
        }}
      />

      {/* Shape 1: Gradient Organic Starburst (Replacing orange torus with requested asset) */}
      <div className="hidden lg:block absolute right-[40px] xl:right-[70px] top-[160px] xl:top-[200px] pointer-events-none z-10 w-[300px] xl:w-[420px] 2xl:w-[470px]">
        {/* Ambient atmospheric backlight in harmony with purple/cyan gradient */}
        <div className="absolute inset-8 bg-gradient-to-tr from-[#38bdf8]/15 via-[#c084fc]/20 to-[#e3a5c7]/25 blur-3xl rounded-full pointer-events-none" />
        <img 
          src="/assets/aistudio/ElanStudioo_93bb7843.png?v=2" 
          alt="Forma gráfica orgánica con degradado morado y cyan" 
          className="w-full h-auto animation__rotateY drop-shadow-[0_25px_60px_rgba(227,165,199,0.32)] select-none relative z-10"
        />
      </div>

      {/* Main Outer Box (max-width: 1806px; matching global section padding) */}
      <div className="max-w-[1806px] mx-auto px-4 sm:px-8 lg:px-12 w-full relative z-10 flex-1 flex flex-col justify-between">
        
        {/* Banner Title Box */}
        <div className="relative mb-[60px] w-full">

          {/* Subtitle: — AGENCIA DE GROWTH */}
          <div className="font-creato text-xl sm:text-2xl lg:text-[32px] font-medium text-[#F5F7F5] uppercase tracking-normal relative pl-[54px] mb-[16px] flex items-center">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[39px] h-[2px] bg-[#e3a5c7]" />
            AGENCIA DE GROWTH
          </div>

          {/* Title: MARKETING <br /> NOB [O - Vector] STUDIO */}
          <h1 className="font-clash text-[44px] sm:text-[68px] md:text-[92px] lg:text-[116px] xl:text-[142px] 2xl:text-[160px] leading-[1.05] uppercase tracking-[-0.06em] text-white font-semibold">
            {/* Line 1: MARKETING + CAD Red Wireframe Mesh beside it */}
            <div className="relative inline-flex items-center">
              <span className="relative z-20">MARKETING</span>

              {/* Shape 2: Exact CAD Red Wireframe Mesh (Malla Técnica Roja) + White Doodle */}
              <div className="hidden lg:block absolute left-[calc(100%-80px)] -top-[40px] xl:-top-[55px] pointer-events-none z-10 bounce-x">
                <div className="relative w-[390px] xl:w-[440px] h-[220px] xl:h-[250px] flex items-center justify-center">
                  {/* Precision CAD Wireframe Mesh SVG (exact 56px x 38px rectangular cells, 7 cols x 6 rows) */}
                  <svg 
                    className="absolute inset-0 w-full h-full overflow-visible"
                    viewBox="0 0 420 240"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      maskImage: 'radial-gradient(ellipse 65% 65% at 50% 50%, black 20%, rgba(0, 0, 0, 0.6) 60%, transparent 95%)',
                      WebkitMaskImage: 'radial-gradient(ellipse 65% 65% at 50% 50%, black 20%, rgba(0, 0, 0, 0.6) 60%, transparent 95%)',
                    }}
                  >
                    <defs>
                      {/* Smooth ambient depth shadow behind doodle */}
                      <radialGradient id="meshDepthShadow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#0d0912" stopOpacity="0.5" />
                        <stop offset="45%" stopColor="#0d0912" stopOpacity="0.25" />
                        <stop offset="85%" stopColor="#0d0912" stopOpacity="0.05" />
                        <stop offset="100%" stopColor="#0d0912" stopOpacity="0" />
                      </radialGradient>
                      {/* Silky soft ambient purple glow fading smoothly to transparent with no hard edge */}
                      <radialGradient id="meshCenterGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#e3a5c7" stopOpacity="0.14" />
                        <stop offset="40%" stopColor="#e3a5c7" stopOpacity="0.06" />
                        <stop offset="75%" stopColor="#e3a5c7" stopOpacity="0.015" />
                        <stop offset="100%" stopColor="#e3a5c7" stopOpacity="0" />
                      </radialGradient>
                    </defs>

                    {/* Smooth depth shadow and ambient gradient (replaces hard ellipse to eliminate stain effect) */}
                    <rect x="0" y="0" width="420" height="240" fill="url(#meshDepthShadow)" />
                    <rect x="0" y="0" width="420" height="240" fill="url(#meshCenterGlow)" />

                    {/* 7 Vertical Wireframe Grid Lines (56px interval) in Harmonious Purple Contrast */}
                    <line x1="28" y1="15" x2="28" y2="225" stroke="#e3a5c7" strokeWidth="1" strokeOpacity="0.25" />
                    <line x1="84" y1="15" x2="84" y2="225" stroke="#e3a5c7" strokeWidth="1" strokeOpacity="0.4" />
                    <line x1="140" y1="15" x2="140" y2="225" stroke="#e3a5c7" strokeWidth="1" strokeOpacity="0.6" />
                    <line x1="196" y1="15" x2="196" y2="225" stroke="#e3a5c7" strokeWidth="1" strokeOpacity="0.7" />
                    <line x1="252" y1="15" x2="252" y2="225" stroke="#e3a5c7" strokeWidth="1" strokeOpacity="0.7" />
                    <line x1="308" y1="15" x2="308" y2="225" stroke="#e3a5c7" strokeWidth="1" strokeOpacity="0.5" />
                    <line x1="364" y1="15" x2="364" y2="225" stroke="#e3a5c7" strokeWidth="1" strokeOpacity="0.25" />

                    {/* 6 Horizontal Wireframe Grid Lines (38px interval) in Harmonious Purple Contrast */}
                    <line x1="20" y1="20" x2="380" y2="20" stroke="#e3a5c7" strokeWidth="1" strokeOpacity="0.25" />
                    <line x1="20" y1="58" x2="380" y2="58" stroke="#e3a5c7" strokeWidth="1" strokeOpacity="0.45" />
                    <line x1="20" y1="96" x2="380" y2="96" stroke="#e3a5c7" strokeWidth="1" strokeOpacity="0.65" />
                    <line x1="20" y1="134" x2="380" y2="134" stroke="#e3a5c7" strokeWidth="1" strokeOpacity="0.65" />
                    <line x1="20" y1="172" x2="380" y2="172" stroke="#e3a5c7" strokeWidth="1" strokeOpacity="0.45" />
                    <line x1="20" y1="210" x2="380" y2="210" stroke="#e3a5c7" strokeWidth="1" strokeOpacity="0.25" />
                  </svg>

                  {/* White Doodle Icon placed inside the grid */}
                  <img 
                    src="/images/icons/shape31.png" 
                    alt="Technical sketch doodle" 
                    className="w-[160px] xl:w-[185px] h-auto relative z-10 drop-shadow-[0_2px_8px_rgba(255,255,255,0.2)] translate-x-3 -translate-y-1"
                  />
                </div>
              </div>
            </div>

            {/* Line 2: NOB [switch] STUDIO with typewriter effect restarting every 6 seconds */}
            <TypewriterHeroTitle />
          </h1>
        </div>

        {/* Outer Box 2: Info Arrow + Divider + Philosophy / Social Proof */}
        <div className="relative w-full flex flex-col lg:flex-row lg:items-center justify-between gap-10 xl:gap-14 pt-2">
          
          {/* Left Block: Arrow + Line + Statement & Avatars */}
          <div className="flex items-start sm:items-center gap-6 sm:gap-10 xl:gap-14">
            
            {/* Diagonal Arrow recolored to #e3a5c7 */}
            <div className="hidden sm:block w-[130px] lg:w-[170px] xl:w-[192px] h-[130px] lg:h-[170px] xl:h-[192px] shrink-0 transition-transform duration-300 hover:scale-105">
              <div 
                className="w-full h-full bg-[#e3a5c7]"
                style={{
                  maskImage: 'url(/images/icons/shape30.png)',
                  WebkitMaskImage: 'url(/images/icons/shape30.png)',
                  maskSize: 'contain',
                  WebkitMaskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskPosition: 'center',
                  WebkitMaskPosition: 'center',
                }}
              />
            </div>

            {/* Vertical Divider Line: 194px */}
            <div className="hidden sm:block w-[1px] h-[150px] lg:h-[194px] bg-[#2f2438] shrink-0" />

            {/* Statement and Avatars */}
            <div className="max-w-[580px]">
              <p className="font-manrope text-sm sm:text-base text-neutral-300 leading-[28px] font-normal">
                Combinamos diseño creativo con tecnología de vanguardia para crear experiencias digitales visualmente impactantes, altamente funcionales y diseñadas para escalar.
              </p>

              {/* Avatars + Counter */}
              <div className="flex items-center gap-5 mt-6 sm:mt-10">
                {/* 3 Avatars Stack + Plus Button */}
                <div className="flex items-center -space-x-3">
                  <img 
                    src="/images/resource/info3.jpg" 
                    alt="Customer 1" 
                    className="w-11 h-11 rounded-full object-cover border-2 border-[#1e1728]"
                  />
                  <img 
                    src="/images/resource/info4.jpg" 
                    alt="Customer 2" 
                    className="w-11 h-11 rounded-full object-cover border-2 border-[#1e1728]"
                  />
                  <img 
                    src="/images/resource/info5.jpg" 
                    alt="Customer 3" 
                    className="w-11 h-11 rounded-full object-cover border-2 border-[#1e1728]"
                  />
                  <div className="w-11 h-11 rounded-full bg-[#e3a5c7] flex items-center justify-center text-[#14101a] border-2 border-[#1e1728] shadow-md">
                    <Plus className="w-5 h-5 stroke-[2.5]" />
                  </div>
                </div>

                {/* 18k+ customers word */}
                <div className="flex flex-col">
                  <span className="font-clash text-2xl font-bold text-white tracking-tight leading-none">
                    18k+
                  </span>
                  <span className="font-manrope text-xs sm:text-sm text-neutral-400 mt-1">
                    customers word.
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
