"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SelfDrawingSVG, { drawPathVariants } from "./SelfDrawingSVG";

export default function HeroSection() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setTime(new Intl.DateTimeFormat("en-IN", options).format(now));
    };

    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between p-6 md:p-12 bg-[#0A0A0A] overflow-hidden select-none">
      {/* Top Layout */}
      <div className="flex flex-col md:flex-row justify-between items-start w-full z-10 pt-4">
        {/* Title */}
        <div className="flex flex-col">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="font-display text-[14vw] md:text-[12vw] leading-none text-[#F5F5F0] select-none"
            style={{ letterSpacing: "-0.02em" }}
          >
            pORTFOLiO
          </motion.h1>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="font-body text-xs md:text-sm tracking-[0.2em] uppercase text-[#F5F5F0] mt-2 pl-2"
          >
            RACHANA ADHIKARY
          </motion.span>
        </div>
      </div>

      {/* Large Sketch Portrait (Right side / Center overlay on mobile) */}
      <div className="absolute right-0 bottom-0 w-[85%] md:w-[60%] h-[70vh] md:h-[90vh] flex items-end justify-end pointer-events-none z-0">
        <SelfDrawingSVG className="w-full h-full opacity-75 mr-[-5vw]" duration={3.5} delay={0.5}>
          <svg
            viewBox="0 0 500 600"
            className="w-full h-full stroke-current fill-none text-[#F5F5F0]"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Expressive single continuous line face illustration of Rachana */}
            {/* Outline of hair & face */}
            <motion.path
              d="M 120 450 
                 C 100 400, 80 300, 90 200 
                 C 100 100, 200 50, 320 60 
                 C 400 70, 430 150, 420 250 
                 C 410 320, 390 380, 380 450"
              custom={3.2}
              variants={drawPathVariants}
            />
            {/* Inner head & hair contours */}
            <motion.path
              d="M 160 210 
                 C 150 140, 210 110, 280 120 
                 C 340 130, 380 170, 360 260 
                 C 350 300, 370 330, 360 360 
                 C 350 390, 320 410, 300 420"
              custom={3.5}
              variants={drawPathVariants}
            />
            {/* Glasses */}
            <motion.path
              d="M 190 215 
                 C 210 200, 240 200, 250 215 
                 C 255 215, 275 200, 295 215 
                 M 190 215 
                 C 185 235, 220 250, 245 220 
                 M 252 220 
                 C 260 250, 295 235, 295 215"
              custom={2.8}
              variants={drawPathVariants}
            />
            {/* Eyes */}
            <motion.path
              d="M 210 222 C 215 218, 225 218, 230 222 M 265 222 C 270 218, 280 218, 285 222"
              custom={2.0}
              variants={drawPathVariants}
            />
            {/* Nose */}
            <motion.path
              d="M 248 215 L 246 260 C 246 270, 235 272, 238 277 L 255 275"
              custom={2.5}
              variants={drawPathVariants}
            />
            {/* Mouth */}
            <motion.path
              d="M 225 315 C 235 322, 255 322, 265 315 M 230 315 C 240 312, 250 312, 260 315"
              custom={2.2}
              variants={drawPathVariants}
            />
            {/* Ear & cheek outline */}
            <motion.path
              d="M 160 240 C 150 245, 145 260, 150 270 C 155 280, 160 275, 162 260"
              custom={2.4}
              variants={drawPathVariants}
            />
            {/* Neck & shoulders */}
            <motion.path
              d="M 210 365 C 200 420, 150 440, 100 460 C 50 480, 40 520, 40 590 
                 M 290 365 C 310 420, 360 440, 410 460 C 460 480, 470 520, 470 590"
              custom={3.0}
              variants={drawPathVariants}
            />
            {/* Hand visible drawing lines */}
            <motion.path
              d="M 370 500 
                 C 350 490, 330 500, 320 520 
                 C 310 540, 335 570, 350 580 
                 M 320 520 
                 C 310 510, 290 520, 285 535 
                 C 280 550, 305 570, 315 575"
              custom={3.5}
              variants={drawPathVariants}
            />
          </svg>
        </SelfDrawingSVG>
      </div>

      {/* Hand-drawn Flower decoration on the bottom-left space */}
      <div className="absolute left-8 bottom-24 w-32 h-32 pointer-events-none opacity-40">
        <SelfDrawingSVG duration={3.0}>
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full stroke-current fill-none text-[#F5F5F0]"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Flower stem */}
            <motion.path d="M 50 90 Q 42 60, 50 35" variants={drawPathVariants} />
            {/* Flower petals */}
            <motion.path d="M 50 35 C 42 22, 28 35, 50 35 M 50 35 C 58 22, 72 35, 50 35 M 50 35 C 38 42, 45 55, 50 35 M 50 35 C 62 42, 55 55, 50 35" variants={drawPathVariants} />
            {/* Leaves */}
            <motion.path d="M 46 70 Q 32 60, 47 55 Q 60 62, 48 75" variants={drawPathVariants} />
          </svg>
        </SelfDrawingSVG>
      </div>

      {/* Bottom Layout */}
      <div className="flex justify-between items-end w-full z-10">
        {/* Status / Clock */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1, duration: 1 }}
          className="font-mono text-[10px] md:text-xs tracking-wider text-[#F5F5F0]"
        >
          Bengaluru · IST · {time || "00:00:00"}
        </motion.div>
      </div>
    </section>
  );
}
