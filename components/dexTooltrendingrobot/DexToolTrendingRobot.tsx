import React, { useState } from "react";

import InfoContent from "../InfoContent";
import VolumeBotCard from "../VolumeBotCard";
import { useTheme } from "@/context/ThemeContext";
import CTAButton from "../CTAButton";
import ContentContainerHalf from "../reusable/ContentContainerHalf";
import HeaderText from "../reusable/HeaderText";
import Label from "../reusable/Label";
import DarkInput from "../reusable/DarkInput";
import LightIncrementInput from "../reusable/LightIncrementInput";
import LightPurpleWrapper from "../reusable/LightPurpleWrapper";

const DexToolTrendingRobot = () => {
  const [txnAmount, setTxnAmount] = useState("0.25");
  const { theme } = useTheme();
  return (
    <div className="v1Token-section w-full h-full flex justify-center items-center flex-col">
      <div className="p-5 w-full flex justify-start items-start flex-col gap-10">
        <div className="h-full w-full flex justify-between items-start gap-10">
          <ContentContainerHalf>
            <div className=" w-full">
              <HeaderText>Token address</HeaderText>

              <div className="flex flex-col gap-1 mt-3">
                <Label labelText=" Mint Address" />

                <div className=" flex justify-start mt-1 items-center gap-4">
                  <DarkInput placeholder="|" value={""} />
                  <CTAButton
                    text="Load"
                    font="font-poppins font-semibold"
                    arrowSize="w-0 h-0" // Customize the arrow size
                    paddingY="py-2.5"
                    paddingX="px-6  w-max mx-auto  rounded-lg " // Customize the horizontal padding
                    gap="gap-1" // Customize the gap between text and arrow
                    onClick={() => console.log("Button clicked!")}
                  />
                </div>
              </div>
              <LightPurpleWrapper margin="mt-4" padding="p-3">
                <div className="">
                  <Label labelText="Total Txn Count" />

                  <LightIncrementInput
                    value={2979}
                    onDecrement={() => {}}
                    onIncrement={() => {}}
                  />
                  <p
                    className={`text-xs ${
                      theme === "light" ? "text-[#231F20]" : "text-[#FCFCFC]"
                    } text-right mt-2 font-[OpenSauceRegular] capitalize`}
                  >
                    Estimated Time: 1 minute
                  </p>
                </div>
              </LightPurpleWrapper>

              <LightPurpleWrapper margin="mt-4" padding="p-3">
                <div className="">
                  <Label labelText="Total Txn Count" />

                  <LightIncrementInput
                    value={2979}
                    onDecrement={() => {}}
                    onIncrement={() => {}}
                  />
                  <p
                    className={`text-xs ${
                      theme === "light" ? "text-[#231F20]" : "text-[#FCFCFC]"
                    } text-right mt-2 font-[OpenSauceRegular] capitalize`}
                  >
                    Estimated Volume:{" "}
                    <span className="font-[OpenSauceMedium]"> 0.00 $</span>
                  </p>
                </div>
              </LightPurpleWrapper>
              <div className=" w-full mt-4">
                <Label labelText="Txn Amount (SOL)" />
                <div className="flex justify-start items-center gap-4">
                  <div
                    className={`flex justify-start items-center w-max py-1.5 mt-2 rounded-lg border px-1.5 border-[#C0C7E1] ${
                      theme === "light"
                        ? "bg-white shadow-[2px 2px 10px 0px #4B68DA47]"
                        : "bg-[#686587] text-white"
                    }`}
                  >
                    {["0.25", "0.5", "1", "2"].map((item, i) => {
                      return (
                        <p
                          onClick={() => setTxnAmount(item)}
                          key={i}
                          className={`font-poppins text-xs font-medium cursor-pointer rounded-md ${
                            txnAmount === item ? "bg-[#C59FFF]" : ""
                          } ${
                            theme === "dark" ? "text-white" : "text-[#171616]"
                          } px-4 py-1.5`}
                        >
                          {item}
                        </p>
                      );
                    })}
                  </div>
                  <input
                    type="tel"
                    placeholder="|"
                    className={`flex justify-start  items-center w-28 h-10 font-poppins text-xs outline-none py-1.5 mt-2 rounded-lg px-2 border border-[#C0C7E1] ${
                      theme === "light"
                        ? "bg-white shadow-[2px 2px 10px 0px #4B68DA47]"
                        : "bg-[#686587] text-white"
                    }`}
                  />
                </div>
              </div>
              <CTAButton
                text="pay & Start(0.01581)"
                font="font-poppins font-semibold"
                arrowSize="w-0 h-0" // Customize the arrow size
                paddingY="py-3"
                paddingX="px-6 w-max mx-auto mt-6 capitalize" // Customize the horizontal padding
                gap="gap-1" // Customize the gap between text and arrow
                onClick={() => console.log("Button clicked!")}
              />
            </div>
          </ContentContainerHalf>

          <VolumeBotCard />
        </div>
        <InfoContent />
      </div>
    </div>
  );
};

export default DexToolTrendingRobot;
