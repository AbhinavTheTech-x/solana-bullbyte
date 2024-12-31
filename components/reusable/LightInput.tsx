import { useTheme } from "@/context/ThemeContext";
import React from "react";

interface InputProps {
  value: string | number;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  type?: "text" | "number" | "password" | "email"; // Optional, defaults to "text"
  className?: string; // Optional custom class for styling
}

const LightInput: React.FC<InputProps> = ({
  value,
  placeholder,
  onChange,
  type = "text",
  className = "",
}) => {
  const { theme } = useTheme();

  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full px-3 py-2.5 rounded-lg border text-sm placeholder:text-[#AFAF9F] focus:outline-none focus:border-blue-500 ${
        theme === "light"
          ? "bg-white  text-black border-[#C0C7E1] shadow-[2px 2px 10px 0px #4B68DA47]"
          : "bg-[#686587] border-[#C0C7E1] text-[#C3C3C3] shadow-[2px 2px 10px 0px #4B68DA47]"
      } ${className}`}
    />
  );
};

export default LightInput;
