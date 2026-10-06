"use client";

import React from "react";

const TIMELINE_EVENTS = [
  { date: "2021-06-15", desc: "Class X graduation - Olivia Enlightened English School" },
  { date: "2023-05-20", desc: "Class XII graduation - Olivia Enlightened English School" },
  { date: "2025-09-12", desc: "Participated in Smart India Hackathon (SIH)" },
  { date: "2025-12-07", desc: "Completed 12-hour CodeDay Bengaluru Hackathon" },
  { date: "2026-02-14", desc: "Built 2D game 'And Then There Were None' in 24hr Game Jam" },
  { date: "2026-03-22", desc: "Built Code Analyzer (Rust/AST), Agent Lab (Python/RL), and Prompt Verification (Next.js/TS)" },
  { date: "2026-05-18", desc: "Launched Teleport (Rust CLI) and contributed to open source via GSSoC & SSoC" },
  { date: "2026-06-15", desc: "Won the AMD AI Hackathon with multi-agent debate platform DeBae" },
  { date: "2026-06-30", desc: "Built HotDog — AI-powered engineering intelligence platform to reverse-engineer software" },
];

export default function TimelineSection() {
  return (
    <div className="font-mono text-[11px] sm:text-xs md:text-sm text-black leading-relaxed select-text p-1 min-w-full">
      <div className="mb-2">
        <div className="font-bold">SYS_LOG: THE JOURNEY</div>
        <div>====================</div>
        <div className="text-gray-600">[INFO] Loading chronological event list...</div>
      </div>

      <div className="border-t border-b border-gray-400 py-1 my-2 flex text-[10px] sm:text-xs font-bold text-gray-700 select-none">
        <span className="w-24 sm:w-28 shrink-0">[TIMESTAMP]</span>
        <span className="shrink-0 mr-2">|</span>
        <span className="flex-1">[EVENT DETAIL]</span>
      </div>

      <div className="space-y-1.5 my-2">
        {TIMELINE_EVENTS.map((event, idx) => (
          <div key={idx} className="flex items-start text-[11px] sm:text-xs">
            <span className="w-24 sm:w-28 shrink-0 text-blue-900 font-bold">{event.date}</span>
            <span className="shrink-0 mr-2 text-gray-400">|</span>
            <span className="flex-1 break-words">
              <span className="text-emerald-700 font-bold">[OK] </span>
              {event.desc}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-2 border-t border-gray-400 text-gray-600 text-[10px] sm:text-xs">
        <div>[INFO] Log end reached.</div>
        <div className="text-gray-400 mt-1">----------------------------------------------------</div>
        <div className="text-gray-500">File: Journey.log  |  Log Level: INFO  |  Lines: {TIMELINE_EVENTS.length + 6}</div>
      </div>
    </div>
  );
}
