"use client";

import React from "react";
import Link from "next/link";
import { ContainerTextFlip } from "@/components/ui/container-flip";
import { CanvasText } from "@/components/ui/canvas-text";
import { LivingFieldMap } from "@/components/three/field-map";
import { AuroraBackground } from "@/components/ui/aurora-bg";
import { ArrowDownRight, Mail, Sparkles, MapPin } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-center pt-24 pb-16 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* 3D Living Field Map Canvas */}
      <LivingFieldMap />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl space-y-6 sm:space-y-8">
        {/* Eyebrow & Status Pills */}
        <div className="flex flex-wrap items-center gap-3">
          <ContainerTextFlip
            words={["Data Engineer", "Product Builder", "AI Automator", "eatmit Founder"]}
          />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-soil-700/60 bg-soil-900/60 backdrop-blur-md font-mono text-xs text-cotton-400">
            <span className="flex h-1.5 w-1.5 rounded-full bg-signal-400 animate-ping" />
            <span className="text-cotton-200">Open to Relocate</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-soil-700/40 bg-soil-900/40 font-mono text-xs text-cotton-400">
            <MapPin className="h-3 w-3 text-marigold-500" />
            <span>Jalna, Maharashtra, India 431203</span>
          </div>
        </div>

        {/* Hero Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black tracking-[-0.04em] text-cotton-50 leading-[0.98]">
          I turn field chaos into <br className="hidden sm:inline" />
          <CanvasText
            text="data systems."
            className="text-marigold-500 underline decoration-soil-700/50 decoration-wavy underline-offset-8"
          />
        </h1>

        {/* One-Line Editorial Intro */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-cotton-400 font-normal leading-relaxed">
          From manual survey chaos across 140+ regenerative cotton farms in Vidarbha to automated ETL
          pipelines, predictive phenophase models, and live farmer AI advisory tools.
        </p>

        {/* Signature Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <Link
            href="#work"
            className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-marigold-500 text-soil-950 font-mono text-xs sm:text-sm font-bold tracking-tight hover:bg-cotton-50 transition-all duration-300 shadow-[0_0_30px_-5px_rgba(255,176,32,0.4)]"
          >
            <span>Explore Featured Work</span>
            <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </Link>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-soil-700 bg-soil-900/80 text-cotton-50 font-mono text-xs sm:text-sm hover:border-marigold-500 hover:text-marigold-500 transition-all duration-300 backdrop-blur-md"
          >
            <Mail className="h-4 w-4" />
            <span>Let&apos;s Build Together</span>
          </Link>

          <Link
            href="#activation"
            className="inline-flex items-center gap-2 px-4 py-3 rounded-full text-cotton-400 hover:text-signal-400 font-mono text-xs transition-colors"
          >
            <Sparkles className="h-3.5 w-3.5 text-signal-400" />
            <span className="underline underline-offset-4 decoration-soil-700">
              See Wardha &amp; Jalna Activation Reel
            </span>
          </Link>
        </div>
      </div>

      {/* Telemetry Section Footnote */}
      <div className="absolute bottom-6 right-8 hidden lg:flex items-center gap-4 font-mono text-[10px] text-cotton-400/60 uppercase tracking-widest">
        <span>LAT: 19.8410° N</span>
        <span>•</span>
        <span>LON: 75.8864° E</span>
        <span>•</span>
        <span>SIGNAL: ONLINE</span>
      </div>
    </section>
  );
}
