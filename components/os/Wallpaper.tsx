"use client";

import React from "react";

export default function Wallpaper() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#dfdcd6] select-none pointer-events-none z-[0]">
      {/* 
        Full-screen vintage-filtered background wallpaper.
        Ken Burns zoom and parallax are disabled so that the transparent 
        hotspot overlay remains perfectly aligned with the sign at all times.
      */}
      <div
        style={{
          backgroundImage: "url('/assets/images/wallpaper.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "contrast(1.18) brightness(0.92) saturate(1.05)",
        }}
        className="absolute inset-0 w-full h-full opacity-90"
      />

      {/* Ambient static CRT color vignette to enhance the '80s CRT monitor feel */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1C1A17]/25 via-transparent to-[#1C1A17]/15 z-[1] pointer-events-none" />

      {/* 
        Responsive Clickable Hotspot Overlay.
        Positioned exactly over the "RACH RESUME" sign in the center of the garden illustration.
        Uses exact percentages to scale proportionally when the window is resized.
      */}
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute left-[44.2%] top-[32.2%] w-[12.0%] h-[13.5%] z-[10] cursor-pointer block hover:bg-black/5 active:bg-black/10 border border-transparent hover:border-black/15 transition-all duration-75 pointer-events-auto rounded-sm"
        title="Open Resume (resume.pdf)"
      />
    </div>
  );
}
