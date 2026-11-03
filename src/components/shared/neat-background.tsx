"use client";

import React, { useEffect, useRef } from "react";
import { NeatGradient } from "@firecms/neat";

export function NeatBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gradientRef = useRef<NeatGradient | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const config = {
      colors: [
        {
          color: "#FFFFFF", // Crisp Platinum Silver Highlight
          enabled: true,
        },
        {
          color: "#CB9854", // Rich Golden Amber / Marigold Shadow
          enabled: true,
        },
        {
          color: "#CBD5E1", // Metallic Slate Silver
          enabled: true,
        },
        {
          color: "#167CB3", // Deep Data Signal Teal
          enabled: true,
        },
        {
          color: "#1A1D26", // Deep Titanium Base
          enabled: true,
        },
      ],
      speed: 1.8,
      horizontalPressure: 4,
      verticalPressure: 4.5,
      waveFrequencyX: 3,
      waveFrequencyY: 3,
      waveAmplitude: 3.5,
      secondaryWaveEnabled: true,
      secondaryWaveFrequencyX: 2,
      secondaryWaveFrequencyY: 3,
      secondaryWaveAmplitude: 3,
      secondaryWaveSpeed: 0.5,
      secondaryWaveAngle: 1,
      shadows: 4,
      highlights: 5,
      colorBrightness: 1,
      colorSaturation: -1.5,
      wireframe: false,
      antialias: true,
      colorBlending: 6,
      backgroundColor: "#0d0f14",
      backgroundAlpha: 0.92,
      grainScale: 40,
      grainSparsity: 0.1,
      grainIntensity: 0.04,
      grainSpeed: 0.2,
      resolution: 0.45,
      renderScale: 1.5,
      yOffset: 0,
      yOffsetWaveMultiplier: 2.5,
      yOffsetColorMultiplier: 3.2,
      yOffsetFlowMultiplier: 3.5,
      flowDistortionA: 1.2,
      flowDistortionB: 2.0,
      flowScale: 2.2,
      flowEase: 0.4,
      flowEnabled: true,
      enableProceduralTexture: false,
      transparentTextureVoid: false,
      textureMode: "bitmap" as const,
      bakeEdgeSoftness: 1,
      domainWarpEnabled: true,
      domainWarpIntensity: 0.08,
      domainWarpScale: 1.2,
      vignetteIntensity: 0.35,
      vignetteRadius: 0.65,
      fresnelEnabled: true,
      fresnelPower: 2.2,
      fresnelIntensity: 0.6,
      fresnelColor: "#F4EFE5",
      shapeType: "ribbon" as const,
      cameraLock: true,
      cameraZoom: 1,
    };

    try {
      // @ts-ignore
      const gradient = new NeatGradient({
        ref: canvasRef.current,
        ...config,
      });

      gradientRef.current = gradient;

      const handleScroll = () => {
        if (gradientRef.current) {
          gradientRef.current.yOffset = window.scrollY * 0.4;
        }
      };

      window.addEventListener("scroll", handleScroll, { passive: true });

      return () => {
        window.removeEventListener("scroll", handleScroll);
        gradient.destroy();
        gradientRef.current = null;
      };
    } catch (err) {
      console.warn("NeatGradient WebGL initialization skipped:", err);
    }
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-20 h-full w-full overflow-hidden"
    >
      {/* Interactive 3D WebGL Fluid Canvas */}
      <canvas
        ref={canvasRef}
        id="gradient"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ width: "100%", height: "100%" }}
      />

      {/* Atmospheric Contrast Scrim for High-Contrast Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0f14]/40 via-[#0a0a0c]/60 to-[#0d0f14]/80 pointer-events-none backdrop-blur-[2px]" />
    </div>
  );
}
