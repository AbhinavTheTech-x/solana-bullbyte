import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const DarkModeButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={cn(
        "relative flex items-center gap-2 rounded-3xl h-max w-[80px] px-2 py-1.5",
        theme === "light"
          ? "border border-[#E2D0FF] bg-transparent"
          : "bg-[#5B376A]"
      )}
    >
      <button
        onClick={() => theme === "dark" && toggleTheme()}
        className="relative z-10 rounded-full w-7 h-7 flex justify-center items-center"
      >
        {" "}
        <img
          src={`${theme === "light" ? "./light (2).svg" : "./dark-active.svg"}`}
          alt="Light mode icon"
          className="w-4 h-4 sm:h-3 sm:w-3 object-cover"
        />
      </button>

      <button
        onClick={() => theme === "light" && toggleTheme()}
        className="relative z-10 rounded-full w-7 h-7 flex justify-center items-center"
      >
        <img
          src={`${theme === "light" ? "./dark.png" : "./dark-active-2.png"}`} // Assuming you have a corresponding dark mode icon
          alt="Dark mode icon"
          className="w-4 h-4 sm:h-3 sm:w-3 object-contain"
        />
      </button>

      <motion.div
        layout
        transition={{ type: "spring", damping: 15, stiffness: 250 }}
        className={cn(
          "absolute h-7 w-7 rounded-full bg-purple-gradient",
          theme === "light" ? "left-2" : "right-2"
        )}
      />
    </div>
  );
};

export default DarkModeButton;
