import React, { useState } from "react";
import HeaderText from "../reusable/HeaderText";
import ContentContainerFull from "../reusable/ContentContainerFull";
import Label from "../reusable/Label";
import LightIncrementInput from "../reusable/LightIncrementInput";
import CTAButton from "../CTAButton";
import { useTheme } from "@/context/ThemeContext";
import Switch from "../Switch";
import LightInput from "../reusable/LightInput";

const MoonshotBot = () => {
  const [txnAmount, setTxnAmount] = useState("0.25");
  const [isLoad, setIsLoad] = useState(false);
  const [isVolumeMode, setIsVolumeMode] = useState(false);

  const handleToggleVolumeMode = () => {
    setIsVolumeMode((prev) => !prev);
  };
  const { theme } = useTheme();

  return (
    <div className="v1Token-section w-full h-full flex justify-center items-center flex-col">
      <div className="p-5 w-full flex justify-start items-start flex-col gap-10">
        <ContentContainerFull>
          <div className=" w-full">
            <div className="flex justify-between items-center w-full">
              <HeaderText>Volume Mode</HeaderText>
              <Switch
                onChange={handleToggleVolumeMode}
                checked={isVolumeMode}
              />
            </div>
          </div>

          <div className="flex flex-col gap-1 mt-3">
            <Label labelText=" Mint Address" />

            <div className=" flex justify-start mt-1 items-center gap-4">
              <LightInput onChange={() => {}} placeholder="|" value={""} />
              <CTAButton
                text="Load"
                font="font-poppins font-semibold"
                arrowSize="w-0 h-0" // Customize the arrow size
                paddingY="py-2.5"
                paddingX="px-6 w-[140px] rounded-full " // Customize the horizontal padding
                gap="gap-1" // Customize the gap between text and arrow
                onClick={() => setIsLoad(!isLoad)}
              />
            </div>

            <div className="flex justify-between items-center mt-5 gap-5 w-full">
              <div className="w-1/2">
                <div className="">
                  <Label labelText="Total Txn Count" />
                  <LightIncrementInput
                    value={20}
                    onDecrement={() => {}}
                    onIncrement={() => {}}
                  />

                  <p
                    className={`text-xs ${
                      theme === "light" ? "text-[#231F20]" : "text-[#fcfcfc]"
                    } text-left mt-2 font-[OpenSauceRegular] capitalize`}
                  >
                    Estimated Time: {" "}
                    <span className="font-[OpenSauceMedium]">1 minute</span>
                  </p>
                </div>
              </div>
              <div className="w-1/2">
                <div className="">
                  <Label labelText="Rate (Txn/min)" />
                  <LightIncrementInput
                    value={20}
                    onDecrement={() => {}}
                    onIncrement={() => {}}
                  />

                  <p
                    className={`text-xs invisible ${
                      theme === "light" ? "text-[#231F20]" : "text-[#fcfcfc]"
                    } text-left mt-2 font-[OpenSauceRegular] capitalize`}
                  >
                    Estimated Volume:{" "}
                    <span className="font-[OpenSauceMedium]"> 0.00 $</span>
                  </p>
                </div>
              </div>
            </div>
            <div className=" w-full mt-7">
              <Label labelText="Txn Amount (SOL)" />
              <div className="flex justify-start items-center gap-4">
                <div
                  className={`flex justify-between items-center w-full py-1.5 mt-2 rounded-lg border px-1.5 border-[#C0C7E1] ${
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
              </div>
            </div>
            <CTAButton
              text="pay & Start(0.01581)"
              font="font-poppins font-semibold"
              arrowSize="w-0 h-0" // Customize the arrow size
              paddingY="py-2.5"
              paddingX="px-6  w-max mx-auto mt-6 rounded-full " // Customize the horizontal padding
              gap="gap-1" // Customize the gap between text and arrow
              onClick={() => setIsLoad(!isLoad)}
            />
            <div
              className={`w-full rounded-xl border p-3 mt-5 ${
                theme === "dark"
                  ? "bg-[#3F2D58]] border-[#4B4868]"
                  : "bg-[#F5F4FF] border-[#DAE2FF]"
              }`}
            >
              <h6
                className={`font-poppins font-medium text-xs ${
                  theme === "dark" ? "text-[#FCFCFC]" : "text-[#0F0F0F]"
                }`}
              >
                Moonshot Bot
              </h6>
              <p
                className={`font-poppins font-normal mt-2 text-xs ${
                  theme === "dark" ? "text-[#DFDCF2]" : "text-[#636363]"
                }`}
              >
                The Bumpi Bot is designed for bumping (micro-trading) the
                PumpFun tokens, making multiple small transactions to keep the
                token at the top of the PumpFun homepage. Here's how to start
                bumping your token with the Bumpi Bot:
              </p>
              <p
                className={`font-poppins font-normal capitalize mt-2 ml-2 text-xs ${
                  theme === "dark" ? "text-[#DFDCF2]" : "text-[#636363]"
                }`}
              >
                <span
                  className={`font-medium ${
                    theme === "dark" ? "text-[#FCFCFC]" : "text-[#0F0F0F]"
                  }`}
                >
                  • Load the Token:
                </span>
                Begin by loading the token using its mint address.
              </p>
              <p
                className={`font-poppins font-normal capitalize mt-1 ml-2 text-xs ${
                  theme === "dark" ? "text-[#DFDCF2]" : "text-[#636363]"
                }`}
              >
                <span
                  className={`font-medium ${
                    theme === "dark" ? "text-[#FCFCFC]" : "text-[#0F0F0F]"
                  }`}
                >
                  • Set Total Transactions:
                </span>
                Decide on the total number of transactions you want the bot to
                perform.
              </p>
              <p
                className={`font-poppins font-normal capitalize mt-1 ml-2 text-xs ${
                  theme === "dark" ? "text-[#DFDCF2]" : "text-[#636363]"
                }`}
              >
                <span
                  className={`font-medium ${
                    theme === "dark" ? "text-[#FCFCFC]" : "text-[#0F0F0F]"
                  }`}
                >
                  • Adjust the Rate:
                </span>
                the rate, which is the number of transactions per mint the bot
                will execute on the token. Each transaction consists of one buy
                and one sell, and the high volume of small transactions helps
                maintain the token’s visibility at the top of the homepage.
              </p>
              <p
                className={`font-poppins font-normal capitalize mt-1 ml-2 text-xs ${
                  theme === "dark" ? "text-[#DFDCF2]" : "text-[#636363]"
                }`}
              >
                <span
                  className={`font-medium ${
                    theme === "dark" ? "text-[#FCFCFC]" : "text-[#0F0F0F]"
                  }`}
                >
                  • Choose Transaction Amount:
                </span>
                Select the amount of SOL the bot will use for each buy and sell
                transaction.
              </p>
              <p
                className={`font-poppins font-normal mt-5 text-xs ${
                  theme === "dark" ? "text-[#DFDCF2]" : "text-[#636363]"
                }`}
              >
                For more information or if you have any questions, please
                contact us on Telegram or Twitter.
              </p>
            </div>
          </div>
        </ContentContainerFull>
      </div>
    </div>
  );
};

export default MoonshotBot;
