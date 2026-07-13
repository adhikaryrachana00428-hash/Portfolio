"use client";

import React from "react";
import { PROJECTS_LIST } from "./ProjectsFolderView";

interface ProjectDetailViewProps {
  projectId: string;
}

export default function ProjectDetailView({ projectId }: ProjectDetailViewProps) {
  const project = PROJECTS_LIST.find((p) => `project-${p.id}` === projectId || p.id === projectId);

  if (!project) {
    return <div className="p-8 text-center font-mono">Project not found.</div>;
  }

  return (
    <div 
      className="relative w-full min-h-full flex flex-col p-6 md:p-8 bg-cover bg-center select-text"
      style={{
        backgroundImage: "url('/assets/images/create_ghibli_image_cute_2k.jpg')",
      }}
    >
      {/* Heavy dark/warm watercolor overlay to ensure perfect contrast & readability */}
      <div className="absolute inset-0 bg-[#161614]/85 mix-blend-multiply z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#1C1A17]/95 via-[#161614]/90 to-[#1C1A17]/95 z-0 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-between h-full space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-6 items-start">
          
          {/* Left Column: Title & Text */}
          <div className="flex flex-col space-y-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#C8B89A]/85">
                {project.date}
              </span>
              <h3 className="font-display text-4xl text-[#F5F5F0] leading-tight mt-1">
                {project.name}
              </h3>
              <p className="font-mono text-[11px] tracking-wide text-[#C8B89A] mt-1.5 uppercase">
                {project.tech}
              </p>
            </div>

            <p className="font-body text-base md:text-lg leading-relaxed text-[#F5F5F0]/90">
              {project.desc}
            </p>
          </div>

          {/* Right Column: Illustration drawing */}
          <div className="w-full aspect-square max-w-[160px] mx-auto md:max-w-none flex items-center justify-center border border-[#C8B89A]/15 bg-[#1E1E1C]/40 rounded-xl p-4 shadow-inner">
            <div className="w-full h-full text-[#C8B89A] opacity-80 hover:opacity-100 transition-opacity duration-300">
              {project.svg}
            </div>
          </div>
        </div>

        {/* Links Footer */}
        <div className="pt-6 border-t border-[#C8B89A]/15 flex flex-wrap gap-4 items-center">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-xl text-[#F5F5F0] hover:text-accent border-b border-dashed border-[#F5F5F0]/40 hover:border-accent transition-colors duration-300 pb-0.5"
          >
            {project.linkLabel}
          </a>

          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-xl text-accent hover:text-[#F5F5F0] border-b border-dashed border-accent/40 hover:border-[#F5F5F0]/60 transition-colors duration-300 pb-0.5"
            >
              {project.demoLinkLabel}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
