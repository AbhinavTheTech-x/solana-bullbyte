import { useTheme } from "@/context/ThemeContext";
import React, { ReactNode } from "react";

interface ContentContainerHalfProps {
  children: ReactNode;
  className?: string;
}

const ContentContainerHalf: React.FC<ContentContainerHalfProps> = ({
  children,
  className = "",
}) => {
  const { theme } = useTheme();

  return (
    <div
      className={`w-1/2 rounded-xl h-full flex flex-col justify-center items-center p-4 border ${className} ${
        theme === "light"
          ? "bg-white shadow-[4px 4px 30px 0px #3D54AB24] border-[#DAE2FF]"
          : "bg-formDark shadow-formDarkShadow border-formDarkBorder"
      }`}
    >
      {children}
    </div>
  );
};

export default ContentContainerHalf;
