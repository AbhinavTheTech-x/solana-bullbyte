import React from "react";
import Marquee from "@/components/animation/Testimonial";
import { useTheme } from "@/context/ThemeContext";

const TokenMarquee = () => {
  const tokens = [
    { imagePath: "./book.svg" },
    { imagePath: "./popCat.svg" },
    { imagePath: "./marinade.svg" },
    { imagePath: "./wen.svg" },
    { imagePath: "./moDeng.svg" },
    { imagePath: "./dogs.svg" },
    { imagePath: "./bonk.svg" },
    { imagePath: "./pyth.svg" },
    { imagePath: "./wormhole.svg" },
    { imagePath: "./catInDogWorld.svg" },
  ];
  const { theme } = useTheme();
  return (
    <div className="logo-marquee px-5 sm:px-0 pt-5 w-full">
      <div
        style={{ boxShadow: "4px 4px 30px 0px #573CFF1F" }}
        className={`rounded-xl sm:rounded-none px-4 py-2 flex justify-start items-center border ${
          theme === "light"
            ? "bg-white border-[#D1CDEA]"
            : "bg-[#2A1843] border-none" // Dark mode colors
        }`}
      >
        <h4
          className={`font-semibold font-poppins text-sm ${
            theme === "light" ? "text-black" : "text-white"
          }`}
        >
          Promoted:-
        </h4>

        <Marquee>
          {tokens.map((token, i) => {
            return (
              <div key={i} className=" flex gap-8">
                <div className="flex gap-1 justify-center items-center">
                  <h5
                    className={`font-medium font-poppins text-sm ${
                      theme === "light" ? "text-black" : "text-white"
                    }`}
                  >
                    #{i}
                  </h5>
                  <img
                    src={token.imagePath}
                    className="w-7 h-7 object-cover rounded-full"
                    alt="logo"
                  />
                </div>
              </div>
            );
          })}
        </Marquee>
      </div>
    </div>
  );
};

export default TokenMarquee;
