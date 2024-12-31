import { useTheme } from "@/context/ThemeContext";
import React from "react";

interface CTAButtonProps {
  text: string;
  arrowSize?: string;
  paddingY?: string;
  font: string;
  paddingX?: string; 
  gap?: string; 
  onClick?: () => void;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  text,
  arrowSize = "w-5 h-5", 
  paddingY = "py-3", 
  paddingX = "px-5", 
  gap = "gap-1",
  font = "font-poppins font-semibold",
  // Default gap
  onClick,
}) => {
  const { theme } = useTheme();

  return (
    <button
      onClick={onClick}
      className={` ${
        theme === "light"
          ? "shadow-normalShadow bg-purple-gradient"
          : "shadow-none bg-darkBtn"
      } rounded-full ${paddingY} ${paddingX} ${font} flex text-sm capitalize justify-center items-center ${gap} cursor-pointer text-[#FCFCFC]`}
    >
      {text}
      <img
        src="./arrow-up-right.svg"
        className={`${arrowSize} object-cover`}
        alt="arrow"
      />
    </button>
  );
};

export default CTAButton;
