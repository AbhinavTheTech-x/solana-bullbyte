import React from "react";
import HeaderText from "../reusable/HeaderText";
import ContentContainerFull from "../reusable/ContentContainerFull";
import Label from "../reusable/Label";
import DarkInput from "../reusable/DarkInput";
import CTAButton from "../CTAButton";
import { useTheme } from "@/context/ThemeContext";

const BatchTransfer = () => {
  const { theme } = useTheme();

  return (
    <div className="v1Token-section w-full h-full flex justify-center items-center flex-col">
      <div className="p-5 w-full flex justify-start items-center flex-col gap-10">
        <ContentContainerFull>
          <div className=" w-full">
            <HeaderText> Batch create wallets</HeaderText>
          </div>
          <div
            className={`${
              theme === "light"
                ? "bg-[#F5F4FF] border-[#DCD2EB]"
                : "bg-[#3F2D58] border-[#4B4868]"
            }
           mt-5 border  rounded-xl  w-full  p-5`}
          >
            <div className=" w-full flex justify-center items-end gap-5 ">
              <div className="flex flex-col gap-3 w-full justify-center items-start">
                <Label labelText=" Enter quantity:" />
                <DarkInput onChange={() => {}} value={""} placeholder="|" />
              </div>
              <CTAButton
                text="Generate wallet"
                font="font-poppins font-semibold"
                arrowSize="w-0 h-0"
                paddingY="py-3"
                paddingX="px-8 w-[250px]"
                gap="gap-1"
                onClick={() => console.log("Button clicked!")}
              />
              <CTAButton
                text=" Export CSV"
                font="font-poppins font-semibold"
                arrowSize="w-0 h-0"
                paddingY="py-3"
                paddingX="px-8 w-[220px]"
                gap="gap-1"
                onClick={() => console.log("Button clicked!")}
              />
            </div>
          </div>

          <div
            className={`mt-6 border ${
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
                Wallet
              </h6>
              <h6
                className={`font-[OpenSauceRegular] text-xs font-normal ${
                  theme === "light" ? "text-black" : "text-[#FCFCFC]"
                }`}
              >
                Private Key
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
                  1
                </h6>
                <h6
                  className={`font-[OpenSauceRegular] text-xs font-normal ${
                    theme === "light" ? "text-[#525252]" : "text-[#BABFD2]"
                  }`}
                >
                  89232
                </h6>
              </div>
            </div>
          </div>
        </ContentContainerFull>
      </div>
    </div>
  );
};

export default BatchTransfer;
