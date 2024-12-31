import React, { ReactNode } from "react";
import { useTheme } from "@/context/ThemeContext";

interface HeaderTextProps {
  children: ReactNode;
}

const HeaderText: React.FC<HeaderTextProps> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <h6
      className={`text-lg font-medium font-poppins capitalize ${
        theme === "light" ? "text-black" : "text-[#FCFCFC]"
      }`}
    >
      {children}
    </h6>
  );
};

export default HeaderText;
