import React, { useState } from "react";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import ContentContainerFull from "../reusable/ContentContainerFull";
import HeaderText from "../reusable/HeaderText";
import Label from "../reusable/Label";
import DarkInput from "../reusable/DarkInput";
import Switch from "../Switch";
import CTAButton from "../CTAButton";

const PumpLaunchAndBuy = () => {
  const [token, setToken] = useState("0");
  const [isAdvancedOptions, setIsAdvancedOptions] = useState(false);
  const handleToggleAdvancedOptionsChanged = () => {
    setIsAdvancedOptions(!isAdvancedOptions);
  };

  const { theme } = useTheme();

  return (
    <div className="v1Token-section w-full h-full flex justify-center items-center flex-col">
      <div className="p-5 w-full flex justify-start items-center flex-col gap-10">
        <div className="h-full w-full flex justify-between items-start gap-10">
          <ContentContainerFull>
            <div className=" w-full ">
              <HeaderText>Pump Launch and Buy</HeaderText>

              <p className="text-[#5C5C5C] mt-3 font-[OpenSauceRegular] text-xs font-normal">
                During the Pump.fun launch, other addresses simultaneously
                perform token buy-in operations, effectively simplifying the
                trading process and accelerating market participation, giving
                you an early advantage and potential profits sooner.
              </p>
              <div
                style={{ boxShadow: "2px 2px 10px 0px #734EAB45" }}
                className={`${
                  theme === "light"
                    ? "bg-[#F5F4FF] border-[#DCD2EB]"
                    : "bg-[#3F2D58] border-[#4B4868]"
                } mt-5 border  rounded-xl gap-5 w-full flex justify-center items-center p-5`}
              >
                <div className="flex flex-col gap-1 w-1/2">
                  <Label labelText="Token Name" />
                  <DarkInput placeholder="|" onChange={() => {}} value={""} />
                </div>
                <div className="flex flex-col gap-1 w-1/2">
                  <Label labelText="Token Symbol" />
                  <DarkInput placeholder="|" onChange={() => {}} value={""} />
                </div>
              </div>
              <div
                style={{ boxShadow: "2px 2px 10px 0px #734EAB45" }}
                className={`${
                  theme === "light"
                    ? "bg-[#F5F4FF] border-[#DCD2EB]"
                    : "bg-[#3F2D58] border-[#4B4868]"
                } mt-5 border  rounded-xl gap-5 w-full flex justify-center flex-col items-center p-5`}
              >
                <div className="flex gap-10 justify-start items-center h-full ">
                  <div className="w-[18rem]">
                    <Label labelText="Token Logo:" />

                    <div
                      className={`border-2 mt-2 border-dashed w-full  ${
                        theme === "light"
                          ? "bg-white border-[#6C41EB]"
                          : "bg-[#423F5E] border-[#C0C7E1]"
                      } rounded-xl h-[180px] flex justify-center items-center`}
                    >
                      <img
                        src="./upload.svg"
                        className="w-14 h-14 object-cover cursor-pointer"
                        alt="upload"
                        onClick={() => {
                          const fileInput =
                            document.getElementById("fileInput");
                          if (fileInput)
                            (fileInput as HTMLInputElement).click(); // Add null check and cast to HTMLInputElement
                        }}
                      />
                      <input
                        type="file"
                        id="fileInput"
                        className="hidden"
                        onChange={(e) => console.log(e.target.files)} // Handle file selection
                      />
                    </div>
                  </div>

                  {/* Placeholder for Image Upload */}
                  <div className={`w-full h-max rounded-xl mt-4 p-5 `}>
                    <p
                      className={`font-poppins text-sm leading-relaxed ${
                        theme === "light" ? "text-[#747474]" : "text-[#9691C6]"
                      }`}
                    >
                      {/* <p className="font-[OpenSauceRegular] capitalize font-normal text-[#747474] text-sm"> */}
                      Supported image formats: PNG/GIF/JPG/WEBP/JPEG and SVG{" "}
                      <br />
                      Recommended size: 1000×1000 pixels
                      <br />
                      <br /> If it meets the above requirements, it can be
                      better displayed on various platforms and applications.
                    </p>
                  </div>
                </div>
              </div>
              <div
                style={{ boxShadow: "2px 2px 10px 0px #734EAB45" }}
                className={`${
                  theme === "light"
                    ? "bg-[#F5F4FF] border-[#DCD2EB]"
                    : "bg-[#3F2D58] border-[#4B4868]"
                } mt-5 border  rounded-xl gap-5 w-full flex justify-center flex-col items-center p-5`}
              >
                <div className="gap-5 w-full flex justify-center flex-col items-center">
                  <div className="flex flex-col gap-1 w-full">
                    <Label labelText="Token Description" />
                    <DarkInput placeholder="|" onChange={() => {}} value={""} />
                  </div>
                  <div className=" flex justify-between items-center w-full gap-8">
                    <div
                      className={`border ${
                        theme === "light"
                          ? "border-[#B1AFBB] bg-white"
                          : " bg-[#564075] border-[#4B4868]"
                      } rounded-lg p-4 w-1/3 flex justify-start items-center gap-2`}
                    >
                      <img
                        src="./dark-solana.svg"
                        alt="solana"
                        className=" object-cover w-8 h-8"
                      />
                      <div className="">
                        <h6
                          className={`${
                            theme === "light"
                              ? "text-[#363636]"
                              : "text-[#FCFCFC]"
                          }  font-[OpenSauceRegular] text-xs font-normal`}
                        >
                          Estimated Receive
                        </h6>
                        <p
                          className={`${
                            theme === "light"
                              ? "text-[#363636]"
                              : "text-[#AFABD7]"
                          }  font-[OpenSauceRegular] mt-2 text-xs font-normal`}
                        >
                          Token
                        </p>
                      </div>
                    </div>
                    <div
                      className={`border ${
                        theme === "light"
                          ? "border-[#B1AFBB] bg-white"
                          : " bg-[#564075] border-[#4B4868]"
                      } rounded-lg p-4 w-1/3 flex justify-start items-center gap-2`}
                    >
                      <img
                        src="./dark-solana.svg"
                        alt="solana"
                        className=" object-cover w-8 h-8"
                      />
                      <div className="">
                        <h6
                          className={`${
                            theme === "light"
                              ? "text-[#363636]"
                              : "text-[#FCFCFC]"
                          }  font-[OpenSauceRegular] text-xs font-normal`}
                        >
                          Estimated Receive
                        </h6>
                        <p
                          className={`${
                            theme === "light"
                              ? "text-[#363636]"
                              : "text-[#AFABD7]"
                          }  font-[OpenSauceRegular] mt-2 text-xs font-normal`}
                        >
                          Token
                        </p>
                      </div>
                    </div>
                    <div
                      className={`border ${
                        theme === "light"
                          ? "border-[#B1AFBB] bg-white"
                          : " bg-[#564075] border-[#4B4868]"
                      } rounded-lg p-4 w-1/3 flex justify-start items-center gap-2`}
                    >
                      <img
                        src="./dark-solana.svg"
                        alt="solana"
                        className=" object-cover w-8 h-8"
                      />
                      <div className="">
                        <h6
                          className={`${
                            theme === "light"
                              ? "text-[#363636]"
                              : "text-[#FCFCFC]"
                          }  font-[OpenSauceRegular] text-xs font-normal`}
                        >
                          Estimated Receive
                        </h6>
                        <p
                          className={`${
                            theme === "light"
                              ? "text-[#363636]"
                              : "text-[#AFABD7]"
                          }  font-[OpenSauceRegular] mt-2 text-xs font-normal`}
                        >
                          Token
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                style={{ boxShadow: "2px 2px 10px 0px #734EAB45" }}
                className={`${
                  theme === "light"
                    ? "bg-[#F5F4FF] border-[#DCD2EB]"
                    : "bg-[#3F2D58] border-[#4B4868]"
                } mt-5 border  rounded-xl gap-5 w-full flex justify-center flex-col items-center p-5`}
              >
                <div className=" w-full text-left">
                  <h6
                    className={`${
                      theme === "light" ? "text-black" : "text-[#FCFCFC]"
                    } font-[OpenSauceMedium] capitalize font-medium text-sm `}
                  >
                    Other Wallet Buy Parameters Settings
                  </h6>
                  <div className="flex justify-between items-center w-full">
                    <p
                      className={`${
                        theme === "light" ? "text-[#5C5C5C]" : "text-[#C7C5DB]"
                      } mt-2 font-[OpenSauceRegular] text-xs font-normal`}
                    >
                      Supports up to 20 wallet addresses for purchases. Over 16
                      addresses require two signatures
                    </p>
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
                      "Private key",
                      "Address",
                      "Sol Balance",
                      "Est. Volume",
                      "Buy Amount So",
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
                          theme === "light"
                            ? "text-[#525252]"
                            : "text-[#BABFD2]"
                        }`}
                      >
                        --
                      </h6>
                      <h6
                        className={`font-[OpenSauceRegular] text-xs font-normal ${
                          theme === "light"
                            ? "text-[#525252]"
                            : "text-[#BABFD2]"
                        }`}
                      >
                        --
                      </h6>
                      <h6
                        className={`font-[OpenSauceRegular] text-xs font-normal ${
                          theme === "light"
                            ? "text-[#525252]"
                            : "text-[#BABFD2]"
                        }`}
                      >
                        --
                      </h6>
                      <h6
                        className={`font-[OpenSauceRegular] text-xs font-normal ${
                          theme === "light"
                            ? "text-[#525252]"
                            : "text-[#BABFD2]"
                        }`}
                      >
                        --
                      </h6>
                      <h6
                        className={`font-[OpenSauceRegular] text-xs font-normal ${
                          theme === "light"
                            ? "text-[#525252]"
                            : "text-[#BABFD2]"
                        }`}
                      >
                        --
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" mt-4 mb-2">
                <h6
                  className={`${
                    theme === "light" ? "text-[#1F1F1F]" : "text-[#FCFCFC]"
                  } font-[OpenSauceMedium] text-sm font-medium`}
                ></h6>
                <Switch
                  onChange={handleToggleAdvancedOptionsChanged}
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
                  <h6
                    className={`font-[OpenSauceRegular] ${
                      theme === "light" ? "text-[#363636]" : "text-white"
                    } text-sm mb-3`}
                  >
                    Jito MEV Tip (only needs to be paid once, recommended
                    0.0003)
                  </h6>
                  <div className="flex justify-start items-center gap-3 mt-4">
                    <div
                      className={` border flex justify-start items-center px-3 w-max py-2 rounded-xl gap-3 ${
                        theme === "light"
                          ? "bg-white shadow-[2px 3px 22px 0px #605C5C24]"
                          : "bg-[#686587] border-[#C1B8CD]"
                      } p-5`}
                      // className=" flex justify-start items-center px-3 w-max py-2 rounded-xl gap-3 bg-white"
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
                  <div className="flex flex-col gap-1 mt-6">
                    <Label labelText="Block Processing Engine" />
                    <DarkInput onChange={() => {}} value={""} placeholder="|" />
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
                  This feature relies on Jito's bundling functionality. Due to
                  the complex influences of the network environment, Jito nodes,
                  RPC nodes, and block processing engines, this feature may face
                  a high failure rate. If the operation fails, the launch will
                  not succeed and no fees will be incurred. Please try changing
                  the RPC node, block processing engine, increasing Jito's tip
                  (recommended 0.001 SOL), and consider trying again during
                  periods of low on-chain activity.
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
                  For simultaneous buys on Pump.fun, ensure that the buy-in
                  wallet has sufficient funds and GAS to avoid buy failures. You
                  can set up to 20 addresses for simultaneous buys. Pump Launch
                  and Buy
                </p>
              </div>

              <CTAButton
                text="Pump Launch and Buy"
                font="font-poppins font-semibold"
                arrowSize="w-0 h-0" // Customize the arrow size
                paddingY="py-3"
                paddingX="px-8 w-max mx-auto mt-6 capitalize" // Customize the horizontal padding
                gap="gap-1" // Customize the gap between text and arrow
                onClick={() => console.log("Button clicked!")}
              />
              <p
                className={`font-[OpenSauceRegular] font-normal ${
                  theme === "light" ? "text-[#5C5C5C]" : "text-[#fcfcfc]"
                } text-sm text-center capitalize leading-relaxed mt-5`}
              >
                The lowest service fee in the network, Pump launch and buy for
                only 0.05 SOL
              </p>
            </div>
          </ContentContainerFull>
        </div>
      </div>
    </div>
  );
};

export default PumpLaunchAndBuy;
