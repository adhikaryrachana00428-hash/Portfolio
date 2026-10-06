"use client";

import React from "react";
import { PROJECTS_LIST } from "./ProjectsFolderView";

interface ProjectDetailViewProps {
  projectId: string;
}

export default function ProjectDetailView({ projectId }: ProjectDetailViewProps) {
  const project = PROJECTS_LIST.find((p) => `project-${p.id}` === projectId || p.id === projectId);

  if (!project) {
    return <div className="p-8 text-center font-mono text-black">Project not found.</div>;
  }

  return (
    <div className="w-full h-full bg-[#c0c0c0] text-black font-sans text-xs flex flex-col p-3 sm:p-4 overflow-auto">
      {/* Tab-like header decoration */}
      <div className="flex border-b border-[#808080] select-none mb-3 shrink-0">
        <div className="bg-[#c0c0c0] px-3 sm:px-4 py-1 sm:py-1.5 border-t border-l border-r border-white font-bold relative top-[1px] z-10 text-[11px] sm:text-xs">
          General Details
        </div>
        <div className="px-3 sm:px-4 py-1 sm:py-1.5 text-gray-500 border-b border-transparent text-[11px] sm:text-xs">
          System Info
        </div>
      </div>

      {/* Main Form Fields */}
      <div className="flex-1 flex flex-col space-y-3 min-h-0">
        {/* Name Field */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
          <span className="w-24 font-bold text-gray-700 shrink-0 text-[11px] sm:text-xs">Project Name:</span>
          <div className="flex-1 bg-white border border-[#808080] win95-sunken px-2 py-1 font-bold text-[11px] sm:text-xs truncate">
            {project.name}
          </div>
        </div>

        {/* Date / Tech Field */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
            <span className="w-24 font-bold text-gray-700 shrink-0 text-[11px] sm:text-xs">Created:</span>
            <div className="flex-1 bg-white border border-[#808080] win95-sunken px-2 py-1 text-[11px] sm:text-xs">
              {project.date}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
            <span className="w-24 font-bold text-gray-700 shrink-0 text-[11px] sm:text-xs">Tech Stack:</span>
            <div className="flex-1 bg-white border border-[#808080] win95-sunken px-2 py-1 font-mono text-[10px] break-words">
              {project.tech}
            </div>
          </div>
        </div>

        {/* Description Field (Scrollable white text area) */}
        <div className="flex-1 flex flex-col min-h-[100px]">
          <span className="font-bold text-gray-700 mb-1 text-[11px] sm:text-xs">Description:</span>
          <div className="flex-1 bg-white border border-[#808080] win95-sunken p-2.5 sm:p-3 overflow-auto font-mono text-[10px] sm:text-[11px] leading-relaxed whitespace-pre-wrap break-words select-text text-black">
            {project.desc}
          </div>
        </div>
      </div>

      {/* Action Buttons (Raised Bevels) */}
      <div className="mt-3 pt-2.5 border-t border-[#808080] flex flex-wrap justify-end gap-2 shrink-0 select-none">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="win95-button px-4 py-1.5 min-w-[75px] text-center font-bold flex items-center justify-center cursor-pointer touch-manipulation text-[11px] sm:text-xs"
        >
          {project.linkLabel.replace("→ ", "")}
        </a>

        {project.demoLink && (
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="win95-button px-4 py-1.5 min-w-[75px] text-center font-bold flex items-center justify-center cursor-pointer touch-manipulation text-[11px] sm:text-xs"
          >
            {project.demoLinkLabel.replace("→ ", "")}
          </a>
        )}
      </div>
    </div>
  );
}
