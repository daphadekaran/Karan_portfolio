"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface CanvasTextProps {
  text: string;
  className?: string;
  canvasClassName?: string;
}

export function CanvasText({ text, className, canvasClassName }: CanvasTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(motionQuery.matches);
    if (motionQuery.matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || isReducedMotion || !canvasRef.current || !containerRef.current) return;

    let animId: number;
    let offset = 0;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Palette gradient steps: marigold -> vermilion -> signal teal
    const colors = [
      "#FFB020",
      "#FFBE3D",
      "#FF8A2B",
      "#FF5A36",
      "#E64522",
      "#FF5A36",
      "#A89255",
      "#3EE0C3",
      "#26C9AC",
      "#FFB020",
    ];

    const updateSize = () => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    const render = () => {
      offset = (offset + 0.4) % 100;
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;

      ctx.clearRect(0, 0, rect.width, rect.height);

      // Create animated gradient
      const grad = ctx.createLinearGradient(0, 0, rect.width, 0);
      const step = 1 / (colors.length - 1);
      colors.forEach((col, idx) => {
        const stop = (idx * step + offset / 100) % 1;
        grad.addColorStop(stop, col);
      });

      ctx.font = window.getComputedStyle(containerRef.current!).font;
      ctx.fillStyle = grad;
      ctx.textBaseline = "middle";
      ctx.fillText(text, 0, rect.height / 2);

      animId = requestAnimationFrame(render);
    };

    document.fonts.ready.then(() => {
      updateSize();
      render();
    });

    window.addEventListener("resize", updateSize);

    return () => {
      window.removeEventListener("resize", updateSize);
      cancelAnimationFrame(animId);
    };
  }, [isVisible, isReducedMotion, text]);

  if (isReducedMotion) {
    return (
      <span className={cn("inline-block text-marigold-500 font-bold", className)}>
        {text}
      </span>
    );
  }

  return (
    <div
      ref={containerRef}
      className={cn("relative inline-block align-baseline", className)}
      aria-label={text}
    >
      <span className="sr-only">{text}</span>
      {/* Invisible placeholder for DOM flow sizing */}
      <span aria-hidden="true" className="opacity-0 select-none pointer-events-none">
        {text}
      </span>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className={cn(
          "absolute inset-0 pointer-events-none select-none h-full w-full",
          canvasClassName
        )}
      />
    </div>
  );
}
