import { useTheme } from "@/context/ThemeContext";
import React, { useState } from "react";

const PineappleBundler = () => {
  const [openModal, setOpenModal] = useState<
    null | "first" | "second" | "third"
  >(null);
  const [activeValue, setActiveValue] = useState(10);
  const { theme } = useTheme();
  return (
    <div className="v1Token-section w-full relative h-full flex justify-center items-center flex-col">
      <div className="p-5 w-full flex justify-start items-center flex-col gap-10">
        <div className="h-full w-full flex justify-between items-start gap-10">
          <div
            className={`w-full rounded-xl h-full flex-col flex justify-center items-center p-4 border ${
              theme === "dark"
                ? "bg-[#423F5E] border-[#92909D]"
                : "bg-white border-[#DAE2FF] shadow-[4px 4px 30px 0px #3D54AB24]"
            }`}
          >
            <div className=" w-full">
              <h6
                className={`text-lg font-medium font-poppins  ${
                  theme === "light" ? "text-black" : "text-[#FCFCFC]"
                }`}
              >
                Buy & Sell
              </h6>
            </div>
            <div className=" w-full">
              <ProgressStep />
            </div>

            <div className=" w-full mt-6">
              <div className="flex justify-between items-center w-full gap-8">
                <div className=" relative w-1/2">
                  <label
                    className={`text-xs h-[16px] capitalize font-[OpenSauceRegular] ${
                      theme === "light" ? "text-[#231F20]" : "text-[#FCFCFC]"
                    }`}
                    htmlFor="tokenTicker"
                  >
                    Token Address
                  </label>
                  <div className=" relative">
                    <select
                      id="tokenTicker"
                      className={`w-full px-3 py-2.5 rounded-lg mt-2 relative border ${
                        theme === "light"
                          ? "border-[#C0C7E1] text-[#C3C3C3] bg-white"
                          : "bg-[#686587] border-[#C0C7E1] text-[#C3C3C3] shadow-[2px 2px 10px 0px #4B68DA47]"
                      } text-sm placeholder:text-[#AFAF9F] focus:outline-none focus:border-blue-500 appearance-none`}
                    >
                      <option value="" className="text-[#AFAF9F]">
                        |
                      </option>
                      <option value="Token1">Token 1</option>
                      <option value="Token2">Token 2</option>
                      <option value="Token3">Token 3</option>
                    </select>
                    <img
                      src="./arrow-down-black.svg"
                      className=" w-4 h-4 object-cover absolute right-3 top-5"
                      alt="arrow"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1 w-1/2 mt-2">
                  <label
                    className={`text-xs font-[OpenSauceRegular] ${
                      theme === "light" ? "text-[#231F20]" : "text-[#FCFCFC]"
                    }`}
                    htmlFor="tokenSupply"
                  >
                    Zombie Wallet
                  </label>
                  <div className=" w-full relative ">
                    <input
                      id="tokenSupply"
                      type="number"
                      className={`w-full px-3 py-2.5 rounded-lg text-sm placeholder:text-[#AFAF9F] focus:outline-none focus:border-blue-500 ${
                        theme === "light"
                          ? "bg-white border text-black border-[#C0C7E1] shadow-[2px 2px 10px 0px #4B68DA47]"
                          : "bg-[#686587] border-[#C0C7E1] text-[#C3C3C3] shadow-[2px 2px 10px 0px #4B68DA47]"
                      }`}
                      placeholder="|"
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
            <div className="flex justify-between items-center gap-5 w-full my-5">
              <div className=" w-12 h-12 flex justify-center items-center rounded-full bg-[#E8E8E8] border border-[#EEEEE2]">
                <img
                  src="./gabage.svg"
                  className=" w-5 h-5 object-cover"
                  alt="save"
                />
              </div>
              <button className="font-[OpenSauceRegular] text-sm text-white flex justify-center items-center bg-[#27D968] rounded-xl px-8 py-3">
                Disperse Sol
              </button>
              <button className="font-[OpenSauceRegular] text-sm text-white flex justify-center items-center bg-[#27D968] rounded-xl px-8 py-3">
                Collect Sol
              </button>
              <button className="font-[OpenSauceRegular] text-sm text-white flex justify-center items-center bg-[#FF0000] rounded-xl px-8 py-3">
                Generate Wallets
              </button>
              <button className="font-[OpenSauceRegular] text-sm text-white flex justify-center items-center bg-[#FF0000] rounded-xl px-8 py-3">
                Download Wallets
              </button>
              <button className="font-[OpenSauceRegular] text-sm text-white flex justify-center items-center bg-[#27D968] rounded-xl px-8 py-3">
                Simulate
              </button>
              <button
                onClick={() => setOpenModal("first")}
                className={`font-[OpenSauceRegular] bg-[#E8E8E8] text-sm  flex justify-center items-center ${
                  theme === "light" ? " text-white" : " text-[#231F20]"
                } rounded-xl px-8 py-3`}
              >
                Start
              </button>

              <div className=" w-12 h-12 flex justify-center items-center rounded-full bg-[#E8E8E8] border border-[#EEEEE2]">
                <img
                  src="./save.svg"
                  className=" w-5 h-5 object-cover"
                  alt="save"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {openModal === "first" && (
        <>
          <div
            onClick={() => setOpenModal(null)}
            className="fixed inset-0 z-20 bg-black opacity-60"
          />

          <div
            style={{
              boxShadow:
                theme === "light"
                  ? "-6px 6px 30px 0px #B482FF69"
                  : "2px 2px 10px 0px #4B68DA47",
            }}
            className={`w-max p-7 z-30 h-max absolute rounded-xl border top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
              theme === "light"
                ? "bg-white border-[#D6C8ED]"
                : "bg-[#686587] border-[#C0C7E1]"
            }`}
          >
            <div
              className={`flex justify-center items-center border gap-5 ${
                theme === "light"
                  ? "border-[#C1B8CD] shadow-[2px 2px 10px 0px #C59FFF]"
                  : "border-[#C0C7E1] "
              } rounded-full p-1`}
            >
              <p
                className={`text-xs font-poppins font-normal capitalize ${
                  theme === "light" ? "bg-[#C59FFF]" : "bg-[#C59FFF]"
                } px-5 py-2 cursor-pointer text-[#171616] rounded-full`}
              >
                enter the number of wallet
              </p>
              {[10, 50, 25, 30, 40, 100].map((value, i) => (
                <p
                  key={i}
                  onClick={() => setActiveValue(value)}
                  className={`text-xs font-poppins font-normal px-5 py-2 cursor-pointer rounded-full ${
                    theme === "dark"
                      ? activeValue === value
                        ? "bg-[#C59FFF] text-white"
                        : "text-[#E0E0E0]"
                      : activeValue === value
                      ? "bg-[#C59FFF] text-[#171616]"
                      : "text-[#171616]"
                  }`}
                >
                  {value}
                </p>
              ))}
            </div>
            <div className="flex justify-center items-center w-full mt-5 gap-4">
              <button
                className="px-6 py-2.5 bg-[#E8E8E8] text-[#363636] font-poppins text-xs rounded-xl hover:bg-gray-400"
                onClick={() => setOpenModal(null)}
              >
                Cancel
              </button>
              <button
                onClick={() => setOpenModal("second")}
                className="px-6 py-2.5 bg-[#27D968] font-poppins text-xs text-white rounded-xl hover:bg-green-600"
              >
                OK
              </button>
            </div>
          </div>
        </>
      )}

      {/* Second Modal */}
      {openModal === "second" && (
        <>
          <div
            onClick={() => setOpenModal(null)}
            className="fixed inset-0 z-20 bg-black opacity-60"
          />

          <div
            style={{
              boxShadow:
                theme === "light"
                  ? "-6px 6px 30px 0px #B482FF69"
                  : "2px 2px 10px 0px #4B68DA47",
            }}
            className={`w-[400px] p-5 z-30 h-[220px] absolute rounded-xl  flex justify-center items-center  border top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
              theme === "light"
                ? "bg-white border-[#D6C8ED]"
                : "bg-[#686587] border-[#C0C7E1]"
            }`}
          >
            <div className="w-full">
              <h6
                className={`${
                  theme === "light" ? "text-[#231F20]" : "text-[#FCFCFC]"
                } font-[OpenSauceMedium] capitalize text-center text-sm`}
              >
                set additional sol amount
              </h6>
              <div className="flex flex-col gap-1 mt-4">
                <label
                  className={`text-xs font-[OpenSauceRegular] ${
                    theme === "light" ? "text-[#231F20]" : "text-[#FCFCFC]"
                  }`}
                  htmlFor="tokenDescription"
                >
                  SOL Amount
                </label>
                <input
                  type="number"
                  className={`w-full px-3 py-2.5 rounded-lg border ${
                    theme === "light"
                      ? "border-[#C0C7E1] bg-white  text-black shadow-[2px 2px 10px 0px #4B68DA47] "
                      : " bg-[#686587] border-[#C0C7E1] text-white"
                  } text-sm placeholder:text-[#AFAF9F] focus:outline-none focus:border-blue-500`}
                  placeholder="|"
                />
              </div>
              <div className="flex justify-center items-center w-full mt-5 gap-4">
                <button
                  className="px-6 py-2.5 bg-[#E8E8E8] text-[#363636] font-poppins text-xs rounded-xl hover:bg-gray-400"
                  onClick={() => setOpenModal(null)}
                >
                  Cancel
                </button>
                <button
                  onClick={() => setOpenModal("third")}
                  className="px-6 py-2.5 bg-[#27D968] font-poppins text-xs text-white rounded-xl hover:bg-green-600"
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      {/* Third Modal */}
      {openModal === "third" && (
        <>
          <div
            onClick={() => setOpenModal(null)}
            className="fixed inset-0 z-20 bg-black opacity-60"
          />

          <div
            style={{
              boxShadow:
                theme === "light"
                  ? "-6px 6px 30px 0px #B482FF69"
                  : "2px 2px 10px 0px #4B68DA47",
            }}
            className={`w-[400px] p-5 z-30 h-[220px] absolute rounded-xl  flex justify-center items-center  border top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
              theme === "light"
                ? "bg-white border-[#D6C8ED]"
                : "bg-[#686587] border-[#C0C7E1]"
            }`}
          >
            <div className="w-full">
              <h6
                className={`${
                  theme === "light" ? "text-[#231F20]" : "text-[#FCFCFC]"
                } font-[OpenSauceMedium] capitalize text-center text-sm`}
              >
                Set Zombie Wallet
              </h6>
              <div className="flex flex-col gap-1 mt-4">
                <label
                  className={`text-xs font-[OpenSauceRegular] ${
                    theme === "light" ? "text-[#231F20]" : "text-[#FCFCFC]"
                  }`}
                  htmlFor="tokenDescription"
                >
                  Private Key
                </label>
                <input
                  type="number"
                  className={`w-full px-3 py-2.5 rounded-lg border ${
                    theme === "light"
                      ? "border-[#C0C7E1] bg-white  text-black shadow-[2px 2px 10px 0px #4B68DA47] "
                      : " bg-[#686587] border-[#C0C7E1] text-white"
                  } text-sm placeholder:text-[#AFAF9F] focus:outline-none focus:border-blue-500`}
                  placeholder="|"
                />
              </div>
              <div className="flex justify-center items-center w-full mt-5 gap-4">
                <button
                  className="px-6 py-2.5 bg-[#E8E8E8] text-[#363636] font-poppins text-xs rounded-xl hover:bg-gray-400"
                  onClick={() => setOpenModal(null)}
                >
                  Cancel
                </button>
                <button
                  onClick={() => setOpenModal(null)}
                  className="px-6 py-2.5 bg-[#27D968] font-poppins text-xs text-white rounded-xl hover:bg-green-600"
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PineappleBundler;

const ProgressStep = () => {
  const steps = ["Disperse Sol", "Pool Liquidity", "Disperse Token", "Sell"];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentStep, setCurrentStep] = useState(2);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [complete, setComplete] = useState(false);

  return (
    <div className="flex my-5 w-full px-8">
      {steps.map((step, i) => (
        <div
          key={i}
          className={`relative flex ${
            i === steps.length - 1 ? "w-10" : "w-1/3 "
          } flex-col items-start justify-center `}
        >
          <div className="flex items-center justify-start w-full">
            {/* Step Indicator */}
            <div
              className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border font-[OpenSauceRegular] text-xs ${
                i + 1 < currentStep || complete
                  ? "bg-[#6C41EB] text-white border-[#6C41EB]"
                  : "bg-white text-[#44443C] border-[#B7ABD9]"
              }`}
            >
              0{i + 1}
            </div>
            {/* Line between steps, only render if not the last step */}
            {i < steps.length - 1 && (
              <div
                className={`h-[3px] w-[90%] ${
                  i + 1 < currentStep || complete
                    ? "bg-[#6C41EB]"
                    : "bg-[#E2DBF9]"
                }`}
              ></div>
            )}
          </div>
          <p
            className={`mt-4 ${
              i === steps.length - 1 ? " text-right -mr-5" : "-ml-4 "
            } font-[OpenSauceRegular] text-xs ${
              i + 1 < currentStep || complete ? "text-[#6C41EB]" : "text-black"
            }`}
          >
            {step}
          </p>
          {/* Step Title */}
        </div>
      ))}
    </div>
  );
};
