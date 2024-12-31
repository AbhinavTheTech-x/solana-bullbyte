"use client";

import React, { useEffect, useState } from "react";
import DarkModeButton from "./DarkModeButton";
import { useTheme } from "@/context/ThemeContext";
import AnimatedBtn from "./animation/AnimatedBtn";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const { theme } = useTheme();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "How It Works", href: "/services" },
    { name: "Testimonial", href: "/Testimonial" },
    { name: "Blog", href: "/Blog" },
  ];
  const DURATION = 0.25;
  const STAGGER = 0.025;
  return (
    <div className={`w-full py-3 ${isSticky ? "fixed top-0 z-[100]" : ""}`}>
      <div
        className={`max-w-6xl mx-auto relative rounded-full border px-2 py-1.5 ${
          theme === "light"
            ? "bg-transparent border-[#CFCFDD]"
            : "border-darkNavBorder"
        } h-max flex justify-between items-center transition-all duration-300 ${
          isSticky
            ? theme === "light"
              ? "bg-white/50 shadow-lg backdrop-blur-lg border border-white/20"
              : "bg-[rgba(67,35,79,0.5)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[6px] border-[1px] border-[rgba(255,255,255,0.18)]"
            : ""
        }`}
      >
        <div className="logo">
          <img
            src={`${theme === "light" ? "./logo" : "./dark-logo"}.svg`}
            alt="Logo"
            className="w-[150px] h-8 sm:w-32"
          />
        </div>
        <div className="links flex justify-center items-center gap-10 sm:gap-2">
          {links.map((link, index) => (
            <motion.a
              initial="initial"
              whileHover="hovered"
              key={index}
              href={link.href}
              className={`font-poppins  text-sm font-normal sm:text-xs ${
                theme === "light" ? "text-[#0f0f0f]" : "text-white"
              }`}
            >
              {/* Animated Text for each link */}
              <div className="relative overflow-hidden">
                <div className="flex">
                  {link.name.split("").map((letter, i) => (
                    <motion.span
                      key={i}
                      className={`inline-block ${letter === " " ? "w-1" : ""}`}
                      variants={{
                        initial: { y: 0 },
                        hovered: letter === " " ? {} : { y: "-100%" }, // Animation for non-space characters
                      }}
                      transition={{
                        duration: DURATION,
                        ease: "easeInOut",
                        delay: STAGGER * i, // Stagger animation for each letter
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </div>
                <div className="absolute inset-0 flex">
                  {link.name.split("").map((letter, i) => (
                    <motion.span
                      key={i}
                      className={`inline-block ${letter === " " ? "w-1" : ""}`}
                      variants={{
                        initial: { y: letter === " " ? 0 : "100%" }, // No animation for spaces
                        hovered: { y: 0 },
                      }}
                      transition={{
                        duration: DURATION,
                        ease: "easeInOut",
                        delay: STAGGER * i, //
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
          <div className="mode flex justify-center items-center gap-3">
            <DarkModeButton />
            <AnimatedBtn
              text="Enter Daap"
              font="font-poppins font-semibold"
              arrowSize="w-5 h-5"
              paddingY="py-3 sm:py-1.5"
              paddingX="px-5 sm:px-2"
              gap="gap-1"
              onClick={() => console.log("Button clicked!")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
