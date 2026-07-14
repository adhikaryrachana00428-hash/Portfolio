"use client";

import React from "react";
import { useThemeOS } from "./ThemeController";
import DesktopWindow from "./DesktopWindow";
import AboutMeWindowContent from "./AboutMeWindowContent";
import SkillsSection from "@/components/SkillsSection";
import TimelineSection from "@/components/TimelineSection";
import OpenSourceSection from "@/components/OpenSourceSection";
import ContactSection from "@/components/ContactSection";
import ProjectsFolderView from "./ProjectsFolderView";
import ProjectDetailView from "./ProjectDetailView";
import VideoPlayerWindow from "./VideoPlayerWindow";

export default function WindowManager() {
  const { activeWindows } = useThemeOS();

  return (
    <>
      {activeWindows.map((win) => {
        // Only render open windows
        if (!win.isOpen || win.isMinimized) return null;

        // Render appropriate content based on ID
        let content: React.ReactNode = null;

        if (win.id === "about") {
          content = <AboutMeWindowContent />;
        } else if (win.id === "skills") {
          content = <SkillsSection />;
        } else if (win.id === "timeline") {
          content = <TimelineSection />;
        } else if (win.id === "open-source") {
          content = <OpenSourceSection />;
        } else if (win.id === "contact") {
          content = <ContactSection />;
        } else if (win.id === "projects") {
          content = <ProjectsFolderView />;
        } else if (win.id === "me-video") {
          content = <VideoPlayerWindow />;
        } else if (win.id.startsWith("project-")) {
          content = <ProjectDetailView projectId={win.id} />;
        }

        // Determine padding, background, and scrolling style depending on window type
        let bodyClass = "w-full h-full min-h-0 overflow-auto text-black ";
        if (win.id === "about" || win.id === "timeline" || win.id === "open-source") {
          // Notepad documents: white background, black text, sunken border
          bodyClass += "bg-white win95-sunken p-6 font-mono select-text";
        } else if (win.id === "projects" || win.id.startsWith("project-")) {
          // Windows Explorer panels: white background, sunken border
          bodyClass += "bg-white win95-sunken select-none";
        } else {
          // Standard properties dialog box or custom controls: gray background
          bodyClass += "bg-[#c0c0c0] p-4 select-none";
        }

        return (
          <DesktopWindow key={win.id} windowState={win}>
            <div className={bodyClass}>{content}</div>
          </DesktopWindow>
        );
      })}
    </>
  );
}
