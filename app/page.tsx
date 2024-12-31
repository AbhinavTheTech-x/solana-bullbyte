"use client";
import Navbar from "@/components/Navbar";
import MarqueeDemo from "@/components/TestimonialCard";
import CobeScaled from "@/components/animation/Globe";
import GridPattern from "@/components/animation/GridBg";
import Footer from "@/components/Footer";
import { useTheme } from "@/context/ThemeContext";
import { Icons, shipData, blogs } from "@/data/Data";
import MobileMenu from "@/components/MobileMenu";
import { useEffect, useState } from "react";
import gsap from "gsap";
import Hero from "@/components/animation/Hero";
import Services from "@/components/animation/Services";
import ChooseBy from "@/components/animation/ChooseBy";

export default function Home() {
  const { theme } = useTheme();
  const [isTopHeaderShadow, setIsTopHeaderShadow] = useState(true);

  useEffect(() => {
    // Animation function
    const animateText = () => {
      gsap.fromTo(
        ".bull__byte",
        {
          y: -350,
        },
        {
          y: 0,
          duration: 1,
          stagger: 0.041,
          ease: "ease.InOut",
        }
      );
    };

    animateText();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsTopHeaderShadow(false);
      } else {
        setIsTopHeaderShadow(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        id="mainContainer"
        className={`w-full main__container h-full relative z-30 ${
          theme === "light" ? "bg-white" : "bg-darkMode"
        } overflow-hidden`}
      >
        {isTopHeaderShadow && (
          <>
            <div
              className={` bg-[#F6FE51]
           rounded-full w-[200px] h-[250px] blur-[150px] absolute top-6 z-0 left-10`}
            />{" "}
            <div
              className={`${
                theme === "light" ? "bg-[#7DF464]" : " bg-[#573CFF]"
              } rounded-full w-[200px] h-[150px] blur-[150px] absolute -top-28 z-0  left-40`}
            />
            <div
              className={`${
                theme === "light" ? "bg-[#573CFF]" : " bg-darkMode"
              } rounded-full w-[200px] h-[250px] blur-[150px] absolute z-10 -top-36 right-0`}
            />
          </>
        )}
        <header
          className={`$ ${
            theme === "light"
              ? "bg-purple-gradient"
              : "bg-[#270B32] shadow-darkTopHeader "
          }  z-10 relative h-16 w-full flex justify-center items-center`}
        >
          <p className=" text-center text-white font-poppins font-normal text-[14px] capitalize">
            Dummy text is nonsensical.
          </p>
        </header>
        <section
          className={`hero-section h-full relative z-40  ${
            theme === "light" ? "bg-[#F9F8FF]" : "bg-darkMode"
          }  w-full`}
        >
          <div className="sm:hidden block">
            <Navbar />
          </div>
          <div className="hidden sm:block md:block w-full px-5 sm:px-3 py-2">
            <MobileMenu />
          </div>
          <Hero />
        </section>

        <Services />
        <ChooseBy />
        <section
          className={`relative ${
            theme === "light"
              ? "bg-cardBg"
              : "bg-darkCard__1 shadow-darkCardShadow__1 border-darkCard__1"
          } overflow-hidden p-8 rounded-[22px] w-[85%] sm:w-[90%] sm:p-5 sm:flex-col mt-20 mx-auto h-[270px] flex justify-between items-center`}
        >
          <div className=" w-full sm:w-full">
            <div
              className={`${
                theme === "light"
                  ? "bg-[#E9EDFE] shadow-normalShadow"
                  : "bg-[#4B4765]"
              }
                 w-max px-5 mr-auto sm:mx-auto mb-6 py-3 rounded-full`}
            >
              <h3 className="text-sm bg-clip-text bg-purple-gradient text-transparent font-poppins font-normal">
                Bull Byte Ecosystem
              </h3>
            </div>
            <h2
              className={`text-3xl font-semibold font-poppins ${
                theme === "light" ? "text-lightBlack" : " text-white"
              }  mb-4`}
            >
              Bull Byte
            </h2>
            <p
              className={` text-[16px] font-normal ${
                theme === "light" ? "text-[#5C5C5C]" : " text-[#F1EEFF]"
              } `}
            >
              Solana Create Token & Airdrop Tool & Market Bot. Create Token,
              OpenBook, Burn Liquidity, Make Airdrop, and Robot Market Making on
              Solana with SlerTools, helping you easily build successful
              projects.
            </p>
          </div>
          <div className=" w-[35%]">
            <div className="relative flex justify-center items-center overflow-hidden rotate-[130deg]  flex-col gap-6 sm:h-[300px] sm:rotate-[160deg]">
              <div className=" flex justify-start animate-infinite-scroll items-center gap-4">
                {[...Icons, ...Icons].map((icon, index) => (
                  <div
                    key={index}
                    className={`rounded-xl ${
                      theme === "light" ? "bg-white" : "bg-[#5C336B]"
                    } 
                  flex justify-center items-center w-16 h-16`}
                  >
                    <img
                      src={icon.src}
                      alt={icon.alt}
                      className="w-10 h-10 object-cover"
                    />
                  </div>
                ))}
              </div>

              <div className="flex justify-center animate-infinite-scroll-2 items-center gap-4">
                {[...Icons, ...Icons].map((icon, index) => (
                  <div
                    key={index}
                    className={`rounded-xl ${
                      theme === "light" ? "bg-white" : "bg-[#5C336B]"
                    } 
                  flex justify-center items-center w-16 h-16`}
                  >
                    <img
                      src={icon.src}
                      alt={icon.alt}
                      className="w-10 h-10 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Services Section  */}
        <section
          className={`w-[85%] mt-20 mx-auto h-full relative border-2 sm:w-[90%]
            ${
              theme === "light"
                ? "bg-white"
                : " bg-darkCard__1 shadow-darkCardShadow__1 border-darkCard__1"
            } rounded-[22px] p-5`}
        >
          <div
            className={`${
              theme === "light"
                ? "bg-transparent"
                : " bg-darkCard__1 shadow-darkCardShadow__1 border-darkCard__1"
            } rounded-[22px] border-2 px-5 py-4 w-full overflow-hidden`}
          >
            <h6
              className={`font-poppins capitalize font-semibold ${
                theme === "light" ? "text-black" : "text-white"
              } text-2xl mb-5`}
            >
              Ship code fast automate everything
            </h6>
            <div className="flex justify-start animate-infinite-scroll-3 items-center  overflow-hidden">
              {[...shipData, ...shipData].map((metric) => (
                <div
                  key={metric.id}
                  className={`hover-border w-[300px] h-[260px] my-2 overflow-hidden justify-center border-2  ${
                    theme === "light"
                      ? "bg-white border-[#D5CFFF] shadow-cardShadow"
                      : "bg-darkCard__1 shadow-darkCardShadow__1 border-darkCard__1"
                  } rounded-lg p-6 flex flex-col items-center hover:shadow-xl mx-2 `} // Added some horizontal spacing
                >
                  <div
                    className={`w-16 h-16 mb-3 flex justify-center items-center ${
                      theme === "light" ? "bg-[#E9EDFE]" : "bg-[#5C336B]"
                    } rounded-full`}
                  >
                    <img
                      src={`${theme === "light" ? metric.img : metric.darkImg}`}
                      className="w-8 h-8 object-cover"
                      alt={metric.title}
                    />
                  </div>
                  <h3
                    className={`text-[16px] font-semibold font-poppins ${
                      theme === "light" ? "text-[#1F1F1F]" : " text-white"
                    } mb-2`}
                  >
                    {metric.title}
                  </h3>
                  <p
                    className={`${
                      theme === "light" ? "text-lightBlack" : " text-[#C7C5D6]"
                    }  h-20 text-wrap text-center font-poppins text-xs font-normal`}
                  >
                    {metric.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* </div> */}
        </section>
        {/* Bento Section  */}
        <section className="w-[85%] mt-20 mx-auto h-full relative pb-20 sm:w-[90%]">
          <div className=" relative z-10">
            <div
              className={`${
                theme === "light"
                  ? "bg-[#E9EDFE]"
                  : "bg-[#4B4765] shadow-darkTitleShadow"
              } w-max px-5 mx-auto mb-5 py-3 rounded-full`}
            >
              <p className="text-center font-poppins text-[15px] font-semibold bg-clip-text bg-purple-gradient text-transparent">
                CARDS CONTENT SECTION
              </p>
            </div>
            <h2
              className={`text-4xl font-poppins text-center font-semibold ${
                theme === "light" ? "text-lightBlack" : "text-white"
              } mb-10`}
            >
              Our Key Features
            </h2>
          </div>

          <div className=" absolute z-0 top-0 left-1/2 transform -translate-x-1/2">
            <h4 className=" font-poppins font-semibold text-[120px] opacity-5 text-[#8D82D2]">
              Bull Byte
            </h4>
          </div>
          <div
            className={`bento-grid-1 flex justify-between sm:flex-col sm:gap-4 items-center w-full gap-5 relative z-10`}
          >
            <div className=" absolute -left-20 -top-16">
              <img
                src="./circle.svg"
                className=" w-60 h-60 object-cover"
                alt="frame"
              />
            </div>
            <div
              className={`box-1 ${
                theme === "light"
                  ? "bg-bentoBG"
                  : "bg-darkCard__1 shadow-darkCardShadow__1 border-darkCard__1"
              } rounded-[22px] h-[350px] sm:h-max sm:w-full p-5 w-[60%] z-10 relative`}
            >
              <h3
                className={`text-lg font-poppins text-left font-semibold ${
                  theme === "light" ? "text-lightBlack" : "text-white"
                } mb-2 mt-2`}
              >
                Multi Signature Wallet Integration
              </h3>
              <p
                className={`${
                  theme === "light" ? "text-[#5C5C5C]" : "text-[#F1EEFF]"
                } text-[15px] font-poppins font-normal`}
              >
                Bull Byte Protocol is a highly secure and scalable blockchain
                platform that aims to provide a secure and transparent solution
                for building and managing decentralized applications.
              </p>
              <div className="flex justify-end items-center sm:justify-center sm:my-2">
                <img
                  src="./card-2.svg"
                  className=" w-56 h-52 relative z-0 sm:w-36 sm:h-32 -mr-16 sm:-mr-14 object-cover"
                  alt=""
                />
                <img
                  src="./card-3.svg"
                  className=" w-60 h-52 relative z-10 sm:w-36 sm:h-32 -mr-24 sm:-mr-16 object-cover"
                  alt=""
                />
                <img
                  src="./card-1.svg"
                  className="w-52 h-52 relative z-20 sm:w-36 sm:h-32 object-cover"
                  alt=""
                />
              </div>
            </div>
            <div className="box-2 flex justify-between items-center flex-col h-[350px] gap-5 w-[40%] sm:w-full">
              <div
                className={`${
                  theme === "light"
                    ? "bg-bentoBG"
                    : "bg-darkCard__1 shadow-darkCardShadow__1 border-darkCard__1"
                } h-[200px] w-full rounded-[22px] p-5`}
              >
                <img
                  src="./smart.svg"
                  className=" w-10 h-10 object-cover"
                  alt=""
                />
                <h3
                  className={`text-[16px] font-semibold font-poppins  ${
                    theme === "light" ? "text-[#0F0F0F]" : "text-white"
                  } mt-1.5 mb-1`}
                >
                  Secure Token Contracts
                </h3>
                <p
                  className={`${
                    theme === "light" ? "text-[#5C5C5C]" : "text-[#F1EEFF]"
                  } text-[13px] font-poppins font-normal`}
                >
                  Our smart contracts are built with security in mind. Every
                  contract goes through rigorous testing and auditing to
                  identify and eliminate vulnerabilities
                </p>
              </div>
              <div
                className={`${
                  theme === "light"
                    ? "bg-bentoPurple"
                    : "bg-darkCard__1 shadow-darkCardShadow__1 border-darkCard__1"
                } h-[150px] w-full rounded-[22px] p-5`}
              >
                <h3
                  className={`text-[16px] font-semibold font-poppins  ${
                    theme === "light" ? "text-[#0F0F0F]" : "text-white"
                  } mt-1.5 mb-1`}
                >
                  DDoS Protection
                </h3>
                <p
                  className={`${
                    theme === "light" ? "text-[#5C5C5C]" : "text-[#F1EEFF]"
                  } text-[13px] font-poppins font-normal`}
                >
                  We utilize advanced Distributed Denial of Service (DDoS)
                  protection to ensure our platform is always accessible, even
                  during attempted attacks
                </p>
              </div>
            </div>
          </div>

          <div
            className={` flex justify-between items-center w-full gap-5 mt-5 sm:flex-col sm:gap-4`}
          >
            <div
              className={`box-1 ${
                theme === "light"
                  ? "bg-bentoBG"
                  : "bg-darkCard__1 shadow-darkCardShadow__1 border-darkCard__1"
              } rounded-[22px] h-[300px] p-5 w-[45%] sm:w-full overflow-hidden`}
            >
              <h3
                className={`text-[16px] font-semibold font-poppins  ${
                  theme === "light" ? "text-[#0F0F0F]" : "text-white"
                } mt-1.5 mb-1`}
              >
                End-to-End Encryption
              </h3>
              <p
                className={`${
                  theme === "light" ? "text-[#5C5C5C]" : "text-[#F1EEFF]"
                } text-[13px] font-poppins font-normal`}
              >
                All transactions and communications within Bull Byte are
                protected by end-to-end encryption, ensuring that your data
                remains secure and inaccessible to third parties.
              </p>

              <CobeScaled />
            </div>
            <div
              className={`box-1 ${
                theme === "light"
                  ? "bg-bentoBG"
                  : "bg-darkCard__1 shadow-darkCardShadow__1 border-darkCard__1"
              } rounded-[22px] h-[300px] p-5 w-[55%] sm:w-full sm:h-max`}
            >
              <h3
                className={`text-[16px] font-semibold font-poppins  ${
                  theme === "light" ? "text-[#0F0F0F]" : "text-white"
                } mt-1.5 mb-1`}
              >
                Automated Risk Monitoring
              </h3>
              <p
                className={`${
                  theme === "light" ? "text-[#5C5C5C]" : "text-[#F1EEFF]"
                } text-[13px] font-poppins font-normal`}
              >
                Bull Byte continuously monitors the platform for unusual or
                suspicious activities using our real-time risk detection system.
              </p>
              <div className="flex justify-between items-center w-full"></div>
            </div>
          </div>
        </section>
        <section className="relative w-full flex justify-center items-center pb-20">
          <GridPattern
            width={20}
            height={20}
            x={-1}
            y={-1}
            className="mask-image:linear-gradient(to_bottom_right, white, transparent, transparent)"
          />
          <div className="w-[85%] mt-20 mx-auto h-full relative z-10 sm:w-[90%]">
            <div className="relative z-10">
              <div
                className={`${
                  theme === "light"
                    ? "bg-[#E9EDFE]"
                    : "bg-[#4B4765] shadow-darkTitleShadow"
                } w-max px-5 mx-auto mb-5 py-3 rounded-full`}
              >
                <p className="text-center font-poppins text-[15px] font-semibold bg-clip-text bg-purple-gradient text-transparent">
                  Testimonial
                </p>
              </div>
              <h2
                className={`text-4xl text-center font-poppins font-semibold ${
                  theme === "light" ? "text-lightBlack" : "text-white"
                } mb-10`}
              >
                Bull Byte Protocol Testimonial
              </h2>
            </div>
            <div className="absolute z-0 -top-5 left-1/2 transform sm:top-[10rem] -translate-x-1/2 w-full text-center">
              <h4 className="font-poppins font-semibold text-[100px] sm:text-[45px] opacity-10 text-[#8D82D2]">
                Bull Byte
              </h4>
            </div>
            {/* Marquee content */}
            <MarqueeDemo />
          </div>
        </section>
        {/* Blog Section  */}
        <section className="w-[85%] mt-20 mx-auto h-full relative">
          <div className="relative z-10">
            <div
              className={`${
                theme === "light"
                  ? "bg-[#E9EDFE]"
                  : "bg-[#4B4765] shadow-darkTitleShadow"
              } w-[120px]  mx-auto mb-4 py-2.5 rounded-full`}
            >
              <p className="text-center font-poppins text-[15px] font-semibold bg-clip-text bg-purple-gradient text-transparent">
                Blogs
              </p>
            </div>
            <h2
              className={`text-4xl text-center font-poppins font-semibold ${
                theme === "light" ? "text-lightBlack" : "text-white"
              } mb-10`}
            >
              Bull Byte protocol Blogs
            </h2>
          </div>
          <div className=" absolute z-0  -top-5 left-1/2 transform sm:top-[10rem] -translate-x-1/2">
            <h4 className=" font-poppins font-semibold text-[100px] sm:text-[45px] opacity-5 text-[#8D82D2]">
              Bull Byte
            </h4>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-1 gap-10 w-full">
            {blogs.map((blog, i) => {
              return (
                <div
                  key={i}
                  className=" flex justify-start items-start flex-col w-full"
                >
                  <div className="w-full h-56 rounded-xl mb-5">
                    <img
                      src={blog.imgSrc}
                      alt="blog"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div
                    className={`${
                      theme === "light" ? "bg-[#E9EDFE]" : "bg-[#4B4765]"
                    } w-max px-4 mb-3 py-2 rounded-full`}
                  >
                    <p className="text-center font-poppins capitalize text-sm font-semibold bg-clip-text bg-purple-gradient text-transparent">
                      {blog.type}
                    </p>
                  </div>
                  <h6
                    className={` ${
                      theme === "light" ? "text-lightBlack" : "text-white"
                    }  font-poppins font-medium text-lg`}
                  >
                    {blog.descr}
                  </h6>
                </div>
              );
            })}
          </div>
          <div className=" w-full flex justify-center items-center mt-10">
            <button
              className={`flex ${
                theme === "light"
                  ? "btn-gradient-border"
                  : "bg-[#4B4765] shadow-darkTitleShadow"
              }  justify-center items-center gap-2 rounded-full w-max px-5 py-2.5 border border-transparent`}
            >
              <p className="font-poppins font-semibold text-[15px] bg-clip-text bg-purple-gradient text-transparent">
                More Stories
              </p>
              <img
                className="w-5 h-5 object-cover"
                src="./pruple-arrow (2).svg"
                alt="arrow"
              />
            </button>
          </div>
        </section>
        <Footer showSpecialDiv={true} />
      </div>
    </>
  );
}
