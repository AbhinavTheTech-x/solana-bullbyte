/* eslint-disable react/no-unescaped-entities */

import { useTheme } from "@/context/ThemeContext";
import React, { useState } from "react";

const HelpCenter = () => {
  const [contactDetails, setContactDetails] = useState(false);
  const { theme } = useTheme();
  return (
    <div className="v1Token-section w-full h-full flex justify-center items-center flex-col">
      <div className="p-5 sm:p-3 w-full flex justify-start items-start flex-col gap-10">
        {!contactDetails && (
          <div className="h-full w-full flex justify-between sm:flex-col items-start gap-10">
            <div
              className={`w-1/2 sm:w-full sm:p-3 h-full flex-col flex rounded-xl justify-start items-center p-5 border ${
                theme === "light"
                  ? "border-[#DAE2FF] shadow-[4px 4px 30px 0px #3D54AB24] bg-white"
                  : " bg-[#3F2D58] border-[#4B4868] shadow-[4px 4px 30px 0px #3D54AB24]"
              }`}
            >
              <div className=" w-full">
                <h6 className="text-[#573CFF] font-poppins capitalize mb-3 text-sm font-medium">
                  Introduction to SlerfTools
                </h6>
                <img
                  src="./help-1.svg"
                  className="w-full h-[220px] rounded-xl object-cover"
                  alt="help"
                />
                <p
                  className={`${
                    theme === "light" ? "text-[#5C5C5C]" : "text-[#F4E7E7]"
                  } font-normal text-[13px] font-[OpenSauceRegular] mt-5`}
                >
                  SlerfTools | Solana Toolset for Creating Tokens, Bulk
                  Airdrops, and Market Making Bots Create tokens on Solana, set
                  up OpenBook, burn liquidity, perform bulk airdrops, and market
                  making bots. SlerfTools helps you easily build successful
                  projects.
                </p>
                <h6 className="text-[#573CFF] font-poppins capitalize mt-4 text-sm font-medium">
                  Introduction to the SlerfTools Project
                </h6>
                <p
                  className={`${
                    theme === "light" ? "text-[#5C5C5C]" : "text-[#F4E7E7]"
                  } font-normal text-[13px] font-[OpenSauceRegular] mt-2`}
                >
                  SlerfTools is a toolkit specifically designed for Solana,
                  dedicated to simplifying blockchain operations. It offers a
                  fully visual interface without the need for programming,
                  making complex processes such as token issuance and liquidity
                  management secure and straightforward. In the future,
                  SlerfTools will expand to include more features, such as bulk
                  address management, bulk aggregation, and bulk sending, to
                  provide more efficient asset management and operational
                  convenience. These new services will further enhance the
                  practicality of SlerfTools within the Solana blockchain
                  ecosystem, meeting the diverse needs of users. Whatever Solana
                  users need, we will create. Our focus and expertise in
                  satisfying users' needs make us happy.
                </p>
                <h6 className="text-[#573CFF] font-poppins capitalize mt-4 text-sm font-medium">
                  Project Background
                </h6>
                <p
                  className={`${
                    theme === "light" ? "text-[#5C5C5C]" : "text-[#F4E7E7]"
                  } font-normal text-[13px] font-[OpenSauceRegular] mt-2`}
                >
                  When the founder of the Slerf project was burning LP tokens, a
                  mistake led to the burning of airdrop reserved tokens as well,
                  resulting in a loss of $10 million worth of Slerf tokens and
                  affecting 25,000 presale buyers. Despite this mishap, often
                  referred to as a misstep rug pull, the founder responded to
                  the community with complete transparency during a space
                  session. This action garnered overwhelming support from
                  investors, and within just 30 minutes, Slerf's market value
                  surpassed $1 billion, elevating it to the status of the new
                  meme king. The greatest "maneuver" created a legendary
                  narrative, embodying the true spirit of Bitcoin. Therefore, we
                  decided to respond to the inspiration from this legendary
                  moment by creating SlerfTools. This toolkit aims to provide
                  convenient tools for Solana users, helping to avoid similar
                  mistakes and continue this legendary story. By supporting
                  community development, we aim to further promote the
                  prosperity of the Solana ecosystem.
                </p>
                <h6 className="text-[#573CFF] font-poppins capitalize mt-4 text-sm font-medium">
                  SlerfTools Development Plan
                </h6>
                <p
                  className={`${
                    theme === "light" ? "text-[#5C5C5C]" : "text-[#F4E7E7]"
                  } font-normal text-[13px] font-[OpenSauceRegular] mt-2`}
                >
                  The development plan and roadmap for SlerfTools can be divided
                  into several phases:
                </p>
                <ol
                  className={`${
                    theme === "light" ? "text-[#5C5C5C]" : "text-[#F4E7E7]"
                  } font-normal text-[13px] font-[OpenSauceRegular] mt-2 space-y-2 list-decimal list-inside`}
                >
                  <li>
                    Initial Phase: Focus on developing basic functions such as
                    token creation, liquidity creation and revocation, token
                    permission relinquishment, LP and token burning. This
                    ensures that project teams can easily launch and manage
                    their tokens.
                  </li>
                  <li>
                    Mid-Term Development: Enhance features like token
                    management, liquidity management, bulk sending, and
                    aggregation to provide project teams with a one-stop
                    blockchain management solution.
                  </li>
                  <li>
                    Professional Phase: Introduce advanced features such as
                    swap, bulk swap, and market-making bots to support
                    professional users in bulk trading. Additionally, launch
                    incentive mechanisms like trading mining and token staking
                    to build a comprehensive tool platform for professional
                    clients.
                  </li>
                  <li>
                    Extended Services: Develop services related to the Solana
                    chain, such as node services and auditing services, and
                    provide a Solana ecosystem map to meet users' needs for
                    on-chain information and resources, further enriching the
                    Solana ecosystem.
                  </li>
                </ol>
                <p
                  className={`${
                    theme === "light" ? "text-[#5C5C5C]" : "text-[#F4E7E7]"
                  } font-normal text-[13px] font-[OpenSauceRegular] mt-2`}
                >
                  Through this development pathway, SlerfTools plans to
                  gradually build a comprehensive, efficient, and professional
                  Solana blockchain toolkit, serving various users and promoting
                  the prosperity of the Solana ecosystem.
                </p>
                <h6 className="text-[#573CFF] font-poppins capitalize mt-4 text-sm font-medium">
                  SlerfTools Roadmap
                </h6>
                <p
                  className={`${
                    theme === "light" ? "text-[#363636]" : "text-white"
                  } font-normal text-[13px] font-[OpenSauceRegular] mt-2`}
                >
                  SlerfTools Roadmap Overview:
                </p>
                <ul
                  className={`${
                    theme === "light" ? "text-[#5C5C5C]" : "text-[#F4E7E7]"
                  } font-normal text-[12px] font-[OpenSauceRegular]  `}
                >
                  <li className="font-medium">V0.1:</li>
                  <li>• Token Creation</li>
                  <li>• OpenBook Market Creation</li>
                  <li>• Token Locking</li>
                  <li>• Liquidity Pool Creation</li>
                  <li>• Token Burning</li>
                  <li>• Invitation Mechanism</li>
                  <li>• Bulk Sending And Aggregation</li>
                  <li>• Solana Node Services</li>
                  <li className="font-medium mt-4">V0.2:</li>
                  <li>• Additional Wallet Address-Related Services</li>
                  <li>• Swap Functionality</li>
                  <li>• 1V1 "Sniper" Trades</li>
                  <li>• Multi-To-Multi Trades</li>
                  <li>• Strategy Trading Bots Based On Swaps</li>
                  <li>• Expanded Token Management Functions</li>
                  <li className="font-medium mt-4">V1.0:</li>
                  <li>• Project Calendar</li>
                  <li>• AI Contract Auditing</li>
                  <li>• Coin Sniping Functionality</li>
                  <li>• Market Value Management Tools</li>
                  <li>• Enhanced User Interaction Features</li>
                </ul>
                <p
                  className={`mt-1 ${
                    theme === "light" ? "text-[#5C5C5C]" : "text-[#F4E7E7]"
                  }  font-normal text-[13px] font-[OpenSauceRegular]`}
                >
                  By sequentially perfecting basic services and gradually
                  introducing advanced functions and professional services,
                  SlerfTools aims to support community development and meet the
                  needs of various users, thereby promoting the prosperity of
                  the Solana ecosystem.
                </p>

                <h6 className="text-[#573CFF] font-poppins capitalize mt-4 text-sm font-medium">
                  How to Empower $Slerf?
                </h6>
                <p
                  className={`${
                    theme === "light" ? "text-[#5C5C5C]" : "text-[#F4E7E7]"
                  } font-normal text-[13px] font-[OpenSauceRegular] mt-2`}
                >
                  SlerfTools has decided to use Slerf tokens as the primary
                  currency for its business operations. This means that Slerf
                  tokens will be used on the SlerfTools platform to pay for
                  service fees, obtain specific discounts, and participate in
                  staking activities. This approach not only enhances the
                  utility of Slerf tokens but also helps to strengthen the sense
                  of community engagement and increase the market value of the
                  tokens
                </p>

                <h6 className="text-[#573CFF] font-poppins capitalize mt-4 text-sm font-medium">
                  SlerfTools Empowerment Plan
                </h6>
                <p
                  className={`${
                    theme === "light" ? "text-[#5C5C5C]" : "text-[#F4E7E7]"
                  } font-normal text-[13px] font-[OpenSauceRegular] mt-2`}
                >
                  Once SlerfTools is launched and running stably, the following
                  plans will be executed successively:
                </p>

                <ol
                  className={`${
                    theme === "light" ? "text-[#5C5C5C]" : "text-[#F4E7E7]"
                  } font-normal text-[12px] font-[OpenSauceRegular] mt-1 space-y-2 `}
                >
                  <li>
                    <p>
                      1. Discount Incentives: Provide different levels of
                      discounts based on the amount of Slerf Tokens held. For
                      example:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Hold 10,000 Slerf Tokens for a 10% discount</li>
                      <li>Hold 20,000 Slerf Tokens for a 20% discount</li>
                      <li>Hold 50,000 Slerf Tokens for a 40% discount</li>
                      <li>Hold 100,000 Slerf Tokens for a 50% discount</li>
                    </ul>
                  </li>

                  <li>
                    <p>
                      2. Exclusive Payment: Certain services or features, such
                      as market-making bot rentals and airdrop tool services,
                      will only accept Slerf Tokens as a payment method.
                    </p>
                  </li>

                  <li>
                    <p>
                      3. Staking Rewards: Users who stake Slerf Tokens can
                      receive a share of SlerfTools' revenue.
                    </p>
                  </li>
                </ol>

                <p
                  className={`mt-1 ${
                    theme === "light" ? "text-[#5C5C5C]" : "text-[#F4E7E7]"
                  } font-normal text-[13px] font-[OpenSauceRegular]`}
                >
                  This plan aims to encourage the holding and use of Slerf
                  Tokens by offering tangible benefits, thereby enhancing the
                  token's circulation and value.
                </p>
                <h6 className="text-[#573CFF] font-poppins capitalize mt-4 text-sm font-medium">
                  Relationship Between Slerf and SlerfTools
                </h6>
                <p
                  className={`${
                    theme === "light" ? "text-[#5C5C5C]" : "text-[#F4E7E7]"
                  } font-normal text-[13px] font-[OpenSauceRegular] mt-2`}
                >
                  SlerfTools is a tool platform designed for the Slerf community
                  and Solana blockchain users, dedicated to providing convenient
                  blockchain operation tools and services. By adopting Slerf as
                  the business token, SlerfTools deepens its connection with the
                  Slerf project, aiming to jointly promote the development of
                  the Solana ecosystem. This enhances the application scenarios
                  and value of Slerf tokens while providing more convenience and
                  benefits to members of the Slerf community.
                </p>
                <h6 className="text-[#573CFF] font-poppins capitalize mt-4 text-sm font-medium">
                  SlerfTools Partner Program
                </h6>
                <p
                  className={`${
                    theme === "light" ? "text-[#5C5C5C]" : "text-[#F4E7E7]"
                  } font-normal text-[13px] font-[OpenSauceRegular] mt-2`}
                >
                  The SlerfTools Partner Program aims to incentivize KOLs and
                  regular users to invite others to use the platform through the
                  following points:
                </p>
                <ol
                  className={`${
                    theme === "light" ? "text-[#5C5C5C]" : "text-[#F4E7E7]"
                  } font-normal text-[13px] font-[OpenSauceRegular] mt-2 space-y-2 list-decimal list-inside`}
                >
                  <li>
                    Invitation Rewards: Partners can invite new users to
                    register and use SlerfTools by sharing a unique invitation
                    link. For each successful invitation, partners will receive
                    a share of the revenue.
                  </li>
                  <li>
                    Earnings Settlement: Partner earnings will be periodically
                    settled based on the activity and usage of the platform by
                    the invited users.
                  </li>
                  <li>
                    Tier System: Introduce a tier system that provides different
                    levels of partners based on the quantity and quality of
                    invitations, offering higher revenue shares and additional
                    benefits.
                  </li>
                  <li>
                    Transparency Mechanism: Provide real-time data tracking and
                    detailed earnings reports to ensure partners can clearly see
                    their contributions and earnings.
                  </li>
                  <li>
                    Support and Training: Offer professional marketing support
                    and training to partners, helping them effectively invite
                    new users
                  </li>
                </ol>
                <div className=" w-full flex justify-center items-center">
                  <button
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top smoothly
                      setContactDetails(true); // Trigger the component change
                    }}
                    className=" bg-[#EBE9FA] w-max px-10 py-2.5 mx-auto my-8 text-center text-[#573CFF] font-[OpenSauceMedium] text-sm "
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
            <div
              className={`w-1/2 sm:w-full sm:p-3 h-full flex-col flex rounded-xl justify-start items-center p-5 border ${
                theme === "light"
                  ? "border-[#DAE2FF] shadow-[4px 4px 30px 0px #3D54AB24] bg-white"
                  : " bg-[#3F2D58] border-[#4B4868] shadow-[4px 4px 30px 0px #3D54AB24]"
              }`}
            >
              <ul
                className={`font-poppins text-[13px] text-left w-full ${
                  theme === "light" ? "text-[#636363]" : "text-[#F4E7E7]"
                } font-normal space-y-2`}
              >
                <li>• Introduction To The SlerfTools Project</li>
                <li>• Project Background</li>
                <li>• SlerfTools Development Plan</li>
                <li>• SlerfTools Roadmap</li>
                <li>• How To Empower $Slerf?</li>
                <li>• SlerfTools Empowerment Plan</li>
                <li>• Relationship Between Slerf And SlerfTools</li>
                <li>• SlerfTools Partner Program</li>
              </ul>
            </div>
          </div>
        )}
        {contactDetails && (
          <div
            className={`w-full sm:p-3 h-full flex-col flex rounded-xl justify-start items-start p-5 border ${
              theme === "light"
                ? "border-[#DAE2FF] shadow-[4px 4px 30px 0px #3D54AB24] bg-white"
                : " bg-[#3F2D58] border-[#4B4868] shadow-[4px 4px 30px 0px #3D54AB24]"
            }`}
          >
            <h6 className="text-[#573CFF] font-poppins capitalize mt-4 text-lg font-medium">
              Contact Us
            </h6>
            <p
              className={`${
                theme === "light" ? "text-[#5C5C5C]" : "text-[#F4E7E7]"
              } font-normal text-[13px] font-[OpenSauceRegular] mt-2`}
            >
              For business cooperation, commercial consultation, and 1V1
              customized services, feel free to contact us at any time
            </p>
            <div className=" w-full my-4">
              <p
                className={`${
                  theme === "light" ? "text-[#363636]" : "text-white"
                } font-normal text-[13px] font-[OpenSauceMedium] mt-2`}
              >
                SlerfTools - Solana Toolkit
              </p>
              <p
                className={`${
                  theme === "light" ? "text-[#5C5C5C]" : "text-[#F4E7E7]"
                } font-normal text-[13px] font-[OpenSauceRegular]`}
              >
                {" "}
                Safe, open-source, providing the most convenient one-stop
                experience for Solana users.
              </p>
            </div>
            <ol
              className={`${
                theme === "light" ? "text-[#363636]" : "text-[#F4E7E7]"
              } font-normal capitalize text-[13px] font-[OpenSauceMedium] mt-2 space-y-2 `}
            >
              <li>
                • Official website:
                <span className=" text-[#573CFF] underline cursor-pointer">
                  {" "}
                  slerf.tools
                </span>
              </li>
              <li>
                • Twitter:
                <span className=" text-[#573CFF] underline cursor-pointer">
                  {" "}
                  @SlerfTools
                </span>
              </li>
              <li>
                • Telegram:
                <span className=" text-[#573CFF] underline cursor-pointer">
                  {" "}
                  SlerfTools
                </span>
              </li>
              <li>
                • Github:
                <span className=" text-[#573CFF] underline cursor-pointer">
                  {" "}
                  slerfTools/slerfTools
                </span>
              </li>
              <li>• Email: BD@slerf.tools</li>
            </ol>
            <div
              className={` ${
                theme === "light"
                  ? "text-[#5C5C5C] border-[#CFCCE6] bg-[#ECE5F8]"
                  : "text-[#fff] bg-[#594278] border-[#5E477D]"
              }  border  rounded-xl w-[85%] sm:text-center sm:w-full mx-auto px-4 py-4 flex justify-center items-center text-[13px] my-8 font-[OpenSauceRegular] `}
            >
              Private Deployment: Exclusive UI and brand IP customization,
              custom payment addresses, allowing you to have a toolkit as
              efficient as SlerfTools.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HelpCenter;
