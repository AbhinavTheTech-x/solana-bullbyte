import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import Switch from "../Switch";
import Label from "../reusable/Label";
import LightInput from "../reusable/LightInput";
import Select from "../reusable/SelectInput";
import LightPurpleWrapper from "../reusable/LightPurpleWrapper";
import LightIncrementInput from "../reusable/LightIncrementInput";
import HeaderText from "../reusable/HeaderText";
import ContentContainerFull from "../reusable/ContentContainerFull";
import CTAButton from "../CTAButton";

const CreateLiquidityBuy = () => {
  const [isActiveWallet, setIsActiveWallet] = useState("Import Wallet Buy");
  const [value, setValue] = useState("Default 0.00003");
  const [isAdvancedOptions, setIsAdvancedOptions] = useState(false);

  const { theme } = useTheme();

  const handleToggleOptions = () => {
    setIsAdvancedOptions((prev) => !prev);
  };
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
                <div className="flex justify-start items-center gap-1 bg-[#E7EDFF] rounded-lg px-3 py-3">
                  <img
                    src="./reset-all.svg"
                    className=" w-4 h-4 object-cover"
                    alt="live"
                  />
                  <p className="text-[#4568DC] font-poppins capitalize font-normal text-xs">
                    security reminder must read!
                  </p>
                </div>
              </div>
              <p
                className={`${
                  theme === "light" ? "text-[#231F20]" : "text-[#DFDCF2]"
                } mt-2 font-[OpenSauceRegular] capitalize text-xs w-[70%]  font-normal`}
              >
                While creating a liquidity pool, simultaneously buy tokens to
                effectively simplify the transaction process and accelerate
                market entry. Get a step ahead, seize the opportunity, and thus
                gain potential profits earlier.
              </p>
            </div>
            <div className=" w-full mt-6">
              <LightPurpleWrapper>
                <div className=" relative w-full">
                  <Label labelText="base token" />
                  <Select onChange={() => {}} value="" options={dummyOptions} />
                  <p
                    className={`text-xs text-right mt-3 ${
                      theme === "light" ? "text-[#231F20]" : "text-white"
                    } capitalize font-[OpenSauceRegular]`}
                  >
                    can’t find the currency?
                    <span className="text-[#7154E6]">try customizing</span>
                  </p>
                </div>
              </LightPurpleWrapper>
            </div>

            <div className=" w-full mt-6">
              <LightPurpleWrapper>
                <div className=" relative w-full">
                  <Label labelText=" Quote token" />
                  <Select onChange={() => {}} value="" options={dummyOptions} />
                  <p
                    className={`text-xs text-right mt-3 ${
                      theme === "light" ? "text-[#231F20]" : "text-white"
                    } capitalize font-[OpenSauceRegular]`}
                  >
                    can’t find the currency?
                    <span className="text-[#7154E6]">try customizing</span>
                  </p>
                </div>
              </LightPurpleWrapper>
            </div>
            <div className=" w-full mt-6">
              <LightPurpleWrapper margin="" padding="p-5">
                <div className=" relative w-full">
                  <div className=" flex justify-between items-center w-full">
                    <p
                      className={`text-xs ${
                        theme === "light" ? "text-[#231F20]" : "text-white"
                      } capitalize font-[OpenSauceRegular] `}
                    >
                      openBook Market ID (not found ?{" "}
                      <span className="text-[#7154E6] underline cursor-pointer">
                        go create)
                      </span>
                    </p>
                    <div
                      className={`w-[280px] rounded-xl flex justify-between items-center   ${
                        theme === "light"
                          ? "bg-white border-[#C0C7E1] text-black shadow-[2px 2px 10px 0px #4B68DA47]"
                          : "bg-[#686587] text-white border-[#C0C7E1] shadow-formDarkShadow"
                      } px-3 py-3`}
                    >
                      <input
                        type="text"
                        className={`w-full ${
                          theme === "light"
                            ? "text-black placeholder:text-[#363636]"
                            : "text-white placeholder:text-white"
                        } bg-transparent focus:outline-none focus:border-blue-500`}
                        placeholder="Search Market ID"
                      />
                      <img
                        src="./search.svg"
                        className=" w-5 h-5 object-cover"
                        alt="search here"
                      />
                    </div>
                  </div>
                  <div className=" w-full relative mt-4 ">
                    <LightInput
                      placeholder="|"
                      type="number"
                      value={""}
                      onChange={() => {}}
                    />
                  </div>
                </div>
              </LightPurpleWrapper>
            </div>
            <div className=" w-full mt-6">
              <h6
                className={`text-sm pl-2 ${
                  theme === "light" ? "text-[#231F20]" : "text-white"
                } capitalize font-[OpenSauceRegular] `}
              >
                add liquidity
              </h6>
              <div className=" w-full mt-3">
                <LightPurpleWrapper margin="" padding="p-5">
                  <div className="flex justify-between items-center w-full gap-8 ">
                    <div className=" w-1/2">
                      <Label labelText=" base token amount" />
                      <LightIncrementInput
                        value={20}
                        onDecrement={() => {}}
                        onIncrement={() => {}}
                      />
                      <div className="flex justify-start items-center mt-4 gap-2">
                        <div
                          className={`${
                            theme === "light"
                              ? "bg-white border-[#C0C7E1] text-[#231F20] shadow-[2px 2px 10px 0px #4B68DA47]"
                              : "bg-[#686587] text-white border-[#C0C7E1] shadow-formDarkShadow"
                          }  p-3 flex justify-center items-center text-xs capitalize border font-[OpenSauceRegular] rounded-xl`}
                        >
                          50%
                        </div>
                        <div
                          className={`${
                            theme === "light"
                              ? "bg-white border-[#C0C7E1] text-[#231F20] shadow-[2px 2px 10px 0px #4B68DA47]"
                              : "bg-[#686587] text-white border-[#C0C7E1] shadow-formDarkShadow"
                          }  p-3 flex justify-center items-center text-xs capitalize border font-[OpenSauceRegular] rounded-xl`}
                        >
                          100%
                        </div>
                      </div>
                    </div>
                    <div className=" w-1/2">
                      <Label labelText="quote token amount" />
                      <LightIncrementInput
                        onDecrement={() => {}}
                        onIncrement={() => {}}
                        value={90}
                      />
                      <div className="flex justify-start items-center mt-4 gap-2">
                        <div
                          className={`${
                            theme === "light"
                              ? "bg-white border-[#C0C7E1] text-[#231F20] shadow-[2px 2px 10px 0px #4B68DA47]"
                              : "bg-[#686587] text-white border-[#C0C7E1] shadow-formDarkShadow"
                          }  p-3 flex justify-center items-center text-xs capitalize border font-[OpenSauceRegular] rounded-xl`}
                        >
                          50%
                        </div>
                        <div
                          className={`${
                            theme === "light"
                              ? "bg-white border-[#C0C7E1] text-[#231F20] shadow-[2px 2px 10px 0px #4B68DA47]"
                              : "bg-[#686587] text-white border-[#C0C7E1] shadow-formDarkShadow"
                          }  p-3 flex justify-center items-center text-xs capitalize border font-[OpenSauceRegular] rounded-xl`}
                        >
                          100%
                        </div>
                      </div>
                    </div>
                  </div>
                </LightPurpleWrapper>
              </div>
            </div>
            <div className=" w-full mt-6">
              <HeaderText>Buy Parameters Settings</HeaderText>

              <div
                className={`${
                  theme === "light" ? "bg-[#DFE5F9]" : "bg-[#686587]"
                } rounded-xl w-max px-1 mt-4 py-2 border border-[#C0C7E1] flex justify-center items-center gap-2`}
              >
                <p
                  onClick={() => setIsActiveWallet("Current Wallet Buy")}
                  className={`font-[OpenSauceRegular] text-xs p-2 rounded-md cursor-pointer ${
                    isActiveWallet === "Current Wallet Buy"
                      ? theme === "light"
                        ? "bg-white text-[#4568DC]"
                        : "bg-[#8986AA] text-[#fcfcfc]"
                      : "bg-transparent text-[#363636]"
                  }`}
                >
                  Current Wallet Buy
                </p>
                <p
                  onClick={() => setIsActiveWallet("Import Wallet Buy")}
                  className={`font-[OpenSauceRegular] text-xs p-2 rounded-md cursor-pointer ${
                    isActiveWallet === "Import Wallet Buy"
                      ? theme === "light"
                        ? "bg-white text-[#4568DC]"
                        : "bg-[#8986AA] text-[#fcfcfc]"
                      : "bg-transparent text-[#363636]"
                  }`}
                >
                  Import Wallet Buy
                </p>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <Label labelText="Please Connect Wallet" />
                <LightInput
                  placeholder="|"
                  type="number"
                  value={""}
                  onChange={() => {}}
                />
              </div>
            </div>

            <div className=" w-full mt-6">
              <LightPurpleWrapper margin="" padding="p-5">
                <div className="flex justify-between items-center w-full gap-8 ">
                  <div className=" w-full">
                    <Label labelText="Buy Amount" />
                    <LightIncrementInput
                      onDecrement={() => {}}
                      onIncrement={() => {}}
                      value={0}
                    />

                    <div className=" w-full flex justify-between items-center">
                      <div className="flex justify-start items-center mt-4 gap-2">
                        <div
                          className={`${
                            theme === "light"
                              ? "bg-white border-[#C0C7E1] text-[#231F20] shadow-[2px 2px 10px 0px #4B68DA47]"
                              : "bg-[#686587] text-white border-[#C0C7E1] shadow-formDarkShadow"
                          }  p-3 flex justify-center items-center text-xs capitalize border font-[OpenSauceRegular] rounded-xl`}
                        >
                          50%
                        </div>
                        <div
                          className={`${
                            theme === "light"
                              ? "bg-white border-[#C0C7E1] text-[#231F20] shadow-[2px 2px 10px 0px #4B68DA47]"
                              : "bg-[#686587] text-white border-[#C0C7E1] shadow-formDarkShadow"
                          }  p-3 flex justify-center items-center text-xs capitalize border font-[OpenSauceRegular] rounded-xl`}
                        >
                          100%
                        </div>
                      </div>
                      <p
                        className={`text-xs ${
                          theme === "light" ? "text-[#231F20]" : "text-white"
                        } capitalize font-[OpenSauceRegular] `}
                      >
                        Balance:0 SOL
                      </p>
                    </div>
                  </div>
                </div>
              </LightPurpleWrapper>
            </div>
            <div className=" w-full mt-6 flex justify-start items-start flex-col gap-2">
              <h6
                className={`text-sm ${
                  theme === "light" ? "text-[#231F20]" : "text-[#FCFCFC]"
                } capitalize font-[OpenSauceMedium]`}
              >
                Advanced Options
              </h6>

              <Switch
                onChange={handleToggleOptions}
                checked={isAdvancedOptions}
              />
            </div>
            {isAdvancedOptions && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 190 }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="mt-4 w-full"
              >
                <div className="flex justify-start items-center gap-3 mt-4">
                  <div
                    style={{ boxShadow: "2px 3px 22px 0px #605C5C24" }}
                    className={`flex justify-center items-center gap-3 rounded-lg px-2 py-1.5 w-max ${
                      theme === "light"
                        ? "bg-white shadow-[2px 3px 22px 0px #605C5C24]"
                        : "bg-[#686587] border-[#C1B8CD]"
                    }`}
                  >
                    {[
                      "Default 0.00003",
                      "High 0.00006",
                      "Ultra-High 0.0001",
                    ].map((price, i) => {
                      return (
                        <div
                          key={i}
                          onClick={() => setValue(price)}
                          className={`${
                            value === price
                              ? `bg-purple-gradient ${
                                  theme === "dark"
                                    ? "text-[#EEEEEE]"
                                    : "text-white"
                                }`
                              : theme === "dark"
                              ? "bg-[#423F5E] text-[#EEEEEE]"
                              : "bg-[#F8F8F8] text-[#231F20]"
                          } rounded-lg px-4 py-3 text-xs flex cursor-pointer justify-center items-center text-[#231F20] font-[OpenSauceRegular]`}
                        >
                          {price}
                        </div>
                      );
                    })}
                  </div>
                  <p
                    className={` 
                     rounded-xl capitalize px-8 py-4 flex justify-center items-center gap-3 border-[#C0C7E1] h-full cursor-pointer text-center text-xs font-[OpenSauceRegular]   ${
                       theme === "light"
                         ? "bg-white text-[#231F20] shadow-[2px 3px 22px 0px #605C5C24]"
                         : "bg-[#423F5E] text-[#EEEEEE]"
                     }`}
                  >
                    0.001s
                  </p>
                  <p
                    className={`${
                      theme === "light" ? "text-[#231F20]" : "text-[#FCFCFC]"
                    } font-[OpenSauceRegular] text-xs`}
                  >
                    Sol
                  </p>
                </div>
                <div className="flex flex-col gap-1 mt-6">
                  <Label labelText=" Block Processing Engine" />
                  <LightInput
                    onChange={() => {}}
                    value={""}
                    placeholder="|"
                    type="number"
                  />
                </div>
              </motion.div>
            )}

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
                When creating liquidity and purchasing simultaneously, please
                ensure the purchasing wallet has sufficient funds to avoid
                transaction failure. A maximum of 4 addresses can be set for
                simultaneous purchasing.
              </p>
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
                Raydium Liquidity Fee: Raydium charges a fee of 0.4 SOL when
                adding liquidity. To ensure successful operation, make sure your
                account has at least 0.55 SOL to avoid liquidity addition
                failure due to insufficient balance.
              </p>
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
                This feature is currently in beta and relies on Jito's bundling
                functionality. Due to the complex impacts of network conditions,
                Jito nodes, RPC nodes, and block processing engines, this
                feature may face a high failure rate. If the operation fails, no
                fees will be incurred. Please try switching RPC nodes, block
                processing engines, increase Jito's tips, and consider trying
                again during times of lower activity on the blockchain. Create
                Liquidity and Buy
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

export default CreateLiquidityBuy;
