"use client";

import { useThemeOS } from "./ThemeController";
import { Folder } from "lucide-react";

export const PROJECTS_LIST = [
  {
    id: "project-teleport",
    name: "Teleport",
    date: "MAY 2026",
    tech: "Rust · MTP · CLI",
    desc: "A high-performance, cross-platform file transfer utility built in Rust. It utilizes an optimized custom transfer protocol to move directory hierarchies instantly across localized network nodes with checksum verification.",
    link: "https://gitlab.com/uniquepersun/teleport",
    linkLabel: "→ GitLab",
    svg: (
      <svg viewBox="0 0 200 200" className="w-24 h-24 stroke-current fill-none text-[#F5F5F0]" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M 40 130 L 70 130 L 75 145 L 35 145 Z" />
        <path d="M 45 130 L 45 95 L 65 95 L 65 130" />
        <path d="M 130 130 L 160 130 L 165 145 L 125 145 Z" />
        <path d="M 135 130 L 135 95 L 155 95 L 155 130" />
        <path d="M 70 110 C 90 90, 110 130, 130 110" />
        <path d="M 85 85 L 95 85 L 95 98 L 85 98 Z" />
        <path d="M 105 115 L 115 115 L 115 128 L 105 128 Z" />
      </svg>
    ),
  },
  {
    id: "project-deception",
    name: "Agent Deception Lab",
    date: "MAR 2026",
    tech: "Python · PyTorch · RL",
    desc: "A simulation environment exploring RL agent behavior. Models how autonomous agents develop deceptive strategies to maximize rewards in collaborative scenarios, offering visual diagnostic run data.",
    link: "https://github.com/adhikaryrachana00428-hash/Agent-deception-lab",
    linkLabel: "→ GitHub",
    svg: (
      <svg viewBox="0 0 200 200" className="w-24 h-24 stroke-current fill-none text-[#F5F5F0]" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M 30 70 L 75 70 L 75 110 L 30 110 Z" />
        <path d="M 40 85 C 40 80, 48 80, 48 85 M 57 85 C 57 80, 65 80, 65 85" />
        <path d="M 45 98 L 60 98" />
        <path d="M 52 70 L 52 55 M 49 55 A 3 3 0 1 1 55 55" />
        <path d="M 120 75 L 165 75 L 165 115 L 120 115 Z" />
        <path d="M 130 90 C 130 85, 138 85, 138 90 M 147 90 C 147 85, 155 85, 155 90" />
        <path d="M 135 102 C 140 105, 150 105, 155 102" />
        <path d="M 142 75 L 142 60 M 139 60 A 3 3 0 1 1 145 60" />
        <path d="M 165 100 Q 180 100, 185 95 M 180 85 L 188 95 L 178 105" />
      </svg>
    ),
  },
  {
    id: "project-prompt",
    name: "Prompt Verification",
    date: "MAR 2026",
    tech: "Next.js · TypeScript · LLM",
    desc: "An automated testbed designed to verify input constraints on LLM instances. Validates instructions and detects adversarial drift using real-time structural schema compliance tracking.",
    link: "https://github.com/adhikaryrachana00428-hash/Prompt-verification",
    linkLabel: "→ GitHub",
    svg: (
      <svg viewBox="0 0 200 200" className="w-24 h-24 stroke-current fill-none text-[#F5F5F0]" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M 40 50 L 160 50" />
        <path d="M 40 75 L 140 75" />
        <path d="M 40 100 L 150 100" />
        <path d="M 40 125 L 110 125" />
        <path d="M 125 100 A 25 25 0 1 1 75 100 A 25 25 0 1 1 125 100" />
        <path d="M 115 118 L 145 148" />
      </svg>
    ),
  },
  {
    id: "project-code",
    name: "Code Analyzer",
    date: "MAR 2026",
    tech: "Rust · Tree-sitter · AST",
    desc: "A source code complexity scanner that parses source files into Abstract Syntax Trees. Identifies hot paths, deep nesting structures, and cognitive overhead loops using custom parser targets.",
    link: "https://github.com/adhikaryrachana00428-hash/Code-Analyzer-",
    linkLabel: "→ GitHub",
    svg: (
      <svg viewBox="0 0 200 200" className="w-24 h-24 stroke-current fill-none text-[#F5F5F0]" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M 100 40 A 10 10 0 1 1 80 40 A 10 10 0 1 1 100 40" />
        <path d="M 90 50 L 60 90" />
        <path d="M 90 50 L 140 90" />
        <path d="M 70 100 A 10 10 0 1 1 50 100 A 10 10 0 1 1 70 100" />
        <path d="M 150 100 A 10 10 0 1 1 130 100 A 10 10 0 1 1 150 100" />
        <path d="M 60 110 L 40 145" />
        <path d="M 60 110 L 80 145" />
        <path d="M 50 155 A 8 8 0 1 1 34 155 A 8 8 0 1 1 50 155" />
        <path d="M 90 155 A 8 8 0 1 1 74 155 A 8 8 0 1 1 90 155" />
      </svg>
    ),
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
    svg: (
      <svg viewBox="0 0 200 200" className="w-24 h-24 stroke-current fill-none text-[#F5F5F0]" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M 50 150 L 70 150 L 70 100 L 50 100 Z" />
        <path d="M 60 100 C 55 90, 60 80, 60 75 C 60 80, 65 90, 60 100" />
        <path d="M 140 100 A 25 25 0 1 1 90 100 A 25 25 0 1 1 140 100" />
        <path d="M 115 100 L 115 88 M 115 100 L 128 105" />
        <path d="M 90 25 L 140 25 L 140 65 L 90 65 Z" />
        <path d="M 115 25 L 115 65 M 90 45 L 140 45" />
        <path d="M 95 30 L 90 40 M 125 30 L 120 40 M 105 50 L 100 60 M 130 50 L 125 60" />
      </svg>
    ),
  },
];

export default function ProjectsFolderView() {
  const { openWindow } = useThemeOS();

  const handleOpenProject = (projId: string, name: string) => {
    openWindow(`project-${projId}`, name, {
      width: 650,
      height: 480,
    });
  };

  return (
    <div className="p-8 select-none">
      <h2 className="font-display text-3xl text-[#C8B89A] mb-8 border-b border-[#2D2D2A] pb-3 italic">
        projects folder
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {PROJECTS_LIST.map((proj) => (
          <button
            key={proj.id}
            onClick={() => handleOpenProject(proj.id, proj.name)}
            className="flex flex-col items-center p-4 rounded-xl border border-transparent hover:border-[#C8B89A]/20 hover:bg-[#222220]/40 transition-all duration-300 group cursor-pointer"
          >
            <div className="w-16 h-16 text-[#C8B89A] flex items-center justify-center relative mb-3 group-hover:scale-105 transition-transform duration-300">
              <Folder className="w-full h-full fill-[#C8B89A]/10" strokeWidth={1.5} />
            </div>
            <span className="font-body text-center text-sm font-medium text-[#F5F5F0]/95 group-hover:text-accent transition-colors">
              {proj.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
