import React from "react";
import InfoContent from "../InfoContent";
import ContentContainerFull from "../reusable/ContentContainerFull";
import { useTheme } from "@/context/ThemeContext";
import Label from "../reusable/Label";
import CTAButton from "../CTAButton";
import LightInput from "../reusable/LightInput";
import HeaderText from "../reusable/HeaderText";

const BatchWalletFreezer = () => {
  const { theme } = useTheme();

  return (
    <div className="meta_data-section w-full h-full flex justify-center items-center flex-col">
      <div className="p-5 w-full flex justify-start items-center flex-col gap-10">
        <ContentContainerFull>
          <div className=" w-full">
            <HeaderText>Create OpenBook Market</HeaderText>
          </div>
          <div className=" w-full flex justify-center items-end gap-5 mt-5">
            <div className="flex flex-col gap-3 w-full justify-center items-start">
              <Label labelText="Mint Address" />
              <LightInput onChange={() => {}} placeholder="|" value={""} />
            </div>
            <CTAButton
              text="Load Token"
              font="font-poppins font-semibold"
              arrowSize="w-0 h-0"
              paddingY="py-3"
              paddingX="px-5 w-[140px]"
              gap="gap-1"
              onClick={() => console.log("Button clicked!")}
            />
          </div>
          <div className="flex justify-between items-center w-full mt-5">
            <div className="flex justify-start items-center gap-2">
              {[
                { label: "Upload CSV", icon: "./upload-2.svg" },
                { label: "Sample CSV" },
                { label: "Clear Table" },
                { label: "Add Row" },
              ].map((button, index) => (
                <button
                  key={index}
                  className={`w-max px-4 py-2.5 rounded-lg border flex items-center gap-1 text-xs font-[OpenSauceRegular] ${
                    theme === "dark"
                      ? "bg-[#807D9F] border-[#A4A2B8] text-[#EFEBFA]"
                      : "bg-[#EBEFFF] border-[#D3DAF3] text-[#575461]"
                  }`}
                >
                  {button.icon && (
                    <img
                      src={button.icon}
                      className="w-5 h-5 object-cover"
                      alt={button.label.toLowerCase()}
                    />
                  )}
                  {button.label}
                </button>
              ))}
            </div>
            <div className="flex justify-start items-center gap-2">
              {["Freeze(0)", "Load Status"].map((label, index) => (
                <button
                  key={index}
                  className={`w-max px-4 py-2.5 rounded-lg border text-xs font-[OpenSauceRegular] ${
                    theme === "dark"
                      ? "bg-[#807D9F] border-[#A4A2B8] text-[#EFEBFA]"
                      : "bg-[#EBEFFF] border-[#D3DAF3] text-[#575461]"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className=" w-full mt-5">
            <h6
              className={`text-sm font-semibold font-poppins mb-5  ${
                theme === "light" ? "text-black" : "text-[#FCFCFC]"
              }`}
            >
              Snapshot: 
              <span
                className={`${
                  theme === "light" ? "text-[#747474]" : "text-[#A7A3D5]"
                } font-normal`}
              >
                Take snapshot of token holders
              </span>
            </h6>
          </div>
          <div
            className={`border ${
              theme === "light" ? "border-[#C1B8CD]" : "border-[#4B4868]"
            } rounded-xl w-full overflow-hidden`}
          >
            <div
              className={`flex justify-between items-center py-2.5 px-3 w-full rounded-t-xl ${
                theme === "light" ? "bg-[#F5F5F5]" : "bg-[#78759E]"
              }`}
            >
              <h6
                className={`font-[OpenSauceRegular] text-xs font-normal ${
                  theme === "light" ? "text-black" : "text-[#FCFCFC]"
                }`}
              >
                Asset Address
              </h6>
              <h6
                className={`font-[OpenSauceRegular] text-xs font-normal ${
                  theme === "light" ? "text-black" : "text-[#FCFCFC]"
                }`}
              >
                Status
              </h6>
              <h6
                className={`font-[OpenSauceRegular] text-xs font-normal ${
                  theme === "light" ? "text-black" : "text-[#FCFCFC]"
                }`}
              >
                Action
              </h6>
            </div>
            <div
              className={`w-full h-[200px] flex justify-start  ${
                theme === "light" ? " bg-white" : "bg-[#3F2D58] "
              } items-center flex-col`}
            >
              <div
                className={`flex justify-between items-center border-b ${
                  theme === "light"
                    ? "border-[#E6EBEE] bg-white"
                    : "bg-[#3F2D58] border-[#827E9F]"
                } w-full py-2.5 px-3`}
              >
                <h6
                  className={`font-[OpenSauceRegular] text-xs font-normal ${
                    theme === "light" ? "text-[#525252]" : "text-[#BABFD2]"
                  }`}
                >
                  --
                </h6>
                <h6
                  className={`font-[OpenSauceRegular] text-xs font-normal ${
                    theme === "light" ? "text-[#525252]" : "text-[#BABFD2]"
                  }`}
                >
                  --
                </h6>
                <h6
                  className={`font-[OpenSauceRegular] text-xs font-normal ${
                    theme === "light" ? "text-[#525252]" : "text-[#BABFD2]"
                  }`}
                >
                  --
                </h6>
              </div>
            </div>
          </div>
        </ContentContainerFull>

        <InfoContent />
      </div>
    </div>
  );
};

export default BatchWalletFreezer;
