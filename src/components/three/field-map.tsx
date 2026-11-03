"use client";

import React, { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function TerrainPoints({ isScrolling }: { isScrolling?: boolean }) {
  const pointsRef = useRef<THREE.Points>(null);
  const countX = 90;
  const countZ = 90;
  const numPoints = countX * countZ;

  // Generate synthetic field topography coordinates
  const [positions, initialY] = useMemo(() => {
    const pos = new Float32Array(numPoints * 3);
    const initY = new Float32Array(numPoints);
    let i = 0;
    for (let ix = 0; ix < countX; ix++) {
      for (let iz = 0; iz < countZ; iz++) {
        const x = (ix - countX / 2) * 0.45;
        const z = (iz - countZ / 2) * 0.45;
        // Mild wave topography representing field undulation
        const y =
          Math.sin(x * 0.35) * 0.4 +
          Math.cos(z * 0.35) * 0.4 +
          Math.sin(x * 0.8 + z * 0.8) * 0.2;

        pos[i * 3] = x;
        pos[i * 3 + 1] = y;
        pos[i * 3 + 2] = z;
        initY[i] = y;
        i++;
      }
    }
    return [pos, initY];
  }, [countX, countZ, numPoints]);

  useFrame(({ clock, pointer }) => {
    if (!pointsRef.current) return;
    const time = clock.getElapsedTime();
    const positionAttr = pointsRef.current.geometry.attributes.position;
    const arr = positionAttr.array as Float32Array;

    // Laser scanline sweeping through
    const scanZ = (Math.sin(time * 0.6) * countZ * 0.45) / 2;

    for (let i = 0; i < numPoints; i++) {
      const x = arr[i * 3];
      const z = arr[i * 3 + 2];

      // Subtle dynamic ripple reacting to pointer and time
      const distToPointer = Math.sqrt(
        Math.pow(x - pointer.x * 12, 2) + Math.pow(z + pointer.y * 12, 2)
      );
      const pointerPush = Math.max(0, 1 - distToPointer / 4) * 0.5;

      // Scanline height accent
      const distToScan = Math.abs(z - scanZ);
      const scanGlow = Math.max(0, 1 - distToScan / 2) * 0.35;

      arr[i * 3 + 1] = initialY[i] + Math.sin(time + x * 0.5) * 0.15 + pointerPush + scanGlow;
    }
    positionAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#3EE0C3"
        transparent
        opacity={0.75}
        sizeAttenuation
      />
    </points>
  );
}

function FarmPolygonOutlines() {
  const lineGeometry = useMemo(() => {
    // 4 synthetic farm boundary polygons drawn as wireframes (KML representation)
    const points: THREE.Vector3[] = [
      // Farm 1
      new THREE.Vector3(-8, 0.5, -6),
      new THREE.Vector3(-3, 0.6, -8),
      new THREE.Vector3(-2, 0.4, -4),
      new THREE.Vector3(-7, 0.3, -3),
      new THREE.Vector3(-8, 0.5, -6),
      // Farm 2
      new THREE.Vector3(2, 0.3, -5),
      new THREE.Vector3(7, 0.5, -7),
      new THREE.Vector3(8, 0.4, -2),
      new THREE.Vector3(3, 0.2, -1),
      new THREE.Vector3(2, 0.3, -5),
      // Farm 3
      new THREE.Vector3(-6, 0.2, 2),
      new THREE.Vector3(-1, 0.4, 1),
      new THREE.Vector3(0, 0.3, 5),
      new THREE.Vector3(-5, 0.1, 6),
      new THREE.Vector3(-6, 0.2, 2),
      // Farm 4
      new THREE.Vector3(2, 0.4, 3),
      new THREE.Vector3(7, 0.5, 2),
      new THREE.Vector3(6, 0.3, 7),
      new THREE.Vector3(1, 0.2, 6),
      new THREE.Vector3(2, 0.4, 3),
    ];
    return new THREE.BufferGeometry().setFromPoints(points);
  }, []);

  return (
    <lineLoop geometry={lineGeometry}>
      <lineBasicMaterial color="#FFB020" opacity={0.6} transparent linewidth={1} />
    </lineLoop>
  );
}

export function LivingFieldMap() {
  const [hasWebGL, setHasWebGL] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check reduced motion
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) {
      setPrefersReducedMotion(true);
      return;
    }

    // Check WebGL availability
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) setHasWebGL(false);
    } catch {
      setHasWebGL(false);
    }
  }, []);

  if (prefersReducedMotion || !hasWebGL) {
    // High-performance static fallback
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(#3EE0C3_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-marigold-500 to-transparent" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
      <Canvas
        camera={{ position: [0, 14, 18], fov: 45 }}
        dpr={Math.min(typeof window !== "undefined" ? window.devicePixelRatio : 1, 1.5)}
        gl={{ powerPreference: "low-power", antialias: false }}
      >
        <ambientLight intensity={0.5} />
        <TerrainPoints />
        <FarmPolygonOutlines />
      </Canvas>
      {/* Vignette fade to page background */}
      <div className="absolute inset-0 bg-gradient-to-t from-soil-950 via-transparent to-soil-950 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-soil-950 via-transparent to-soil-950 pointer-events-none" />
    </div>
  );
}
