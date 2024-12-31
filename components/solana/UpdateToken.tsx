import React from "react";
import ContentContainerFull from "../reusable/ContentContainerFull";
import HeaderText from "../reusable/HeaderText";
import { useTheme } from "@/context/ThemeContext";
import Label from "../reusable/Label";
import DarkInput from "../reusable/DarkInput";
import CTAButton from "../CTAButton";

const UpdateToken = () => {
  const { theme } = useTheme();
  return (
    <div className="v1Token-section w-full h-full flex justify-center items-center flex-col">
      <div className="p-5 w-full flex justify-start items-center flex-col gap-10">
        <ContentContainerFull>
          <div className=" w-full">
            <HeaderText>Token Update</HeaderText>
            <p
              className={`${
                theme === "light" ? "text-[#5C5C5C]" : "text-darkModeSubHeading"
              } mt-2 text-left font-[OpenSauceRegular] text-xs font-normal`}
            >
              Quickly update existing token information to help you better
              display token-related information and timely complete project
              information iteration.
            </p>
          </div>
          <div className=" w-full flex justify-center items-end gap-5 mt-5">
            <div className="flex flex-col gap-3 w-full justify-center items-start">
              <Label labelText="Token Contract Address" />
              <DarkInput onChange={() => {}} value={""} placeholder="|" />
            </div>
            <CTAButton
              text="Search"
              font="font-poppins font-semibold"
              arrowSize="w-0 h-0" // Customize the arrow size
              paddingY="py-3"
              paddingX="px-8 mt-6 w-[140px]" // Customize the horizontal padding
              gap="gap-1" // Customize the gap between text and arrow
              onClick={() => console.log("Button clicked!")}
            />
          </div>
        </ContentContainerFull>
      </div>
    </div>
  );
};

export default UpdateToken;
