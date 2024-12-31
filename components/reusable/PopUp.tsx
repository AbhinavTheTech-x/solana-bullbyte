import { useTheme } from "@/context/ThemeContext";
import React from "react";
import Label from "./Label";
import LightInput from "./LightInput";

interface PopupProps {
  title: string;
  onClose: () => void;
  onConfirm: () => void;
}

const PopUp: React.FC<PopupProps> = ({ title, onClose, onConfirm }) => {
  const { theme } = useTheme();
  return (
    <div
      style={{
        boxShadow:
          theme === "light"
            ? "-6px 6px 30px 0px #B482FF69"
            : "2px 2px 10px 0px #4B68DA47",
      }}
      className={`w-[400px] p-5 z-30 h-[220px] absolute rounded-xl flex justify-center items-center border top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
        theme === "light"
          ? "bg-white border-[#D6C8ED]"
          : "bg-[#686587] border-[#C0C7E1]"
      }`}
    >
      <div className="w-full">
        <h6
          className={`${
            theme === "light" ? "text-[#231F20]" : "text-[#FCFCFC]"
          } font-[OpenSauceMedium] capitalize text-center text-sm`}
        >
          {title}
        </h6>
        <div className="flex flex-col gap-1 mt-4">
          <Label labelText=" Private Key" />
          <LightInput
            value={""}
            placeholder="|"
            onChange={() => {}}
            type="number"
          />
        </div>
        <div className="flex justify-center items-center w-full mt-5 gap-4">
          <button
            className="px-6 py-2.5 bg-[#E8E8E8] text-[#363636] font-poppins text-xs rounded-xl hover:bg-gray-400"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-6 py-2.5 bg-[#27D968] font-poppins text-xs text-white rounded-xl hover:bg-green-600"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
