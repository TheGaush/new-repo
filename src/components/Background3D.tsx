import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function FloatingShape({ position, color, speed, distort }: { position: [number, number, number], color: string, speed: number, distort: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.cos(t / 4) / 2;
    meshRef.current.rotation.y = Math.sin(t / 4) / 2;
    meshRef.current.position.y = position[1] + Math.sin(t * speed) * 0.5;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          speed={speed}
          distort={distort}
          radius={1}
          opacity={0.15}
          transparent
          roughness={0}
          metalness={1}
        />
      </Sphere>
    </Float>
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        
        <FloatingShape position={[-6, 3, -5]} color="#00ffff" speed={1.5} distort={0.4} />
        <FloatingShape position={[7, -4, -8]} color="#ff00ff" speed={1.2} distort={0.6} />
        <FloatingShape position={[0, -6, -10]} color="#39ff14" speed={0.8} distort={0.3} />
        <FloatingShape position={[8, 6, -12]} color="#ff7a00" speed={1.1} distort={0.5} />
      </Canvas>
    </div>
  );
}
