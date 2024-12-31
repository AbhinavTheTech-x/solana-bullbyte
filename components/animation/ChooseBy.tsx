import { useTheme } from "@/context/ThemeContext";
import React from "react";

const ChooseBy = () => {
  const { theme } = useTheme();

  return (
    <section
      className={`w-[85%] mt-20 mx-auto p-6 rounded-xl sm:w-[90%] ${
        theme === "light"
          ? "bg-transparent"
          : "bg-darkCard__1 shadow-darkCardShadow__1 border-darkCard__1"
      } h-full relative`}
    >
      <h2
        className={`text-center text-2xl font-poppins  ${
          theme === "light" ? "text-[#0f0f0f]" : " text-white"
        } font-semibold mb-12`}
      >
        Already Chosen By The World Leaders
      </h2>
      <div className="grid grid-cols-3 gap-12 justify-items-center my-4">
        <img src="./company-1.svg" alt="Birdeye" className="h-12" />
        <img src="./company-2.svg" alt="DEX Screener" className="h-12" />
        <img src="./company-3.svg" alt="Vercel" className="h-12" />
        <img src="./company-5.svg" alt="DEX Check" className="h-10" />
        <img src="./company-4.svg" alt="Jupiter" className="h-10" />
        <img src="./company-6.svg" alt="Phantom" className="h-10" />
      </div>
    </section>
  );
};

export default ChooseBy;
