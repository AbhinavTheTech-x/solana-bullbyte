import React from "react";
import HeaderText from "../reusable/HeaderText";
import ContentContainerFull from "../reusable/ContentContainerFull";
import Label from "../reusable/Label";
import LightInput from "../reusable/LightInput";
import { useTheme } from "@/context/ThemeContext";

const RemoveLiquidity = () => {
  const { theme } = useTheme();
  return (
    <div className="v1Token-section w-full relative h-full flex justify-center items-center flex-col">
      <div className="p-5 w-full flex justify-start items-center flex-col gap-10">
        <div className="h-full w-full flex justify-between items-start gap-10">
          <ContentContainerFull>
            <div className=" w-full">
              <HeaderText>remove liquidity</HeaderText>
              <h6 className=" font-poppins text-left text-black text-lg capitalize font-medium"></h6>
            </div>
            <div className=" w-full flex justify-center items-center mt-6">
              <div className="flex flex-col gap-1 w-[70%] ">
                <Label labelText="Pool ID" />
                <div
                  style={{ boxShadow: "2px 2px 10px 0px #4B68DA47" }}
                  className={`w-full rounded-xl mt-1 border flex justify-between items-center ${
                    theme === "light"
                      ? " bg-white border-[#DCD2EB]"
                      : " bg-[#686587] border-[#C0C7E1]"
                  } px-3 py-4`}
                >
                  <LightInput
                    onChange={() => {}}
                    value={""}
                    className="py-0 border-none shadow-none"
                    type="number"
                    placeholder="Please Enter Pool ID"
                  />

                  <img
                    src="./search.svg"
                    className=" w-5 h-5 object-cover"
                    alt="search here"
                  />
                </div>
                <p
                  className={`text-xs ${
                    theme === "light" ? "text-[#818087]" : "text-[#fcfcfc]"
                  } capitalize text-center mt-5 font-[OpenSauceRegular]`}
                >
                  don’t know the pool iD?{" "}
                  <span className=" text-[#7154E6] cursor-pointer">
                    try token address search
                  </span>
                </p>
              </div>
            </div>
          </ContentContainerFull>
        </div>
      </div>
    </div>
  );
};

export default RemoveLiquidity;
