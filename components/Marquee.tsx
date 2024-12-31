"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

// Define the types for the props, including children
interface MarqueeProps {
  direction?: "left" | "right";
  children: ReactNode; // Children prop type for rendering valid JSX content
}

const Marquee: React.FC<MarqueeProps> = ({ direction = "left", children }) => {
  const isLeftDirection = direction === "left";

  return (
    <div className="overflow-hidden w-full">
      <motion.div
        className="flex items-center w-full hover h-full  "
        animate={{
          translateX: isLeftDirection ? ["0%", "-100%"] : ["-100%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20,
        }}
        style={{ minWidth: "100vw" }}
      >
        {children} {/* Render children elements */}
      </motion.div>
    </div>
  );
};

export default Marquee;
