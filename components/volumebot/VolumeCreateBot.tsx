import React from "react";
import HeaderText from "../reusable/HeaderText";
import { useTheme } from "@/context/ThemeContext";
import ContentContainerFull from "../reusable/ContentContainerFull";

const VolumeCreateBot = () => {
  const { theme } = useTheme();

  const tokenData = [
    {
      token: "T001",
      tokenName: "AlphaCoin",
      createdAt: "2024-01-10",
      txnAccount: "0xA123456FE",
      status: "Active",
    },
    {
      token: "T002",
      tokenName: "BetaToken",
      createdAt: "2024-01-10",
      txnAccount: "0xdef456_Hij",
      status: "Inactive",
    },
    {
      token: "T003",
      tokenName: "DeltaCoin",
      createdAt: "2024-01-10",
      txnAccount: "0xdef456_Hij",
      status: "Active",
    },
  ];
  return (
    <div className="v1Token-section w-full h-full flex justify-center items-center flex-col">
      <div className="p-5 w-full flex justify-start items-center flex-col gap-10">
        <ContentContainerFull>
          <div className=" w-full flex justify-between items-center">
            <HeaderText>Token address</HeaderText>
          </div>
          <div className=" w-full flex justify-center items-end gap-5 mt-5">
            <div
              className={`border ${
                theme === "light" ? "bg-white" : "bg-[#686587] "
              } rounded-xl w-full overflow-hidden border-[#C1B8CD]`}
            >
              <div
                className={`flex justify-between items-center ${
                  theme === "light" ? "bg-[#F5F5F5]" : "bg-[#78759E]"
                } py-2.5 px-3 w-full rounded-t-xl`}
              >
                <h6
                  className={`${
                    theme === "light" ? "text-black" : "text-white "
                  } text-left font-[OpenSauceRegular] text-xs font-normal w-1/6`}
                >
                  Token
                </h6>
                <h6
                  className={`${
                    theme === "light" ? "text-black" : "text-white"
                  } text-left font-[OpenSauceRegular] text-xs font-normal w-1/6`}
                >
                  Token Name
                </h6>
                <h6
                  className={`${
                    theme === "light" ? "text-black" : "text-white"
                  }  font-[OpenSauceRegular] text-center text-xs font-normal w-1/6`}
                >
                  Created At
                </h6>
                <h6
                  className={`${
                    theme === "light" ? "text-black" : "text-white"
                  } text-right font-[OpenSauceRegular] text-xs font-normal w-1/6`}
                >
                  Txn Account
                </h6>
                <h6
                  className={`${
                    theme === "light" ? "text-black" : "text-white"
                  } text-right font-[OpenSauceRegular] text-xs font-normal w-1/6`}
                >
                  Status
                </h6>
                <h6
                  className={`${
                    theme === "light" ? "text-black" : "text-white"
                  } text-right w-1/6 font-[OpenSauceRegular] text-xs font-normal `}
                >
                  Action
                </h6>
              </div>
              <div className="w-full h-max flex flex-col">
                {tokenData.map((item, index) => (
                  <div
                    key={index}
                    className={`flex justify-between items-center border-b ${
                      theme === "light"
                        ? "border-[#E6EBEE]"
                        : "border-[#827E9F]"
                    } w-full py-2.5 px-3`}
                  >
                    <h6
                      className={`${
                        theme === "light" ? "text-[#525252]" : "text-[#BABFD2]"
                      } font-[OpenSauceRegular] text-xs font-normal w-1/6`}
                    >
                      {item.token}
                    </h6>
                    <h6
                      className={`${
                        theme === "light" ? "text-[#525252]" : "text-[#BABFD2]"
                      } font-[OpenSauceRegular] text-xs font-normal w-1/6`}
                    >
                      {item.tokenName}
                    </h6>
                    <h6
                      className={`${
                        theme === "light" ? "text-[#525252]" : "text-[#BABFD2]"
                      } font-[OpenSauceRegular] text-center text-xs font-normal w-1/6`}
                    >
                      {item.createdAt}
                    </h6>
                    <h6
                      className={`${
                        theme === "light" ? "text-[#525252]" : "text-[#BABFD2]"
                      } font-[OpenSauceRegular] text-right text-xs font-normal w-1/6`}
                    >
                      {item.txnAccount}
                    </h6>
                    <div className="w-1/6 flex justify-end  items-center -mr-3">
                      <h6
                        className={`text-xs font-[OpenSauceRegular] px-3 rounded-full w-max py-1 font-normal ${
                          item.status === "Active"
                            ? "text-[#38C15E] bg-[#E0FFE8]"
                            : "text-[#FF0000] bg-[#FFDFDF]"
                        }`}
                      >
                        {item.status}
                      </h6>
                    </div>
                    <button className=" flex justify-end  items-center w-1/6">
                      <img
                        src="./delete.svg"
                        className=" w-6 h-6 object-cover"
                        alt="delete"
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ContentContainerFull>
      </div>
    </div>
  );
};

export default VolumeCreateBot;
