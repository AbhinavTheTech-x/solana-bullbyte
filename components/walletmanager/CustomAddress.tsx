import { useTheme } from "@/context/ThemeContext";
import React from "react";
import CTAButton from "../CTAButton";
import ContentContainerFull from "../reusable/ContentContainerFull";
import HeaderText from "../reusable/HeaderText";
import Label from "../reusable/Label";
import LightInput from "../reusable/LightInput";
import LightIncrementInput from "../reusable/LightIncrementInput";

const CustomAddress = () => {
  const { theme } = useTheme();
  return (
    <div className="v1Token-section w-full h-full flex justify-center items-center flex-col">
      <div className="p-5 w-full flex justify-start items-center flex-col gap-10">
        <ContentContainerFull>
          <div className=" w-full flex justify-between items-center">
            <HeaderText> Custom Wallet Address Generator</HeaderText>
            <div className=" w-12 h-12 rounded-full flex justify-center items-center bg-[#EFECEC]">
              <img
                src="./question-mark.svg"
                className=" w-5 h-5 object-cover"
                alt="alert"
              />
            </div>
          </div>
          <div
            className={`w-full rounded-xl ${
              theme === "light"
                ? "bg-white border-[#DAE2FF] shadow-[4px 4px 30px 0px #3D54AB45]"
                : "bg-[#3F2D58] border-[#4B4868]"
            } p-7 border  mt-5`}
          >
            <div className="flex justify-between items-center w-full gap-5 mb-5">
              <div className="flex flex-col gap-1 w-1/2">
                <Label labelText="Address Prefix" />
                <LightInput
                  placeholder="|"
                  value={""}
                  onChange={() => {}}
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-1 w-1/2">
                <Label labelText="Address Suffix " />
                <LightInput
                  placeholder="|"
                  value={""}
                  onChange={() => {}}
                  type="text"
                />
              </div>
            </div>

            <h6
              className={`font-poppins font-normal ${
                theme === "light" ? "text-[#363636]" : "text-white"
              } text-sm`}
            >
              {" "}
              <span
                className={`${
                  theme === "light" ? "text-[#1F1F1F]" : "text-white"
                } font-medium`}
              >
                Example:{" "}
              </span>
              5uECuQVfSon2t7KYJpwmEanrYrykVLe7i2M5rpUpJm6c
            </h6>
            <div className="w-full mt-5">
              {/* Case Sensitive Radio Section */}
              <h6
                className={`text-sm mb-2 font-medium ${
                  theme === "light" ? "text-[#1F1F1F]" : "text-white"
                } font-poppins`}
              >
                Case Sensitive
              </h6>
              <div className="flex justify-start items-center gap-20 mb-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="caseSensitive"
                    value="no"
                    className={`${
                      theme === "light" ? "accent-[#573CFF]" : " accent-[#fff]"
                    }`}
                  />
                  <span
                    className={`text-sm ${
                      theme === "light" ? "text-[#1F1F1F]" : "text-white"
                    } font-poppins`}
                  >
                    No
                  </span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="caseSensitive"
                    value="yes"
                    className={`${
                      theme === "light" ? "accent-[#573CFF]" : " accent-[#fff]"
                    }`}
                  />
                  <span
                    className={`text-sm ${
                      theme === "light" ? "text-[#1F1F1F]" : "text-white"
                    } font-poppins`}
                  >
                    Yes
                  </span>
                </label>
              </div>

              {/* Input Field Section */}
              <div className="flex flex-col gap-1">
                <label
                  className={`text-xs ${
                    theme === "light" ? "text-[#231F20]" : "text-white"
                  } font-poppins mb-2 `}
                  htmlFor="additionalInput"
                >
                  Threads (Adjust Based on Your Device's Performance)
                </label>
                <LightIncrementInput
                  value={2}
                  onDecrement={() => {}}
                  onIncrement={() => {}}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-5 w-full mt-5">
            <button
              className={`flex ${
                theme === "light"
                  ? "btn-gradient-border"
                  : "bg-transparent border-[#B06AB3]"
              }  justify-center items-center gap-2 rounded-full w-[110px] px-5 py-2.5 border`}
            >
              <p className="font-poppins font-semibold text-[15px] bg-clip-text bg-purple-gradient text-transparent">
                Pause
              </p>
            </button>
            <CTAButton
              text="Generate Now"
              font="font-poppins font-semibold"
              arrowSize="w-0 h-0" // Customize the arrow size
              paddingY="py-3"
              paddingX="px-8 " // Customize the horizontal padding
              gap="gap-1" // Customize the gap between text and arrow
              onClick={() => console.log("Button clicked!")}
            />
          </div>
        </ContentContainerFull>
      </div>
    </div>
  );
};

export default CustomAddress;
