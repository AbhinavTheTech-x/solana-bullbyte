import { useTheme } from "@/context/ThemeContext";
import React from "react";

const VolumeBotCard = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <div
      className={`w-1/2 h-[570px] flex-col shadow-[4px 4px 30px 0px #3D54AB24]  flex rounded-xl justify-start items-center p-5 border 
      ${
        theme === "dark"
          ? "bg-[#3F2D58] border-[#4B4868]"
          : "bg-white border-[#DAE2FF]"
      }`}
    >
      <h2
        className={`font-poppins font-medium text-left w-full mb-4 text-sm ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        Volume Bot
      </h2>
      <p
        className={`font-poppins font-normal text-xs mb-4 ${
          isDarkMode ? "text-[#C7C5DB]" : "text-[#636363]"
        }`}
      >
        The Bumpi Bot is designed for bumping (micro-trading) the PumpFun
        tokens, making multiple small transactions to keep the token at the top
        of the PumpFun homepage. Here’s how to start bumping your token with the
        Bumpi Bot:
      </p>
      <ul
        className={`mb-3 font-poppins font-normal text-xs ${
          isDarkMode ? "text-[#C7C5DB]" : "text-[#636363]"
        }`}
      >
        <li className="mb-2">
          <span
            className={`${
              isDarkMode ? "text-[#FCFCFC]" : "text-[#363636]"
            } font-medium`}
          >
            • Load The Token:
          </span>{" "}
          Begin by loading the token using its mint address.
        </li>
        <li className="mb-2">
          <span
            className={`${
              isDarkMode ? "text-[#FCFCFC]" : "text-[#363636]"
            } font-medium`}
          >
            • Set Total Transactions:
          </span>{" "}
          Decide on the total number of transactions you want the bot to
          perform.
        </li>
        <li className="mb-2">
          <span
            className={`${
              isDarkMode ? "text-[#FCFCFC]" : "text-[#363636]"
            } font-medium`}
          >
            • Adjust The Rate:
          </span>{" "}
          Set the rate, which is the number of transactions per minute the bot
          will execute on the token. Each transaction consists of one buy and
          one sell, and the high volume of small transactions helps maintain the
          token’s visibility at the top of the homepage.
        </li>
        <li className="mb-2">
          <span
            className={`${
              isDarkMode ? "text-[#FCFCFC]" : "text-[#363636]"
            } font-medium`}
          >
            • Choose Transaction Amount:
          </span>{" "}
          Select the amount of SOL the bot will use for each buy and sell
          transaction.
        </li>
      </ul>
      <p
        className={`font-poppins font-normal text-xs ${
          isDarkMode ? "text-[#C7C5DB]" : "text-[#636363]"
        }`}
      >
        For more information or if you have any questions, please contact us on
        Telegram or Twitter.
      </p>
    </div>
  );
};

export default VolumeBotCard;
