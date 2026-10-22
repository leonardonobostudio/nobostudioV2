import React from 'react';
import { useVectorMode } from '../context/VectorModeContext.tsx';

interface VectorSwitchProps {
  size?: 'sm' | 'md' | 'lg' | 'hero';
  className?: string;
  showLabel?: boolean;
  label?: string;
}

export const VectorSwitch: React.FC<VectorSwitchProps> = ({
  size = 'md',
  className = '',
  showLabel = false,
  label = 'MODO PLUMA VECTOR',
}) => {
  const { isVectorMode, toggleVectorMode } = useVectorMode();

  // Escalas de dimensiones según el tamaño
  const dimensions = {
    sm: { width: 62, height: 32, stroke: 3.5, radius: 16, knobRadius: 8.5, cxOff: 19, cxOn: 43 },
    md: { width: 80, height: 40, stroke: 4.5, radius: 20, knobRadius: 10.5, cxOff: 24, cxOn: 56 },
    lg: { width: 104, height: 50, stroke: 5.5, radius: 25, knobRadius: 13, cxOff: 28, cxOn: 76 },
    hero: { width: 144, height: 66, stroke: 7, radius: 33, knobRadius: 18, cxOff: 38, cxOn: 106 },
  }[size];

  const { width, height, stroke, radius, knobRadius, cxOff, cxOn } = dimensions;

  // Color de trazado: Azul Ilustrador (#0081FB) cuando está en modo vector, Blanco en modo estándar
  const strokeColor = isVectorMode ? '#0081FB' : '#FFFFFF';
  const nodeColor = isVectorMode ? '#0081FB' : '#FFFFFF';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Botón interactivo que reproduce los vectores con nodos de pluma de Illustrator (image_8a4b06c6 e image_cb193656) */}
      <button
        type="button"
        role="switch"
        aria-checked={isVectorMode}
        onClick={toggleVectorMode}
        aria-label="Alternar modo vectorial de pluma de Illustrator"
        title={isVectorMode ? "Desactivar Modo Vectorial (Volver a Modo Normal)" : "Activar Modo Vectorial de Pluma de Illustrator"}
        className="group relative cursor-pointer focus:outline-none transition-transform duration-200 active:scale-95 inline-flex items-center justify-center p-1 rounded-full"
      >
        <svg
          viewBox={`0 0 ${width + (size === 'hero' ? 44 : 32)} ${height + (size === 'hero' ? 36 : 24)}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="overflow-visible"
          style={{
            height: size === 'hero' ? '0.62em' : `${height + 24}px`,
            width: size === 'hero' ? 'auto' : `${width + 32}px`,
            maxHeight: size === 'hero' ? '120px' : undefined,
          }}
        >
          {/* Grupo desplazado para dar espacio a los manejadores de ancla (anchor handles) de la pluma */}
          <g transform={`translate(${size === 'hero' ? 22 : 16}, ${size === 'hero' ? 18 : 12})`}>
            
            {/* Contenedor Pill con trazo de vector de ilustrador */}
            <rect
              x={stroke / 2}
              y={stroke / 2}
              width={width - stroke}
              height={height - stroke}
              rx={radius}
              fill={isVectorMode ? '#0081FB15' : 'transparent'}
              stroke={strokeColor}
              strokeWidth={stroke}
              className="transition-colors duration-300"
            />

            {/* Cuatro Nodos Cardinales de Ancla de la elipse (como en image_8a4b06c6.png: círculo con 4 nodos cuadrados) */}
            {isVectorMode && (
              <>
                {/* Nodo Superior */}
                <rect 
                  x={width / 2 - 3.5} 
                  y={-3.5} 
                  width="7" 
                  height="7" 
                  fill="#0081FB" 
                  stroke="#FFFFFF" 
                  strokeWidth="1" 
                />
                {/* Nodo Inferior */}
                <rect 
                  x={width / 2 - 3.5} 
                  y={height - 3.5} 
                  width="7" 
                  height="7" 
                  fill="#0081FB" 
                  stroke="#FFFFFF" 
                  strokeWidth="1" 
                />
                {/* Nodo Derecho */}
                <rect 
                  x={width - 3.5} 
                  y={height / 2 - 3.5} 
                  width="7" 
                  height="7" 
                  fill="#0081FB" 
                  stroke="#FFFFFF" 
                  strokeWidth="1" 
                />
              </>
            )}

            {/* Manilla vectorial de Bezier / Nodos de ancla (Línea con cuadraditos blancos) 
                Exacto como se ve en la captura de Illustrator: línea vertical con nodos cuadrados en los extremos */}
            <g 
              className="transition-transform duration-300 ease-out"
              transform={`translate(${isVectorMode ? width - (size === 'hero' ? 10 : 8) : -(size === 'hero' ? 10 : 8)}, 0)`}
            >
              {/* Línea vertical guía del vector tangente */}
              <line 
                x1="0" 
                y1={-(size === 'hero' ? 12 : 8)} 
                x2="0" 
                y2={height + (size === 'hero' ? 12 : 8)} 
                stroke={strokeColor} 
                strokeWidth={size === 'hero' ? '2' : '1.3'} 
                className="opacity-95"
              />

              {/* Terminal circular superior de Bezier (como en image_cb193656.png con circulito en el extremo) */}
              <circle
                cx="0"
                cy={-(size === 'hero' ? 12 : 8)}
                r={size === 'hero' ? '4.5' : '3.5'}
                fill="#FFFFFF"
                stroke={strokeColor}
                strokeWidth={size === 'hero' ? '2' : '1.5'}
              />

              {/* Cuadrado de nodo superior (Anchor point ■ de image_8a4b06c6.png) */}
              <rect 
                x={size === 'hero' ? '-5' : '-3.5'} 
                y={stroke / 2 - (size === 'hero' ? 3 : 2)} 
                width={size === 'hero' ? '10' : '7'} 
                height={size === 'hero' ? '10' : '7'} 
                fill={nodeColor} 
                stroke="#FFFFFF"
                strokeWidth={size === 'hero' ? '1.5' : '1'}
                className="shadow-sm"
              />

              {/* Cuadrado de nodo inferior (Anchor point ■ de image_8a4b06c6.png) */}
              <rect 
                x={size === 'hero' ? '-5' : '-3.5'} 
                y={height - stroke / 2 - (size === 'hero' ? 7 : 5)} 
                width={size === 'hero' ? '10' : '7'} 
                height={size === 'hero' ? '10' : '7'} 
                fill={nodeColor} 
                stroke="#FFFFFF"
                strokeWidth={size === 'hero' ? '1.5' : '1'}
                className="shadow-sm"
              />

              {/* Terminal circular inferior de Bezier (como en image_cb193656.png) */}
              <circle
                cx="0"
                cy={height + (size === 'hero' ? 12 : 8)}
                r={size === 'hero' ? '4.5' : '3.5'}
                fill="#FFFFFF"
                stroke={strokeColor}
                strokeWidth={size === 'hero' ? '2' : '1.5'}
              />
            </g>

            {/* Botón circular móvil (Knob) que se desliza de izquierda a derecha */}
            <circle
              cx={isVectorMode ? cxOn : cxOff}
              cy={height / 2}
              r={knobRadius}
              fill={strokeColor}
              className="transition-all duration-300 ease-in-out drop-shadow-md"
            />

            {/* Punto central del nodo cuando está activo */}
            {isVectorMode && (
              <circle
                cx={cxOn}
                cy={height / 2}
                r={size === 'hero' ? '4.5' : '3'}
                fill="#000002"
                className="transition-all duration-300"
              />
            )}

            {/* Icono de Plumilla de Illustrator (Pen Tool ✒️) apuntando al nodo activo (como en image_cb193656.png) */}
            {isVectorMode && (
              <g 
                transform={`translate(${cxOn + (size === 'hero' ? 8 : 6)}, ${height / 2 + (size === 'hero' ? 6 : 4)})`}
                className="animate-pulse"
              >
                <path 
                  d="M0 0 L10 10 L6 14 L4 12 L-2 18 L-5 21 L-5 18 L1 12 L-1 10 Z" 
                  fill="#0A0A0C" 
                  stroke="#FFFFFF" 
                  strokeWidth="1.2" 
                />
                <circle cx="3" cy="7" r="1.5" fill="#0081FB" />
              </g>
            )}
          </g>
        </svg>

        {/* Resplandor sutil al activarse */}
        {isVectorMode && (
          <span className="absolute -inset-1 rounded-full bg-[#0081FB]/25 blur-md pointer-events-none -z-10 animate-pulse" />
        )}
      </button>

      {/* Etiqueta opcional descriptiva */}
      {showLabel && (
        <div className="flex flex-col text-left">
          <span className={`text-[11px] sm:text-xs font-mono font-bold tracking-widest uppercase transition-colors duration-300 ${
            isVectorMode ? 'text-[#0081FB]' : 'text-white/80 group-hover:text-white'
          }`}>
            {label}
          </span>
          <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-wider">
            {isVectorMode ? 'PLUMA: TRAZADO ACTIVO' : 'CLIC PARA ACTIVAR'}
          </span>
        </div>
      )}
    </div>
  );
};
