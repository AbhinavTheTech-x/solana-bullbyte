import React, { useState } from "react";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import Label from "../reusable/Label";
import LightInput from "../reusable/LightInput";
import Select from "../reusable/SelectInput";
import LightPurpleWrapper from "../reusable/LightPurpleWrapper";
import LightIncrementInput from "../reusable/LightIncrementInput";
import HeaderText from "../reusable/HeaderText";
import ContentContainerFull from "../reusable/ContentContainerFull";
import Switch from "../Switch";
import CTAButton from "../CTAButton";
const LiquidityManage = () => {
  const [isActive, setIsActive] = useState("OpenBook Market");
  const [configurationAmount, setConfigurationAmount] = useState("0.25");
  const [isAdvancedOptions, setIsAdvancedOptions] = useState(false);
  const handleToggleOptions = () => {
    setIsAdvancedOptions((prev) => !prev);
  };
  const { theme } = useTheme();

  const dummyOptions = [
    { value: "Token1", label: "Token 1" },
    { value: "Token2", label: "Token 2" },
    { value: "Token3", label: "Token 3" },
  ];
  return (
    <div className="v1Token-section w-full relative h-full flex justify-center items-center flex-col">
      <div className="p-5 w-full flex justify-start items-center flex-col gap-10">
        <div className="h-full w-full flex justify-between items-start gap-10">
          <ContentContainerFull>
            <div className="w-full">
              <div className=" w-full flex justify-between items-center">
                <HeaderText>Create OpenBook Market</HeaderText>
                <div
                  className={` ${
                    theme === "light"
                      ? "bg-[#DFE5F9]"
                      : "bg-[#686587] border-[#C0C7E1]"
                  } rounded-xl w-max px-2 py-2 flex justify-center items-center gap-2`}
                >
                  <p
                    onClick={() => setIsActive("OpenBook Market")}
                    className={`font-[OpenSauceRegular] text-xs px-2 py-1.5 rounded-md cursor-pointer ${
                      isActive === "OpenBook Market"
                        ? theme === "dark"
                          ? "bg-[#8986AA] text-white" // Dark theme active styles
                          : "bg-white text-[#4568DC]" // Light theme active styles
                        : theme === "dark"
                        ? "bg-transparent text-white" // Dark theme inactive styles
                        : "bg-transparent text-[#363636]" // Light theme inactive styles
                    }`}
                  >
                    OpenBook Market
                  </p>

                  <p
                    onClick={() => setIsActive("Liquidity Pool")}
                    className={`font-[OpenSauceRegular] text-xs px-2 py-1.5 rounded-md cursor-pointer ${
                      isActive === "Liquidity Pool"
                        ? theme === "dark"
                          ? "bg-[#8986AA] text-white" // Dark theme active styles
                          : "bg-white text-[#4568DC]" // Light theme active styles
                        : theme === "dark"
                        ? "bg-transparent text-white" // Dark theme inactive styles
                        : "bg-transparent text-[#363636]" // Light theme inactive styles
                    }`}
                  >
                    Liquidity Pool
                  </p>
                </div>
              </div>
              <p
                className={`${
                  theme === "light" ? "text-[#231F20]" : "text-[#DFDCF2]"
                } mt-2 font-[OpenSauceRegular] capitalize text-xs w-[70%]  font-normal`}
              >
                easily create your openBook market on salana without coding to
                create a liquidity pool later.
              </p>
            </div>

            <div className=" w-full mt-6">
              <LightPurpleWrapper padding="p-5" margin="">
                <div className=" flex justify-between items-center w-full gap-10">
                  <div className=" relative w-1/2">
                    <Label labelText="base token" />
                    <Select
                      onChange={() => {}}
                      value=""
                      options={dummyOptions}
                    />
                  </div>
                  <div className=" relative w-1/2">
                    <Label labelText="Quote token" />
                    <LightInput
                      className="mt-2"
                      value={""}
                      placeholder="|"
                      onChange={() => {}}
                    />
                  </div>
                </div>
              </LightPurpleWrapper>
            </div>
            <div className=" w-full mt-6">
              <LightPurpleWrapper padding="p-5" margin="">
                <div className=" flex justify-between items-center w-full gap-10">
                  <div className=" relative w-1/2">
                    <Label labelText="minimum order size" />
                    <Select
                      onChange={() => {}}
                      value=""
                      options={dummyOptions}
                    />
                  </div>
                  <div className=" relative w-1/2">
                    <Label labelText="minimum price tice size" />
                    <LightInput
                      className="mt-2"
                      value={""}
                      placeholder="|"
                      onChange={() => {}}
                    />
                  </div>
                </div>
              </LightPurpleWrapper>
            </div>
            <div className=" w-full">
              <div className="flex justify-start flex-col items-start gap-2 w-full py-5">
                <h6
                  className={`${
                    theme === "light" ? "text-[#231F20]" : "text-[#fcfcfc]"
                  } font-[OpenSauceMedium] capitalize text-sm font-medium`}
                >
                  advanced option (openBook market)
                </h6>
                <Switch
                  onChange={handleToggleOptions}
                  checked={isAdvancedOptions}
                />
              </div>
              {isAdvancedOptions && (
                <motion.form
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 180 }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-full flex flex-col gap-4 mb-4 transition-opacity ease-in-out"
                >
                  <div
                    className={`flex justify-start items-center w-max py-1.5 mt-2 rounded-lg gap-1 px-1.5 ${
                      theme === "light" ? "bg-[#EEF1FB]" : "bg-[#686587] "
                    } border border-[#C0C7E1]`}
                  >
                    {["0.29 SOL", "1.4 SOL", "2.7 SOL"].map((item, i) => {
                      return (
                        <p
                          onClick={() => setConfigurationAmount(item)}
                          key={i}
                          className={`font-[OpenSauceMedium] text-xs font-medium cursor-pointer rounded-md px-4 py-3 ${
                            configurationAmount === item
                              ? theme === "dark"
                                ? "bg-[#8986AA] text-white" // Dark theme selected
                                : "bg-[#EAE8F8] text-[#171616]" // Light theme selected
                              : theme === "dark"
                              ? "bg-transparent text-white" // Dark theme unselected
                              : "bg-white text-[#171616]" // Light theme unselected
                          }`}
                        >
                          {item}
                        </p>
                      );
                    })}
                  </div>
                  <div className=" flex justify-between items-center w-full gap-4">
                    <div className=" w-1/3">
                      <Label labelText="Rate (Txn/min)" />
                      <LightIncrementInput
                        value={2990}
                        onDecrement={() => {}}
                        onIncrement={() => {}}
                      />

                      <p className="text-xs text-[#B2AFBF] text-right mt-2 font-[OpenSauceRegular] capitalize">
                        262156 bytes
                      </p>
                    </div>
                    <div className="w-1/3">
                      <Label labelText="Request Queue Length" />
                      <LightIncrementInput
                        value={90}
                        onDecrement={() => {}}
                        onIncrement={() => {}}
                      />

                      <p className="text-xs text-[#B2AFBF] text-right mt-2 font-[OpenSauceRegular] capitalize">
                        5636 bytes
                      </p>
                    </div>
                    <div className=" w-1/3">
                      <Label labelText="Orderbook Length" />
                      <LightIncrementInput
                        value={90}
                        onDecrement={() => {}}
                        onIncrement={() => {}}
                      />
                      <p className="text-xs text-[#B2AFBF] text-right mt-2 font-[OpenSauceRegular] capitalize">
                        80084 bytes
                      </p>
                    </div>
                  </div>
                </motion.form>
              )}
            </div>
            <div
              className={`w-full h-max rounded-xl mt-4 border ${
                theme === "light"
                  ? "bg-[#F5F4FF] border-[#DCD2EB]"
                  : "bg-[#686587] border-[#C1B8CD]"
              } p-5`}
            >
              <p
                className={`font-poppins font-normal ${
                  theme === "light" ? "text-[#484747]" : "text-[#DFDCF2]"
                } text-sm text-center capitalize leading-relaxed`}
              >
                When creating an OpenBook ID, you need to complete two signing
                actions: first generate the market information, then you can
                create the market. The second signing utilizes the information
                generated by the first, thus the execution process may be
                affected by local network conditions. If the operation continues
                to fail, consider switching to a more stable network connection
                or enabling the global mode of a VPN before attempting the
                operation again. Create Market
              </p>
            </div>
            <CTAButton
              text=" Create"
              font="font-poppins font-semibold"
              arrowSize="w-0 h-0" // Customize the arrow size
              paddingY="py-3"
              paddingX="px-8 mt-6" // Customize the horizontal padding
              gap="gap-1" // Customize the gap between text and arrow
              onClick={() => console.log("Button clicked!")}
            />
          </ContentContainerFull>
        </div>
      </div>
    </div>
  );
};

export default LiquidityManage;
