"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useThemeOS } from "./ThemeController";

export default function PullStringSwitch() {
  const { themeMode, setThemeMode, setLightOn } = useThemeOS();
  
  // Motion value for the drag position of the pull knob
  const y = useMotionValue(0);
  
  // Map drag distance (0 to 120px) to string length
  const stringLength = useTransform(y, [0, 120], [120, 240]);

  const handleDragStart = () => {
    // Left empty since drag state is not needed
  };

  const toggleTheme = () => {
    const nextMode = themeMode === "light" ? "dark" : "light";
    if (nextMode === "light") {
      setLightOn(true);
      setThemeMode("light");
    } else {
      setLightOn(false);
      setThemeMode("dark");
    }
  };

  const handleDragEnd = () => {
    const currentY = y.get();

    // Trigger theme toggle if pulled down more than 40px
    if (currentY > 40) {
      toggleTheme();
    }

    // Snap back string
    y.set(0);
  };

  return (
    <div className="fixed right-4 sm:right-16 md:right-24 top-0 z-[140] flex flex-col items-center select-none touch-manipulation">
      {/* Hanging rope line */}
      <motion.div
        style={{ height: stringLength }}
        className="w-[2px] bg-gradient-to-b from-[#4A3B32] to-[#8C6D58] origin-top shadow-md transition-all duration-75"
      />

      {/* Interactive pull knob - can be dragged down or tapped */}
      <motion.div
        drag="y"
        dragConstraints={{ top: 0, bottom: 120 }}
        dragElastic={0.1}
        style={{ y }}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onClick={() => {
          // If barely moved (a tap), toggle immediately
          if (Math.abs(y.get()) < 10) {
            toggleTheme();
          }
        }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        className="w-10 h-12 -mt-1 cursor-grab active:cursor-grabbing flex flex-col items-center justify-start group touch-manipulation"
        title="Pull down or tap cord to toggle Dark Mode"
      >
        {/* Connection Ring */}
        <div className="w-3.5 h-2 bg-[#D1B894] rounded-t-sm border border-[#4A3B32]/30" />

        {/* Cozy Wooden Bead / Pull Knob */}
        <div className="w-7 h-9 bg-gradient-to-b from-[#8C6D58] via-[#B28D70] to-[#594233] rounded-full border border-[#4A3B32]/50 shadow-lg flex items-center justify-center relative">
          {/* Inner details to make it look like wood grain/bead */}
          <div className="absolute inset-[3px] border border-[#F5F5F0]/10 rounded-full pointer-events-none" />
          <div className="w-[2px] h-4 bg-[#F5F5F0]/20 rounded-full pointer-events-none" />
        </div>

        {/* Mini vintage pull indicator tag */}
        <span className="text-[8px] font-mono tracking-wider font-bold text-[#4A3B32] bg-[#dfdcd6]/95 px-1 py-0.5 border border-[#8C6D58]/40 shadow-sm uppercase mt-1 pointer-events-none whitespace-nowrap">
          {themeMode === "light" ? "Pull: Dark" : "Pull: Light"}
        </span>
      </motion.div>
    </div>
  );
}
