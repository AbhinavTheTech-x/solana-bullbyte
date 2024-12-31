import { useTheme } from "@/context/ThemeContext";

const Footer: React.FC = () => {
  const { theme } = useTheme();
  const socialIcons = [
    { src: "/Vector (4).svg", darkIcon: "./Vector (10).svg", alt: "Telegram" },
    {
      src: "/Vector (5).svg",
      darkIcon: "./Group 1171277354.svg",
      alt: "Telegram",
    },
    {
      src: "/Vector (7).svg",
      darkIcon: "./Group 1171277353.svg",
      alt: "Telegram",
    },
    {
      src: "/Vector (6).svg",
      darkIcon: "./Vector (11).svg",
      alt: "Telegram",
    },
  ];
  return (
    <footer
      className={`${
        theme === "light"
          ? "bg-white border-t shadow-[4px 0px 30px 0px #573CFF21] border-[#C4BFE4]"
          : " bg-darkCard__1 border-[#582F66] border-t-2 shadow-darkCardShadow__1"
      } w-full mt-10 `}
    >
      <div className=" mx-auto px-16 sm:px-6 py-8 sm:w-full">
        <div className="flex w-full justify-between items-center sm:flex-col sm:gap-5">
          <div className=" w-[280px] sm:w-full">
            <div className="logo">
              <img
                src={`${theme === "light" ? "./logo" : "./dark-logo"}.svg`}
                alt="Logo"
                className="w-[150px] h-8 sm:w-full sm:h-12"
              />
            </div>
            {/* Footer Tagline */}
            <p
              className={`text-left sm:text-center font-poppins font-normal text-sm sm:text-[16px] mt-4 ${
                theme === "light" ? "text-[#5C5C5C]" : "text-[#A8A6B8]"
              }`}
            >
              Impression Of The Final Publication Is Not Compromised.
            </p>
          </div>
          {/* Social Icons */}
          <div className="flex space-x-4 mb-6 sm:mb-2 sm:mt-3">
            {socialIcons.map((icon, index) => (
              <a
                key={index}
                href="#"
                className={`rounded-full w-10 h-10 sm:w-12 sm:h-12 flex justify-center items-center ${
                  theme === "light" ? "bg-[#F1E8FF]" : "bg-[#555273]" // Dark mode color
                }`}
              >
                <img
                  src={`${theme === "light" ? icon.src : icon.darkIcon}`}
                  alt={icon.alt}
                  className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                />
              </a>
            ))}
          </div>
          {/* Copyright */}
        </div>
      </div>
      <div
        className={`px-6 py-5 w-full  border-t sm:border-t-0 sm:pt-2 sm:pb-5 ${
          theme === "light" ? "border-[#E8E7ED]" : "border-[#615E7E]"
        }`}
      >
        <p
          className={`text-sm sm:text-[16px] ${
            theme === "light" ? "text-[#848288]" : "text-[#9390AE]"
          } text-center font-poppins font-normal`}
        >
          © 2024 BullByte. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
