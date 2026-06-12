"use client";

import { motion, Variants } from "framer-motion";

const CONTENTS_ITEMS = [
  { id: "project-teleport", num: "01.", title: "Teleport" },
  { id: "project-deception", num: "02.", title: "Agent Deception Lab" },
  { id: "project-prompt", num: "03.", title: "Prompt Verification" },
  { id: "project-code", num: "04.", title: "Code Analyzer" },
  { id: "project-none", num: "05.", title: "And Then There Were None" },
];

export default function ContentsSection() {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="contents"
      className="w-full min-h-screen flex flex-col justify-center items-center bg-[#0A0A0A] p-6 md:p-12 border-t border-[#1C1C1C] relative z-10 select-none"
    >
      <div className="max-w-xl w-full flex flex-col items-center text-center space-y-12">
        <h2 className="font-display text-[12vw] md:text-[8vw] text-[#F5F5F0] leading-none">
          CoNTENTS
        </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col space-y-4 md:space-y-6 w-full text-left max-w-sm"
        >
          {CONTENTS_ITEMS.map((item) => (
            <motion.button
              key={item.id}
              variants={itemVariants}
              onClick={() => handleScroll(item.id)}
              className="group flex items-center space-x-6 py-2 hover:translate-x-2 transition-transform duration-300 w-full"
            >
              <span className="font-display text-2xl md:text-3xl text-accent w-10">
                {item.num}
              </span>
              <span className="font-body text-xl md:text-2xl text-[#F5F5F0] italic group-hover:text-accent transition-colors duration-300">
                {item.title}
              </span>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
