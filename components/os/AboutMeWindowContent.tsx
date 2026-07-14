"use client";

import React from "react";

export default function AboutMeWindowContent() {
  return (
    <div className="font-mono text-xs md:text-sm text-black leading-relaxed select-text p-4 bg-white min-h-full">
      {/* Header: Text details on left, retro photo portrait on right */}
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4 border-b-2 border-black pb-4 mb-4 select-text">
        <div className="flex-1 whitespace-pre-wrap select-text">
{`ABOUT ME
=========
Name: Rachana Adhikary
Role: 2nd Year Computer Science Student
Location: SVYASA Newton School of Technology, Bengaluru`}
        </div>

        {/* User Portrait Image with Win95 style photo bezel border */}
        <div className="win95-raised p-1 bg-[#c0c0c0] shrink-0 self-center sm:self-start">
          <img
            src="/assets/images/about_avatar.jpg"
            alt="Rachana Adhikary Portrait"
            className="w-24 h-32 md:w-28 md:h-36 object-cover border border-gray-400 select-none pointer-events-none"
            style={{
              filter: "contrast(1.15) brightness(0.95) saturate(0.95)",
            }}
          />
        </div>
      </div>

      {/* Main Text Content */}
      <div className="whitespace-pre-wrap select-text">
{`HIGHLIGHTS:
-----------
* Agent Deception Lab: Simulated how RL agents learn to deceive in reward-based models.
* Teleport: Developed a high-performance cross-platform file transfer utility in Rust.
* Open Source: Active contributor to projects via GSSoC & SSoC.

BIOGRAPHY:
----------
I am passionate about building fast, secure, and reliable software. I love working with languages like Rust, Python, C, and TypeScript. I am always open to discussing research, code architecture, or open-source collaborations.

--------------------------------------------------
File: AboutMe.txt  |  Size: 1.25 KB  |  Type: text/plain
`}
      </div>
    </div>
  );
}
