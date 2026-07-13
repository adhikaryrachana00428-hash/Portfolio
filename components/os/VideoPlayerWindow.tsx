"use client";

import React, { useState, useEffect } from "react";
import { Film } from "lucide-react";

export default function VideoPlayerWindow() {
  const [videoExists, setVideoExists] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    // Check if the video file is present
    fetch("/assets/videos/Me.mp4", { method: "HEAD" })
      .then((res) => {
        if (res.ok) {
          setVideoExists(true);
        } else {
          setVideoExists(false);
        }
      })
      .catch(() => {
        setVideoExists(false);
      })
      .finally(() => {
        setChecking(false);
      });
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-[#161614] select-none text-center">
      {checking ? (
        <div className="font-mono text-sm text-[#C8B89A] animate-pulse">
          Loading player...
        </div>
      ) : videoExists ? (
        <div className="w-full max-w-2xl bg-[#0A0A09] rounded-xl overflow-hidden border border-[#2D2D2A] shadow-inner">
          <video
            src="/assets/videos/Me.mp4"
            controls
            className="w-full h-auto aspect-video object-contain"
            autoPlay
          />
        </div>
      ) : (
        <div className="flex flex-col items-center max-w-sm">
          {/* Cozy media player fallback visual */}
          <div className="w-20 h-20 rounded-full border-2 border-dashed border-[#C8B89A]/40 flex items-center justify-center text-[#C8B89A]/60 mb-6 bg-[#222220]/30 animate-pulse">
            <Film className="w-8 h-8" />
          </div>

          <h3 className="font-display text-3xl text-[#F5F5F0] mb-2 italic">
            Welcome Video
          </h3>
          
          <p className="font-body text-[#F5F5F0]/70 leading-relaxed mb-6">
            Introduction video coming soon. In the meantime, feel free to explore the other apps in this workspace!
          </p>

          <div className="font-mono text-[10px] text-[#C8B89A] tracking-wider uppercase border border-[#C8B89A]/20 px-3 py-1.5 rounded-md bg-[#222220]/20">
            Path: assets/videos/Me.mp4
          </div>
        </div>
      )}
    </div>
  );
}
