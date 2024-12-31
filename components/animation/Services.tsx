import { useTheme } from "@/context/ThemeContext";
import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const { theme } = useTheme();

  const metrics = [
    {
      id: 1,
      title: "+2500",
      subtitle: "Projects",
      img: theme === "light" ? "./project.svg" : "./metric-2.svg",
    },
    {
      id: 2,
      title: "+7K",
      subtitle: "Users",
      img: theme === "light" ? "./users.svg" : "./metric-1.svg",
    },
    {
      id: 3,
      title: "+65M",
      subtitle: "Volume",
      img: theme === "light" ? "./volume.svg" : "./metric-3.svg",
    },
    {
      id: 4,
      title: "+120K",
      subtitle: "Transactions",
      img: theme === "light" ? "./transaction.svg" : "./metric-4.svg",
    },
  ];

  const text = ["B", "u", "l", "l", " ", "B", "y", "t", "e"];

  useEffect(() => {
    gsap.fromTo(
      ".bull__byte-2",
      { y: -350 },
      {
        y: 0,
        duration: 1,
        stagger: 0.041,
        ease: "ease.InOut",
        scrollTrigger: {
          trigger: ".services__container",
          start: "top 70%", // Adjust this value to control when animation starts
          end: "top 50%", // Adjust end point if you want the animation to last longer
        },
      }
    );
  }, []);

  useEffect(() => {
    const dashBoardCard = () => {
      gsap.fromTo(
        ".dashboard__img", // target element
        {
          rotationX: -45, // initial rotation angle (negative for starting effect)
          transformOrigin: "center center -200px", // set 3D perspective origin
        },
        {
          rotationX: 0, // final rotation angle
          scrollTrigger: {
            trigger: ".services__container", // element to trigger the scroll animation
            start: "top 50%", // start when 50% of the section is visible
            end: "top 20%", // end when 20% of the section is visible
            scrub: true, // smooth transition linked to scroll position
            markers: true, // visual markers for testing, you can remove them later
          },
          ease: "none",
        }
      );
    };

    dashBoardCard();
  }, []);

  return (
    <section className="services__container w-[85%] mt-10 mx-auto h-full relative sm:w-[90%]">
      <div className="py-12">
        <div className="mx-auto text-center">
          <div className="relative z-10">
            <div
              className={`${
                theme === "light"
                  ? "bg-[#E9EDFE]"
                  : "bg-[#4B4765] shadow-darkTitleShadow"
              } w-max px-5 mx-auto mb-5 py-3 rounded-full`}
            >
              <p className="text-center font-poppins text-[15px] font-semibold bg-clip-text bg-purple-gradient text-transparent">
                Bull Byte METRICS
              </p>
            </div>
            <h2
              className={`text-4xl font-poppins font-semibold ${
                theme === "light" ? "text-lightBlack" : " text-white"
              } mb-10`}
            >
              Numbers Speaking For Themselves
            </h2>
          </div>

          <div className="absolute z-0 top-14 sm:top-[10rem] overflow-hidden flex justify-center items-center gap-1 left-1/2 transform -translate-x-1/2">
            {text.map((ani, i) => (
              <h4
                key={i}
                className="bull__byte-2 font-poppins font-semibold text-[120px] leading-[1] sm:text-[45px] opacity-5 text-[#8D82D2]"
              >
                {ani}
              </h4>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 relative z-10">
            <div className="absolute -left-20 -top-16">
              <img
                src="./tri.svg"
                className="w-80 h-80 object-cover"
                alt="frame"
              />
            </div>
            {metrics.map((metric) => (
              <div
                key={metric.id}
                className={`hover-border h-[240px] sm:h-[280px] relative z-10 justify-center border-2 ${
                  theme === "light"
                    ? "bg-white border-[#D5CFFF] shadow-cardShadow"
                    : "bg-darkCard__1 shadow-darkCardShadow__1 border-darkCard__1"
                } rounded-lg p-6 flex flex-col items-center hover:shadow-xl`}
              >
                <div
                  className={`w-20 h-20 sm:h-24 sm:w-24 mb-1 flex justify-center items-center ${
                    theme === "light" ? "bg-[#E9EDFE]" : "bg-[#5C336B]"
                  } rounded-full`}
                >
                  <img
                    src={metric.img}
                    className="w-8 h-8 object-cover"
                    alt={metric.title}
                  />
                </div>
                <h3
                  className={`text-2xl font-semibold font-poppins ${
                    theme === "light" ? "text-[#1F1F1F]" : "text-white"
                  } my-2 sm:my-3.5`}
                >
                  {metric.title}
                </h3>
                <p
                  className={`${
                    theme === "light" ? "text-lightBlack" : " text-[#D1CEE7]"
                  } font-poppins text-sm font-normal`}
                >
                  {metric.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className={`dashboard__img w-full  relative mt-10 p-5 min-h-[70vh] rounded-[22px] ${
          theme === "light" ? "bg-white" : " bg-dashBoardCard"
        }`}
        style={{
          boxShadow:
            theme === "light"
              ? "0px 4px 30px 0px #573CFF82, 4px 0px 30px 0px #573CFF85"
              : "3px 3px 30px 0px #663877",
        }}
      >
        <img
          src={`./dashboard${theme === "light" ? "" : "-(1)"}.svg`}
          className="w-full h-full object-cover sm:h-screen"
          alt="dashboard"
        />
      </div>
    </section>
  );
};

export default Services;
