import { useState, useRef, Suspense, useCallback, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import { useTheme } from '../../context/ThemeContext';

function hexToRgb(hex) {
  // strips the leading '#' and parses r, g, b
  const int = parseInt(hex.replace('#', ''), 16);
  return [(int >> 16) & 255, (int >> 8) & 255, int & 255];
}

function lerpRgb(r1, g1, b1, r2, g2, b2, t) {
  return [
    (r1 + (r2 - r1) * t) / 255,
    (g1 + (g2 - g1) * t) / 255,
    (b1 + (b2 - b1) * t) / 255,
  ];
}

function generatePositions(count, spread = 2.5, depth = 1.5) {
  const arr = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    arr[i * 3]     = (Math.random() - 0.5) * spread;
    arr[i * 3 + 1] = (Math.random() - 0.5) * spread;
    arr[i * 3 + 2] = (Math.random() - 0.5) * depth;
  }
  return arr;
}

// --- Cool Phase: sharp 4-point star shape via small size + fast twinkle ---
// --- Neutral Phase: soft round orbs (larger size) ---
// --- Warm Phase: fiery embers (larger, brighter, faster)  ---

function ParticleLayer({ count, spread, depth, baseSize, speed, colorStart, colorEnd, progress, phaseIn = 0, phaseOut = 1, sizeMultiplier = 1 }) {
  const ref = useRef();
  const [positions] = useState(() => generatePositions(count, spread, depth));

  // how visible is this layer at the current progress?
  const layerAlpha = useMemo(() => {
    if (progress < phaseIn) return 0;
    if (progress > phaseOut) return 0;
    const rampUp   = phaseIn  < 0.01 ? 1 : Math.min(1, (progress - phaseIn)  / 0.08);
    const rampDown = phaseOut > 0.99 ? 1 : Math.min(1, (phaseOut - progress) / 0.08);
    return Math.min(rampUp, rampDown);
  }, [progress, phaseIn, phaseOut]);

  const [r1, g1, b1] = hexToRgb(colorStart);
  const [r2, g2, b2] = hexToRgb(colorEnd);
  // local blend factor within this layer's range
  const localT = phaseOut === phaseIn ? 0 : Math.min(1, Math.max(0, (progress - phaseIn) / (phaseOut - phaseIn)));
  const [nr, ng, nb] = lerpRgb(r1, g1, b1, r2, g2, b2, localT);

  useFrame(({ clock }, delta) => {
    if (!ref.current || layerAlpha < 0.001) return;
    const t = clock.elapsedTime;
    ref.current.rotation.y += delta * speed * 0.07;
    ref.current.rotation.x  = Math.sin(t * 0.25 * speed) * 0.04;
    ref.current.rotation.z  = Math.cos(t * 0.18 * speed) * 0.025;
  });

  if (layerAlpha < 0.001) return null;

  return (
    <group ref={ref}>
      <Points positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={[nr, ng, nb]}
          size={baseSize * sizeMultiplier}
          sizeAttenuation
          depthWrite={false}
          opacity={0.72 * layerAlpha}
        />
      </Points>
    </group>
  );
}

function ParticlesField() {
  const { progress } = useTheme();
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const m = isMobile ? 0.35 : 1;

  return (
    <>
      {/* ===== COOL PHASE: Sharp star-like tiny points (icy blue-white) ===== */}
      <ParticleLayer
        key="cool-stars-1"
        count={Math.floor(1200 * m)}
        spread={3.2}
        depth={1.8}
        baseSize={0.004}      // very small = star-like twinkle effect
        speed={0.3}
        colorStart="#E0F2FE"   // Ice blue
        colorEnd="#38BDF8"     // Sky blue
        progress={progress}
        phaseIn={0}
        phaseOut={0.55}
        sizeMultiplier={1}
      />
      <ParticleLayer
        key="cool-stars-2"
        count={Math.floor(600 * m)}
        spread={2.6}
        depth={1.3}
        baseSize={0.0055}
        speed={0.5}
        colorStart="#BAE6FD"
        colorEnd="#0284C7"
        progress={progress}
        phaseIn={0}
        phaseOut={0.5}
        sizeMultiplier={1}
      />
      <ParticleLayer
        key="cool-stars-3"
        count={Math.floor(300 * m)}
        spread={2.0}
        depth={1.0}
        baseSize={0.007}
        speed={0.9}
        colorStart="#7DD3FC"
        colorEnd="#6366F1"     // Indigo accent
        progress={progress}
        phaseIn={0}
        phaseOut={0.45}
        sizeMultiplier={1}
      />

      {/* ===== NEUTRAL PHASE: Soft round orbs (teal→amber) ===== */}
      <ParticleLayer
        key="neutral-orbs-1"
        count={Math.floor(700 * m)}
        spread={3.0}
        depth={1.6}
        baseSize={0.011}       // bigger = rounder, blobby look
        speed={0.45}
        colorStart="#2DD4BF"   // Teal
        colorEnd="#F59E0B"     // Amber
        progress={progress}
        phaseIn={0.3}
        phaseOut={0.75}
        sizeMultiplier={1}
      />
      <ParticleLayer
        key="neutral-orbs-2"
        count={Math.floor(400 * m)}
        spread={2.4}
        depth={1.2}
        baseSize={0.015}
        speed={0.7}
        colorStart="#14B8A6"
        colorEnd="#FBBF24"
        progress={progress}
        phaseIn={0.35}
        phaseOut={0.7}
        sizeMultiplier={1}
      />

      {/* ===== WARM PHASE: Fiery embers & sparkles ===== */}
      <ParticleLayer
        key="warm-embers-1"
        count={Math.floor(800 * m)}
        spread={3.0}
        depth={1.8}
        baseSize={0.007}
        speed={0.5}
        colorStart="#F59E0B"   // Amber
        colorEnd="#FF6B00"     // Fire orange
        progress={progress}
        phaseIn={0.55}
        phaseOut={1.0}
        sizeMultiplier={1}
      />
      <ParticleLayer
        key="warm-embers-2"
        count={Math.floor(500 * m)}
        spread={2.4}
        depth={1.3}
        baseSize={0.011}
        speed={0.8}
        colorStart="#FF5722"
        colorEnd="#FF4500"
        progress={progress}
        phaseIn={0.6}
        phaseOut={1.0}
        sizeMultiplier={1}
      />
      <ParticleLayer
        key="warm-embers-3"
        count={Math.floor(280 * m)}
        spread={1.9}
        depth={0.9}
        baseSize={0.015}
        speed={1.1}
        colorStart="#FBBF24"
        colorEnd="#FFD700"
        progress={progress}
        phaseIn={0.65}
        phaseOut={1.0}
        sizeMultiplier={1}
      />
    </>
  );
}

export default function SparklesCanvas() {
  const canvasRef = useRef(null);

  const handleCreated = useCallback(({ gl }) => {
    const canvas = gl.domElement;
    const handleContextLost = (e) => {
      e.preventDefault();
      console.warn('WebGL context lost – Particles paused.');
    };
    canvas.addEventListener('webglcontextlost', handleContextLost);
  }, []);

  return (
    <div
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 1] }}
        gl={{ preserveDrawingBuffer: true, alpha: true, antialias: false }}
        dpr={[1, 1.5]}
        style={{ background: 'transparent' }}
        onCreated={handleCreated}
      >
        <Suspense fallback={null}>
          <ParticlesField />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
}
