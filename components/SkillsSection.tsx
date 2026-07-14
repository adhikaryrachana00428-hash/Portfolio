"use client";

import React from "react";

export default function SkillsSection() {
  const categories = [
    {
      title: "Languages",
      skills: ["HTML", "Python", "CSS", "JavaScript", "Rust"],
    },
    {
      title: "Frameworks & Libraries",
      skills: ["Tailwind CSS", "React", "Next.js", "Framer Motion", "Django"],
    },
    {
      title: "Tools & DevOps",
      skills: ["Git & GitHub", "Docker", "VS Code", "Linux Shell"],
    },
    {
      title: "Professional Skills",
      skills: [
        "Public Speaking",
        "Decision-making",
        "Research",
        "Critical Thinking",
        "Problem-solving",
        "Presentation Skills",
        "Communication Skills",
      ],
    },
  ];

  return (
    <div className="w-full h-full bg-[#c0c0c0] text-black font-sans text-xs flex flex-col p-4 overflow-auto">
      <div className="mb-4">
        <h3 className="font-bold text-sm text-gray-800">Skills Configuration</h3>
        <p className="text-gray-600 mt-1">Configure active skill profiles for Rachana. Checked items represent active capabilities.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
        {categories.map((cat, idx) => (
          <fieldset 
            key={idx}
            className="border-t-2 border-l-2 border-white border-b-2 border-r-2 border-r-[#808080] border-b-[#808080] p-4 relative pt-5 shadow-[inset_1px_1px_0_#808080]"
          >
            <legend className="px-1.5 font-bold text-gray-700 bg-[#c0c0c0] absolute -top-2.5 left-3">
              {cat.title}
            </legend>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {cat.skills.map((skill, sIdx) => (
                <div key={sIdx} className="flex items-center space-x-2 select-none">
                  {/* Custom retro checkbox */}
                  <div className="w-4 h-4 bg-white border border-[#808080] win95-sunken flex items-center justify-center text-[10px] text-green-700 font-bold shrink-0">
                    ✓
                  </div>
                  <span className="font-medium text-black">{skill}</span>
                </div>
              ))}
            </div>
          </fieldset>
        ))}
      </div>
    </div>
  );
}
