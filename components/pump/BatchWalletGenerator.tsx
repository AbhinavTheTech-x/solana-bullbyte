import React, { useState } from "react";
import HeaderText from "../reusable/HeaderText";
import ContentContainerFull from "../reusable/ContentContainerFull";
import { useTheme } from "@/context/ThemeContext";
import Label from "../reusable/Label";
import Select from "../reusable/SelectInput";
import CTAButton from "../CTAButton";
import LightPurpleWrapper from "../reusable/LightPurpleWrapper";

const BatchWalletGenerator = () => {
  const [activeWalletGenerator, setActiveWalletGenerator] =
    useState("Airdrop SOL");

  const { theme } = useTheme();
  const dummyOptions = [
    { value: "Token1", label: "Token 1" },
    { value: "Token2", label: "Token 2" },
    { value: "Token3", label: "Token 3" },
  ];
  return (
    <div className="v1Token-section w-full h-full flex justify-center items-center flex-col">
      <div className="p-5 w-full flex justify-start items-center flex-col gap-10">
        <ContentContainerFull>
          <div className=" w-full">
            <HeaderText>Batch Wallet Generator</HeaderText>
          </div>
          <div className="flex justify-start items-center gap-3 mt-4 w-full">
            <div
              style={{ boxShadow: "2px 3px 22px 0px #605C5C24" }}
              className={` border flex justify-start items-center px-2 w-max py-1.5 rounded-xl gap-3 ${
                theme === "light"
                  ? "bg-white shadow-[2px 3px 22px 0px #605C5C24]"
                  : "bg-[#686587] border-[#C1B8CD]"
              } p-5`}
            >
              {["Airdrop SOL", "Airdrop Token", "Private Key Airdrop"].map(
                (wallet, i) => {
                  return (
                    <div
                      key={i}
                      onClick={() => setActiveWalletGenerator(wallet)}
                      className={`${
                        activeWalletGenerator === wallet
                          ? `bg-purple-gradient ${
                              theme === "dark" ? "text-[#EEEEEE]" : "text-white"
                            }`
                          : theme === "dark"
                          ? "bg-[#423F5E] text-[#EEEEEE]"
                          : "bg-[#F8F8F8] text-[#231F20]"
                      } rounded-md capitalize px-4 py-3 h-full cursor-pointer text-center text-xs font-[OpenSauceRegular]`}
                    >
                      {wallet}
                    </div>
                  );
                }
              )}
            </div>
          </div>
          {activeWalletGenerator === "Airdrop Token" && (
            <div className=" w-full mt-5">
              <LightPurpleWrapper margin="mb-3" padding="p-4">
                <Label labelText="Choose Your Token" />
                <Select value="" onChange={() => {}} options={dummyOptions} />
              </LightPurpleWrapper>

              <p
                className={`font-[OpenSauceRegular] text-xs font-normal ${
                  theme === "light" ? "text-[#525252]" : "text-[#BABFD2]"
                }`}
              >
                <span className="font-[OpenSauceBold] mb-2 block ">
                  👉0.01 sol fee is charged each time
                </span>
                👉Enter the addresses you want to transfer in batches, one per
                line, up to 11 addresses, do not repeat the addresses, and
                separate the addresses and amounts with commas. (More than 11
                addresses may exceed the limit length of Solana's single
                transaction hash. If you cannot call up the wallet, please
                reduce the number of addresses)
              </p>
              <textarea
                id="tokenDescription"
                className={`w-full px-3 py-2.5 h-[160px] mt-5 rounded-lg  text-sm placeholder:text-[#AFAF9F] focus:outline-none focus:border-blue-500 ${
                  theme === "light"
                    ? "bg-white border text-black border-[#C0C7E1] shadow-[2px 2px 10px 0px #4B68DA47]"
                    : "bg-inputDark text-white border-formDarkBorder shadow-formDarkShadow"
                }`}
                placeholder="|"
              ></textarea>
              <CTAButton
                text="Next"
                font="font-poppins font-semibold"
                arrowSize="w-0 h-0"
                paddingY="py-2.5"
                paddingX="px-8 w-[160px] mt-6 mx-auto"
                gap="gap-1"
                onClick={() => console.log("Button clicked!")}
              />
            </div>
          )}
          {activeWalletGenerator === "Airdrop SOL" && "Airdrop Token" && (
            <div className=" w-full mt-5">
              <p
                className={`font-[OpenSauceRegular] text-xs font-normal ${
                  theme === "light" ? "text-[#525252]" : "text-[#BABFD2]"
                }`}
              >
                <span className="font-[OpenSauceBold] mb-2 block ">
                  {" "}
                  👉0.01 sol fee is charged each time
                </span>
                👉Enter the addresses you want to transfer in batches, one per
                line, up to 20 addresses, do not repeat the addresses, and
                separate the addresses and amounts with commas. (More than 20
                addresses may exceed the limit length of Solana's single
                transaction hash. If you cannot call up the wallet, please
                reduce the number of addresses)
              </p>
              <textarea
                id="tokenDescription"
                className={`w-full px-3 py-2.5 h-[160px] mt-5 rounded-lg  text-sm placeholder:text-[#AFAF9F] focus:outline-none focus:border-blue-500 ${
                  theme === "light"
                    ? "bg-white border text-black border-[#C0C7E1] shadow-[2px 2px 10px 0px #4B68DA47]"
                    : "bg-inputDark text-white border-formDarkBorder shadow-formDarkShadow"
                }`}
                placeholder="|"
              ></textarea>

              <CTAButton
                text="Next"
                font="font-poppins font-semibold"
                arrowSize="w-0 h-0"
                paddingY="py-2.5"
                paddingX="px-8 w-[160px] mt-6 mx-auto"
                gap="gap-1"
                onClick={() => console.log("Button clicked!")}
              />
            </div>
          )}
          {activeWalletGenerator === "Private Key Airdrop" && (
            <div className=""></div>
          )}
        </ContentContainerFull>
      </div>
    </div>
  );
};

export default BatchWalletGenerator;
