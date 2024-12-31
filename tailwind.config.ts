import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBlack: "#363636",
        primaryBG: "#D9FE03",
        blueText: "#573CFF",
        lightblueBG: "#EBF3FC",
        darkMode: "#190C2F",
        inputDark: "#564075",
        darkNav: "#43234F",
        formDark: "#3F2D58",
        labelLight: "#231F20",
        labelDark: "#FCFCFC",
        darkModeSubHeading: "#C7C5DB",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        akatab: ["Akatab", "sans-serif"],
      },
      backgroundImage: {
        textPurple: "linear-gradient(90deg, #573CFF 0%, #B06AB3 100%)",
        leftSideBar: "linear-gradient(180deg, #F5F4FF 0%, #FFF4FF 100%)",
        "purple-gradient": "linear-gradient(90deg, #8777F5 0%, #B06AB3 100%)",
        lightPurpleBg: "linear-gradient(90deg, #EDEAFD 0%, #F2F1F1 100%)",
        tokenBg: "linear-gradient(94.71deg, #EFF3FF 15.94%, #FFEFF0 100%)",
        cardBg:
          "linear-gradient(94.71deg, #D9E3FF 15.94%, #E4D7F6 46.54%, #FFEFF0 100%)",
        bentoBG: "linear-gradient(94.71deg, #EFF3FF 15.94%, #FFEFF0 100%)",
        bentoPurple:
          "linear-gradient(99deg, #7B66FF 3.7%, #F5F0FF 46.97%, #806BFF 96.95%)",
        footerBg: "linear-gradient(133.2deg, #9293F9 25.78%, #FBE5F4 52.22%)",

        darkBtn: "linear-gradient(90deg, #8777F5 0%, #B06AB3 100%)",
        dashBoardCard: "linear-gradient(180deg, #491A4D 0%, #291A4A 100%)",

        darkHero:
          "linear-gradient(98.16deg, rgba(247, 250, 247, 0.08) 4.09%, rgba(238, 247, 241, 0.06) 94.3%)",
        darkCard__1: "linear-gradient(180deg, #491A4D 0%, #291A4A 100%)",
      },
      boxShadow: {
        normalShadow: "3px 3px 30px 0px #BAAEFF",
        cardShadow: " 3px 3px 30px 0px #907FF452",
        headerDashboard: "2px 3px 22px 0px #573CFF0D",
        darkNavShadow: "0px 4px 4px 0px #00000040",
        darkHeroShadow:
          "0px 4px 30px 0px #AA35B466, 0px 5px 26px 0px #5820FF66",
        darkCardShadow__1: " 3px 3px 30px 0px #663877",
        darkTopHeader: " 3px 3px 30px 0px #544899",
        darkTitleShadow: "0px 4px 20px 0px #645592",
        formDarkShadow: "4px 4px 30px 0px #3D54AB24",
      },
      borderColor: {
        darkNavBorder: "#45425B",
        darkCard__1: "#582F66",
        formDarkBorder: "#4B4868",
      },
      borderImage: {
        darkHeroBorder:
          "linear-gradient(91.83deg, #535059 0.87%, rgba(236, 238, 237, 0.04) 99.55%)",
      },

      backgroundClip: {
        text: "text",
      },
      textFillColor: {
        transparent: "transparent",
      },
      screens: {
        sm: { min: "219px", max: "640px" },
        md: { min: "641", max: "980px" },
      },
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        "shiny-text": "shiny-text 9s ease-in infinite",
      },

      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
        "shiny-text": {
          "0%, 90%, 100%": {
            "background-position": "calc(-100% - var(--shiny-width)) 0",
          },
          "30%, 80%": {
            "background-position": "calc(100% + var(--shiny-width)) 0",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
