import React from "react";
import InfoContent from "../InfoContent";
import ContentContainerFull from "../reusable/ContentContainerFull";
import HeaderText from "../reusable/HeaderText";
import { useTheme } from "@/context/ThemeContext";
import DarkInput from "../reusable/DarkInput";
import CTAButton from "../CTAButton";
import Label from "../reusable/Label";

const Burner = () => {
  const { theme } = useTheme();

  return (
    <div className="burner-section w-full h-full flex justify-center items-center flex-col">
      <div className="p-5 w-full flex justify-start items-center flex-col gap-10">
        <ContentContainerFull>
          <div className=" w-full">
            <HeaderText>Burner: Burn your Assets (SPL/SPL22/LP)</HeaderText>
          </div>
          <div className="flex justify-between items-start w-full gap-10  mt-6">
            <div
              className={`${
                theme === "light"
                  ? "bg-white border-[#DCD2EB] "
                  : "bg-[#3F2D58] border-[#4B4868] shadow-[4px 4px 30px 0px #3D54AB24]"
              } border rounded-xl h-[267px] p-4 w-1/2`}
            >
              <div className=" w-full flex justify-between items-center gap-5 ">
                <DarkInput onChange={() => {}} value={""} placeholder="|" />
                <CTAButton
                  text="Search"
                  font="font-poppins font-semibold"
                  arrowSize="w-0 h-0" // Customize the arrow size
                  paddingY="py-3"
                  paddingX="px-5 w-[100px]" // Customize the horizontal padding
                  gap="gap-1" // Customize the gap between text and arrow
                  onClick={() => console.log("Button clicked!")}
                />
              </div>
              <div className=" w-full mt-4">
                <Label labelText="Token Details" />
                <div
                  className={`${
                    theme === "light"
                      ? "bg-[#F5F4FF] border-[#EDE3FC]"
                      : "bg-[#686587] border-[#C0C7E1] shadow-[2px 2px 10px 0px #4B68DA47]"
                  } border h-max w-full rounded-xl p-4 mt-3`}
                >
                  <div className="flex justify-between items-center w-full py-1">
                    <h6
                      className={`font-poppins font-normal text-xs ${
                        theme === "light" ? "text-[#747474]" : "text-white"
                      }`}
                    >
                      Supply
                    </h6>
                    <h6
                      className={`font-poppins font-normal text-xs ${
                        theme === "light" ? "text-black" : "text-white"
                      }`}
                    >
                      ---
                    </h6>
                  </div>

                  <div className="flex justify-between items-center w-full py-1">
                    <h6
                      className={`font-poppins font-normal text-xs ${
                        theme === "light" ? "text-[#747474]" : "text-white"
                      }`}
                    >
                      Balance
                    </h6>
                    <h6
                      className={`font-poppins font-normal text-xs ${
                        theme === "light" ? "text-black" : "text-white"
                      }`}
                    >
                      ---
                    </h6>
                  </div>

                  <div className="flex justify-between items-center w-full py-1">
                    <h6
                      className={`font-poppins font-normal text-xs ${
                        theme === "light" ? "text-[#747474]" : "text-white"
                      }`}
                    >
                      Program Id
                    </h6>
                    <h6
                      className={`font-poppins font-normal text-xs ${
                        theme === "light" ? "text-black" : "text-white"
                      }`}
                    >
                      ---
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${
                theme === "light"
                  ? "bg-white border-[#DCD2EB] "
                  : "bg-[#3F2D58] border-[#4B4868] shadow-[4px 4px 30px 0px #3D54AB24]"
              } border rounded-xl h-[268px] p-4 w-1/2`}
            >
              <div
                className={` h-max w-full rounded-xl`}
              >
                <div className="flex justify-between items-center w-full py-1">
                  <h6
                    className={`font-poppins font-normal text-xs ${
                      theme === "light" ? "text-[#747474]" : "text-white"
                    }`}
                  >
                    Balance
                  </h6>
                  <h6
                    className={`font-poppins font-normal text-xs ${
                      theme === "light" ? "text-black" : "text-white"
                    }`}
                  >
                    ---
                  </h6>
                </div>

                <div className="flex justify-between items-center w-full py-1">
                  <h6
                    className={`font-poppins font-normal text-xs ${
                      theme === "light" ? "text-[#747474]" : "text-white"
                    }`}
                  >
                    Program Id
                  </h6>
                  <h6
                    className={`font-poppins font-normal text-xs ${
                      theme === "light" ? "text-black" : "text-white"
                    }`}
                  >
                    ---
                  </h6>
                </div>
              </div>
              <div className=" w-full flex justify-between items-center gap-5 mt-5 ">
                <DarkInput
                  onChange={() => {}}
                  value={""}
                  placeholder="Enter Asset Address"
                />

                <CTAButton
                  text="All"
                  font="font-poppins font-semibold"
                  arrowSize="w-0 h-0" // Customize the arrow size
                  paddingY="py-3"
                  paddingX="px-5 w-[100px] rounded-lg" // Customize the horizontal padding
                  gap="gap-1" // Customize the gap between text and arrow
                  onClick={() => console.log("Button clicked!")}
                />
              </div>
              <CTAButton
                text="Burn"
                font="font-poppins font-semibold"
                arrowSize="w-0 h-0" // Customize the arrow size
                paddingY="py-3"
                paddingX="px-8 mt-5 w-[170px] mx-auto" // Customize the horizontal padding
                gap="gap-1" // Customize the gap between text and arrow
                onClick={() => console.log("Button clicked!")}
              />
            </div>
          </div>
          <div className="mt-6 w-full">
            <h6
              className={`font-poppins my-3 text-left w-full ${
                theme === "light" ? "text-black" : "text-white"
              } text-sm capitalize font-medium`}
            >
              Details: Burn history
            </h6>
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
                {[
                  "Asset Address",
                  "Amount",
                  "Burned At",
                  "Transaction",
                  "Status",
                ].map((title, i) => {
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
                })}
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
          </div>
        </ContentContainerFull>

        <InfoContent />
      </div>
    </div>
  );
};

export default Burner;
