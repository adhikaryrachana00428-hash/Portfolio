"use client";

import { useEffect, useState } from "react";
import { useThemeOS } from "./ThemeController";
import Wallpaper from "./Wallpaper";
import DesktopIcons from "./DesktopIcons";
import WindowManager from "./WindowManager";
import PullStringSwitch from "./PullStringSwitch";
import FlashlightOverlay from "./FlashlightOverlay";
import { motion, AnimatePresence } from "framer-motion";
import { Monitor, Clock } from "lucide-react";

export default function Desktop() {
  const { themeMode, lightOn, activeWindows, focusWindow, openWindow } = useThemeOS();
  const [time, setTime] = useState("");

  // Update clock in Asia/Kolkata timezone
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setTime(new Intl.DateTimeFormat("en-IN", options).format(now));
    };

    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden font-body text-[#F5F5F0]">
      {/* 1. Desktop Wallpaper (with Parallax & Particles) */}
      <Wallpaper />

      {/* 2. Top Taskbar / Status Bar */}
      <header className="fixed top-0 left-0 right-0 h-12 bg-[#161614]/85 border-b border-[#2D2D2A]/80 backdrop-blur-md z-30 flex items-center justify-between px-6 select-none font-mono text-xs text-[#F5F5F0]/90">
        <div className="flex items-center space-x-6">
          {/* Start Menu Brand */}
          <button 
            onClick={() => openWindow("about", "About Me")}
            className="flex items-center space-x-2 text-[#C8B89A] hover:text-[#F5F5F0] transition-colors cursor-pointer"
          >
            <Monitor className="w-4 h-4" />
            <span className="font-display text-lg italic tracking-wider">rachanaOS</span>
          </button>

          {/* Active Tasks / Opened Windows in Taskbar */}
          <div className="hidden sm:flex items-center space-x-2 border-l border-[#2D2D2A] pl-6">
            {activeWindows.filter(w => w.isOpen).map((win) => (
              <button
                key={win.id}
                onClick={() => focusWindow(win.id)}
                className={`px-3 py-1 rounded border transition-all duration-300 cursor-pointer ${
                  win.isMinimized
                    ? "bg-transparent border-[#2D2D2A] text-[#F5F5F0]/40"
                    : "bg-[#222220] border-[#C8B89A]/30 text-[#C8B89A] font-medium shadow-inner"
                }`}
              >
                {win.title}
              </button>
            ))}
          </div>
        </div>

        {/* Right Side Info */}
        <div className="flex items-center space-x-6 text-[#F5F5F0]/70">
          {/* Environment Indicator */}
          <div className="hidden md:flex items-center space-x-1.5 border border-[#2D2D2A] px-2.5 py-1 rounded bg-[#0A0A09]/20 text-[10px] uppercase tracking-wider">
            <span className={`w-1.5 h-1.5 rounded-full ${lightOn ? "bg-amber-400 animate-pulse" : "bg-purple-500"}`} />
            <span>{themeMode} mode</span>
          </div>
          
          {/* Digital Clock */}
          <div className="flex items-center space-x-2">
            <Clock className="w-3.5 h-3.5 text-[#C8B89A]" />
            <span className="font-mono tabular-nums tracking-wider">{time || "00:00:00"}</span>
          </div>
        </div>
      </header>

      {/* 3. Main Desktop Area containing shortcuts */}
      <DesktopIcons />

      {/* 4. Window Manager renders all open draggable windows */}
      <WindowManager />

      {/* 5. Hanging Pull-String Light Switch */}
      <PullStringSwitch />

      {/* 6. Dark Mode Interactive Flashlight Mask */}
      <AnimatePresence>
        {!lightOn && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 pointer-events-none z-[90]"
          >
            <FlashlightOverlay />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 7. Dark Mode Playful Warning & Hint Captions */}
      <AnimatePresence>
        {!lightOn && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.7, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 text-center font-mono flex flex-col items-center space-y-1.5 pointer-events-none select-none px-6"
          >
            <span className="text-xs text-[#F5F5F0]/80 tracking-wide">
              “Please don’t curse me… you chose this.”
            </span>
            <span className="text-[10px] text-[#C8B89A] tracking-wider uppercase animate-pulse">
              “Visibility is quite less, I agree. Try pulling the strings!”
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 8. Light Mode Warm Ambient Room Light Transition Layer */}
      <AnimatePresence>
        {lightOn && (
          <motion.div
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="fixed inset-0 bg-[#FFEFC7]/20 pointer-events-none z-[95] mix-blend-color-dodge"
          />
        )}
      </AnimatePresence>
    </div>
  );
}
