"use client";

import React from "react";
import Link from "next/link";
import { PROJECTS, Project } from "@/content/projects";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { LiquidGlass } from "@/components/ui/liquid-glass";
import {
  ExternalLink,
  ArrowUpRight,
  Database,
  Layers,
  CheckCircle2,
  Clock,
  Sparkles,
} from "lucide-react";

export function WorkRail() {
  return (
    <section id="work" className="relative py-24 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16 pb-6 border-b border-soil-700/60">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-marigold-500 mb-2">
            <span>03</span>
            <span>/</span>
            <span className="uppercase tracking-widest text-cotton-50">PRODUCTION SYSTEMS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-cotton-50 tracking-tight">
            Case Studies in <span className="italic font-editorial text-marigold-500">Field Engineering</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-cotton-400 max-w-xl">
            Real data pipelines, geospatial geometry QA tools, and deployed web apps built for
            agronomists, field executives, and certified audits.
          </p>
        </div>

        <div className="font-mono text-xs text-cotton-400 self-start md:self-end">
          <span className="text-signal-400">06</span> Case Studies Documented
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {PROJECTS.map((project: Project, idx) => (
          <GlowingEffect
            key={project.slug}
            glow
            spread={45}
            proximity={70}
            className="h-full"
          >
            <div className="flex flex-col justify-between h-full rounded-2xl border border-soil-700 bg-soil-900/90 p-6 sm:p-7 shadow-xl hover:border-marigold-500/40 transition-colors">
              {/* Header Badge */}
              <div>
                <div className="flex items-center justify-between text-xs font-mono pb-4 border-b border-soil-700/60 mb-5">
                  <span className="text-marigold-500 font-bold">PROJ.0{idx + 1}</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-soil-800 text-cotton-200 border border-soil-700/60 text-[10px]">
                    {project.category}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl sm:text-2xl font-display font-bold text-cotton-50 leading-snug tracking-tight mb-2">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-cotton-400 leading-relaxed mb-6 font-normal">
                  {project.tagline}
                </p>

                {/* Metrics Pill Grid */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {project.metrics.slice(0, 2).map((m, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-lg bg-soil-950/80 border border-soil-800"
                    >
                      <div className="font-display font-bold text-sm text-signal-400">
                        {m.value}
                      </div>
                      <div className="font-mono text-[10px] text-cotton-400 uppercase tracking-wider">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Key Bullet Facts */}
                <ul className="space-y-2 mb-6 text-xs text-cotton-200 font-sans">
                  {project.facts.slice(0, 2).map((fact, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-marigold-500 font-mono mt-0.5">•</span>
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Actions & Tech Chips */}
              <div className="pt-4 border-t border-soil-700/60 space-y-4">
                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-soil-800/80 text-cotton-400 border border-soil-700/40"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-1.5 py-0.5 text-[10px] font-mono text-cotton-400">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex items-center justify-between pt-2">
                  <Link
                    href={`/work/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-marigold-500 hover:text-cotton-50 transition-colors"
                  >
                    <span>Read System Architecture</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-mono text-signal-400 hover:text-cotton-50 transition-colors"
                      title="May take ~30s to wake from sleep"
                    >
                      <ExternalLink className="h-3 w-3" />
                      <span>Live App</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </GlowingEffect>
        ))}
      </div>
    </section>
  );
}
