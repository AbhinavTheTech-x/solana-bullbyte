/* eslint-disable react/no-unescaped-entities */

import { useTheme } from "@/context/ThemeContext";
import React, { useState } from "react";

const WebBlogs = () => {
  const { theme } = useTheme();
  const [visibleBlogs, setVisibleBlogs] = useState(5); // Initially show 5 blogs

  const Blogs = [
    {
      id: 1,
      title: "Create a Solana Telegram bot in less than 100 lines of code",
      describe:
        "Want to stay up to date on what’s happening on Solana? This guide will show you how to create a Telegram bot to track on-chain activity. We’ll use an NFT sale tracker as an example, but the template we built can easily be adapted for other uses.",
      date: "Jul 25, 20248 Min Read ",
    },
    {
      id: 2,
      title:
        "Six unique aspects of the TON blockchain that will surprise Solidity developers",
      describe:
        "TON is a very modern blockchain that brings some radical new ideas to smart contract development. It was designed after Ethereum launched, taking what worked in the Ethereum Virtual Machine (EVM) model and improving what didn’t...",
      date: "Jul 25, 20248 Min Read ",
    },
    {
      id: 3,
      title: "Create a Solana Telegram bot in less than 100 lines of code",
      describe:
        "Want to stay up to date on what’s happening on Solana? This guide will show you how to create a Telegram bot to track on-chain activity. We’ll use an NFT sale tracker as an example, but the template we built can easily be adapted for other uses.",
      date: "Jul 25, 20248 Min Read ",
    },
    {
      id: 4,
      title: "Create a Solana Telegram bot in less than 100 lines of code",
      describe:
        "Want to stay up to date on what’s happening on Solana? This guide will show you how to create a Telegram bot to track on-chain activity. We’ll use an NFT sale tracker as an example, but the template we built can easily be adapted for other uses.",
      date: "Jul 25, 20248 Min Read ",
    },
    {
      id: 5,
      title:
        "Six unique aspects of the TON blockchain that will surprise Solidity developers",
      describe:
        "TON is a very modern blockchain that brings some radical new ideas to smart contract development...",
      date: "Jul 25, 20248 Min Read ",
    },
    {
      id: 6,
      title: "An Intro to Blockchain Technology",
      describe:
        "Learn the basics of blockchain technology, its applications, and how it's revolutionizing various industries.",
      date: "Jul 26, 20248 Min Read ",
    },
    {
      id: 7,
      title: "How to Build Decentralized Apps",
      describe:
        "A guide on building decentralized applications (dApps) and exploring blockchain integration.",
      date: "Jul 27, 20248 Min Read ",
    },
  ];
  const topics = [
    { topic: "Anchor", issues: 1 },
    { topic: "Backer", issues: 1 },
    { topic: "Fees", issues: 1 },
    { topic: "NFT", issues: 1 },
    { topic: "Spl", issues: 1 },
    { topic: "UI", issues: 1 },
    { topic: "MEV", issues: 1 },
    { topic: "NFT Snapshots", issues: 6 },
    { topic: "SPL Token", issues: 6 },
    { topic: "Solana Blockchain", issues: 2 },
    { topic: "NFT Marketplace", issues: 7 },
    { topic: "Realms", issues: 9 },
    { topic: "Serum", issues: 10 },
    { topic: "Tools", issues: 12 },
    { topic: "Validator", issues: 99 },
    { topic: "Raydium Liquidity Pool", issues: 1 },
    { topic: "Account Data on Solana", issues: 4 },
    { topic: "Wallet Manager", issues: 2 },
    { topic: "Market Maker Robots", issues: 7 },
    { topic: "Help Centre", issues: 1 },
    { topic: "Solana Monitoring", issues: 2 },
    { topic: "Transaction Fees", issues: 7 },
    { topic: "History Proves", issues: 1 },
    { topic: "Proof of Stake", issues: 1 },
    { topic: "Solana Geyser Plugin", issues: 1 },
    { topic: "About DePIN", issues: 1 },
    { topic: "Blinks Client Introduction", issues: 1 },
    { topic: "What is a SOL Domain?", issues: 1 },
  ];

  const loadMoreBlogs = () => {
    setVisibleBlogs((prev) => prev + 2); // Show 2 more blogs on each click
  };

  return (
    <div className="v1Token-section w-full h-full flex justify-center items-center flex-col">
      <div className="p-5 sm:p-3 w-full flex justify-start items-start flex-col gap-10">
        <div className="h-full w-full flex justify-between items-start gap-10 sm:flex-col">
          <div
            style={{ boxShadow: "4px 4px 30px 0px #3D54AB24" }}
            className={`w-1/2 sm:w-full sm:p-3 h-full flex-col flex rounded-xl justify-start items-center p-5 border ${
              theme === "light"
                ? "border-[#DAE2FF] bg-white"
                : "bg-[#3F2D58] border-[#4B4868]"
            }`}
          >
            <div className=" w-full flex justify-start items-center flex-col h-full gap-5">
              {Blogs.slice(0, visibleBlogs).map((blog) => (
                <div key={blog.id} className=" w-full">
                  <h6
                    className={`${
                      theme === "light" ? "text-[#0F0F0F]" : "text-[#FCFCFC]"
                    } font-poppins capitalize  text-[16px] font-medium`}
                  >
                    {blog.title}
                  </h6>

                  <p
                    className={`font-normal text-[13px] my-5 ${
                      theme === "light" ? "text-[#5C5C5C]" : "text-[#E1DEF1]"
                    }`}
                  >
                    {blog.describe}
                  </p>
                  <p className="text-[#573CFF] font-[OpenSauceRegular] text-xs">
                    {blog.date}
                  </p>
                </div>
              ))}
            </div>
            {visibleBlogs < Blogs.length && (
              <button
                onClick={loadMoreBlogs}
                className="text-[#573CFF] bg-white font-[OpenSauceMedium] border border-[#573CFF] rounded-lg w-max mx-auto mt-5 text-sm px-3 py-3.5"
              >
                Load more issues
              </button>
            )}
          </div>
          <div
            style={{ boxShadow: "4px 4px 30px 0px #3D54AB24" }}
            className={`w-1/2 sm:w-full sm:p-3 h-full flex-col flex rounded-xl justify-start items-center p-5 border ${
              theme === "light"
                ? "border-[#DAE2FF] bg-white"
                : "bg-[#3F2D58] border-[#4B4868]"
            }`}
          >
            <h6
              className={`${
                theme === "light" ? "text-[#0F0F0F]" : "text-[#FCFCFC]"
              } font-poppins capitalize  text-[16px] text-left w-full font-medium`}
            >
              SlerfTools Blog | The best web3 content platform
            </h6>
            <p
              className={`font-normal text-[13px] text-left font-[OpenSauceRegular] my-5 ${
                theme === "light" ? "text-[#5C5C5C]" : "text-[#E1DEF1]"
              }`}
            >
              SlerfTools Blog is a platform that aims to provide the best
              content for the Web3 space. Whether it is about cryptocurrency,
              blockchain technology, DeFi applications or NFT art, we provide a
              rich variety of articles, tutorials and in-depth analysis to help
              readers gain a deep understanding and master this emerging field.
              Whether you are a beginner or a professional, SlerfTools Blog is
              committed to providing you with the latest and most useful
              information to help you succeed in the Web3 world.
            </p>
            <div className=" w-full">
              <h6
                className={`${
                  theme === "light" ? "text-[#0F0F0F]" : "text-[#FCFCFC]"
                } font-poppins capitalize  text-[16px] font-medium`}
              >
                Topics
              </h6>
              <div className=" w-full flex justify-start items-center flex-col gap-1 mt-3">
                {topics.map((topic, i) => {
                  return (
                    <div
                      key={i}
                      className="flex justify-between items-center w-full"
                    >
                      <h6
                        className={`font-normal text-xs font-[OpenSauceRegular]  ${
                          theme === "light"
                            ? "text-[#5C5C5C]"
                            : "text-[#E1DEF1]"
                        }`}
                      >
                        {topic.topic}
                      </h6>
                      <h6
                        className={`font-normal text-xs font-[OpenSauceRegular]  ${
                          theme === "light"
                            ? "text-[#5C5C5C]"
                            : "text-[#E1DEF1]"
                        }`}
                      >
                        {topic.issues}
                      </h6>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebBlogs;
