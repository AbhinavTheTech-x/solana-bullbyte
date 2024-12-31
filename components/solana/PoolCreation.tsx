import React, { useState } from "react";
import InfoContent from "../InfoContent";
import { motion } from "framer-motion";
import TokenVRightSide from "../TokenVRightSide";
import { useTheme } from "@/context/ThemeContext";
import CTAButton from "../CTAButton";
import Switch from "../Switch";
import ContentContainerHalf from "../reusable/ContentContainerHalf";
import HeaderText from "../reusable/HeaderText";
import Label from "../reusable/Label";
import DarkInput from "../reusable/DarkInput";
import IncrementInput from "../reusable/IncrementInput";

const PoolCreation = () => {
  const [isAdvancedOptions, setIsAdvancedOptions] = useState(false);
  const handleToggleOptions = () => {
    setIsAdvancedOptions((prev) => !prev);
  };
  const { theme } = useTheme();
  return (
    <div className="pool-creation-section w-full h-full flex justify-center items-center flex-col">
      <div className="p-5 w-full flex justify-start items-center flex-col gap-10">
        <div className="h-full w-full flex justify-between items-start gap-10">
          <ContentContainerHalf>
            <div className=" w-full mb-5">
              <HeaderText>create openBOOK Market ID</HeaderText>
            </div>

            <form className="w-full flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <Label labelText="Basic Token" />
                <DarkInput placeholder="|" type={"number"} value={"dummy"} />

                <p
                  className={`text-xs ${
                    theme === "light" ? "text-[#231F20]" : "text-[#B0ADBD]"
                  } text-right mt-1 font-[OpenSauceRegular] capitalize`}
                >
                  prefer not to enter?{" "}
                  <span
                    className={` ${
                      theme === "light" ? "text-[#7154E6]" : "text-[#FCFCFC]"
                    } cursor-pointer`}
                  >
                    go back to selection
                  </span>
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <Label labelText="Quote Token" />
                <DarkInput placeholder="|" type={"number"} value={"dummy"} />

                <p
                  className={`text-xs ${
                    theme === "light" ? "text-[#231F20]" : "text-[#B0ADBD]"
                  } text-right mt-1 font-[OpenSauceRegular] capitalize`}
                >
                  prefer not to enter?{" "}
                  <span
                    className={` ${
                      theme === "light" ? "text-[#7154E6]" : "text-[#FCFCFC]"
                    } cursor-pointer`}
                  >
                    go back to selection
                  </span>
                </p>
              </div>

              <div>
                <Label labelText="Min Order Size" />
                <IncrementInput
                  value={200}
                  onDecrement={() => {}}
                  onIncrement={() => {}}
                />
              </div>
              <div className="">
                <Label labelText="Min Order Size" />
                <IncrementInput
                  value={200}
                  onDecrement={() => {}}
                  onIncrement={() => {}}
                />
              </div>
              <div className="">
                <Label labelText="price increment" />
                <IncrementInput
                  value={200}
                  onDecrement={() => {}}
                  onIncrement={() => {}}
                />
              </div>
              <div className="">
                <Label labelText="configuration" />

                <div
                  id="additionalInput"
                  style={{ boxShadow: "2px 2px 10px 0px #4B68DA47" }}
                  className={`w-full px-3 py-2.5 h-[44px] flex justify-between items-center mt-1 rounded-lg border ${
                    theme === "light"
                      ? "border-[#C0C7E1] shadow-[2px 2px 10px 0px #4B68DA47] bg-white text-black "
                      : "border-formDarkBorder text-white shadow-formDarkShadow bg-inputDark"
                  } text-sm placeholder:text-[#AFAF9F] focus:outline-none focus:border-blue-500`}
                >
                  <p
                    className={`font-[OpenSauceRegular] text-[13px]  ${
                      theme === "light" ? "text-[#575461]" : "text-[#FCFCFC]"
                    }`}
                  >
                    0.29 sol
                  </p>
                  <p
                    className={`font-[OpenSauceRegular] text-[13px]  ${
                      theme === "light" ? "text-[#575461]" : "text-[#FCFCFC]"
                    }`}
                  >
                    1.4 sol
                  </p>
                  <p className=" bg-[#D6D6EE] px-2 py-1.5 rounded-lg font-[OpenSauceRegular] text-[13px] text-[#575461]">
                    2.7 sol
                  </p>
                </div>
              </div>
              <div className=" w-full">
                <div className="flex justify-between items-center w-full py-5">
                  <h6
                    className={`${
                      theme === "light" ? "text-[#231F20]" : "text-[#FCFCFC]"
                    } font-[OpenSauceMedium] text-sm font-medium`}
                  >
                    Add Social Links
                  </h6>
                  <Switch
                    onChange={handleToggleOptions}
                    checked={isAdvancedOptions}
                  />
                </div>
                {isAdvancedOptions && (
                  <motion.form
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 300 }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="w-full flex flex-col gap-4 mb-4 transition-opacity ease-in-out"
                  >
                    <div className="">
                      <Label labelText="event queue length" />
                      <IncrementInput
                        value={2978}
                        onDecrement={() => {}}
                        onIncrement={() => {}}
                      />
                      <p className="text-xs text-[#B2AFBF] text-right mt-2 font-[OpenSauceRegular] capitalize">
                        262156 bytes
                      </p>
                    </div>
                    <div className="">
                      <Label labelText="request queue length" />
                      <IncrementInput
                        value={63}
                        onDecrement={() => {}}
                        onIncrement={() => {}}
                      />

                      <p className="text-xs text-[#B2AFBF] text-right mt-2 font-[OpenSauceRegular] capitalize">
                        5636 bytes
                      </p>
                    </div>
                    <div className="">
                      <Label labelText="orderbook length" />
                      <IncrementInput
                        value={909}
                        onDecrement={() => {}}
                        onIncrement={() => {}}
                      />
                      <p className="text-xs text-[#B2AFBF] text-right mt-2 font-[OpenSauceRegular] capitalize">
                        80084 bytes
                      </p>
                    </div>
                  </motion.form>
                )}
              </div>
              <div
                className={`w-full h-max rounded-xl mt-4 border ${
                  theme === "light"
                    ? "border border-[#DCD2EB] bg-[#F5F4FF]"
                    : "bg-[#564075] shadow-formDarkShadow border-formDarkBorder"
                } p-5`}
              >
                <p
                  className={`font-poppins font-normal text-center ${
                    theme === "light" ? "text-[#484747]" : "text-[#C7C5DB]"
                  } text-sm leading-relaxed`}
                >
                  When creating an OpenBook ID, you need to complete two signing
                  actions: first generate the market information, then you can
                  create the market. The second signing utilizes the information
                  generated by the first, thus the execution process may be
                  affected by local network conditions. If the operation
                  continues to fail, consider switching to a more stable network
                  connection or enabling the global mode of a VPN before
                  attempting the operation again.
                </p>
              </div>
              <CTAButton
                font="font-poppins font-semibold"
                text="Create Market"
                arrowSize="w-0 h-0" // Customize the arrow size
                paddingY="py-3"
                paddingX="px-6 w-max mx-auto " // Customize the horizontal padding
                gap="gap-1" // Customize the gap between text and arrow
                onClick={() => console.log("Button clicked!")}
              />
            </form>
          </ContentContainerHalf>

          <TokenVRightSide isNot={false} />
        </div>
        <InfoContent />
      </div>
    </div>
  );
};

export default PoolCreation;
