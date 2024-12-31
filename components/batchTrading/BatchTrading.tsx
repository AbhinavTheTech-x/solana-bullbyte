import { useTheme } from "@/context/ThemeContext";
import React, { useState } from "react";
import CTAButton from "../CTAButton";
import Switch from "../Switch";
import ContentContainerFull from "../reusable/ContentContainerFull";
import HeaderText from "../reusable/HeaderText";

const BatchTrading = () => {
  const [token, setToken] = useState("0");
  const [slipPage, setSlipPage] = useState("Auto");
  const [isTaskInterval, setIsTaskInterval] = useState(false);
  const { theme } = useTheme();

  const handleToggleTaskInterval = () => {
    setIsTaskInterval((prev) => !prev);
  };

  return (
    <div className="v1Token-section w-full h-full flex justify-center items-center flex-col">
      <div className="p-5 w-full flex justify-start items-start flex-col gap-10">
        <ContentContainerFull>
          <div className=" flex justify-between items-center w-full mb-2">
            <HeaderText>pump batch trading</HeaderText>
            <div
              className={`flex justify-start items-center gap-1 ${
                theme === "light" ? "bg-[#E7EDFF]" : "bg-[#E7EDFF]"
              } rounded-lg px-3 py-3`}
            >
              <img
                src="./reset-all.svg"
                className=" w-4 h-4 object-cover"
                alt="live"
              />
              <p
                className={`text-[#4568DC] font-poppins capitalize font-normal text-xs`}
              >
                security reminder must read!
              </p>
            </div>
          </div>
          <p
            className={`${
              theme === "light" ? "text-[#5C5C5C]" : "text-darkModeSubHeading"
            } mt-3 font-[OpenSauceRegular] text-xs font-normal`}
          >
            Presets and automatically executes trading commands, facilitating
            batch transactions on Pump, enhances trading efficiency and
            timeliness, especially suitable for scenarios requiring quick
            execution of large volumes of transactions.
          </p>
          <div className="h-full w-full flex justify-between  items-start gap-10 mt-6">
            <div className=" w-1/2 h-full">
              <div
                style={{
                  boxShadow:
                    theme === "dark"
                      ? "4px 4px 30px 0px #3D54AB24"
                      : "4px 4px 30px 0px #3D54AB24",
                }}
                className={`w-full h-full flex-col flex rounded-xl justify-start items-center p-5 border 
                ${
                  theme === "dark"
                    ? "bg-[#3F2D58] border-[#4B4868]"
                    : "bg-white border-[#DAE2FF]"
                }`}
              >
                <div className=" w-full">
                  <h6
                    className={`font-poppins text-left text-sm capitalize ${
                      theme === "light" ? "text-black" : "text-white"
                    } font-medium`}
                  >
                    user overview
                  </h6>
                </div>
                <div className=" w-full">
                  {" "}
                  <p
                    className={`text-left capitalize font-[OpenSauceMedium] text-xs mt-2 ${
                      theme === "dark" ? "text-[#FCFCFC]" : "text-[#1F1F1F]"
                    }`}
                  >
                    Total Address Count:
                  </p>
                  <div className=" w-full mt-2 flex justify-center items-center border-b border-[#C1B8CD] flex-col pb-2">
                    <div className="flex justify-between items-center w-full ">
                      <h6
                        className={`font-poppins text-xs capitalize ${
                          theme === "dark" ? "text-[#FCFCFC]" : "text-[#363636]"
                        }`}
                      >
                        sol balance
                      </h6>
                      <h6
                        className={`font-poppins text-xs capitalize ${
                          theme === "dark" ? "text-[#FCFCFC]" : "text-[#363636]"
                        }`}
                      >
                        USDC balance
                      </h6>
                      <h6
                        className={`font-poppins text-xs capitalize ${
                          theme === "dark" ? "text-[#FCFCFC]" : "text-[#363636]"
                        }`}
                      >
                        Token balance
                      </h6>
                    </div>
                    <div className="flex justify-between mt-2 items-center w-full ">
                      <h6
                        className={`font-poppins text-left text-xs capitalize ${
                          theme === "dark" ? "text-[#FCFCFC]" : "text-[#363636]"
                        }`}
                      >
                        --
                      </h6>
                      <h6
                        className={`font-poppins text-left text-xs capitalize ${
                          theme === "dark" ? "text-[#FCFCFC]" : "text-[#363636]"
                        }`}
                      >
                        --
                      </h6>
                      <h6
                        className={`font-poppins text-left text-xs capitalize ${
                          theme === "dark" ? "text-[#FCFCFC]" : "text-[#363636]"
                        }`}
                      >
                        --
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="w-full mt-3">
                  <p
                    className={`text-left capitalize font-[OpenSauceMedium] text-xs mt-2 ${
                      theme === "dark" ? "text-[#FCFCFC]" : "text-[#1F1F1F]"
                    }`}
                  >
                    active address count:
                  </p>
                  <div className="w-full mt-2 flex justify-center items-center flex-col pb-2">
                    <div className="flex justify-between items-center w-full">
                      <h6
                        className={`font-poppins text-xs capitalize ${
                          theme === "dark" ? "text-[#FCFCFC]" : "text-[#363636]"
                        }`}
                      >
                        sol balance
                      </h6>
                      <h6
                        className={`font-poppins text-xs capitalize ${
                          theme === "dark" ? "text-[#FCFCFC]" : "text-[#363636]"
                        }`}
                      >
                        USDC balance
                      </h6>
                      <h6
                        className={`font-poppins text-xs capitalize ${
                          theme === "dark" ? "text-[#FCFCFC]" : "text-[#363636]"
                        }`}
                      >
                        Token balance
                      </h6>
                    </div>
                    <div className="flex justify-between mt-2 items-center w-full">
                      <h6
                        className={`font-poppins text-left text-xs capitalize ${
                          theme === "dark" ? "text-[#FCFCFC]" : "text-[#363636]"
                        }`}
                      >
                        --
                      </h6>
                      <h6
                        className={`font-poppins text-left text-xs capitalize ${
                          theme === "dark" ? "text-[#FCFCFC]" : "text-[#363636]"
                        }`}
                      >
                        --
                      </h6>
                      <h6
                        className={`font-poppins text-left text-xs capitalize ${
                          theme === "dark" ? "text-[#FCFCFC]" : "text-[#363636]"
                        }`}
                      >
                        --
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  boxShadow:
                    theme === "dark"
                      ? "4px 4px 30px 0px #3D54AB24"
                      : "4px 4px 30px 0px #3D54AB24",
                }}
                className={`w-full h-full flex-col flex rounded-xl mt-5 justify-start items-center p-5 border 
                  ${
                    theme === "dark"
                      ? "bg-[#3F2D58] border-[#4B4868]"
                      : "bg-white border-[#DAE2FF]"
                  }`}
              >
                <div className=" w-full">
                  <h6
                    className={`font-poppins text-left text-sm capitalize font-medium ${
                      theme === "dark" ? "text-white" : "text-black"
                    }`}
                  >
                    batch transaction setting
                  </h6>
                  <div className=" w-full relative">
                    <div className=" relative w-full mt-4">
                      <label
                        className={`text-xs font-[OpenSauceRegular] ${
                          theme === "light"
                            ? "text-[#231F20]"
                            : "text-[#FCFCFC]"
                        }`}
                        htmlFor="tokenTicker"
                      >
                        From
                      </label>
                      <div className=" relative">
                        <select
                          id="tokenTicker"
                          className={`w-full px-3 py-2.5 pl-10 rounded-lg mt-2 relative border ${
                            theme === "light"
                              ? "border-[#C0C7E1] text-[#C3C3C3] bg-white"
                              : "bg-[#686587] border-[#C0C7E1] text-[#C3C3C3] shadow-[2px 2px 10px 0px #4B68DA47]"
                          } text-sm placeholder:text-[#AFAF9F] focus:outline-none focus:border-blue-500 appearance-none`}
                        >
                          <option value="" className="text-[#AFAF9F]">
                            Solana
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
                        <img
                          src="./image (47).svg"
                          className=" w-6 h-7 object-contain absolute left-2 top-4"
                          alt="arrow"
                        />
                      </div>
                    </div>
                    <div className=" relative w-full mt-1">
                      <label
                        className={`text-xs font-[OpenSauceRegular] ${
                          theme === "light"
                            ? "text-[#231F20]"
                            : "text-[#FCFCFC]"
                        }`}
                        htmlFor="tokenTicker"
                      >
                        To
                      </label>
                      <div className=" relative">
                        <select
                          id="tokenTicker"
                          className={`w-full px-3 py-2.5 pl-10 rounded-lg mt-2 relative border ${
                            theme === "light"
                              ? "border-[#C0C7E1] text-[#C3C3C3] bg-white"
                              : "bg-[#686587] border-[#C0C7E1] text-[#C3C3C3] shadow-[2px 2px 10px 0px #4B68DA47]"
                          } text-sm placeholder:text-[#AFAF9F] focus:outline-none focus:border-blue-500 appearance-none`}
                        >
                          <option value="" className="text-[#AFAF9F]">
                            USDC
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
                        <img
                          src="./image (47).svg"
                          className=" w-6 h-7 object-contain absolute left-2 top-4"
                          alt="arrow"
                        />
                      </div>
                    </div>
                    <div className=" bg-purple-gradient border-4 border-[#F5E9F9] rounded-full w-16 h-16 flex justify-center items-center absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <img
                        src="./arrow-up-down.svg"
                        className=" w-7 h-7 object-cover"
                        alt="arrow"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-start items-center w-full gap-2 mt-4">
                  <h6
                    className={`font-[OpenSauceRegular] font-normal text-sm ${
                      theme === "dark" ? "text-white" : "text-[#000]"
                    }`}
                  >
                    DEX
                  </h6>
                  <div className="flex">
                    <div className="flex justify-center items-center overflow-hidden gap-3">
                      <div
                        className={`flex gap-2 justify-center items-center rounded-lg px-3 py-2 border ${
                          theme === "dark"
                            ? "bg-[#686587] border-[#C0C7E1] shadow-[2px_2px_10px_0px_#4B68DA47]"
                            : "bg-white border-[#DAE2FF] shadow-[2px_2px_10px_0px_#3D54AB24]"
                        }`}
                      >
                        <img
                          src="./image (1).svg"
                          className="w-6 h-6 object-cover"
                          alt="raydium"
                        />
                        <h6
                          className={`font-[OpenSauceMedium] text-xs ${
                            theme === "dark"
                              ? "text-[#FCFCFC]"
                              : "text-[#363636]"
                          }`}
                        >
                          Raydium
                        </h6>
                        <img
                          src="./share.svg"
                          className="cursor-pointer w-4 h-4 object-cover"
                          alt="share"
                        />
                      </div>
                      <div
                        className={`flex gap-2 justify-center items-center rounded-lg px-3 py-2 border ${
                          theme === "dark"
                            ? "bg-[#686587] border-[#C0C7E1] shadow-[2px_2px_10px_0px_#4B68DA47]"
                            : "bg-white border-[#DAE2FF] shadow-[2px_2px_10px_0px_#3D54AB24]"
                        }`}
                      >
                        <img
                          src="./image (36).svg"
                          className="w-6 h-6 object-cover"
                          alt="raydium"
                        />
                        <h6
                          className={`font-[OpenSauceMedium] text-xs ${
                            theme === "dark"
                              ? "text-[#FCFCFC]"
                              : "text-[#363636]"
                          }`}
                        >
                          Pump Fum
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  boxShadow:
                    theme === "dark"
                      ? "4px 4px 30px 0px #3D54AB24"
                      : "4px 4px 30px 0px #3D54AB24",
                }}
                className={`w-full mt-5 rounded-xl p-4 border 
                ${
                  theme === "dark"
                    ? "bg-[#3F2D58] border-[#4B4868]"
                    : "bg-white border-[#DAE2FF]"
                }`}
              >
                <h6
                  className={`font-poppins text-sm capitalize font-medium ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  transaction parameter setting
                </h6>
                <div className="w-full">
                  <p
                    className={`capitalize font-[OpenSauceMedium] text-xs mt-2 ${
                      theme === "dark" ? "text-white" : "text-[#1F1F1F]"
                    }`}
                  >
                    transaction quantity sol
                  </p>
                  <div className="flex justify-start flex-wrap items-center gap-y-5 my-4">
                    {[
                      "Total Amount",
                      "Fixed Amount",
                      "Random Amount",
                      "Random Percentage",
                    ].map((labelText, index) => (
                      <label
                        key={index}
                        className="flex items-center gap-2 w-1/2"
                      >
                        <input
                          type="radio"
                          name="transactionOption"
                          value={labelText}
                          className={`accent-${
                            theme === "dark" ? "[#FFFFFF]" : "[#573CFF]"
                          }`}
                          defaultChecked={index === 0}
                        />
                        <span
                          className={`text-xs font-poppins ${
                            theme === "dark" ? "text-white" : "text-[#1F1F1F]"
                          }`}
                        >
                          {labelText}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className=" w-full mt-5">
                  <div className=" flex justify-between items-center w-full">
                    <p
                      className={`font-[OpenSauceRegular] text-xs mt-2 ${
                        theme === "light" ? "text-black" : "text-white"
                      }`}
                    >
                      Task Interval (Seconds)
                    </p>

                    <Switch
                      onChange={handleToggleTaskInterval}
                      checked={isTaskInterval}
                    />
                  </div>
                  <input
                    id="logoImageUrl"
                    type="number"
                    className={`w-full px-3 py-2.5 mt-2 rounded-lg text-sm placeholder:text-[#AFAF9F] focus:outline-none focus:border-blue-500 ${
                      theme === "light"
                        ? "bg-white border text-black border-[#C0C7E1] shadow-[2px 2px 10px 0px #4B68DA47]"
                        : "bg-inputDark text-white border-formDarkBorder shadow-formDarkShadow"
                    }`}
                    placeholder="1.00"
                  />
                </div>
                <div className=" w-full mt-5">
                  <h6
                    className={`font-poppins text-sm ${
                      theme === "light" ? "text-black" : "text-white"
                    } font-medium`}
                  >
                    Slippage Setting
                  </h6>
                  <div
                    className={` border flex mt-3 justify-start items-center px-3 w-max py-2 rounded-xl gap-3 ${
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
            </div>
            <div className=" w-1/2 h-full">
              <div
                style={{ boxShadow: "4px 4px 30px 0px #3D54AB24" }}
                className={`w-full  border relative flex-col flex rounded-xl justify-start items-center ${
                  theme === "light"
                    ? "border-[#DAE2FF] bg-white"
                    : " bg-[#3F2D58] border-[#4B4868]"
                } rounded-xl h-[545px] p-5`}
              >
                <div className="flex justify-start items-center gap-3 w-full  ">
                  <CTAButton
                    text="import batch transaction wallets"
                    font="font-[OpenSauceRegular]"
                    arrowSize="w-0 h-0" // Customize the arrow size
                    paddingY="py-3 capitalize text-xs "
                    paddingX="px-6 w-max" // Customize the horizontal padding
                    gap="gap-1" // Customize the gap between text and arrow
                    onClick={() => console.log("Button clicked!")}
                  />
                  <button
                    className={`${
                      theme === "light" ? "bg-[#F6F4FF]" : "bg-[#EEECF2]"
                    } w-max capitalize rounded-full px-6 py-3 flex justify-center items-center border border-[#C3C0D7] gap-1 font-[OpenSauceRegular] text-xs cursor-pointer text-[#0F0F0F]`}
                  >
                    check balance
                  </button>
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
              <div
                style={{ boxShadow: "4px 4px 30px 0px #3D54AB24" }}
                className={`w-full mt-5 border relative flex-col flex rounded-xl justify-start items-center ${
                  theme === "light"
                    ? "border-[#DAE2FF] bg-white"
                    : " bg-[#3F2D58] border-[#4B4868]"
                } rounded-xl h-[505px] p-5`}
              >
                <div className=" w-full">
                  <h6
                    className={`font-poppins text-left text-sm capitalize font-medium ${
                      theme === "light" ? "text-black" : "text-white"
                    }`}
                  >
                    transaction log
                  </h6>
                </div>
                <div className="h-full w-full flex justify-center items-center">
                  <p
                    className={`font-[OpenSauceRegular] capitalize font-normal text-xs ${
                      theme === "light" ? "text-[#0F0F0F]" : "text-white"
                    }`}
                  >
                    No Records
                  </p>
                </div>
              </div>
            </div>
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
              Suggest Enabling Auto Slippage Settings. If slippage settings are
              too low, or due to insufficient balance or GAS, DEX routing may
              encounter errors. In such cases, please try again.
            </p>
          </div>
          <CTAButton
            text="Start trading"
            font="font-poppins font-semibold"
            arrowSize="w-0 h-0" // Customize the arrow size
            paddingY="py-3"
            paddingX="px-8 mt-6 w-max mx-auto" // Customize the horizontal padding
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
        </ContentContainerFull>
      </div>
    </div>
  );
};

export default BatchTrading;
