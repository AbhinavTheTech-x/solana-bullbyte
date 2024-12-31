import { useTheme } from "@/context/ThemeContext";
import React, { useState } from "react";
import DarkInput from "../reusable/DarkInput";
import Label from "../reusable/Label";
import HeaderText from "../reusable/HeaderText";
import ContentContainerFull from "../reusable/ContentContainerFull";
import CTAButton from "../CTAButton";

import { motion } from "framer-motion";
import Switch from "../Switch";

const PumpOpenBundleBuy = () => {
  const [activeIndex, setActiveIndex] = useState("standard  0.00003 sol");
  const [supportTag, setSupportTag] = useState("Meme");
  const [isOptionalContent, setIsOptionalContent] = useState(false);
  const [isBundleBuy, setIsBundleBuy] = useState(false);

  const handleToggleOptionalContent = () => {
    setIsOptionalContent((prev) => !prev);
  };
  const handleToggleBundleBuy = () => {
    setIsBundleBuy((prev) => !prev);
  };
  const { theme } = useTheme();

  return (
    <div className="v1Token-section w-full h-full flex justify-center items-center flex-col">
      <div className="p-5 w-full flex justify-start items-center flex-col gap-10">
        <div className="h-full w-full flex justify-between items-start gap-10">
          <ContentContainerFull>
            <div className=" w-full">
              <HeaderText>Batch create wallets</HeaderText>
            </div>
            <div
              className={`w-full border  mt-3 ${
                theme === "light"
                  ? "bg-[#F5F4FF] border-[#DAE2FF]"
                  : "bg-[#3F2D58] border-[#4B4868]"
              } rounded-xl p-4`}
            >
              <div className="flex justify-between items-center flex-wrap w-full gap-6">
                <div className="flex flex-col gap-1 w-[48%]">
                  <Label labelText="Full Name" />
                  <DarkInput placeholder="|" onChange={() => {}} value={""} />
                </div>
                <div className="flex flex-col gap-1 w-[48%]">
                  <Label labelText="Short Name" />
                  <DarkInput placeholder="|" onChange={() => {}} value={""} />
                </div>
                <div className="flex flex-col gap-1 w-[48%]">
                  <Label labelText="Short Name" />
                  <DarkInput placeholder="|" onChange={() => {}} value={""} />
                </div>
                <div className="flex flex-col gap-1 w-[48%]">
                  <Label labelText=" Purchase quantity (sol)" />
                  <DarkInput placeholder="|" onChange={() => {}} value={""} />
                </div>
              </div>
              <div className=" w-[250px] mr-auto mt-5">
                <Label labelText="Logo" />

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
            </div>
            <div className=" w-full">
              <div className="flex w-full items-start justify-between py-2 mt-3">
                <div>
                  <h3
                    className={`text-sm ${
                      theme === "light" ? "text-[#1F1F1F]" : "text-[#fcfcfc]"
                    } font-[OpenSauceMedium] font-medium`}
                  >
                    Optional Content
                  </h3>
                </div>
                <Switch
                  onChange={handleToggleOptionalContent}
                  checked={isOptionalContent}
                />
              </div>
              {isOptionalContent && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 410 }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className={`w-full border  mt-3 ${
                    theme === "light"
                      ? "bg-[#F5F4FF] border-[#DAE2FF]"
                      : "bg-[#3F2D58] border-[#4B4868]"
                  } rounded-xl p-4`}
                >
                  <div className="flex justify-start items-center flex-wrap w-full gap-6">
                    <div className="flex flex-col gap-1 w-[48%]">
                      <Label labelText="Official Website Link" />
                      <DarkInput
                        placeholder="|"
                        onChange={() => {}}
                        value={""}
                      />
                    </div>
                    <div className="flex flex-col gap-1 w-[48%]">
                      <Label labelText="Telegram Group" />
                      <DarkInput
                        placeholder="|"
                        onChange={() => {}}
                        value={""}
                      />
                    </div>
                    <div className="flex flex-col gap-1 w-[48%]">
                      <Label labelText="Twitter" />
                      <DarkInput
                        placeholder="|"
                        onChange={() => {}}
                        value={""}
                      />
                    </div>
                    <div className="flex flex-col gap-1 w-[48%]">
                      <Label labelText="Discord" />
                      <DarkInput
                        placeholder="|"
                        onChange={() => {}}
                        value={""}
                      />
                    </div>
                    <div className="flex flex-col gap-1 w-[38%]">
                      <Label labelText="Label" />
                      <DarkInput
                        placeholder="|"
                        onChange={() => {}}
                        value={""}
                      />
                    </div>
                    <CTAButton
                      text="Add to"
                      font="font-poppins font-semibold"
                      arrowSize="w-0 h-0" // Customize the arrow size
                      paddingY="py-2.5"
                      paddingX="px-8 w-[120px] mt-5 capitalize" // Customize the horizontal padding
                      gap="gap-1" // Customize the gap between text and arrow
                      onClick={() => console.log("Button clicked!")}
                    />
                  </div>
                  <div className=" w-full mt-4">
                    <Label labelText="Supports up to 5 tags:" />

                    <div className=" flex justify-start mt-3 items-center w-full gap-3">
                      {[
                        "Meme",
                        "NFT",
                        "DEFI",
                        "PandaToken",
                        "The strongest community",
                      ].map((tags, i) => {
                        return (
                          <p
                            onClick={() => setSupportTag(tags)}
                            key={i}
                            className={`${
                              supportTag === tags
                                ? " bg-purple-gradient text-white"
                                : "bg-[#] text-[#231F20]"
                            } rounded-md capitalize px-3 py-2 cursor-pointer text-center text-xs font-[OpenSauceRegular] transition-all duration-300 ease-in-out
                             ${
                               theme === "dark"
                                 ? "bg-[#807CA1] text-white"
                                 : "bg-white text-[#231F20]"
                             }`}
                          >
                            {tags}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                  <CTAButton
                    text=" Create now"
                    font="font-poppins font-semibold"
                    arrowSize="w-0 h-0" // Customize the arrow size
                    paddingY="py-2.5"
                    paddingX="px-8 w-max mt-5 ml-auto capitalize" // Customize the horizontal padding
                    gap="gap-1" // Customize the gap between text and arrow
                    onClick={() => console.log("Button clicked!")}
                  />
                </motion.div>
              )}
            </div>
            <div className=" w-full">
              <div
                className={`flex w-full items-start justify-between py-2 mt-3 `}
              >
                <div>
                  <h3
                    className={`text-sm ${
                      theme === "light" ? "text-[#1F1F1F]" : "text-[#fcfcfc]"
                    } font-[OpenSauceMedium] font-medium`}
                  >
                    Bundle Buy
                  </h3>
                </div>
                <Switch
                  onChange={handleToggleBundleBuy}
                  checked={isBundleBuy}
                />
              </div>
              {isBundleBuy && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 320 }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className={`w-full border  mt-3 ${
                    theme === "light"
                      ? "bg-[#F5F4FF] border-[#DAE2FF]"
                      : "bg-[#3F2D58] border-[#4B4868]"
                  } rounded-xl p-4`}
                >
                  <div className=" w-full mt-4">
                    <Label labelText="jito bundle tips" />
                    <div className=" flex justify-start mt-3 items-center w-full gap-3">
                      {[
                        "standard  0.00003 sol",
                        "fast 0.001 sol",
                        "speed 0.01 sol",
                      ].map((tags, i) => {
                        return (
                          <p
                            key={i}
                            onClick={() => setActiveIndex(tags)} // Toggle active state
                            className={`${
                              activeIndex === tags
                                ? " bg-purple-gradient text-white"
                                : "bg-[#] text-[#231F20]"
                            } rounded-md capitalize px-3 py-2 cursor-pointer text-center text-xs font-[OpenSauceRegular] transition-all duration-300 ease-in-out
                             ${
                               theme === "dark"
                                 ? "bg-[#807CA1] text-white"
                                 : "bg-white text-[#231F20]"
                             }`}
                          >
                            {tags}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                  <div className=" w-full mt-4">
                    <h3
                      className={`text-sm ${
                        theme === "light" ? "text-[#1F1F1F]" : "text-[#fcfcfc]"
                      } font-[OpenSauceMedium] capitalize font-medium`}
                    >
                      bundle buy wallet settings
                    </h3>
                    <div className=" w-full flex justify-between items-center gap-6 mt-4">
                      {[
                        { title: "import wallet", sub_title: "address(0)" },
                        {
                          title: "refresh balance",
                          sub_title: "purchase quantity (sol)",
                        },
                        {
                          title: "add new wallet",
                          sub_title: "Remove Address",
                        },
                      ].map((item, i) => {
                        return (
                          <div key={i} className="w-1/3">
                            <button
                              className={`${
                                theme === "light"
                                  ? "bg-white border-[#DDD7D7] text-[#231F20]"
                                  : "bg-[#807CA1] border-none shadow-[2px 2px 10px 0px #4B68DA47] text-[#fcfcfc]"
                              } w-full flex justify-center border cursor-pointer  py-4 capitalize items-center text-xs font-[OpenSauceRegular] rounded-lg`}
                            >
                              {item.title}
                            </button>
                            <p
                              className={`${
                                theme === "light"
                                  ? "text-[#231F20]"
                                  : "text-[#fcfcfc]"
                              } mt-2 text-xs capitalize font-[OpenSauceRegular] text-right`}
                            >
                              {item.sub_title}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <CTAButton
                    text=" Create now"
                    font="font-poppins font-semibold"
                    arrowSize="w-0 h-0" // Customize the arrow size
                    paddingY="py-3"
                    paddingX="px-8 w-max mt-6 mx-auto capitalize" // Customize the horizontal padding
                    gap="gap-1" // Customize the gap between text and arrow
                    onClick={() => console.log("Button clicked!")}
                  />
                </motion.div>
              )}
            </div>
          </ContentContainerFull>
        </div>
      </div>
    </div>
  );
};

export default PumpOpenBundleBuy;
