"use client";

import { useThemeOS } from "./ThemeController";
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
    color: "text-amber-200/90",
    windowOptions: { width: 780, height: 580 },
  },
  {
    id: "skills",
    title: "My Skills",
    label: "Skills.config",
    icon: Cpu,
    color: "text-emerald-200/90",
    windowOptions: { width: 700, height: 500 },
  },
  {
    id: "projects",
    title: "Projects",
    label: "Projects",
    icon: FolderOpen,
    color: "text-[#C8B89A]",
    windowOptions: { width: 800, height: 580 },
  },
  {
    id: "open-source",
    title: "Open Source",
    label: "Contributions",
    icon: GitBranch,
    color: "text-blue-200/90",
    windowOptions: { width: 750, height: 550 },
  },
  {
    id: "timeline",
    title: "The Journey",
    label: "Journey.log",
    icon: Calendar,
    color: "text-purple-200/90",
    windowOptions: { width: 750, height: 520 },
  },
  {
    id: "contact",
    title: "Contact",
    label: "Contact.connect",
    icon: Mail,
    color: "text-rose-200/90",
    windowOptions: { width: 700, height: 550 },
  },
  {
    id: "me-video",
    title: "Welcome",
    label: "Me.mp4",
    icon: Video,
    color: "text-amber-100/90",
    windowOptions: { width: 750, height: 540 },
  },
];

export default function DesktopIcons() {
  const { openWindow } = useThemeOS();

  return (
    <div className="absolute left-6 md:left-10 top-20 bottom-16 w-32 z-10 flex flex-col space-y-6 select-none pointer-events-auto">
      {DESKTOP_SHORTCUTS.map((shortcut) => {
        const IconComponent = shortcut.icon;
        return (
          <button
            key={shortcut.id}
            onClick={() => openWindow(shortcut.id, shortcut.title, shortcut.windowOptions)}
            className="flex flex-col items-center justify-center p-2 rounded-xl border border-transparent hover:border-[#C8B89A]/15 hover:bg-[#222220]/30 transition-all duration-300 group cursor-pointer w-24 outline-none"
          >
            {/* Folder / File Icon */}
            <div className={`w-12 h-12 flex items-center justify-center rounded-lg ${shortcut.color} relative mb-2 group-hover:scale-105 transition-transform duration-300`}>
              <IconComponent className="w-8 h-8 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" />
              {/* Retro decorative highlight line */}
              <div className="absolute inset-0 border border-transparent group-hover:border-[#C8B89A]/20 rounded-lg pointer-events-none" />
            </div>

            {/* Label */}
            <span className="font-mono text-[10px] md:text-xs text-[#F5F5F0]/90 text-center tracking-wide leading-tight group-hover:text-accent select-none bg-[#0A0A09]/20 px-1 rounded-sm">
              {shortcut.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
