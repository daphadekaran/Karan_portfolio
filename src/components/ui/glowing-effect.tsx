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
  silverRim?: boolean;
}

export function GlowingEffect({
  children,
  className,
  glow = true,
  disabled = false,
  proximity = 80,
  spread = 50,
  silverRim = true,
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

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative rounded-2xl group transition-all duration-300",
        silverRim && "silver-rim",
        className
      )}
    >
      {/* Dynamic Specular Silver & Accent Rim Lighting */}
      {glow && !disabled && !isTouch && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-[1px] rounded-[inherit] transition-opacity duration-300 z-10"
          style={{
            opacity,
            background: `radial-gradient(${spread}px circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.7) 0%, rgba(203, 213, 225, 0.4) 25%, rgba(255, 176, 32, 0.3) 50%, rgba(62, 224, 195, 0.15) 75%, transparent 100%)`,
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
            WebkitMaskComposite: "xor",
            padding: "1px",
          }}
        />
      )}

      {/* Internal Content Container */}
      <div className="relative z-0 h-full w-full rounded-[inherit]">
        {children}
      </div>
    </div>
  );
}
