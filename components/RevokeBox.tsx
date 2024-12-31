import { useTheme } from "@/context/ThemeContext";
import React, { useState } from "react";
import Switch from "./Switch";

const RevokeBox = () => {
  const [isRevokeUpdateChecked, setIsRevokeUpdateChecked] = useState(false);
  const [isRevokeFreezeChecked, setIsRevokeFreezeChecked] = useState(false);
  const [isRevokeMintChecked, setIsRevokeMintChecked] = useState(false);
  const { theme } = useTheme();

  const handleToggleRevokeUpdate = () => {
    setIsRevokeUpdateChecked((prev) => !prev);
  };
  const handleToggleFreezeUpdate = () => {
    setIsRevokeFreezeChecked((prev) => !prev);
  };
  const handleToggleMint = () => {
    setIsRevokeMintChecked((prev) => !prev);
  };
  return (
    <div
      className={`border  rounded-xl w-full h-max p-5 ${
        theme === "light"
          ? "bg-white border-[#C1B8CD]"
          : "bg-[#564075] border-[#4B4868] shadow-[4px 4px 30px 0px #3D54AB24]"
      }`}
    >
      <h2
        className={`text-lg  ${
          theme === "light" ? "text-[#231F20]" : "text-[#FCFCFC]"
        } font-poppins font-medium mb-4`}
      >
        Revoke Authority
      </h2>

      <div className="flex items-start justify-between py-2">
        <div>
          <h3
            className={`text-[16px] ${
              theme === "light" ? "text-[#1F1F1F]" : "text-[#FCFCFC]"
            } font-poppins font-medium`}
          >
            Revoke Update
          </h3>
          <p
            className={`text-xs mt-2 ${
              theme === "light" ? "text-[#636363]" : "text-[#DFDCF2]"
            } font-poppins font-normal`}
          >
            Renouncing ownership means you will not be able to modify the token
            metadata. It indeed makes investors feel more secure.
          </p>
        </div>
        <Switch
          checked={isRevokeUpdateChecked}
          onChange={handleToggleRevokeUpdate}
        />
      </div>

      <div className="flex items-start justify-between py-2">
        <div>
          <h3
            className={`text-[16px] ${
              theme === "light" ? "text-[#1F1F1F]" : "text-[#FCFCFC]"
            } font-poppins font-medium`}
          >
            Revoke Freeze
          </h3>
          <p
            className={`text-xs mt-2 ${
              theme === "light" ? "text-[#636363]" : "text-[#DFDCF2]"
            } font-poppins font-normal`}
          >
            Revoking Freeze Authority removes control over specific account
            actions.
          </p>
        </div>
        <Switch
          checked={isRevokeFreezeChecked}
          onChange={handleToggleFreezeUpdate}
        />
      </div>

      <div className="flex items-start justify-between py-2">
        <div>
          <h3
            className={`text-[16px] ${
              theme === "light" ? "text-[#1F1F1F]" : "text-[#FCFCFC]"
            } font-poppins font-medium`}
          >
            Revoke Mint
          </h3>
          <p
            className={`text-xs mt-2 ${
              theme === "light" ? "text-[#636363]" : "text-[#DFDCF2]"
            } font-poppins font-normal`}
          >
            Relinquishing minting rights is essential for investor security and
            token success, preventing further token supply.Create Token
          </p>
        </div>
        <Switch checked={isRevokeMintChecked} onChange={handleToggleMint} />
      </div>
    </div>
  );
};

export default RevokeBox;
