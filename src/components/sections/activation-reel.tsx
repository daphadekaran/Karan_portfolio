"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ACTIVATION_REEL, ActivationImage } from "@/content/activation-data";
import { LiquidGlass } from "@/components/ui/liquid-glass";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import {
  Sparkles,
  MapPin,
  Radio,
  Sliders,
  Maximize2,
  Volume2,
  Cpu,
  ChevronRight,
  TrendingUp,
} from "lucide-react";

export function ActivationReel() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isDigitalMode, setIsDigitalMode] = useState(true);
  const activeItem: ActivationImage = ACTIVATION_REEL[activeIdx];

  return (
    <section id="activation" className="relative py-24 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 pb-6 border-b border-soil-700/60">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-signal-400 mb-2">
            <Radio className="h-3.5 w-3.5 animate-pulse text-signal-400" />
            <span className="uppercase tracking-widest">02 // FIELD ACTIVATION DISPATCH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-cotton-50 tracking-tight">
            Materra AI Activation at <span className="text-marigold-500 italic font-editorial">Wardha &amp; Jalna</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-cotton-400 max-w-xl">
            Real photographic proof from the ground: onboarding 100+ smallholder cotton farmers to
            WhatsApp AI advisory and real-time APMC mandi commodity intelligence.
          </p>
        </div>

        {/* Lens Mode Toggle: Soil vs Signal */}
        <div className="flex items-center gap-2 self-start md:self-end">
          <LiquidGlass className="flex items-center p-1 rounded-full text-xs font-mono">
            <button
              onClick={() => setIsDigitalMode(false)}
              className={`px-3 py-1.5 rounded-full transition-all ${
                !isDigitalMode
                  ? "bg-marigold-500 text-soil-950 font-bold shadow-sm"
                  : "text-cotton-400 hover:text-cotton-50"
              }`}
            >
              Raw Soil Lens
            </button>
            <button
              onClick={() => setIsDigitalMode(true)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all ${
                isDigitalMode
                  ? "bg-signal-400 text-soil-950 font-bold shadow-sm"
                  : "text-cotton-400 hover:text-cotton-50"
              }`}
            >
              <Cpu className="h-3 w-3" />
              <span>Digital Signal HUD</span>
            </button>
          </LiquidGlass>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Large Visual Display Stage (7 cols) */}
        <div className="lg:col-span-7">
          <GlowingEffect glow spread={50} proximity={80} className="w-full">
            <div className="relative rounded-2xl overflow-hidden border border-soil-700 bg-soil-900 shadow-2xl">
              {/* Top Telemetry Header Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-soil-950/80 border-b border-soil-700/60 font-mono text-[11px] text-cotton-400">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-signal-400 animate-ping" />
                  <span className="text-cotton-50 font-semibold">{activeItem.title}</span>
                  <span className="text-soil-600">|</span>
                  <span className="text-marigold-500">{activeItem.location}</span>
                </div>
                <div className="hidden sm:flex items-center gap-2 text-cotton-400/80">
                  <MapPin className="h-3 w-3 text-signal-400" />
                  <span>{activeItem.coordinates}</span>
                </div>
              </div>

              {/* Main Photo with Dynamic Scanning Effect */}
              <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full bg-soil-950 overflow-hidden group">
                <Image
                  src={activeItem.src}
                  alt={activeItem.title}
                  fill
                  priority
                  className={`object-cover transition-all duration-700 ${
                    isDigitalMode
                      ? "grayscale-0 contrast-105 brightness-100"
                      : "sepia-[0.35] contrast-125 brightness-95"
                  }`}
                />

                {/* Animated Signal Scanner Laser Beam */}
                {isDigitalMode && (
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-signal-400 to-transparent shadow-[0_0_15px_#3EE0C3] animate-pulse"
                    style={{
                      animation: "scanline 4s ease-in-out infinite alternate",
                      top: "45%",
                    }}
                  />
                )}

                {/* Agritech Telemetry Overlay Layer (when digital mode is on) */}
                {isDigitalMode && (
                  <div className="pointer-events-none absolute inset-0 p-4 sm:p-6 flex flex-col justify-between bg-gradient-to-t from-soil-950/90 via-transparent to-soil-950/40 font-mono">
                    {/* Top Corner HUD Target Brackets */}
                    <div className="flex justify-between items-start text-[10px] text-signal-400">
                      <div className="border-t-2 border-l-2 border-signal-400 w-4 h-4" />
                      <div className="px-2 py-0.5 rounded bg-soil-950/70 border border-signal-400/40 backdrop-blur-sm">
                        {activeItem.telemetry.system}
                      </div>
                      <div className="border-t-2 border-r-2 border-signal-400 w-4 h-4" />
                    </div>

                    {/* Middle: Simulated WhatsApp Audio Waveform for Marathi Voice Query */}
                    <div className="self-end px-3 py-1.5 rounded-lg bg-soil-950/80 border border-soil-700/80 backdrop-blur-md flex items-center gap-2 text-xs text-cotton-50">
                      <Volume2 className="h-3.5 w-3.5 text-signal-400" />
                      <span className="text-[11px] font-mono text-cotton-200">
                        Voice Advisory (मराठी)
                      </span>
                      <div className="flex items-center gap-0.5 h-3">
                        <span className="w-0.5 h-2 bg-signal-400 animate-pulse" />
                        <span className="w-0.5 h-3 bg-signal-400 animate-pulse delay-75" />
                        <span className="w-0.5 h-1.5 bg-signal-400 animate-pulse delay-150" />
                        <span className="w-0.5 h-2.5 bg-signal-400 animate-pulse delay-100" />
                        <span className="w-0.5 h-1 bg-signal-400 animate-pulse" />
                      </div>
                    </div>

                    {/* Bottom Corner HUD Info */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-end text-[10px] text-cotton-400">
                        <div className="border-b-2 border-l-2 border-signal-400 w-4 h-4" />
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded bg-marigold-500/20 text-marigold-500 border border-marigold-500/30">
                            {activeItem.telemetry.metric}
                          </span>
                        </div>
                        <div className="border-b-2 border-r-2 border-signal-400 w-4 h-4" />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Ticker: Live APMC Scraper Feed Simulator */}
              <div className="px-4 py-2 bg-soil-950 border-t border-soil-700/60 flex items-center justify-between text-[11px] font-mono text-cotton-400">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-3 w-3 text-signal-400" />
                  <span className="text-signal-400 font-semibold">APMC MANDI FEED:</span>
                  <span className="hidden sm:inline text-cotton-200">
                    Cotton Kapas: Jalna ₹7,450/q • Wardha ₹7,520/q • Hinganghat ₹7,610/q
                  </span>
                </div>
                <span className="text-soil-600 hidden md:inline">agmarknet.gov.in</span>
              </div>
            </div>
          </GlowingEffect>

          {/* Field Note Explainer Card */}
          <LiquidGlass className="mt-4 p-5 rounded-xl border-soil-700/60 bg-soil-900/60">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-soil-800 text-marigold-500 border border-soil-700/50 mt-0.5">
                <Sparkles className="h-4 w-4" />
              </div>
              <div className="space-y-1">
                <h4 className="font-mono text-xs font-bold text-cotton-50 uppercase tracking-wider">
                  Field Dispatch Note // {activeItem.date}
                </h4>
                <p className="text-sm text-cotton-200 leading-relaxed">{activeItem.fieldNote}</p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {activeItem.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-soil-800 text-cotton-400 border border-soil-700/40"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </LiquidGlass>
        </div>

        {/* Thumbnail Selector Rail (5 cols) */}
        <div className="lg:col-span-5 space-y-3">
          <div className="font-mono text-xs text-cotton-400 uppercase tracking-widest px-1 mb-2 flex items-center justify-between">
            <span>Select Activation Record</span>
            <span className="text-marigold-500">
              0{activeIdx + 1} / 0{ACTIVATION_REEL.length}
            </span>
          </div>

          {ACTIVATION_REEL.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveIdx(idx)}
              className={`w-full text-left p-3 rounded-xl border transition-all duration-300 flex items-center gap-4 ${
                activeIdx === idx
                  ? "border-signal-400 bg-soil-900/90 shadow-[0_0_20px_-5px_rgba(62,224,195,0.25)] translate-x-1"
                  : "border-soil-700/60 bg-soil-950/60 hover:bg-soil-900/40 hover:border-soil-600"
              }`}
            >
              {/* Thumbnail Image */}
              <div className="relative h-16 w-20 flex-shrink-0 rounded-lg overflow-hidden border border-soil-700/60">
                <Image src={item.src} alt={item.title} fill className="object-cover" />
                {activeIdx === idx && (
                  <div className="absolute inset-0 bg-signal-400/20 border-2 border-signal-400 rounded-lg" />
                )}
              </div>

              {/* Text Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-0.5">
                  <span className="font-mono text-[10px] text-marigold-500">
                    RECORD 0{idx + 1}
                  </span>
                  <span className="font-mono text-[10px] text-cotton-400">{item.location}</span>
                </div>
                <h5 className="font-display font-bold text-sm text-cotton-50 truncate">
                  {item.title}
                </h5>
                <p className="font-mono text-[11px] text-cotton-400 truncate">
                  {item.subtitle}
                </p>
              </div>

              <ChevronRight
                className={`h-4 w-4 transition-transform ${
                  activeIdx === idx ? "text-signal-400 translate-x-1" : "text-soil-600"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

