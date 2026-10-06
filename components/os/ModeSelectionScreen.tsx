"use client";

import { useState } from "react";
import { Monitor } from "lucide-react";

interface ModeSelectionScreenProps {
  onSelect: (mode: "light" | "dark") => void;
}

export default function ModeSelectionScreen({ onSelect }: ModeSelectionScreenProps) {
  const [selectedMode, setSelectedMode] = useState<"light" | "dark">("light");

  return (
    <div className="fixed inset-0 bg-[#008080] z-50 flex items-center justify-center p-2 sm:p-4 font-sans text-xs text-black">
      <div className="max-w-md w-full bg-[#c0c0c0] win95-raised p-1 flex flex-col shadow-2xl max-h-[calc(100dvh-16px)]">
        {/* Title bar */}
        <div className="h-6 bg-gradient-to-r from-[#000080] to-[#1084d0] text-white flex items-center justify-between px-1.5 font-bold shrink-0">
          <span className="flex items-center space-x-1.5 truncate">
            <span className="text-[10px]">🖳</span>
            <span className="truncate">Welcome to Rachana 95 Setup</span>
          </span>
          <button className="w-4 h-4 bg-[#c0c0c0] win95-raised text-black font-sans font-bold text-[9px] flex items-center justify-center active:shadow-[inset_1px_1px_0_#000] cursor-not-allowed shrink-0">
            ✕
          </button>
        </div>

        {/* Wizard content */}
        <div className="bg-[#c0c0c0] p-3 sm:p-4 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 overflow-y-auto flex-1">
          {/* Left panel: icon & decorative color */}
          <div className="hidden sm:flex w-20 h-32 shrink-0 items-center justify-center bg-gray-400/20 win95-sunken p-2 self-start">
            <Monitor className="w-10 h-10 text-blue-900" />
          </div>

          {/* Right panel: text inputs */}
          <div className="flex-1 flex flex-col space-y-2.5">
            <h2 className="font-bold text-sm text-gray-800">
              Choose Startup Experience
            </h2>
            <p className="text-gray-600 leading-snug text-[11px] sm:text-xs">
              Setup has detected two possible desktop modes. Please select the environment you wish to initialize:
            </p>

            <fieldset className="border border-white border-t-gray-500 border-l-gray-500 p-3 sm:p-4 relative pt-4 sm:pt-5 mt-1 bg-transparent">
              <legend className="px-1.5 font-bold text-gray-700 bg-[#c0c0c0] absolute -top-2.5 left-3 text-[11px] sm:text-xs">
                Desktop Mode
              </legend>

              <div className="space-y-2.5">
                <label className="flex items-center space-x-2 cursor-pointer font-bold touch-manipulation">
                  <input
                    type="radio"
                    name="mode"
                    checked={selectedMode === "light"}
                    onChange={() => setSelectedMode("light")}
                    className="accent-blue-800 cursor-pointer"
                  />
                  <span className="text-[11px] sm:text-xs">Light Mode (Normal Desktop)</span>
                </label>
                <p className="text-gray-600 pl-5 leading-snug text-[10px] sm:text-[11px]">
                  Loads standard visual components, clear wallpaper, and maximum visibility.
                </p>

                <label className="flex items-center space-x-2 cursor-pointer font-bold touch-manipulation">
                  <input
                    type="radio"
                    name="mode"
                    checked={selectedMode === "dark"}
                    onChange={() => setSelectedMode("dark")}
                    className="accent-blue-800 cursor-pointer"
                  />
                  <span className="text-[11px] sm:text-xs">Dark Mode (Interactive Flashlight)</span>
                </label>
                <p className="text-gray-600 pl-5 leading-snug text-[10px] sm:text-[11px]">
                  Loads a dark overlay requiring the flashlight pull cord to navigate.
                </p>
              </div>
            </fieldset>
          </div>
        </div>

        {/* Buttons footer */}
        <div className="border-t border-[#808080] p-2.5 sm:p-3 flex justify-end space-x-3 shrink-0 bg-[#c0c0c0] select-none">
          <button
            onClick={() => onSelect(selectedMode)}
            className="win95-button px-5 sm:px-6 py-1.5 min-w-[75px] font-bold cursor-pointer text-center touch-manipulation text-[11px] sm:text-xs"
          >
            Next &gt;
          </button>
          <button
            onClick={() => onSelect("light")}
            className="win95-button px-5 sm:px-6 py-1.5 min-w-[75px] font-bold cursor-pointer text-center touch-manipulation text-[11px] sm:text-xs"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
