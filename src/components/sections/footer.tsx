"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp, Globe, Clock, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export function Footer() {
  const [istTime, setIstTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setIstTime(new Intl.DateTimeFormat("en-IN", options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-soil-700/60 bg-soil-950 py-12 px-4 sm:px-8 text-cotton-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Top Info Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-soil-800">
          <div className="space-y-1 text-center md:text-left">
            <div className="font-display font-bold text-base text-cotton-50">
              Karan Datta Daphade
            </div>
            <div className="text-[11px] text-cotton-400">
              Data Engineer &amp; Product Builder • Jalna, Maharashtra
            </div>
          </div>

          {/* Live IST Clock */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-soil-900 border border-soil-800 text-[11px] text-cotton-200">
            <Clock className="h-3 w-3 text-signal-400" />
            <span>IST (Jalna):</span>
            <span className="text-marigold-500 font-bold">{istTime || "Loading..."}</span>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/daphadekaran/Karan_portfolio.git"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-marigold-500 transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="h-4 w-4" />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/karan-daphade-a960a8356/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-marigold-500 transition-colors flex items-center gap-1.5"
            >
              <LinkedinIcon className="h-4 w-4" />
              <span>LinkedIn</span>
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-soil-900 hover:bg-soil-800 text-cotton-50 border border-soil-700 hover:border-marigold-500 transition-colors"
              title="Return to top"
            >
              <ArrowUp className="h-3.5 w-3.5 text-marigold-500" />
            </button>
          </div>
        </div>

        {/* Bottom Editorial Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-cotton-400/80">
          <div>
            Built with Next.js 16 (Static Export), Tailwind v4 &amp; Three.js • Inspired by Soil &amp; Signal
          </div>
          <div>
            Open to Relocation: Germany, EU &amp; Pune • Verified 2026
          </div>
        </div>
      </div>
    </footer>
  );
}
