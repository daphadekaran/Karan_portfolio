"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface LiquidGlassProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  silver?: boolean;
}

export function LiquidGlass({
  children,
  className,
  glow = false,
  silver = true,
  ...props
}: LiquidGlassProps) {
  return (
    <div
      className={cn(
        "relative backdrop-blur-xl border transition-all duration-300",
        silver
          ? "silver-card"
          : "bg-soil-900/70 border-soil-700/60 shadow-2xl",
        glow && "border-white/20 shadow-[0_0_30px_-5px_rgba(203,213,225,0.15)]",
        className
      )}
      {...props}
    >
      {/* Specular Silver Horizon Hairline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
      />
      {children}
    </div>
  );
}
