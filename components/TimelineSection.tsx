"use client";

import { motion, Variants } from "framer-motion";
import SelfDrawingSVG, { drawPathVariants } from "./SelfDrawingSVG";

const TIMELINE_EVENTS = [
  { date: "2021", desc: "Class X" },
  { date: "2023", desc: "Class XII" },
  { date: "Sept 2025", desc: "Smart India Hackathon" },
  { date: "Dec 2025", desc: "CodeDay Bengaluru (12hr)" },
  { date: "Feb 2026", desc: "And Then There Were None (24hr jam)" },
  { date: "Mar 2026", desc: "Code Analyzer · Agent Lab · Prompt Verification" },
  { date: "May 2026", desc: "Teleport · SSoC · GSSoC" },
];

export default function TimelineSection() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="timeline"
      className="w-full min-h-screen flex items-center bg-[#0A0A0A] p-6 md:p-12 border-t border-[#1C1C1C] relative z-10"
    >
      <div className="max-w-4xl w-full mx-auto flex flex-col space-y-12">
        {/* Title */}
        <div className="flex items-baseline space-x-2">
          <span className="font-display text-[8vw] md:text-[5vw] text-accent leading-none">
            03.
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-[#F5F5F0]">
            tHE JOURNeY
          </h2>
        </div>

        {/* Timeline Items */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col space-y-8 md:space-y-10 pl-2"
        >
          {TIMELINE_EVENTS.map((event, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="flex flex-col sm:flex-row sm:items-center text-left"
            >
              {/* Date */}
              <span className="font-mono text-xs md:text-sm tracking-widest text-[#F5F5F0]/60 w-28 shrink-0">
                {event.date}
              </span>

              {/* Separator Line (Animated) */}
              <div className="w-16 h-6 shrink-0 hidden sm:flex items-center mx-4 overflow-hidden">
                <SelfDrawingSVG duration={1.2} delay={0.0}>
                  <svg
                    viewBox="0 0 60 10"
                    className="w-full h-full stroke-current fill-none text-accent"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  >
                    <motion.path
                      d="M 0 5 L 60 5"
                      variants={drawPathVariants}
                    />
                  </svg>
                </SelfDrawingSVG>
              </div>

              {/* Event Description */}
              <span className="font-body text-lg md:text-xl italic text-[#F5F5F0] hover:text-accent transition-colors duration-300">
                {event.desc}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
