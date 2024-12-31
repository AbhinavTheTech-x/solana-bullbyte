import React from "react";
import AnimatedBtn from "@/components/animation/AnimatedBtn";
import { useEffect } from "react";
import gsap from "gsap";
import { useTheme } from "@/context/ThemeContext";
import { TabHeader } from "../TabHeader";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const { theme } = useTheme();
  const text = ["B", "u", "l", "l", " ", "B", "y", "t", "e"];
  const headlineText = "All In One Blockchain Protocol";
  const paragraphText =
    "At Bull byte we provide cutting-edge tools for blockchain token developers to simplify and enhance token launches. Our platform integrates seamlessly with Solana and features automated purchase strategies, volume management, and multi-wallet bundling, helping you maximize visibility and prevent detection on trading platforms. With an intuitive interface, you’ll take control of your token's growth effortlessly.";

  // Split headline and paragraph text into words
  const splitHeadline = headlineText.split(" ");
  const splitText = paragraphText.split(" ");

  useEffect(() => {
    gsap.fromTo(
      ".text-reveal",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "ease.in",
      }
    );
  }, []);
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
    const heroContainer = document.querySelector(
      ".hero__container"
    ) as HTMLElement | null;

    if (heroContainer) {
      gsap.fromTo(
        heroContainer,
        { width: "95%" }, // Start width
        {
          width: "80%", // Target width
          scrollTrigger: {
            trigger: heroContainer,
            start: "20%",
            end: "50%",
            // markers: true,
            scrub: true,
            onUpdate: (self) => {
              const newWidth = 95 - 15 * self.progress; // Gradual increment based on scroll progress
              heroContainer.style.width = `${newWidth}%`;
            },
          },
        }
      );
    }
  }, []);

  return (
    <div
      className={`hero__container w-[95%] mt-20 mx-auto h-full relative z-50 sm:w-full ${
        theme === "light"
          ? "bg-white border-[#E9E5FF] rounded-tl-[22px] rounded-tr-[22px]"
          : "bg-darkHero rounded-[22px] border-[#535059] shadow-darkHeroShadow"
      } border-b  `}
    >
      <div className="flex justify-center items-center flex-col w-[80%] py-14 mx-auto sm:w-[90%]">
        <TabHeader />
        <div className=" overflow-hidden mt-12 mb-4">
          {splitHeadline.map((word, index) => (
            <h1
              key={index}
              className={`font-poppins inline-block overflow-hidden  text-[54px] leading-[1] font-bold sm:leading-tight ${
                theme === "light" ? "text-[#0f0f0f]" : "text-white"
              } text-center`}
            >
              <span className="inline-block text-reveal overflow-hidden mr-2">
                {word}
              </span>
            </h1>
          ))}
        </div>

        <div className=" overflow-hidden w-[760px] sm:w-full mx-auto text-center">
          {splitText.map((word, index) => (
            <p
              key={index}
              className={`inline-block overflow-hidden mr-1 text-center leading-4`}
            >
              <span
                className={`inline-block font-poppins font-normal text-reveal sm:text-[16px] sm:leading-[1.5] text-sm  leading-4 text-center ${
                  theme === "light" ? "text-[#5C5C5C]" : "text-[#F1EEFF]"
                }`}
              >
                {word}
              </span>
            </p>
          ))}
        </div>

        <div className=" absolute z-0 top-20 sm:top-[10rem] overflow-hidden flex justify-center items-center gap-1  left-1/2 transform -translate-x-1/2">
          {text.map((ani, i) => {
            return (
              <h4
                key={i}
                className="bull__byte font-poppins font-semibold text-[140px] leading-[1] sm:text-[45px] opacity-5 text-[#8D82D2]"
              >
                {ani}
              </h4>
            );
          })}
        </div>
        <div className="tooltip mt-8 mb-2 flex justify-center items-center gap-5 sm:mb-5">
          <div className="flex justify-center items-center">
            <div className=" rounded-full -mr-5 border-2 border-[#EAF6FF] border-solid flex justify-center items-center">
              <img
                src="./image (4).svg"
                alt="img"
                className=" w-12 h-12 object-cover rounded-full"
              />
            </div>
            <div className=" rounded-full -mr-5 border-2 border-[#EAF6FF] border-solid flex justify-center items-center">
              <img
                src="./image (2).svg"
                alt="img"
                className=" w-12 h-12 object-cover rounded-full"
              />
            </div>
            <div className=" rounded-full -mr-5 border-2 border-[#EAF6FF] border-solid flex justify-center items-center">
              <img
                src="./image (3).svg"
                alt="img"
                className=" w-12 h-12 object-cover rounded-full"
              />
            </div>
            <div className=" rounded-full border-2 border-[#EAF6FF] border-solid flex justify-center items-center">
              <img
                src="./image (1).svg"
                alt="img"
                className=" w-12 h-12 object-cover rounded-full"
              />
            </div>
          </div>
          <div className=" flex justify-start items-center flex-col">
            <p
              className={`font-poppins font-semibold text-sm ${
                theme === "light" ? "text-[#0f0f0f]" : "text-white"
              }`}
            >
              Trusted already by
            </p>
            <div className=" flex justify-start w-full items-center gap-2">
              <img
                src="./Star 1.svg"
                className=" w-3 h-3 object-cover"
                alt="star"
              />
              <p
                className={`font-poppins font-normal ${
                  theme === "light" ? "text-[#636363]" : "text-white"
                } text-xs`}
              >
                5.0 (3.1K Reviews)
              </p>
            </div>
          </div>
        </div>
        <AnimatedBtn
          font="font-poppins font-semibold"
          text="Enter Daap"
          arrowSize="w-5 h-5" // Customize the arrow size
          paddingY="py-3"
          paddingX="px-8 my-3 sm:my-5" // Customize the horizontal padding
          gap="gap-1" // Customize the gap between text and arrow
          onClick={() => console.log("Button clicked!")}
        />
      </div>
    </div>
  );
};

export default Hero;
