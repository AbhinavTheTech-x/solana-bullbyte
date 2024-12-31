import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import InfoContent from "../InfoContent";

const MultiSender = () => {
  return (
    <div className="meta_data-section w-full h-full flex justify-center items-center flex-col">
      <div className="p-5 w-full flex justify-start items-center flex-col gap-10">
        <Accordion className="w-full" style={{ padding: 0 }}>
          <AccordionItem
            key="1"
            // showDivider=[true]
            aria-label="What Is The SPL Token Creator Tool?"
            title="What Is The SPL Token Creator Tool?"
            style={{ boxShadow: "4px 4px 30px 0px #3D54AB24" }}
            className="border accordion border-[#DAE2FF] bg-white rounded-xl mt-3 "
          >
            <p className="text-[#747474] font-[OpenSauceRegular]  text-xs border-t py-3 border-[#DAE2FF] px-3 ">
              The SPL Token Creator Tool allows you to easily create and manage
              SPL tokens on the Solana blockchain. It provides a user-friendly
              interface for generating tokens with custom specifications.
            </p>
          </AccordionItem>

          <AccordionItem
            key="2"
            aria-label="Can I Tax Tokens Using The Solana Token Creator?"
            title="Can I Tax Tokens Using The Solana Token Creator?"
            style={{ boxShadow: "4px 4px 30px 0px #3D54AB24" }}
            className="border accordion border-[#DAE2FF] bg-white rounded-xl px-2 mt-3 "
          >
            <p className="text-[#747474] font-[OpenSauceRegular]  text-xs border-t py-3 border-[#DAE2FF] px-3 ">
              Yes, the Solana Token Creator supports custom tax rules. You can
              set up parameters to automatically apply taxes on transactions
              made with the token.
            </p>
          </AccordionItem>

          <AccordionItem
            key="3"
            aria-label="How Much Time Does It Take To Create A Token?"
            title="How Much Time Does It Take To Create A Token?"
            style={{ boxShadow: "4px 4px 30px 0px #3D54AB24" }}
            className="border accordion border-[#DAE2FF] bg-white rounded-xl px-2 mt-3 "
          >
            <p className="text-[#747474] font-[OpenSauceRegular]  text-xs border-t py-3 border-[#DAE2FF] px-3 ">
              Creating a token with the SPL Token Creator Tool usually takes
              only a few minutes. After setting up the token parameters, the
              tool will handle the token generation process.
            </p>
          </AccordionItem>

          <AccordionItem
            key="4"
            aria-label="How To Create Custom Prefix Address Of My Token"
            title="How To Create Custom Prefix Address Of My Token"
            style={{ boxShadow: "4px 4px 30px 0px #3D54AB24" }}
            className="border accordion border-[#DAE2FF] bg-white rounded-xl px-2 mt-3 "
          >
            <p className="text-[#747474] font-[OpenSauceRegular]  text-xs border-t py-3 border-[#DAE2FF] px-3 ">
              Enable the "Create custom address" toggle and enter the prefix you
              want your address to contain. The tool will generate a custom
              address and ask for confirmation before creating the token.
            </p>
          </AccordionItem>
        </Accordion>
        <InfoContent />
      </div>
    </div>
  );
};

export default MultiSender;
