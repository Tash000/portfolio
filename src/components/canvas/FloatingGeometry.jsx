import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * FloatingGeometry — a decorative wireframe shape that rotates and bobs.
 *
 * Props:
 *   position  — [x, y, z] placement (default [0, 0, 0])
 *   scale     — uniform scale (default 1)
 *   speed     — animation speed multiplier (default 1)
 *   shape     — 'icosahedron' | 'torusKnot' (default 'icosahedron')
 *   color     — wireframe color (default '#915EFF')
 *   glowColor — edge glow color (default '#915EFF')
 */
export default function FloatingGeometry({
  position = [0, 0, 0],
  scale = 1,
  speed = 1,
  shape = 'icosahedron',
  color = '#915EFF',
  glowColor = '#915EFF',
}) {
  const meshRef = useRef();
  const glowRef = useRef();
  const initialY = position[1];

  const geometry = useMemo(() => {
    if (shape === 'torusKnot') {
      return new THREE.TorusKnotGeometry(1, 0.3, 100, 16);
    }
    return new THREE.IcosahedronGeometry(1, 1);
  }, [shape]);

  const wireframeMaterial = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color,
        wireframe: true,
        transparent: true,
        opacity: 0.85,
      }),
    [color],
  );

  const glowMaterial = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: glowColor,
        wireframe: true,
        transparent: true,
        opacity: 0.18,
      }),
    [glowColor],
  );

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;

    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.3;
      meshRef.current.rotation.y = t * 0.2;
      meshRef.current.position.y = initialY + Math.sin(t * 0.6) * 0.15;
    }

    if (glowRef.current) {
      glowRef.current.rotation.x = t * 0.3;
      glowRef.current.rotation.y = t * 0.2;
      glowRef.current.position.y = initialY + Math.sin(t * 0.6) * 0.15;
      // Pulsing glow opacity
      glowRef.current.material.opacity = 0.12 + Math.sin(t * 1.2) * 0.06;
    }
  });

  return (
    <group position={position}>
      {/* Core wireframe */}
      <mesh ref={meshRef} geometry={geometry} material={wireframeMaterial} scale={scale} />

      {/* Glow layer — slightly larger duplicate for edge glow effect */}
      <mesh
        ref={glowRef}
        geometry={geometry}
        material={glowMaterial}
        scale={scale * 1.08}
      />
    </group>
  );
}
