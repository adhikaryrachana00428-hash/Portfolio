"use client";

import { motion } from "framer-motion";
import SelfDrawingSVG, { drawPathVariants } from "./SelfDrawingSVG";

export default function OpenSourceSection() {
  return (
    <section
      id="open-source"
      className="w-full min-h-screen flex items-center bg-[#0A0A0A] p-6 md:p-12 border-t border-[#1C1C1C] relative z-10"
    >
      <div className="max-w-5xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Left Column: Sketch SVG */}
        <div className="w-full max-w-[280px] md:max-w-md mx-auto aspect-square flex items-center justify-center">
          <SelfDrawingSVG className="w-full h-full" duration={3.0}>
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full stroke-current fill-none text-[#F5F5F0]"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Git Branching Metaphor */}
              {/* Main Line */}
              <motion.path
                d="M 30 100 L 170 100"
                custom={2.0}
                variants={drawPathVariants}
              />
              {/* Branch 1 */}
              <motion.path
                d="M 60 100 C 80 60, 120 60, 140 100"
                custom={2.2}
                variants={drawPathVariants}
              />
              {/* Commit Nodes (sketch circles) */}
              <motion.path
                d="M 60 100 A 3 3 0 1 1 54 100 A 3 3 0 1 1 60 100"
                custom={1.0}
                variants={drawPathVariants}
              />
              <motion.path
                d="M 100 70 A 3 3 0 1 1 94 70 A 3 3 0 1 1 100 70"
                custom={1.5}
                variants={drawPathVariants}
              />
              <motion.path
                d="M 140 100 A 3 3 0 1 1 134 100 A 3 3 0 1 1 140 100"
                custom={1.0}
                variants={drawPathVariants}
              />

              {/* Branch 2 (lower) */}
              <motion.path
                d="M 70 100 C 90 140, 115 140, 130 100"
                custom={2.5}
                variants={drawPathVariants}
              />
              <motion.path
                d="M 100 120 A 3 3 0 1 1 94 120 A 3 3 0 1 1 100 120"
                custom={1.5}
                variants={drawPathVariants}
              />
            </svg>
          </SelfDrawingSVG>
        </div>

        {/* Right Column: Title, paragraphs, and active indicator */}
        <div className="flex flex-col space-y-6 max-w-xl">
          <div className="flex items-baseline space-x-2">
            <span className="font-display text-[8vw] md:text-[5vw] text-accent leading-none">
              02.
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-[#F5F5F0]">
              OPeN SoURCE
            </h2>
          </div>

          <div className="font-body text-base md:text-lg leading-[1.8] text-[#F5F5F0]/85 space-y-6">
            <p>
              I am highly active in open-source development, contributing regularly
              to ecosystems that improve tooling and performance. I participated in
              the Girlscript Summer of Code (GSSoC) and Social Summer of Code (SSoC),
              where I collaborated with distributed teams to optimize backend frameworks
              and frontend interfaces.
            </p>
            <p>
              Collaborating on public repositories has refined my understanding of CI/CD pipelines,
              collaborative Git flows, and clean developer documentation.
            </p>
          </div>

          {/* Currently Active Label with Hand-drawn circle */}
          <div className="pt-4 self-start relative flex items-center justify-center px-4 py-2">
            <span className="font-mono text-xs md:text-sm tracking-widest text-[#F5F5F0] z-10">
              Currently Active
            </span>
            <div className="absolute inset-0 z-0">
              <SelfDrawingSVG duration={2.0} delay={0.8}>
                <svg
                  viewBox="0 0 160 50"
                  preserveAspectRatio="none"
                  className="w-full h-full stroke-current fill-none text-accent"
                  strokeWidth="1.5"
                >
                  {/* Hand-drawn imperfect oval/circle wrapping the label */}
                  <motion.path
                    d="M 10 25 C 10 10, 80 5, 140 10 C 155 15, 155 35, 140 40 C 80 45, 15 40, 10 25 Z"
                    variants={drawPathVariants}
                  />
                </svg>
              </SelfDrawingSVG>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
