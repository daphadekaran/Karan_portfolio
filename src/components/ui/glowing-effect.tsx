"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface GlowingEffectProps {
  children?: React.ReactNode;
  className?: string;
  glow?: boolean;
  disabled?: boolean;
  proximity?: number;
  spread?: number;
}

export function GlowingEffect({
  children,
  className,
  glow = true,
  disabled = false,
  proximity = 64,
  spread = 40,
}: GlowingEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: -200, y: -200 });
  const [opacity, setOpacity] = useState(0);
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    const hasTouch = window.matchMedia("(pointer: coarse)").matches;
    setIsTouch(hasTouch);
    if (hasTouch || disabled) return;

    const handlePointerMove = (e: PointerEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const isNear =
        x >= -proximity &&
        x <= rect.width + proximity &&
        y >= -proximity &&
        y <= rect.height + proximity;

      if (isNear) {
        setPosition({ x, y });
        setOpacity(1);
      } else {
        setOpacity(0);
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [disabled, proximity]);

  if (disabled || isTouch) {
    return <div className={cn("relative rounded-2xl", className)}>{children}</div>;
  }

  return (
    <div ref={containerRef} className={cn("relative rounded-2xl group", className)}>
      {/* Subtle Glow Rim Border */}
      {glow && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-px rounded-[inherit] transition-opacity duration-300"
          style={{
            opacity,
            background: `radial-gradient(${spread}px circle at ${position.x}px ${position.y}px, rgba(255,176,32,0.4), rgba(255,90,54,0.2) 40%, rgba(62,224,195,0.15) 70%, transparent 100%)`,
          }}
        />
      )}
      {children}
    </div>
  );
}

