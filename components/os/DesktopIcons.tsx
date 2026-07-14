"use client";

import { useState, useEffect, useRef } from "react";
import { useThemeOS } from "./ThemeController";
import { playNavigationClick } from "./audio";
import { User, Cpu, FolderOpen, GitBranch, Calendar, Mail, Video } from "lucide-react";

interface IconItem {
  id: string;
  title: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  windowOptions?: { width?: number | string; height?: number | string };
}

const DESKTOP_SHORTCUTS: IconItem[] = [
  {
    id: "about",
    title: "About Me",
    label: "AboutMe.txt",
    icon: User,
    color: "text-blue-900",
    windowOptions: { width: 780, height: 580 },
  },
  {
    id: "skills",
    title: "My Skills",
    label: "Skills.config",
    icon: Cpu,
    color: "text-teal-900",
    windowOptions: { width: 700, height: 500 },
  },
  {
    id: "projects",
    title: "Projects",
    label: "Projects",
    icon: FolderOpen,
    color: "text-amber-800",
    windowOptions: { width: 800, height: 580 },
  },
  {
    id: "open-source",
    title: "Open Source",
    label: "Contributions",
    icon: GitBranch,
    color: "text-purple-900",
    windowOptions: { width: 750, height: 550 },
  },
  {
    id: "timeline",
    title: "The Journey",
    label: "Journey.log",
    icon: Calendar,
    color: "text-slate-800",
    windowOptions: { width: 750, height: 520 },
  },
  {
    id: "contact",
    title: "Contact",
    label: "Contact.connect",
    icon: Mail,
    color: "text-rose-900",
    windowOptions: { width: 700, height: 550 },
  },
  {
    id: "me-video",
    title: "Welcome",
    label: "Me.mp4",
    icon: Video,
    color: "text-emerald-900",
    windowOptions: { width: 750, height: 540 },
  },
];

export default function DesktopIcons() {
  const { openWindow } = useThemeOS();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Clear selection when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setSelectedId(null);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleIconClick = (shortcut: IconItem) => {
    playNavigationClick();
    if (selectedId === shortcut.id) {
      // Double click (or second click) opens the window
      openWindow(shortcut.id, shortcut.title, shortcut.windowOptions);
      setSelectedId(null);
    } else {
      // First click selects
      setSelectedId(shortcut.id);
    }
  };

  return (
    <div 
      ref={containerRef}
      className="absolute left-6 md:left-10 top-20 bottom-16 w-28 z-10 flex flex-col space-y-4 select-none pointer-events-auto items-center"
    >
      {DESKTOP_SHORTCUTS.map((shortcut) => {
        const IconComponent = shortcut.icon;
        const isSelected = selectedId === shortcut.id;
        
        return (
          <button
            key={shortcut.id}
            onClick={() => handleIconClick(shortcut)}
            className="flex flex-col items-center justify-center p-1 rounded-none border border-transparent transition-all duration-75 group cursor-pointer w-24 outline-none relative"
          >
            {/* Retro 3D box or simple icon wrapper */}
            <div className={`w-12 h-12 flex items-center justify-center rounded-none relative mb-1`}>
              {/* Highlight background when selected */}
              {isSelected && (
                <div className="absolute inset-0 bg-[#000080]/15 border border-dotted border-[#000080] pointer-events-none" />
              )}
              
              <IconComponent className={`w-8 h-8 ${shortcut.color} filter drop-shadow-[1px_1px_0px_rgba(255,255,255,0.7)]`} />
            </div>

            {/* Retro Windows Label style */}
            <span 
              className={`font-mono text-[10px] md:text-xs text-center tracking-wide leading-tight px-1 py-0.5 border ${
                isSelected 
                  ? "bg-[#000080] text-white border-dotted border-white/60" 
                  : "bg-transparent text-black border-transparent"
              }`}
            >
              {shortcut.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
