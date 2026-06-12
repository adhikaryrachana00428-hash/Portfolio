"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface SelfDrawingSVGProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
}

export default function SelfDrawingSVG({
  children,
  className = "",
  duration = 2.5,
  delay = 0.2,
}: SelfDrawingSVGProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={`relative ${className}`}
    >
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const childProps: any = {
          variants: {
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: delay,
              },
            },
          },
        };

        // If the child doesn't have a custom value for drawPathVariants, pass the duration prop
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (!(child.props as any).custom) {
          childProps.custom = duration;
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return React.cloneElement(child as React.ReactElement<any>, childProps);
      })}
    </motion.div>
  );
}

// Fixed type signature for drawPathVariants
export const drawPathVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (customDuration: number = 2.5) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: customDuration, ease: "easeInOut" },
      opacity: { duration: 0.5 },
    },
  }),
};
