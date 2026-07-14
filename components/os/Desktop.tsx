"use client";

import { useEffect, useState, useRef } from "react";
import { useThemeOS, WindowInstance } from "./ThemeController";
import { playNavigationClick } from "./audio";
import Wallpaper from "./Wallpaper";
import DesktopIcons from "./DesktopIcons";
import WindowManager from "./WindowManager";
import PullStringSwitch from "./PullStringSwitch";
import FlashlightOverlay from "./FlashlightOverlay";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Monitor, Clock, User, Cpu, FolderOpen, 
  GitBranch, Calendar, Mail, Video, Power, 
  Sun, Moon, Volume2 
} from "lucide-react";

export default function Desktop() {
  const { 
    themeMode, lightOn, activeWindows, focusWindow, openWindow, setBootState, setThemeMode, setLightOn 
  } = useThemeOS();
  
  const [time, setTime] = useState("");
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const startMenuRef = useRef<HTMLDivElement>(null);
  const startButtonRef = useRef<HTMLButtonElement>(null);

  // Update clock in Asia/Kolkata timezone
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat("en-IN", options).format(now));
    };

    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  // Global click handler to play Windows click sound on all buttons and links
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      let target = e.target as HTMLElement | null;
      let isClickable = false;
      while (target) {
        if (
          target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.classList.contains("cursor-pointer") ||
          target.getAttribute("role") === "button"
        ) {
          isClickable = true;
          break;
        }
        target = target.parentElement;
      }
      if (isClickable) {
        playNavigationClick();
      }
    };

    document.addEventListener("click", handleGlobalClick);
    return () => document.removeEventListener("click", handleGlobalClick);
  }, []);

  // Close Start Menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        startMenuOpen &&
        startMenuRef.current &&
        !startMenuRef.current.contains(e.target as Node) &&
        startButtonRef.current &&
        !startButtonRef.current.contains(e.target as Node)
      ) {
        setStartMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [startMenuOpen]);

  const handleStartMenuItemClick = (id: string, title: string, options?: Partial<WindowInstance>) => {
    openWindow(id, title, options);
    setStartMenuOpen(false);
  };

  const handleShutDown = () => {
    setBootState("selection");
    setStartMenuOpen(false);
  };

  const handleToggleTheme = () => {
    const nextMode = themeMode === "light" ? "dark" : "light";
    setThemeMode(nextMode);
    setLightOn(nextMode === "light");
    setStartMenuOpen(false);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden text-black select-none font-mono">
      {/* 1. Desktop Wallpaper (Beige background + Hedgehog + Resume Link) */}
      <Wallpaper />

      {/* 2. Main Desktop Area containing shortcuts */}
      <DesktopIcons />

      {/* 3. Window Manager renders all open draggable windows */}
      <WindowManager />

      {/* 4. Hanging Pull-String Light Switch (Left-Aligned) */}
      <PullStringSwitch />

      {/* 5. Dark Mode Interactive Flashlight Mask */}
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

      {/* 6. Dark Mode Playful Warning & Hint Captions */}
      <AnimatePresence>
        {!lightOn && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.7, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="fixed bottom-16 left-1/2 -translate-x-1/2 z-40 text-center font-mono flex flex-col items-center space-y-1 pointer-events-none select-none px-6"
          >
            <span className="text-[11px] text-gray-800 tracking-wide font-bold">
              “Please don’t curse me… you chose this.”
            </span>
            <span className="text-[10px] text-blue-900 tracking-wider uppercase animate-pulse font-bold">
              “Try pulling the string on the top-left!”
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 7. Light Mode Warm Ambient Room Light Transition Layer */}
      <AnimatePresence>
        {lightOn && (
          <motion.div
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="fixed inset-0 bg-[#FFEFC7]/10 pointer-events-none z-[95] mix-blend-color-dodge"
          />
        )}
      </AnimatePresence>

      {/* 8. Classic Windows 95 Start Menu */}
      <AnimatePresence>
        {startMenuOpen && (
          <motion.div
            ref={startMenuRef}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.15 }}
            className="fixed left-2 bottom-11 w-64 bg-[#c0c0c0] z-[110] win95-raised p-1 flex select-none text-xs"
          >
            {/* Vertical Sidebar */}
            <div className="w-8 bg-[#000080] flex items-end justify-center py-2 text-white font-bold select-none text-sm tracking-wider">
              <span 
                className="transform -rotate-90 origin-center whitespace-nowrap mb-6 block"
                style={{ writingMode: "vertical-rl" }}
              >
                Rachana 95
              </span>
            </div>

            {/* Menu Items */}
            <div className="flex-1 flex flex-col p-1 space-y-1">
              <button
                onClick={() => handleStartMenuItemClick("about", "About Me", { width: 780, height: 580 })}
                className="w-full text-left flex items-center space-x-3 px-3 py-2 hover:bg-[#000080] hover:text-white rounded-none cursor-pointer"
              >
                <User className="w-4 h-4 text-blue-900 group-hover:text-white" />
                <span className="font-bold">AboutMe.txt</span>
              </button>
              
              <button
                onClick={() => handleStartMenuItemClick("skills", "My Skills", { width: 700, height: 500 })}
                className="w-full text-left flex items-center space-x-3 px-3 py-2 hover:bg-[#000080] hover:text-white rounded-none cursor-pointer"
              >
                <Cpu className="w-4 h-4 text-teal-900" />
                <span className="font-bold">Skills.config</span>
              </button>

              <button
                onClick={() => handleStartMenuItemClick("projects", "Projects", { width: 800, height: 580 })}
                className="w-full text-left flex items-center space-x-3 px-3 py-2 hover:bg-[#000080] hover:text-white rounded-none cursor-pointer"
              >
                <FolderOpen className="w-4 h-4 text-amber-800" />
                <span className="font-bold">Projects Folder</span>
              </button>

              <button
                onClick={() => handleStartMenuItemClick("open-source", "Open Source", { width: 750, height: 550 })}
                className="w-full text-left flex items-center space-x-3 px-3 py-2 hover:bg-[#000080] hover:text-white rounded-none cursor-pointer"
              >
                <GitBranch className="w-4 h-4 text-purple-900" />
                <span className="font-bold">Contributions.log</span>
              </button>

              <button
                onClick={() => handleStartMenuItemClick("timeline", "The Journey", { width: 750, height: 520 })}
                className="w-full text-left flex items-center space-x-3 px-3 py-2 hover:bg-[#000080] hover:text-white rounded-none cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-slate-800" />
                <span className="font-bold">Journey.log</span>
              </button>

              <button
                onClick={() => handleStartMenuItemClick("contact", "Contact", { width: 700, height: 550 })}
                className="w-full text-left flex items-center space-x-3 px-3 py-2 hover:bg-[#000080] hover:text-white rounded-none cursor-pointer"
              >
                <Mail className="w-4 h-4 text-rose-900" />
                <span className="font-bold">Contact.connect</span>
              </button>

              <button
                onClick={() => handleStartMenuItemClick("me-video", "Welcome", { width: 750, height: 540 })}
                className="w-full text-left flex items-center space-x-3 px-3 py-2 hover:bg-[#000080] hover:text-white rounded-none cursor-pointer"
              >
                <Video className="w-4 h-4 text-emerald-900" />
                <span className="font-bold">Me.mp4</span>
              </button>

              <div className="border-t border-[#808080] my-1" />

              <button
                onClick={handleToggleTheme}
                className="w-full text-left flex items-center space-x-3 px-3 py-2 hover:bg-[#000080] hover:text-white rounded-none cursor-pointer"
              >
                {themeMode === "light" ? (
                  <>
                    <Moon className="w-4 h-4 text-blue-900" />
                    <span className="font-bold">Switch to Dark Mode</span>
                  </>
                ) : (
                  <>
                    <Sun className="w-4 h-4 text-amber-500" />
                    <span className="font-bold">Switch to Light Mode</span>
                  </>
                )}
              </button>

              <button
                onClick={handleShutDown}
                className="w-full text-left flex items-center space-x-3 px-3 py-2 hover:bg-[#000080] hover:text-white rounded-none cursor-pointer"
              >
                <Power className="w-4 h-4 text-red-700" />
                <span className="font-bold">Shut Down...</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 9. Bottom Classic Taskbar */}
      <footer className="fixed bottom-0 left-0 right-0 h-10 bg-[#c0c0c0] border-t border-[#dfdfdf] z-[120] flex items-center justify-between px-2 select-none text-xs shadow-[0_-2px_0px_#808080]">
        
        {/* Left Side: Start Button & Active Tasks */}
        <div className="flex items-center space-x-2 flex-1 min-w-0 h-full py-0.5">
          {/* Start Button */}
          <button
            ref={startButtonRef}
            onClick={() => setStartMenuOpen(!startMenuOpen)}
            className={`h-full px-3 flex items-center space-x-1.5 font-bold text-sm cursor-pointer select-none focus:outline-none ${
              startMenuOpen 
                ? "win95-sunken bg-[#dfdfdf] p-[7px_5px_5px_9px]" 
                : "win95-raised"
            }`}
          >
            <Monitor className="w-4 h-4 text-black" />
            <span>Start</span>
          </button>

          {/* Active Tasks list */}
          <div className="flex items-center space-x-1.5 h-full overflow-hidden flex-1 pl-2">
            {activeWindows.filter(w => w.isOpen).map((win) => {
              const isFocused = !win.isMinimized && win.zIndex === Math.max(...activeWindows.map(w => w.zIndex));
              return (
                <button
                  key={win.id}
                  onClick={() => focusWindow(win.id)}
                  className={`h-full max-w-[120px] sm:max-w-[150px] flex-1 px-3 text-left flex items-center space-x-1.5 truncate rounded-none font-bold text-[11px] cursor-pointer select-none focus:outline-none transition-all duration-75 ${
                    isFocused
                      ? "win95-sunken bg-[#dfdfdf] p-[5px_3px_3px_5px]"
                      : "win95-raised"
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-blue-800/40 shrink-0" />
                  <span className="truncate">{win.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side: Status Tray */}
        <div className="flex items-center space-x-3 px-2 h-8 win95-sunken bg-[#c0c0c0] shrink-0 text-black">
          {/* Audio Tray icon */}
          <Volume2 className="w-3.5 h-3.5 text-[#000] opacity-80" />
          
          {/* Theme mode tray indicator */}
          <button 
            onClick={handleToggleTheme}
            className="flex items-center space-x-1 hover:bg-black/5 px-1 rounded-sm cursor-pointer"
            title={`Switch to ${themeMode === "light" ? "dark" : "light"} mode`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${lightOn ? "bg-green-600 animate-pulse" : "bg-purple-600"}`} />
            <span className="text-[10px] uppercase font-bold tracking-wider">{themeMode}</span>
          </button>

          {/* Digital Clock */}
          <div className="flex items-center space-x-1 border-l border-[#808080] pl-2 font-mono tabular-nums font-bold text-[11px]">
            <Clock className="w-3 h-3 text-[#000] opacity-80" />
            <span>{time || "12:00 AM"}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
