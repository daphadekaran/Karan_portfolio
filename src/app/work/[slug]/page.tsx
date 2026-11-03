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
    <div className="min-h-screen bg-soil-950 text-cotton-50 pt-20 pb-24 px-4 sm:px-8 max-w-5xl mx-auto space-y-16">
      {/* Back to Home Link */}
      <div className="pt-4">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-xs font-mono text-cotton-400 hover:text-marigold-500 transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to All Work</span>
        </Link>
      </div>

      {/* Case Study Header */}
      <header className="space-y-6 pb-8 border-b border-soil-700/60">
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
          <span className="px-2.5 py-1 rounded-full bg-soil-800 text-marigold-500 border border-soil-700 font-bold">
            PROJ.0{projectIndex + 1}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-soil-800 text-cotton-200 border border-soil-700">
            {project.category}
          </span>
          <span className="text-cotton-400">{project.role}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-cotton-50 tracking-tight leading-tight">
          {project.title}
        </h1>

        <p className="text-lg sm:text-xl text-cotton-400 font-normal leading-relaxed max-w-3xl">
          {project.tagline}
        </p>

        {/* Live App Link if Available */}
        {project.liveUrl && (
          <div className="pt-2 flex items-center gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-marigold-500 text-soil-950 font-mono text-xs font-bold hover:bg-cotton-50 transition-colors shadow-lg"
            >
              <span>Launch Live Deployed App</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <span className="text-[11px] font-mono text-cotton-400">
              * Note: Free community server may take ~30s to wake from sleep
            </span>
          </div>
        )}
      </header>

      {/* Verified Metrics Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {project.metrics.map((m, i) => (
          <LiquidGlass key={i} className="p-5 rounded-xl border-soil-700/70 bg-soil-900/60">
            <div className="font-display font-bold text-2xl text-signal-400 mb-1">
              {m.value}
            </div>
            <div className="font-mono text-xs text-cotton-400 uppercase tracking-wider">
              {m.label}
            </div>
          </LiquidGlass>
        ))}
      </div>

      {/* Core Narrative Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Problem */}
        <div className="p-6 rounded-2xl border border-soil-700/60 bg-soil-900/40 space-y-3">
          <div className="font-mono text-xs text-marigold-500 font-bold uppercase tracking-wider">
            01 // The Operational Problem
          </div>
          <p className="text-sm text-cotton-200 leading-relaxed font-sans">{project.problem}</p>
        </div>

        {/* Field Reality */}
        <div className="p-6 rounded-2xl border border-soil-700/60 bg-soil-900/40 space-y-3">
          <div className="font-mono text-xs text-signal-400 font-bold uppercase tracking-wider">
            02 // Field Ground Truth
          </div>
          <p className="text-sm text-cotton-200 leading-relaxed font-sans">{project.fieldReality}</p>
        </div>
      </div>

      {/* Solution & Architecture */}
      <GlowingEffect glow spread={50} proximity={80}>
        <div className="rounded-2xl border border-soil-700 bg-soil-900 p-6 sm:p-8 space-y-6">
          <div className="font-mono text-xs text-cotton-400 font-bold uppercase tracking-wider">
            03 // Architecture &amp; System Solution
          </div>
          <p className="text-base text-cotton-50 leading-relaxed font-sans">{project.solution}</p>

          {/* Tech Stack Used */}
          <div className="pt-4 border-t border-soil-800 space-y-3">
            <div className="font-mono text-xs text-cotton-400 uppercase tracking-wider">
              Technologies &amp; Libraries
            </div>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-soil-950 text-cotton-200 border border-soil-800"
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
        <div className="font-mono text-xs text-marigold-500 font-bold uppercase tracking-wider">
          04 // Measured Real-World Impact
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {project.impact.map((point, i) => (
            <div
              key={i}
              className="p-4 rounded-xl border border-soil-800 bg-soil-950/80 flex items-start gap-3"
            >
              <CheckCircle2 className="h-4 w-4 text-signal-400 flex-shrink-0 mt-0.5" />
              <span className="text-xs text-cotton-200 leading-relaxed font-sans">{point}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Next Project Footer Navigation */}
      <div className="pt-12 border-t border-soil-700/60 flex items-center justify-between">
        <Link
          href="/#work"
          className="text-xs font-mono text-cotton-400 hover:text-cotton-50 transition-colors"
        >
          ← All Projects
        </Link>

        <Link
          href={`/work/${nextProject.slug}`}
          className="group inline-flex items-center gap-2 text-xs font-mono text-marigold-500 hover:text-cotton-50 transition-colors"
        >
          <span>Next: {nextProject.title}</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
