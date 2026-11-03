import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS, Project } from "@/content/projects";
import { LiquidGlass } from "@/components/ui/liquid-glass";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Database,
  Layers,
  Sparkles,
} from "lucide-react";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const projectIndex = PROJECTS.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = PROJECTS[projectIndex];
  const nextProject = PROJECTS[(projectIndex + 1) % PROJECTS.length];

  return (
    <div className="min-h-screen text-cotton-50 pt-24 pb-28 px-4 sm:px-8 max-w-5xl mx-auto space-y-16">
      {/* Back to Home Link */}
      <div className="pt-4">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-xs font-mono text-silver-400 hover:text-marigold-400 transition-colors px-3 py-1.5 rounded-full bg-white/5 border border-white/10"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to All Work</span>
        </Link>
      </div>

      {/* Case Study Header */}
      <header className="space-y-6 pb-8 border-b border-white/10">
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
          <span className="px-3 py-1 rounded-full bg-white/10 text-marigold-400 border border-white/15 font-bold">
            PROJ.0{projectIndex + 1}
          </span>
          <span className="px-3 py-1 rounded-full bg-white/5 text-silver-200 border border-white/10 font-medium">
            {project.category}
          </span>
          <span className="text-silver-400">{project.role}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
          {project.title}
        </h1>

        <p className="text-lg sm:text-xl text-silver-300 font-normal leading-relaxed max-w-3xl">
          {project.tagline}
        </p>

        {/* Live App Link if Available */}
        {project.liveUrl && (
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-marigold-500 to-marigold-400 text-soil-950 font-mono text-xs font-bold hover:brightness-110 transition-all shadow-lg"
            >
              <span>Launch Live Deployed App</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <span className="text-[11px] font-mono text-silver-400">
              * Note: Free community server may take ~30s to wake from sleep
            </span>
          </div>
        )}
      </header>

      {/* Verified Metrics Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {project.metrics.map((m, i) => (
          <LiquidGlass key={i} className="p-6 rounded-2xl border-white/10 bg-gradient-to-b from-white/[0.07] to-transparent">
            <div className="font-display font-bold text-3xl text-signal-400 mb-1">
              {m.value}
            </div>
            <div className="font-mono text-xs text-silver-400 uppercase tracking-wider font-semibold">
              {m.label}
            </div>
          </LiquidGlass>
        ))}
      </div>

      {/* Core Narrative Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Problem */}
        <div className="p-7 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent space-y-3 shadow-lg">
          <div className="font-mono text-xs text-marigold-400 font-bold uppercase tracking-wider">
            01 // The Operational Problem
          </div>
          <p className="text-sm text-silver-200 leading-relaxed font-sans">{project.problem}</p>
        </div>

        {/* Field Reality */}
        <div className="p-7 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent space-y-3 shadow-lg">
          <div className="font-mono text-xs text-signal-400 font-bold uppercase tracking-wider">
            02 // Field Ground Truth
          </div>
          <p className="text-sm text-silver-200 leading-relaxed font-sans">{project.fieldReality}</p>
        </div>
      </div>

      {/* Solution & Architecture */}
      <GlowingEffect glow spread={55} proximity={85} silverRim>
        <div className="rounded-2xl border border-white/15 bg-gradient-to-b from-[#181a24] to-[#0e1015] p-6 sm:p-8 space-y-6 shadow-2xl backdrop-blur-md">
          <div className="font-mono text-xs text-silver-400 font-bold uppercase tracking-wider">
            03 // Architecture &amp; System Solution
          </div>
          <p className="text-base text-white leading-relaxed font-sans">{project.solution}</p>

          {/* Tech Stack Used */}
          <div className="pt-4 border-t border-white/10 space-y-3">
            <div className="font-mono text-xs text-silver-400 uppercase tracking-wider">
              Technologies &amp; Libraries
            </div>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-mono bg-white/5 text-silver-200 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </GlowingEffect>

      {/* Measured Impact */}
      <div className="space-y-4">
        <div className="font-mono text-xs text-marigold-400 font-bold uppercase tracking-wider">
          04 // Measured Real-World Impact
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {project.impact.map((point, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl border border-white/10 bg-white/[0.04] flex items-start gap-3 shadow-md"
            >
              <CheckCircle2 className="h-4 w-4 text-signal-400 flex-shrink-0 mt-0.5" />
              <span className="text-xs text-silver-200 leading-relaxed font-sans">{point}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Next Project Footer Navigation */}
      <div className="pt-12 border-t border-white/10 flex items-center justify-between">
        <Link
          href="/#work"
          className="text-xs font-mono text-silver-400 hover:text-white transition-colors"
        >
          ← All Projects
        </Link>

        <Link
          href={`/work/${nextProject.slug}`}
          className="group inline-flex items-center gap-2 text-xs font-mono font-bold text-marigold-400 hover:text-white transition-colors"
        >
          <span>Next: {nextProject.title}</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
