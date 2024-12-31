/* eslint-disable react/no-unescaped-entities */

import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { useTheme } from "@/context/ThemeContext";

const InfoContent = () => {
  const { theme } = useTheme();
  const items = Array.from({ length: 4 });

  return (
    <div className="h-full w-full flex justify-between items-start gap-10">
      <div className="w-full h-full">
        <div
          className={`rounded-xl flex flex-col justify-center items-center p-4 border w-full h-full ${
            theme === "light"
              ? "bg-white border-[#DAE2FF] shadow-[4px_4px_30px_0px_#3D54AB24]"
              : "bg-[#3F2D58] border-[#4B4868] shadow-[4px_4px_30px_0px_#2B3A55]"
          }`}
        >
          <div className="w-full h-[290px] rounded-xl mb-4">
            <video
              className="w-full h-full rounded-xl object-cover"
              controls
              muted
            >
              <source
                src="https://youtu.be/QJn28fFKUR0?si=GIxmL4poI0SvlRXH"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="w-full h-max">
            <h6
              className={`font-[OpenSauceMedium] text-lg font-semibold ${
                theme === "light" ? "text-[#111827]" : "text-[#FCFCFC]"
              }`}
            >
              Volume Bot
            </h6>
            <p
              className={`mt-2 font-[OpenSauceRegular] text-xs font-normal ${
                theme === "light" ? "text-[#747474]" : "text-[#D3D2DF]"
              }`}
            >
              Esse curso tem como objetivo de te dar os fundamentos da
              programação e entender um pouco mais sobre o web, precisamos desse
              conhecimento para então nos tornarmos aptos a estudar as diversas
              linguagens e tecnologias que vamos encontrar como desenvolvedores
              e desenvolvedoras web.
            </p>
          </div>
        </div>

        <div className="w-full h-full mt-5">
          <h6
            className={`uppercase mt-2 font-[OpenSauceBold] text-sm font-bold ${
              theme === "light" ? "text-[#111827]" : "text-[#FCFCFC]"
            }`}
          >
            FREQUENTLY ASKED QUESTIONS
          </h6>

          <Accordion className="w-full" style={{ padding: 0 }}>
            <AccordionItem
              key="1"
              // showDivider=[true]
              aria-label="What Is The SPL Token Creator Tool?"
              title="What Is The SPL Token Creator Tool?"
              style={{
                boxShadow: "4px 4px 30px 0px #3D54AB24",
              }}
              className={`border accordion ${
                theme === "light"
                  ? "border-[#DAE2FF] bg-white text-[#111827]"
                  : "bg-[#3F2D58] border-[#666380] text-[#8C89A4]"
              } rounded-xl mt-3`}
            >
              <p
                className={`${
                  theme === "light"
                    ? "text-[#747474] border-[#DAE2FF]"
                    : "text-[#8C89A4] border-[#666380]"
                } font-[OpenSauceRegular]  text-xs border-t py-3  px-3`}
              >
                The SPL Token Creator Tool allows you to easily create and
                manage SPL tokens on the Solana blockchain. It provides a
                user-friendly interface for generating tokens with custom
                specifications.
              </p>
            </AccordionItem>

            <AccordionItem
              key="2"
              aria-label="Can I Tax Tokens Using The Solana Token Creator?"
              title="Can I Tax Tokens Using The Solana Token Creator?"
              style={{ boxShadow: "4px 4px 30px 0px #3D54AB24" }}
              className={`border accordion ${
                theme === "light"
                  ? "border-[#DAE2FF] bg-white text-[#111827]"
                  : "bg-[#3F2D58] border-[#666380] text-[#8C89A4]"
              } rounded-xl mt-3`}
            >
              <p
                className={`${
                  theme === "light"
                    ? "text-[#747474] border-[#DAE2FF]"
                    : "text-[#8C89A4] border-[#666380]"
                } font-[OpenSauceRegular]  text-xs border-t py-3  px-3`}
              >
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
              className={`border accordion ${
                theme === "light"
                  ? "border-[#DAE2FF] bg-white text-[#111827]"
                  : "bg-[#3F2D58] border-[#666380] text-[#8C89A4]"
              } rounded-xl mt-3`}
            >
              <p
                className={`${
                  theme === "light"
                    ? "text-[#747474] border-[#DAE2FF]"
                    : "text-[#8C89A4] border-[#666380]"
                } font-[OpenSauceRegular]  text-xs border-t py-3  px-3`}
              >
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
              className={`border accordion ${
                theme === "light"
                  ? "border-[#DAE2FF] bg-white text-[#111827]"
                  : "bg-[#3F2D58] border-[#666380] text-[#8C89A4]"
              } rounded-xl mt-3`}
            >
              <p
                className={`${
                  theme === "light"
                    ? "text-[#747474] border-[#DAE2FF]"
                    : "text-[#8C89A4] border-[#666380]"
                } font-[OpenSauceRegular]  text-xs border-t py-3  px-3`}
              >
                Enable the "Create custom address" toggle and enter the prefix
                you want your address to contain. The tool will generate a
                custom address and ask for confirmation before creating the
                token.
              </p>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <div className="w-full h-full">
        <div
          className={`rounded-xl flex flex-col justify-center items-center p-4 border w-full h-full ${
            theme === "light"
              ? "bg-white border-[#DAE2FF] shadow-[4px_4px_30px_0px_#3D54AB24]"
              : "bg-[#3F2D58] border-[#4B4868] shadow-[4px_4px_30px_0px_#2B3A55]"
          }`}
        >
          <h6
            className={`font-medium text-sm mb-4 w-full ${
              theme === "light" ? "text-[#111827]" : "text-[#FCFCFC]"
            }`}
          >
            Recent
          </h6>
          <div className="flex flex-col gap-2 w-full">
            {items.map((_, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 w-full ${
                  index !== items.length - 1 ? "pb-2 border-b" : ""
                } ${
                  theme === "light" ? "border-[#DAD6D6]" : "border-[#666380]"
                }`}
              >
                <div className="relative w-36 h-20 rounded-lg cursor-pointer">
                  <img
                    src="./Rectangle 5.svg"
                    className="w-full h-full"
                    alt="title"
                  />
                  <img
                    src="./Vector (8).svg"
                    className="absolute w-6 h-6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    alt="title"
                  />
                </div>
                <div className="w-full">
                  <p
                    className={`font-poppins font-normal text-[14px] ${
                      theme === "light" ? "text-[#363636]" : "text-[#D3D2DF]"
                    }`}
                  >
                    Due to its widespread use as filler text for layouts layout
                    impression of publication is not compromised.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-full mt-5">
          <h6 className="text-[#111827] invisible uppercase mt-2 font-[OpenSauceBold] text-sm font-bold">
            FREQUENTLY ASKED QUESTIONS
          </h6>
          <Accordion className="w-full" style={{ padding: 0 }}>
            <AccordionItem
              key="1"
              // showDivider=[true]
              aria-label="What Is The SPL Token Creator Tool?"
              title="What Is The SPL Token Creator Tool?"
              style={{ boxShadow: "4px 4px 30px 0px #3D54AB24" }}
              className={`border accordion ${
                theme === "light"
                  ? "border-[#DAE2FF] bg-white text-[#111827]"
                  : "bg-[#3F2D58] border-[#666380] text-[#8C89A4]"
              } rounded-xl mt-3`}
            >
              <p
                className={`${
                  theme === "light"
                    ? "text-[#747474] border-[#DAE2FF]"
                    : "text-[#8C89A4] border-[#666380]"
                } font-[OpenSauceRegular]  text-xs border-t py-3  px-3`}
              >
                The SPL Token Creator Tool allows you to easily create and
                manage SPL tokens on the Solana blockchain. It provides a
                user-friendly interface for generating tokens with custom
                specifications.
              </p>
            </AccordionItem>

            <AccordionItem
              key="2"
              aria-label="Can I Tax Tokens Using The Solana Token Creator?"
              title="Can I Tax Tokens Using The Solana Token Creator?"
              style={{ boxShadow: "4px 4px 30px 0px #3D54AB24" }}
              className={`border accordion ${
                theme === "light"
                  ? "border-[#DAE2FF] bg-white text-[#111827]"
                  : "bg-[#3F2D58] border-[#666380] text-[#8C89A4]"
              } rounded-xl mt-3`}
            >
              <p
                className={`${
                  theme === "light"
                    ? "text-[#747474] border-[#DAE2FF]"
                    : "text-[#8C89A4] border-[#666380]"
                } font-[OpenSauceRegular]  text-xs border-t py-3  px-3`}
              >
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
              className={`border accordion ${
                theme === "light"
                  ? "border-[#DAE2FF] bg-white text-[#111827]"
                  : "bg-[#3F2D58] border-[#666380] text-[#8C89A4]"
              } rounded-xl mt-3`}
            >
              <p
                className={`${
                  theme === "light"
                    ? "text-[#747474] border-[#DAE2FF]"
                    : "text-[#8C89A4] border-[#666380]"
                } font-[OpenSauceRegular]  text-xs border-t py-3  px-3`}
              >
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
              className={`border accordion ${
                theme === "light"
                  ? "border-[#DAE2FF] bg-white text-[#111827]"
                  : "bg-[#3F2D58] border-[#666380] text-[#8C89A4]"
              } rounded-xl mt-3`}
            >
              <p
                className={`${
                  theme === "light"
                    ? "text-[#747474] border-[#DAE2FF]"
                    : "text-[#8C89A4] border-[#666380]"
                } font-[OpenSauceRegular]  text-xs border-t py-3  px-3`}
              >
                Enable the "Create custom address" toggle and enter the prefix
                you want your address to contain. The tool will generate a
                custom address and ask for confirmation before creating the
                token.
              </p>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default InfoContent;
