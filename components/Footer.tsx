"use client";

import { useTheme } from "@/context/ThemeContext";
import React from "react";
import AnimatedBtn from "./animation/AnimatedBtn";

// Define the props interface
interface FooterProps {
  showSpecialDiv?: boolean; // Optional prop to determine if the isTrue div should be displayed
}

const Footer: React.FC<FooterProps> = ({ showSpecialDiv }) => {
  const { theme } = useTheme();
  return (
    <>
      <footer
        className={`w-[95%] mt-20 mx-auto h-full relative ${
          theme === "light"
            ? "bg-footerBg"
            : " bg-darkCard__1 shadow-darkCardShadow__1 border-darkCard__1"
        } border-[#E9E5FF] font-poppins rounded-[22px] border-2 `}
      >
        {showSpecialDiv && (
          <img
            src="./Star 3.svg"
            className="w-20 h-60 object-cover absolute -top-80 -right-10"
            alt="star"
          />
        )}
        <div className="max-w-screen-xl mx-auto px-20 pt-16 pb-10 sm:px-6 space-y-2 h-full">
          {/* Conditional rendering based on the prop */}
          {showSpecialDiv && (
            <div className="text-center flex justify-center items-center flex-col">
              <h2
                className={`text-4xl font-poppins font-semibold ${
                  theme === "light" ? "text-lightBlack" : "text-white"
                } mb-3`}
              >
                Bull Byte Protocol
              </h2>
              <p
                className={`mt-4 w-[60%] sm:w-full ${
                  theme === "light" ? "text-[#7B7A7D]" : "text-white"
                } font-poppins text-sm font-normal mb-3`}
              >
                Create, Manage, And Grow Your Solana-Based Projects With Bull
                Byte, The All-In-One Platform For Token Creation, Airdrops,
                Market-Making Bots, Liquidity Management, And More.
              </p>
              {/* <CTAButton
                font="font-poppins font-semibold"
                text="Enter Daap"
                arrowSize="w-5 h-5" // Customize the arrow size
                paddingY="py-3"
                paddingX="px-8 my-5" // Customize the horizontal padding
                gap="gap-1" // Customize the gap between text and arrow
                onClick={() => console.log("Button clicked!")}
              /> */}
              <AnimatedBtn
                font="font-poppins font-semibold"
                text="Enter Daap"
                arrowSize="w-5 h-5" // Customize the arrow size
                paddingY="py-3"
                paddingX="px-8 my-5" // Customize the horizontal padding
                gap="gap-1" // Customize the gap between text and arrow
                onClick={() => console.log("Button clicked!")}
              />
            </div>
          )}

          <img
            src={`${theme === "light" ? "./logo" : "./dark-logo"}.svg`}
            className="w-32 h-10 object-contain sm:mx-auto"
            alt="logo"
          />

          <div className="flex justify-between items-center gap-8 sm:flex-wrap sm:gap-y-7 sm:gap-x-4 ">
            <div className="w-80 h-52 sm:w-full sm:h-max">
              <p
                className={`font-poppins sm:text-center ${
                  theme === "light" ? "text-black" : "text-white"
                } text-[16px] font-semibold`}
              >
                Bull Byte Protocol – Powering Solana Innovation
              </p>
              <p
                className={`${
                  theme === "light" ? "text-[#7B7A7D]" : "text-white"
                } font-poppins font-normal text-sm mt-2 sm:text-center`}
              >
                Create, manage, and grow your Solana-based projects with Bull
                Byte, the all-in-one platform for token creation, airdrops,
                market-making bots, liquidity management, and more.
              </p>
            </div>

            <div className="h-52 sm:w-[47%]">
              <p
                className={`font-poppins ${
                  theme === "light" ? "text-black" : "text-white"
                } text-[16px] font-semibold`}
              >
                Explore
              </p>
              <ul className="mt-6 space-y-4 text-sm">
                {[
                  { id: 1, label: "Home", href: "#" },
                  { id: 2, label: "Features", href: "#" },
                  { id: 3, label: "Blog", href: "#" },
                  { id: 4, label: "Support", href: "#" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href="#"
                      className={`${
                        theme === "light"
                          ? "text-[#7B7A7D] "
                          : "text-white hover:"
                      } font-poppins font-normal hover:text-[#8A52FF] text-sm  transition`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="h-52 sm:w-[47%]">
              <p
                className={`font-poppins ${
                  theme === "light" ? "text-black" : "text-white"
                } text-[16px] font-semibold`}
              >
                Follow Us
              </p>
              <ul className="mt-6 space-y-4 text-sm">
                {[
                  { id: 1, label: "Twitter", href: "#" },
                  { id: 2, label: "Discord", href: "#" },
                  { id: 3, label: "GitHub", href: "#" },
                  { id: 4, label: "Telegram Support", href: "#" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href="#"
                      className={`${
                        theme === "light"
                          ? "text-[#7B7A7D] "
                          : "text-white hover:"
                      } font-poppins font-normal hover:text-[#8A52FF] text-sm  transition`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="h-52 w-48 sm:w-full sm:h-max">
              <p
                className={`font-poppins ${
                  theme === "light" ? "text-black" : "text-white"
                } text-[16px] font-semibold`}
              >
                Get In Touch
              </p>
              <p
                className={`${
                  theme === "light" ? "text-[#7B7A7D] " : "text-white hover:"
                } font-poppins font-normal text-sm mt-4`}
              >
                Questions? Feedback? Reach out to our team for support or to
                learn more about Bull Byte’s powerful tools.
              </p>
            </div>
          </div>

          <div
            className={`border-t ${
              theme === "light" ? "border-[#EFEFEF]" : "border-darkCard__1"
            } pt-8 sm:pt-4 flex justify-between sm:flex-col sm:gap-0 items-center w-full`}
          >
            <p
              className={`${
                theme === "light" ? "text-[#7B7A7D] " : "text-white hover:"
              } font-poppins font-normal text-sm mt-4`}
            >
              © 2024 Bull Byte. All Rights Reserved.
            </p>
            <div className="flex gap-10 sm:gap-5">
              <a
                href="/privacy"
                className={`${
                  theme === "light" ? "text-[#7B7A7D] " : "text-white hover:"
                } font-poppins font-normal text-sm mt-4`}
              >
                • Privacy Policy
              </a>
              <a
                href="/terms-and-services"
                className={`${
                  theme === "light" ? "text-[#7B7A7D] " : "text-white hover:"
                } font-poppins font-normal text-sm mt-4`}
              >
                • Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
      {showSpecialDiv && (
        <h1 className="text-[#8D82D2] font-poppins opacity-30 font-bold mt-10 mb-5 leading-tight text-[10vw] text-center">
          Bull Byte
        </h1>
      )}
    </>
  );
};

export default Footer;
