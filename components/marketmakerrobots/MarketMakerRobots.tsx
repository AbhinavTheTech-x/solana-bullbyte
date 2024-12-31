import { useTheme } from "@/context/ThemeContext";
import React, { useState } from "react";
import CTAButton from "../CTAButton";
import Select from "../reusable/SelectInput";
import Label from "../reusable/Label";
import LightInput from "../reusable/LightInput";
import TargetCard from "../reusable/MarketCard";

const MarketMakerRobots = () => {
  const [exChangeSetting, setExChangeSetting] = useState("raydium");
  const [token, setToken] = useState("0");
  const [slipPage, setSlipPage] = useState("Auto");
  const [isTargetPullUp, setIsTargetPullUp] = useState(false);
  const { theme } = useTheme();

  const handleTogglePullUp = () => {
    setIsTargetPullUp(!isTargetPullUp);
  };
  const dummyOptions = [
    { value: "Token1", label: "Token 1" },
    { value: "Token2", label: "Token 2" },
    { value: "Token3", label: "Token 3" },
  ];
  const cardData1 = [
    {
      data: [
        { label: "Target Price (USDT)", value: "--" },
        { label: "Run Duration (Minutes)", value: "--" },
        { label: "Single Transaction Volume (SOL)", value: "--" },
        { label: "Total Maximum Transaction Amount (SOL)", value: "--" },
      ],
    },
  ];
  const cardData2 = [
    {
      title: "Target Drop",
      data: [
        { label: "Target Price (USDT)", value: "--" },
        { label: "Run Duration (Minutes)", value: "--" },
        { label: "Single Transaction Volume (SOL)", value: "--" },
        { label: "Total Maximum Transaction Amount (SOL)", value: "--" },
      ],
      isTargetPullUp: false,
    },
  ];
  const cardData3 = [
    {
      title: "Traffic Bot",
      data: [
        { label: "Target Price (USDT)", value: "--" },
        { label: "Run Duration (Minutes)", value: "--" },
        { label: "Single Transaction Volume (SOL)", value: "--" },
        { label: "Total Maximum Transaction Amount (SOL)", value: "--" },
      ],
      isTargetPullUp: false,
    },
  ];

  return (
    <div className="v1Token-section w-full h-full flex justify-center items-center flex-col">
      <div className="p-5 w-full flex justify-start items-center flex-col gap-10">
        <div className="h-full w-full flex justify-between items-start gap-10">
          <div className=" w-1/2">
            <div
              style={{ boxShadow: "4px 4px 30px 0px #3D54AB24" }}
              className={`w-full h-full flex-col flex rounded-xl justify-start items-center p-4 border ${
                theme === "light"
                  ? "border-[#DAE2FF] bg-white"
                  : "bg-[#3F2D58] border-[#4B4868]"
              }`}
            >
              <div className=" w-full">
                <div className=" flex justify-between items-center w-full mb-4">
                  <h6
                    className={`font-poppins text-sm ${
                      theme === "light" ? "text-black" : "text-[#FCFCFC]"
                    } font-medium`}
                  >
                    Account Overview
                  </h6>
                  <div className="flex justify-start items-center gap-1">
                    <img
                      src="./live-dot.svg"
                      className=" w-3 h-3 object-cover"
                      alt="live"
                    />
                    <p
                      className={`${
                        theme === "light" ? "text-[#747474]" : "text-[#573CFF]"
                      } font-poppins font-normal text-xs`}
                    >
                      Real-time Refresh
                    </p>
                  </div>
                </div>
                <div
                  className={`${
                    theme === "light"
                      ? "bg-[#F5F4FF] border-[#EDE3FC]"
                      : "bg-[#686587] border-[#C0C7E1] shadow-[2px 2px 10px 0px #4B68DA47]"
                  } border h-max w-full rounded-xl p-4`}
                >
                  <h6
                    className={`font-poppins mb-2 font-medium text-xs text-left ${
                      theme === "light" ? "text-[#363636]" : "text-[#FCFCFC]"
                    }`}
                  >
                    Total Number of Accounts
                  </h6>

                  <div className="flex justify-between items-center w-full py-1">
                    <h6
                      className={`font-poppins font-normal text-xs ${
                        theme === "light" ? "text-[#747474]" : "text-white"
                      }`}
                    >
                      SOL Balance
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
                      USDC Balance
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
                      Token Balance
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
                <div
                  className={`${
                    theme === "light"
                      ? "bg-[#F5F4FF] border-[#EDE3FC]"
                      : "bg-[#686587] border-[#C0C7E1] mt-4 shadow-[2px 2px 10px 0px #4B68DA47]"
                  } border h-max w-full rounded-xl p-4`}
                >
                  <h6
                    className={`font-poppins mb-2 font-medium text-xs text-left ${
                      theme === "light" ? "text-[#363636]" : "text-[#FCFCFC]"
                    }`}
                  >
                    {" "}
                    Enabled Accounts
                  </h6>
                  <div className="flex justify-between items-center w-full py-1">
                    <h6
                      className={`font-poppins font-normal text-xs ${
                        theme === "light" ? "text-[#747474]" : "text-white"
                      }`}
                    >
                      SOL Balance
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
                      USDC Balance
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
                      Token Balance
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
              style={{ boxShadow: "4px 4px 30px 0px #3D54AB24" }}
              className={`w-full mt-5 rounded-xl p-4 border ${
                theme === "light"
                  ? "border-[#DAE2FF] bg-white"
                  : "bg-[#3F2D58] border-[#4B4868]"
              }`}
            >
              <div className="flex justify-between items-center w-full">
                <h6
                  className={`font-poppins text-sm ${
                    theme === "light" ? "text-black" : "text-[#FCFCFC]"
                  } font-medium`}
                >
                  Exchange Settings
                </h6>
                <div className=" flex justify-center items-center gap-2">
                  <div className="flex">
                    <div className="flex justify-center items-center border border-[#DAE2FF] overflow-hidden rounded-xl">
                      <div
                        onClick={() => setExChangeSetting("raydium")}
                        className={`flex gap-2 justify-center items-center cursor-pointer rounded-tl-lg px-2 py-2.5 rounded-bl-lg ${
                          exChangeSetting === "raydium"
                            ? "bg-[#DFD7FF]"
                            : theme === "dark"
                            ? "bg-[#686587]"
                            : "bg-transparent"
                        }`}
                      >
                        <img
                          src="./image (1).svg"
                          className=" w-8 h-8 object-cover"
                          alt="raydium"
                        />
                        <h6
                          className={`font-[OpenSauceMedium] text-xs ${
                            exChangeSetting === "raydium"
                              ? theme === "light"
                                ? "text-[#363636]"
                                : "text-white"
                              : theme === "light"
                              ? "text-[#636363]"
                              : "text-[#D9D5FF]"
                          }`}
                        >
                          Raydium
                        </h6>
                        <img
                          src="./share.svg"
                          className=" cursor-pointer w-4 h-4 object-cover"
                          alt="share"
                        />
                      </div>
                      <div
                        onClick={() => setExChangeSetting("pump fum")}
                        className={`flex gap-2 justify-center items-center cursor-pointer rounded-tr-lg px-2 py-2.5 rounded-br-lg ${
                          exChangeSetting === "pump fum"
                            ? "bg-[#DFD7FF]"
                            : theme === "dark"
                            ? "bg-[#686587]"
                            : "bg-transparent"
                        }`}
                      >
                        <img
                          src="./image (36).svg"
                          className="w-8 h-8 object-cover"
                          alt="raydium"
                        />
                        <h6
                          className={`font-[OpenSauceMedium] text-xs ${
                            exChangeSetting === "pump fum" && theme === "light"
                              ? "text-[#363636]"
                              : theme === "light"
                              ? "text-[#363636]"
                              : "text-white"
                          }`}
                        >
                          Pump Fum
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <img
                      src="./tick-circle.svg"
                      className=" w-5 h-5 object-cover"
                      alt="tick"
                    />
                    <p
                      className={`${
                        theme === "light" ? "text-[#363636]" : "text-white"
                      } font-[OpenSauceRegular] text-xs`}
                    >
                      Find Liquidity
                    </p>
                  </div>
                </div>
              </div>

              <div className=" relative w-full">
                <Label labelText="Value Token" />

                <div className=" relative">
                  <Select
                    onChange={() => {}}
                    options={dummyOptions}
                    value="Solana"
                    className="pl-10"
                  />
                  <img
                    src="./image (47).svg"
                    className=" w-6 h-7 object-contain absolute left-2 top-4"
                    alt="arrow"
                  />
                </div>
              </div>
              <div className=" relative w-full mt-4">
                <Label labelText="Market Making Tokens" />
                <div className=" relative">
                  <Select
                    onChange={() => {}}
                    options={dummyOptions}
                    value="JUP"
                    className="pl-10"
                  />
                  <img
                    src="./image (48).svg"
                    className=" w-6 h-7 object-contain absolute left-2 top-4"
                    alt="arrow"
                  />
                </div>
              </div>
            </div>
            <div
              style={{ boxShadow: "4px 4px 30px 0px #3D54AB24" }}
              className={`w-full mt-5 rounded-xl p-4 border ${
                theme === "light"
                  ? "border-[#DAE2FF] bg-white"
                  : "bg-[#3F2D58] border-[#4B4868]"
              }`}
            >
              <h6
                className={`font-poppins text-sm mb-2 ${
                  theme === "light" ? "text-black" : "text-[#FCFCFC]"
                } font-medium`}
              >
                General Parameter Settings
              </h6>
              <Label labelText="Multithreading (Multiple Transactions Simultaneously)" />
              <LightInput onChange={() => {}} value={""} placeholder="1.00" />

              <div className=" w-full mt-5">
                <h6
                  className={`font-poppins text-sm ${
                    theme === "light" ? "text-black" : "text-white"
                  } font-medium`}
                >
                  Slippage Setting
                </h6>
                <div className=" w-full flex justify-start items-center gap-3 mt-3">
                  <div
                    className={` border flex justify-start items-center px-3 w-max py-2 rounded-xl gap-3 ${
                      theme === "light"
                        ? "bg-white shadow-[2px 3px 22px 0px #605C5C24]"
                        : "bg-[#686587] border-[#C1B8CD]"
                    } p-5`}
                  >
                    {["Auto", "0.3%", "0.5%", "1.0%", "3.0%"].map((tags, i) => {
                      return (
                        <p
                          onClick={() => setSlipPage(tags)}
                          key={i}
                          className={`${
                            slipPage === tags
                              ? `bg-purple-gradient ${
                                  theme === "dark"
                                    ? "text-[#EEEEEE]"
                                    : "text-white"
                                }`
                              : theme === "dark"
                              ? "bg-[#423F5E] text-[#EEEEEE]"
                              : "bg-[#F8F8F8] text-[#231F20]"
                          } rounded-md capitalize px-4 py-3 h-full cursor-pointer text-center text-xs font-[OpenSauceRegular]`}
                        >
                          {tags}
                        </p>
                      );
                    })}
                  </div>
                  <p
                    className={` 
                   rounded-xl capitalize px-4 py-3 h-full cursor-pointer text-center text-xs font-[OpenSauceRegular]   ${
                     theme === "light"
                       ? "bg-[#F8F8F8] text-[#231F20]"
                       : "bg-[#423F5E] text-[#EEEEEE]"
                   }`}
                  >
                    3
                  </p>
                  <p
                    className={` 
                    ${
                      theme === "light" ? "text-[#231F20]" : "text-white"
                    }  capitalize px-4 py-3 h-full cursor-pointer text-center text-xs font-[OpenSauceRegular]`}
                  >
                    %
                  </p>
                </div>
              </div>
              <div className=" w-full mt-5">
                <Label labelText="Task Execution Interval (seconds)" />
                <LightInput onChange={() => {}} value={""} placeholder="1.00" />
              </div>

              <div className=" w-full mt-5">
                <h6
                  className={`font-[OpenSauceMedium] ${
                    theme === "light" ? "text-black" : "text-white"
                  } text-sm mb-3`}
                >
                  Jito MEV Tip
                </h6>
                <div className="flex w-full mt-3 justify-start items-center gap-3  flex-wrap">
                  <div
                    className={` border flex justify-start items-center px-3 w-max py-2 rounded-xl gap-3 ${
                      theme === "light"
                        ? "bg-white shadow-[2px 3px 22px 0px #605C5C24]"
                        : "bg-[#686587] border-[#C1B8CD]"
                    } p-5`}
                  >
                    {[
                      "0",
                      "standard  0.00003 sol",
                      "fast 0.001 sol",
                      "speed 0.01 sol",
                    ].map((tags, i) => {
                      return (
                        <p
                          onClick={() => setToken(tags)}
                          key={i}
                          className={`${
                            token === tags
                              ? `bg-purple-gradient ${
                                  theme === "dark"
                                    ? "text-[#EEEEEE]"
                                    : "text-white"
                                }`
                              : theme === "dark"
                              ? "bg-[#423F5E] text-[#EEEEEE]"
                              : "bg-[#F8F8F8] text-[#231F20]"
                          } rounded-md capitalize px-4 py-3 h-full cursor-pointer text-center text-xs font-[OpenSauceRegular]`}
                        >
                          {tags}
                        </p>
                      );
                    })}
                  </div>

                  <p
                    className={` 
                       ${
                         theme === "dark"
                           ? "bg-[#423F5E] text-[#EEEEEE] shadow-[2px 3px 22px 0px #605C5C24]"
                           : "text-[#231F20] bg-white "
                       } rounded-xl capitalize px-7 py-3 h-full cursor-pointer text-center text-xs font-[OpenSauceRegular]`}
                  >
                    0.001
                  </p>
                  <p
                    className={` 
                        ${
                          theme === "dark" ? "text-white" : "text-[#231F20]"
                        } capitalize px-4 py-3 h-full cursor-pointer text-center text-xs font-[OpenSauceRegular]`}
                  >
                    Sol
                  </p>
                </div>
              </div>
            </div>

            <div
              style={{ boxShadow: "4px 4px 30px 0px #3D54AB24" }}
              className={`w-full mt-5 rounded-xl p-4 border ${
                theme === "light"
                  ? "border-[#DAE2FF] bg-white"
                  : "bg-[#3F2D58] border-[#4B4868]"
              }`}
            >
              <div className=" flex justify-between items-center w-full mb-2">
                <h6
                  className={`font-poppins text-sm ${
                    theme === "light" ? "text-black" : "text-[#FCFCFC]"
                  } font-medium`}
                >
                  Robot Management
                </h6>
                <div
                  className={`flex justify-start items-center gap-1 ${
                    theme === "light" ? "bg-[#E7EDFF]" : "bg-[#6B548A]"
                  } rounded-lg px-3 py-3`}
                >
                  <img
                    src="./reset-all.svg"
                    className=" w-4 h-4 object-cover"
                    alt="live"
                  />
                  <p
                    className={`${
                      theme === "light" ? "text-[#4568DC]" : "text-white"
                    } font-poppins font-normal text-xs`}
                  >
                    Reset All
                  </p>
                </div>
              </div>
              <div className=" w-full">
                <h6
                  className={`${
                    theme === "light" ? "text-[#363636]" : "text-white"
                  } font-[OpenSauceMedium] text-sm`}
                >
                  Create Liquidity Pool and Buy Tokens
                </h6>
                <h6
                  className={`${
                    theme === "light" ? "text-[#5C5C5C]" : "text-[#DFDCF2]"
                  } font-[OpenSauceRegular] text-xs mt-2`}
                >
                  Simplify transaction processes, create customized opening
                  price increases, gain an early advantage, and obtain potential
                  returns sooner.
                </h6>
              </div>
              <div
                className={`flex justify-start items-center w-max mt-4 gap-1 ${
                  theme === "light" ? "bg-[#E7EDFF]" : "bg-[#6B548A]"
                } rounded-lg px-4 py-3`}
              >
                <p
                  className={`${
                    theme === "light" ? "text-[#4568DC]" : "text-white"
                  } font-poppins font-normal text-xs`}
                >
                  Go
                </p>
              </div>

              <TargetCard
                data={cardData1[0].data}
                isTargetPullUp={isTargetPullUp}
                theme={theme}
                title="Target Pull Up"
                handleToggle={handleTogglePullUp}
              />
              <TargetCard
                data={cardData2[0].data}
                isTargetPullUp={isTargetPullUp}
                theme={theme}
                title="Target Price (USDT):"
                handleToggle={handleTogglePullUp}
              />
              <TargetCard
                data={cardData3[0].data}
                isTargetPullUp={isTargetPullUp}
                theme={theme}
                title="Target Drop"
                handleToggle={handleTogglePullUp}
              />
            </div>
          </div>
          <div className=" w-1/2">
            <div
              style={{ boxShadow: "4px 4px 30px 0px #3D54AB24" }}
              className={`w-full h-[1120px] flex-col flex rounded-xl justify-start items-center p-4 border ${
                theme === "light"
                  ? "border-[#DAE2FF] bg-white"
                  : "bg-[#3F2D58] border-[#4B4868]"
              }`}
            >
              <CTAButton
                text="Import Wallets"
                font="font-[OpenSauceRegular]"
                arrowSize="w-0 h-0" // Customize the arrow size
                paddingY="py-3 capitalize text-xs "
                paddingX="px-8 mb-4 w-max mr-auto" // Customize the horizontal padding
                gap="gap-1" // Customize the gap between text and arrow
                onClick={() => console.log("Button clicked!")}
              />

              <div
                className={`flex justify-between border-t border-b ${
                  theme === "light" ? "border-[#EEE7E7]" : "border-[#68658A]"
                } py-4 w-full`}
              >
                <p
                  className={`font-poppins text-xs font-normal ${
                    theme === "light" ? "text-[#0F0F0F]" : "text-[#FCFCFC]"
                  }`}
                >
                  #
                </p>
                <p
                  className={`font-poppins text-xs font-normal ${
                    theme === "light" ? "text-[#0F0F0F]" : "text-[#FCFCFC]"
                  }`}
                >
                  Wallet Address
                </p>
                <p
                  className={`font-poppins text-xs font-normal ${
                    theme === "light" ? "text-[#0F0F0F]" : "text-[#FCFCFC]"
                  }`}
                >
                  Sol Balance
                </p>
                <p
                  className={`font-poppins text-xs font-normal ${
                    theme === "light" ? "text-[#0F0F0F]" : "text-[#FCFCFC]"
                  }`}
                >
                  USDC Balance
                </p>
              </div>
            </div>
            <div
              style={{ boxShadow: "4px 4px 30px 0px #3D54AB24" }}
              className={`w-full h-[1035px] flex-col mt-6 flex rounded-xl justify-start items-center p-4 border ${
                theme === "light"
                  ? "border-[#DAE2FF] bg-white"
                  : "bg-[#3F2D58] border-[#4B4868]"
              }`}
            >
              <div className=" w-full flex justify-between items-center">
                <div className="flex justify-start items-center gap-4 mb-4">
                  <h6
                    className={`font-poppins text-sm ${
                      theme === "light" ? "text-black" : "text-[#FCFCFC]"
                    } font-medium`}
                  >
                    Transaction Log
                  </h6>
                  <img
                    src="./live-dot.svg"
                    className=" w-3 h-3 object-cover"
                    alt="live"
                  />
                  <p
                    className={`${
                      theme === "light" ? "text-[#747474]" : "text-[#573CFF]"
                    } font-poppins font-normal text-xs`}
                  >
                    Real-time Refresh
                  </p>
                </div>
                <div className="flex justify-start items-center gap-2">
                  <div className=" bg-[#D3FFD8] rounded-lg flex justify-center items-center px-5 py-3">
                    <p className=" text-center font-poppins text-[#73AD79] text-xs">
                      0
                    </p>
                  </div>
                  <div className=" bg-[#F4EBEB] rounded-lg flex justify-center items-center px-5 py-3">
                    <p className=" text-center font-poppins text-[#FF0000] text-xs">
                      0
                    </p>
                  </div>
                  <div className=" bg-[#F7F8CC] rounded-lg flex justify-center items-center px-5 py-3">
                    <p className=" text-center font-poppins text-[#ABAD46] text-xs">
                      0
                    </p>
                  </div>
                  <div className=" bg-[#F4EBEB] rounded-lg flex justify-center items-center px-3 py-3">
                    <p className=" text-center font-poppins text-[#747474] text-xs">
                      Clear
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={`flex justify-between mt-3  border-t border-b ${
                  theme === "light" ? "border-[#EEE7E7]" : "border-[#68658A]"
                } py-4 w-full`}
              >
                <p
                  className={`font-poppins text-xs font-normal ${
                    theme === "light" ? "text-[#0F0F0F]" : "text-[#FCFCFC]"
                  }`}
                >
                  #
                </p>
                <p
                  className={`font-poppins text-xs font-normal ${
                    theme === "light" ? "text-[#0F0F0F]" : "text-[#FCFCFC]"
                  }`}
                >
                  Wallet Address
                </p>
                <p
                  className={`font-poppins text-xs font-normal ${
                    theme === "light" ? "text-[#0F0F0F]" : "text-[#FCFCFC]"
                  }`}
                >
                  Sol Balance
                </p>
                <p
                  className={`font-poppins text-xs font-normal ${
                    theme === "light" ? "text-[#0F0F0F]" : "text-[#FCFCFC]"
                  }`}
                >
                  USDC Balance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketMakerRobots;
