"use client";

import Footer from "@/components/Footer";
import MobileMenu from "@/components/MobileMenu";
import { useTheme } from "@/context/ThemeContext";
import React from "react";

const Page = () => {
  const { theme } = useTheme();
  return (
    <>
      <div
        className={`w-full h-full relative ${
          theme === "light" ? "bg-white" : "bg-darkMode"
        }`}
      >
        <div className=" w-full hidden sm:block md:block px-5 py-2 mb-3">
          <MobileMenu />
        </div>
        <div
          className={`${
            theme === "light"
              ? "bg-footerBg"
              : "bg-darkHero shadow-darkHeroShadow"
          } h-40 sm:h-20 sm:mt-5 flex justify-center items-center w-full`}
        >
          <h1
            className={`font-poppins font-semibold text-4xl sm:text-2xl ${
              theme === "light" ? "text-lightBlack" : "text-white"
            }`}
          >
            Privacy Policy
          </h1>
        </div>
        <div className="py-8 w-[80%] mx-auto h-full relative sm:w-full sm:px-5">
          {/* Section 1: Introduction */}
          <h2
            className={`font-poppins mb-2 text-[15px] font-normal ${
              theme === "light" ? "text-[#0F0F0F]" : "text-white"
            }`}
          >
            <span className="font-medium"> Effective Date:</span> 09 Oct 2024
          </h2>
          <p
            className={`font-poppins font-normal text-[15px] mb-2 ${
              theme === "light" ? "text-[#5C5C5C]" : "text-[#D3C8DE]"
            }`}
          >
            At{" "}
            <span
              className={`font-medium ${
                theme === "light" ? "text-[#0F0F0F]" : "text-white"
              }`}
            >
              Bull Byte
            </span>
            , we are committed to safeguarding your privacy and ensuring that
            your personal information is protected. This Privacy Policy explains
            how we collect, use, and protect your data when you use our
            services.
          </p>
          {/* Section 2: Information We Collect */}
          <h3
            className={`font-poppins mb-2 text-[15px] font-medium ${
              theme === "light" ? "text-[#0F0F0F]" : "text-white"
            }`}
          >
            1. Information We Collect
          </h3>
          <p
            className={`font-poppins font-normal text-[15px] mb-2 ${
              theme === "light" ? "text-[#5C5C5C]" : "text-[#D3C8DE]"
            }`}
          >
            We collect the following types of information
          </p>
          <ul
            className={`list-none pl-2 font-poppins font-normal text-[15px] mb-2 ${
              theme === "light" ? "text-[#5C5C5C]" : "text-[#D3C8DE]"
            } space-y-2`}
          >
            <li>
              <strong
                className={`font-medium ${
                  theme === "light" ? "text-[#0F0F0F]" : "text-white"
                }`}
              >
                • Personal Information:
              </strong>
              Information you provide when you sign up for an account, such as
              your name, email address, and any additional details necessary for
              account creation.
            </li>
            <li>
              <strong
                className={`font-medium ${
                  theme === "light" ? "text-[#0F0F0F]" : "text-white"
                }`}
              >
                • Usage Data:
              </strong>
              Information about how you interact with our platform, such as page
              views, clicks, and transaction activity.
            </li>
            <li>
              <strong
                className={`font-medium ${
                  theme === "light" ? "text-[#0F0F0F]" : "text-white"
                }`}
              >
                • Transaction Data:
              </strong>
              Information related to token creation, airdrops, or market-making,
              including wallet addresses and token transactions.
            </li>
            <li>
              <strong
                className={`font-medium ${
                  theme === "light" ? "text-[#0F0F0F]" : "text-white"
                }`}
              >
                • Cookies:
              </strong>
              We use cookies and similar tracking technologies to enhance your
              experience on our platform.
            </li>
          </ul>
          {/* Section 3: How We Use Your Information */}
          <h3
            className={`font-poppins mb-2 mt-3 text-[15px] font-medium ${
              theme === "light" ? "text-[#0F0F0F]" : "text-white"
            }`}
          >
            2. How We Use Your Information
          </h3>
          <p
            className={`font-poppins font-normal text-[15px] mb-2 ${
              theme === "light" ? "text-[#5C5C5C]" : "text-[#D3C8DE]"
            }`}
          >
            We use your information to:
          </p>
          <ul
            className={`list-none pl-2 font-poppins font-normal text-[15px] mb-2 ${
              theme === "light" ? "text-[#5C5C5C]" : "text-[#D3C8DE]"
            } space-y-2`}
          >
            <li> • Provide, operate, and maintain our services.</li>
            <li> • Improve and personalize your user experience.</li>
            <li>
              • Communicate with you regarding updates, technical issues, or
              service offerings.
            </li>
            <li>
              • Monitor platform security and prevent unauthorized access.
            </li>
            <li> • Analyze usage trends and optimize platform performance.</li>
          </ul>
          {/* Continue for other sections as needed */}
          {/* Section 4: Sharing Your Information */}
          <h3
            className={`font-poppins mb-2 mt-3 text-[15px] font-medium ${
              theme === "light" ? "text-[#0F0F0F]" : "text-white"
            }`}
          >
            3. Sharing Your Information
          </h3>
          <p
            className={`font-poppins font-normal text-[15px] mb-2 ${
              theme === "light" ? "text-[#5C5C5C]" : "text-[#D3C8DE]"
            }`}
          >
            We will never sell your personal information to third parties.
            However, we may share your data with trusted service providers for
            specific purposes, including:
          </p>
          <ul
            className={`list-none pl-2 font-poppins font-normal text-[15px] mb-2 ${
              theme === "light" ? "text-[#5C5C5C]" : "text-[#D3C8DE]"
            } space-y-2`}
          >
            <li> • To comply with legal requirements.</li>
            <li>
              • For third-party analytics services that help us improve our
              platform.
            </li>
          </ul>
          {/* 4 point */}
          <h3
            className={`font-poppins mb-2 mt-3 text-[15px] font-medium ${
              theme === "light" ? "text-[#0F0F0F]" : "text-white"
            }`}
          >
            4. Data Security
          </h3>
          <p
            className={`font-poppins font-normal text-[15px] mb-2 ${
              theme === "light" ? "text-[#5C5C5C]" : "text-[#D3C8DE]"
            }`}
          >
            We implement industry-standard encryption and security measures to
            protect your information. However, please be aware that no method of
            data transmission or storage is completely secure, and we cannot
            guarantee absolute security
          </p>
          {/* 5 point */}
          <h3
            className={`font-poppins mb-2 mt-3 text-[15px] font-medium ${
              theme === "light" ? "text-[#0F0F0F]" : "text-white"
            }`}
          >
            5. Data Retention
          </h3>
          <p
            className={`font-poppins font-normal text-[15px] mb-2 ${
              theme === "light" ? "text-[#5C5C5C]" : "text-[#D3C8DE]"
            }`}
          >
            We retain your personal data for as long as necessary to provide our
            services or as required by law. You may request deletion of your
            account and associated data at any time.
          </p>
          {/* 6 point */}
          <h3
            className={`font-poppins mb-2 mt-3 text-[15px] font-medium ${
              theme === "light" ? "text-[#0F0F0F]" : "text-white"
            }`}
          >
            6. Your Rights
          </h3>
          <p
            className={`font-poppins font-normal text-[15px] mb-2 ${
              theme === "light" ? "text-[#5C5C5C]" : "text-[#D3C8DE]"
            }`}
          >
            Depending on your jurisdiction, you may have the following rights
            regarding your personal information:
          </p>
          <ul
            className={`list-none pl-2 font-poppins font-normal text-[15px] mb-2 ${
              theme === "light" ? "text-[#5C5C5C]" : "text-[#D3C8DE]"
            } space-y-2`}
          >
            <li>
              • Access: You may request access to the personal data we hold
              about you.
            </li>
            <li>
              • Correction: You may request corrections to your personal data if
              it is inaccurate.
            </li>
            <li>
              • Deletion: You may request the deletion of your personal data,
              subject to any legal obligations we may have to retain it.
            </li>
            <li>
              • Opt-out: You may opt out of marketing communications at any
              time.
            </li>
          </ul>
          {/* 7 point */}
          <h3
            className={`font-poppins mb-2 mt-3 text-[15px] font-medium ${
              theme === "light" ? "text-[#0F0F0F]" : "text-white"
            }`}
          >
            7. Third-Party Links
          </h3>
          <p
            className={`font-poppins font-normal text-[15px] mb-2 ${
              theme === "light" ? "text-[#5C5C5C]" : "text-[#D3C8DE]"
            }`}
          >
            Our platform may contain links to third-party websites. We are not
            responsible for the privacy practices of these websites, and we
            encourage you to review their policies.
          </p>
          {/* 8 point */}
          <h3
            className={`font-poppins mb-2 mt-3 text-[15px] font-medium ${
              theme === "light" ? "text-[#0F0F0F]" : "text-white"
            }`}
          >
            8. Changes to This Privacy Policy
          </h3>
          <p
            className={`font-poppins font-normal text-[15px] mb-2 ${
              theme === "light" ? "text-[#5C5C5C]" : "text-[#D3C8DE]"
            }`}
          >
            We may update this Privacy Policy from time to time. If we make
            significant changes, we will notify you by email or through the
            platform. Your continued use of Bull Byte after such updates will
            signify your acceptance of the changes
          </p>
          {/* 9  point */}
          <h3
            className={`font-poppins mb-2 mt-3 text-[15px] font-medium ${
              theme === "light" ? "text-[#0F0F0F]" : "text-white"
            }`}
          >
            9. Contact Us
          </h3>
          <p
            className={`font-poppins font-normal text-[15px] mb-2 ${
              theme === "light" ? "text-[#5C5C5C]" : "text-[#D3C8DE]"
            }`}
          >
            If you have any questions or concerns regarding this Privacy Policy,
            please contact us at:
            <br /> Email: Insert Email Address <br /> Mailing Address: Insert
            Physical Address
          </p>
        </div>
        <Footer showSpecialDiv={false} />
      </div>
    </>
  );
};

export default Page;
