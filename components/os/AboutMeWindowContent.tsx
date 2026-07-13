"use client";

import React from "react";

export default function AboutMeWindowContent() {
  return (
    <div
      className="relative w-full min-h-full flex items-center justify-center p-6 md:p-10 bg-cover bg-center select-text"
      style={{
        backgroundImage: "url('/assets/images/doraemon.png')",
      }}
    >
      {/* Semi-transparent overlay to ensure text contrast while keeping the art visible */}
      <div className="absolute inset-0 bg-[#0A0A09]/75 mix-blend-multiply z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1C1A17]/85 via-[#0A0A09]/60 to-[#1C1A17]/80 z-0" />

      {/* Main Text Content Box */}
      <div className="relative z-10 max-w-xl w-full bg-[#1C1A17]/40 border border-[#C8B89A]/15 backdrop-blur-md p-8 rounded-2xl shadow-2xl flex flex-col space-y-6">
        {/* Title */}
        <div className="flex items-baseline space-x-2 border-b border-[#C8B89A]/20 pb-4">
          <span className="font-display text-4xl text-accent leading-none">01.</span>
          <h2 className="font-display text-3xl text-[#F5F5F0] italic">about me</h2>
        </div>

        {/* Paragraphs in high quality Garamond font */}
        <div className="font-body text-lg md:text-xl leading-relaxed text-[#F5F5F0]/90 space-y-5">
          <p>
            {"I'm"} <span className="text-accent font-semibold">Rachana</span> — a first-year Computer Science student at{" "}
            <span className="font-semibold text-[#F5F5F0]">SVYASA Newton School of Technology, Bengaluru</span>. I have
            been building things ever since I discovered the power of code.
          </p>
          <p>
            I have just begun my journey exploring the intersections of AI safety, systems programming, and open
            source. {"I've"} simulated how AI agents learn to deceive in simple models, built cross-platform file
            utilities in <span className="font-mono text-xs text-accent uppercase">[ Rust ]</span>, and contributed to open
            source projects through GSSoC and SSoC.
          </p>
        </div>

        {/* Cozy hand-drawn style footer note */}
        <div className="pt-2 font-mono text-[10px] uppercase tracking-wider text-[#F5F5F0]/40 text-right">
          File: AboutMe.txt · Type: text/plain
        </div>
      </div>
    </div>
  );
}
