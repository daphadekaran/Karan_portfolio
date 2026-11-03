"use client";

import React, { useState } from "react";
import { BootPreloader } from "@/components/sections/preloader";
import { Navbar } from "@/components/shared/navbar";
import { CommandPalette } from "@/components/shared/command-palette";
import { HeroSection } from "@/components/sections/hero";
import { ProofStrip } from "@/components/sections/proof-strip";
import { ActivationReel } from "@/components/sections/activation-reel";
import { WorkRail } from "@/components/sections/work-rail";
import { StackPipeline } from "@/components/sections/pipeline";
import { JourneySection } from "@/components/sections/journey";
import { EatmitProductLab } from "@/components/sections/eatmit-lab";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function HomePage() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isBooted, setIsBooted] = useState(false);

  return (
    <>
      {/* Terminal Boot Preloader */}
      <BootPreloader onComplete={() => setIsBooted(true)} />

      {/* Floating Glass Navigation */}
      <Navbar onOpenCommandPalette={() => setIsCommandPaletteOpen(true)} />

      {/* Command Palette (Ctrl+K / ⌘K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
      />

      {/* Main Page Flow */}
      <main id="main-content" className="relative flex-1">
        {/* 00 / Hero */}
        <HeroSection />

        {/* 01 / Proof Metrics Strip */}
        <ProofStrip />

        {/* 02 / Creative Wardha & Jalna Activation Reel */}
        <ActivationReel />

        {/* 03 / Production Systems Work Rail */}
        <WorkRail />

        {/* 04 / Stack as Pipeline Diagram */}
        <StackPipeline />

        {/* 05 / Journey & Materra Internship */}
        <JourneySection />

        {/* Founder Feature: eatmit POS Product Lab */}
        <EatmitProductLab />

        {/* 06 / Direct Signal Contact Form */}
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer />
    </>
  );
}

