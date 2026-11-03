"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { LiquidGlass } from "@/components/ui/liquid-glass";
import { Command, Download, Terminal } from "lucide-react";

interface NavbarProps {
  onOpenCommandPalette?: () => void;
}

export function Navbar({ onOpenCommandPalette }: NavbarProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // Check active section for nav indicator
      const sections = ["work", "activation", "stack", "journey", "contact"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Hairline Rule */}
      <div
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-transparent"
      >
        <div
          className="h-full bg-gradient-to-r from-marigold-500 via-vermilion-500 to-signal-400 transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Liquid Glass Nav Pill */}
      <header className="fixed top-5 inset-x-0 z-40 flex justify-center px-4">
        <LiquidGlass
          glow
          className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 rounded-full text-xs font-mono"
        >
          {/* Brand Monogram */}
          <Link
            href="/"
            className="flex items-center gap-2 pr-3 py-1 text-cotton-50 font-bold hover:text-marigold-500 transition-colors border-r border-soil-700/60"
          >
            <span className="flex h-2 w-2 rounded-full bg-signal-400 animate-pulse" />
            <span className="tracking-tight">KD.01</span>
          </Link>

          {/* Navigation Items */}
          <nav className="flex items-center gap-0.5 sm:gap-1 text-cotton-400">
            <Link
              href="#work"
              className={`px-2 py-1 rounded-full transition-all ${
                activeSection === "work"
                  ? "text-marigold-500 bg-soil-800/80 font-medium"
                  : "hover:text-cotton-50 hover:bg-soil-800/40"
              }`}
            >
              Work
            </Link>
            <Link
              href="#activation"
              className={`px-2 py-1 rounded-full transition-all ${
                activeSection === "activation"
                  ? "text-signal-400 bg-soil-800/80 font-medium"
                  : "hover:text-cotton-50 hover:bg-soil-800/40"
              }`}
            >
              Activation
            </Link>
            <Link
              href="#stack"
              className={`px-2 py-1 rounded-full transition-all hidden md:block ${
                activeSection === "stack"
                  ? "text-marigold-500 bg-soil-800/80 font-medium"
                  : "hover:text-cotton-50 hover:bg-soil-800/40"
              }`}
            >
              Pipeline
            </Link>
            <Link
              href="#journey"
              className={`px-2 py-1 rounded-full transition-all ${
                activeSection === "journey"
                  ? "text-marigold-500 bg-soil-800/80 font-medium"
                  : "hover:text-cotton-50 hover:bg-soil-800/40"
              }`}
            >
              Journey
            </Link>
            <Link
              href="#contact"
              className={`px-2 py-1 rounded-full transition-all ${
                activeSection === "contact"
                  ? "text-marigold-500 bg-soil-800/80 font-medium"
                  : "hover:text-cotton-50 hover:bg-soil-800/40"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Action Divider */}
          <div className="h-4 w-px bg-soil-700/60 mx-1" />

          {/* Resume Download CTA */}
          <a
            href="/Karan_Daphade_Resume.pdf"
            download="Karan_Daphade_Resume.pdf"
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-soil-800/90 text-cotton-50 hover:text-marigold-500 hover:bg-soil-700 transition-all border border-soil-700/40"
            title="Download Resume (PDF)"
          >
            <Download className="h-3 w-3 text-marigold-500" />
            <span className="hidden sm:inline">Resume</span>
          </a>

          {/* Command Palette Trigger */}
          {onOpenCommandPalette && (
            <button
              onClick={onOpenCommandPalette}
              className="flex items-center gap-1 px-2 py-1 rounded-full text-cotton-400 hover:text-cotton-50 hover:bg-soil-800/50 transition-all ml-1"
              title="Open Command Palette (Ctrl+K / ⌘K)"
            >
              <Command className="h-3 w-3" />
              <kbd className="hidden lg:inline text-[10px] text-cotton-400/80 font-sans border border-soil-700/50 px-1 py-0.2 rounded">
                ⌘K
              </kbd>
            </button>
          )}
        </LiquidGlass>
      </header>
    </>
  );
}
