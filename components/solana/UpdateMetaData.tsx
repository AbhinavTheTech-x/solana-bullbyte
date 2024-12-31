import React from "react";
import ContentContainerFull from "../reusable/ContentContainerFull";
import DarkInput from "../reusable/DarkInput";
import Label from "../reusable/Label";
import CTAButton from "../CTAButton";
import { useTheme } from "@/context/ThemeContext";

const UpdateMetaData = () => {
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
              Manage: {" "}
              <span
                className={`${
                  theme === "light" ? "text-[#747474]" : "text-[#A7A3D5]"
                } font-normal`}
              >
                 Update Metadata
              </span>
            </h6>
          </div>
          <div className=" w-full flex justify-center items-end gap-5 mt-5">
            <div className="flex flex-col gap-3 w-full justify-center items-start">
              <Label labelText="Mint Address" />
              <DarkInput onChange={() => {}} value={""} placeholder="|" />
            </div>
            <CTAButton
              text="Load Token"
              font="font-poppins font-semibold"
              arrowSize="w-0 h-0" // Customize the arrow size
              paddingY="py-3"
              paddingX="px-5 mt-6 w-[140px]" // Customize the horizontal padding
              gap="gap-1" // Customize the gap between text and arrow
              onClick={() => console.log("Button clicked!")}
            />
          </div>
          <div className=" mt-3 w-full">
            <textarea
              name="address"
              className={`w-full px-3 py-2.5 h-[120px] rounded-lg  text-sm placeholder:text-[#AFAF9F] focus:outline-none focus:border-blue-500 ${
                theme === "light"
                  ? "bg-white border text-black border-[#C0C7E1] shadow-[2px 2px 10px 0px #4B68DA47]"
                  : "bg-inputDark text-white border-formDarkBorder shadow-formDarkShadow"
              }`}
            ></textarea>
          </div>
        </ContentContainerFull>
      </div>
    </div>
  );
};

export default UpdateMetaData;
