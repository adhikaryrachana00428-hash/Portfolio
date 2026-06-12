"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { id: "about", label: "about" },
  { id: "skills", label: "skills" },
  { id: "contents", label: "contents" },
  { id: "projects", label: "projects" },
  { id: "open-source", label: "open source" },
  { id: "timeline", label: "journey" },
  { id: "contact", label: "contact" },
];

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar after scrolling down 200px
      if (window.scrollY > 200) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }

      // Determine active section
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {showNavbar && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed top-6 right-6 md:right-12 z-40 font-body text-sm md:text-base italic select-none"
        >
          <div className="flex items-center space-x-2 md:space-x-3 text-[#F5F5F0]">
            {NAV_ITEMS.map((item, idx) => (
              <span key={item.id} className="flex items-center">
                {idx > 0 && (
                  <span className="text-[#C8B89A] mx-2 select-none font-mono text-xs">·</span>
                )}
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`relative py-1 hover:text-[#C8B89A] transition-colors duration-300 ${
                    activeSection === item.id ? "text-white" : "text-[#F5F5F0]/70"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeUnderline"
                      className="absolute -bottom-1 left-0 right-0 h-[6px]"
                      transition={{ type: "spring", stiffness: 150, damping: 20 }}
                    >
                      <svg
                        className="w-full h-full stroke-current text-[#F5F5F0]"
                        viewBox="0 0 100 10"
                        preserveAspectRatio="none"
                        fill="none"
                      >
                        <path
                          d="M 0 5 Q 25 2, 50 5 T 100 5"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </motion.div>
                  )}
                </button>
              </span>
            ))}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
