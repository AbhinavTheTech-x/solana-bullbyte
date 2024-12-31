import React, { useState } from "react";
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

const CreateLiquidity = () => {
  const [isActive, setIsActive] = useState("OpenBook Market");
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
            <div className=" w-full mt-6 flex justify-between items-center">
              <div className="">
                <Label labelText="set launch time (UTC+8)" />

                <p
                  className={`text-xs  mt-2 ${
                    theme === "light" ? "text-[#636363]" : "text-[#DFDCF2]"
                  } capitalize font-[OpenSauceRegular]`}
                >
                  you can schedule the launch of your liquidity pool if you
                  don’t use this switch you will launch immediately
                </p>
              </div>
              <Switch
                onChange={handleToggleOptions}
                checked={isAdvancedOptions}
              />
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
                account has at least 0.5 SOL to avoid liquidity addition failure
                due to insufficient balance.
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

export default CreateLiquidity;
