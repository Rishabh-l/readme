"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { Mesh, TorusKnotGeometry } from "three";

function TorusKnot() {
  const meshRef = useRef<Mesh>(null);
  const geom = useMemo(() => new TorusKnotGeometry(1, 0.3, 128, 16), []);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.15;
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={1}>
      <mesh ref={meshRef} geometry={geom} scale={0.6}>
        <MeshDistortMaterial
          color="#f59e0b"
          emissive="#d97706"
          emissiveIntensity={0.3}
          roughness={0.3}
          metalness={0.8}
          distort={0.15}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

export default function ThreeBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <pointLight position={[-5, -5, -5]} intensity={0.4} color="#f59e0b" />
        <TorusKnot />
      </Canvas>
    </div>
  );
}
