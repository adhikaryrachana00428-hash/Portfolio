"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000); // 2 seconds total duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0A0A0A] text-[#F5F5F0]"
        >
          <div className="relative w-72 h-36 flex flex-col items-center justify-center">
            {/* Handwritten style "Rachana" in SVG path */}
            <svg
              viewBox="0 0 300 120"
              className="w-full h-auto stroke-current fill-none text-[#F5F5F0]"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Cursive handwritten "Rachana" path */}
              <motion.path
                d="M 35 70 C 35 25, 65 15, 50 80 C 65 60, 75 45, 80 75 C 90 50, 105 50, 100 80 Q 110 30, 115 80 C 130 55, 140 55, 135 80 C 142 55, 155 55, 150 80 Q 155 55, 168 55 C 180 55, 175 80, 185 55"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1.6,
                  ease: "easeInOut",
                }}
              />
            </svg>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="font-display text-xl tracking-widest mt-2 text-accent italic"
            >
              Rachana
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
