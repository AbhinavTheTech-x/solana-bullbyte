import { useTheme } from "@/context/ThemeContext";
import React from "react";

interface DarkInputProps {
  type?: string;
  value: string | number;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  extraClassName?: string;
}

const DarkInput: React.FC<DarkInputProps> = ({
  type = "text",
  value,
  placeholder = "",
  onChange,
  extraClassName = "",
}) => {
  const { theme } = useTheme();

  return (
    <input
    value={value}
      type={type}
      onChange={onChange}
      className={`w-full px-3 py-2.5 rounded-lg text-sm placeholder:text-[#AFAF9F] focus:outline-none focus:border-blue-500 ${
        theme === "light"
          ? "bg-white border text-black border-[#C0C7E1] shadow-[2px 2px 10px 0px #4B68DA47]"
          : "bg-inputDark text-white border-formDarkBorder shadow-formDarkShadow"
      } ${extraClassName}`}
      placeholder={placeholder}
    />
  );
};

export default DarkInput;
