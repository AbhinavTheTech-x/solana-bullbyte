import React from "react";
import AnimatedDropdown from "./Dropdown";
import DarkModeButton from "./DarkModeButton";
import { useTheme } from "@/context/ThemeContext";
import CTAButton from "./CTAButton";

type DashBoardHeaderProps = {
  fullWidth: boolean;
  setFullWidth: React.Dispatch<React.SetStateAction<boolean>>;
};
const DashBoardHeader: React.FC<DashBoardHeaderProps> = ({
  fullWidth,
  setFullWidth,
}) => {
  const tokens = [
    { name: "Solana", src: "./solana.svg" },
    { name: "BSC", src: "./image (50).svg" },
    { name: "ETH", src: "./image (51).svg" },
    { name: "Base", src: "./image (52).svg" },
    { name: "Ton", src: "./ton.svg" },
    { name: "Tron", src: "./tron.svg" },
  ];
  const { theme } = useTheme();

  const SolanaContent = () => (
    <div className="flex flex-col w-28 items-start gap-3">
      {tokens.map((token, index) => (
        <div
          key={index}
          className="flex cursor-pointer items-center  w-full justify-start gap-3"
        >
          <img
            src={token.src}
            alt={`${token.name} logo`}
            className="w-7 h-7 object-cover"
          />
          <h6
            className={`font-poppins w-10 text-xs font-medium ${
              theme === "light" ? "text-[#363636]" : "text-[#D8D4F4]"
            }`}
          >
            {token.name}
          </h6>
        </div>
      ))}
    </div>
  );

  const DocumentationContent = () => (
    <div>
      <h3 className="font-semibold mb-3">Documentation</h3>
      <a href="#" className="block text-sm hover:underline">
        Getting Started
      </a>
      <a href="#" className="block text-sm hover:underline">
        API Reference
      </a>
      <a href="#" className="block text-sm hover:underline">
        Tutorials
      </a>
    </div>
  );

  const SupportContent = () => (
    <div>
      <h3 className="font-semibold mb-3">Support</h3>
      <a href="#" className="block text-sm hover:underline">
        Contact Us
      </a>
      <a href="#" className="block text-sm hover:underline">
        Help Center
      </a>
      <a href="#" className="block text-sm hover:underline">
        FAQs
      </a>
    </div>
  );

  return (
    <div
      className={`dashboard-header h-16 w-full ${
        theme === "light" ? "bg-white shadow-headerDashboard" : "bg-[#2A1843] "
      } flex justify-between items-center px-4`}
    >
      <div
        onClick={() => setFullWidth(!fullWidth)}
        className={`${
          theme === "light"
            ? "bg-white border-[#F1E7FF]"
            : "bg-[#4C3966] border-[#634A86]"
        } flex justify-center border cursor-pointer items-center rounded-full w-10 h-10`}
      >
        <img
          src={`./${theme === "light" ? "light-menu.svg" : "dark-menu-n.svg"}`}
          className={`${
            theme === "light" ? "w-6 h-6" : "w-5 h-5 "
          } object-contain`}
          alt="menu-btn"
        />
      </div>

      <div className="flex justify-center items-center gap-3">
        <div className="flex justify-center items-center gap-2">
          <AnimatedDropdown title="Solana" content={<SolanaContent />} />
          <AnimatedDropdown title="RFC" content={<DocumentationContent />} />
          <AnimatedDropdown title="Mainnet" content={<SupportContent />} />
        </div>
        <DarkModeButton />

        <CTAButton
          font="font-poppins font-semibold"
          text="  Connect"
          arrowSize="w-5 h-5" // Customize the arrow size
          paddingY="py-3"
          paddingX="px-6" // Customize the horizontal padding
          gap="gap-1" // Customize the gap between text and arrow
          onClick={() => console.log("Button clicked!")}
        />
      </div>
    </div>
  );
};

export default DashBoardHeader;
