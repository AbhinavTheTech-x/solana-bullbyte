import { useTheme } from "@/context/ThemeContext";
import React from "react";

interface SelectProps {
  options: { value: string; label: string }[];
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  value: string;
  className?: string; // Optional className prop
}

const Select: React.FC<SelectProps> = ({
  options,
  onChange,
  value,
  className,
}) => {
  const { theme } = useTheme();
  return (
    <div className={`relative `}>
      <select
        value={value}
        onChange={onChange}
        className={`w-full px-3 py-2.5 rounded-lg mt-2 border ${
          theme === "light"
            ? "border-[#C0C7E1] text-[#C3C3C3] bg-white"
            : "bg-[#686587] border-[#C0C7E1] text-[#C3C3C3] shadow-[2px 2px 10px 0px #4B68DA47]"
        } text-sm placeholder:text-[#AFAF9F] ${className} focus:outline-none focus:border-blue-500 appearance-none`}
      >
        <option value="" className="text-[#AFAF9F]">
          {value}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <img
        src="./arrow-down-black.svg"
        className="w-4 h-4 object-cover absolute right-3 top-5"
        alt="arrow"
      />
    </div>
  );
};

export default Select;
