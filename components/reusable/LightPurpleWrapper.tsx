import { useTheme } from "@/context/ThemeContext";
import React, { ReactNode } from "react";

interface PurpleWrapperProps {
  margin?: string;
  padding?: string;
  children: ReactNode;
}

const LightPurpleWrapper: React.FC<PurpleWrapperProps> = ({
  margin = "mt-4",
  padding = "p-3",
  children,
}) => {
  const { theme } = useTheme();
  return (
    <div
      className={`w-full ${margin} ${
        theme === "light"
          ? "bg-[#F5F4FF] border-[#DAE2FF]"
          : "bg-[#503D6B] border-[#4B4868]"
      } rounded-xl border ${padding}`}
    >
      {children}
    </div>
  );
};

export default LightPurpleWrapper;
