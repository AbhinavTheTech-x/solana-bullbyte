import React from "react";
import InfoContent from "../InfoContent";
import ContentContainerFull from "../reusable/ContentContainerFull";
import HeaderText from "../reusable/HeaderText";
import { useTheme } from "@/context/ThemeContext";
import DarkInput from "../reusable/DarkInput";
import CTAButton from "../CTAButton";

const Wrap = () => {
  const { theme } = useTheme();

  return (
    <div className="token_locker-section w-full h-full flex justify-center items-center flex-col">
      <div className="p-5 w-full flex justify-start items-center flex-col gap-10">
        <ContentContainerFull>
          <div className=" w-full">
            <HeaderText> wrap\unwrap sol </HeaderText>
            <div className=" w-full flex justify-between items-center gap-8 mt-5">
              <div className=" w-1/2 ">
                <div
                  className={`${
                    theme === "light"
                      ? "bg-white border-[#DCD2EB] "
                      : "bg-[#3F2D58] border-[#4B4868] shadow-[4px 4px 30px 0px #3D54AB24]"
                  } border rounded-lg p-4 w-full `}
                >
                  <h6
                    className={`text-xs ${
                      theme === "light" ? "text-[#363636]" : "text-[#fcfcfc]"
                    } font-[OpenSauceRegular] font-normal`}
                  >
                    Sol
                  </h6>
                  <h5
                    className={`text-xs ${
                      theme === "light" ? "text-[#363636]" : "text-[#fcfcfc]"
                    } mt-2 font-[OpenSauceRegular] font-normal`}
                  >
                    0.009905607
                  </h5>
                </div>

                <div
                  className={`${
                    theme === "light"
                      ? "bg-white border-[#DCD2EB] "
                      : "bg-[#3F2D58] border-[#4B4868] shadow-[4px 4px 30px 0px #3D54AB24]"
                  } border rounded-lg p-4 w-full mt-5`}
                >
                  <DarkInput onChange={() => {}} value={""} placeholder="0" />
                  <CTAButton
                    text="wrap Sol"
                    font="font-poppins font-semibold"
                    arrowSize="w-0 h-0"
                    paddingY="py-3"
                    paddingX="px-6 mt-4 w-full" // Customize the horizontal padding
                    gap="gap-1"
                    onClick={() => console.log("Button clicked!")}
                  />
                </div>
              </div>
              <div className=" w-1/2 ">
                <div
                  className={`${
                    theme === "light"
                      ? "bg-white border-[#DCD2EB] "
                      : "bg-[#3F2D58] border-[#4B4868] shadow-[4px 4px 30px 0px #3D54AB24]"
                  } border rounded-lg p-4 w-full `}
                >
                  <h5
                    className={`text-xs ${
                      theme === "light" ? "text-[#363636]" : "text-[#fcfcfc]"
                    }  font-[OpenSauceRegular] font-normal`}
                  >
                    WSol
                  </h5>
                  <h5
                    className={`text-xs ${
                      theme === "light" ? "text-[#363636]" : "text-[#fcfcfc]"
                    } mt-2 font-[OpenSauceRegular] font-normal`}
                  >
                    0.009905607
                  </h5>
                </div>

                <div
                  className={`${
                    theme === "light"
                      ? "bg-white border-[#DCD2EB] "
                      : "bg-[#3F2D58] border-[#4B4868] shadow-[4px 4px 30px 0px #3D54AB24]"
                  } border rounded-lg p-4 w-full mt-4`}
                >
                  <DarkInput onChange={() => {}} value={""} placeholder="0" />
                  <CTAButton
                    text="UnWrap Sol"
                    font="font-poppins font-semibold"
                    arrowSize="w-0 h-0"
                    paddingY="py-3"
                    paddingX="px-6 mt-4 w-full" // Customize the horizontal padding
                    gap="gap-1"
                    onClick={() => console.log("Button clicked!")}
                  />
                </div>
              </div>
            </div>
          </div>
        </ContentContainerFull>

        <InfoContent />
      </div>
    </div>
  );
};

export default Wrap;
