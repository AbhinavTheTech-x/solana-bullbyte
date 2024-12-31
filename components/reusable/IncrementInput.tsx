import { useTheme } from "@/context/ThemeContext";
import React from "react";

interface IncrementInputProps {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const IncrementInput: React.FC<IncrementInputProps> = ({
  value,
  onIncrement,
  onDecrement,
}) => {
  const { theme } = useTheme();
  return (
    <div
      id="additionalInput"
      className={`w-full px-3 py-2.5 h-[44px] flex justify-between items-center mt-1 rounded-lg border ${
        theme === "light"
          ? "border-[#C0C7E1] shadow-[2px 2px 10px 0px #4B68DA47] bg-white text-black"
          : "border-formDarkBorder text-white shadow-formDarkShadow bg-inputDark "
      } text-sm placeholder:text-[#AFAF9F] focus:outline-none focus:border-blue-500`}
    >
      <img
        src="./decrement.svg"
        className="w-5 h-5 object-cover cursor-pointer"
        alt="decrement"
        onClick={onDecrement} // Call the decrement function
      />
      <p
        className={`font-[OpenSauceRegular] text-[13px] ${
          theme === "light" ? "text-[#575461]" : "text-[#FCFCFC]"
        }`}
      >
        {String(value).padStart(2, "0")}{" "}
        {/* Pads the number to always display two digits */}
      </p>
      <img
        src="./increment.svg"
        className="w-5 h-5 object-cover cursor-pointer"
        alt="increment"
        onClick={onIncrement} // Call the increment function
      />
    </div>
  );
};

export default IncrementInput;
