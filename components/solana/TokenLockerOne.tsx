import React from "react";
import InfoContent from "../InfoContent";
import ContentContainerFull from "../reusable/ContentContainerFull";
import HeaderText from "../reusable/HeaderText";
import DarkInput from "../reusable/DarkInput";
import Label from "../reusable/Label";
import CTAButton from "../CTAButton";
import { useTheme } from "@/context/ThemeContext";
import ContentContainerHalf from "../reusable/ContentContainerHalf";

const TokenLockerOne = () => {
  const { theme } = useTheme();

  return (
    <div className="token_locker-section w-full h-full flex justify-center items-center flex-col">
      <div className="p-5 w-full flex justify-start items-center flex-col gap-10">
        <ContentContainerFull>
          <div className=" w-full">
            <HeaderText>Token locker</HeaderText>
          </div>
          <div className=" w-full flex justify-center items-end gap-5 mt-5">
            <div className="flex flex-col gap-3 w-full justify-center items-start">
              <Label labelText="Mint Address" />
              <DarkInput onChange={() => {}} value={""} placeholder="|" />
            </div>

            <CTAButton
              text="Load"
              font="font-poppins font-semibold"
              arrowSize="w-0 h-0" // Customize the arrow size
              paddingY="py-3"
              paddingX="px-5 mt-6 w-[100px] rounded-lg" // Customize the horizontal padding
              gap="gap-1" // Customize the gap between text and arrow
              onClick={() => console.log("Button clicked!")}
            />
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
              {["#", "Token", "Version", "Decimals", "Supply"].map(
                (title, i) => {
                  return (
                    <h6
                      key={i}
                      className={`font-[OpenSauceRegular] text-xs font-normal ${
                        theme === "light" ? "text-black" : "text-[#FCFCFC]"
                      }`}
                    >
                      {title}
                    </h6>
                  );
                }
              )}
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
                  Robotax
                </h6>
                <h6
                  className={`font-[OpenSauceRegular] text-xs font-normal ${
                    theme === "light" ? "text-[#525252]" : "text-[#BABFD2]"
                  }`}
                >
                  Spl Token
                </h6>
                <h6
                  className={`font-[OpenSauceRegular] text-xs font-normal ${
                    theme === "light" ? "text-[#525252]" : "text-[#BABFD2]"
                  }`}
                >
                  2
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

          <div className="flex justify-between items-start w-full gap-10  mt-6">
            <ContentContainerHalf>
              <div className=" w-full">
                <h6
                  className={`font-poppins text-left ${
                    theme === "light" ? "text-black" : "text-white"
                  } text-xs capitalize font-medium`}
                >
                  create locker
                </h6>
              </div>
              <div className=" w-full">
                <div className="flex justify-between items-center w-full mt-5">
                  <Label labelText="Token Amount" />

                  <p
                    className={`text-xs ${
                      theme === "light" ? "text-[#898E92]" : "text-[#BABFD2]"
                    } font-[OpenSauceRegular]`}
                  >
                    Balance:0
                  </p>
                </div>
                <div className=" mt-4 relative">
                  <DarkInput onChange={() => {}} value={""} placeholder="0" />

                  <div
                    className={`bg-purple-gradient absolute top-0 right-0 w-12 h-full rounded-tr-xl rounded-br-xl flex justify-center items-center text-white p-2 text-xs  font-[OpenSauceRegular]`}
                  >
                    Max
                  </div>
                </div>
                <div className=" w-full">
                  <div className="flex justify-between items-center w-full mt-5">
                    <Label labelText="Unlock Schedule" />
                  </div>
                  <div className=" mt-4 relative">
                    <DarkInput
                      onChange={() => {}}
                      value={""}
                      placeholder="25/08/2025, 12:00 AM"
                    />
                    <div className=" absolute cursor-pointer top-0 right-0 w-12 h-full flex justify-center items-center">
                      <img
                        src="./calender.svg"
                        className=" object-cover h-4 w-4"
                        alt=" calender"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <CTAButton
                text="Create"
                font="font-poppins font-semibold"
                arrowSize="w-0 h-0" // Customize the arrow size
                paddingY="py-3"
                paddingX="px-5 mt-5 w-full " // Customize the horizontal padding
                gap="gap-1" // Customize the gap between text and arrow
                onClick={() => console.log("Button clicked!")}
              />
            </ContentContainerHalf>
            <ContentContainerHalf>
              <div className=" h-[260px] w-full">
                <div className=" w-full">
                  <h6
                    className={`font-poppins text-left ${
                      theme === "light" ? "text-black" : "text-white"
                    } text-xs capitalize font-medium`}
                  >
                    existing lockers
                  </h6>
                </div>
                <div className=" h-full w-full flex justify-center items-center">
                  <Label labelText="no lockers found" />
                </div>
              </div>
            </ContentContainerHalf>
          </div>
        </ContentContainerFull>

        <InfoContent />
      </div>
    </div>
  );
};

export default TokenLockerOne;
