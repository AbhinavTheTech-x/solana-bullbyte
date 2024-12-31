import { useTheme } from "@/context/ThemeContext";
import React from "react";
import { tools, partners, stats } from "@/data/Data";

const DashBoard: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="dashboard-section w-full h-full flex justify-center items-center flex-col">
      <div className="p-5 sm:p-3 w-full">
        <div
          className={`h-full  rounded-xl px-8 py-16 w-full sm:px-3  ${
            theme === "light"
              ? "bg-white border border-[#D1CDEA] shadow-normalShadow"
              : "bg-[#2A1843] border-none" // Dark mode colors
          }`}
        >
          <div className="flex justify-between items-center w-full  sm:flex-col sm:gap-12 sm:px-4 sm:mb-5">
            <div className="content flex justify-center items-center flex-col gap-0 sm:gap-4 ml-5 sm:m-0">
              <div className="flex gap-5 justify-center items-start sm:gap-3">
                <img
                  src={`./${theme === "light" ? "bulltext" : "dark-bull"}.svg`}
                  className=" w-[340px] h-20 sm:w-[70%] sm:h-16 object-cover sm:object-contain"
                  alt=""
                />
                <img
                  src="./image (11).svg"
                  className=" w-48 h-16 object-cover sm:w-[30%] sm:h-12 rounded-full"
                  alt=""
                />
              </div>
              <div className="flex gap-16 justify-center items-center sm:gap-4">
                <img
                  src="./Star 5.svg"
                  className=" w-28 h-36 object-contain sm:w-16 sm:h-16"
                  alt=""
                />
                <div className=" relative">
                  <img
                    src={`./${theme === "light" ? "protocol" : "dark-pro"}.svg`}
                    className=" w-[340px] h-16 object-cover sm:w-[100%] sm:h-14 sm:object-contain"
                    alt="protocol"
                  />
                  <img
                    src={`./${theme === "light" ? "Line" : "dark-Line"}.svg`}
                    className=" absolute -right-16 -bottom-4 w-[180px] sm:w-[80px] sm:-right-6 h-2 object-cover"
                    alt="line"
                  />
                </div>
              </div>
            </div>
            <div className="img">
              <img
                src="./dashboard-im.svg"
                alt="dashboard"
                className=" w-[300px] h-[320px] object-cover sm:w-full sm:h-auto"
              />
            </div>
          </div>
          <div
            className={`w-full ${
              theme === "light"
                ? "bg-white border-[#D5CFFF] border shadow-[3px 3px 30px 0px #D4CFEE29]"
                : "bg-darkCard__1 shadow-darkCardShadow__1 border-darkCard__1 border-2"
            }  mt-8 rounded-xl  py-4 flex justify-between items-center sm:flex-col sm:gap-4 sm:py-8 sm:mt-12`}
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`flex items-center px-5 gap-3 sm:border-none ${
                  index === 0 ? "justify-start" : "justify-center"
                } 
                ${
                  index === stats.length - 1
                    ? "border-none"
                    : theme === "light"
                    ? "border-r border-[#D5CFFF]"
                    : "border-r border-[#5C336B]" // Dark mode border color
                } w-1/4 sm:w-full sm:justify-center`}
              >
                <div
                  className={`${
                    theme === "light"
                      ? "bg-[#F1EFFE] border border-[#E9E6FE]"
                      : "bg-[#5C336B] border-none"
                  } rounded-full w-12 h-12 sm:w-14 sm:h-14 flex justify-center items-center`}
                >
                  <img
                    src={`${theme === "light" ? stat.icon : stat.darkIcon}`}
                    className="w-6 h-6 object-cover"
                    alt="icon"
                  />
                </div>
                <div className="flex flex-col sm:w-[60%] sm:gap-1 justify-center items-start">
                  <h4
                    className={`text-xs font-poppins font-medium sm:text-sm ${
                      theme === "light" ? "text-[#747474]" : "text-[#8B88A6]" // Dark mode color for title
                    }`}
                  >
                    {stat.title}
                  </h4>
                  <h3
                    className={`mt-2 text-sm font-extrabold font-poppins sm:text-[16px] ${
                      theme === "light" ? "text-[#343434]" : "text-white" // Dark mode color for value
                    }`}
                  >
                    {stat.value}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div
            className={`w-full p-5 ${
              theme === "light"
                ? "bg-white shadow-normalShadow border border-[#D5CFFF] "
                : "bg-darkCard__1 shadow-darkCardShadow__1  border-darkCard__1 border-2"
            } mt-5 rounded-xl`}
          >
            <h3
              className={`text-sm font-poppins mb-4 font-medium sm:text-[16px] ${
                theme === "light" ? "bg-textPurple" : "bg-purple-gradient"
              } text-transparent bg-clip-text`}
            >
              Our Partners
            </h3>
            <div className=" flex justify-start items-center flex-wrap gap-x-14 gap-y-8 sm:gap-x-5 sm:gap-y-4 sm:justify-center">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className={`flex justify-center items-center ${
                    theme === "light"
                      ? "bg-white border border-[#E8E6F6] shadow-[3px 4px 30px 0px #00000026]"
                      : "bg-[#5C336B] border border-[#5C336B] shadow-darkCardShadow__1"
                  } w-20 h-20 rounded-lg  hover:shadow-lg transition-all`}
                >
                  <img
                    src={partner.logo}
                    className="w-14 h-14 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="w-full relative mt-8">
            <h5
              className={`font-poppins font-semibold text-xl ${
                theme === "light" ? "text-black" : "text-white" // Dark mode color for h5
              }`}
            >
              The Ultimate Tool Suite on Solana Network
            </h5>
            <p
              className={`font-poppins font-normal mt-2 text-sm sm:text-[16px] ${
                theme === "light" ? "text-black" : "text-[#BAB9C3]" // Dark mode color for p
              }`}
            >
              Solana Create Token & Airdrop Tool & Market Bot Create token,
              OpenBook, Burn liquidity, Make airdrop, and Robot market making on
              Solana with SlerfTools, helping you easily build successful
              projects.
            </p>
            <div
              className={`w-full ${
                theme === "light"
                  ? "bg-[#F5F4FF] border-[#DCD2EB] border shadow-[2px 2px 10px 0px #734EAB45]"
                  : "bg-darkCard__1 shadow-darkCardShadow__1 border-darkCard__1 border-2"
              }  mt-8 rounded-xl flex justify-between items-center`}
            >
              <div className="grid grid-cols-1 sm:grid-cols-1 sm:gap-5 sm:p-3 lg:grid-cols-4 gap-6 p-6">
                {tools.map((tool, index) => (
                  <div
                    key={index}
                    className={`rounded-xl py-5 border sm:py-8 ${
                      theme === "light"
                        ? "border-[#DCD2EB] bg-white shadow-[2px 2px 10px 0px #734EAB45]"
                        : "bg-[#5C336B] border border-[#7C728A] shadow-darkCardShadow__1"
                    } px-4 sm:px-7  text-center`}
                  >
                    <img
                      src={tool.image}
                      alt={tool.title}
                      className="h-12 w-12 mx-auto mb-4"
                    />
                    <h3
                      className={`font-semibold font-poppins text-[15px] sm:text-[16px] ${
                        theme === "light" ? "text-[#0F0F0F]" : "text-white" // Dark mode color for h3
                      }`}
                    >
                      {tool.title}
                    </h3>
                    <p
                      className={`font-poppins font-normal text-xs mt-2 sm:text-sm ${
                        theme === "light" ? "text-[#5C5C5C]" : "text-[#EAE7FA]" // Dark mode color for p
                      }`}
                    >
                      {tool.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
