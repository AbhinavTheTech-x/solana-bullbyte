import React from "react";
import CTAButton from "../CTAButton";
import HeaderText from "../reusable/HeaderText";
import Label from "../reusable/Label";
import LightIncrementInput from "../reusable/LightIncrementInput";
import ContentContainerFull from "../reusable/ContentContainerFull";

const WalletGenerator = () => {
  return (
    <div className="v1Token-section w-full h-full flex justify-center items-center flex-col">
      <div className="p-5 w-full flex justify-start items-center flex-col gap-10">
        <ContentContainerFull>
          <div className=" w-full flex justify-between items-center">
            <HeaderText> Batch Generate SOL Wallet Addresses</HeaderText>

            <div className=" w-12 h-12 rounded-full flex justify-center items-center bg-[#EFECEC]">
              <img
                src="./question-mark.svg"
                className=" w-5 h-5 object-cover"
                alt="alert"
              />
            </div>
          </div>
          <div className=" w-full flex justify-center items-end gap-5 mt-5">
            <div className="flex flex-col gap-3 w-full justify-center items-start">
              <Label labelText="Number of Generated Wallet Addresses" />
              <LightIncrementInput
                value={300}
                onDecrement={() => {}}
                onIncrement={() => {}}
              />
            </div>
            <CTAButton
              text="Generate Now"
              font="font-poppins font-semibold"
              arrowSize="w-0 h-0" // Customize the arrow size
              paddingY="py-3"
              paddingX="px-8 w-[190px] " // Customize the horizontal padding
              gap="gap-1" // Customize the gap between text and arrow
              onClick={() => console.log("Button clicked!")}
            />
          </div>
        </ContentContainerFull>
      </div>
    </div>
  );
};

export default WalletGenerator;
