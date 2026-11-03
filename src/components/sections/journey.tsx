"use client";

import React from "react";
import Image from "next/image";
import { JOURNEY_MILESTONES } from "@/content/journey";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { LiquidGlass } from "@/components/ui/liquid-glass";
import { GraduationCap, Briefcase, Sparkles, MapPin, Download } from "lucide-react";

export function JourneySection() {
  return (
    <section id="journey" className="relative py-24 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16 pb-6 border-b border-soil-700/60">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-marigold-500 mb-2">
            <span>05</span>
            <span>/</span>
            <span className="uppercase tracking-widest text-cotton-50">BACKGROUND &amp; TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-cotton-50 tracking-tight">
            The Journey: <span className="italic font-editorial text-marigold-500">Soil to Software</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-cotton-400 max-w-xl">
            From a farming family in Jalna to designing consumer digital products, and building
            data engines on regenerative cotton clusters.
          </p>
        </div>

        <a
          href="/Karan_Daphade_Resume.pdf"
          download="Karan_Daphade_Resume.pdf"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-soil-700 bg-soil-900/80 text-xs font-mono text-cotton-50 hover:border-marigold-500 hover:text-marigold-500 transition-colors self-start md:self-end"
        >
          <Download className="h-3.5 w-3.5 text-marigold-500" />
          <span>Download Verified Resume</span>
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Portrait Card with Grayscale-to-Color Glow (4 cols) */}
        <div className="lg:col-span-4 sticky top-24">
          <GlowingEffect glow spread={50} proximity={80}>
            <div className="rounded-2xl border border-soil-700 bg-soil-900 overflow-hidden shadow-2xl group">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-soil-950">
                <Image
                  src="/karan-portrait.jpg"
                  alt="Karan Datta Daphade - Data Engineer and Product Builder"
                  fill
                  priority
                  className="object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-700 scale-[1.02] group-hover:scale-100"
                />
                {/* Thin Gradient Scan Border */}
                <div className="absolute inset-0 bg-gradient-to-t from-soil-950 via-transparent to-transparent opacity-80" />
              </div>

              {/* Identity Details */}
              <div className="p-6 space-y-3 bg-soil-900">
                <div className="space-y-1">
                  <h3 className="font-display font-bold text-xl text-cotton-50">
                    Karan Datta Daphade
                  </h3>
                  <div className="flex items-center gap-1.5 font-mono text-xs text-marigold-500">
                    <MapPin className="h-3 w-3" />
                    <span>Jalna, Maharashtra, India 431203 (Open to relocate)</span>
                  </div>
                </div>

                <p className="text-xs text-cotton-400 leading-relaxed font-sans">
                  Data and AI engineer with deep roots in agriculture. I care most about robust,
                  unpretentious systems that work reliably for people on the ground.
                </p>

                <div className="pt-2 flex flex-wrap gap-1.5 font-mono text-[10px] text-cotton-400">
                  <span className="px-2 py-0.5 rounded bg-soil-800 border border-soil-700">BCA 2024</span>
                  <span className="px-2 py-0.5 rounded bg-soil-800 border border-soil-700">Materra Alum</span>
                  <span className="px-2 py-0.5 rounded bg-soil-800 border border-soil-700">Founder, eatmit</span>
                </div>
              </div>
            </div>
          </GlowingEffect>
        </div>

        {/* Right Column: Timeline Milestones (8 cols) */}
        <div className="lg:col-span-8 space-y-8 relative">
          {/* Vertical Connecting Line */}
          <div
            aria-hidden="true"
            className="hidden sm:block absolute left-4 top-3 bottom-3 w-px bg-gradient-to-b from-marigold-500 via-soil-700 to-signal-400"
          />

          {JOURNEY_MILESTONES.map((item, idx) => (
            <div key={idx} className="relative sm:pl-12 group">
              {/* Timeline Indicator Dot */}
              <div
                aria-hidden="true"
                className="hidden sm:flex absolute left-2 top-6 -translate-x-1/2 h-5 w-5 rounded-full border-2 border-soil-700 bg-soil-950 items-center justify-center group-hover:border-marigold-500 group-hover:scale-110 transition-all"
              >
                <div className="h-2 w-2 rounded-full bg-marigold-500" />
              </div>

              <LiquidGlass className="p-6 sm:p-7 rounded-2xl border-soil-700/70 bg-soil-900/80 hover:border-marigold-500/40 transition-colors shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-4 border-b border-soil-700/60 font-mono text-xs">
                  <div className="flex items-center gap-2 text-marigold-500 font-bold">
                    {idx === 0 ? (
                      <Briefcase className="h-4 w-4" />
                    ) : idx === 1 ? (
                      <Sparkles className="h-4 w-4" />
                    ) : (
                      <GraduationCap className="h-4 w-4" />
                    )}
                    <span>{item.period}</span>
                  </div>
                  <span className="text-cotton-400">{item.location}</span>
                </div>

                <div className="space-y-2 mb-4">
                  <h4 className="text-xl sm:text-2xl font-display font-bold text-cotton-50">
                    {item.role}
                  </h4>
                  <div className="font-mono text-xs text-signal-400">{item.organization}</div>
                  <p className="text-sm text-cotton-200 leading-relaxed font-sans">
                    {item.highlight}
                  </p>
                </div>

                <ul className="space-y-2 mb-5 text-xs text-cotton-400 font-sans">
                  {item.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-marigold-500 font-mono mt-0.5">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-soil-700/40">
                  {item.tags.map((t, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-soil-950 text-cotton-400 border border-soil-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </LiquidGlass>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
