/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, X, MapPin, CheckCircle2, TrendingUp, Layers } from 'lucide-react';
import { VectorSwitch } from './VectorSwitch.tsx';
import { VectorPenFrame } from './VectorPenFrame.tsx';

export interface ProjectCardData {
  id: string;
  categoryTag: string; // e.g. "MARCAS Y EVENTOS"
  categoryFilter: 'marcas' | 'institucional' | 'cultura' | 'marketing' | 'ia';
  location: string;
  title: string;
  description: string;
  subcategory: string;
  metric: string;
  // Detail modal information
  client?: string;
  year?: string;
  highlights?: string[];
  scope?: string[];
}

export const REAL_PROJECTS: ProjectCardData[] = [
  {
    id: 'teresa-noboa',
    categoryTag: 'MARCAS Y EVENTOS',
    categoryFilter: 'marcas',
    location: 'España y Latinoamérica',
    title: 'Teresa Noboa',
    description: 'Liderazgo en conceptualización de eventos de alta gama, lanzamientos de marca y relaciones públicas.',
    subcategory: 'Eventos y Moda',
    metric: '+30 Eventos VIP',
    client: 'Teresa Noboa & Luxury Brands',
    year: '2024 - 2026',
    highlights: [
      'Producción de galas exclusivas y eventos de lanzamiento en España y LATAM',
      'Gestión de relaciones públicas estratégicas con prensa de moda y figuras VIP',
      'Diseño de identidad visual, escenografía y experiencia inmersiva para marcas de lujo'
    ],
    scope: ['RRPP & Prensa', 'Producción de Eventos VIP', 'Branding de Experiencias']
  },
  {
    id: 'camara-construccion',
    categoryTag: 'INSTITUCIONAL Y SOSTENIBILIDAD',
    categoryFilter: 'institucional',
    location: 'Guayaquil, Ecuador',
    title: 'Cámara de la Construcción',
    description: 'Campaña 55 años, comunicación gremial de inversiones inmobiliarias y edición de revista técnica.',
    subcategory: 'Institucional',
    metric: '+450.000 Lectores',
    client: 'Cámara de la Construcción de Guayaquil',
    year: '2023 - 2025',
    highlights: [
      'Campaña conmemorativa 360° por el 55 aniversario institucional',
      'Dirección editorial, rediseño gráfico y distribución de revista técnica sectorial',
      'Estrategia de posicionamiento de inversiones inmobiliarias y sostenibilidad gremial'
    ],
    scope: ['Comunicación Institucional', 'Diseño Editorial', 'Campaña 55 Años']
  },
  {
    id: 'museo-felicidad',
    categoryTag: 'CULTURA Y OCIO',
    categoryFilter: 'cultura',
    location: 'Madrid, España',
    title: 'Museo de la Felicidad',
    description: 'El lugar más feliz de Madrid. Plataforma digital interactiva, branding experiencial y venta de entradas.',
    subcategory: 'Museos y Ocio',
    metric: '+85.000 Visitas/mes',
    client: 'Museo de la Felicidad Madrid',
    year: '2024 - 2026',
    highlights: [
      'Desarrollo integral de plataforma web interactiva y pasarela de venta de entradas',
      'Branding experiencial omnicanal y diseño de recorridos emocionales',
      'Estrategias virales de captación en redes sociales que superaron récords de afluencia'
    ],
    scope: ['Plataforma Digital', 'Ticketing Online', 'Branding Experiencial']
  },
  {
    id: 'exposicion-templarios',
    categoryTag: 'PATRIMONIO Y CULTURA',
    categoryFilter: 'cultura',
    location: 'Madrid - Península Ibérica',
    title: 'Exposición Templarios',
    description: 'Campaña de difusión para la gran exposición histórica de órdenes militares y caballeros templarios.',
    subcategory: 'Exposiciones',
    metric: '+60.000 Entradas',
    client: 'Consorcio Cultural Histórico',
    year: '2024 - 2025',
    highlights: [
      'Campaña mediática nacional para la exhibición histórica de caballeros templarios',
      'Desarrollo de landing page inmersiva de venta anticipada con taquilla integrada',
      'Publicidad digital segmentada por interés cultural e histórico en Península Ibérica'
    ],
    scope: ['Publicidad Digital', 'Campaña de Difusión', 'Ticketing Cultural']
  },
  {
    id: 'galapagos-evolution',
    categoryTag: 'CONSERVACIÓN Y NATURALEZA',
    categoryFilter: 'institucional',
    location: 'Islas Galápagos, Ecuador',
    title: 'Galápagos Evolution',
    description: 'Estrategia de comunicación y difusión de impacto ambiental para la conservación del archipiélago.',
    subcategory: 'Documental y Ecología',
    metric: 'Difusión Global',
    client: 'Iniciativa Galápagos Evolution',
    year: '2023 - 2025',
    highlights: [
      'Estrategia de prensa internacional y lanzamiento documental sobre la biodiversidad marina',
      'Alianzas con ONGs y conservacionistas mundiales para la difusión de impacto ambiental',
      'Materiales audiovisuales de alta fidelidad para concientización ecológica'
    ],
    scope: ['Estrategia de Comunicación', 'Prensa Global', 'Conservación Ecológica']
  },
  {
    id: 'entrevista-meik-wiking',
    categoryTag: 'COMUNICACIÓN Y BIENESTAR',
    categoryFilter: 'cultura',
    location: 'Copenhague y Madrid',
    title: 'Entrevista Meik Wiking',
    description: 'Encuentro exclusivo con el director del Happiness Research Institute y autor superventas.',
    subcategory: 'Prensa y RRPP',
    metric: 'Impacto Internacional',
    client: 'Happiness Research Institute',
    year: '2024',
    highlights: [
      'Encuentro y entrevista exclusiva con el autor de los bestsellers mundiales Hygge y Lykke',
      'Producción audiovisual, edición editorial y cobertura en medios hispanohablantes',
      'Posicionamiento del bienestar subjetivo y la ciencia de la felicidad en medios'
    ],
    scope: ['Entrevista Exclusiva', 'Prensa & RRPP', 'Producción Audiovisual']
  },
  {
    id: 'vivesmart-inc',
    categoryTag: 'ESTRATEGIA Y MARKETING DIGITAL',
    categoryFilter: 'marketing',
    location: 'Miami & Internacional',
    title: 'Vivesmart INC',
    description: 'Estrategia integral de Marketing Digital de alto impacto y embudo de conversión VSL con $30.000 de presupuesto.',
    subcategory: 'Growth & VSL',
    metric: '30K $$ Presupuesto',
    client: 'Vivesmart INC',
    year: '2025 - 2026',
    highlights: [
      'Creación, redacción de copy persuasivo y producción de Video Sales Letter (VSL) de alta conversión',
      'Gestión y optimización de presupuesto publicitario de $30.000 USD en campañas de captación',
      'Embudos de ventas B2B y automatización de seguimiento con ROI acelerado'
    ],
    scope: ['Estrategia VSL', 'Marketing Digital $30K', 'Funnel de Conversión']
  },
  {
    id: 'agente-ia-empresas',
    categoryTag: 'INTELIGENCIA ARTIFICIAL Y B2B',
    categoryFilter: 'ia',
    location: 'Corporativo & B2B',
    title: 'Agente IA para Empresas',
    description: 'Agente de Inteligencia Artificial para empresas: automatización de atención y procesos con flujos conversacionales avanzados.',
    subcategory: 'IA & Automatización',
    metric: '+95% Eficiencia',
    client: 'Clientes Corporativos B2B',
    year: '2025 - 2026',
    highlights: [
      'Desarrollo e integración de agentes autónomos con modelos de lenguaje de última generación',
      'Automatización de procesos operativos internos, atención 24/7 y calificación de leads',
      'Conexión nativa con sistemas ERP, CRM y bases de conocimiento corporativas seguras'
    ],
    scope: ['Agentes de IA', 'Automatización de Procesos', 'Integración Corporativa']
  }
];

interface ProjectsSectionProps {
  onProjectBriefClick?: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onProjectBriefClick }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeProject, setActiveProject] = useState<ProjectCardData | null>(null);
  const [lang, setLang] = useState<'es' | 'en'>('es');

  const filteredProjects = selectedFilter === 'all'
    ? REAL_PROJECTS
    : REAL_PROJECTS.filter((p) => p.categoryFilter === selectedFilter);

  const scrollToGrid = () => {
    const el = document.getElementById('projects-grid');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="relative bg-[#000002] py-24 sm:py-32 overflow-hidden border-t border-white/5">
      {/* Background Radial Glow Spotlight */}
      <div 
        className="absolute top-24 left-1/2 -translate-x-1/2 w-[850px] h-[850px] pointer-events-none rounded-full -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(224, 133, 182, 0.12) 0%, rgba(255, 75, 47, 0.10) 35%, rgba(18, 14, 30, 0.05) 60%, rgba(0, 0, 2, 0) 80%)',
          filter: 'blur(100px)',
        }}
      />
      
      {/* Ambient background soft aura */}
      <div className="absolute top-10 right-0 w-[550px] h-[550px] bg-gradient-to-br from-[#E085B6]/10 via-[#FF4B2F]/08 to-transparent blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-40 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#9B51E0]/10 via-[#E085B6]/06 to-transparent blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-[1806px] mx-auto px-4 sm:px-8 lg:px-12 w-full relative z-10">
        
        {/* Top Kicker, Vector Mode Switch & Language Toggle */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-semibold tracking-widest uppercase text-neutral-300">
            <Sparkles className="w-3.5 h-3.5 text-[#E085B6]" />
            <span>PORTFOLIO & CASOS DE ÉXITO</span>
          </div>

          {/* Switch Vectorial de Ilustrador en el Kicker */}
          <VectorSwitch size="sm" showLabel={true} label="MODO VECTOR" />
          
          <button
            type="button"
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            className="text-xs px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            title="Cambiar idioma del titular"
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
        </div>

        {/* 1. GIANT MONUMENTAL HEADLINE con Switch Vectorial integrado */}
        <div className="text-center relative">
          <h2 className="font-clash font-extrabold uppercase tracking-[-0.055em] text-[52px] sm:text-[85px] md:text-[120px] lg:text-[150px] xl:text-[170px] leading-[0.88] text-white select-none transition-all duration-300">
            {lang === 'es' ? (
              <>
                NUESTROS <br />
                <span className="inline-flex items-center justify-center flex-wrap gap-x-1 sm:gap-x-2">
                  <span>PR</span>
                  {/* Switch Vectorial como en la imagen */}
                  <span className="inline-block relative -top-1 sm:-top-3 md:-top-5 lg:-top-7 mx-1 sm:mx-2">
                    <VectorSwitch size="hero" />
                  </span>
                  <span>YECT<span className="text-[#FF4B2F] inline-block transition-transform duration-300 hover:scale-105">O</span>S</span>
                </span>
              </>
            ) : (
              <>
                FEATURED <br />
                <span className="inline-flex items-center justify-center flex-wrap gap-x-1 sm:gap-x-2">
                  <span>W</span>
                  <span className="inline-block relative -top-1 sm:-top-3 md:-top-5 lg:-top-7 mx-1 sm:mx-2">
                    <VectorSwitch size="hero" />
                  </span>
                  <span>RK</span>
                </span>
              </>
            )}
          </h2>

          {/* 2. Centered Circular Down-Arrow Button */}
          <div className="mt-8 sm:mt-10 flex justify-center">
            <button
              type="button"
              onClick={scrollToGrid}
              aria-label="Desplazarse a los proyectos"
              className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-white/[0.08] hover:bg-[#E085B6] border border-white/15 hover:border-[#E085B6] text-white flex items-center justify-center transition-all duration-300 cursor-pointer shadow-[0_4px_25px_rgba(0,0,0,0.5)] group active:scale-95"
            >
              <ArrowDown className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" />
            </button>
          </div>

          {/* 3. Subtitle Text */}
          <p className="mt-6 max-w-2xl mx-auto text-neutral-400 text-sm sm:text-base md:text-lg font-light leading-relaxed">
            {lang === 'es' ? (
              <>
                Estrategia, cultura, marcas y tecnología con impacto medible en España, Latinoamérica e internacional.
              </>
            ) : (
              <>
                Strategy, culture, branding, and AI technology with measurable global impact across Spain and the Americas.
              </>
            )}
          </p>
        </div>

        {/* 4. Interactive Category Filters */}
        <div id="projects-grid" className="mt-16 sm:mt-24 pt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {[
            { id: 'all', label: 'Todos los proyectos (8)' },
            { id: 'marcas', label: 'Marcas & Eventos' },
            { id: 'institucional', label: 'Institucional & Sostenibilidad' },
            { id: 'cultura', label: 'Cultura & Museos' },
            { id: 'marketing', label: 'Marketing & VSL' },
            { id: 'ia', label: 'Inteligencia Artificial' },
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedFilter(cat.id)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                selectedFilter === cat.id
                  ? 'bg-gradient-to-r from-[#E085B6] to-[#EC729C] text-white shadow-[0_2px_18px_rgba(224,133,182,0.4)] font-semibold scale-105'
                  : 'bg-white/[0.03] text-neutral-400 hover:text-white hover:bg-white/[0.08] border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 5. AESTHETIC DARK CARDS GRID (EXACT DESIGN MATCHING image_a504bfe2.png) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {filteredProjects.map((project, idx) => (
            <VectorPenFrame key={project.id} showHandles={idx % 2 === 0} showPenIcon={idx === 0}>
              <div
                onClick={() => setActiveProject(project)}
                className="group relative cursor-pointer rounded-[24px] bg-[#110E1C] border border-[#262039] hover:border-[#E085B6]/60 p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(224,133,182,0.12)] overflow-hidden h-full"
                style={{
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.45)',
                }}
              >
                {/* Subtle card ambient radial glow on hover */}
                <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-[#E085B6]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* Top line: Category kicker (Soft Pink) + Location (Muted Grey) */}
                  <div className="flex items-start justify-between gap-3 text-xs">
                    <span className="font-mono uppercase tracking-wider text-[#E085B6] font-semibold text-[11px] sm:text-xs">
                      {project.categoryTag}
                    </span>
                    <span className="text-neutral-400 font-normal text-right text-[11px] sm:text-xs shrink-0">
                      {project.location}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-2xl sm:text-[26px] font-clash font-bold text-white tracking-tight leading-snug mt-4 mb-3.5 group-hover:text-white transition-colors duration-200">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-300/85 text-[14px] leading-relaxed font-normal min-h-[4.2rem]">
                    {project.description}
                  </p>
                </div>

                {/* Bottom row: Divider + Subcategory + Metric */}
                <div>
                  <div className="border-t border-[#262039] group-hover:border-[#382F50] transition-colors duration-300 my-5" />

                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-white/90 text-[13px]">
                      {project.subcategory}
                    </span>
                    <span className="font-mono font-semibold text-[#E085B6] tracking-wider text-[12px] sm:text-[13px] flex items-center gap-1">
                      {project.metric}
                    </span>
                  </div>
                </div>
              </div>
            </VectorPenFrame>
          ))}
        </div>

        {/* 6. Contact / Action CTA Button */}
        <div className="mt-20 flex flex-col items-center justify-center gap-4">
          <p className="text-neutral-400 text-sm text-center">
            ¿Tienes un proyecto en mente o buscas una estrategia personalizada?
          </p>
          <button
            type="button"
            onClick={onProjectBriefClick}
            className="theme-btn-one cursor-pointer hover:shadow-[0_4px_25px_rgba(255,75,47,0.4)] transition-all duration-300"
          >
            <span className="text-sm font-semibold tracking-wide">Platícanos tu Proyecto</span>
            <span className="btn-icon">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </button>
        </div>

      </div>

      {/* 7. Detailed Case Study Modal (when clicking any card) */}
      {activeProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveProject(null)}
        >
          <div 
            className="relative w-full max-w-2xl bg-[#120F20] border border-[#352B4D] rounded-[28px] overflow-hidden shadow-2xl p-6 sm:p-9"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveProject(null)}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-4">
              <div className="flex items-center justify-between pr-8">
                <span className="font-mono text-xs uppercase tracking-wider text-[#E085B6] font-semibold bg-[#E085B6]/10 px-3 py-1 rounded-full border border-[#E085B6]/25">
                  {activeProject.categoryTag}
                </span>
                <span className="text-xs text-neutral-400 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#E085B6]" />
                  {activeProject.location}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-clash font-bold text-white mt-2">
                  {activeProject.title}
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm font-mono mt-1">
                  {activeProject.client} • {activeProject.year}
                </p>
              </div>

              <p className="text-neutral-200 text-sm sm:text-base leading-relaxed pt-2">
                {activeProject.description}
              </p>

              {/* Highlights */}
              {activeProject.highlights && (
                <div className="pt-4 border-t border-white/10 space-y-2.5">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                    Impacto y Entregables Clave
                  </h4>
                  <div className="space-y-2">
                    {activeProject.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                        <CheckCircle2 className="w-4 h-4 text-[#E085B6] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags & Metric Pill */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  {activeProject.scope?.map((sc, i) => (
                    <span key={i} className="text-xs bg-white/5 text-neutral-300 px-3 py-1 rounded-full border border-white/10">
                      {sc}
                    </span>
                  ))}
                </div>

                <div className="px-3.5 py-1.5 rounded-full bg-[#E085B6]/15 border border-[#E085B6]/30 text-xs font-semibold text-[#E085B6] font-mono">
                  {activeProject.metric}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-5 flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    setActiveProject(null);
                    if (onProjectBriefClick) onProjectBriefClick();
                  }}
                  className="theme-btn-one cursor-pointer"
                >
                  <span>Consultar Caso Similar</span>
                  <span className="btn-icon">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
