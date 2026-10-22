import React from 'react';
import { Sparkles, Layers, Cpu, ArrowUpRight } from 'lucide-react';

interface NextSectionPreviewProps {
  isTechMode: boolean;
}

export const NextSectionPreview: React.FC<NextSectionPreviewProps> = ({ isTechMode }) => {
  const agencyCapabilities = [
    {
      title: 'Digital Product Design',
      icon: Sparkles,
      desc: 'UI/UX architecture, visual design systems, and rapid interactive prototyping.',
    },
    {
      title: 'Full-Stack & WebGL Tech',
      icon: Cpu,
      desc: 'High-performance React/Node frameworks, 3D WebGL graphics, and scalable clouds.',
    },
    {
      title: 'Brand Growth & Strategy',
      icon: Layers,
      desc: 'Positioning, digital brand identity, omnichannel narrative, and market scale.',
    },
  ];

  return (
    <section id="services" className="relative w-full bg-[#0a0a0d] border-t border-white/5 pt-12 pb-24 px-6 md:px-12">
      {/* Studio Banner Visual matching screenshot bottom transition */}
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full h-[320px] sm:h-[420px] md:h-[500px] rounded-3xl overflow-hidden border border-white/10 group shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
          {/* Warm Amber-lit Studio Atmosphere Image */}
          <img
            src="/src/assets/images/agency_creative_team_1792598948357.jpg"
            alt="Nobo Studio creative engineers and designers collaborating in modern studio"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Warm cinematic gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0d] via-black/40 to-transparent" />
          <div 
            className="absolute inset-0 opacity-20 mix-blend-color-dodge transition-colors duration-500"
            style={{ backgroundColor: isTechMode ? '#00e5ff' : '#ff3811' }}
          />

          {/* Banner Floating Caption */}
          <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-xl">
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#e3a5c7] mb-2 block">
                Inside Nobo Agency
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-syne text-white leading-tight">
                Where strategic artistry meets fearless engineering.
              </h3>
            </div>

            <a
              href="#about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white text-white hover:text-black font-semibold text-xs uppercase tracking-wider backdrop-blur-md transition-all duration-300 w-fit shrink-0 cursor-pointer"
            >
              <span>Explore Our Methodology</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 3 Strategic Pillars Below Banner */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {agencyCapabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.title}
                className="p-8 rounded-2xl bg-[#111114] border border-white/5 hover:border-white/15 transition-all duration-300 group"
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-6 transition-colors duration-300"
                  style={{ backgroundColor: isTechMode ? 'rgba(0, 229, 255, 0.15)' : 'rgba(227, 165, 199, 0.15)' }}
                >
                  <Icon 
                    className="w-6 h-6 transition-colors duration-300" 
                    style={{ color: isTechMode ? '#00e5ff' : '#e3a5c7' }}
                  />
                </div>
                <h4 className="text-xl font-bold font-syne text-white mb-2">{cap.title}</h4>
                <p className="text-sm text-neutral-400 leading-relaxed">{cap.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
