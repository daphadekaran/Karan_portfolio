"use client";

import React from "react";
import Link from "next/link";
import { ContainerTextFlip } from "@/components/ui/container-flip";
import { CanvasText } from "@/components/ui/canvas-text";
import { LivingFieldMap } from "@/components/three/field-map";
import { ArrowDownRight, Mail, Sparkles, MapPin, ShieldCheck } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[94vh] sm:min-h-screen flex flex-col justify-center pt-28 pb-16 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Dynamic Specular Silver Sheen behind 3D Terrain */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(240,245,255,0.08)_0%,rgba(62,224,195,0.04)_40%,transparent_70%)] blur-3xl -z-10"
      />

      {/* 3D Living Field Map Canvas */}
      <LivingFieldMap />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl space-y-6 sm:space-y-8">
        {/* Eyebrow & Status Badges */}
        <div className="flex flex-wrap items-center gap-3">
          <ContainerTextFlip
            words={["Data Engineer", "Product Builder", "AI Automator", "eatmit Founder"]}
          />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-md font-mono text-xs text-silver-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
            <span className="flex h-1.5 w-1.5 rounded-full bg-signal-400 animate-ping" />
            <span className="text-white font-medium">Open to Relocate: Anywhere (India &amp; Worldwide)</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 font-mono text-xs text-silver-400 backdrop-blur-md">
            <MapPin className="h-3 w-3 text-marigold-500" />
            <span>Jalna, Maharashtra</span>
          </div>
        </div>

        {/* Hero Headline with Silver-to-White Foil Sheen */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black tracking-[-0.04em] leading-[0.98]">
          <span className="bg-gradient-to-b from-white via-silver-100 to-silver-400 bg-clip-text text-transparent">
            I turn field chaos into
          </span>{" "}
          <br className="hidden sm:inline" />
          <CanvasText
            text="data systems."
            className="text-marigold-500 underline decoration-white/20 decoration-wavy underline-offset-8"
          />
        </h1>

        {/* One-Line Editorial Intro */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-silver-300 font-normal leading-relaxed">
          From manual survey chaos across 140+ regenerative cotton farms in Vidarbha to automated ETL
          pipelines, predictive phenophase models, and live farmer AI advisory tools.
        </p>

        {/* Signature Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <Link
            href="#work"
            className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-marigold-500 to-marigold-400 text-soil-950 font-mono text-xs sm:text-sm font-bold tracking-tight hover:brightness-110 transition-all duration-300 shadow-[0_0_35px_-5px_rgba(255,176,32,0.45),inset_0_1px_0_rgba(255,255,255,0.4)]"
          >
            <span>Explore Featured Work</span>
            <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </Link>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/20 bg-white/5 text-white font-mono text-xs sm:text-sm hover:border-marigold-500 hover:text-marigold-400 transition-all duration-300 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]"
          >
            <Mail className="h-4 w-4" />
            <span>Let&apos;s Build Together</span>
          </Link>

          <Link
            href="#activation"
            className="inline-flex items-center gap-2 px-4 py-3 rounded-full text-silver-400 hover:text-signal-400 font-mono text-xs transition-colors"
          >
            <Sparkles className="h-3.5 w-3.5 text-signal-400" />
            <span className="underline underline-offset-4 decoration-white/20 hover:decoration-signal-400">
              Wardha &amp; Jalna Activation Reel
            </span>
          </Link>
        </div>
      </div>

      {/* Telemetry Section Footnote with Silver Specular Dots */}
      <div className="absolute bottom-6 right-8 hidden lg:flex items-center gap-4 font-mono text-[10px] text-silver-400/80 uppercase tracking-widest border border-white/10 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md">
        <span>LAT: 19.8410° N</span>
        <span>•</span>
        <span>LON: 75.8864° E</span>
        <span>•</span>
        <span className="text-signal-400 font-semibold">SIGNAL: ONLINE</span>
      </div>
    </section>
  );
}
