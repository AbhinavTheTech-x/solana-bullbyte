import React, { useState } from "react";
import InfoContent from "../InfoContent";
import ContentContainerFull from "../reusable/ContentContainerFull";
import HeaderText from "../reusable/HeaderText";
import { useTheme } from "@/context/ThemeContext";
import Label from "../reusable/Label";
import DarkInput from "../reusable/DarkInput";
import CTAButton from "../CTAButton";
import LightPurpleWrapper from "../reusable/LightPurpleWrapper";
import Switch from "../Switch";

const TokenAirDrop = () => {
  const [isSlowMode, setIsSlowMode] = useState(false);
  const [isAssociatedAccount, setIsAssociatedAccount] = useState(true);
  const [isLiquidityProviders, setIsLiquidityProviders] = useState(true);
  const [isFixedAmount, setIsFixedAmount] = useState(true);
  const [isDynamicAmount, setIsDynamicAmount] = useState(false);

  const handleToggleSlowMode = () => {
    setIsSlowMode((prev) => !prev);
  };
  const handleToggleAssociatedAccount = () => {
    setIsAssociatedAccount((prev) => !prev);
  };
  const handleToggleLiquidityProviders = () => {
    setIsLiquidityProviders((prev) => !prev);
  };
  const handleToggleFixedAmount = () => {
    setIsFixedAmount((prev) => !prev);
  };
  const handleToggleDynamicAmount = () => {
    setIsDynamicAmount((prev) => !prev);
  };
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
              <Label labelText="Token Contract Address" />
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
            <div className=" w-1/2">
              <LightPurpleWrapper margin="" padding="p-4">
                <h6
                  className={`font-poppins text-left ${
                    theme === "light" ? "text-black" : "text-white"
                  } text-xs capitalize font-medium`}
                >
                  Setup
                </h6>
                <div className=" w-full mt-4">
                  <div className="flex justify-between items-center w-full py-2 ">
                    <Label labelText="Slow Mode" />
                    <Switch
                      onChange={handleToggleSlowMode}
                      checked={isSlowMode}
                    />
                  </div>
                  <div className="flex justify-between items-center w-full py-2 ">
                    <Label labelText="create associated accounts" />
                    <Switch
                      onChange={handleToggleAssociatedAccount}
                      checked={isAssociatedAccount}
                    />
                  </div>
                  <div className="flex justify-between items-center w-full py-2 ">
                    <Label labelText="Include liquidity providers" />
                    <Switch
                      onChange={handleToggleLiquidityProviders}
                      checked={isLiquidityProviders}
                    />
                  </div>
                  <div className=" w-full my-2">
                    <h6
                      className={`font-poppins text-left ${
                        theme === "light" ? "text-black" : "text-white"
                      } text-xs capitalize font-medium`}
                    >
                      Allocation Method
                    </h6>
                    <div className="flex justify-between items-center w-full py-2 mt-2 ">
                      <Label labelText="Fixed Amount" />
                      <Switch
                        onChange={handleToggleFixedAmount}
                        checked={isFixedAmount}
                      />
                    </div>
                    <div className="flex justify-between items-center w-full py-2 ">
                      <Label labelText="Dynamic Amount" />
                      <Switch
                        onChange={handleToggleDynamicAmount}
                        checked={isDynamicAmount}
                      />
                    </div>
                  </div>
                </div>
                <div className=" w-full">
                  <div className="flex justify-between items-center w-full mt-5">
                    <Label labelText="amount per target" />

                    <p className=" text-xs text-[#898E92] font-[OpenSauceRegular]">
                      Balance:0
                    </p>
                  </div>
                  <div className=" mt-2 relative">
                    <DarkInput onChange={() => {}} value={""} placeholder="0" />

                    <div className=" bg-purple-gradient absolute top-0 right-0 w-12 h-full rounded-tr-xl rounded-br-xl flex justify-center items-center text-white p-2 text-xs  font-[OpenSauceRegular]">
                      Max
                    </div>
                  </div>
                  <div className=" w-full">
                    <div className="flex justify-between items-center w-full mt-5">
                      <Label labelText="minimum token balance" />
                    </div>
                    <div className=" mt-2 relative">
                      <DarkInput
                        onChange={() => {}}
                        value={""}
                        placeholder="0"
                      />
                    </div>
                  </div>
                </div>
              </LightPurpleWrapper>
              <LightPurpleWrapper margin="mt-5" padding="p-4">
                <h6
                  className={`font-poppins text-left ${
                    theme === "light" ? "text-black" : "text-white"
                  } text-xs capitalize font-medium`}
                >
                  overview
                </h6>
                <p
                  className={`font-poppins text-left ${
                    theme === "light" ? "text-[#636363]" : "text-[#fcfcfc]"
                  } mt-2 text-xs capitalize font-normal`}
                >
                  before sending out you airdrop ensure all fields are correctly
                  filled out!
                </p>
                <div className=" w-full flex-col flex justify-center items-center mt-5 gap-3">
                  <button
                    className={`border w-full py-4 px-4 rounded-xl capitalize font-[OpenSauceRegular] text-xs ${
                      theme === "light"
                        ? "text-black bg-white border-[#716363]"
                        : " bg-[#564075] text-white border-[#4B4868] shadow-[4px 4px 30px 0px #3D54AB24]"
                    }`}
                  >
                    select target
                  </button>
                  <button
                    className={`border  w-full py-4 px-4 rounded-xl capitalize font-[OpenSauceRegular] text-xs ${
                      theme === "light"
                        ? "text-black bg-white border-[#716363]"
                        : " bg-[#564075] text-white border-[#4B4868] shadow-[4px 4px 30px 0px #3D54AB24]"
                    }`}
                  >
                    insufficient balance to cover supply 0\0
                  </button>
                  <button
                    className={`border  w-full py-4 px-4 rounded-xl capitalize font-[OpenSauceRegular] text-xs ${
                      theme === "light"
                        ? "text-black bg-white border-[#716363]"
                        : " bg-[#564075] text-white border-[#4B4868] shadow-[4px 4px 30px 0px #3D54AB24]"
                    }`}
                  >
                    you must have a custom RPC url set use this feature this can
                    be set within settings
                  </button>
                </div>
              </LightPurpleWrapper>
            </div>
            <div className="w-1/2">
              <LightPurpleWrapper margin="" padding="p-4">
                <div className=" h-[435px] w-full">
                  <h6
                    className={`font-poppins text-left ${
                      theme === "light" ? "text-black" : "text-white"
                    } text-xs capitalize font-medium`}
                  >
                    targets
                  </h6>
                  <div className=" w-full flex-col flex justify-center items-center mt-5 gap-3">
                    <button
                      className={`border  w-full py-4 px-4 rounded-xl capitalize font-[OpenSauceRegular] text-xs ${
                        theme === "light"
                          ? "text-black bg-white border-[#716363]"
                          : " bg-[#564075] text-white border-[#4B4868] shadow-[4px 4px 30px 0px #3D54AB24]"
                      }`}
                    >
                      by token mint
                    </button>
                    <button
                      className={`border  w-full py-4 px-4 rounded-xl capitalize font-[OpenSauceRegular] text-xs ${
                        theme === "light"
                          ? "text-black bg-white border-[#716363]"
                          : " bg-[#564075] text-white border-[#4B4868] shadow-[4px 4px 30px 0px #3D54AB24]"
                      }`}
                    >
                      upload CSV
                    </button>
                    <button
                      className={`border  w-full py-4 px-4 rounded-xl capitalize font-[OpenSauceRegular] text-xs ${
                        theme === "light"
                          ? "text-black bg-white border-[#716363]"
                          : " bg-[#564075] text-white border-[#4B4868] shadow-[4px 4px 30px 0px #3D54AB24]"
                      }`}
                    >
                      manual entry
                    </button>
                  </div>
                </div>
              </LightPurpleWrapper>
              <LightPurpleWrapper margin="mt-5" padding="p-4">
                <div className=" flex justify-between items-center w-full py-2">
                  <h6
                    className={`font-[OpenSauceMedium] text-left ${
                      theme === "light" ? "text-black" : "text-white"
                    } text-xs capitalize font-medium`}
                  >
                    Targets
                  </h6>
                  <p
                    className={`font-[OpenSauceMedium] text-left ${
                      theme === "light" ? "text-black" : "text-white"
                    } text-xs capitalize font-normal`}
                  >
                    0
                  </p>
                </div>
                <div className=" flex justify-between items-center w-full py-2">
                  <h6
                    className={`font-[OpenSauceMedium] text-left ${
                      theme === "light" ? "text-black" : "text-white"
                    } text-xs capitalize font-medium`}
                  >
                    ATA creation cost
                  </h6>
                  <p
                    className={`font-[OpenSauceMedium] text-left ${
                      theme === "light" ? "text-black" : "text-white"
                    } text-xs capitalize font-normal`}
                  >
                    -0.00sol
                  </p>
                </div>
                <div className=" flex justify-between items-center w-full py-2">
                  <h6
                    className={`font-[OpenSauceMedium] text-left ${
                      theme === "light" ? "text-black" : "text-white"
                    } text-xs capitalize font-medium`}
                  >
                    fixed amount
                  </h6>
                  <p
                    className={`font-[OpenSauceMedium] text-left ${
                      theme === "light" ? "text-black" : "text-white"
                    } text-xs capitalize font-normal`}
                  >
                    0.0
                  </p>
                </div>
                <div className=" flex justify-between items-center w-full py-2">
                  <h6
                    className={`font-[OpenSauceMedium] text-left ${
                      theme === "light" ? "text-black" : "text-white"
                    } text-xs capitalize font-medium`}
                  >
                    total to send
                  </h6>
                  <p
                    className={`font-[OpenSauceMedium] text-left ${
                      theme === "light" ? "text-black" : "text-white"
                    } text-xs capitalize font-normal`}
                  >
                    0.0
                  </p>
                </div>
                <div className=" flex justify-between items-center w-full py-2">
                  <h6
                    className={`font-[OpenSauceMedium] text-left ${
                      theme === "light" ? "text-black" : "text-white"
                    } text-xs capitalize font-medium`}
                  >
                    total balance
                  </h6>
                  <p
                    className={`font-[OpenSauceMedium] text-left ${
                      theme === "light" ? "text-black" : "text-white"
                    } text-xs capitalize font-normal`}
                  >
                    0.0
                  </p>
                </div>
                <CTAButton
                  text="Send Airdrop"
                  font="font-poppins font-semibold"
                  arrowSize="w-0 h-0"
                  paddingY="py-3"
                  paddingX="px-6 mt-[44px] w-full" // Customize the horizontal padding
                  gap="gap-1"
                  onClick={() => console.log("Button clicked!")}
                />
              </LightPurpleWrapper>
            </div>
          </div>
        </ContentContainerFull>
        <InfoContent />
      </div>
    </div>
  );
};

export default TokenAirDrop;
