"use client";

import React, { useEffect, useState } from "react";
import { Terminal } from "lucide-react";

export function BootPreloader({ onComplete }: { onComplete: () => void }) {
  const [lines, setLines] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Check if repeat visit in session or reduced motion
    const hasVisited = sessionStorage.getItem("kd_booted");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (hasVisited || prefersReducedMotion) {
      onComplete();
      return;
    }

    const sequence = [
      { text: "> mounting /field/jalna-wardha ...", delay: 200, progress: 25 },
      { text: "> scanning 140+ farm boundaries ... [OK]", delay: 600, progress: 55 },
      { text: "> calibrating QField survey pipeline ... [OK]", delay: 1100, progress: 80 },
      { text: "> streaming telemetry to signal ... [READY]", delay: 1600, progress: 100 },
    ];

    const timeouts: NodeJS.Timeout[] = [];

    sequence.forEach((step) => {
      const t = setTimeout(() => {
        setLines((prev) => [...prev, step.text]);
        setProgress(step.progress);
      }, step.delay);
      timeouts.push(t);
    });

    const exitTimeout = setTimeout(() => {
      setIsDone(true);
      sessionStorage.setItem("kd_booted", "true");
      setTimeout(onComplete, 400); // Allow clip-path animation to finish
    }, 2200);

    timeouts.push(exitTimeout);

    return () => timeouts.forEach(clearTimeout);
  }, [onComplete]);

  const handleSkip = () => {
    setIsDone(true);
    sessionStorage.setItem("kd_booted", "true");
    onComplete();
  };

  return (
    <div
      aria-hidden="true"
      onClick={handleSkip}
      className={`fixed inset-0 z-[100] flex flex-col justify-between p-6 sm:p-12 bg-soil-950 text-cotton-50 font-mono transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer ${
        isDone ? "-translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
      }`}
    >
      {/* Top Header */}
      <div className="flex items-center justify-between text-xs text-cotton-400 border-b border-soil-700/60 pb-3">
        <div className="flex items-center gap-2">
          <Terminal className="h-3.5 w-3.5 text-marigold-500" />
          <span className="text-marigold-500 font-bold">SOIL_OS v1.1</span>
          <span>// BOOTLOADER</span>
        </div>
        <button
          onClick={handleSkip}
          className="hover:text-marigold-500 transition-colors uppercase tracking-widest text-[10px]"
        >
          [Press or click to skip]
        </button>
      </div>

      {/* Terminal Output */}
      <div className="max-w-xl space-y-2 text-xs sm:text-sm my-auto">
        {lines.map((line, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <span
              className={
                line.includes("[OK]") || line.includes("[READY]")
                  ? "text-signal-400 font-semibold"
                  : "text-cotton-50"
              }
            >
              {line}
            </span>
          </div>
        ))}
        {progress < 100 && (
          <div className="flex items-center gap-2 text-marigold-500 animate-pulse">
            <span>&gt; _</span>
          </div>
        )}
      </div>

      {/* Bottom Progress Counter */}
      <div className="space-y-2">
        <div className="flex justify-between text-xs text-cotton-400">
          <span>INITIALIZING INTERFACE</span>
          <span className="text-signal-400 font-bold">{progress}%</span>
        </div>
        <div className="h-1 w-full bg-soil-900 rounded-full overflow-hidden border border-soil-700/40">
          <div
            className="h-full bg-gradient-to-r from-marigold-500 to-signal-400 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
