"use client";

import React, { useState, useEffect } from "react";
import {
  Command,
  FileText,
  Mail,
  ArrowRight,
  Sparkles,
  EyeOff,
  Check,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { LiquidGlass } from "@/components/ui/liquid-glass";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [search, setSearch] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open handled by parent or toggle
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("karandaphade001@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => {
      setCopiedEmail(false);
      onClose();
    }, 1200);
  };

  const actions = [
    {
      id: "work",
      label: "Jump to 01 / Work (Featured Projects)",
      icon: <ArrowRight className="h-4 w-4 text-marigold-500" />,
      action: () => {
        window.location.hash = "#work";
        onClose();
      },
    },
    {
      id: "activation",
      label: "Jump to 02 / Field Activation (Wardha & Jalna)",
      icon: <Sparkles className="h-4 w-4 text-signal-400" />,
      action: () => {
        window.location.hash = "#activation";
        onClose();
      },
    },
    {
      id: "stack",
      label: "Jump to 03 / Stack as Pipeline",
      icon: <ArrowRight className="h-4 w-4 text-marigold-500" />,
      action: () => {
        window.location.hash = "#stack";
        onClose();
      },
    },
    {
      id: "journey",
      label: "Jump to 04 / Journey & Materra Internship",
      icon: <ArrowRight className="h-4 w-4 text-marigold-500" />,
      action: () => {
        window.location.hash = "#journey";
        onClose();
      },
    },
    {
      id: "contact",
      label: "Jump to 05 / Contact Form",
      icon: <Mail className="h-4 w-4 text-marigold-500" />,
      action: () => {
        window.location.hash = "#contact";
        onClose();
      },
    },
    {
      id: "resume",
      label: "Download Resume (PDF)",
      icon: <FileText className="h-4 w-4 text-cotton-50" />,
      action: () => {
        const link = document.createElement("a");
        link.href = "/Karan_Daphade_Resume.pdf";
        link.download = "Karan_Daphade_Resume.pdf";
        link.click();
        onClose();
      },
    },
    {
      id: "copy-email",
      label: copiedEmail ? "Copied karandaphade001@gmail.com!" : "Copy Email: karandaphade001@gmail.com",
      icon: copiedEmail ? <Check className="h-4 w-4 text-signal-400" /> : <Mail className="h-4 w-4 text-signal-400" />,
      action: handleCopyEmail,
    },
    {
      id: "github",
      label: "Visit GitHub (@daphadekaran)",
      icon: <GithubIcon className="h-4 w-4 text-cotton-50" />,
      action: () => {
        window.open("https://github.com/daphadekaran/Karan_portfolio.git", "_blank");
        onClose();
      },
    },
    {
      id: "linkedin",
      label: "Visit LinkedIn Profile",
      icon: <LinkedinIcon className="h-4 w-4 text-cotton-50" />,
      action: () => {
        window.open("https://www.linkedin.com/in/karan-daphade-a960a8356/", "_blank");
        onClose();
      },
    },
  ];

  const filtered = actions.filter((a) =>
    a.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command Navigation Palette"
      className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-soil-950/80 backdrop-blur-md animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-gradient-to-b from-[#181a24] to-[#0e1015] silver-rim"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/10 bg-white/5">
          <Command className="h-4 w-4 text-marigold-500" />
          <input
            type="text"
            autoFocus
            placeholder="Type a command or jump to section..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent text-sm text-white placeholder:text-silver-500 focus:outline-none font-mono"
          />
          <kbd className="text-[10px] text-silver-300 font-mono border border-white/15 px-1.5 py-0.5 rounded bg-white/5">
            ESC
          </kbd>
        </div>

        {/* Action List */}
        <div className="max-h-80 overflow-y-auto p-2 divide-y divide-white/5">
          {filtered.length === 0 ? (
            <div className="px-4 py-8 text-center text-xs text-silver-400 font-mono">
              No matching commands found.
            </div>
          ) : (
            filtered.map((item) => (
              <button
                key={item.id}
                onClick={item.action}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left text-xs font-mono text-white hover:bg-white/10 hover:text-marigold-400 transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <span className="p-1.5 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors border border-white/10">
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </div>
                <ArrowRight className="h-3 w-3 text-silver-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 border-t border-white/10 bg-black/40 flex items-center justify-between text-[10px] font-mono text-silver-400">
          <span>Soil & Signal Command Line</span>
          <span>Press ESC to exit</span>
        </div>
      </div>
    </div>
  );
}
