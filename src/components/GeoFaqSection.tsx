import React, { useState } from 'react';
import { Plus, Minus, Sparkles, BrainCircuit } from 'lucide-react';
import { VectorSwitch } from './VectorSwitch.tsx';
import { VectorPenFrame } from './VectorPenFrame.tsx';

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
  tag?: string;
}

export const GEO_FAQS: FaqItem[] = [
  {
    id: 1,
    question: '¿Qué es el SEO para IA o GEO?',
    tag: 'GEO & LLMO',
    answer:
      'El GEO (Generative Engine Optimization) o SEO para Inteligencia Artificial es la disciplina estratégica de optimizar la presencia digital de una empresa para que los motores de búsqueda basados en modelos generativos (como ChatGPT, Gemini, Perplexity, Claude y Microsoft Copilot) comprendan, reconozcan y citen a tu marca como la opción experta y confiable al responder consultas de los usuarios.',
  },
  {
    id: 2,
    question: '¿Cuál es la diferencia entre el SEO tradicional y el SEO para IA?',
    tag: 'Evolución Digital',
    answer:
      'El SEO tradicional optimiza palabras clave y enlaces para ganar posiciones en una lista estática de páginas azules en Google. En cambio, el GEO optimiza entidades semánticas y relevancia factual para que los modelos de lenguaje sinteticen respuestas directas en lenguaje conversacional. No compites solo por un clic, sino por ser la fuente citada, recomendada y sintetizada dentro de la respuesta de la IA.',
  },
  {
    id: 3,
    question: '¿Qué es un agente de IA?',
    tag: 'Automatización & Agentes',
    answer:
      'Un agente de IA es un sistema autónomo impulsado por modelos avanzados de lenguaje (LLMs) que percibe su entorno, razona en función de un objetivo y ejecuta tareas de forma proactiva. A diferencia de un chatbot convencional que solo responde texto, un agente puede navegar bases de datos, activar APIs, enviar correos, calificar leads y automatizar procesos empresariales complejos sin supervisión humana constante.',
  },
  {
    id: 4,
    question: '¿Cómo puede aparecer mi marca en ChatGPT, Gemini o Perplexity?',
    tag: 'Visibilidad en Motores IA',
    answer:
      'Para que los motores generativos te recomienden, tu marca debe consolidar una entidad digital coherente: implementar datos estructurados Schema.org exhaustivos, asegurar menciones en medios autorizados y fuentes sectoriales de alta reputación, publicar información factual y estadísticas originales, y construir una red de citabilidad que los rastreadores de IA reconozcan como fuente primaria de verdad.',
  },
  {
    id: 5,
    question: '¿Que es un LLM?',
    tag: 'Tecnología Base',
    answer:
      'Un LLM (Large Language Model o Modelo de Lenguaje de Gran Escala) es una red neuronal de aprendizaje profundo entrenada con volúmenes masivos de datos y miles de millones de parámetros. Su capacidad reside en comprender patrones lingüísticos profundos, razonar lógicamente sobre contextos complejos y redactar respuestas coherentes y sintetizadas a partir de su conocimiento y de fuentes consultadas en tiempo real.',
  },
  {
    id: 6,
    question: '¿Por qué son importantes las menciones, los medios y la citabilidad?',
    tag: 'Reputación & Confianza',
    answer:
      'Los modelos de lenguaje no creen en la publicidad tradicional: validan la certeza triangulando fuentes independientes. Cuando múltiples medios de comunicación, informes de la industria y plataformas de reseñas citan tu marca con atributos consistentes, los LLMs incrementan su índice de confianza (confidence score), convirtiéndote en la referencia obligada que recomiendan a miles de tomadores de decisiones.',
  },
];

export const GeoFaqSection: React.FC = () => {
  // El primer elemento se encuentra abierto por defecto para reflejar el diseño de la maqueta
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section 
      id="geo-faq" 
      className="relative w-full py-24 sm:py-32 bg-[#14101a] border-t border-white/5 overflow-hidden"
    >
      {/* Resplandor ambiental de fondo sutil */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#e3a5c7]/[0.05] blur-[150px] rounded-full pointer-events-none -z-10" 
      />

      {/* Contenedor alineado a la misma cuadrícula de márgenes laterales: max-w-[1806px] */}
      <div className="max-w-[1806px] mx-auto px-4 sm:px-8 lg:px-12 w-full">
        
        {/* Cabecera de la Sección con Switch Vectorial */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            {/* Badge superior "FAQ" */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-[#1c1527] border border-white/10 text-white/70 text-xs sm:text-[13px] font-semibold tracking-widest uppercase shadow-sm">
              <BrainCircuit className="w-3.5 h-3.5 text-[#e3a5c7]" />
              <span>FAQ</span>
            </div>

            {/* Switch de Vector con nodos y pluma */}
            <VectorSwitch size="sm" showLabel={true} label="MODO VECTOR" />
          </div>

          {/* Título Principal */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-white tracking-tight leading-[1.15] max-w-3xl">
            Preguntas Frecuentes sobre GEO & IA
          </h2>

          <p className="mt-4 text-zinc-400 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
            Todo lo que necesitas saber para posicionar tu empresa en los nuevos motores generativos y agentes inteligentes.
          </p>
        </div>

        {/* Lista de Acordeones / Preguntas Frecuentes con Nodos de Pluma */}
        <div className="max-w-4xl mx-auto w-full space-y-4">
          {GEO_FAQS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <VectorPenFrame key={faq.id} showHandles={isOpen} showPenIcon={isOpen}>
                <div
                  className={`relative rounded-2xl sm:rounded-[26px] transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'border border-[#e3a5c7]/65 bg-gradient-to-b from-[#1e1627] via-[#251b32] to-[#342044] shadow-[0_10px_35px_rgba(227,165,199,0.12)]'
                      : 'border border-white/5 bg-[#181322] hover:bg-[#1d162a] hover:border-white/10'
                  }`}
                >
                {/* Botón interactivo de la cabecera del acordeón */}
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="text-white font-semibold text-base sm:text-lg md:text-[19px] tracking-tight pr-4">
                    {faq.question}
                  </span>

                  {/* Icono circular a la derecha: Gris con '+' cuando está cerrado, Morado con '-' cuando está abierto */}
                  <div
                    className={`shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? 'bg-[#e3a5c7] text-[#14101a] shadow-[0_2px_12px_rgba(227,165,199,0.45)]'
                        : 'bg-[#241c30] text-white/80 hover:text-white hover:bg-[#2d223c]'
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-5 h-5 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-5 h-5 stroke-[2.5]" />
                    )}
                  </div>
                </button>

                {/* Contenido de la respuesta desplegable con animación suave */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 sm:px-8 pb-6 sm:pb-7 pt-1 sm:pt-2 pr-6 sm:pr-16 text-zinc-300 text-sm sm:text-base leading-relaxed border-t border-white/[0.04]">
                      <p>{faq.answer}</p>

                      {faq.tag && (
                        <div className="mt-4 flex items-center gap-2">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-[#e3a5c7] border border-white/5">
                            <Sparkles className="w-3 h-3 text-[#e3a5c7]" />
                            {faq.tag}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </VectorPenFrame>
          );
        })}
        </div>

      </div>
    </section>
  );
};
