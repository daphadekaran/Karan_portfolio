"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ACTIVATION_REEL, ActivationImage } from "@/content/activation-data";
import { LiquidGlass } from "@/components/ui/liquid-glass";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import {
  Sparkles,
  MapPin,
  Radio,
  Volume2,
  Cpu,
  ChevronRight,
  ChevronLeft,
  TrendingUp,
  Play,
  Pause,
  Scan,
} from "lucide-react";

export function ActivationReel() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isDigitalMode, setIsDigitalMode] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const activeItem: ActivationImage = ACTIVATION_REEL[activeIdx];
  const slideDuration = 4500; // 4.5 seconds per slide

  // Auto-play timer with progress bar
  useEffect(() => {
    if (!isPlaying || isHovered) return;

    const intervalStep = 50; // update progress every 50ms
    const stepIncrement = (intervalStep / slideDuration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveIdx((current) => (current + 1) % ACTIVATION_REEL.length);
          return 0;
        }
        return prev + stepIncrement;
      });
    }, intervalStep);

    return () => clearInterval(timer);
  }, [isPlaying, isHovered, activeIdx]);

  // Reset progress when index manually changes
  const handleSelectSlide = (idx: number) => {
    setActiveIdx(idx);
    setProgress(0);
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % ACTIVATION_REEL.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + ACTIVATION_REEL.length) % ACTIVATION_REEL.length);
    setProgress(0);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section
      id="activation"
      ref={sectionRef}
      className="relative py-28 px-4 sm:px-8 max-w-7xl mx-auto"
    >
      {/* Atmospheric Silver & Teal Radial Glow in background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-[radial-gradient(ellipse_at_center,rgba(200,215,235,0.06)_0%,rgba(62,224,195,0.04)_45%,transparent_70%)] blur-3xl -z-10"
      />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2.5 text-xs font-mono text-signal-400 mb-2">
            <Radio className="h-3.5 w-3.5 animate-pulse text-signal-400" />
            <span className="uppercase tracking-widest text-silver-300">02 // FIELD ACTIVATION DISPATCH</span>
            <span className="text-soil-600">•</span>
            <span className="text-marigold-500 font-semibold">AUTO-SWIPE THEATER</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Materra AI Activation at <span className="text-marigold-500 italic font-editorial">Wardha &amp; Jalna</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-silver-300 max-w-2xl leading-relaxed">
            Real photographic proof from the ground: onboarding 100+ smallholder cotton farmers to
            WhatsApp AI advisory and real-time APMC mandi commodity intelligence.
          </p>
        </div>

        {/* Controls: Auto-play toggle & Lens Mode */}
        <div className="flex flex-wrap items-center gap-3 self-start md:self-end">
          {/* Play/Pause Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-xs font-mono text-silver-300 hover:text-white transition-all backdrop-blur-md"
            title={isPlaying ? "Pause auto-swipe" : "Resume auto-swipe"}
          >
            {isPlaying ? (
              <>
                <Pause className="h-3 w-3 text-signal-400" />
                <span className="text-[11px]">Auto: Playing</span>
              </>
            ) : (
              <>
                <Play className="h-3 w-3 text-marigold-500" />
                <span className="text-[11px]">Auto: Paused</span>
              </>
            )}
          </button>

          {/* Lens Mode Toggle: Soil vs Signal */}
          <LiquidGlass className="flex items-center p-1 rounded-full text-xs font-mono">
            <button
              onClick={() => setIsDigitalMode(false)}
              className={`px-3 py-1.5 rounded-full transition-all ${
                !isDigitalMode
                  ? "bg-marigold-500 text-soil-950 font-bold shadow-sm"
                  : "text-silver-400 hover:text-white"
              }`}
            >
              Raw Soil Lens
            </button>
            <button
              onClick={() => setIsDigitalMode(true)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all ${
                isDigitalMode
                  ? "bg-signal-400 text-soil-950 font-bold shadow-sm"
                  : "text-silver-400 hover:text-white"
              }`}
            >
              <Cpu className="h-3 w-3" />
              <span>Digital Signal HUD</span>
            </button>
          </LiquidGlass>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Large Visual Display Stage (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <GlowingEffect glow spread={60} proximity={90} className="w-full">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-gradient-to-b from-[#181a22] to-[#0d0e12] shadow-2xl">
              {/* Auto-Slide Progress Hairline Bar */}
              <div
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-1 bg-white/10 z-30 overflow-hidden"
              >
                <div
                  className="h-full bg-gradient-to-r from-marigold-500 via-silver-200 to-signal-400 transition-all duration-75"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Top Telemetry Header Bar with Silver Specular Highlight */}
              <div className="flex items-center justify-between px-5 py-3 bg-white/5 border-b border-white/10 font-mono text-[11px] text-silver-300 backdrop-blur-md">
                <div className="flex items-center gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-signal-400 animate-ping" />
                  <span className="text-white font-bold tracking-tight">
                    DISPATCH 0{activeIdx + 1}: {activeItem.title}
                  </span>
                  <span className="text-silver-600">|</span>
                  <span className="text-marigold-500 font-medium">{activeItem.location}</span>
                </div>
                <div className="hidden sm:flex items-center gap-2 text-silver-400">
                  <MapPin className="h-3 w-3 text-signal-400" />
                  <span>{activeItem.coordinates}</span>
                </div>
              </div>

              {/* Main Photo with Dynamic Scanning Effect & Slide Transitions */}
              <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full bg-[#0a0a0c] overflow-hidden group">
                <Image
                  key={activeItem.src}
                  src={activeItem.src}
                  alt={activeItem.title}
                  fill
                  priority
                  className={`object-cover transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isDigitalMode
                      ? "grayscale-0 contrast-105 brightness-100 scale-100"
                      : "sepia-[0.35] contrast-125 brightness-95 scale-[1.02]"
                  }`}
                />

                {/* Left/Right Fast Navigation Arrows */}
                <button
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110 z-20"
                  title="Previous photo (←)"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110 z-20"
                  title="Next photo (→)"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>

                {/* Animated Signal Scanner Laser Beam */}
                {isDigitalMode && (
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-signal-400 to-transparent shadow-[0_0_20px_#3EE0C3] animate-pulse"
                    style={{
                      animation: "scanline 4s ease-in-out infinite alternate",
                      top: "48%",
                    }}
                  />
                )}

                {/* Agritech Telemetry Overlay Layer (when digital mode is on) */}
                {isDigitalMode && (
                  <div className="pointer-events-none absolute inset-0 p-4 sm:p-6 flex flex-col justify-between bg-gradient-to-t from-black/80 via-transparent to-black/40 font-mono">
                    {/* Top Corner HUD Target Brackets */}
                    <div className="flex justify-between items-start text-[10px] text-signal-400">
                      <div className="border-t-2 border-l-2 border-signal-400 w-4 h-4 shadow-[0_0_8px_#3EE0C3]" />
                      <div className="px-2.5 py-1 rounded bg-black/70 border border-signal-400/50 backdrop-blur-md text-silver-100">
                        {activeItem.telemetry.system}
                      </div>
                      <div className="border-t-2 border-r-2 border-signal-400 w-4 h-4 shadow-[0_0_8px_#3EE0C3]" />
                    </div>

                    {/* Middle: Simulated WhatsApp Audio Waveform for Marathi Voice Query */}
                    <div className="self-end px-3.5 py-2 rounded-xl bg-black/80 border border-white/20 backdrop-blur-md flex items-center gap-2.5 text-xs text-white shadow-xl">
                      <Volume2 className="h-4 w-4 text-signal-400" />
                      <span className="text-[11px] font-mono text-silver-200">
                        Voice Advisory (मराठी)
                      </span>
                      <div className="flex items-center gap-0.5 h-3.5">
                        <span className="w-0.5 h-2 bg-signal-400 animate-pulse" />
                        <span className="w-0.5 h-3.5 bg-signal-400 animate-pulse delay-75" />
                        <span className="w-0.5 h-1.5 bg-signal-400 animate-pulse delay-150" />
                        <span className="w-0.5 h-3 bg-signal-400 animate-pulse delay-100" />
                        <span className="w-0.5 h-1 bg-signal-400 animate-pulse" />
                      </div>
                    </div>

                    {/* Bottom Corner HUD Info */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-end text-[10px] text-silver-300">
                        <div className="border-b-2 border-l-2 border-signal-400 w-4 h-4 shadow-[0_0_8px_#3EE0C3]" />
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-1 rounded bg-marigold-500/20 text-marigold-400 border border-marigold-500/40 backdrop-blur-sm font-bold">
                            {activeItem.telemetry.metric}
                          </span>
                        </div>
                        <div className="border-b-2 border-r-2 border-signal-400 w-4 h-4 shadow-[0_0_8px_#3EE0C3]" />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Ticker: Live APMC Scraper Feed Simulator */}
              <div className="px-5 py-2.5 bg-black/60 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-silver-300">
                <div className="flex items-center gap-2.5">
                  <TrendingUp className="h-3.5 w-3.5 text-signal-400" />
                  <span className="text-signal-400 font-bold">APMC MANDI FEED:</span>
                  <span className="hidden sm:inline text-silver-200">
                    Cotton Kapas: Jalna ₹7,450/q • Wardha ₹7,520/q • Hinganghat ₹7,610/q
                  </span>
                </div>
                <span className="text-silver-500 hidden md:inline">agmarknet.gov.in</span>
              </div>
            </div>
          </GlowingEffect>

          {/* Field Note Explainer Card with Silver Rim */}
          <LiquidGlass className="p-6 rounded-2xl border-white/10 bg-gradient-to-r from-[#171922] to-[#101217]">
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-white/5 text-marigold-500 border border-white/15 mt-0.5">
                <Sparkles className="h-4 w-4" />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                    Field Dispatch Note // {activeItem.date}
                  </h4>
                  <span className="text-[10px] font-mono text-signal-400">
                    Slide 0{activeIdx + 1} of 0{ACTIVATION_REEL.length}
                  </span>
                </div>
                <p className="text-sm text-silver-200 leading-relaxed font-sans">{activeItem.fieldNote}</p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {activeItem.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-white/5 text-silver-300 border border-white/10"
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
          <div className="font-mono text-xs text-silver-400 uppercase tracking-widest px-1 mb-2 flex items-center justify-between">
            <span>Activation Archive (Click or Auto)</span>
            <span className="text-marigold-500 font-bold">
              0{activeIdx + 1} / 0{ACTIVATION_REEL.length}
            </span>
          </div>

          {ACTIVATION_REEL.map((item, idx) => {
            const isSelected = activeIdx === idx;
            return (
              <button
                key={item.id}
                onClick={() => handleSelectSlide(idx)}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all duration-300 flex items-center gap-4 group cursor-pointer ${
                  isSelected
                    ? "border-signal-400 bg-gradient-to-r from-signal-400/10 via-white/5 to-transparent shadow-[0_0_25px_-5px_rgba(62,224,195,0.25)] translate-x-1"
                    : "border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20"
                }`}
              >
                {/* Thumbnail Image with Active Glow */}
                <div className="relative h-16 w-20 flex-shrink-0 rounded-xl overflow-hidden border border-white/20 shadow-md">
                  <Image src={item.src} alt={item.title} fill className="object-cover" />
                  {isSelected && (
                    <div className="absolute inset-0 bg-signal-400/25 border-2 border-signal-400 rounded-xl" />
                  )}
                </div>

                {/* Text Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="font-mono text-[10px] font-bold text-marigold-500">
                      DISPATCH 0{idx + 1}
                    </span>
                    <span className="font-mono text-[10px] text-silver-400">{item.location}</span>
                  </div>
                  <h5 className="font-display font-bold text-sm text-white truncate group-hover:text-signal-400 transition-colors">
                    {item.title}
                  </h5>
                  <p className="font-mono text-[11px] text-silver-400 truncate">
                    {item.subtitle}
                  </p>
                </div>

                <ChevronRight
                  className={`h-4 w-4 transition-transform ${
                    isSelected ? "text-signal-400 translate-x-1" : "text-silver-600"
                  }`}
                />
              </button>
            );
          })}

          {/* Quick Tip Footnote */}
          <div className="pt-2 px-2 flex items-center justify-between text-[11px] font-mono text-silver-400">
            <span>Tip: Use ← → keys to swipe</span>
            <span>Hover to hold slide</span>
          </div>
        </div>
      </div>
    </section>
  );
}
