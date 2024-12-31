import React from "react";

interface SwitchProps {
  checked: boolean;
  onChange: () => void;
}

const Switch: React.FC<SwitchProps> = ({ checked, onChange }) => {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={checked}
        onChange={onChange}
      />
      <div
        className={`relative w-11 h-6 border rounded-full peer dark:bg-[#413D64] ${
          checked ? "peer-checked:bg-[#B2ADD3]" : "bg-white"
        } peer dark:peer-focus:ring-[#6C41EB] peer-checked:after:translate-x-[120%] rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[3.5px] after:start-[3px] ${
          checked
            ? "after:bg-[#6C41EB] border-[#6C41EB]"
            : "after:bg-[#827E8C] border-[#9690A7]"
        } after:border after:rounded-full after:h-4 after:w-4 after:transition-all`}
      ></div>
    </label>
  );
};

export default Switch;
