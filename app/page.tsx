"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ContentsSection from "@/components/ContentsSection";
import ProjectsSection from "@/components/ProjectsSection";
import OpenSourceSection from "@/components/OpenSourceSection";
import TimelineSection from "@/components/TimelineSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Loading Overlay */}
      <LoadingScreen />

      {/* Floating Navbar */}
      <Navbar />

      {/* Top Bookmark Ribbon Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[1.5px] bg-[#F5F5F0] origin-[0%] z-50 pointer-events-none"
        style={{ scaleX }}
      />

      <main className="w-full flex flex-col relative">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ContentsSection />
        <ProjectsSection />
        <OpenSourceSection />
        <TimelineSection />
        <ContactSection />
      </main>
    </>
  );
}
