"use client";

import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center bg-soil-950 text-cotton-50 transition-bg",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={cn(
            `
            [--marigold-glow:repeating-linear-gradient(100deg,rgba(255,176,32,0.12)_0%,rgba(255,176,32,0.12)_7%,transparent_10%,transparent_12%,rgba(255,176,32,0.12)_16%)]
            [--vermilion-glow:repeating-linear-gradient(100deg,rgba(255,90,54,0.08)_0%,rgba(255,90,54,0.08)_7%,transparent_10%,transparent_12%,rgba(255,90,54,0.08)_16%)]
            [--signal-glow:repeating-linear-gradient(100deg,rgba(62,224,195,0.07)_0%,rgba(62,224,195,0.07)_7%,transparent_10%,transparent_12%,rgba(62,224,195,0.07)_16%)]
            [--aurora:repeating-linear-gradient(100deg,#0A0908_0%,#0A0908_7%,transparent_10%,transparent_12%,#0A0908_16%)]
            [background-image:var(--marigold-glow),var(--vermilion-glow),var(--signal-glow),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px]
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--marigold-glow),var(--vermilion-glow),var(--signal-glow),var(--aurora)]
            after:[background-size:200%,_100%] 
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            absolute -inset-[10px] opacity-40 will-change-transform`,
            showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]`
          )}
        />
      </div>
      {children}
    </div>
  );
};

