"use client";

import { useEffect, useState } from "react";

interface BootScreenProps {
  onComplete: () => void;
}

export default function BootScreen({ onComplete }: BootScreenProps) {
  const [phase, setPhase] = useState<"bios" | "win95" | "done">("bios");
  const [biosLines, setBiosLines] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  // Phase 1: BIOS scrolling text
  useEffect(() => {
    if (phase !== "bios") return;

    const fullLines = [
      "AMIBIOS (C) 1995 American Megatrends, Inc.",
      "BIOS Date: 07/14/95 14:32:09 Ver: 01.00.03",
      "CPU: Intel Pentium(R) at 90MHz",
      "Memory Test: 16384KB OK",
      "Detecting IDE Primary Master ... WDC AC31600H",
      "Detecting IDE Secondary Master ... None",
      "Detecting Keyboard ... Detected",
      "Detecting Mouse ... Detected",
      "Starting MS-DOS...",
      "C:\\> load_portfolio.exe",
    ];

    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < fullLines.length) {
        setBiosLines((prev) => [...prev, fullLines[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
        setTimeout(() => setPhase("win95"), 800);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [phase]);

  // Phase 2: Windows 95 loading bar
  useEffect(() => {
    if (phase !== "win95") return;

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setPhase("done");
            onComplete();
          }, 600);
          return 100;
        }
        // Small increments to simulate retro disk load speeds
        const inc = Math.floor(Math.random() * 12) + 6;
        return Math.min(100, prev + inc);
      });
    }, 200);

    return () => clearInterval(progressInterval);
  }, [phase, onComplete]);

  if (phase === "bios") {
    return (
      <div className="fixed inset-0 bg-black text-gray-300 font-mono text-[10px] sm:text-xs p-6 flex flex-col justify-start select-none z-50 uppercase leading-relaxed">
        <div className="flex-1 space-y-1">
          {biosLines.map((line, idx) => (
            <div key={idx}>{line}</div>
          ))}
        </div>
        <div className="text-gray-500 text-[9px] mt-6 border-t border-gray-800 pt-2 text-right">
          Press DEL to enter Setup
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-[#008080] flex flex-col items-center justify-center select-none z-50 text-black">
      {/* Cloud-like retro background drawing container */}
      <div className="max-w-md w-full p-8 flex flex-col items-center text-center space-y-10 relative">
        {/* Startup Logo Header */}
        <div className="flex flex-col items-center">
          <div className="text-5xl font-extrabold italic tracking-wider text-white drop-shadow-[2px_2px_0px_#000] select-none font-sans">
            Rachana<span className="text-blue-900 text-6xl">95</span>
          </div>
          <div className="text-xs uppercase tracking-[0.3em] font-sans font-bold text-gray-200 mt-2 select-none">
            Microsoft Windows 95 Compatible
          </div>
        </div>

        {/* Loading Segmented Bar */}
        <div className="w-64 flex flex-col items-center select-none">
          <div className="w-full text-[10px] text-gray-200 mb-2 uppercase font-mono tracking-widest text-center animate-pulse">
            INITIALIZING WORKSPACE
          </div>
          
          {/* Classic Win95 Progress Bar container */}
          <div className="w-full h-4 bg-[#c0c0c0] win95-sunken p-[2px] relative overflow-hidden">
            {/* Repeating block segments */}
            <div 
              className="h-full bg-[#000080]"
              style={{ 
                width: `${progress}%`,
                backgroundImage: "repeating-linear-gradient(90deg, #000080, #000080 8px, #c0c0c0 8px, #c0c0c0 11px)",
                transition: "width 0.15s ease-out"
              }}
            />
          </div>
          <div className="text-[9px] font-mono text-gray-300 mt-2">{progress}%</div>
        </div>
      </div>
    </div>
  );
}
