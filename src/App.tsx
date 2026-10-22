/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { MainHeader } from './components/MainHeader.tsx';
import { BannerSectionFour } from './components/BannerSectionFour.tsx';
import { AboutSectionTwo } from './components/AboutSectionTwo.tsx';
import { MarqueeSeparator } from './components/MarqueeSeparator.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { ProjectsSection } from './components/ProjectsSection.tsx';
import { ClientLogosCarousel } from './components/ClientLogosCarousel.tsx';
import { TestimonialsSection } from './components/TestimonialsSection.tsx';
import { GeoFaqSection } from './components/GeoFaqSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { FooterSection } from './components/FooterSection.tsx';
import { ContactModal } from './components/ContactModal.tsx';
import { VectorModeProvider } from './context/VectorModeContext.tsx';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <VectorModeProvider>
      <div className="min-h-screen bg-[#14101a] text-white flex flex-col font-manrope overflow-x-hidden w-full relative">
        {/* 1. Creovibe Main Header */}
        <MainHeader onSignUpClick={() => setIsModalOpen(true)} />

        {/* Main Content Sections */}
        <main className="flex-1 w-full overflow-hidden">
          {/* 2. Banner Section Four */}
          <BannerSectionFour />

          {/* 3. About Us Section Two */}
          <AboutSectionTwo onMoreAboutClick={() => setIsModalOpen(true)} />

          {/* 4. Infinite Dual-Ribbon Marquee Separator */}
          <MarqueeSeparator />

          {/* 5. Services Section (Identidad de Marca, Publicidad Digital, Estrategia, Desarrollo Web, RR.PP., Marketing 360) */}
          <ServicesSection onServiceClick={() => setIsModalOpen(true)} />

          {/* 6. Projects Section ("NUESTROS PROYECTOS / FEATURED WORK" in giant typography) */}
          <ProjectsSection onProjectBriefClick={() => setIsModalOpen(true)} />

          {/* 7. Carrusel Automático de Logos de Clientes (5 visibles en pantalla, B&W a Color en hover) */}
          <ClientLogosCarousel />

          {/* 8. Sección de Testimonios ("See Why Clients Love Working With Us" + Certificación META + Sección Larga) */}
          <TestimonialsSection />

          {/* 9. Sección de GEO: Preguntas Frecuentes sobre SEO para IA y Agentes */}
          <GeoFaqSection />

          {/* 10. Sección de Contacto ("Ready to Bring Your Vision to Life?" con formulario de la Imagen 2) */}
          <ContactSection />
        </main>

        {/* 11. Footer NoboStudio (Insignia holográfica, créditos y navegación de la Imagen 3) */}
        <FooterSection />

        {/* 6. Floating Scroll-to-Top Button (as in template & screenshot) */}
        {showScrollTop && (
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Volver arriba"
            className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-[#e3a5c7] text-[#14101a] flex items-center justify-center shadow-[0_4px_20px_rgba(227,165,199,0.45)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <ChevronUp className="w-5 h-5 stroke-[2.5]" />
          </button>
        )}

        {/* 7. Interactive Project Brief Modal */}
        <ContactModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          isTechMode={false}
        />
      </div>
    </VectorModeProvider>
  );
}
