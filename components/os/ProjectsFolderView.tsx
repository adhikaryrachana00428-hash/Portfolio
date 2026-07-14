"use client";

import React from "react";
import { useThemeOS } from "./ThemeController";

export const PROJECTS_LIST = [
  {
    id: "project-hotdog",
    name: "HotDog",
    date: "JUNE 2026",
    tech: "Python · Gemini · HTML/CSS/JS",
    desc: "An AI-powered engineering intelligence platform that reverse-engineers software projects into structured blueprints. Features repository analysis, workflow reconstruction, architecture visualization, and personalized learning roadmaps using Gemini/Antigravity API.",
    link: "https://github.com/adhikaryrachana00428-hash",
    linkLabel: "→ GitHub",
  },
  {
    id: "project-debae",
    name: "DeBae",
    date: "JUNE 2026",
    tech: "Python · FastAPI · Next.js · Gemini",
    desc: "A multi-agent AI debate platform enabling AI experts to discuss topics from diverse perspectives. Winner of the AMD AI Hackathon. Features distinct AI personas, moderator orchestration, multi-turn debates, and AI summarization.",
    link: "https://github.com/adhikaryrachana00428-hash",
    linkLabel: "→ GitHub",
  },
  {
    id: "project-teleport",
    name: "Teleport",
    date: "MAY 2026",
    tech: "Rust · MTP · CLI",
    desc: "A high-performance, cross-platform file transfer utility built in Rust. It utilizes an optimized custom transfer protocol to move directory hierarchies instantly across localized network nodes with checksum verification.",
    link: "https://gitlab.com/uniquepersun/teleport",
    linkLabel: "→ GitLab",
  },
  {
    id: "project-deception",
    name: "Agent Deception Lab",
    date: "MAR 2026",
    tech: "Python · PyTorch · RL",
    desc: "A simulation environment exploring RL agent behavior. Models how autonomous agents develop deceptive strategies to maximize rewards in collaborative scenarios, offering visual diagnostic run data.",
    link: "https://github.com/adhikaryrachana00428-hash/Agent-deception-lab",
    linkLabel: "→ GitHub",
  },
  {
    id: "project-prompt",
    name: "Prompt Verification",
    date: "MAR 2026",
    tech: "Next.js · TypeScript · LLM",
    desc: "An automated testbed designed to verify input constraints on LLM instances. Validates instructions and detects adversarial drift using real-time structural schema compliance tracking.",
    link: "https://github.com/adhikaryrachana00428-hash/Prompt-verification",
    linkLabel: "→ GitHub",
  },
  {
    id: "project-code",
    name: "Code Analyzer",
    date: "MAR 2026",
    tech: "Rust · Tree-sitter · AST",
    desc: "A source code complexity scanner that parses source files into Abstract Syntax Trees. Identifies hot paths, deep nesting structures, and cognitive overhead loops using custom parser targets.",
    link: "https://github.com/adhikaryrachana00428-hash/Code-Analyzer-",
    linkLabel: "→ GitHub",
  },
  {
    id: "project-none",
    name: "And Then There Were None",
    date: "FEB 2026",
    tech: "Rust · Ggez · GameDev",
    desc: "A retro atmospheric 2D survival game built for a 24-hour game jam. Employs light casting and pixelated shadows to explore mystery and survival under extreme environments.",
    link: "https://github.com/adhikaryrachana00428-hash/Campfire-gameJam",
    linkLabel: "→ GitHub",
    demoLink: "https://adhikaryrachana00428-hash.itch.io/and-then-there-were-none",
    demoLinkLabel: "→ Play Demo",
  },
];

// Helper to render the classic pixelated yellow folder
const RetroFolderIcon = () => (
  <svg viewBox="0 0 32 32" className="w-12 h-12 select-none pointer-events-none">
    {/* Tab */}
    <path d="M 2 6 L 12 6 L 15 10 L 2 10 Z" fill="#d8a838" stroke="#000" strokeWidth="1.2" strokeLinejoin="miter" />
    {/* Back flap */}
    <path d="M 2 10 L 30 10 L 30 25 L 2 25 Z" fill="#b08020" stroke="#000" strokeWidth="1.2" strokeLinejoin="miter" />
    {/* Front flap (slightly shifted to look 3D open) */}
    <path d="M 2 12 L 28 12 L 27 25 L 2 25 Z" fill="#ffc840" stroke="#000" strokeWidth="1.2" strokeLinejoin="miter" />
  </svg>
);

export default function ProjectsFolderView() {
  const { openWindow } = useThemeOS();

  const handleOpenProject = (projId: string, name: string) => {
    openWindow(`project-${projId}`, name, {
      width: 650,
      height: 480,
    });
  };

  return (
    <div className="w-full h-full flex flex-col bg-[#c0c0c0] font-sans text-xs">
      
      {/* 1. Classic Windows Explorer Menu Bar */}
      <div className="bg-[#c0c0c0] border-b border-[#808080] py-0.5 px-2 flex space-x-4 select-none shrink-0 font-medium">
        <span className="hover:bg-[#000080] hover:text-white px-1.5 cursor-pointer">File</span>
        <span className="hover:bg-[#000080] hover:text-white px-1.5 cursor-pointer">Edit</span>
        <span className="hover:bg-[#000080] hover:text-white px-1.5 cursor-pointer">View</span>
        <span className="hover:bg-[#000080] hover:text-white px-1.5 cursor-pointer">Go</span>
        <span className="hover:bg-[#000080] hover:text-white px-1.5 cursor-pointer">Favorites</span>
        <span className="hover:bg-[#000080] hover:text-white px-1.5 cursor-pointer">Help</span>
      </div>

      {/* 2. File Path bar */}
      <div className="bg-[#c0c0c0] border-b border-[#808080] p-1 flex items-center space-x-2 shrink-0 select-none">
        <span className="text-[#808080] pl-2">Address:</span>
        <div className="flex-1 bg-white border border-[#808080] px-2 py-0.5 win95-sunken text-black truncate font-mono">
          C:\MyDocuments\Projects
        </div>
      </div>

      {/* 3. Main Folder Grid Contents */}
      <div className="flex-1 bg-white overflow-auto p-6 win95-sunken m-1">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {PROJECTS_LIST.map((proj) => (
            <button
              key={proj.id}
              onClick={() => handleOpenProject(proj.id, proj.name)}
              className="flex flex-col items-center p-2 border border-transparent hover:border-dotted hover:border-black/50 hover:bg-[#000080]/5 focus:bg-[#000080] focus:text-white group cursor-pointer w-24 outline-none"
            >
              <div className="mb-2">
                <RetroFolderIcon />
              </div>
              <span className="font-sans text-[11px] text-center font-bold tracking-wide leading-tight group-focus:text-white">
                {proj.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* 4. Explorer Status Bar */}
      <div className="h-5 bg-[#c0c0c0] border-t border-[#dfdfdf] flex items-center justify-between px-3 select-none text-[10px] shrink-0 font-medium font-sans">
        <div className="flex items-center space-x-2 border-r border-[#808080] pr-6 flex-1">
          <span>{PROJECTS_LIST.length} object(s)</span>
        </div>
        <div className="flex items-center space-x-2 border-r border-[#808080] px-6 shrink-0">
          <span>My Computer</span>
        </div>
        <div className="pl-6 shrink-0 text-right w-16">
          <span>14.2 KB</span>
        </div>
      </div>

    </div>
  );
}
