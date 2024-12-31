import React from "react";
import InfoContent from "../InfoContent";
import ContentContainerFull from "../reusable/ContentContainerFull";
import DarkInput from "../reusable/DarkInput";
import Label from "../reusable/Label";
import CTAButton from "../CTAButton";
import HeaderText from "../reusable/HeaderText";
const TokenMint = () => {
  return (
    <div className="token_mint-section w-full h-full flex justify-center items-center flex-col">
      <div className="p-5 w-full flex justify-start items-center flex-col gap-10">
        <ContentContainerFull>
          <div className=" w-full">
            <HeaderText>Token mint</HeaderText>
          </div>
          <div className=" w-full flex justify-center items-end gap-5 mt-5">
            <div className="flex flex-col gap-3 w-full justify-center items-start">
              <Label labelText="Goggles" />
              <DarkInput onChange={() => {}} value={""} placeholder="|" />
            </div>
            <CTAButton
              text="Load"
              font="font-poppins font-semibold"
              arrowSize="w-0 h-0"
              paddingY="py-3"
              paddingX="px-5 mt-6 w-[100px] rounded-lg"
              gap="gap-1"
              onClick={() => console.log("Button clicked!")}
            />
          </div>
        </ContentContainerFull>

        <InfoContent />
      </div>
    </div>
  );
};

export default TokenMint;
