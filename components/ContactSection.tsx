"use client";

import { motion } from "framer-motion";
import SelfDrawingSVG, { drawPathVariants } from "./SelfDrawingSVG";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full min-h-screen flex flex-col justify-between p-6 md:p-12 bg-[#0A0A0A] border-t border-[#1C1C1C] relative z-10 select-none"
    >
      {/* Spacer */}
      <div />

      <div className="max-w-5xl w-full mx-auto grid grid-cols-1 md:grid-cols-[55%_45%] gap-12 items-center my-auto">
        {/* Left Side: Text and links */}
        <div className="flex flex-col space-y-8">
          {/* Main Title */}
          <div className="flex flex-col font-display text-[10vw] md:text-[8vw] leading-[1.1] text-[#F5F5F0]">
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {"Let's build"}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="pl-6 md:pl-10 text-accent"
            >
              something.
            </motion.span>
          </div>

          {/* Email / Phone */}
          <div className="flex flex-col space-y-2 font-body text-lg md:text-xl text-[#F5F5F0]/85">
            <a
              href="mailto:adhikaryrachana00428@gmail.com"
              className="hover:text-accent transition-colors duration-300 w-fit"
            >
              adhikaryrachana00428@gmail.com
            </a>
            <a
              href="tel:+916295248578"
              className="hover:text-accent transition-colors duration-300 w-fit"
            >
              +91 6295248578
            </a>
          </div>

          {/* Social Icons (GitHub, LinkedIn) */}
          <div className="flex items-center space-x-6 pt-2">
            {/* GitHub */}
            <a
              href="https://github.com/rachanaadhikary"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F5F5F0] hover:text-accent transition-colors duration-300"
              aria-label="GitHub Profile"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-7 h-7 fill-current"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/rachanaadhikary"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F5F5F0] hover:text-accent transition-colors duration-300"
              aria-label="LinkedIn Profile"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-7 h-7 fill-current"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Side: Closing Hand Sketch */}
        <div className="w-full max-w-[280px] md:max-w-sm mx-auto aspect-square flex items-center justify-center">
          <SelfDrawingSVG className="w-full h-full" delay={0.3}>
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full stroke-current fill-none text-[#F5F5F0]"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Hand holding a pen drawing */}
              {/* Hand contour */}
              <motion.path
                d="M 40 140 C 45 130, 60 110, 80 110 C 95 110, 100 120, 105 130 C 110 140, 130 150, 150 145 C 160 140, 170 120, 165 100"
                custom={3.2}
                variants={drawPathVariants}
              />
              {/* Fingers */}
              <motion.path
                d="M 80 110 C 78 95, 90 85, 105 90 C 115 95, 110 110, 105 120 M 98 90 C 98 75, 110 70, 120 80 C 128 90, 120 105, 112 110"
                custom={3.5}
                variants={drawPathVariants}
              />
              {/* Pen */}
              <motion.path
                d="M 65 150 L 140 50 M 65 150 L 60 155 L 70 152 L 65 150"
                custom={2.8}
                variants={drawPathVariants}
              />
            </svg>
          </SelfDrawingSVG>
        </div>
      </div>

      {/* Footer Signature */}
      <div className="w-full text-center pt-8 border-t border-[#1C1C1C]/40">
        <span className="font-mono text-[10px] md:text-xs tracking-widest text-[#F5F5F0]/40">
          Rachana Adhikary · 2026 · Bengaluru, India
        </span>
      </div>
    </section>
  );
}
