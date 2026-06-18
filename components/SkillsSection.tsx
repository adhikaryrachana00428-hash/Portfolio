"use client";

import { motion } from "framer-motion";
import SelfDrawingSVG, { drawPathVariants } from "./SelfDrawingSVG";

export default function SkillsSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="skills"
      className="w-full min-h-screen flex items-center bg-[#0A0A0A] p-6 md:p-12 border-t border-[#1C1C1C] relative z-10"
    >
      <div className="max-w-5xl w-full mx-auto flex flex-col space-y-12 relative">
        {/* Sketchy Flower in the top corner of skills */}
        <div className="absolute right-0 top-0 w-24 h-24 pointer-events-none opacity-30 hidden md:block">
          <SelfDrawingSVG duration={2.5}>
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full stroke-current fill-none text-[#F5F5F0]"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <motion.path d="M 50 90 Q 55 60, 50 25" variants={drawPathVariants} />
              <motion.path d="M 50 25 C 40 15, 30 30, 50 25 M 50 25 C 60 15, 70 30, 50 25" variants={drawPathVariants} />
              <motion.path d="M 47 60 Q 30 55, 45 45" variants={drawPathVariants} />
            </svg>
          </SelfDrawingSVG>
        </div>

        {/* Section Title */}
        <div className="flex items-baseline space-x-2">
          <span className="font-display text-[8vw] md:text-[5vw] text-accent leading-none">
            02.
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-[#F5F5F0]">
            sKiLLS
          </h2>
        </div>

        {/* Two Column Layout of Skills Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 pl-2"
        >
          {/* Column 1 */}
          <div className="flex flex-col space-y-8">
            {/* Languages */}
            <motion.div variants={itemVariants} className="flex flex-col space-y-2">
              <span className="font-mono text-xs md:text-sm tracking-widest text-[#C8B89A] uppercase">
                [ languages ]
              </span>
              <span className="font-body text-xl md:text-2xl text-[#F5F5F0]/90">
                HTML, Python, CSS, JavaScript
              </span>
            </motion.div>

            {/* Frameworks & Libraries */}
            <motion.div variants={itemVariants} className="flex flex-col space-y-2">
              <span className="font-mono text-xs md:text-sm tracking-widest text-[#C8B89A] uppercase">
                [ Frameworks & Libraries ]
              </span>
              <span className="font-body text-xl md:text-2xl text-[#F5F5F0]/90">
                Tailwind, React, Framer Motion, Django
              </span>
            </motion.div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col space-y-8">
            {/* Cloud & DevOps */}
            <motion.div variants={itemVariants} className="flex flex-col space-y-2">
              <span className="font-mono text-xs md:text-sm tracking-widest text-[#C8B89A] uppercase">
                [ Cloud & DevOps ]
              </span>
              <span className="font-body text-xl md:text-2xl text-[#F5F5F0]/90">
                Git and GitHub, Docker
              </span>
            </motion.div>

            {/* Soft Skills */}
            <motion.div variants={itemVariants} className="flex flex-col space-y-2">
              <span className="font-mono text-xs md:text-sm tracking-widest text-[#C8B89A] uppercase">
                [ Soft Skills ]
              </span>
              <span className="font-body text-lg md:text-xl text-[#F5F5F0]/95 leading-relaxed">
                Public Speaking, Decision-making, Research, Critical Thinking, Responsibility, Problem-solving, Presentation Skills, Communication Skills
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Divider: Wavy SVG line */}
        <div className="w-full py-4 opacity-50">
          <SelfDrawingSVG duration={1.5}>
            <svg
              viewBox="0 0 800 20"
              className="w-full h-auto stroke-current fill-none text-[#F5F5F0]/30"
              strokeWidth="1.5"
              strokeLinecap="round"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M 0 10 Q 50 18, 100 10 T 200 10 T 300 10 T 400 10 T 500 10 T 600 10 T 700 10 T 800 10"
                variants={drawPathVariants}
              />
            </svg>
          </SelfDrawingSVG>
        </div>
      </div>
    </section>
  );
}
