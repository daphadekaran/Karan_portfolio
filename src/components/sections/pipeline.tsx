"use client";

import React, { useState } from "react";
import { LiquidGlass } from "@/components/ui/liquid-glass";
import { Database, Cpu, HardDrive, Smartphone, ArrowRight, CheckCircle2 } from "lucide-react";

interface PipelineNode {
  id: string;
  stage: string;
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  tools: string[];
  fieldRole: string;
}

export function StackPipeline() {
  const [activeStage, setActiveStage] = useState<string>("transform");

  const nodes: PipelineNode[] = [
    {
      id: "source",
      number: "01",
      stage: "SOURCE",
      icon: <Database className="h-5 w-5 text-marigold-500" />,
      title: "Field Raw Ingestion",
      description:
        "Harvesting raw observations directly from rural farmland and government agricultural registries.",
      tools: ["QField Mobile", "agmarknet.gov.in Scrapers", "Open-Meteo Weather API", "Google Drive API"],
      fieldRole: "Raw GeoJSON, coordinate geometry streams, and CSV exports collected by field executives.",
    },
    {
      id: "transform",
      number: "02",
      stage: "TRANSFORM",
      icon: <Cpu className="h-5 w-5 text-signal-400" />,
      title: "Validation & Modeling",
      description:
        "Deterministic standardization pipelines, geometry overlap verification, and crop phenophase calculations.",
      tools: ["Python (Pandas, NumPy)", "SQL", "UTM Coordinate Projection", "GDD Algorithm", "Shapely"],
      fieldRole: "Detects farm overlaps, standardizes survey formats, and automates 4-5 hours of daily reporting.",
    },
    {
      id: "store",
      number: "03",
      stage: "STORE",
      icon: <HardDrive className="h-5 w-5 text-white" />,
      title: "Structured Warehousing",
      description:
        "Relational storage, automated gap-detection tables, and spatial GeoJSON repositories.",
      tools: ["PostgreSQL", "Supabase", "Spatial GeoJSON Tables", "Scheduled Windows Tasks"],
      fieldRole: "Daily gap-filling for micro-climate data across 11x11 km spatial grid clusters.",
    },
    {
      id: "serve",
      number: "04",
      stage: "SERVE",
      icon: <Smartphone className="h-5 w-5 text-marigold-500" />,
      title: "Operational Apps & AI",
      description:
        "Interactive tools placed in the hands of agronomists, leadership, and cotton farmers.",
      tools: ["Multi-Page Streamlit", "Google AppSheet", "WhatsApp AI Bot", "Plotly Visualizations"],
      fieldRole: "Live mandi rates, crop stage tracking, and complete bale procurement traceability.",
    },
  ];

  return (
    <section id="stack" className="relative py-28 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-signal-400 mb-2">
            <span>04</span>
            <span className="text-silver-600">/</span>
            <span className="uppercase tracking-widest text-silver-200">DATA ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Stack as an <span className="italic font-editorial text-marigold-500">End-to-End Pipeline</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-silver-300 max-w-xl">
            Not a generic logo cloud: every tool here operates at a specific stage of moving data from
            a rural cotton field into production models and applications.
          </p>
        </div>

        <div className="font-mono text-xs text-silver-400">
          Continuous Flow: Raw → Clean → Insight → Product
        </div>
      </div>

      {/* Interactive Pipeline Diagram */}
      <div className="space-y-8">
        {/* Horizontal Pipeline Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {nodes.map((node) => {
            const isActive = activeStage === node.id;
            return (
              <button
                key={node.id}
                onClick={() => setActiveStage(node.id)}
                className={`text-left p-6 rounded-2xl border transition-all duration-300 relative group cursor-pointer ${
                  isActive
                    ? "border-signal-400 bg-gradient-to-b from-[#1c1f2b] to-[#101217] shadow-[0_0_30px_-5px_rgba(62,224,195,0.25)] -translate-y-1"
                    : "border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/20"
                }`}
              >
                {/* Node Step Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-marigold-500">
                    STAGE {node.number}
                  </span>
                  <div
                    className={`p-2.5 rounded-xl border transition-colors ${
                      isActive
                        ? "bg-signal-400/10 border-signal-400"
                        : "bg-white/5 border-white/10 group-hover:border-white/20"
                    }`}
                  >
                    {node.icon}
                  </div>
                </div>

                <div className="font-mono text-[10px] text-silver-400 tracking-widest uppercase mb-1">
                  {node.stage}
                </div>
                <h4 className="font-display font-bold text-lg text-white mb-2">
                  {node.title}
                </h4>
                <p className="text-xs text-silver-300 line-clamp-2 leading-relaxed">
                  {node.description}
                </p>

                {/* Animated active hairline */}
                {isActive && (
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-marigold-500 to-signal-400 rounded-b-2xl shadow-[0_0_10px_#3EE0C3]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Stage Deep-Dive Inspection Panel */}
        {(() => {
          const current = nodes.find((n) => n.id === activeStage) || nodes[1];
          return (
            <LiquidGlass className="p-6 sm:p-8 rounded-2xl border-white/15 bg-gradient-to-b from-[#181a24] to-[#0e1015] shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-marigold-500 font-bold">
                    <span>STAGE {current.number} ARCHITECTURAL SPECIFICATION</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                    {current.title}
                  </h3>
                  <p className="text-sm text-silver-200 leading-relaxed font-sans">
                    {current.description}
                  </p>

                  <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-1.5 shadow-inner">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-signal-400 font-bold">
                      Field Deployment Role
                    </div>
                    <p className="text-xs text-silver-300 leading-relaxed">
                      {current.fieldRole}
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-4">
                  <div className="text-xs font-mono uppercase tracking-wider text-silver-400">
                    Production Toolset &amp; Libraries
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {current.tools.map((tool, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.04] border border-white/10 font-mono text-xs text-white hover:border-white/25 transition-colors"
                      >
                        <CheckCircle2 className="h-4 w-4 text-signal-400 flex-shrink-0" />
                        <span>{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </LiquidGlass>
          );
        })()}
      </div>
    </section>
  );
}
