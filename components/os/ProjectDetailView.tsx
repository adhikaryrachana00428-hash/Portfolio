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
    <div className="w-full h-full bg-[#c0c0c0] text-black font-sans text-xs flex flex-col p-4">
      {/* Tab-like header decoration */}
      <div className="flex border-b border-[#808080] select-none mb-4">
        <div className="bg-[#c0c0c0] px-4 py-1.5 border-t border-l border-r border-white font-bold relative top-[1px] z-10">
          General Details
        </div>
        <div className="px-4 py-1.5 text-gray-500 border-b border-transparent">
          System Info
        </div>
      </div>

      {/* Main Form Fields */}
      <div className="flex-1 flex flex-col space-y-4">
        {/* Name Field */}
        <div className="flex items-center space-x-2">
          <span className="w-20 font-bold text-gray-700">Project Name:</span>
          <div className="flex-1 bg-white border border-[#808080] win95-sunken px-2 py-1 font-bold">
            {project.name}
          </div>
        </div>

        {/* Date / Tech Field */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <span className="w-20 font-bold text-gray-700">Created:</span>
            <div className="flex-1 bg-white border border-[#808080] win95-sunken px-2 py-1">
              {project.date}
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-20 font-bold text-gray-700">Tech Stack:</span>
            <div className="flex-1 bg-white border border-[#808080] win95-sunken px-2 py-1 font-mono text-[10px]">
              {project.tech}
            </div>
          </div>
        </div>

        {/* Description Field (Scrollable white text area) */}
        <div className="flex-1 flex flex-col">
          <span className="font-bold text-gray-700 mb-1">Description:</span>
          <div className="flex-1 bg-white border border-[#808080] win95-sunken p-3 overflow-auto font-mono text-[11px] leading-relaxed whitespace-pre-wrap select-text text-black">
            {project.desc}
          </div>
        </div>
      </div>

      {/* Action Buttons (Raised Bevels) */}
      <div className="mt-4 pt-3 border-t border-[#808080] flex justify-end space-x-3 select-none">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="win95-button px-4 py-1.5 min-w-[80px] text-center font-bold flex items-center justify-center cursor-pointer"
        >
          {project.linkLabel.replace("→ ", "")}
        </a>

        {project.demoLink && (
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="win95-button px-4 py-1.5 min-w-[80px] text-center font-bold flex items-center justify-center cursor-pointer"
          >
            {project.demoLinkLabel.replace("→ ", "")}
          </a>
        )}
      </div>
    </div>
  );
}
