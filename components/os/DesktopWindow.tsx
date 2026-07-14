"use client";

import React from "react";
import { motion, useDragControls } from "framer-motion";
import { useThemeOS, WindowInstance } from "./ThemeController";

interface DesktopWindowProps {
  windowState: WindowInstance;
  children: React.ReactNode;
}

export default function DesktopWindow({ windowState, children }: DesktopWindowProps) {
  const { activeWindows, closeWindow, minimizeWindow, maximizeWindow, focusWindow } = useThemeOS();
  const dragControls = useDragControls();

  const { id, title, isOpen, isMinimized, isMaximized, zIndex, width, height } = windowState;

  if (!isOpen || isMinimized) return null;

  // Determine if this window is currently focused (has the highest zIndex among open windows)
  const openWins = activeWindows.filter(w => w.isOpen && !w.isMinimized);
  const isFocused = openWins.length > 0 && zIndex === Math.max(...openWins.map(w => w.zIndex));

  const titleBtnClass = `w-4 h-4 bg-[#c0c0c0] win95-raised flex items-center justify-center text-black font-sans font-bold text-[10px] select-none focus:outline-none active:shadow-[inset_1px_1px_0_#000,inset_2px_2px_0_#808080] active:pt-0.5 active:pl-0.5 cursor-pointer`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        x: isMaximized ? 0 : windowState.x,
        y: isMaximized ? 0 : windowState.y,
        width: isMaximized ? "100%" : width,
        height: isMaximized ? "calc(100vh - 40px)" : height, // calc for 40px taskbar
      }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      drag={!isMaximized}
      dragMomentum={false}
      dragListener={false}
      dragControls={dragControls}
      onPointerDown={() => focusWindow(id)}
      style={{ zIndex }}
      className={`fixed flex flex-col p-1 bg-[#c0c0c0] win95-raised overflow-hidden select-none border border-[#c0c0c0] ${
        isMaximized ? "rounded-none border-0" : ""
      }`}
    >
      {/* Title Bar (Draggable) */}
      <div
        onPointerDown={(e) => !isMaximized && dragControls.start(e)}
        className={`h-6 shrink-0 flex items-center justify-between px-1.5 py-3 select-none cursor-grab active:cursor-grabbing text-xs font-sans font-bold ${
          isFocused 
            ? "bg-gradient-to-r from-[#000080] to-[#1084d0] text-white" 
            : "bg-[#808080] text-[#c0c0c0]"
        }`}
      >
        <span className="flex items-center space-x-1.5 truncate pr-4">
          {/* Classic Win95 small computer icon representation */}
          <span className="w-3.5 h-3.5 bg-gray-300 border border-gray-400 flex items-center justify-center shrink-0 text-[8px] text-blue-900 select-none">
            🖳
          </span>
          <span className="truncate italic tracking-wide">{title}</span>
        </span>

        {/* Window controls */}
        <div className="flex items-center space-x-1 shrink-0">
          {/* Minimize */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              minimizeWindow(id);
            }}
            className={titleBtnClass}
            title="Minimize"
          >
            <span className="relative bottom-0.5">_</span>
          </button>
          
          {/* Maximize */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              maximizeWindow(id);
            }}
            className={titleBtnClass}
            title={isMaximized ? "Restore Down" : "Maximize"}
          >
            <span className="relative border-2 border-black w-2.5 h-2.5 block -bottom-0.5" />
          </button>

          {/* Close */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeWindow(id);
            }}
            className={`${titleBtnClass} ml-1`}
            title="Close"
          >
            <span>✕</span>
          </button>
        </div>
      </div>

      {/* Window Body Container */}
      {/* Added 1px gap for visual separation like classic OS */}
      <div className="flex-1 min-h-0 mt-1 flex flex-col relative overflow-hidden bg-[#c0c0c0]">
        {children}
      </div>
    </motion.div>
  );
}
