import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

interface ButtonProps {
  text: string;
  arrowSize?: string;
  paddingY?: string;
  font: string;
  paddingX?: string;
  gap?: string;
  onClick?: () => void;
}

const AnimatedBtn: React.FC<ButtonProps> = ({
  text,
  arrowSize = "w-5 h-5",
  paddingY = "py-3",
  paddingX = "px-5",
  gap = "gap-1",
  font = "font-poppins font-semibold",
  onClick,
}) => {
  const { theme } = useTheme();
  const DURATION = 0.25;
  const STAGGER = 0.025;

  // Define the animation variants
  const variants = {
    initial: { scale: 1 },
    hovered: {
      scale: 1.05,
      boxShadow: "0px 0px 25px 2px rgba(145,127,244,0.67)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 0.3,
      },
    },
  };

  return (
    <motion.button
      onClick={onClick}
      initial="initial"
      whileHover="hovered"
      variants={variants} // Use the variants prop for button scale effect
      className={`group ${
        theme === "light"
          ? "shadow-normalShadow bg-purple-gradient"
          : "shadow-none bg-darkBtn"
      } rounded-full ${paddingY} ${paddingX} ${font} shadow-[3px 3px 30px 0px #907FF452]  relative flex overflow-hidden whitespace-nowrap text-sm justify-center items-center ${gap} cursor-pointer text-[#FCFCFC]`}
    >
      {/* Animated Text */}
      <div className="relative overflow-hidden">
        <div className="flex">
          {text.split("").map((l, i) => (
            <motion.span
              key={i}
              className={`inline-block ${l === " " ? "w-1" : ""}`}
              variants={{
                initial: { y: 0 },
                hovered: l === " " ? {} : { y: "-100%" }, // No animation for spaces
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
            >
              {l}
            </motion.span>
          ))}
        </div>
        <div className="absolute inset-0 flex">
          {text.split("").map((l, i) => (
            <motion.span
              key={i}
              className={`inline-block ${l === " " ? "w-1" : ""}`}
              variants={{
                initial: { y: l === " " ? 0 : "100%" }, // No animation for spaces
                hovered: { y: 0 },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
            >
              {l}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Arrow Animation */}
      <motion.img
        src="./arrow-up-right.svg"
        className={`${arrowSize} object-cover group-hover:rotate-45 transform transition-transform duration-300 ease-in-out`} // Applying smooth transition for rotation
        alt="arrow"
      />
    </motion.button>
  );
};

export default AnimatedBtn;
