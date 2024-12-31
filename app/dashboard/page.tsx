"use client";

import Footer from "@/components/FooterTwo";
import React, { useEffect, useState, Suspense } from "react";
import { menuItems } from "@/data/MenuData";
import TokenMarquee from "@/components/TokenMarquee";
import DashBoardHeader from "@/components/DashBoardHeader";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import MobileMenu from "@/components/MobileMenu";
import SugarBot from "@/components/sugarBot/SugarBot";
import SugarHigh from "@/components/sugarHigh/SugarHigh";

const DashBoardContent = React.lazy(() => import("@/components/DashBoard"));
const TokenVOne = React.lazy(() => import("@/components/solana/TokenVOne"));
const TokenVTwo = React.lazy(() => import("@/components/solana/TokenVTwo"));
const ViewToken = React.lazy(() => import("@/components/solana/ViewToken"));
const UpdateToken = React.lazy(() => import("@/components/solana/UpdateToken"));
const PoolCreation = React.lazy(
  () => import("@/components/solana/PoolCreation")
);
const UpdateMetaData = React.lazy(
  () => import("@/components/solana/UpdateMetaData")
);
const TokenMint = React.lazy(() => import("@/components/solana/TokenMint"));
const TokenLockerOne = React.lazy(
  () => import("@/components/solana/TokenLockerOne")
);
const Wrap = React.lazy(() => import("@/components/solana/Wrap"));
const Locker = React.lazy(() => import("@/components/solana/Locker"));
const Vesting = React.lazy(() => import("@/components/solana/Vesting"));
const Scanner = React.lazy(() => import("@/components/solana/Scanner"));
const FreezeAccount = React.lazy(
  () => import("@/components/solana/FreezeAccount")
);
const TokenAirDrop = React.lazy(
  () => import("@/components/solana/TokenAirDrop")
);
const Burner = React.lazy(() => import("@/components/solana/Burner"));
const PumpLaunchAndBuy = React.lazy(
  () => import("@/components/pump/PumpLaunchAndBuy")
);
const BatchTransfer = React.lazy(
  () => import("@/components/pump/BatchTransfer")
);
const PumpFanReply = React.lazy(() => import("@/components/pump/PumpFanReply"));
const BatchWalletGenerator = React.lazy(
  () => import("@/components/pump/BatchWalletGenerator")
);
const PumpOpenBundleBuy = React.lazy(
  () => import("@/components/pump/PumpOpenBundleBuy")
);
const PumpMicroTrading = React.lazy(
  () => import("@/components/pumpmicrorading/PumpMicroTrading")
);
const TokenClone = React.lazy(
  () => import("@/components/tokenclone/TokenClone")
);
const DexToolTrendingRobot = React.lazy(
  () => import("@/components/dexTooltrendingrobot/DexToolTrendingRobot")
);
const HelpCenter = React.lazy(
  () => import("@/components/helpcenter/HelpCenter")
);
const WebBlogs = React.lazy(() => import("@/components/webblogs/WebBlogs"));
const Batching = React.lazy(() => import("@/components/batching/Batching"));
const MarketMakerRobots = React.lazy(
  () => import("@/components/marketmakerrobots/MarketMakerRobots")
);
const BatchTrading = React.lazy(
  () => import("@/components/batchTrading/BatchTrading")
);
const LimeLightRobot = React.lazy(
  () => import("@/components/limelightrobot/LimeLightRobot")
);
const PineappleBundler = React.lazy(
  () => import("@/components/pineapplebundler/PineappleBundler")
);
const WalletGenerator = React.lazy(
  () => import("@/components/walletmanager/WalletGenerator")
);
const CustomAddress = React.lazy(
  () => import("@/components/walletmanager/CustomAddress")
);
const VolumeRobot = React.lazy(
  () => import("@/components/volumebot/VolumeRobot")
);
const VolumeCreateBot = React.lazy(
  () => import("@/components/volumebot/VolumeCreateBot")
);
const MoonshotBot = React.lazy(
  () => import("@/components/volumebot/MoonshotBot")
);
const LiquidityManage = React.lazy(
  () => import("@/components/liquiditymanage/LiquidityManage")
);
const CreateLiquidity = React.lazy(
  () => import("@/components/liquiditymanage/CreateLiquidity")
);
const BurnLiquidity = React.lazy(
  () => import("@/components/liquiditymanage/BurnLiquidity")
);
const RemoveLiquidity = React.lazy(
  () => import("@/components/liquiditymanage/RemoveLiquidity")
);
const CreateLiquidityBuy = React.lazy(
  () => import("@/components/liquiditymanage/CreateLiquidityBuy")
);
const SnapShot = React.lazy(
  () => import("@/components/liquiditymanage/SnapShot")
);
const BatchWalletFreezer = React.lazy(
  () => import("@/components/liquiditymanage/BatchWalletFreezer")
);

const DashBoard: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>("Dashboard");
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);
  const [fullWidth, setFullWidth] = useState(false);
  const [activeSubItem, setActiveSubItem] = useState<{ [key: string]: string }>(
    {}
  );
  const { theme } = useTheme();

  const isActive = (name: string) => activeItem === name;

  const toggleDropdown = (name: string, isDropdown: boolean) => {
    if (isDropdown) {
      // Handle dropdown items
      setOpenDropdowns((prevOpenDropdowns) =>
        prevOpenDropdowns.includes(name) ? [] : [name]
      );

      if (!openDropdowns.includes(name)) {
        const item = menuItems.find((item) => item.name === name);
        const firstChildName = item?.children?.[0]?.name;
        if (firstChildName) {
          setActiveSubItem((prevState) => ({
            ...prevState,
            [name]: firstChildName,
          }));
        }
      }
    } else {
      // Handle non-dropdown items
      setOpenDropdowns([]); // Close any open dropdowns
      setActiveItem(name); // Set active item to the clicked non-dropdown item
    }
  };

  // Render main and submenu items
  const renderMenuItem = (item: (typeof menuItems)[0]) => (
    <div key={item.name} className="w-full relative h-full overflow-hidden">
      <div
        onClick={() => {
          toggleDropdown(item.name, item.isDropdown);
          setActiveItem(item.name);
        }}
        className={`flex items-center gap-1.5 w-full px-1 py-2.5 cursor-pointer rounded-lg overflow-hidden transition-colors ${
          isActive(item.name)
            ? theme === "light"
              ? "bg-white text-[#573CFF]"
              : "bg-[#402B5E] text-[#FCFCFC]" // Active dark mode colors
            : theme === "light"
            ? "text-[#343434]"
            : "text-[#A19DBA]" // Non-active dark mode colors
        }`}
      >
        <img
          src={isActive(item.name) ? item.activeIcon : item.icon}
          className="w-3.5 h-3.5 object-contain"
          alt={`${item.name} icon`}
        />
        {!fullWidth && (
          <>
            <div className=" overflow-hidden">
              <motion.h6
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "backInOut" }}
                className="font-poppins text-[10px] font-normal"
              >
                {item.name}
              </motion.h6>
            </div>
            {item.isDropdown && (
              <div className=" overflow-hidden">
                <motion.img
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "backInOut" }}
                  src="./arrow-down.svg"
                  alt="arrow"
                  className={`w-3 h-3 object-cover transition-transform ${
                    openDropdowns.includes(item.name) ? "rotate-180" : ""
                  }`}
                />
              </div>
            )}
          </>
        )}
      </div>

      {/* Render sub-menu items if dropdown is open */}
      {!fullWidth && (
        <>
          {item.isDropdown && openDropdowns.includes(item.name) && (
            <div className="flex flex-col pl-2">
              {item.children?.map((child) => (
                <div
                  key={child.name}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveSubItem((prevState) => ({
                      ...prevState,
                      [item.name]: child.name,
                    }));
                    setActiveItem(item.name);
                  }}
                  className={`flex items-center gap-1 px-3 py-2 cursor-pointer rounded-lg transition-colors ${
                    activeSubItem[item.name] === child.name
                      ? theme === "light"
                        ? "bg-white text-[#573CFF]"
                        : "bg-[#402B5E] text-[#FCFCFC]" // Active dark mode colors
                      : theme === "light"
                      ? "text-[#646464]"
                      : "text-[#A19DBA]" // Non-active dark mode colors
                  }`}
                >
                  <h6 className="font-poppins text-[11px]">{child.name}</h6>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [activeItem, activeSubItem]);

  return (
    <div
      className={`w-full h-full relative ${
        theme === "light" ? "bg-white" : "bg-darkMode"
      }`}
    >
      <div className="w-full flex justify-between items-start h-full">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, width: "2.5rem" }}
            animate={{
              opacity: 1,
              width: fullWidth ? "2.5rem" : "auto",
            }}
            exit={{ opacity: 0, width: "2.5rem" }}
            transition={{
              ease: "easeInOut",
              duration: 0.8,
            }}
            onMouseEnter={() => setFullWidth(false)}
            className={`${
              theme === "light"
                ? "bg-leftSideBar border-[#ECE9FF]"
                : "bg-[#2A1843] border-[#634A86]"
            } border-r  rounded-br-xl overflow-hidden min-h-screen h-full relative flex justify-start py-2 items-center flex-col sm:hidden`}
          >
            <div className="logo">
              <img src="/logo.svg" alt="Logo" className="w-[120px] h-8" />
            </div>

            <div className="menu-list w-full h-full relative mt-10 px-1.5">
              <div className="flex flex-col justify-start items-center gap-2">
                {menuItems.map((item) => renderMenuItem(item))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <Suspense fallback={<div>Loading...</div>}>
          <div
            className={`${
              fullWidth ? "w-[calc(100%-40px)]" : "w-[calc(100%-10rem)]"
            } h-full relative flex justify-center items-center flex-col sm:w-full`}
          >
            <div className=" w-full sm:hidden md:hidden">
              <DashBoardHeader
                fullWidth={fullWidth}
                setFullWidth={setFullWidth}
              />
            </div>
            <TokenMarquee />
            <div className=" w-full hidden sm:block md:block px-3 my-3">
              <MobileMenu />
            </div>
            {activeItem === "Dashboard" && <DashBoardContent />}
            {activeItem === "Solana" && (
              <>
                {activeSubItem["Solana"] === "V1 Token Creation" && (
                  <TokenVOne />
                )}
                {activeSubItem["Solana"] === "V2 Token Creation" && (
                  <TokenVTwo />
                )}
                {activeSubItem["Solana"] === "Pool Creation" && (
                  <PoolCreation />
                )}
                {activeSubItem["Solana"] === "View Token" && <ViewToken />}
                {activeSubItem["Solana"] === "Update Token" && <UpdateToken />}
                {activeSubItem["Solana"] === "Update Metadata" && (
                  <UpdateMetaData />
                )}
                {activeSubItem["Solana"] === "Token Mint" && <TokenMint />}
                {activeSubItem["Solana"] === "Token Lockers" && (
                  <TokenLockerOne />
                )}
                {activeSubItem["Solana"] === "Wrap/Unwrap" && <Wrap />}
                {activeSubItem["Solana"] === "Token Lock" && <Locker />}
                {activeSubItem["Solana"] === "Token Vesting" && <Vesting />}
                {activeSubItem["Solana"] === "Scanner" && <Scanner />}
                {activeSubItem["Solana"] === "Burner" && <Burner />}
                {activeSubItem["Solana"] === "Token Airdrop" && (
                  <TokenAirDrop />
                )}
                {activeSubItem["Solana"] === "Freeze/Unfreeze Account" && (
                  <FreezeAccount />
                )}
              </>
            )}
            {activeItem === "Pumpkin Zone" && (
              <>
                {activeSubItem["Pumpkin Zone"] === "Pump Launch And Buy" && (
                  <PumpLaunchAndBuy />
                )}
                {activeSubItem["Pumpkin Zone"] === "Batch Transfer" && (
                  <BatchTransfer />
                )}
                {activeSubItem["Pumpkin Zone"] === "Pump Buy Fans & Reply" && (
                  <PumpFanReply />
                )}
                {activeSubItem["Pumpkin Zone"] === "Batch Wallet Generator" && (
                  <BatchWalletGenerator />
                )}
                {activeSubItem["Pumpkin Zone"] === "Pump Open Buy" && (
                  <PumpOpenBundleBuy />
                )}
              </>
            )}
            {activeItem === "Volume Bot" && (
              <>
                {activeSubItem["Volume Bot"] === "Volume Robot" && (
                  <VolumeRobot />
                )}
                {activeSubItem["Volume Bot"] === "Moonshot Bot" && (
                  <MoonshotBot />
                )}
                {activeSubItem["Volume Bot"] === "Bumpi Bot" && (
                  <PumpFanReply />
                )}
                {activeSubItem["Volume Bot"] === "Create" && (
                  <VolumeCreateBot />
                )}
                {activeSubItem["Volume Bot"] === "Manage" && (
                  <PumpOpenBundleBuy />
                )}
              </>
            )}
            {activeItem === "Liquidity Manage" && (
              <>
                {activeSubItem["Liquidity Manage"] === "Create OpenBook Id" && (
                  <LiquidityManage />
                )}
                {activeSubItem["Liquidity Manage"] === "Create Liquidity" && (
                  <CreateLiquidity />
                )}
                {activeSubItem["Liquidity Manage"] === "Burn Liquidity" && (
                  <BurnLiquidity />
                )}
                {activeSubItem["Liquidity Manage"] === "Remove Liquidity" && (
                  <RemoveLiquidity />
                )}
                {activeSubItem["Liquidity Manage"] ===
                  "Create Liquidity & Buy" && <CreateLiquidityBuy />}
                {activeSubItem["Liquidity Manage"] === "SnapShot" && (
                  <SnapShot />
                )}
                {activeSubItem["Liquidity Manage"] ===
                  "Batch Wallet Freezer" && <BatchWalletFreezer />}
              </>
            )}
            {activeItem === "Wallet Manager" && (
              <>
                {activeSubItem["Wallet Manager"] === "Wallets Generator" && (
                  <WalletGenerator />
                )}
                {activeSubItem["Wallet Manager"] === "Custom Address" && (
                  <CustomAddress />
                )}
              </>
            )}

            {activeItem === "Pump Micro Trading" && <PumpMicroTrading />}
            {activeItem === "Pump Batch Trading" && <BatchTrading />}
            {activeItem === "Clone Solana Token" && <TokenClone />}
            {activeItem === "DexTool Trending Robot" && (
              <DexToolTrendingRobot />
            )}
            {activeItem === "Pineapple Bundler" && <PineappleBundler />}
            {activeItem === "Lime Light Robot" && <LimeLightRobot />}
            {activeItem === "Sugar Bot" && <SugarBot />}
            {activeItem === "Sugar High" && <SugarHigh />}
            {activeItem === "Batching" && <Batching />}
            {activeItem === "Market Maker Robots" && <MarketMakerRobots />}
            {activeItem === "Help Centre" && <HelpCenter />}
            {activeItem === "Web3 Blogs" && <WebBlogs />}
          </div>
        </Suspense>
        <div
          className={`w-1/2 sm:block hidden ${
            theme === "light"
              ? "bg-white"
              : "bg-[#4C3966] text-[#D8D4F4] border-none"
          } rounded-lg h-max p-3`}
        >
          <div className="flex flex-col justify-start items-center gap-2 w-full">
            {menuItems.map((item) => renderMenuItem(item))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashBoard;
