import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

// Total time to complete the cool -> neutral -> warm transition: 150 seconds (2.5 minutes)
export const THEME_TRANSITION_DURATION = 150;

const ThemeContext = createContext({
  progress: 0,
  themePhase: 'cool',
  setProgress: () => {},
  isPaused: false,
  togglePause: () => {},
});

// Helper to interpolate between two hex colors
function lerpHex(hex1, hex2, factor) {
  const c1 = parseInt(hex1.replace('#', ''), 16);
  const c2 = parseInt(hex2.replace('#', ''), 16);

  const r1 = (c1 >> 16) & 255;
  const g1 = (c1 >> 8) & 255;
  const b1 = c1 & 255;

  const r2 = (c2 >> 16) & 255;
  const g2 = (c2 >> 8) & 255;
  const b2 = c2 & 255;

  const r = Math.round(r1 + (r2 - r1) * factor);
  const g = Math.round(g1 + (g2 - g1) * factor);
  const b = Math.round(b1 + (b2 - b1) * factor);

  return `rgb(${r}, ${g}, ${b})`;
}

// 3 Color Palette Milestones: Cool (0.0) -> Neutral (0.5) -> Warm Fiery Flame (1.0)
const PALETTES = {
  cool: {
    flame50: '#F0F9FF',      // Cool Ice Blue Tint
    flame100: '#E0F2FE',
    flame200: '#BAE6FD',
    flame300: '#7DD3FC',
    flame400: '#38BDF8',
    flame500: '#0284C7',     // Electric Sky Blue
    flame600: '#0369A1',     // Deep Sky Blue
    flame700: '#075985',
    flame800: '#0C4A6E',
    flame900: '#082F49',
    amberGold: '#38BDF8',
    sparkYellow: '#7DD3FC',
    solarRed: '#6366F1',
    bgPage: '#F8FAFC',
    bgTinted: '#F0F9FF',
    accentGradStart: '#0284C7',
    accentGradMid: '#0EA5E9',
    accentGradEnd: '#38BDF8',
    radialR: '2',
    radialG: '132',
    radialB: '199',
    shadowR: '2',
    shadowG: '132',
    shadowB: '199',
  },
  neutral: {
    flame50: '#F0FDFA',      // Soft Teal/Mint Tint
    flame100: '#CCFBF1',
    flame200: '#99F6E4',
    flame300: '#5EEAD4',
    flame400: '#2DD4BF',
    flame500: '#0D9488',     // Teal transitioning to Amber
    flame600: '#0F766E',
    flame700: '#115E59',
    flame800: '#134E4A',
    flame900: '#042F2E',
    amberGold: '#F59E0B',
    sparkYellow: '#FBBF24',
    solarRed: '#EA580C',
    bgPage: '#FAFAFA',
    bgTinted: '#F0FDFA',
    accentGradStart: '#0D9488',
    accentGradMid: '#14B8A6',
    accentGradEnd: '#F59E0B',
    radialR: '13',
    radialG: '148',
    radialB: '136',
    shadowR: '13',
    shadowG: '148',
    shadowB: '136',
  },
  warm: {
    flame50: '#FFF7ED',      // Warm Cream / Flame
    flame100: '#FFEDD5',
    flame200: '#FED7AA',
    flame300: '#FDBA74',
    flame400: '#FB923C',
    flame500: '#FF6B00',     // Fiery Orange
    flame600: '#EA580C',
    flame700: '#C2410C',
    flame800: '#9A3412',
    flame900: '#7C2D12',
    amberGold: '#F59E0B',
    sparkYellow: '#FBBF24',
    solarRed: '#EF4444',
    bgPage: '#FFFDF9',
    bgTinted: '#FFF4E5',
    accentGradStart: '#FF4500',
    accentGradMid: '#FF6B00',
    accentGradEnd: '#FFA500',
    radialR: '255',
    radialG: '107',
    radialB: '0',
    shadowR: '255',
    shadowG: '107',
    shadowB: '0',
  },
};

export const ThemeProvider = ({ children }) => {
  const [progress, setProgressState] = useState(0); // 0.0 (Cool) to 1.0 (Warm)
  const [isPaused, setIsPaused] = useState(false);
  const startTimeRef = useRef(Date.now());
  const progressRef = useRef(0);
  const pausedAtRef = useRef(0);

  const setProgress = (newVal) => {
    const clamped = Math.max(0, Math.min(1, newVal));
    progressRef.current = clamped;
    setProgressState(clamped);
    startTimeRef.current = Date.now() - clamped * THEME_TRANSITION_DURATION * 1000;
  };

  const togglePause = () => {
    setIsPaused((prev) => {
      if (!prev) {
        pausedAtRef.current = Date.now();
      } else {
        const pauseDuration = Date.now() - pausedAtRef.current;
        startTimeRef.current += pauseDuration;
      }
      return !prev;
    });
  };

  // Determine label phase for UI
  const themePhase = progress < 0.35 ? 'cool' : progress < 0.72 ? 'neutral' : 'warm';

  // Animation frame loop to smoothly evolve colors
  useEffect(() => {
    let animId;

    const tick = () => {
      if (!isPaused && progressRef.current < 1) {
        const elapsed = (Date.now() - startTimeRef.current) / 1000;
        const currentProgress = Math.min(1, elapsed / THEME_TRANSITION_DURATION);
        progressRef.current = currentProgress;
        setProgressState(currentProgress);
      }

      // Update CSS Variables based on current progress
      const p = progressRef.current;
      let fromPalette, toPalette, localFactor;

      if (p <= 0.5) {
        fromPalette = PALETTES.cool;
        toPalette = PALETTES.neutral;
        localFactor = p / 0.5;
      } else {
        fromPalette = PALETTES.neutral;
        toPalette = PALETTES.warm;
        localFactor = (p - 0.5) / 0.5;
      }

      // Interpolate colors
      const f50 = lerpHex(fromPalette.flame50, toPalette.flame50, localFactor);
      const f100 = lerpHex(fromPalette.flame100, toPalette.flame100, localFactor);
      const f200 = lerpHex(fromPalette.flame200, toPalette.flame200, localFactor);
      const f300 = lerpHex(fromPalette.flame300, toPalette.flame300, localFactor);
      const f400 = lerpHex(fromPalette.flame400, toPalette.flame400, localFactor);
      const f500 = lerpHex(fromPalette.flame500, toPalette.flame500, localFactor);
      const f600 = lerpHex(fromPalette.flame600, toPalette.flame600, localFactor);
      const f700 = lerpHex(fromPalette.flame700, toPalette.flame700, localFactor);
      const f800 = lerpHex(fromPalette.flame800, toPalette.flame800, localFactor);
      const f900 = lerpHex(fromPalette.flame900, toPalette.flame900, localFactor);

      const amber = lerpHex(fromPalette.amberGold, toPalette.amberGold, localFactor);
      const yellow = lerpHex(fromPalette.sparkYellow, toPalette.sparkYellow, localFactor);
      const solar = lerpHex(fromPalette.solarRed, toPalette.solarRed, localFactor);

      const gradStart = lerpHex(fromPalette.accentGradStart, toPalette.accentGradStart, localFactor);
      const gradMid = lerpHex(fromPalette.accentGradMid, toPalette.accentGradMid, localFactor);
      const gradEnd = lerpHex(fromPalette.accentGradEnd, toPalette.accentGradEnd, localFactor);

      const root = document.documentElement;
      root.style.setProperty('--flame-50', f50);
      root.style.setProperty('--flame-100', f100);
      root.style.setProperty('--flame-200', f200);
      root.style.setProperty('--flame-300', f300);
      root.style.setProperty('--flame-400', f400);
      root.style.setProperty('--flame-500', f500);
      root.style.setProperty('--flame-600', f600);
      root.style.setProperty('--flame-700', f700);
      root.style.setProperty('--flame-800', f800);
      root.style.setProperty('--flame-900', f900);

      root.style.setProperty('--amber-gold', amber);
      root.style.setProperty('--spark-yellow', yellow);
      root.style.setProperty('--solar-red', solar);

      root.style.setProperty(
        '--gradient-flame',
        `linear-gradient(135deg, ${gradStart} 0%, ${gradMid} 45%, ${gradEnd} 100%)`
      );
      root.style.setProperty(
        '--gradient-amber',
        `linear-gradient(135deg, ${gradMid} 0%, ${amber} 100%)`
      );

      // Radial background tints
      const rR = Math.round(
        parseInt(fromPalette.radialR) +
          (parseInt(toPalette.radialR) - parseInt(fromPalette.radialR)) * localFactor
      );
      const rG = Math.round(
        parseInt(fromPalette.radialG) +
          (parseInt(toPalette.radialG) - parseInt(fromPalette.radialG)) * localFactor
      );
      const rB = Math.round(
        parseInt(fromPalette.radialB) +
          (parseInt(toPalette.radialB) - parseInt(fromPalette.radialB)) * localFactor
      );

      root.style.setProperty(
        '--border-light',
        `rgba(${rR}, ${rG}, ${rB}, 0.16)`
      );
      root.style.setProperty(
        '--border-glow',
        `rgba(${rR}, ${rG}, ${rB}, 0.4)`
      );
      root.style.setProperty(
        '--shadow-flame',
        `0 8px 25px rgba(${rR}, ${rG}, ${rB}, 0.35)`
      );
      root.style.setProperty(
        '--theme-tint-radial',
        `radial-gradient(circle at 15% 15%, rgba(${rR}, ${rG}, ${rB}, 0.08) 0%, transparent 40%), radial-gradient(circle at 85% 30%, rgba(${rR}, ${rG}, ${rB}, 0.07) 0%, transparent 45%), radial-gradient(circle at 50% 75%, rgba(${rR}, ${rG}, ${rB}, 0.04) 0%, transparent 50%)`
      );

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [isPaused]);

  return (
    <ThemeContext.Provider
      value={{
        progress,
        themePhase,
        setProgress,
        isPaused,
        togglePause,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
