"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

interface ContainerTextFlipProps {
  words: string[];
  interval?: number;
  className?: string;
  textClassName?: string;
}

export function ContainerTextFlip({
  words = ["Data Engineer", "Product Builder", "AI Automator", "Founder"],
  interval = 2600,
  className,
  textClassName,
}: ContainerTextFlipProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    if (mediaQuery.matches) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  if (prefersReducedMotion) {
    return (
      <div
        className={cn(
          "inline-flex items-center px-3 py-1 rounded-full border border-soil-700 bg-soil-900/80 font-mono text-xs text-marigold-500",
          className
        )}
      >
        <span>{words[0]}</span>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full border border-soil-700/80 bg-soil-900/90 font-mono text-xs text-marigold-500 shadow-sm relative overflow-hidden",
        className
      )}
    >
      <span className="flex h-1.5 w-1.5 rounded-full bg-signal-400 mr-2 animate-pulse" />
      <div className="relative h-4 min-w-[110px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.span
            key={words[currentIndex]}
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -16, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className={cn("absolute inset-0 whitespace-nowrap block font-medium", textClassName)}
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}

