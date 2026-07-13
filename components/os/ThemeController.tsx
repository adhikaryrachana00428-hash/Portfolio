"use client";

import React, { createContext, useContext, useState } from "react";

export type BootState = "booting" | "fade-out" | "selection" | "desktop";
export type ThemeMode = "light" | "dark";

export interface WindowInstance {
  id: string;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  x: number;
  y: number;
  width: string | number;
  height: string | number;
  zIndex: number;
}

interface ThemeContextType {
  bootState: BootState;
  setBootState: (state: BootState) => void;
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
  lightOn: boolean;
  setLightOn: (on: boolean) => void;
  activeWindows: WindowInstance[];
  openWindow: (id: string, title: string, options?: Partial<WindowInstance>) => void;
  closeWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  maximizeWindow: (id: string) => void;
  focusWindow: (id: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [bootState, setBootState] = useState<BootState>("booting");
  const [themeMode, setThemeMode] = useState<ThemeMode>("dark");
  const [lightOn, setLightOn] = useState<boolean>(false);
  const [activeWindows, setActiveWindows] = useState<WindowInstance[]>([]);
  const [maxZIndex, setMaxZIndex] = useState(10);

  // Focus helper to bring a window to front
  const focusWindow = (id: string) => {
    setActiveWindows((prev) => {
      const target = prev.find((w) => w.id === id);
      if (!target || target.zIndex === maxZIndex) return prev;
      
      const newZ = maxZIndex + 1;
      setMaxZIndex(newZ);
      
      return prev.map((w) => (w.id === id ? { ...w, zIndex: newZ, isMinimized: false } : w));
    });
  };

  // Open window helper
  const openWindow = (id: string, title: string, options?: Partial<WindowInstance>) => {
    setActiveWindows((prev) => {
      const exists = prev.find((w) => w.id === id);
      const newZ = maxZIndex + 1;
      setMaxZIndex(newZ);

      if (exists) {
        // Just make it open and focused
        return prev.map((w) =>
          w.id === id
            ? { ...w, isOpen: true, isMinimized: false, zIndex: newZ }
            : w
        );
      }

      // Compute centered position
      const screenWidth = typeof window !== "undefined" ? window.innerWidth : 1200;
      const screenHeight = typeof window !== "undefined" ? window.innerHeight : 800;
      
      const defaultWidth = 750;
      const defaultHeight = 550;
      const x = Math.max(50, (screenWidth - defaultWidth) / 2 + (prev.length * 20) % 100);
      const y = Math.max(50, (screenHeight - defaultHeight) / 2 + (prev.length * 20) % 100);

      const newWin: WindowInstance = {
        id,
        title,
        isOpen: true,
        isMinimized: false,
        isMaximized: false,
        x,
        y,
        width: defaultWidth,
        height: defaultHeight,
        zIndex: newZ,
        ...options,
      };

      return [...prev, newWin];
    });
  };

  // Close window helper
  const closeWindow = (id: string) => {
    setActiveWindows((prev) => prev.map((w) => (w.id === id ? { ...w, isOpen: false } : w)));
  };

  // Minimize window helper
  const minimizeWindow = (id: string) => {
    setActiveWindows((prev) => prev.map((w) => (w.id === id ? { ...w, isMinimized: true } : w)));
  };

  // Maximize window helper
  const maximizeWindow = (id: string) => {
    setActiveWindows((prev) => prev.map((w) => (w.id === id ? { ...w, isMaximized: !w.isMaximized } : w)));
  };

  return (
    <ThemeContext.Provider
      value={{
        bootState,
        setBootState,
        themeMode,
        setThemeMode,
        lightOn,
        setLightOn,
        activeWindows,
        openWindow,
        closeWindow,
        minimizeWindow,
        maximizeWindow,
        focusWindow,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeOS() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeOS must be used within a ThemeProvider");
  }
  return context;
}
