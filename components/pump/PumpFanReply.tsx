import { useTheme } from "@/context/ThemeContext";
import React, { useState } from "react";
import DarkInput from "../reusable/DarkInput";
import Label from "../reusable/Label";
import HeaderText from "../reusable/HeaderText";
import ContentContainerFull from "../reusable/ContentContainerFull";
import CTAButton from "../CTAButton";

const PumpFanReply = () => {
  const [replyMode, setReplyMode] = useState("Pump Replies");

  const { theme } = useTheme();

  const replyList = [
    "HODL",
    "Sendoor",
    "LETS GO",
    "Next Stop Moon",
    "Genius",
    "",
    "Dev Can Be Trusted, Hard Working And Cool Guy. To The Moooonnnnn",
    "Can't Wait To Play The Game Looks",
    "Yo",
    "SENDOOOR!",
    "The Team Is Now Ready To Send. Join VC Now. Dev Is Solid. New Legend In The Making If It Would Have Rugged By Now. We Ain't Going To Burger King, We About To Own Red Lobster",
    "NEX Naid!!",
  ];

  return (
    <div className="v1Token-section w-full h-full flex justify-center items-center flex-col">
      <div className="p-5 w-full flex justify-start items-center flex-col gap-10">
        <ContentContainerFull>
          <div className=" w-full">
            <HeaderText>Batch create wallets</HeaderText>
            <p
              className={`font-[OpenSauceRegular] ${
                theme === "light" ? "text-[#5c5c5c]" : "text-[#fcfcfc]"
              } text-sm mt-3`}
            >
              Easily increase the number of followers, likes and replay on
              Pump.fun and get more attention for your project!
            </p>
          </div>
          <div className="flex justify-between items-center w-[80%] mr-auto mt-4">
            <div className="flex justify-center items-center gap-2">
              <img
                src="./pump-2.svg"
                alt="token"
                className=" w-7 h-7 object-cover"
              />
              <h6
                className={`font-[OpenSauceMedium] ${
                  theme === "light" ? "text-black" : "text-white"
                }  text-sm `}
              >
                Pump Launch and Buy
              </h6>
            </div>
            <div className="flex justify-center items-center gap-2">
              <img
                src="./sun.svg"
                alt="token"
                className=" w-7 h-7 object-cover"
              />
              <h6
                className={`font-[OpenSauceMedium] ${
                  theme === "light" ? "text-black" : "text-white"
                }  text-sm `}
              >
                SOL MultiSender
              </h6>
            </div>
            <div className="flex justify-center items-center gap-2">
              <img
                src="./market.svg"
                alt="token"
                className=" w-7 h-7 object-cover"
              />
              <h6
                className={`font-[OpenSauceMedium] ${
                  theme === "light" ? "text-black" : "text-white"
                }  text-sm `}
              >
                Pump Market maker - Batch Swap
              </h6>
            </div>
          </div>
          <div
            className={` ${
              theme === "light"
                ? " bg-[#F5F4FF] border-[#DCD2EB]"
                : "bg-[#3F2D58] border-[#4B4868]"
            } border w-[80%] mx-auto rounded-xl mt-8 p-5`}
          >
            <h6
              className={`font-[OpenSauceMedium] ${
                theme === "light" ? "text-black" : "text-white"
              }  text-xs mt-3 mb-5`}
            >
              Coin Tool - CT.App
            </h6>
            <p
              className={`font-[OpenSauceRegular] ${
                theme === "light" ? "text-[#5c5c5c]" : "text-[#fcfcfc]"
              } text-sm mt-3`}
            >
              1. To add a wallet account to follow, you must have set a custom
              username.
            </p>
            <p
              className={`font-[OpenSauceRegular] ${
                theme === "light" ? "text-[#5c5c5c]" : "text-[#fcfcfc]"
              } text-sm mt-3`}
            >
              2. To boost account likes, the username must be customized and
              there must be at least one comment.
            </p>
            <p
              className={`font-[OpenSauceRegular] ${
                theme === "light" ? "text-[#5c5c5c]" : "text-[#fcfcfc]"
              } text-sm mt-3`}
            >
              3. If you need this feature, please place an order as soon as
              possible. This feature will be discontinued following pump
              changes.
            </p>
            <h6
              className={`font-[OpenSauceMedium] ${
                theme === "light" ? "text-black" : "text-white"
              }  text-xs mt-3 mb-5`}
            >
              Fans Type
            </h6>
            <div className="flex justify-start items-center gap-3 mt-4">
              <div
                className={` border flex justify-start items-center px-2 w-max py-1.5 rounded-xl gap-3 ${
                  theme === "light"
                    ? "bg-white shadow-[2px 3px 22px 0px #605C5C24] border-[#DDD2DE]"
                    : "bg-[#686587] border-[#C1B8CD]"
                } p-5`}
                // className=" flex justify-start items-center px-3 w-max py-2 rounded-xl gap-3 bg-white"
              >
                {["Pump Follow", "Pump Like", " Pump Replies"].map(
                  (tags, i) => {
                    return (
                      <p
                        onClick={() => setReplyMode(tags)}
                        key={i}
                        className={`${
                          replyMode === tags
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
                  }
                )}
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-6">
              <Label labelText="Token Address" />
              <DarkInput placeholder="|" onChange={() => {}} value={""} />
            </div>
            <div className=" w-full mt-5">
              <div className="flex justify-between items-center w-full">
                <h6
                  className={`font-[OpenSauceMedium] ${
                    theme === "light" ? "text-black" : "text-white"
                  }  text-xs mt-3 mb-5`}
                >
                  Replay List(30)
                </h6>
                <div className=" flex justify-start items-center gap-3">
                  <h6
                    className={`font-[OpenSauceMedium] ${
                      theme === "light" ? "text-[#756BB2]" : "text-[#fcfcfc]"
                    } underline cursor-pointer text-xs mt-3`}
                  >
                    Generated Reply.
                  </h6>
                  <h6
                    className={`font-[OpenSauceMedium] ${
                      theme === "light" ? "text-[#756BB2]" : "text-[#fcfcfc]"
                    } underline cursor-pointer text-xs mt-3`}
                  >
                    Upload File
                  </h6>
                </div>
              </div>
              <div
                className={`${
                  theme === "light" ? "border-[#BAB5C0]" : "border-[#4B4868]"
                } p-5 border rounded-xl w-full h-full`}
              >
                {replyList.map((reply, i) => {
                  return (
                    <p
                      key={i}
                      className={`font-[OpenSauceRegular] ${
                        theme === "light" ? "text-[#5c5c5c]" : "text-[#FCFCFC]"
                      } text-xs ${i === 0 ? "mt-0" : "mt-4"}`}
                    >
                      {i} {reply}
                    </p>
                  );
                })}
              </div>
              <div className=" w-full mt-3">
                <div className="flex justify-between items-center w-full">
                  <h6
                    className={`font-[OpenSauceMedium] ${
                      theme === "light" ? "text-black" : "text-white"
                    }  text-xs mt-3 mb-5`}
                  >
                    enter an reply for each line
                  </h6>
                  <div className=" flex justify-start items-center gap-3">
                    <h6
                      className={`font-[OpenSauceMedium] ${
                        theme === "light" ? "text-[#756BB2]" : "text-[#fcfcfc]"
                      } underline cursor-pointer text-xs mt-3`}
                    >
                      token multi sender
                    </h6>
                    <h6
                      className={`font-[OpenSauceMedium] ${
                        theme === "light" ? "text-[#756BB2]" : "text-[#fcfcfc]"
                      } underline cursor-pointer text-xs mt-3`}
                    >
                      show examples
                    </h6>
                  </div>
                </div>
                <div className=" w-full flex justify-center items-center flex-col">
                  <div className="flex justify-between items-center w-full">
                    <div className="">
                      <h6
                        className={`font-[OpenSauceMedium] ${
                          theme === "light" ? "text-black" : "text-white"
                        }  text-xs mt-3 mb-5`}
                      >
                        Pump Launch and Buy
                      </h6>
                      <div className="flex gap-3">
                        <div
                          className={` w-max rounded-lg text-xs px-6 py-2.5 ${
                            theme === "light"
                              ? "text-[#5C5C5C] bg-[#E6E4F4]"
                              : "text-[#fcfcfc] bg-[#423F5E]"
                          } font-[OpenSauceRegular]`}
                        >
                          0.3 Sol
                        </div>
                        <div className="bg-[#F4E4E4] rounded-lg px-6 text-xs py-2.5 text-[#F04B4B] font-[OpenSauceRegular] line-through">
                          0.6 Sol
                        </div>
                      </div>
                    </div>

                    <div className="">
                      <h6
                        className={`font-[OpenSauceMedium] ${
                          theme === "light" ? "text-black" : "text-white"
                        }  text-xs mt-3 mb-5`}
                      >
                        SOL MultiSender
                      </h6>
                      <div
                        className={` w-max rounded-lg text-xs px-6 py-2.5 ${
                          theme === "light"
                            ? "text-[#5C5C5C] bg-[#E6E4F4]"
                            : "text-[#fcfcfc] bg-[#423F5E]"
                        } font-[OpenSauceRegular]`}
                      >
                        00:04:00
                      </div>
                    </div>
                    <div className="">
                      <h6
                        className={`font-[OpenSauceMedium] ${
                          theme === "light" ? "text-black" : "text-white"
                        }  text-xs mt-3 mb-5`}
                      >
                        Pump Market maker - Batch Swap
                      </h6>
                      <div
                        className={` w-max rounded-lg text-xs px-6 py-2.5 ${
                          theme === "light"
                            ? "text-[#5C5C5C] bg-[#E6E4F4]"
                            : "text-[#fcfcfc] bg-[#423F5E]"
                        } font-[OpenSauceRegular]`}
                      >
                        -sol
                      </div>
                    </div>
                  </div>
                </div>
                <CTAButton
                  text="please connect to wallet"
                  font="font-poppins font-semibold"
                  arrowSize="w-0 h-0" // Customize the arrow size
                  paddingY="py-3"
                  paddingX="px-8 w-max mx-auto mt-12 capitalize" // Customize the horizontal padding
                  gap="gap-1" // Customize the gap between text and arrow
                  onClick={() => console.log("Button clicked!")}
                />
              </div>
            </div>
          </div>
        </ContentContainerFull>
      </div>
    </div>
  );
};

export default PumpFanReply;
