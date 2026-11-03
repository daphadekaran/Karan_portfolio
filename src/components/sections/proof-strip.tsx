"use client";

import React from "react";
import { PROOF_METRICS } from "@/content/stats";
import { LiquidGlass } from "@/components/ui/liquid-glass";

export function ProofStrip() {
  return (
    <section className="relative z-10 py-14 border-y border-white/10 bg-gradient-to-r from-[#14161d]/80 via-[#101217]/80 to-[#14161d]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Monogram */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10 text-xs font-mono text-silver-400">
          <div className="flex items-center gap-2">
            <span className="text-marigold-500 font-bold">01</span>
            <span className="text-silver-600">/</span>
            <span className="uppercase tracking-widest text-white font-semibold">Ground Truth Metrics</span>
          </div>
          <span className="text-[10px] uppercase text-signal-400 font-bold tracking-wider">
            Verified Production Impact
          </span>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {PROOF_METRICS.map((metric, idx) => (
            <LiquidGlass
              key={idx}
              className="p-4 sm:p-5 rounded-2xl border-white/10 bg-gradient-to-b from-white/[0.07] to-transparent hover:border-marigold-500/40 transition-all hover:-translate-y-0.5 duration-300"
            >
              <div className="space-y-1.5">
                <div className="flex items-baseline font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
                  <span className="text-marigold-500">{metric.number}</span>
                  {metric.suffix && (
                    <span className="text-sm sm:text-base text-signal-400 font-mono ml-0.5">
                      {metric.suffix}
                    </span>
                  )}
                </div>
                <div className="font-mono text-xs font-bold text-silver-200 uppercase tracking-wider">
                  {metric.label}
                </div>
                <p className="text-[11px] text-silver-400 leading-snug line-clamp-2">
                  {metric.description}
                </p>
              </div>
            </LiquidGlass>
          ))}
        </div>
      </div>
    </section>
  );
}
