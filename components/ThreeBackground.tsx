"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const count = 150;
    const positions = new Float32Array(count * 3);
    const velocities: { x: number; y: number }[] = [];

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 18;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 18;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
      velocities.push({
        x: (Math.random() - 0.5) * 0.003,
        y: (Math.random() - 0.5) * 0.003,
      });
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: "#f59e0b",
      size: 0.06,
      transparent: true,
      opacity: 0.7,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    const maxLines = (count * (count - 1)) / 2;
    const linePositions = new Float32Array(maxLines * 6);
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    const lineMat = new THREE.LineBasicMaterial({
      color: "#f59e0b",
      transparent: true,
      opacity: 0.15,
    });
    const lines = new THREE.LineSegments(lineGeo, lineMat);
    scene.add(lines);

    const connectionDistance = 2.0;

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    let animId: number;
    const animate = () => {
      const pos = particleGeo.attributes.position
        .array as Float32Array;

      for (let i = 0; i < count; i++) {
        pos[i * 3] += velocities[i].x;
        pos[i * 3 + 1] += velocities[i].y;

        if (pos[i * 3] > 9) velocities[i].x = -Math.abs(velocities[i].x);
        if (pos[i * 3] < -9) velocities[i].x = Math.abs(velocities[i].x);
        if (pos[i * 3 + 1] > 9) velocities[i].y = -Math.abs(velocities[i].y);
        if (pos[i * 3 + 1] < -9) velocities[i].y = Math.abs(velocities[i].y);
      }
      particleGeo.attributes.position.needsUpdate = true;

      let lineIdx = 0;
      for (let i = 0; i < count; i++) {
        for (let j = i + 1; j < count; j++) {
          const dx = pos[i * 3] - pos[j * 3];
          const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
          const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < connectionDistance) {
            linePositions[lineIdx * 6] = pos[i * 3];
            linePositions[lineIdx * 6 + 1] = pos[i * 3 + 1];
            linePositions[lineIdx * 6 + 2] = pos[i * 3 + 2];
            linePositions[lineIdx * 6 + 3] = pos[j * 3];
            linePositions[lineIdx * 6 + 4] = pos[j * 3 + 1];
            linePositions[lineIdx * 6 + 5] = pos[j * 3 + 2];
            lineIdx++;
          }
        }
      }

      lineGeo.setAttribute(
        "position",
        new THREE.BufferAttribute(
          linePositions.slice(0, lineIdx * 6),
          3,
        ),
      );
      lineGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      lineGeo.dispose();
      lineMat.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 z-0"
    />
  );
}
