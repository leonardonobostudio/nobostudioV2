/**
 * Pure helper and state logic for Nobo Studio digital agency showcase.
 */

export interface AgencyMetrics {
  customerCount: number;
  formattedCount: string;
  satisfactionRate: number;
}

export function formatCustomerCount(count: number): string {
  if (count >= 1000) {
    const k = Math.floor(count / 1000);
    return `${k}k+`;
  }
  return `${count}+`;
}

export function getTechnologyModeState(isTechModeActive: boolean): {
  modeName: string;
  themeAccent: string;
  showGridLines: boolean;
  tagline: string;
} {
  return {
    modeName: isTechModeActive ? 'Engineering & Code' : 'Creative & Design',
    themeAccent: isTechModeActive ? '#00e5ff' : '#ff3811',
    showGridLines: isTechModeActive,
    tagline: isTechModeActive 
      ? 'Architecting scalable cloud systems and interactive WebGL experiences.'
      : 'Crafting emotionally resonant brands and bespoke digital aesthetics.',
  };
}

export function calculateScrollProgress(currentScrollY: number, maxScroll: number): number {
  if (maxScroll <= 0) return 0;
  return Math.min(100, Math.max(0, Math.round((currentScrollY / maxScroll) * 100)));
}
