import { useTheme } from "@/context/ThemeContext";
import React from "react";
import ContentContainerFull from "../reusable/ContentContainerFull";

const ViewToken = () => {
  const { theme } = useTheme();

  return (
    <div className="v1Token-section w-full h-full flex justify-center items-center flex-col">
      <div className="p-5 w-full flex justify-start items-center flex-col gap-10">
        <ContentContainerFull>
          <div className="w-full  flex-wrap h-max gap-y-5 flex justify-between items-center">
            {Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                className={`${
                  theme === "light"
                    ? "bg-white border-[#DCD2EB] "
                    : "bg-[#3F2D58] border-[#4B4868] shadow-[4px 4px 30px 0px #3D54AB24]"
                } border rounded-lg p-4 w-[49%]`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="./bull-logo.svg"
                    alt="token"
                    className="w-12 h-12 rounded-full object-contain"
                  />
                  <div>
                    <h4
                      className={`font-medium capitalize text-lg ${
                        theme === "light" ? "text-black" : "text-white"
                      } font-poppins `}
                    >
                      liberty (liberty)
                    </h4>
                  </div>
                </div>

                <div
                  className={`text-xs ${
                    theme === "light" ? "text-[#0F0F0F]" : "text-[#fcfcfc]"
                  } font-poppins space-y-4`}
                >
                  <div className="flex justify-between">
                    <span>Total Supply</span>
                    <span
                      className={`${
                        theme === "light" ? "text-[#646464]" : "text-[#D2D0E8]"
                      }`}
                    >
                      -----------------
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Decimals</span>
                    <span
                      className={`${
                        theme === "light" ? "text-[#646464]" : "text-[#D2D0E8]"
                      }`}
                    >
                      -----------------
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Mintable</span>
                    <span
                      className={`${
                        theme === "light" ? "text-[#646464]" : "text-[#D2D0E8]"
                      }`}
                    >
                      -----------------
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Token Type</span>
                    <span
                      className={`${
                        theme === "light" ? "text-[#646464]" : "text-[#D2D0E8]"
                      }`}
                    >
                      -----------------
                    </span>
                  </div>
                </div>

                <div className="mt-7 w-full flex justify-center items-center">
                  <button className="bg-[#F5F4F4] w-max text-xs text-[#0F0F0F] border-[#D5D5D5] border px-4 py-3 rounded-lg font-normal font-poppins">
                    View & Update
                  </button>
                </div>
              </div>
            ))}
          </div>
        </ContentContainerFull>
      </div>
    </div>
  );
};

export default ViewToken;
