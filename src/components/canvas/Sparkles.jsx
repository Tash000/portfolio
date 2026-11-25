import React, { useState, useRef, useEffect, Suspense, useCallback, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';

/**
 * Generate 3D positions with vertical distribution so particles drift and float.
 */
function generatePositions(count, spreadX, spreadY, spreadZ) {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * spreadX;
    positions[i * 3 + 1] = (Math.random() - 0.5) * spreadY;
    positions[i * 3 + 2] = (Math.random() - 0.5) * spreadZ;
  }
  return positions;
}

/**
 * 1. CRISP 4-POINTED STAR TEXTURE (Cool Sky Phase)
 * Razor-sharp diamond star with central radiant core.
 */
function createStarTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');
  const cx = 64;
  const cy = 64;

  // Soft radiant flare background
  const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, 60);
  glow.addColorStop(0, 'rgba(255, 255, 255, 1)');
  glow.addColorStop(0.3, 'rgba(255, 255, 255, 0.7)');
  glow.addColorStop(0.7, 'rgba(255, 255, 255, 0.25)');
  glow.addColorStop(1, 'rgba(255, 255, 255, 0)');
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, 128, 128);

  // 4-pointed sharp diamond star
  ctx.fillStyle = '#FFFFFF';
  ctx.beginPath();
  const spikes = 4;
  const outerR = 56;
  const innerR = 9;
  let rot = (Math.PI / 2) * 3;
  const step = Math.PI / spikes;

  ctx.moveTo(cx, cy - outerR);
  for (let i = 0; i < spikes; i++) {
    let x = cx + Math.cos(rot) * outerR;
    let y = cy + Math.sin(rot) * outerR;
    ctx.lineTo(x, y);
    rot += step;

    x = cx + Math.cos(rot) * innerR;
    y = cy + Math.sin(rot) * innerR;
    ctx.lineTo(x, y);
    rot += step;
  }
  ctx.lineTo(cx, cy - outerR);
  ctx.closePath();
  ctx.fill();

  // Solid bright core
  ctx.fillStyle = '#FFFFFF';
  ctx.beginPath();
  ctx.arc(cx, cy, 6, 0, Math.PI * 2);
  ctx.fill();

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

/**
 * 2. TRANSLUCENT WATER BUBBLE / ORB TEXTURE (Neutral Bloom Phase)
 * Glowing sphere with distinct translucent rim and specular gleam.
 */
function createBubbleTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');
  const cx = 64;
  const cy = 64;

  // Outer ambient glow
  const outerGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, 58);
  outerGlow.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
  outerGlow.addColorStop(0.65, 'rgba(255, 255, 255, 0.45)');
  outerGlow.addColorStop(1, 'rgba(255, 255, 255, 0)');
  ctx.fillStyle = outerGlow;
  ctx.beginPath();
  ctx.arc(cx, cy, 58, 0, Math.PI * 2);
  ctx.fill();

  // Defined circular bubble rim
  ctx.strokeStyle = '#FFFFFF';
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.arc(cx, cy, 46, 0, Math.PI * 2);
  ctx.stroke();

  // Specular gleam highlight
  ctx.fillStyle = 'rgba(255, 255, 255, 0.98)';
  ctx.beginPath();
  ctx.arc(48, 48, 8, 0, Math.PI * 2);
  ctx.fill();

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

/**
 * 3. RADIANT FIERY SPARKLE & EMBER TEXTURE (Solar Flame Phase)
 * Cross-flare flame sparkle with radiant hot center.
 */
function createSparkleTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');
  const cx = 64;
  const cy = 64;

  // Hot flame radial core
  const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 58);
  grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
  grad.addColorStop(0.2, 'rgba(255, 240, 200, 0.98)');
  grad.addColorStop(0.55, 'rgba(255, 160, 40, 0.65)');
  grad.addColorStop(1, 'rgba(255, 70, 0, 0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 128, 128);

  // Sharp cross-flare rays
  ctx.strokeStyle = '#FFFFFF';
  ctx.lineWidth = 4.5;
  ctx.beginPath();
  ctx.moveTo(cx, 8);
  ctx.lineTo(cx, 120);
  ctx.moveTo(8, cy);
  ctx.lineTo(120, cy);
  ctx.stroke();

  // Secondary diagonal micro-rays
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(28, 28);
  ctx.lineTo(100, 100);
  ctx.moveTo(100, 28);
  ctx.lineTo(28, 100);
  ctx.stroke();

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

/**
 * Three.js Color Lerp Helper
 */
function lerpColor(c1, c2, factor) {
  const color1 = new THREE.Color(c1);
  const color2 = new THREE.Color(c2);
  return color1.lerp(color2, factor);
}

/**
 * Individual Particle Layer with continuous gentle floating drift
 */
function ParticleLayer({
  count,
  texture,
  baseColorCool,
  baseColorNeutral,
  baseColorWarm,
  progress,
  size,
  speed,
  opacity,
  spreadX = 2.8,
  spreadY = 2.8,
  spreadZ = 1.6,
}) {
  const ref = useRef();
  const materialRef = useRef();
  const [positions] = useState(() => generatePositions(count, spreadX, spreadY, spreadZ));

  const currentColor = useMemo(() => {
    if (progress <= 0.5) {
      return lerpColor(baseColorCool, baseColorNeutral, progress / 0.5);
    } else {
      return lerpColor(baseColorNeutral, baseColorWarm, (progress - 0.5) / 0.5);
    }
  }, [progress, baseColorCool, baseColorNeutral, baseColorWarm]);

  useFrame((_state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * speed * 0.08;
    ref.current.rotation.x = Math.sin(_state.clock.elapsedTime * 0.25 * speed) * 0.06;

    if (materialRef.current) {
      materialRef.current.opacity = opacity;
      materialRef.current.color.set(currentColor);
    }
  });

  if (opacity <= 0.01) return null;

  return (
    <group>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          ref={materialRef}
          transparent
          map={texture}
          color={currentColor}
          size={size}
          sizeAttenuation
          depthWrite={false}
          opacity={opacity}
          alphaTest={0.01}
        />
      </Points>
    </group>
  );
}

/**
 * Dynamic Multi-Phase Particle Field
 * Transitions:
 * - 0.0 -> 0.35: Cool Stars floating in space (deep cyan/blue for crisp visibility on light background)
 * - 0.35 -> 0.70: Round Balls / Bubbles drifting gently
 * - 0.70 -> 1.0+: Fiery Sparkles & Embers dancing in radiant flame
 */
function DynamicParticleField({ progress }) {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const countMultiplier = isMobile ? 0.45 : 1;

  const starTexture = useMemo(() => createStarTexture(), []);
  const bubbleTexture = useMemo(() => createBubbleTexture(), []);
  const sparkleTexture = useMemo(() => createSparkleTexture(), []);

  // Calculate opacities
  let starOpacity = 0;
  if (progress <= 0.25) {
    starOpacity = 0.95;
  } else if (progress < 0.48) {
    starOpacity = 0.95 * (1 - (progress - 0.25) / 0.23);
  }

  let bubbleOpacity = 0;
  if (progress > 0.20 && progress <= 0.5) {
    bubbleOpacity = 0.9 * ((progress - 0.20) / 0.30);
  } else if (progress > 0.5 && progress < 0.78) {
    bubbleOpacity = 0.9 * (1 - (progress - 0.5) / 0.28);
  }

  let sparkleOpacity = 0;
  if (progress > 0.52) {
    sparkleOpacity = Math.min(0.95, 0.95 * ((progress - 0.52) / 0.38));
  }

  return (
    <>
      {/* 1. COOL STAR LAYER (Prominent, crisp, unmistakable star shapes) */}
      {starOpacity > 0.01 && (
        <>
          <ParticleLayer
            count={Math.floor(480 * countMultiplier)}
            texture={starTexture}
            baseColorCool="#0284C7"      // Deep Sky Blue (High contrast)
            baseColorNeutral="#0D9488"   // Deep Teal
            baseColorWarm="#D97706"      // Warm Amber
            progress={progress}
            size={0.038}                 // Larger, clearly defined star
            speed={0.45}
            opacity={starOpacity}
            spreadX={3.0}
            spreadY={3.0}
            spreadZ={1.8}
          />
          <ParticleLayer
            count={Math.floor(280 * countMultiplier)}
            texture={starTexture}
            baseColorCool="#2563EB"      // Vibrant Cobalt Blue
            baseColorNeutral="#059669"   // Emerald
            baseColorWarm="#EA580C"      // Flame Orange
            progress={progress}
            size={0.048}                 // Prominent feature stars
            speed={0.65}
            opacity={starOpacity * 0.92}
            spreadX={2.5}
            spreadY={2.5}
            spreadZ={1.3}
          />
        </>
      )}

      {/* 2. NEUTRAL ROUND BALLS / BUBBLE LAYER */}
      {bubbleOpacity > 0.01 && (
        <>
          <ParticleLayer
            count={Math.floor(420 * countMultiplier)}
            texture={bubbleTexture}
            baseColorCool="#0EA5E9"      // Cyan Bubble
            baseColorNeutral="#0D9488"   // Fresh Teal
            baseColorWarm="#F59E0B"      // Golden Amber
            progress={progress}
            size={0.042}
            speed={0.4}
            opacity={bubbleOpacity}
            spreadX={2.8}
            spreadY={2.8}
            spreadZ={1.6}
          />
          <ParticleLayer
            count={Math.floor(240 * countMultiplier)}
            texture={bubbleTexture}
            baseColorCool="#0284C7"      // Blue Sphere
            baseColorNeutral="#F59E0B"   // Amber Orb
            baseColorWarm="#FF8A00"      // Bright Orb
            progress={progress}
            size={0.052}
            speed={0.55}
            opacity={bubbleOpacity * 0.88}
            spreadX={2.2}
            spreadY={2.2}
            spreadZ={1.1}
          />
        </>
      )}

      {/* 3. WARM FIERY SPARKLE & EMBER LAYER (Vivid solar embers) */}
      {sparkleOpacity > 0.01 && (
        <>
          <ParticleLayer
            count={Math.floor(580 * countMultiplier)}
            texture={sparkleTexture}
            baseColorCool="#0284C7"
            baseColorNeutral="#EA580C"
            baseColorWarm="#FF4500"      // Vibrant Fiery Flame Orange
            progress={progress}
            size={0.040}                 // Crisp sparkling ember
            speed={0.8}
            opacity={sparkleOpacity}
            spreadX={2.6}
            spreadY={2.6}
            spreadZ={1.4}
          />
          <ParticleLayer
            count={Math.floor(320 * countMultiplier)}
            texture={sparkleTexture}
            baseColorCool="#2563EB"
            baseColorNeutral="#F59E0B"
            baseColorWarm="#FBBF24"      // Bright Golden Spark
            progress={progress}
            size={0.050}                 // Hot blazing spark
            speed={1.1}
            opacity={sparkleOpacity * 0.95}
            spreadX={2.0}
            spreadY={2.0}
            spreadZ={0.9}
          />
        </>
      )}
    </>
  );
}

/**
 * 3D Scroll Parallax Controller
 * Gently drifts camera on Y and tilts on X as visitor scrolls down the page,
 * producing real optical depth parallax through the particle cloud.
 */
function ScrollParallaxRig() {
  const { camera } = useThree();
  const currentY = useRef(0);
  const targetY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const ratio = Math.min(1, Math.max(0, window.scrollY / maxScroll));
      // Shifts camera downwards smoothly as user scrolls through the portfolio with enhanced optical depth
      targetY.current = -ratio * 1.5;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useFrame(() => {
    // Smooth lerp to prevent jittery camera jump
    currentY.current += (targetY.current - currentY.current) * 0.08;
    camera.position.y = currentY.current;
    camera.position.x = Math.sin(currentY.current * Math.PI) * 0.08;
    camera.rotation.z = Math.sin(currentY.current * Math.PI) * 0.03;
  });

  return null;
}

export default function SparklesCanvas() {
  const { progress } = useTheme();
  const canvasRef = useRef(null);

  const handleCreated = useCallback(({ gl }) => {
    const canvas = gl.domElement;
    const handleContextLost = (e) => {
      e.preventDefault();
      console.warn('WebGL context lost — Sparkles paused.');
    };
    canvas.addEventListener('webglcontextlost', handleContextLost);
  }, []);

  return (
    <div
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
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
          <ScrollParallaxRig />
          <DynamicParticleField progress={progress} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
}
