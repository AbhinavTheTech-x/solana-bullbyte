import React, { useState } from "react";
import TokenManagerForm from "../form/TokenManagerForm";
import RevokeBox from "../RevokeBox";
import InfoContent from "../InfoContent";
import { motion } from "framer-motion";
import TokenVRightSide from "../TokenVRightSide";
import { useTheme } from "@/context/ThemeContext";
import Switch from "../Switch";
import CTAButton from "../CTAButton";
import ContentContainerHalf from "../reusable/ContentContainerHalf";

const TokenVTwo = () => {
  const [isSocialLink, setIsSocialLink] = useState(false);
  const [selectedOption, setSelectedOption] = useState("no");
  const { theme } = useTheme();

  const handleToggleLink = () => {
    setIsSocialLink((prev) => !prev);
  };

  return (
    <div className="v1Token-section w-full h-full flex justify-center items-center flex-col">
      <div className="p-5 w-full flex justify-start items-center flex-col gap-10">
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
                  animate={{ opacity: 1, height: 400 }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="w-full flex flex-col gap-4 mb-4 transition-opacity ease-in-out"
                >
                  <div className="w-full">
                    {/* Case Sensitive Radio Section */}
                    <h6
                      className={`font-poppins font-medium ${
                        theme === "light" ? "text-[#1F1F1F]" : "text-white"
                      }  text-sm mb-2`}
                    >
                      Add SPL22 Extensions  
                    </h6>
                    <div className="flex justify-start items-center gap-20 mb-4 mt-3">
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="caseSensitive"
                          value="no"
                          checked={selectedOption === "no"}
                          onChange={(e) => setSelectedOption(e.target.value)}
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
                          Transfer Tax  
                        </span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="caseSensitive"
                          value="yes"
                          checked={selectedOption === "yes"}
                          onChange={(e) => setSelectedOption(e.target.value)}
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
                  </div>
                  {selectedOption === "no" && (
                    <>
                      {["Fee (%)", "Fee (%)", "Fee (%)", "Fee (%)"].map(
                        (label, index) => (
                          <div key={index} className="flex flex-col gap-1">
                            <label
                              htmlFor="tokenSupply"
                              className={`text-xs font-[OpenSauceRegular] ${
                                theme === "light"
                                  ? "text-[#231F20]"
                                  : "text-[#FCFCFC]"
                              }`}
                            >
                              {label}
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
                        )
                      )}
                    </>
                  )}
                  {selectedOption === "yes" && (
                    <div className="flex flex-col gap-1">
                      <label
                        htmlFor="tokenSupply"
                        className={`text-xs font-[OpenSauceRegular] ${
                          theme === "light"
                            ? "text-[#231F20]"
                            : "text-[#FCFCFC]"
                        }`}
                      >
                        Fee (%)
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
                  )}
                </motion.form>
              )}

              <RevokeBox />
            </div>
            <CTAButton
              text=" Create Token"
              arrowSize="w-0 h-0" // Customize the arrow size
              paddingY="py-3"
              font="font-poppins font-semibold"
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

export default TokenVTwo;
