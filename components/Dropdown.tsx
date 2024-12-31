import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { useTheme } from "@/context/ThemeContext";

interface AnimatedDropdownProps {
  title: string;
  content: React.ReactNode;
}

const AnimatedDropdown: React.FC<AnimatedDropdownProps> = ({
  title,
  content,
}) => {
  const [open, setOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className={`flex items-center relative gap-1 rounded-full px-3.5 py-2.5 font-poppins cursor-pointer  border text-[14px] transition-colors ${
        open
          ? theme === "light"
            ? "bg-purple-gradient text-neutral-100 "
            : "bg-[#4C3966] text-[#D8D4F4] border-none" // Active dark mode colors
          : theme === "light"
          ? "bg-[#FBFAFE] text-lightBlack border-[#E2D0FF]"
          : "bg-[#4C3966] text-[#D8D4F4] border-none" // Non-active dark mode colors
      }`}
    >
      {title === "Solana" && (
        <img src="/solana.svg" className="w-6 h-6 object-cover" alt="solana" />
      )}
      {title === "RFC" && (
        <div className=" w-3 h-3 rounded-full border border-[#38C15E] flex justify-center items-center ">
          <p className=" w-1.5 h-1.5 rounded-full bg-[#38C15E] m-[2px]" />
        </div>
      )}
      <span>{title}</span>
      <FiChevronDown
        size={20}
        className={`transition-transform ${
          open
            ? theme === "light"
              ? "rotate-180"
              : "rotate-180 " // Active dark mode color
            : theme === "light"
            ? "text-lightBlack"
            : "text-[#D8D4F4]" // Non-active dark mode color
        }`}
      />
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`absolute left-1/2 top-14 z-50 ${
              theme === "light"
                ? "bg-white text-black"
                : " bg-[#4C3966] text-white"
            }`}
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div
              className={`absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 ${
                theme === "light" ? "bg-white" : " bg-[#4C3966]"
              }`}
            />
            <div className={`"w-max p-5 rounded-lg shadow-xl `}>{content}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default AnimatedDropdown;
