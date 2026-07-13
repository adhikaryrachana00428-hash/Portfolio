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

  const handleDragEnd = () => {
    const currentY = y.get();

    // Trigger theme toggle if pulled down more than 50px
    if (currentY > 50) {
      const nextMode = themeMode === "light" ? "dark" : "light";
      
      // Warm room-lighting animation:
      // First toggle lightOn state to initiate ambient animation, then update the mode
      if (nextMode === "light") {
        setLightOn(true);
        setThemeMode("light");
      } else {
        setLightOn(false);
        setThemeMode("dark");
      }
    }

    // Snap back string
    y.set(0);
  };

  return (
    <div className="fixed right-16 md:right-24 top-0 z-[100] flex flex-col items-center">
      {/* Hanging rope line */}
      <motion.div
        style={{ height: stringLength }}
        className="w-[2px] bg-gradient-to-b from-[#4A3B32] to-[#8C6D58] origin-top shadow-md transition-all duration-75"
      />

      {/* Interactive pull knob */}
      <motion.div
        drag="y"
        dragConstraints={{ top: 0, bottom: 120 }}
        dragElastic={0.1}
        style={{ y }}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        className="w-8 h-10 -mt-1 cursor-grab active:cursor-grabbing flex flex-col items-center justify-start group"
      >
        {/* Connection Ring */}
        <div className="w-3 h-2 bg-[#D1B894] rounded-t-sm border border-[#4A3B32]/30" />

        {/* Cozy Wooden Bead / Pull Knob */}
        <div className="w-6 h-8 bg-gradient-to-b from-[#8C6D58] via-[#B28D70] to-[#594233] rounded-full border border-[#4A3B32]/40 shadow-lg flex items-center justify-center relative">
          {/* Inner details to make it look like wood grain/bead */}
          <div className="absolute inset-[3px] border border-[#F5F5F0]/10 rounded-full pointer-events-none" />
          <div className="w-[2px] h-4 bg-[#F5F5F0]/20 rounded-full pointer-events-none" />
        </div>
      </motion.div>
    </div>
  );
}
