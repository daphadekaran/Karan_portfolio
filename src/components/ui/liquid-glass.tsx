"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface LiquidGlassProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export function LiquidGlass({
  children,
  className,
  glow = false,
  ...props
}: LiquidGlassProps) {
  return (
    <div
      className={cn(
        "relative backdrop-blur-xl bg-soil-900/65 border border-soil-700/60 shadow-2xl transition-all duration-300",
        glow && "border-marigold-500/30 shadow-[0_0_24px_-4px_rgba(255,176,32,0.15)]",
        className
      )}
      {...props}
    >
      {/* Subtle organic reflection highlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cotton-50/15 to-transparent"
      />
      {children}
    </div>
  );
}
