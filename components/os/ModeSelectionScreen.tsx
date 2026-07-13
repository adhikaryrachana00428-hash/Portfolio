"use client";

import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

interface ModeSelectionScreenProps {
  onSelect: (mode: "light" | "dark") => void;
}

export default function ModeSelectionScreen({ onSelect }: ModeSelectionScreenProps) {
  return (
    <div className="fixed inset-0 bg-[#0A0A0A] z-50 flex items-center justify-center p-6 select-none font-body">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-md w-full bg-[#161614] border border-[#2D2D2A] rounded-2xl p-8 md:p-10 shadow-2xl flex flex-col items-center text-center relative overflow-hidden"
      >
        {/* Subtle background warm ambient glow */}
        <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-[#C8B89A]/5 blur-[80px] pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-[#C8B89A]/5 blur-[80px] pointer-events-none" />

        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-display text-4xl md:text-5xl text-[#F5F5F0] mb-3"
        >
          choose your experience
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="font-body text-sm md:text-base text-[#F5F5F0]/80 italic mb-8 max-w-[280px]"
        >
          {"Select how you would like to explore Rachana's workspace."}
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {/* Light Mode Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6, type: "spring" }}
            whileHover={{ scale: 1.03, backgroundColor: "#E6E6DF", color: "#0A0A0A" }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelect("light")}
            className="flex flex-col items-center justify-center p-6 rounded-xl border border-[#C8B89A]/30 bg-[#222220] text-[#F5F5F0] transition-colors duration-300 group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full bg-[#E6E6DF]/10 flex items-center justify-center mb-4 group-hover:bg-amber-100 group-hover:text-amber-600 transition-colors duration-300">
              <Sun className="w-6 h-6 text-[#C8B89A] group-hover:text-amber-600" />
            </div>
            <span className="font-display text-2xl mb-1">Light Mode</span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#F5F5F0]/50 group-hover:text-[#0A0A0A]/60">
              Fully Illuminated
            </span>
          </motion.button>

          {/* Dark Mode Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6, type: "spring" }}
            whileHover={{ scale: 1.03, borderColor: "#C8B89A" }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelect("dark")}
            className="flex flex-col items-center justify-center p-6 rounded-xl border border-[#C8B89A]/30 bg-[#222220] text-[#F5F5F0] transition-colors duration-300 group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full bg-[#E6E6DF]/10 flex items-center justify-center mb-4 group-hover:bg-slate-800 transition-colors duration-300">
              <Moon className="w-6 h-6 text-[#C8B89A]" />
            </div>
            <span className="font-display text-2xl mb-1">Dark Mode</span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-accent group-hover:text-[#F5F5F0]/90">
              Cozy Flashlight
            </span>
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-8 font-mono text-[10px] tracking-wider text-[#F5F5F0]/50 uppercase"
        >
          You can switch modes at any time on the desktop.
        </motion.div>
      </motion.div>
    </div>
  );
}
