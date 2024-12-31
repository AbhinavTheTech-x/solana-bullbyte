import { useTheme } from "@/context/ThemeContext";
import React, { useState } from "react";
import Switch from "../Switch";
import CTAButton from "../CTAButton";

const PumpMicroTrading = () => {
  const [token, setToken] = useState("0");
  const [isTaskInterval, setIsTaskInterval] = useState(false);
  const { theme } = useTheme();

  const handleToggleTaskIntervalChanged = () => {
    setIsTaskInterval(!isTaskInterval);
  };
  return (
    <div className="v1Token-section w-full h-full flex justify-center items-center flex-col">
      <div className="p-5 w-full flex justify-start items-center flex-col gap-10">
        <div className="h-full w-full flex justify-between items-start gap-10">
          <div
            className={` w-full rounded-xl h-full flex-col flex justify-center items-center p-6 ${
              theme === "light"
                ? "bg-white border border-[#DAE2FF] shadow-[4px 4px 30px 0px #3D54AB24]"
                : "bg-[#2A1843] border-none" // Dark mode colors
            }`}
          >
            <div className=" w-full">
              <h6
                className={`text-lg font-medium font-poppins  ${
                  theme === "light" ? "text-black" : "text-[#FCFCFC]"
                }`}
              >
                Pump Micro Trading
              </h6>
              <p
                className={`${
                  theme === "light"
                    ? "text-[#5C5C5C]"
                    : "text-darkModeSubHeading"
                } mt-3 font-[OpenSauceRegular] text-xs font-normal`}
              >
                Micro trading, through quick small transactions, ensures that
                your project is always visible on the Pump homepage, attracting
                more user attention, increasing exposure and traffic, and
                nsuring the project's activity and visibility in the market..
              </p>
            </div>
            <div className=" w-full mt-6">
              <label
                className={`text-xs font-[OpenSauceRegular] ${
                  theme === "light" ? "text-[#231F20]" : "text-[#FCFCFC]"
                }`}
                htmlFor="tokenTicker"
              >
                select trading token
              </label>
              <div className=" relative w-full">
                <select
                  id="tokenTicker"
                  style={{ boxShadow: "2px 2px 10px 0px #4B68DA47" }}
                  className={`w-full px-3 py-2.5 rounded-lg mt-2 relative border ${
                    theme === "light"
                      ? "border-[#C0C7E1] text-[#C3C3C3] bg-white"
                      : "bg-[#686587] border-[#C0C7E1] text-[#C3C3C3] shadow-[2px 2px 10px 0px #4B68DA47]"
                  } text-sm placeholder:text-[#AFAF9F] focus:outline-none focus:border-blue-500 appearance-none`}
                >
                  <option value="" className=" text-[#C3C3C3]">
                    Please Select A Token Or Enter The Token Address
                  </option>
                  <option value="Token1">Token 1</option>
                  <option value="Token2">Token 2</option>
                  <option value="Token3">Token 3</option>
                </select>
                <img
                  src="./arrow-down-black.svg"
                  className=" w-5 h-5 object-cover absolute right-3 top-5"
                  alt="arrow"
                />
              </div>
            </div>
            <div
              className={`w-full mt-5 border ${
                theme === "light"
                  ? "border-[#B1AFBB] bg-white"
                  : " bg-[#3F2D58] border-[#4B4868] shadow-[4px 4px 30px 0px #3D54AB24]"
              } rounded-xl h-[250px] p-5`}
            >
              <div className=" w-full flex justify-between items-center">
                <div className="flex justify-start items-center gap-3">
                  <button className=" bg-purple-gradient w-max capitalize rounded-full px-6 py-3 flex justify-center items-center gap-1 font-[OpenSauceRegular] text-xs cursor-pointer text-[#FCFCFC]">
                    import trading wallet
                  </button>
                  <button className=" bg-[#F6F4FF] w-max capitalize rounded-full px-6 py-3 flex justify-center items-center border border-[#C3C0D7] gap-1 font-[OpenSauceRegular] text-xs cursor-pointer text-[#0F0F0F]">
                    check balance
                  </button>
                </div>
                <div className="flex justify-start items-center gap-1">
                  <img
                    src="./live-dot.svg"
                    className=" w-3 h-3 object-cover"
                    alt="live"
                  />
                  <p
                    className={`${
                      theme === "light" ? "text-[#000000]" : "text-white"
                    } font-poppins font-normal text-xs`}
                  >
                    Real-time Refresh
                  </p>
                </div>
              </div>
              <div className="h-full w-full flex justify-center items-center">
                <p
                  className={`font-[OpenSauceRegular] capitalize font-normal text-xs ${
                    theme === "light" ? "text-[#000000]" : "text-white"
                  }`}
                >
                  please import wallet
                </p>
              </div>
            </div>
            <div className=" flex justify-between items-center w-full gap-8 mt-5">
              <div
                className={`border ${
                  theme === "light"
                    ? "border-[#B1AFBB] bg-white"
                    : " bg-[#686587] border-[#C0C7E1] shadow-[2px 2px 10px 0px #4B68DA47]"
                } rounded-lg p-4 w-1/3 flex justify-start items-center gap-2`}
              >
                <div className="">
                  <h6
                    className={`${
                      theme === "light" ? "text-[#363636]" : "text-[#FCFCFC]"
                    } capitalize  font-[OpenSauceRegular] text-xs font-normal`}
                  >
                    number of addresses
                  </h6>
                  <p
                    className={`${
                      theme === "light" ? "text-[#363636]" : "text-[#FCFCFC]"
                    } capitalize  font-[OpenSauceRegular] mt-2 text-xs font-normal`}
                  >
                    --
                  </p>
                </div>
              </div>
              <div
                className={`border ${
                  theme === "light"
                    ? "border-[#B1AFBB] bg-white"
                    : " bg-[#686587] border-[#C0C7E1] shadow-[2px 2px 10px 0px #4B68DA47]"
                } rounded-lg p-4 w-1/3 flex justify-start items-center gap-2`}
              >
                <div className="">
                  <h6
                    className={`${
                      theme === "light" ? "text-[#363636]" : "text-[#FCFCFC]"
                    } capitalize  font-[OpenSauceRegular] text-xs font-normal`}
                  >
                    sol balance
                  </h6>
                  <p
                    className={`${
                      theme === "light" ? "text-[#363636]" : "text-[#FCFCFC]"
                    } capitalize  font-[OpenSauceRegular] mt-2 text-xs font-normal`}
                  >
                    --
                  </p>
                </div>
              </div>
              <div
                className={`border ${
                  theme === "light"
                    ? "border-[#B1AFBB] bg-white"
                    : " bg-[#686587] border-[#C0C7E1] shadow-[2px 2px 10px 0px #4B68DA47]"
                } rounded-lg p-4 w-1/3 flex justify-start items-center gap-2`}
              >
                <div className="">
                  <h6
                    className={`${
                      theme === "light" ? "text-[#363636]" : "text-[#FCFCFC]"
                    } capitalize  font-[OpenSauceRegular] text-xs font-normal`}
                  >
                    token balance
                  </h6>
                  <p
                    className={`${
                      theme === "light" ? "text-[#363636]" : "text-[#FCFCFC]"
                    } capitalize  font-[OpenSauceRegular] mt-2 text-xs font-normal`}
                  >
                    --
                  </p>
                </div>
              </div>
            </div>
            <div className=" w-full mt-5">
              <h6
                className={`font-[OpenSauceMedium] capitalize  text-sm ${
                  theme === "light" ? "text-[#0F0F0F]" : "text-white"
                }`}
              >
                Transaction Setting
              </h6>
              <div className=" w-full flex justify-between items-center mt-2">
                <h6
                  className={`font-[OpenSauceRegular] capitalize  text-xs ${
                    theme === "light" ? "text-[#0F0F0F]" : "text-white"
                  }`}
                >
                  transaction amount (sol)
                </h6>
                <div className="flex justify-between items-center w-1/3">
                  <h6
                    className={`font-[OpenSauceRegular] capitalize  text-xs ${
                      theme === "light" ? "text-[#0F0F0F]" : "text-white"
                    }`}
                  >
                    task interval (seconds)
                  </h6>

                  <Switch
                    onChange={handleToggleTaskIntervalChanged}
                    checked={isTaskInterval}
                  />
                </div>
              </div>
              <div className=" w-full flex justify-between gap-5 items-center mt-2 ">
                <input
                  type="number"
                  className={`w-1/3 px-3 py-2.5 rounded-lg border ${
                    theme === "light"
                      ? "border-[#B1AFBB] bg-white text-black"
                      : "bg-[#686587] text-white border-[#C0C7E1]"
                  } text-sm placeholder:text-[#AFAF9F]  focus:outline-none focus:border-blue-500`}
                  placeholder="Please Enter The Maximum."
                />
                <input
                  type="number"
                  className={`w-1/3 px-3 py-2.5 rounded-lg border ${
                    theme === "light"
                      ? "border-[#B1AFBB] bg-white text-black"
                      : "bg-[#686587] text-white border-[#C0C7E1]"
                  } text-sm placeholder:text-[#AFAF9F]  focus:outline-none focus:border-blue-500`}
                  placeholder="Please Enter The Maximum."
                />
                <input
                  type="number"
                  className={`w-1/3 px-3 py-2.5 rounded-lg border ${
                    theme === "light"
                      ? "border-[#B1AFBB] bg-white text-black"
                      : "bg-[#686587] text-white border-[#C0C7E1]"
                  } text-sm placeholder:text-[#AFAF9F]  focus:outline-none focus:border-blue-500`}
                  placeholder="https://pump.fun/"
                />
              </div>
              <div className=" w-full mt-4">
                <div className=" w-full">
                  <h6
                    className={`font-[OpenSauceMedium] ${
                      theme === "light" ? "text-black" : "text-white"
                    } text-sm mb-3`}
                  >
                    Wallet Execution Order
                  </h6>
                  <div className=" w-full flex justify-between items-center">
                    <div className="flex justify-start items-center gap-3">
                      <CTAButton
                        text="sequential execution"
                        font="font-[OpenSauceRegular]"
                        arrowSize="w-0 h-0" // Customize the arrow size
                        paddingY="py-3 capitalize "
                        paddingX="px-6 w-max" // Customize the horizontal padding
                        gap="gap-1" // Customize the gap between text and arrow
                        onClick={() => console.log("Button clicked!")}
                      />
                      <button
                        className={`${
                          theme === "light" ? "bg-[#F6F4FF]" : "bg-[#EEECF2]"
                        } w-max capitalize rounded-full px-6 py-3 flex justify-center items-center border border-[#C3C0D7] gap-1 font-[OpenSauceRegular] text-xs cursor-pointer text-[#0F0F0F]`}
                      >
                        random execution
                      </button>
                    </div>
                  </div>
                </div>
                <div className=" w-full mt-5">
                  <h6
                    className={`font-[OpenSauceMedium] ${
                      theme === "light" ? "text-black" : "text-white"
                    } text-sm mb-3`}
                  >
                    Jito MEV Tip
                  </h6>
                  <div className="flex w-full mt-3 justify-start items-center gap-3 ">
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
                       } rounded-xl capitalize px-7 py-5 h-full cursor-pointer text-center text-xs font-[OpenSauceRegular]`}
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
                className={`w-full h-max rounded-xl mt-7 border ${
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
                  if you have any questions during the service process please
                  contact customer service
                </p>
              </div>
              <CTAButton
                text="Start trading"
                font="font-poppins font-semibold"
                arrowSize="w-0 h-0" // Customize the arrow size
                paddingY="py-3"
                paddingX="px-12 mt-6 w-max mx-auto" // Customize the horizontal padding
                gap="gap-1" // Customize the gap between text and arrow
                onClick={() => console.log("Button clicked!")}
              />

              <p
                className={`font-[OpenSauceRegular] font-normal text-xs ${
                  theme === "light" ? "text-[#5C5C5C]" : "text-[#DFDCF2]"
                } text-sm text-center capitalize leading-relaxed mt-5`}
              >
                The lowest service fee in the market, with each new address buy
                costing only 0.00009 SOL.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PumpMicroTrading;
