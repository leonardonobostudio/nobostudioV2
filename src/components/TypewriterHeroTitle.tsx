import React, { useState, useEffect } from 'react';
import { VectorSwitch } from './VectorSwitch.tsx';

interface TypingState {
  nob: string;
  showSwitch: boolean;
  studio: string;
  cursor: 'nob' | 'switch' | 'studio' | 'done';
}

function getTypingState(t: number): TypingState {
  // Ciclo total: 6000ms (6 segundos)
  // 0ms - 420ms: Tipeo de "NOB"
  if (t < 140) return { nob: '', showSwitch: false, studio: '', cursor: 'nob' };
  if (t < 280) return { nob: 'N', showSwitch: false, studio: '', cursor: 'nob' };
  if (t < 420) return { nob: 'NO', showSwitch: false, studio: '', cursor: 'nob' };
  if (t < 560) return { nob: 'NOB', showSwitch: false, studio: '', cursor: 'nob' };

  // 560ms - 800ms: Aparición suave y táctil del Switch vectorial
  if (t < 800) return { nob: 'NOB', showSwitch: true, studio: '', cursor: 'switch' };

  // 800ms - 1500ms: Tipeo de "STUDIO"
  if (t < 920) return { nob: 'NOB', showSwitch: true, studio: 'S', cursor: 'studio' };
  if (t < 1040) return { nob: 'NOB', showSwitch: true, studio: 'ST', cursor: 'studio' };
  if (t < 1160) return { nob: 'NOB', showSwitch: true, studio: 'STU', cursor: 'studio' };
  if (t < 1280) return { nob: 'NOB', showSwitch: true, studio: 'STUD', cursor: 'studio' };
  if (t < 1400) return { nob: 'NOB', showSwitch: true, studio: 'STUDI', cursor: 'studio' };

  // 1400ms - 5200ms: Estado completo visible (~3.8 segundos de lectura y admiración estable)
  if (t < 5200) return { nob: 'NOB', showSwitch: true, studio: 'STUDIO', cursor: 'done' };

  // 5200ms - 5900ms: Borrado estilo máquina de escribir (backspacing)
  if (t < 5300) return { nob: 'NOB', showSwitch: true, studio: 'STUDI', cursor: 'studio' };
  if (t < 5400) return { nob: 'NOB', showSwitch: true, studio: 'STUD', cursor: 'studio' };
  if (t < 5480) return { nob: 'NOB', showSwitch: true, studio: 'STU', cursor: 'studio' };
  if (t < 5560) return { nob: 'NOB', showSwitch: true, studio: 'ST', cursor: 'studio' };
  if (t < 5640) return { nob: 'NOB', showSwitch: true, studio: 'S', cursor: 'studio' };
  if (t < 5720) return { nob: 'NOB', showSwitch: true, studio: '', cursor: 'switch' };
  if (t < 5800) return { nob: 'NOB', showSwitch: false, studio: '', cursor: 'nob' };
  if (t < 5880) return { nob: 'NO', showSwitch: false, studio: '', cursor: 'nob' };
  if (t < 5940) return { nob: 'N', showSwitch: false, studio: '', cursor: 'nob' };

  // 5940ms - 6000ms: breve pausa de reinicio a los 6 segundos exactos
  return { nob: '', showSwitch: false, studio: '', cursor: 'nob' };
}

export const TypewriterHeroTitle: React.FC = () => {
  const [state, setState] = useState<TypingState>(() => getTypingState(0));

  useEffect(() => {
    // Si el usuario prefiere movimiento reducido, mostrar completo sin animación continua
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setState({ nob: 'NOB', showSwitch: true, studio: 'STUDIO', cursor: 'done' });
      return;
    }

    const startTime = performance.now();
    const interval = setInterval(() => {
      const elapsed = performance.now() - startTime;
      const cycleTime = elapsed % 6000;
      setState(getTypingState(cycleTime));
    }, 40); // 25fps actualización de alta precisión

    return () => clearInterval(interval);
  }, []);

  const { nob, showSwitch, studio, cursor } = state;

  return (
    <div 
      className="flex items-center flex-wrap sm:flex-nowrap gap-2 sm:gap-3 md:gap-[16px] relative z-20 min-h-[1.15em]"
      aria-label="NOB STUDIO"
    >
      {/* Texto NOB con efecto de tipeo */}
      <span className="inline-block tracking-[-0.06em]">
        {nob}
        {cursor === 'nob' && (
          <span 
            className="inline-block w-[3px] sm:w-[5px] lg:w-[6px] h-[0.75em] bg-[#e3a5c7] ml-1 align-middle rounded-sm animate-pulse shadow-[0_0_8px_rgba(227,165,199,0.8)]"
            aria-hidden="true"
          />
        )}
      </span>

      {/* Switch Vectorial de Illustrator interactivo con animación táctil de entrada/salida */}
      <div 
        className={`inline-flex items-center relative -top-1 sm:-top-2 lg:-top-3 cursor-pointer shrink-0 transition-all duration-300 ease-out origin-left ${
          showSwitch 
            ? 'opacity-100 scale-100 max-w-[200px]' 
            : 'opacity-0 scale-75 max-w-0 pointer-events-none overflow-hidden'
        }`}
      >
        <VectorSwitch size="hero" />
        {cursor === 'switch' && (
          <span 
            className="inline-block w-[3px] sm:w-[5px] lg:w-[6px] h-[0.75em] bg-[#e3a5c7] ml-2 align-middle rounded-sm animate-pulse shadow-[0_0_8px_rgba(227,165,199,0.8)]"
            aria-hidden="true"
          />
        )}
      </div>

      {/* Texto STUDIO en tono morado (#e3a5c7) con efecto de tipeo */}
      <span className="text-[#e3a5c7] inline-block tracking-[-0.06em]">
        {studio}
        {(cursor === 'studio' || cursor === 'done') && (
          <span 
            className="inline-block w-[3px] sm:w-[5px] lg:w-[6px] h-[0.75em] bg-[#e3a5c7] ml-1.5 align-middle rounded-sm animate-pulse shadow-[0_0_8px_rgba(227,165,199,0.8)]"
            aria-hidden="true"
          />
        )}
      </span>
    </div>
  );
};
