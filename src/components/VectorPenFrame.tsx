import React from 'react';
import { useVectorMode } from '../context/VectorModeContext.tsx';

interface VectorPenFrameProps {
  children: React.ReactNode;
  className?: string;
  showHandles?: boolean;
  showPenIcon?: boolean;
  variant?: 'card' | 'title' | 'pill';
}

/**
 * VectorPenFrame:
 * Decora cualquier tarjeta, contenedor o elemento con los trazos, nodos cuadrados de ancla (Anchor Points),
 * manejadores de Bezier con círculos en los extremos y la pluma de Illustrator (Pen Tool).
 * Basado fielmente en image_8a4b06c6.png e image_cb193656.png.
 */
export const VectorPenFrame: React.FC<VectorPenFrameProps> = ({
  children,
  className = '',
  showHandles = true,
  showPenIcon = false,
  variant = 'card',
}) => {
  const { isVectorMode } = useVectorMode();

  if (!isVectorMode) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className={`relative transition-all duration-300 ${className} vector-pen-frame-active`}>
      {/* Contenido original */}
      {children}

      {/* =========================================================================
          CAPA VECTORIAL DE ILUSTRADOR (HERRAMIENTA PLUMA)
          Solo visible cuando isVectorMode está activado
          ========================================================================= */}
      
      {/* 1. Borde de Trazado Vectorial con Guía de Selección */}
      <div className="absolute inset-0 border-2 border-[#0081FB] rounded-inherit pointer-events-none z-20 shadow-[0_0_0_1px_rgba(255,255,255,0.15)]" />

      {/* 2. Puntos de Anclaje Cuadrados (Anchor Points ■) en los 4 vértices (como en image_8a4b06c6.png) */}
      {/* Vértice Superior Izquierdo */}
      <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-[#0081FB] border border-white shadow-sm z-30 pointer-events-none" />

      {/* Vértice Superior Derecho */}
      <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-[#0081FB] border border-white shadow-sm z-30 pointer-events-none" />

      {/* Vértice Inferior Izquierdo */}
      <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-[#0081FB] border border-white shadow-sm z-30 pointer-events-none" />

      {/* Vértice Inferior Derecho */}
      <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-[#0081FB] border border-white shadow-sm z-30 pointer-events-none" />

      {/* 3. Manejadores de Bezier (Líneas tangentes con círculos terminales 'o—■—o' de image_cb193656.png) */}
      {showHandles && (
        <>
          {/* Manejador en Vértice Superior Derecho: Línea tangente con círculo en el extremo */}
          <div className="absolute -top-7 -right-7 w-8 h-8 pointer-events-none z-30">
            <svg viewBox="0 0 40 40" className="w-full h-full overflow-visible">
              <line x1="8" y1="32" x2="32" y2="8" stroke="#0081FB" strokeWidth="1.5" />
              {/* Terminal circular de la manilla (control point) */}
              <circle cx="32" cy="8" r="3.5" fill="white" stroke="#0081FB" strokeWidth="2" />
            </svg>
          </div>

          {/* Manejador en Vértice Inferior Izquierdo: Línea tangente con círculo en el extremo */}
          <div className="absolute -bottom-7 -left-7 w-8 h-8 pointer-events-none z-30">
            <svg viewBox="0 0 40 40" className="w-full h-full overflow-visible">
              <line x1="32" y1="8" x2="8" y2="32" stroke="#0081FB" strokeWidth="1.5" />
              {/* Terminal circular de la manilla (control point) */}
              <circle cx="8" cy="32" r="3.5" fill="white" stroke="#0081FB" strokeWidth="2" />
            </svg>
          </div>
        </>
      )}

      {/* 4. Icono de Herramienta Pluma (Pen Tool Nib ✒️) de image_cb193656.png */}
      {showPenIcon && (
        <div className="absolute -bottom-8 right-4 pointer-events-none z-30 flex items-center gap-1.5 animate-bounce-slow">
          {/* Gráfico SVG de la plumilla de Illustrator */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            {/* Plumilla de estilográfica */}
            <path 
              d="M12 2L19 9L15 13L13 11L7 17L4 20L4 17L10 11L8 9L12 2Z" 
              fill="#0A0A0C" 
              stroke="#0081FB" 
              strokeWidth="1.5" 
            />
            {/* Orificio central de la pluma */}
            <circle cx="12" cy="8" r="1.5" fill="#0081FB" />
            {/* Ranura del plumín */}
            <line x1="12" y1="9.5" x2="12" y2="13" stroke="#0081FB" strokeWidth="1" />
          </svg>
          <span className="text-[10px] font-mono bg-[#0081FB] text-white px-1.5 py-0.5 rounded shadow">
            Pen (P)
          </span>
        </div>
      )}
    </div>
  );
};
