import { useState, useRef, Suspense, useCallback, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';

/**
 * Generate glowing ember/sparkle positions distributed vertically.
 */
function generateSparklePositions(count, spreadX, spreadY, spreadZ) {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * spreadX;
    positions[i * 3 + 1] = (Math.random() - 0.5) * spreadY;
    positions[i * 3 + 2] = (Math.random() - 0.5) * spreadZ;
  }
  return positions;
}

/**
 * Sparkle layer: floating warm embers that gently rise and drift with light turbulence.
 */
function SparkleLayer({ count, color, size, speed, spreadX = 2.5, spreadY = 2.5, spreadZ = 1.5 }) {
  const ref = useRef();
  const [positions] = useState(() => generateSparklePositions(count, spreadX, spreadY, spreadZ));

  useFrame((_state, delta) => {
    if (!ref.current) return;
    // Gentle floating rotation and drift
    ref.current.rotation.y += delta * speed * 0.08;
    ref.current.rotation.x = Math.sin(_state.clock.elapsedTime * 0.3 * speed) * 0.05;
  });

  return (
    <group>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={color}
          size={size}
          sizeAttenuation
          depthWrite={false}
          opacity={0.7}
        />
      </Points>
    </group>
  );
}

/**
 * High-Energy Sparkles Field with Warm Golden & Fiery Flame Embers
 */
function SparklesField() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const countMultiplier = isMobile ? 0.35 : 1;

  return (
    <>
      {/* Golden sparks layer */}
      <SparkleLayer
        count={Math.floor(700 * countMultiplier)}
        color="#F59E0B"
        size={0.007}
        speed={0.4}
        spreadX={3.0}
        spreadY={3.0}
        spreadZ={1.8}
      />
      {/* Fiery orange embers */}
      <SparkleLayer
        count={Math.floor(450 * countMultiplier)}
        color="#FF5722"
        size={0.011}
        speed={0.7}
        spreadX={2.4}
        spreadY={2.4}
        spreadZ={1.2}
      />
      {/* Bright warm sunlight motes */}
      <SparkleLayer
        count={Math.floor(250 * countMultiplier)}
        color="#FBBF24"
        size={0.014}
        speed={1.0}
        spreadX={2.0}
        spreadY={2.0}
        spreadZ={0.9}
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
          <SparklesField />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
}
