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
    <div className="font-mono text-xs md:text-sm text-black whitespace-pre-wrap leading-relaxed select-text p-1">
{`SYS_LOG: THE JOURNEY
====================
[INFO] Loading chronological event list...

[TIMESTAMP]  | [EVENT DETAIL]
-------------+---------------------------------------------------
${TIMELINE_EVENTS.map(event => `${event.date.padEnd(12, ' ')} | [OK] ${event.desc}`).join("\n")}

[INFO] Log end reached.
----------------------------------------------------
File: Journey.log  |  Log Level: INFO  |  Lines: 15
`}
    </div>
  );
}
