"use client";

import { motion } from "framer-motion";
import SelfDrawingSVG, { drawPathVariants } from "./SelfDrawingSVG";

const PROJECTS = [
  {
    id: "project-teleport",
    num: "01.",
    name: "Teleport",
    date: "MAY 2026",
    tech: "Rust · MTP · CLI",
    desc: "A high-performance, cross-platform file transfer utility built in Rust. It utilizes an optimized custom transfer protocol to move directory hierarchies instantly across localized network nodes with checksum verification.",
    link: "https://gitlab.com/uniquepersun/teleport",
    linkLabel: "→ GitLab",
    // SVG Illustration: sketch of two devices connected by a line with files floating between
    svg: (
      <svg viewBox="0 0 200 200" className="w-full h-full stroke-current fill-none text-[#F5F5F0]" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Device 1 */}
        <motion.path d="M 40 130 L 70 130 L 75 145 L 35 145 Z" custom={2.0} variants={drawPathVariants} />
        <motion.path d="M 45 130 L 45 95 L 65 95 L 65 130" custom={2.2} variants={drawPathVariants} />
        {/* Device 2 */}
        <motion.path d="M 130 130 L 160 130 L 165 145 L 125 145 Z" custom={2.0} variants={drawPathVariants} />
        <motion.path d="M 135 130 L 135 95 L 155 95 L 155 130" custom={2.2} variants={drawPathVariants} />
        {/* Connecting dotted/sketch line */}
        <motion.path d="M 70 110 C 90 90, 110 130, 130 110" custom={2.5} variants={drawPathVariants} />
        {/* Floating files (rectangles) */}
        <motion.path d="M 85 85 L 95 85 L 95 98 L 85 98 Z" custom={2.1} variants={drawPathVariants} />
        <motion.path d="M 105 115 L 115 115 L 115 128 L 105 128 Z" custom={2.3} variants={drawPathVariants} />
      </svg>
    ),
  },
  {
    id: "project-deception",
    num: "02.",
    name: "Agent Deception Lab",
    date: "MAR 2026",
    tech: "Python · PyTorch · RL",
    desc: "A simulation environment exploring RL agent behavior. Models how autonomous agents develop deceptive strategies to maximize rewards in collaborative scenarios, offering visual diagnostic run data.",
    link: "https://github.com/adhikaryrachana00428-hash/Agent-deception-lab",
    linkLabel: "→ GitHub",
    // SVG Illustration: sketch of two simplified robot faces, one hiding something behind its back
    svg: (
      <svg viewBox="0 0 200 200" className="w-full h-full stroke-current fill-none text-[#F5F5F0]" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Robot Face 1 */}
        <motion.path d="M 30 70 L 75 70 L 75 110 L 30 110 Z" custom={2.2} variants={drawPathVariants} />
        <motion.path d="M 40 85 C 40 80, 48 80, 48 85 M 57 85 C 57 80, 65 80, 65 85" custom={1.8} variants={drawPathVariants} />
        <motion.path d="M 45 98 L 60 98" custom={1.5} variants={drawPathVariants} />
        {/* Antenna */}
        <motion.path d="M 52 70 L 52 55 M 49 55 A 3 3 0 1 1 55 55" custom={2.0} variants={drawPathVariants} />

        {/* Robot Face 2 (hiding) */}
        <motion.path d="M 120 75 L 165 75 L 165 115 L 120 115 Z" custom={2.4} variants={drawPathVariants} />
        <motion.path d="M 130 90 C 130 85, 138 85, 138 90 M 147 90 C 147 85, 155 85, 155 90" custom={1.8} variants={drawPathVariants} />
        <motion.path d="M 135 102 C 140 105, 150 105, 155 102" custom={1.5} variants={drawPathVariants} />
        {/* Antenna */}
        <motion.path d="M 142 75 L 142 60 M 139 60 A 3 3 0 1 1 145 60" custom={2.0} variants={drawPathVariants} />
        {/* Hiding hand / item behind */}
        <motion.path d="M 165 100 Q 180 100, 185 95 M 180 85 L 188 95 L 178 105" custom={2.5} variants={drawPathVariants} />
      </svg>
    ),
  },
  {
    id: "project-prompt",
    num: "03.",
    name: "Prompt Verification",
    date: "MAR 2026",
    tech: "Next.js · TypeScript · LLM",
    desc: "An automated testbed designed to verify input constraints on LLM instances. Validates instructions and detects adversarial drift using real-time structural schema compliance tracking.",
    link: "https://github.com/adhikaryrachana00428-hash/Prompt-verification",
    linkLabel: "→ GitHub",
    // SVG Illustration: sketch of a magnifying glass over text lines
    svg: (
      <svg viewBox="0 0 200 200" className="w-full h-full stroke-current fill-none text-[#F5F5F0]" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Text Lines */}
        <motion.path d="M 40 50 L 160 50" custom={1.2} variants={drawPathVariants} />
        <motion.path d="M 40 75 L 140 75" custom={1.4} variants={drawPathVariants} />
        <motion.path d="M 40 100 L 150 100" custom={1.6} variants={drawPathVariants} />
        <motion.path d="M 40 125 L 110 125" custom={1.8} variants={drawPathVariants} />
        {/* Magnifying Glass */}
        <motion.path d="M 125 100 A 25 25 0 1 1 75 100 A 25 25 0 1 1 125 100" custom={2.2} variants={drawPathVariants} />
        <motion.path d="M 115 118 L 145 148" custom={2.5} variants={drawPathVariants} />
      </svg>
    ),
  },
  {
    id: "project-code",
    num: "04.",
    name: "Code Analyzer",
    date: "MAR 2026",
    tech: "Rust · Tree-sitter · AST",
    desc: "A source code complexity scanner that parses source files into Abstract Syntax Trees. Identifies hot paths, deep nesting structures, and cognitive overhead loops using custom parser targets.",
    link: "https://github.com/adhikaryrachana00428-hash/Code-Analyzer-",
    linkLabel: "→ GitHub",
    // SVG Illustration: sketch of branching tree/AST nodes
    svg: (
      <svg viewBox="0 0 200 200" className="w-full h-full stroke-current fill-none text-[#F5F5F0]" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Tree Roots/Branches */}
        {/* Root Node */}
        <motion.path d="M 100 40 A 10 10 0 1 1 80 40 A 10 10 0 1 1 100 40" custom={1.5} variants={drawPathVariants} />
        {/* Branch Left */}
        <motion.path d="M 90 50 L 60 90" custom={1.8} variants={drawPathVariants} />
        {/* Branch Right */}
        <motion.path d="M 90 50 L 140 90" custom={1.8} variants={drawPathVariants} />
        {/* Left Child Node */}
        <motion.path d="M 70 100 A 10 10 0 1 1 50 100 A 10 10 0 1 1 70 100" custom={2.0} variants={drawPathVariants} />
        {/* Right Child Node */}
        <motion.path d="M 150 100 A 10 10 0 1 1 130 100 A 10 10 0 1 1 150 100" custom={2.0} variants={drawPathVariants} />
        {/* Sub-Branches */}
        <motion.path d="M 60 110 L 40 145" custom={2.2} variants={drawPathVariants} />
        <motion.path d="M 60 110 L 80 145" custom={2.2} variants={drawPathVariants} />
        {/* Sub-Branch Nodes */}
        <motion.path d="M 50 155 A 8 8 0 1 1 34 155 A 8 8 0 1 1 50 155" custom={2.5} variants={drawPathVariants} />
        <motion.path d="M 90 155 A 8 8 0 1 1 74 155 A 8 8 0 1 1 90 155" custom={2.5} variants={drawPathVariants} />
      </svg>
    ),
  },
  {
    id: "project-none",
    num: "05.",
    name: "And Then There Were None",
    date: "FEB 2026",
    tech: "Rust · Ggez · GameDev",
    desc: "A retro atmospheric 2D survival game built for a 24-hour game jam. Employs light casting and pixelated shadows to explore mystery and survival under extreme environments.",
    link: "https://github.com/adhikaryrachana00428-hash/Campfire-gameJam",
    linkLabel: "→ GitHub",
    demoLink: "https://adhikaryrachana00428-hash.itch.io/and-then-there-were-none",
    demoLinkLabel: "→ Play Demo",
    // SVG Illustration: sketch of a candle, a clock, stormy window
    svg: (
      <svg viewBox="0 0 200 200" className="w-full h-full stroke-current fill-none text-[#F5F5F0]" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Candle */}
        <motion.path d="M 50 150 L 70 150 L 70 100 L 50 100 Z" custom={2.0} variants={drawPathVariants} />
        {/* Candle Flame */}
        <motion.path d="M 60 100 C 55 90, 60 80, 60 75 C 60 80, 65 90, 60 100" custom={2.2} variants={drawPathVariants} />
        
        {/* Clock */}
        <motion.path d="M 140 100 A 25 25 0 1 1 90 100 A 25 25 0 1 1 140 100" custom={2.3} variants={drawPathVariants} />
        {/* Hands */}
        <motion.path d="M 115 100 L 115 88 M 115 100 L 128 105" custom={2.5} variants={drawPathVariants} />

        {/* Stormy Window Outline */}
        <motion.path d="M 90 25 L 140 25 L 140 65 L 90 65 Z" custom={1.8} variants={drawPathVariants} />
        {/* Window Cross */}
        <motion.path d="M 115 25 L 115 65 M 90 45 L 140 45" custom={2.0} variants={drawPathVariants} />
        {/* Rain lines */}
        <motion.path d="M 95 30 L 90 40 M 125 30 L 120 40 M 105 50 L 100 60 M 130 50 L 125 60" custom={2.2} variants={drawPathVariants} />
      </svg>
    ),
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full bg-[#0A0A0A] relative z-10 border-t border-[#1C1C1C]">
      {PROJECTS.map((project, index) => {
        const isOdd = index % 2 === 0;

        return (
          <div
            key={project.id}
            id={project.id}
            className="min-h-screen w-full flex items-center justify-center p-6 md:p-12 border-b border-[#1C1C1C]/40 last:border-b-0 py-16 md:py-24"
          >
            <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
              {/* Illustration (Left side on odd, Right side on even) */}
              <div className={`w-full max-w-[280px] md:max-w-md mx-auto aspect-square flex items-center justify-center ${isOdd ? "order-1" : "order-1 md:order-2"}`}>
                <SelfDrawingSVG className="w-full h-full" duration={2.8}>
                  {project.svg}
                </SelfDrawingSVG>
              </div>

              {/* Content (Right side on odd, Left side on even) */}
              <div className={`flex flex-col space-y-6 max-w-xl ${isOdd ? "order-2" : "order-2 md:order-1"}`}>
                {/* Project index & Name */}
                <div className="flex flex-col space-y-1">
                  <span className="font-display text-[8vw] md:text-[5vw] text-accent leading-none">
                    {project.num}
                  </span>
                  <h3 className="font-display text-4xl md:text-5xl text-[#F5F5F0] leading-tight">
                    {project.name}
                  </h3>
                </div>

                {/* Date / Month */}
                <span className="font-mono text-[10px] md:text-xs tracking-wider text-[#F5F5F0]/50">
                  {project.date}
                </span>

                {/* Project Description */}
                <p className="font-body text-base md:text-lg leading-[1.8] text-[#F5F5F0]/85">
                  {project.desc}
                </p>

                {/* GitHub/GitLab & Demo Links with custom hover underlines */}
                <div className="pt-2 flex flex-wrap gap-x-6 gap-y-4 items-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex flex-col font-display text-2xl text-[#F5F5F0] hover:text-accent transition-colors duration-300"
                  >
                    <span>{project.linkLabel}</span>
                    <span className="absolute -bottom-2 left-0 right-0 h-[6px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg
                        className="w-full h-full stroke-current text-accent"
                        viewBox="0 0 100 10"
                        preserveAspectRatio="none"
                        fill="none"
                      >
                        <path
                          d="M 0 5 Q 25 8, 50 5 T 100 5"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </a>

                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex flex-col font-display text-2xl text-accent hover:text-[#F5F5F0] transition-colors duration-300"
                    >
                      <span>{project.demoLinkLabel}</span>
                      <span className="absolute -bottom-2 left-0 right-0 h-[6px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg
                          className="w-full h-full stroke-current text-[#F5F5F0]"
                          viewBox="0 0 100 10"
                          preserveAspectRatio="none"
                          fill="none"
                        >
                          <path
                            d="M 0 5 Q 25 8, 50 5 T 100 5"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
