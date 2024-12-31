import { useTheme } from "@/context/ThemeContext";
import React from "react";

const MobileMenu: React.FC = () => {
  const { theme } = useTheme();
  return (
    <>
      <div className="justify-between items-center mt-0 flex relative z-40">
        <div
          // onClick={() => setTabOne((open) => !open)}
          className={`${
            theme === "light"
              ? "bg-white border-[#F1E7FF]"
              : "bg-[#4C3966] border-[#634A86]"
          } flex justify-center border cursor-pointer items-center rounded-full w-10 h-10`}
        >
          <img
            src={`./${
              theme === "light" ? "light-menu.svg" : "dark-menu-n.svg"
            }`}
            className={`${
              theme === "light" ? "w-6 h-6" : "w-5 h-5 "
            } object-contain`}
            alt="logo"
          />
        </div>
        <div className="logo">
          <img
            src={`${theme === "light" ? "./logo" : "./dark-logo"}.svg`}
            alt="Logo"
            className="w-[150px] h-8"
          />
        </div>
        <div
          // onClick={() => setTabTwo((open) => !open)}
          className={`${
            theme === "light"
              ? "bg-white border-[#F1E7FF]"
              : "bg-[#4C3966] border-[#634A86]"
          } flex justify-center border cursor-pointer items-center rounded-full w-10 h-10`}
        >
          <img
            src={`./${theme === "light" ? "light" : "dark"}-dot.svg`}
            alt="logo"
            className=" sm:h-5 sm:w-5 xs:h-5 xs:w-5  object-contain"
          />
        </div>
      </div>

      {/* {tabOne && <TabOne />}
      {tabTwo && <TabTwo />} */}
    </>
  );
};

export default MobileMenu;
