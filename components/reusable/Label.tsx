import React from "react";
import { useTheme } from "@/context/ThemeContext";

interface LabelProps {
  labelText: string;
  extraClassName?: string;
}

const Label: React.FC<LabelProps> = ({ labelText, extraClassName = "" }) => {
  const { theme } = useTheme();

  return (
    <label
      htmlFor={labelText}
      className={`text-xs font-[OpenSauceRegular] capitalize ${
        theme === "light" ? "text-[#231F20]" : "text-[#FCFCFC]"
      } ${extraClassName}`}
    >
      {labelText}
    </label>
  );
};

export default Label;
