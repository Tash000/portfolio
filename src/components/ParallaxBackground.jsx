import React, { useState, useEffect } from 'react';

/**
 * ParallaxBackground
 * Renders layered ambient radial glow gradients that drift with scroll parallax
 * and subtly evolve in color & opacity across page sections.
 */
export default function ParallaxBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Compute normalized scroll ratio (0.0 at top -> 1.0 at bottom)
  const maxScroll = typeof document !== 'undefined'
    ? Math.max(1, document.documentElement.scrollHeight - window.innerHeight)
    : 1000;
  const scrollRatio = Math.min(1, Math.max(0, scrollY / maxScroll));

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 0,
      }}
    >
      {/* Parallax Ambient Blob 1 — Top Left / Mid (Drifts up slowly with scroll) */}
      <div
        style={{
          position: 'absolute',
          top: '5%',
          left: '-5%',
          width: 'clamp(360px, 45vw, 650px)',
          height: 'clamp(360px, 45vw, 650px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--flame-300) 0%, var(--flame-100) 45%, transparent 70%)',
          filter: 'blur(90px)',
          opacity: 0.25 - scrollRatio * 0.12,
          transform: `translate3d(0, ${scrollY * -0.15}px, 0)`,
          willChange: 'transform, opacity',
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* Parallax Ambient Blob 2 — Mid Right (Drifts down with scroll depth) */}
      <div
        style={{
          position: 'absolute',
          top: '35%',
          right: '-8%',
          width: 'clamp(400px, 50vw, 750px)',
          height: 'clamp(400px, 50vw, 750px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--amber-gold) 0%, var(--flame-200) 50%, transparent 72%)',
          filter: 'blur(100px)',
          opacity: 0.14 + Math.sin(scrollRatio * Math.PI) * 0.18,
          transform: `translate3d(0, ${scrollY * 0.22}px, 0)`,
          willChange: 'transform, opacity',
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* Parallax Ambient Blob 3 — Deep Bottom (Awakens toward the lower sections) */}
      <div
        style={{
          position: 'absolute',
          top: '70%',
          left: '10%',
          width: 'clamp(380px, 46vw, 680px)',
          height: 'clamp(380px, 46vw, 680px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--solar-red) 0%, var(--flame-400) 45%, transparent 70%)',
          filter: 'blur(95px)',
          opacity: 0.08 + scrollRatio * 0.22,
          transform: `translate3d(0, ${scrollY * -0.12}px, 0)`,
          willChange: 'transform, opacity',
          transition: 'opacity 0.3s ease',
        }}
      />
    </div>
  );
}
