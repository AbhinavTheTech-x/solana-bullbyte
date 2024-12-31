"use client";

import Footer from "@/components/Footer";
import MobileMenu from "@/components/MobileMenu";
import { useTheme } from "@/context/ThemeContext";
import React from "react";

const Page: React.FC = () => {
  const { theme } = useTheme();

  return (
    <>
      <div
        className={`w-full h-full relative ${
          theme === "light" ? "bg-white" : "bg-darkMode"
        }`}
      >
        <div className=" w-full hidden sm:block md:block py-2 px-5 mb-3">
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
            Terms of Service
          </h1>
        </div>
        <div className="py-8 w-[80%] mx-auto h-full relative sm:w-full sm:px-5">
          {/* Section 1: Introduction */}
          <h2
            className={`font-poppins mb-2 text-[15px] font-normal ${
              theme === "light" ? "text-[#0F0F0F]" : "text-white"
            }`}
          >
            <span className=" font-medium"> Effective Date:</span> 09 Oct 2024
          </h2>
          <p
            className={`font-poppins font-normal text-[15px] mb-2 ${
              theme === "light" ? "text-[#5C5C5C]" : "text-[#D3C8DE]"
            }`}
          >
            Welcome to Bull Byte! By accessing or using our platform, you agree
            to the following Terms of Service. Please read these terms
            carefully.
          </p>
          {/* Section 2: Information We Collect */}
          <h3
            className={`font-poppins mb-2 text-[15px] font-medium ${
              theme === "light" ? "text-[#0F0F0F]" : "text-white"
            }`}
          >
            1. Acceptance of Terms
          </h3>
          <p
            className={`font-poppins font-normal text-[15px] mb-2 ${
              theme === "light" ? "text-[#5C5C5C]" : "text-[#D3C8DE]"
            }`}
          >
            By using Bull Byte, you agree to comply with and be bound by these
            Terms of Service. If you do not agree with any part of these terms,
            you may not access or use the platform.
          </p>

          {/* Section 3: How We Use Your Information */}
          <h3
            className={`font-poppins mt-3 mb-2 text-[15px] font-medium ${
              theme === "light" ? "text-[#0F0F0F]" : "text-white"
            }`}
          >
            2. Eligibility
          </h3>
          <p
            className={`font-poppins font-normal text-[15px] mb-2 ${
              theme === "light" ? "text-[#5C5C5C]" : "text-[#D3C8DE]"
            }`}
          >
            You must be at least 18 years old to use Bull Byte. By using our
            platform, you confirm that you meet this requirement and have the
            legal authority to enter into this agreement.
          </p>

          {/* Continue for other sections as needed */}
          {/* Section 4: Sharing Your Information */}
          <h3
            className={`font-poppins mt-3 mb-2 text-[15px] font-medium ${
              theme === "light" ? "text-[#0F0F0F]" : "text-white"
            }`}
          >
            3. Account Registration
          </h3>
          <p
            className={`font-poppins font-normal text-[15px] mb-2 ${
              theme === "light" ? "text-[#5C5C5C]" : "text-[#D3C8DE]"
            }`}
          >
            To access certain features of Bull Byte, you must create an account.
            You agree to provide accurate and complete information during
            registration and to keep your account details updated. You are
            responsible for safeguarding your account credentials and agree not
            to share your password with others.
          </p>

          {/* 4 point */}
          <h3
            className={`font-poppins mt-3 mb-2 text-[15px] font-medium ${
              theme === "light" ? "text-[#0F0F0F]" : "text-white"
            }`}
          >
            4. Use of Services
          </h3>
          <p
            className={`font-poppins font-normal text-[15px] mb-2 ${
              theme === "light" ? "text-[#5C5C5C]" : "text-[#D3C8DE]"
            }`}
          >
            Bull Byte provides tools for token creation, airdrops, liquidity
            management, market-making bots, and more. By using these services,
            you agree to:
          </p>
          <ul
            className={`list-none pl-2 font-poppins font-normal text-[15px] mb-2 ${
              theme === "light" ? "text-[#5C5C5C]" : "text-[#D3C8DE]"
            } space-y-2`}
          >
            <li>• Comply with all applicable laws and regulations.</li>
            <li>
              • Not use the platform for any illegal or fraudulent activities.
            </li>
            <li>
              • Only engage with blockchain assets and tokens that you own or
              have lawful rights to manage.
            </li>
          </ul>
          {/* 5 point */}
          <h3
            className={`font-poppins mt-3 mb-2 text-[15px] font-medium ${
              theme === "light" ? "text-[#0F0F0F]" : "text-white"
            }`}
          >
            5. Fees and Payments
          </h3>
          <p
            className={`font-poppins font-normal text-[15px] mb-2 ${
              theme === "light" ? "text-[#5C5C5C]" : "text-[#D3C8DE]"
            }`}
          >
            Certain services on Bull Byte may require payment of fees. By using
            these services, you agree to pay any applicable fees, which are
            clearly communicated on our platform. All payments are
            non-refundable unless otherwise stated
          </p>
          {/* 6 point */}
          <h3
            className={`font-poppins mt-3 mb-2 text-[15px] font-medium ${
              theme === "light" ? "text-[#0F0F0F]" : "text-white"
            }`}
          >
            6. User Conduct
          </h3>
          <p
            className={`font-poppins font-normal text-[15px] mb-2 ${
              theme === "light" ? "text-[#5C5C5C]" : "text-[#D3C8DE]"
            }`}
          >
            You agree not to:
          </p>
          <ul
            className={`list-none pl-2 font-poppins font-normal text-[15px] mb-2 ${
              theme === "light" ? "text-[#5C5C5C]" : "text-[#D3C8DE]"
            } space-y-2`}
          >
            <li>
              • Interfere with the functioning of Bull Byte or attempt to
              exploit vulnerabilities.
            </li>
            <li>
              • Use the platform to distribute malicious software or engage in
              unauthorized scraping or data collection.
            </li>
            <li>• Attempt to reverse engineer any aspect of the platform.</li>
          </ul>
          {/* 7 point */}
          <h3
            className={`font-poppins mt-3 mb-2 text-[15px] font-medium ${
              theme === "light" ? "text-[#0F0F0F]" : "text-white"
            }`}
          >
            7. Intellectual Property
          </h3>
          <p
            className={`font-poppins font-normal text-[15px] mb-2 ${
              theme === "light" ? "text-[#5C5C5C]" : "text-[#D3C8DE]"
            }`}
          >
            All content, software, and technology on the Bull Byte platform are
            the intellectual property of Bull Byte or its licensors.
          </p>
          <ul
            className={`list-none pl-2 font-poppins font-normal text-[15px] mb-2 ${
              theme === "light" ? "text-[#5C5C5C]" : "text-[#D3C8DE]"
            } space-y-2`}
          >
            <li>
              • You are granted a limited, non-exclusive license to use the
              platform solely for its intended purposes.
            </li>
            <li>
              • You may not copy, modify, distribute, or sell any part of Bull
              Byte without express written permission
            </li>
          </ul>

          {/* 8 point */}
          <h3
            className={`font-poppins mt-3 mb-2 text-[15px] font-medium ${
              theme === "light" ? "text-[#0F0F0F]" : "text-white"
            }`}
          >
            8. Limitation of Liability
          </h3>
          <p
            className={`font-poppins font-normal text-[15px] mb-2 ${
              theme === "light" ? "text-[#5C5C5C]" : "text-[#D3C8DE]"
            }`}
          >
            Bull Byte is provided "as is" without any warranties, either express
            or implied. We are not liable for any damages, losses, or
            interruptions caused by system errors, network failures, or
            third-party services. By using Bull Byte, you acknowledge that
            blockchain technology involves inherent risks, and you accept full
            responsibility for your actions.
          </p>
          {/* 9  point */}
          <h3
            className={`font-poppins mt-3 mb-2 text-[15px] font-medium ${
              theme === "light" ? "text-[#0F0F0F]" : "text-white"
            }`}
          >
            9. Termination
          </h3>
          <p
            className={`font-poppins font-normal text-[15px] mb-2 ${
              theme === "light" ? "text-[#5C5C5C]" : "text-[#D3C8DE]"
            }`}
          >
            We reserve the right to suspend or terminate your account if you
            violate these Terms of Service. Upon termination, you will lose
            access to the platform and its services. Any outstanding
            obligations, such as payment of fees, will remain enforceable.
          </p>
          {/* 10  point */}
          <h3
            className={`font-poppins mt-3 mb-2 text-[15px] font-medium ${
              theme === "light" ? "text-[#0F0F0F]" : "text-white"
            }`}
          >
            10. Indemnification
          </h3>
          <p
            className={`font-poppins font-normal text-[15px] mb-2 ${
              theme === "light" ? "text-[#5C5C5C]" : "text-[#D3C8DE]"
            }`}
          >
            You agree to indemnify and hold Bull Byte harmless from any claims,
            damages, or expenses (including legal fees) arising from your use of
            the platform, violation of these terms, or infringement of
            third-party rights.
          </p>
          {/* 11  point */}
          <h3
            className={`font-poppins mt-3 mb-2 text-[15px] font-medium ${
              theme === "light" ? "text-[#0F0F0F]" : "text-white"
            }`}
          >
            11. Changes to Terms
          </h3>
          <p
            className={`font-poppins font-normal text-[15px] mb-2 ${
              theme === "light" ? "text-[#5C5C5C]" : "text-[#D3C8DE]"
            }`}
          >
            We may update these Terms of Service from time to time. If
            significant changes are made, we will notify you by email or through
            the platform. Continued use of Bull Byte after such updates
            indicates your acceptance of the new terms.
          </p>
        </div>
        <Footer showSpecialDiv={false} />
      </div>
    </>
  );
};

export default Page;
