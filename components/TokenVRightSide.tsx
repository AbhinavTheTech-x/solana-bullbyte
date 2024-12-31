import { useTheme } from "@/context/ThemeContext";
import React from "react";
import HeaderText from "./reusable/HeaderText";
type TokenVRightSideProps = {
  isNot?: boolean;
};
const TokenVRightSide: React.FC<TokenVRightSideProps> = ({ isNot }) => {
  const { theme } = useTheme();
  const review = [
    {
      key: "token name",
      value: "consectetuer adipiscing",
    },
    {
      key: "token decimals",
      value: "Vivamus elementum",
    },
    {
      key: "token ticker",
      value: "Aenean leo ligula",
    },
    {
      key: "token supply",
      value: "Aliquam lorem ante",
    },
    {
      key: "token desicription",
      value: "Phasellus viverra nulla ut metus varius",
    },
  ];
  return (
    <div className="w-1/2  h-full flex-col flex justify-center items-center gap-4 ">
      {isNot && (
        <div
          className={`w-full rounded-xl flex-col flex justify-center items-center gap-2 ${
            theme === "light"
              ? "bg-white shadow-[4px 4px 30px 0px #3D54AB24] border-[#DAE2FF]"
              : " bg-formDark shadow-formDarkShadow border-formDarkBorder"
          }  h-full  p-4 border `}
        >
          <div className=" w-full">
            <HeaderText>Review</HeaderText>
          </div>

          <div
            style={{ boxShadow: "2px 2px 10px 0px #734EAB45" }}
            className={` h-max p-4 w-full border rounded-xl ${
              theme === "light"
                ? "bg-[#F5F4FF] border-[#DCD2EB]"
                : "bg-[#564075] border-[#4B4868] shadow-[4px 4px 30px 0px #3D54AB24]"
            }`}
          >
            {review.map((rev, i) => {
              return (
                <div
                  key={i}
                  className="flex justify-between items-center w-full pb-3"
                >
                  <h6
                    className={`${
                      theme === "light" ? "text-[#0F0F0F]" : "text-[#FCFCFC]"
                    }  capitalize font-poppins text-xs font-normal`}
                  >
                     {rev.key}
                  </h6>
                  <h6
                    className={`font-poppins text-xs font-normal ${
                      theme === "light" ? "text-[#646464]" : "text-[#B3B0D5]"
                    }`}
                  >
                    {rev.value}
                  </h6>
                </div>
              );
            })}
          </div>
          <h6
            className={` ${
              theme === "light" ? "text-black" : "text-[#FCFCFC]"
            } mb-2 mt-3 w-full text-left font-poppins text-sm font-medium`}
          >
            Enter Image
          </h6>
          <div
            className={`w-full  ${
              theme === "light"
                ? "bg-[#F5F4FF] border-[#DCD2EB] shadow-[2px 2px 10px 0px #734EAB45]"
                : "bg-inputDark border-formDarkBorder shadow-formDarkShadow"
            } border rounded-xl  p-4 h-[200px] flex justify-center items-center`}
          >
            <div className="bg-[#DFDBFA] rounded-full w-14 h-14 flex justify-center items-center">
              <img
                src={`./${
                  theme === "light" ? "gallery-add" : "gallery-add-dark"
                }.svg`}
                className=" w-7 h-7 object-cover"
                alt="image"
              />
            </div>
          </div>
        </div>
      )}
      <div
        className={`${
          theme === "light"
            ? "bg-white shadow-[4px 4px 30px 0px #3D54AB24] border-[#DAE2FF]"
            : "bg-formDark shadow-formDarkShadow border-formDark"
        } w-full h-[146.3vh] rounded-xl p-6 border`}
      >
        <h2
          className={`text-sm font-medium ${
            theme === "light" ? "text-[#0F0F0F]" : "text-[#FCFCFC]"
          }`}
        >
          Create Your Own Solana SPL Token With Ease!
        </h2>
        <p
          className={`text-xs font-poppins font-normal ${
            theme === "light" ? "text-[#636363]" : "text-[#C7C5DB]"
          } mt-2`}
        >
          Craft Your Unique Solana SPL Token Effortlessly In Just A Few Simple
          Steps—No Coding Needed.
        </p>

        <div className="mt-4">
          <h3
            className={`text-xs font-medium ${
              theme === "light" ? "text-[#0F0F0F]" : "text-[#FCFCFC]"
            } mb-2`}
          >
            Simple Token Minting Process:
          </h3>
          <ul
            className={`list-decimal pl-5 text-xs font-poppins ${
              theme === "light" ? "text-[#636363]" : "text-[#C7C5DB]"
            } space-y-1`}
          >
            <li>
              Link Your Solana Wallet Containing SOL Tokens (Phantom Or Solflare
              Wallet).
            </li>
            <li>Input Your Token Name, Symbol, Decimals, and Total Supply.</li>
            <li>
              Upload Your Token Logo Image Or Provide An URL For The Token Logo.
            </li>
            <li>Write A Unique Description For Your Token.</li>
            <li>Add Socials For Your Token.</li>
            <li>Click On Upload Metadata.</li>
            <li>
              Click The "Create Custom Contract" Button To Create A Custom Mint
              Address For Your Token.
            </li>
            <li>Click On Create Token Button And Your SPL Token Is Created.</li>
          </ul>
        </div>

        <div className="mt-4">
          <h3
            className={`text-xs font-medium ${
              theme === "light" ? "text-[#0F0F0F]" : "text-[#FCFCFC]"
            } mb-2`}
          >
            Add Social Links:
          </h3>
          <ul
            className={`list-decimal pl-5 text-xs font-poppins ${
              theme === "light" ? "text-[#636363]" : "text-[#C7C5DB]"
            } space-y-1`}
          >
            <li>Add Your Social Links Of Project For Better Visibility.</li>
            <li>Your Social Links Will Be Added To Token Metadata.</li>
            <li>
              For Additional Links, Such As Medium, You Can Add Those In Token
              Description.
            </li>
          </ul>
        </div>

        <div className="mt-4">
          <h3
            className={`text-xs font-medium ${
              theme === "light" ? "text-[#0F0F0F]" : "text-[#FCFCFC]"
            } mb-2`}
          >
            Custom Mint Address:
          </h3>
          <ul
            className={`list-decimal pl-5 text-xs font-poppins ${
              theme === "light" ? "text-[#636363]" : "text-[#C7C5DB]"
            } space-y-1`}
          >
            <li>
              Add Prefix And Suffix Characters That You Want Your Address To
              Start/End With.
            </li>
            <li>
              Adjust Threads (Parallel Process To Generate Custom Address, More
              Threads Faster Address Generation).
            </li>
            <li>
              Ideally Threads Should Be Equal To Number Of Core Of Your Device
              For Better Performance.
            </li>
            <li>
              Choose Case Sensitive Or Insensitive That Your Address Should
              Verify.
            </li>
            <li>
              You Can Regenerate Address, Just Change The Prefix/Suffix And
              Click On Generate.
            </li>
            <li>
              Time Required To Generate Custom Address Depends On Number Of
              Characters Along With Number Of Threads.
            </li>
          </ul>
        </div>

        <div className="mt-4">
          <h3
            className={`text-xs font-medium ${
              theme === "light" ? "text-[#0F0F0F]" : "text-[#FCFCFC]"
            } mb-2`}
          >
            Revoke Authority:
          </h3>
          <ul
            className={`list-decimal pl-5 text-xs font-poppins ${
              theme === "light" ? "text-[#636363]" : "text-[#C7C5DB]"
            } space-y-1`}
          >
            <li>
              Enable Authority To Revoke The Corresponding Authority (Mint,
              Update, Freeze).
            </li>
            <li>You Won't Be Able To Change Authority After Revoking.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TokenVRightSide;
