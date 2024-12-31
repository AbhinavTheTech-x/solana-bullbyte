import { useTheme } from "@/context/ThemeContext";
import React, { useState } from "react";
import ContentContainerFull from "../reusable/ContentContainerFull";
import HeaderText from "../reusable/HeaderText";
import Label from "../reusable/Label";
import LightInput from "../reusable/LightInput";
import Select from "../reusable/SelectInput";
import PopUp from "../reusable/PopUp";

const LimeLightRobot = () => {
  const [openModal, setOpenModal] = useState<null | "first" | "second">(null);
  const [activeValue, setActiveValue] = useState(10);
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

                  <LightInput value={""} onChange={() => {}} placeholder="|" />
                </div>
                <div className="flex flex-col gap-1 w-1/3">
                  <Label labelText="Volume" />
                  <LightInput value={""} onChange={() => {}} placeholder="|" />
                </div>
                <div className="flex flex-col gap-1 w-1/3">
                  <Label labelText="Fees(SOL)" />
                  <LightInput value={""} onChange={() => {}} placeholder="|" />
                </div>
              </div>
            </div>
            <div className=" w-full mt-6">
              <div className="flex justify-between items-center w-full gap-8">
                <div className=" relative w-1/2">
                  <Label labelText="Token Address" />
                  <Select options={dummyOptions} value="" onChange={() => {}} />
                </div>
                <div className="flex flex-col gap-1 w-1/2 mt-2">
                  <Label labelText="Zombie Wallet" />
                  <div className=" w-full relative ">
                    <LightInput
                      value={""}
                      onChange={() => {}}
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
            <div className=" w-full mt-6">
              <div className="flex justify-between items-center w-full gap-8">
                <div className=" relative w-1/2">
                  <Label labelText=" Time Interval(second) >5s" />
                  <Select options={dummyOptions} value="" onChange={() => {}} />
                </div>
                <div className="flex flex-col gap-1 w-1/2 mt-2">
                  <Label labelText="JITO TIP" />
                  <div className=" w-full relative ">
                    <LightInput
                      value={""}
                      onChange={() => {}}
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
                {[
                  "#",
                  "Address",
                  "Sol Balance",
                  "Token Balance",
                  "Sol Amount",
                ].map((title, i) => {
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
                })}
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
              <button
                onClick={() => setOpenModal("first")}
                className="font-[OpenSauceRegular] text-sm text-white flex justify-center items-center bg-[#27D968] rounded-xl px-8 py-3"
              >
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
              className={`flex justify-center items-center border  ${
                theme === "light"
                  ? "border-[#C1B8CD] shadow-[2px 2px 10px 0px #C59FFF]"
                  : "border-[#C0C7E1] "
              } rounded-full p-1`}
            >
              {[10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60].map((value, i) => (
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

          <PopUp
            title="Set Zombie Wallet"
            onClose={() => setOpenModal(null)}
            onConfirm={() => {}}
          />
        </>
      )}
    </div>
  );
};

export default LimeLightRobot;
