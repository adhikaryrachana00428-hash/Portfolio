"use client";

import React from "react";
import { motion, useDragControls } from "framer-motion";
import { Minimize2, Square, X } from "lucide-react";
import { useThemeOS, WindowInstance } from "./ThemeController";

interface DesktopWindowProps {
  windowState: WindowInstance;
  children: React.ReactNode;
}

export default function DesktopWindow({ windowState, children }: DesktopWindowProps) {
  const { closeWindow, minimizeWindow, maximizeWindow, focusWindow } = useThemeOS();
  const dragControls = useDragControls();

  const { id, title, isOpen, isMinimized, isMaximized, zIndex, width, height } = windowState;

  if (!isOpen || isMinimized) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        x: isMaximized ? 0 : windowState.x,
        y: isMaximized ? 0 : windowState.y,
        width: isMaximized ? "100%" : width,
        height: isMaximized ? "calc(100vh - 48px)" : height,
      }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      drag={!isMaximized}
      dragMomentum={false}
      dragListener={false}
      dragControls={dragControls}
      onPointerDown={() => focusWindow(id)}
      style={{ zIndex }}
      className={`fixed flex flex-col rounded-xl border border-[#2D2D2A] bg-[#161614] shadow-2xl overflow-hidden ${
        isMaximized ? "rounded-none border-0" : ""
      }`}
    >
      {/* Title Bar (Draggable) */}
      <div
        onPointerDown={(e) => !isMaximized && dragControls.start(e)}
        className="h-10 shrink-0 bg-[#222220] border-b border-[#2D2D2A] flex items-center justify-between px-4 select-none cursor-grab active:cursor-grabbing text-xs md:text-sm font-mono text-[#F5F5F0]/80"
      >
        <span className="flex items-center space-x-2">
          {/* Hand-drawn style decorative folder circle */}
          <span className="w-2.5 h-2.5 rounded-full bg-[#C8B89A]/60" />
          <span className="font-medium italic">{title}</span>
        </span>

        {/* Window controls */}
        <div className="flex items-center space-x-3">
          {/* Minimize */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              minimizeWindow(id);
            }}
            className="w-5 h-5 rounded-md hover:bg-[#2D2D2A] text-[#F5F5F0]/60 hover:text-[#F5F5F0] flex items-center justify-center transition-colors cursor-pointer"
            title="Minimize"
          >
            <Minimize2 className="w-3.5 h-3.5" />
          </button>
          
          {/* Maximize */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              maximizeWindow(id);
            }}
            className="w-5 h-5 rounded-md hover:bg-[#2D2D2A] text-[#F5F5F0]/60 hover:text-[#F5F5F0] flex items-center justify-center transition-colors cursor-pointer"
            title={isMaximized ? "Restore Down" : "Maximize"}
          >
            <Square className="w-3 h-3" />
          </button>

          {/* Close */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeWindow(id);
            }}
            className="w-5 h-5 rounded-md hover:bg-rose-950/40 text-rose-300 flex items-center justify-center transition-colors cursor-pointer"
            title="Close"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Window Body Container */}
      <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden bg-[#161614] text-[#F5F5F0]/90">
        {children}
      </div>
    </motion.div>
  );
}
