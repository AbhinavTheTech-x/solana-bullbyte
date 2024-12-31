import React, { useState } from "react";
import TokenManagerForm from "../form/TokenManagerForm";
import RevokeBox from "../RevokeBox";
import InfoContent from "../InfoContent";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import Switch from "../Switch";
import CTAButton from "../CTAButton";
import TokenVRightSide from "../TokenVRightSide";
import ContentContainerHalf from "../reusable/ContentContainerHalf";

const TokenVOne = () => {
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
      <div
        className={`p-5 w-full  flex justify-start items-center flex-col gap-10`}
      >
        <div className="h-full w-full flex justify-between items-start gap-10">
          <ContentContainerHalf>
            <TokenManagerForm />
            <div className=" w-full">
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
                  animate={{ opacity: 1, height: 300 }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-full flex flex-col gap-4 mb-4 transition-opacity ease-in-out"
                >
                  {["Twitter", "Telegram", "Website", "Discord"].map(
                    (label, index) => (
                      <div key={index} className="flex flex-col gap-1">
                        <label
                          htmlFor={`input-${label.toLowerCase()}`}
                          className={`text-xs font-[OpenSauceRegular] ${
                            theme === "light"
                              ? "text-[#231F20]"
                              : "text-[#FCFCFC]"
                          }`}
                        >
                          {label}
                        </label>
                        <input
                          id={`input-${label.toLowerCase()}`}
                          type="text"
                          className={`w-full px-3 py-2.5 rounded-lg border text-sm placeholder:text-[#AFAF9F] focus:outline-none focus:border-blue-500 
                           ${
                             theme === "light"
                               ? "bg-white border-[#C0C7E1] text-black shadow-[2px 2px 10px 0px #4B68DA47]"
                               : "bg-inputDark text-white border-formDarkBorder shadow-formDarkShadow"
                           }`}
                          placeholder="|"
                        />
                      </div>
                    )
                  )}
                </motion.form>
              )}

              <div className="flex justify-between items-center w-full pb-5">
                <h6
                  className={`${
                    theme === "light" ? "text-[#231F20]" : "text-[#FCFCFC]"
                  } font-[OpenSauceMedium] text-sm font-medium`}
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
                  animate={{ opacity: 1, height: 420 }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="w-full flex flex-col gap-4 mb-4 "
                >
                  <div className="flex flex-col gap-1">
                    <label
                      className={`text-xs font-[OpenSauceRegular] ${
                        theme === "light" ? "text-[#231F20]" : "text-[#FCFCFC]"
                      }`}
                      htmlFor="tokenSupply"
                    >
                      Address Prefix  
                    </label>
                    <input
                      id="tokenSupply"
                      type="text"
                      className={`w-full px-3 py-2.5 rounded-lg border text-sm placeholder:text-[#AFAF9F] focus:outline-none focus:border-blue-500 
                        ${
                          theme === "light"
                            ? "bg-white border-[#C0C7E1] text-black shadow-[2px 2px 10px 0px #4B68DA47]"
                            : "bg-inputDark text-white border-formDarkBorder shadow-formDarkShadow"
                        }`}
                      placeholder="|"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label
                      className={`text-xs font-[OpenSauceRegular] ${
                        theme === "light" ? "text-[#231F20]" : "text-[#FCFCFC]"
                      }`}
                      htmlFor="tokenSupply"
                    >
                      Address Suffix  
                    </label>
                    <input
                      id="tokenSupply"
                      type="text"
                      className={`w-full px-3 py-2.5 rounded-lg border text-sm placeholder:text-[#AFAF9F] focus:outline-none focus:border-blue-500 
                        ${
                          theme === "light"
                            ? "bg-white border-[#C0C7E1] text-black shadow-[2px 2px 10px 0px #4B68DA47]"
                            : "bg-inputDark text-white border-formDarkBorder shadow-formDarkShadow"
                        }`}
                      placeholder="|"
                    />
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
                        className={`w-full px-3 py-2.5 rounded-lg border flex justify-start items-center gap-4 text-sm placeholder:text-[#AFAF9F] focus:outline-none focus:border-blue-500 
                          ${
                            theme === "light"
                              ? "bg-white border-[#C0C7E1] text-black shadow-[2px 2px 10px 0px #4B68DA47]"
                              : "bg-inputDark text-white border-formDarkBorder shadow-formDarkShadow"
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

              <RevokeBox />
            </div>
            <CTAButton
              text=" Create Token"
              font="font-poppins font-semibold"
              arrowSize="w-0 h-0" // Customize the arrow size
              paddingY="py-3"
              paddingX="px-8 mt-3 sm:my-5" // Customize the horizontal padding
              gap="gap-1" // Customize the gap between text and arrow
              onClick={() => console.log("Button clicked!")}
            />
          </ContentContainerHalf>

          <TokenVRightSide isNot={true} />
        </div>
        <InfoContent />
      </div>
    </div>
  );
};

export default TokenVOne;
