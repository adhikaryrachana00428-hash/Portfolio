"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BootScreenProps {
  onComplete: () => void;
}

export default function BootScreen({ onComplete }: BootScreenProps) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"logo-fade-in" | "loading" | "fade-out">("logo-fade-in");
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    // Phase 1: Logo fades in (0 to 1.5s)
    const logoTimer = setTimeout(() => {
      setPhase("loading");
    }, 1200);

    // Phase 2: Progress bar fills (1.2s to 4.2s)
    let progressInterval: NodeJS.Timeout;
    const progressStartTimer = setTimeout(() => {
      progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          // Increments randomly for realistic OS boot look
          const increment = Math.floor(Math.random() * 8) + 4;
          return Math.min(100, prev + increment);
        });
      }, 150);
    }, 1200);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(progressStartTimer);
      if (progressInterval) clearInterval(progressInterval);
    };
  }, []);

  // When progress reaches 100%, hold briefly then fade out
  useEffect(() => {
    if (progress === 100) {
      const fadeTimer = setTimeout(() => {
        setPhase("fade-out");
      }, 600);

      const completeTimer = setTimeout(() => {
        onComplete();
      }, 1400); // Allow time for exit animation

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(completeTimer);
      };
    }
  }, [progress, onComplete]);

  return (
    <div className="fixed inset-0 bg-[#0A0A0A] z-50 flex flex-col items-center justify-center select-none font-mono text-[#F5F5F0]">
      <AnimatePresence mode="wait">
        {phase !== "fade-out" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
            className="flex flex-col items-center max-w-sm w-full px-6"
          >
            {/* Logo Container */}
            <div className="h-32 flex items-center justify-center mb-8 relative">
              {!logoError ? (
                // Try loading from assets
                <motion.img
                  src="/assets/images/logo.png"
                  alt="Logo"
                  className="max-h-24 object-contain"
                  onError={() => setLogoError(true)}
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
              ) : (
                // Cursive Hand-written Logo Fallback
                <div className="relative w-64 flex flex-col items-center justify-center">
                  <svg
                    viewBox="0 0 300 120"
                    className="w-full h-auto stroke-current fill-none text-[#C8B89A]"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <motion.path
                      d="M 35 70 C 35 25, 65 15, 50 80 C 65 60, 75 45, 80 75 C 90 50, 105 50, 100 80 Q 110 30, 115 80 C 130 55, 140 55, 135 80 C 142 55, 155 55, 150 80 Q 155 55, 168 55 C 180 55, 175 80, 185 55"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{
                        duration: 1.5,
                        ease: "easeInOut",
                      }}
                    />
                  </svg>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="font-display text-2xl tracking-widest text-[#C8B89A] italic -mt-2"
                  >
                    Rachana
                  </motion.p>
                </div>
              )}
            </div>

            {/* Booting Text & Loading Bar */}
            {phase === "loading" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full flex flex-col items-center"
              >
                <div className="text-xs uppercase tracking-[0.2em] text-[#C8B89A]/80 mb-3 animate-pulse">
                  {"Booting Rachana's portfolio..."}
                </div>

                {/* Progress Bar Container */}
                <div className="w-full h-[6px] bg-[#1C1C1C] rounded-full overflow-hidden border border-[#2A2A2A]/40 relative">
                  {/* Premium segment styling */}
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#C8B89A]/60 via-[#C8B89A] to-[#C8B89A]/60 rounded-full"
                    style={{ width: `${progress}%` }}
                    layout
                  />
                </div>

                {/* Progress Percentage */}
                <div className="text-[10px] text-[#F5F5F0]/40 mt-2 font-mono">
                  {progress}%
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
