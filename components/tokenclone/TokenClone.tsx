import React, { useState } from "react";

import { motion } from "framer-motion";
import RevokeBox from "../RevokeBox";
import { useTheme } from "@/context/ThemeContext";
import Switch from "../Switch";
import CTAButton from "../CTAButton";

const TokenClone = () => {
  const [isSocialLink, setIsSocialLink] = useState(false);
  const [isCustomAddress, setIsCustomAddress] = useState(false);
  const { theme } = useTheme();

  const handleToggleLink = () => {
    setIsSocialLink((prev) => !prev);
  };
  const handleToggleAddress = () => {
    setIsCustomAddress((prev) => !prev);
  };
  return (
    <div className="v1Token-section w-full h-full flex justify-center items-center flex-col">
      <div className="p-5 h-max w-full flex justify-start items-start flex-col gap-10">
        <div className="h-full w-full flex justify-between flex-col items-start gap-0">
          <div
            className={` w-full rounded-xl h-full flex-col flex justify-start items-center p-5 ${
              theme === "light"
                ? "bg-white border border-[#DAE2FF] shadow-[4px 4px 30px 0px #3D54AB24]"
                : "bg-[#2A1843] border-none" // Dark mode colors
            }`}
          >
            <div className=" w-full">
              <h6
                className={`text-lg font-medium font-poppins capitalize  ${
                  theme === "light" ? "text-black" : "text-[#FCFCFC]"
                }`}
              >
                Batch Wallet Generator
              </h6>

              <p
                className={`${
                  theme === "light"
                    ? "text-[#5C5C5C]"
                    : "text-darkModeSubHeading"
                } mt-3 font-[OpenSauceRegular] text-[13px] font-normal`}
              >
                👉Easily clone an existing Solana token without any programming:
                simply enter the contract address of the existing token to
                quickly deploy a new, independent token on the Solana
                blockchain.
              </p>
            </div>
            <div className=" relative w-full mt-6">
              <input
                id="tokenSupply"
                type="text"
                className={`w-full px-3 py-3 rounded-lg text-sm border placeholder:text-[#AFAF9F] focus:outline-none focus:border-blue-500 ${
                  theme === "light"
                    ? "bg-white  text-black border-[#C0C7E1] shadow-[2px 2px 10px 0px #4B68DA47]"
                    : "bg-[#686587] border-[#C0C7E1] text-[#C3C3C3] shadow-[2px 2px 10px 0px #4B68DA47]"
                }`}
                placeholder="|"
              />
              <button
                className={`absolute ${
                  theme === "light"
                    ? "bg-[#DDD7D7] text-[#333]"
                    : "bg-[#847FB8] text-white"
                } top-0 right-0 h-full w-max px-5 capitalize text-sm rounded-xl flex justify-center font-poppins font-medium items-center`}
              >
                paste address
              </button>
            </div>
            <div className=" w-full mt-5">
              <h2
                className={`text-sm font-semibold font-poppins mb-5  ${
                  theme === "light" ? "text-black" : "text-[#FCFCFC]"
                }`}
              >
                SPL:{" "}
                <span
                  className={`${
                    theme === "light" ? "text-[#747474]" : "text-[#A7A3D5]"
                  } font-normal`}
                >
                  Create SPL Token
                </span>
              </h2>

              <form className="w-full flex justify-between items-center flex-wrap gap-y-6 gap-x-4 ">
                <div className="flex flex-col gap-1 w-[49%]">
                  <label
                    className={`text-xs font-[OpenSauceRegular] ${
                      theme === "light" ? "text-[#231F20]" : "text-[#FCFCFC]"
                    }`}
                    htmlFor="tokenName"
                  >
                    Token Name
                  </label>
                  <input
                    id="tokenName"
                    type="text"
                    className={`w-full px-3 py-2.5 rounded-lg text-sm placeholder:text-[#AFAF9F] focus:outline-none focus:border-blue-500 ${
                      theme === "light"
                        ? "bg-white border text-black border-[#C0C7E1] shadow-[2px 2px 10px 0px #4B68DA47]"
                        : "bg-[#686587] border-[#C0C7E1] text-[#C3C3C3] shadow-[2px 2px 10px 0px #4B68DA47]"
                    }`}
                    placeholder="|"
                  />
                </div>
                <div className="flex flex-col gap-1 w-[49%]">
                  <label
                    className={`text-xs font-[OpenSauceRegular] ${
                      theme === "light" ? "text-[#231F20]" : "text-[#FCFCFC]"
                    }`}
                    htmlFor="tokenDecimals"
                  >
                    Token Decimals
                  </label>
                  <input
                    id="tokenDecimals"
                    type="number"
                    className={`w-full px-3 py-2.5 rounded-lg text-sm placeholder:text-[#AFAF9F] focus:outline-none focus:border-blue-500 ${
                      theme === "light"
                        ? "bg-white border text-black border-[#C0C7E1] shadow-[2px 2px 10px 0px #4B68DA47]"
                        : "bg-[#686587] border-[#C0C7E1] text-[#C3C3C3] shadow-[2px 2px 10px 0px #4B68DA47]"
                    }`}
                    placeholder="|"
                  />
                </div>
                <div className="flex flex-col gap-1 w-[49%]">
                  <label
                    className={`text-xs font-[OpenSauceRegular] ${
                      theme === "light" ? "text-[#231F20]" : "text-[#FCFCFC]"
                    }`}
                    htmlFor="tokenTicker"
                  >
                    Token Ticker
                  </label>
                  <input
                    id="tokenTicker"
                    type="text"
                    className={`w-full px-3 py-2.5 rounded-lg text-sm placeholder:text-[#AFAF9F] focus:outline-none focus:border-blue-500 ${
                      theme === "light"
                        ? "bg-white border text-black border-[#C0C7E1] shadow-[2px 2px 10px 0px #4B68DA47]"
                        : "bg-[#686587] border-[#C0C7E1] text-[#C3C3C3] shadow-[2px 2px 10px 0px #4B68DA47]"
                    }`}
                    placeholder="|"
                  />
                </div>
                <div className="flex flex-col gap-1 w-[49%]">
                  <label
                    className={`text-xs font-[OpenSauceRegular] ${
                      theme === "light" ? "text-[#231F20]" : "text-[#FCFCFC]"
                    }`}
                    htmlFor="tokenSupply"
                  >
                    Token Supply
                  </label>
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
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label
                    className={`text-xs font-[OpenSauceRegular] ${
                      theme === "light" ? "text-[#231F20]" : "text-[#FCFCFC]"
                    }`}
                    htmlFor="tokenDescription"
                  >
                    Token Description
                  </label>
                  <textarea
                    id="tokenDescription"
                    className={`w-full px-3 py-2.5 h-[180px] rounded-lg border ${
                      theme === "light"
                        ? "border-[#C0C7E1] bg-white  text-black"
                        : "bg-[#3F2D58] border-formDarkBorder shadow-formDarkShadow text-white "
                    } text-sm placeholder:text-[#AFAF9F] focus:outline-none focus:border-blue-500`}
                    placeholder="|"
                  ></textarea>
                </div>
              </form>
            </div>
          </div>
          <div className=" w-full h-full mt-5">
            <label
              className={`text-xs font-[OpenSauceRegular] ${
                theme === "light" ? "text-[#231F20]" : "text-[#FCFCFC]"
              }`}
              htmlFor="logoImageUrl"
            >
              Enter Logo Image URL
            </label>
            <div
              className={`flex justify-between items-center gap-5 mt-2 border rounded-xl h-full ${
                theme === "light"
                  ? "bg-white border border-[#DAE2FF] shadow-[4px 4px 30px 0px #3D54AB24]"
                  : "bg-[#2A1843] border-none" // Dark mode colors
              } p-5`}
            >
              <div className="w-1/2">
                <input
                  id="logoImageUrl"
                  type="url"
                  className={`w-full px-3 py-2.5 rounded-lg text-sm placeholder:text-[#AFAF9F] focus:outline-none focus:border-blue-500 ${
                    theme === "light"
                      ? "bg-white border text-black border-[#C0C7E1] shadow-[2px 2px 10px 0px #4B68DA47]"
                      : "bg-[#686587] border-[#C0C7E1] text-[#C3C3C3] shadow-[2px 2px 10px 0px #4B68DA47]"
                  }`}
                  placeholder="URL"
                />
                <div className="border-2 border-dashed border-[#6C41EB] rounded-xl w-full h-[160px] flex justify-center items-center mt-4">
                  <img
                    src={`./${
                      theme === "light" ? "upload" : "dark-upload"
                    }.svg`}
                    className="w-14 h-14 object-cover cursor-pointer"
                    alt="upload"
                    onClick={() => {
                      const fileInput = document.getElementById("fileInput");
                      if (fileInput) (fileInput as HTMLInputElement).click(); // Add null check and cast to HTMLInputElement
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
              <div
                className={`w-1/2 h-[220px] rounded-xl p-5 ${
                  theme === "light"
                    ? "border border-[#DCD2EB] bg-[#F5F4FF]"
                    : "bg-[#423F5E] shadow-formDarkShadow"
                }`}
              >
                <p
                  className={`font-poppins text-sm leading-relaxed ${
                    theme === "light" ? "text-black" : "text-[#9691C6]"
                  }`}
                >
                  <span
                    className={`font-medium ${
                      theme === "light" ? "text-black" : "text-[#FCFCFC]"
                    }`}
                  >
                    Note:
                  </span>
                  <br />
                  Supported image formats: PNG/GIF/JPG/WEBP/JPEG and SVG <br />
                  Recommended size: 1000×1000 pixels <br /> Max Image size
                  should be less than 100KB <br /> If it meets the above
                  requirements, it can be better displayed on various platforms
                  and applications.
                </p>
              </div>
            </div>
          </div>
          <div className=" w-full mt-5">
            <div
              className={`w-full ${
                theme === "light"
                  ? "bg-white border border-[#DAE2FF] shadow-[4px 4px 30px 0px #3D54AB24]"
                  : "bg-[#2A1843] border-none" // Dark mode colors
              } border rounded-xl px-5 py-3 mb-5`}
            >
              <div className="flex justify-between items-center w-full py-5">
                <h6
                  className={`${
                    theme === "light" ? "text-[#231F20]" : "text-[#FCFCFC]"
                  } font-[OpenSauceMedium] text-sm font-medium`}
                >
                  Add Social Links
                </h6>
                <Switch onChange={handleToggleLink} checked={isSocialLink} />
              </div>
              {isSocialLink && (
                <motion.form
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 160 }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-full flex justify-between flex-wrap items-center gap-4 mb-4 transition-opacity ease-in-out"
                >
                  <div className="flex flex-col gap-1 w-[49%]">
                    <label
                      className={`text-xs font-[OpenSauceRegular] ${
                        theme === "light" ? "text-[#231F20]" : "text-[#FCFCFC]"
                      }`}
                      htmlFor="tokenSupply"
                    >
                      Twitter
                    </label>
                    <input
                      id="tokenSupply"
                      type="text"
                      style={{ boxShadow: "2px 2px 10px 0px #4B68DA47" }}
                      className={`w-full px-3 py-2.5 rounded-lg text-sm placeholder:text-[#AFAF9F] focus:outline-none focus:border-blue-500 ${
                        theme === "light"
                          ? "bg-white border text-black border-[#C0C7E1] shadow-[2px 2px 10px 0px #4B68DA47]"
                          : "bg-[#686587] border-[#C0C7E1] text-[#C3C3C3] shadow-[2px 2px 10px 0px #4B68DA47]"
                      }`}
                      placeholder="|"
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-[49%]">
                    <label
                      className={`text-xs font-[OpenSauceRegular] ${
                        theme === "light" ? "text-[#231F20]" : "text-[#FCFCFC]"
                      }`}
                      htmlFor="tokenSupply"
                    >
                      Telegram
                    </label>
                    <input
                      id="tokenSupply"
                      type="text"
                      style={{ boxShadow: "2px 2px 10px 0px #4B68DA47" }}
                      className={`w-full px-3 py-2.5 rounded-lg text-sm placeholder:text-[#AFAF9F] focus:outline-none focus:border-blue-500 ${
                        theme === "light"
                          ? "bg-white border text-black border-[#C0C7E1] shadow-[2px 2px 10px 0px #4B68DA47]"
                          : "bg-[#686587] border-[#C0C7E1] text-[#C3C3C3] shadow-[2px 2px 10px 0px #4B68DA47]"
                      }`}
                      placeholder="|"
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-[49%]">
                    <label
                      className={`text-xs font-[OpenSauceRegular] ${
                        theme === "light" ? "text-[#231F20]" : "text-[#FCFCFC]"
                      }`}
                      htmlFor="tokenSupply"
                    >
                      Website
                    </label>
                    <input
                      id="tokenSupply"
                      type="text"
                      style={{ boxShadow: "2px 2px 10px 0px #4B68DA47" }}
                      className={`w-full px-3 py-2.5 rounded-lg text-sm placeholder:text-[#AFAF9F] focus:outline-none focus:border-blue-500 ${
                        theme === "light"
                          ? "bg-white border text-black border-[#C0C7E1] shadow-[2px 2px 10px 0px #4B68DA47]"
                          : "bg-[#686587] border-[#C0C7E1] text-[#C3C3C3] shadow-[2px 2px 10px 0px #4B68DA47]"
                      }`}
                      placeholder="|"
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-[49%]">
                    <label
                      className={`text-xs font-[OpenSauceRegular] ${
                        theme === "light" ? "text-[#231F20]" : "text-[#FCFCFC]"
                      }`}
                      htmlFor="tokenSupply"
                    >
                      Discord
                    </label>
                    <input
                      id="tokenSupply"
                      type="text"
                      style={{ boxShadow: "2px 2px 10px 0px #4B68DA47" }}
                      className={`w-full px-3 py-2.5 rounded-lg text-sm placeholder:text-[#AFAF9F] focus:outline-none focus:border-blue-500 ${
                        theme === "light"
                          ? "bg-white border text-black border-[#C0C7E1] shadow-[2px 2px 10px 0px #4B68DA47]"
                          : "bg-[#686587] border-[#C0C7E1] text-[#C3C3C3] shadow-[2px 2px 10px 0px #4B68DA47]"
                      }`}
                      placeholder="|"
                    />
                  </div>
                </motion.form>
              )}
              <div className="flex justify-between items-center w-full pb-5">
                <h6
                  className={`${
                    theme === "light" ? "text-[#231F20]" : "text-[#FCFCFC]"
                  } font-[OpenSauceMedium] capitalize text-sm font-medium`}
                >
                  Create custom address  
                </h6>
                <Switch
                  onChange={handleToggleAddress}
                  checked={isCustomAddress}
                />
              </div>
              {isCustomAddress && (
                <motion.form
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 330 }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="w-full flex flex-col gap-4 mb-4 "
                >
                  <div className=" w-full flex justify-between items-center">
                    <div className="flex flex-col gap-1 w-[49%]">
                      <label
                        className={`text-xs font-[OpenSauceRegular] ${
                          theme === "light"
                            ? "text-[#231F20]"
                            : "text-[#FCFCFC]"
                        }`}
                        htmlFor="tokenSupply"
                      >
                        Address Prefix  
                      </label>
                      <input
                        id="tokenSupply"
                        type="text"
                        style={{ boxShadow: "2px 2px 10px 0px #4B68DA47" }}
                        className={`w-full px-3 py-2.5 rounded-lg text-sm placeholder:text-[#AFAF9F] focus:outline-none focus:border-blue-500 ${
                          theme === "light"
                            ? "bg-white border text-black border-[#C0C7E1] shadow-[2px 2px 10px 0px #4B68DA47]"
                            : "bg-[#686587] border-[#C0C7E1] text-[#C3C3C3] shadow-[2px 2px 10px 0px #4B68DA47]"
                        }`}
                        placeholder="|"
                      />
                    </div>
                    <div className="flex flex-col gap-1 w-[49%]">
                      <label
                        className={`text-xs font-[OpenSauceRegular] ${
                          theme === "light"
                            ? "text-[#231F20]"
                            : "text-[#FCFCFC]"
                        }`}
                        htmlFor="tokenSupply"
                      >
                        Address Suffix  
                      </label>
                      <input
                        id="tokenSupply"
                        type="text"
                        style={{ boxShadow: "2px 2px 10px 0px #4B68DA47" }}
                        className={`w-full px-3 py-2.5 rounded-lg text-sm placeholder:text-[#AFAF9F] focus:outline-none focus:border-blue-500 ${
                          theme === "light"
                            ? "bg-white border text-black border-[#C0C7E1] shadow-[2px 2px 10px 0px #4B68DA47]"
                            : "bg-[#686587] border-[#C0C7E1] text-[#C3C3C3] shadow-[2px 2px 10px 0px #4B68DA47]"
                        }`}
                        placeholder="|"
                      />
                    </div>
                  </div>
                  <h6
                    className={`font-poppins font-normal ${
                      theme === "light" ? "text-[#363636]" : "text-white"
                    } text-sm`}
                  >
                    {" "}
                    <span
                      className={`${
                        theme === "light" ? "text-[#1F1F1F]" : "text-white"
                      } font-medium`}
                    >
                      Example:{" "}
                    </span>
                    5uECuQVfSon2t7KYJpwmEanrYrykVLe7i2M5rpUpJm6c
                  </h6>
                  <div className="w-full">
                    {/* Case Sensitive Radio Section */}
                    <h6
                      className={`text-sm mb-2 font-medium ${
                        theme === "light" ? "text-[#1F1F1F]" : "text-white"
                      } font-poppins`}
                    >
                      Case Sensitive
                    </h6>
                    <div className="flex justify-start items-center gap-20 mb-4">
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="caseSensitive"
                          value="no"
                          className={`${
                            theme === "light"
                              ? "accent-[#573CFF]"
                              : " accent-[#fff]"
                          }`}
                          defaultChecked
                        />
                        <span
                          className={`text-sm ${
                            theme === "light" ? "text-[#1F1F1F]" : "text-white"
                          } font-poppins`}
                        >
                          No
                        </span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="caseSensitive"
                          value="yes"
                          className={`${
                            theme === "light"
                              ? "accent-[#573CFF]"
                              : " accent-[#fff]"
                          }`}
                        />
                        <span
                          className={`text-sm ${
                            theme === "light" ? "text-[#1F1F1F]" : "text-white"
                          } font-poppins`}
                        >
                          Yes
                        </span>
                      </label>
                    </div>

                    {/* Input Field Section */}
                    <div className="flex flex-col gap-1">
                      <label
                        className={`text-xs ${
                          theme === "light" ? "text-[#231F20]" : "text-white"
                        } font-poppins mb-2 `}
                        htmlFor="additionalInput"
                      >
                        Threads (Adjust Based on Your Device's Performance)
                      </label>
                      <div
                        id="additionalInput"
                        className={`w-full px-3 py-2.5 h-[44px] rounded-lg border flex justify-start items-center gap-6 text-sm placeholder:text-[#AFAF9F] focus:outline-none focus:border-blue-500 
                            ${
                              theme === "light"
                                ? "bg-white border-[#C0C7E1] text-black shadow-[2px 2px 10px 0px #4B68DA47]"
                                : "bg-[#686587] border-[#C0C7E1] text-[#C3C3C3] shadow-[2px 2px 10px 0px #4B68DA47]"
                            }`}
                      >
                        <img
                          src="./decrement.svg"
                          className=" w-5 h-5 object-cover cursor-pointer"
                          alt="vale"
                        />
                        <p
                          className={`font-[OpenSauceRegular] text-[13px] ${
                            theme === "light" ? "text-[#575461]" : "text-white"
                          }`}
                        >
                          01
                        </p>

                        <img
                          src="./increment.svg"
                          className=" w-5 h-5 object-cover cursor-pointer"
                          alt="vale"
                        />
                      </div>
                    </div>
                  </div>

                  <div className=" flex justify-center items-center gap-3 w-full mt-3">
                    <button
                      className={`flex ${
                        theme === "light"
                          ? "btn-gradient-border"
                          : "bg-transparent border-[#B06AB3]"
                      }  justify-center items-center gap-2 rounded-full w-[110px] px-5 py-2.5 border`}
                    >
                      <p className="font-poppins font-semibold text-[15px] bg-clip-text bg-purple-gradient text-transparent">
                        Pause
                      </p>
                    </button>
                    <CTAButton
                      text="Generate Address"
                      font="font-poppins font-semibold"
                      arrowSize="w-0 h-0" // Customize the arrow size
                      paddingY="py-3"
                      paddingX="px-8 " // Customize the horizontal padding
                      gap="gap-1" // Customize the gap between text and arrow
                      onClick={() => console.log("Button clicked!")}
                    />
                  </div>
                </motion.form>
              )}
            </div>
          </div>
          <RevokeBox />
          <CTAButton
            text=" Create Token"
            font="font-poppins font-semibold"
            arrowSize="w-0 h-0" // Customize the arrow size
            paddingY="py-3"
            paddingX="px-8 mt-5 w-max mx-auto" // Customize the horizontal padding
            gap="gap-1" // Customize the gap between text and arrow
            onClick={() => console.log("Button clicked!")}
          />
        </div>
      </div>
    </div>
  );
};

export default TokenClone;
