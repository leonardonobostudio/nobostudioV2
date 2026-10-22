import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { VectorSwitch } from './VectorSwitch.tsx';

interface BannerSectionFourProps {
  onHeyCardClick: () => void;
}

export const BannerSectionFour: React.FC<BannerSectionFourProps> = ({ onHeyCardClick }) => {
  const [toggleActive, setToggleActive] = useState(false);

  return (
    <section className="relative w-full pt-[210px] pb-16 overflow-hidden min-h-[calc(100vh-88px)] flex flex-col justify-between select-none">
      {/* Background Graphic Texture */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img 
          src="/images/banner/banner3-bg1.png" 
          alt="Banner background texture" 
          className="w-full h-full object-cover opacity-90"
        />
      </div>

      {/* Shape 1: 3D Beaded Torus with Continuous 3D rotateY animation */}
      <div className="hidden lg:block absolute right-[40px] xl:right-[70px] top-[180px] xl:top-[224px] pointer-events-none z-10 w-[300px] xl:w-[420px] 2xl:w-[460px]">
        <img 
          src="/images/icons/shape29.png" 
          alt="3D beaded organic torus" 
          className="w-full h-auto animation__rotateY drop-shadow-[0_20px_50px_rgba(255,75,47,0.35)]"
        />
      </div>

      {/* Main Outer Box (max-width: 1806px; matching global section padding) */}
      <div className="max-w-[1806px] mx-auto px-4 sm:px-8 lg:px-12 w-full relative z-10 flex-1 flex flex-col justify-between">
        
        {/* Banner Title Box (margin-bottom: 60px;) */}
        <div className="relative mb-[60px] inline-block">
          
          {/* Shape 2: Technical red grid with white doodle - bounces horizontally */}
          <div className="hidden xl:block absolute right-[290px] top-[88px] pointer-events-none z-10 bounce-x">
            <img 
              src="/images/icons/shape31.png" 
              alt="Coordinate grid doodle" 
              className="w-[175px] h-auto"
            />
          </div>

          {/* Subtitle: — AGENCIA DE GROWTH */}
          <div className="font-creato text-xl sm:text-2xl lg:text-[32px] font-medium text-[#F5F7F5] uppercase tracking-normal relative pl-[54px] mb-[16px] flex items-center">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[39px] h-[2px] bg-[#FF4B2F]" />
            AGENCIA DE GROWTH
          </div>

          {/* Title: MARKETING <br /> NOB [O - Vector] STUDIO */}
          <h1 className="font-clash text-[44px] sm:text-[68px] md:text-[92px] lg:text-[116px] xl:text-[142px] 2xl:text-[160px] leading-[1.05] uppercase tracking-[-0.06em] text-white font-semibold">
            <div>MARKETING</div>
            <div className="flex items-center flex-wrap sm:flex-nowrap gap-2 sm:gap-3 md:gap-[16px]">
              <span>NOB</span>
              {/* Switch Vectorial de Illustrator con Nodos de Ancla que representa la 'O' de Nobo */}
              <div className="inline-flex items-center relative -top-1 sm:-top-2 lg:-top-3 cursor-pointer shrink-0">
                <VectorSwitch size="hero" />
              </div>
              <span className="text-[#FF4B2F]">STUDIO</span>
            </div>
          </h1>
        </div>

        {/* Outer Box 2: Info Arrow + Divider + Philosophy / Social Proof + Hey! Card */}
        <div className="relative w-full flex flex-col lg:flex-row lg:items-center justify-between gap-10 xl:gap-14 pt-2">
          
          {/* Left Block: Arrow + Line + Statement & Avatars */}
          <div className="flex items-start sm:items-center gap-6 sm:gap-10 xl:gap-14">
            
            {/* Orange Arrow: shape30.png (192px x 193px) */}
            <div className="hidden sm:block w-[130px] lg:w-[170px] xl:w-[192px] shrink-0">
              <img 
                src="/images/icons/shape30.png" 
                alt="Creovibe diagonal arrow" 
                className="w-full h-auto transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Vertical Divider Line: 194px */}
            <div className="hidden sm:block w-[1px] h-[150px] lg:h-[194px] bg-[#2F2F2F] shrink-0" />

            {/* Statement and Avatars */}
            <div className="max-w-[450px]">
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
                    className="w-11 h-11 rounded-full object-cover border-2 border-[#181818]"
                  />
                  <img 
                    src="/images/resource/info4.jpg" 
                    alt="Customer 2" 
                    className="w-11 h-11 rounded-full object-cover border-2 border-[#181818]"
                  />
                  <img 
                    src="/images/resource/info5.jpg" 
                    alt="Customer 3" 
                    className="w-11 h-11 rounded-full object-cover border-2 border-[#181818]"
                  />
                  <div className="w-11 h-11 rounded-full bg-[#FF4B2F] flex items-center justify-center text-white border-2 border-[#181818] shadow-md">
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

          {/* Right Block: Hey! Card (.banner-info2) */}
          <div className="w-full lg:max-w-[420px] xl:max-w-[471px] bg-[#101010] p-8 sm:p-10 xl:p-12 rounded-[20px] relative overflow-hidden shrink-0 border border-white/5 shadow-2xl">
            {/* Background Watermark Circle: shape33.png */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-85">
              <img 
                src="/images/icons/shape33.png" 
                alt="" 
                className="w-[280px] sm:w-[320px] h-auto"
              />
            </div>

            {/* Title: Hey! */}
            <h2 className="font-clash text-5xl sm:text-6xl xl:text-[72px] font-bold text-white mb-16 sm:mb-24 xl:mb-32 relative z-10 leading-none">
              Hey!
            </h2>

            {/* Subtitle & Circular Arrow Button */}
            <div className="flex items-end justify-between relative z-10">
              <div className="font-clash text-xl sm:text-2xl xl:text-[32px] font-medium leading-[1.1] text-white">
                Word - Class <br />Digital Agency
              </div>

              {/* Circular Arrow Button: shape32.png */}
              <button
                type="button"
                onClick={onHeyCardClick}
                aria-label="Contact World Class Digital Agency"
                className="w-12 h-12 xl:w-[60px] xl:h-[60px] rounded-full bg-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 shadow-xl cursor-pointer group"
              >
                <img 
                  src="/images/icons/shape32.png" 
                  alt="Go to agency details" 
                  className="w-5 xl:w-6 h-auto transform transition-transform group-hover:rotate-45"
                />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
