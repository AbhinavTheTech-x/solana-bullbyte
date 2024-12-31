import { useTheme } from "@/context/ThemeContext";
import React, { ReactNode } from "react";

interface ContentContainerFullProps {
  children: ReactNode;
  className?: string;
}

const ContentContainerFull: React.FC<ContentContainerFullProps> = ({
  children,
  className = "",
}) => {
  const { theme } = useTheme();

  return (
    <div
      className={` w-full rounded-xl h-full flex-col flex justify-center items-center p-6 ${className} ${
        theme === "light"
          ? "bg-white border border-[#DAE2FF] shadow-[4px 4px 30px 0px #3D54AB24]"
          : "bg-[#2A1843] border-none" // Dark mode colors
      }`}
    >
      {children}
    </div>
  );
};

export default ContentContainerFull;
