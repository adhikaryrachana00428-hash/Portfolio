"use client";

import React, { useState, useEffect, useRef } from "react";

export default function VideoPlayerWindow() {
  const [videoExists, setVideoExists] = useState(false);
  const [checking, setChecking] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
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

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setPlaying(true);
      }).catch(err => console.warn(err));
    }
  };

  const handleStop = () => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    setPlaying(false);
    setProgress(0);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const duration = videoRef.current.duration || 1;
    setProgress((current / duration) * 100);
  };

  return (
    <div className="w-full h-full bg-[#c0c0c0] font-sans text-xs text-black flex flex-col p-1">
      {/* 1. WMP Menu Bar */}
      <div className="bg-[#c0c0c0] border-b border-[#808080] py-0.5 px-2 flex space-x-4 select-none shrink-0 font-medium font-sans">
        <span className="hover:bg-[#000080] hover:text-white px-1 cursor-pointer">File</span>
        <span className="hover:bg-[#000080] hover:text-white px-1 cursor-pointer">Play</span>
        <span className="hover:bg-[#000080] hover:text-white px-1 cursor-pointer">Favorites</span>
        <span className="hover:bg-[#000080] hover:text-white px-1 cursor-pointer">Go</span>
        <span className="hover:bg-[#000080] hover:text-white px-1 cursor-pointer">Help</span>
      </div>

      {/* 2. Video Frame Sunken screen */}
      <div className="flex-1 bg-black win95-sunken m-1 flex flex-col items-center justify-center relative overflow-hidden">
        {checking ? (
          <div className="font-mono text-xs text-[#00ff00] animate-pulse">
            LOADING DEVICE DRIVER...
          </div>
        ) : videoExists ? (
          <video
            ref={videoRef}
            src="/assets/videos/Me.mp4"
            onTimeUpdate={handleTimeUpdate}
            className="w-full h-full object-contain"
            onEnded={() => setPlaying(false)}
          />
        ) : (
          <div className="flex flex-col items-center text-center p-4 max-w-xs">
            {/* Visualizer fallback */}
            <div className="w-32 h-16 border border-green-800 flex items-end justify-between p-1 bg-black overflow-hidden mb-4">
              <span className="w-2 bg-green-500 animate-[pulse_0.8s_infinite]" style={{ height: "40%" }} />
              <span className="w-2 bg-green-500 animate-[pulse_1.2s_infinite]" style={{ height: "70%" }} />
              <span className="w-2 bg-green-500 animate-[pulse_0.6s_infinite]" style={{ height: "90%" }} />
              <span className="w-2 bg-green-500 animate-[pulse_1.0s_infinite]" style={{ height: "50%" }} />
              <span className="w-2 bg-green-500 animate-[pulse_0.9s_infinite]" style={{ height: "80%" }} />
              <span className="w-2 bg-green-500 animate-[pulse_0.7s_infinite]" style={{ height: "30%" }} />
            </div>

            <span className="font-bold text-red-500 mb-1 text-[11px]">ERROR 404: FILE NOT FOUND</span>
            <span className="text-gray-400 font-mono text-[9px] uppercase">
              assets/videos/Me.mp4
            </span>
            <p className="text-gray-300 text-[10px] mt-2 leading-relaxed">
              Introduction video coming soon. Explore the other workspace applications in the meantime!
            </p>
          </div>
        )}
      </div>

      {/* 3. Controls Panel */}
      <div className="p-1.5 bg-[#c0c0c0] flex flex-col space-y-2 select-none shrink-0">
        
        {/* Slider bar */}
        <div className="flex items-center space-x-2">
          <div className="flex-1 h-4 bg-white win95-sunken relative flex items-center p-0.5">
            {/* Progress bar inside slider */}
            <div 
              className="bg-[#000080] h-full transition-all duration-75"
              style={{ width: `${progress}%` }}
            />
            {/* Slider thumb */}
            <div 
              className="w-3 h-full bg-[#c0c0c0] win95-raised absolute border border-gray-400"
              style={{ left: `calc(${progress}% - 6px)`, transition: "all 0.075s" }}
            />
          </div>
        </div>

        {/* Play/Pause buttons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <button
              onClick={handlePlayPause}
              disabled={!videoExists}
              className={`win95-button w-12 py-1 font-bold text-[10px] ${!videoExists ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
            >
              {playing ? "Pause" : "Play"}
            </button>
            <button
              onClick={handleStop}
              disabled={!videoExists}
              className={`win95-button w-12 py-1 font-bold text-[10px] ${!videoExists ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
            >
              Stop
            </button>
          </div>

          <div className="font-mono text-[9px] text-gray-700 bg-white/40 px-1 border border-white/20 select-none">
            00:00 / {videoExists ? "01:30" : "00:00"}
          </div>
        </div>

      </div>
    </div>
  );
}
