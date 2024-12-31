import React, { useState } from "react";
import InfoContent from "../InfoContent";
import ContentContainerFull from "../reusable/ContentContainerFull";
import { useTheme } from "@/context/ThemeContext";
import Label from "../reusable/Label";
import CTAButton from "../CTAButton";
import LightInput from "../reusable/LightInput";

const SnapShot = () => {
  const [filter, setFilter] = useState("All");
  const { theme } = useTheme();
  return (
    <div className="meta_data-section w-full h-full flex justify-center items-center flex-col">
      <div className="p-5 w-full flex justify-start items-center flex-col gap-10">
        <ContentContainerFull>
          <div className=" w-full">
            <h6
              className={`text-sm font-semibold font-poppins mb-5  ${
                theme === "light" ? "text-black" : "text-[#FCFCFC]"
              }`}
            >
              Snapshot: 
              <span
                className={`${
                  theme === "light" ? "text-[#747474]" : "text-[#A7A3D5]"
                } font-normal`}
              >
                Take snapshot of token holders
              </span>
            </h6>
          </div>
          <div className=" w-full flex justify-center items-end gap-5 mt-5">
            <div className="flex flex-col gap-3 w-full justify-center items-start">
              <Label labelText="Mint Address" />
              <LightInput onChange={() => {}} placeholder="|" value={""} />
            </div>
            <CTAButton
              text="Load Token"
              font="font-poppins font-semibold"
              arrowSize="w-0 h-0"
              paddingY="py-3"
              paddingX="px-5 w-[140px]"
              gap="gap-1"
              onClick={() => console.log("Button clicked!")}
            />
          </div>
          <div className=" mt-5 w-full">
            <textarea
              name="address"
              className={`border-[#C0C7E1] border ${
                theme === "light"
                  ? "bg-white text-black"
                  : "bg-[#686587] text-white"
              } rounded-xl h-[150px] w-full outline-none p-2 text-sm`}
            ></textarea>
          </div>
          <div className=" w-full mt-4">
            <div className="flex justify-start flex-col items-start gap-3 w-full">
              <Label labelText="Snapshot Data Filtering " />
              <div className="flex justify-center items-center gap-3 rounded-lg px-2 py-1.5 w-max">
                {[
                  "All",
                  "Top 100",
                  "Top 500",
                  "Top 1000",
                  "Top 2000",
                  "Custom",
                ].map((price, i) => {
                  return (
                    <div
                      key={i}
                      onClick={() => setFilter(price)}
                      className={`${
                        filter === price
                          ? "bg-purple-gradient text-white"
                          : theme === "dark"
                          ? "bg-[#8D8AA8] text-[#FCFCFC]" // Dark theme, non-active color
                          : "bg-[#F0F0F0] text-[#231F20]" // Light theme, non-active color
                      } rounded-lg px-6 py-2.5 text-xs flex cursor-pointer justify-center items-center font-[OpenSauceRegular]`}
                    >
                      {price}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-3 mt-4 w-full">
            <Label labelText="Minimum Token Holdings" />
            <LightInput onChange={() => {}} placeholder="|" value={""} />
          </div>
          <CTAButton
            text="take snapshot"
            font="font-poppins font-semibold"
            arrowSize="w-0 h-0"
            paddingY="py-3 mt-8"
            paddingX="px-8 rounded-full"
            gap="gap-1"
            onClick={() => console.log("Button clicked!")}
          />
        </ContentContainerFull>

        <InfoContent />
      </div>
    </div>
  );
};

export default SnapShot;
