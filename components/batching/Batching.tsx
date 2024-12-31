import { useTheme } from "@/context/ThemeContext";
import React from "react";
import Select from "../reusable/SelectInput";
import Label from "../reusable/Label";
import LightInput from "../reusable/LightInput";
import HeaderText from "../reusable/HeaderText";
import ContentContainerFull from "../reusable/ContentContainerFull";

const Batching = () => {
  const { theme } = useTheme();

  const dummyOptions = [
    { value: "Token1", label: "Token 1" },
    { value: "Token2", label: "Token 2" },
    { value: "Token3", label: "Token 3" },
  ];
  return (
    <div className="v1Token-section w-full h-full flex justify-center items-center flex-col">
      <div className="p-5 w-full flex justify-start items-center flex-col gap-10">
        <div className="h-full w-full flex justify-between items-start gap-10">
          <ContentContainerFull>
            <div className=" w-full">
              <HeaderText>Volume</HeaderText>
            </div>
            <div
              className={`w-full  rounded-xl border ${
                theme === "light"
                  ? "border-[#DCD2EB] bg-[#F5F4FF]"
                  : " bg-[#3F2D58] border-[#4B4868] shadow-[4px 4px 30px 0px #3D54AB24]"
              } p-6 mt-4`}
            >
              <div className="flex justify-start items-center gap-10 w-full mb-4">
                <div className=" w-[20%]">
                  <h6
                    className={`font-[OpenSauceRegular] text-xs ${
                      theme === "dark" ? "text-[#FFFFFF]" : "text-[#363636]"
                    }`}
                  >
                    Duration
                  </h6>
                  <h6
                    className={`font-[OpenSauceRegular] text-xs ${
                      theme === "dark" ? "text-[#FFFFFF]" : "text-[#363636]"
                    }`}
                  >
                    00:00:00
                  </h6>
                </div>
                <div className="">
                  <h6
                    className={`font-[OpenSauceRegular] text-xs ${
                      theme === "dark" ? "text-[#FFFFFF]" : "text-[#363636]"
                    }`}
                  >
                    Transaction
                  </h6>
                  <h6
                    className={`font-[OpenSauceRegular] text-xs ${
                      theme === "dark" ? "text-[#FFFFFF]" : "text-[#363636]"
                    }`}
                  >
                    $ 0.00
                  </h6>
                </div>
              </div>
              <h6
                className={`text-xs mt-2 mb-4 ${
                  theme === "dark" ? "text-[#FFFFFF]" : "text-[#0f0f0f]"
                }  font-[OpenSauceMedium]`}
              >
                10 Minute Estimate Volume Information
              </h6>
              <div className=" flex justify-between items-center gap-8">
                <div className="flex flex-col gap-1 w-1/3">
                  <Label labelText="Transactions" />
                  <LightInput
                    placeholder="|"
                    value={"dummy"}
                    onChange={() => {}}
                    type="number"
                  />
                </div>
                <div className="flex flex-col gap-1 w-1/3">
                  <Label labelText="Volume" />
                  <LightInput
                    placeholder="|"
                    value={"dummy"}
                    onChange={() => {}}
                    type="number"
                  />
                </div>
                <div className="flex flex-col gap-1 w-1/3">
                  <Label labelText="Fees(SOL)" />
                  <LightInput
                    placeholder="|"
                    value={"dummy"}
                    onChange={() => {}}
                    type="number"
                  />
                </div>
              </div>
            </div>
            <div className=" w-full mt-6">
              <div className="flex justify-between items-center w-full gap-8">
                <div className=" relative w-1/2">
                  <Label labelText=" Token Address" />
                  <Select
                    options={dummyOptions}
                    value={"Token1"}
                    onChange={() => {}}
                  />
                </div>
                <div className="flex flex-col gap-3 w-1/2 mt-1">
                  <Label labelText="Zombie Wallet" />

                  <div className=" w-full relative ">
                    <LightInput
                      value={"dummy"}
                      placeholder="Enter token supply"
                      onChange={() => {}}
                      type="number"
                    />
                    <img
                      src="./dots.svg"
                      className=" w-4 h-4 object-contain absolute right-3 top-4"
                      alt="arrow"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-full mt-6">
              <div className="flex justify-between items-center w-full gap-8">
                <div className=" relative w-1/2">
                  <Label labelText="Time Interval(second) >5s" />
                  <Select
                    options={dummyOptions}
                    value={"Token1"}
                    onChange={() => {}}
                  />
                </div>

                <div className="flex flex-col gap-1 w-1/2 mt-2">
                  <Label labelText="JITO TIP" />
                  <div className=" w-full relative ">
                    <LightInput
                      value={"dummy"}
                      placeholder="|"
                      onChange={() => {}}
                      type="number"
                    />
                    <img
                      src="./dots.svg"
                      className=" w-4 h-4 object-contain absolute right-3 top-4"
                      alt="arrow"
                    />
                  </div>
                </div>
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
                  #
                </h6>
                <h6
                  className={`font-[OpenSauceRegular] text-xs font-normal ${
                    theme === "light" ? "text-black" : "text-[#FCFCFC]"
                  }`}
                >
                  Address
                </h6>
                <h6
                  className={`font-[OpenSauceRegular] text-xs font-normal ${
                    theme === "light" ? "text-black" : "text-[#FCFCFC]"
                  }`}
                >
                  Sol Balance
                </h6>
                <h6
                  className={`font-[OpenSauceRegular] text-xs font-normal ${
                    theme === "light" ? "text-black" : "text-[#FCFCFC]"
                  }`}
                >
                  Token Balance
                </h6>
                <h6
                  className={`font-[OpenSauceRegular] text-xs font-normal ${
                    theme === "light" ? "text-black" : "text-[#FCFCFC]"
                  }`}
                >
                  Sol Amount
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
            <div className="flex justify-between items-center gap-3 w-full my-5">
              <div className=" w-12 h-12 flex justify-center items-center rounded-full bg-[#E8E8E8] border border-[#EEEEE2]">
                <img
                  src="./gabage.svg"
                  className=" w-5 h-5 object-cover"
                  alt="save"
                />
              </div>
              <button className="font-[OpenSauceRegular] text-sm text-white flex justify-center items-center bg-[#FF0000] rounded-xl px-8 py-3">
                Generate Wallets
              </button>
              <button className="font-[OpenSauceRegular] text-sm text-white flex justify-center items-center bg-[#FF0000] rounded-xl px-8 py-3">
                Download Wallets
              </button>
              <button className="font-[OpenSauceRegular] text-sm text-white flex justify-center items-center bg-[#27D968] rounded-xl px-8 py-3">
                Disperse Sol
              </button>
              <button className="font-[OpenSauceRegular] text-sm text-white flex justify-center items-center bg-[#27D968] rounded-xl px-8 py-3">
                Start
              </button>
              <button className="font-[OpenSauceRegular] text-sm text-white flex justify-center items-center bg-[#27D968] rounded-xl px-8 py-3">
                Sell Tokens
              </button>
              <button className="font-[OpenSauceRegular] text-sm text-white flex justify-center items-center bg-[#27D968] rounded-xl px-8 py-3">
                Collect Sol
              </button>
              <div className=" w-12 h-12 flex justify-center items-center rounded-full bg-[#E8E8E8] border border-[#EEEEE2]">
                <img
                  src="./save.svg"
                  className=" w-5 h-5 object-cover"
                  alt="save"
                />
              </div>
            </div>
          </ContentContainerFull>
        </div>
      </div>
    </div>
  );
};

export default Batching;
