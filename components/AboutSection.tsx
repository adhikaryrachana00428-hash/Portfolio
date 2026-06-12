"use client";

import { motion, Variants } from "framer-motion";
import SelfDrawingSVG, { drawPathVariants } from "./SelfDrawingSVG";

export default function AboutSection() {
  const paragraphVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="w-full min-h-screen flex items-center bg-[#0A0A0A] p-6 md:p-12 border-t border-[#1C1C1C] relative z-10 overflow-hidden"
    >
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-[35%_65%] gap-8 md:gap-16 items-start relative">
        {/* Left Column (Narrower) */}
        <div className="flex flex-col space-y-6 relative">
          <div className="flex items-baseline space-x-2">
            <span className="font-display text-[8vw] md:text-[6vw] text-accent leading-none">
              01.
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-[#F5F5F0]">
              about me
            </h2>
          </div>

          {/* SVG Sketch: Laptop with plant */}
          <div className="w-full max-w-[200px] md:max-w-xs aspect-square">
            <SelfDrawingSVG>
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full stroke-current fill-none text-[#F5F5F0]"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Plant Pot */}
                <motion.path
                  d="M 40 160 L 60 160 L 55 180 L 45 180 Z"
                  custom={1.8}
                  variants={drawPathVariants}
                />
                {/* Leaves */}
                <motion.path
                  d="M 50 160 Q 35 140, 40 120 Q 55 130, 50 160"
                  custom={2.0}
                  variants={drawPathVariants}
                />
                <motion.path
                  d="M 50 160 Q 65 145, 70 125 Q 55 135, 50 160"
                  custom={2.2}
                  variants={drawPathVariants}
                />
                <motion.path
                  d="M 50 160 Q 25 155, 20 145 Q 35 155, 50 160"
                  custom={2.1}
                  variants={drawPathVariants}
                />

                {/* Laptop Base */}
                <motion.path
                  d="M 70 170 L 170 170 L 180 180 L 60 180 Z"
                  custom={2.3}
                  variants={drawPathVariants}
                />
                {/* Laptop Screen */}
                <motion.path
                  d="M 80 170 L 80 110 L 160 110 L 160 170"
                  custom={2.5}
                  variants={drawPathVariants}
                />
                {/* Keyboard Lines (loose sketch details) */}
                <motion.path
                  d="M 75 175 L 165 175"
                  custom={1.5}
                  variants={drawPathVariants}
                />
              </svg>
            </SelfDrawingSVG>
          </div>

          {/* Small hand-drawn flower near laptop */}
          <div className="absolute right-0 bottom-[-40px] w-20 h-20 opacity-30 pointer-events-none">
            <SelfDrawingSVG duration={2.0} delay={0.8}>
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full stroke-current fill-none text-[#F5F5F0]"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <motion.path d="M 50 80 Q 45 50, 50 30" variants={drawPathVariants} />
                <motion.path d="M 50 30 A 10 10 0 1 1 50 10 A 10 10 0 1 1 50 30" variants={drawPathVariants} />
                <motion.path d="M 40 50 Q 25 45, 45 40" variants={drawPathVariants} />
              </svg>
            </SelfDrawingSVG>
          </div>
        </div>

        {/* Right Column (Wider, text) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.2 }}
          className="flex flex-col space-y-8 max-w-xl font-body text-base md:text-[18px] leading-[1.8] text-[#F5F5F0]/90 z-10"
        >
          <motion.p variants={paragraphVariants}>
            {"I'm Rachana — a first-year Computer Science student at "}
            <span className="text-[#F5F5F0] font-semibold">
              SVYASA Newton School of Technology, Bengaluru
            </span>
            . I have been building things ever since I discovered the power of code.
          </motion.p>
          <motion.p variants={paragraphVariants}>
            {"I have just begun my journey exploring the intersections of AI safety, systems programming, and open source. I've simulated how AI agents learn to deceive in simple models, built cross-platform file utilities in "}
            <span className="text-accent italic">Rust</span>, and contributed to
            open source projects through GSSoC and SSoC.
          </motion.p>
          <motion.p variants={paragraphVariants} className="italic text-accent">
            I believe the best code solves a real problem simply.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
