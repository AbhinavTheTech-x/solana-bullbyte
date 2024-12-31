interface MenuItemChild {
  name: string;
}

interface MenuItem {
  name: string;
  icon: string;
  isDropdown: boolean;
  activeIcon: string;
  link?: string;
  children?: (MenuItem | MenuItemChild)[];
}

export const menuItems: MenuItem[] = [
  {
    name: "Dashboard",
    icon: "./dash.svg",
    isDropdown: false,
    activeIcon: "./dash-active.svg",
    link: "/dashboard",
  },
  {
    name: "Solana",
    icon: "./dash-1.svg",
    isDropdown: true,
    children: [
      { name: "V1 Token Creation" },
      { name: "V2 Token Creation" },
      { name: "Pool Creation" },
      { name: "View Token" },
      { name: "Update Token" },
      { name: "Token Lockers" },
      { name: "Update Metadata" },
      { name: "Wrap/Unwrap" },
      { name: "Token Mint" },
      { name: "Token Airdrop" },
      { name: "Token Lock" },
      { name: "Token Vesting" },
      { name: "Burner" },
      { name: "Scanner" },
      { name: "Freeze/Unfreeze Account" },
      { name: "Rugcheck" },
    ],
    activeIcon: "./dash-1-active.svg",
    link: "/solana",
  },
  {
    name: "Pumpkin Zone",
    icon: "./dash-3.svg",
    isDropdown: true,
    children: [
      { name: "Pump Launch And Buy" },
      { name: "Market Maker Batch Swap" },
      { name: "Anti Mev Volume Bot" },
      { name: "Bundled Sell Token" },
      { name: "Pump Buy Fans & Reply" },
      { name: "Batch Transfer" },
      { name: "Batch Wallet Generator" },
      { name: "Pump Open Buy" },
    ],
    activeIcon: "./dash-3-active.svg",
    link: "/pumpkin-zone",
  },
  {
    name: "Pump Micro Trading",
    icon: "./dash-4.svg",
    isDropdown: false,
    activeIcon: "./dash-4-active.svg",
    link: "/pump-micro-trading",
  },
  {
    name: "Pump Batch Trading",
    icon: "./dash-5.svg",
    isDropdown: false,
    activeIcon: "./dash-5-active.svg",
    link: "/pump-batch-trading",
  },
  {
    name: "Volume Bot",
    icon: "./dash-6.svg",
    isDropdown: true,
    children: [
      { name: "Volume Robot" },
      { name: "Moonshot Bot" },
      { name: "Bumpi Bot" },
      { name: "Create" },
      { name: "Manage" },
    ],
    activeIcon: "./dash-6-active.svg",
    link: "/volume-bot",
  },
  {
    name: "Pineapple Bundler",
    icon: "./dash-7.svg",
    isDropdown: false,
    activeIcon: "./dash-7-active.svg",
    link: "/pineapple-bundler",
  },
  {
    name: "Batching",
    icon: "./dash-8.svg",
    isDropdown: false,
    activeIcon: "./dash-8-active.svg",
    link: "/batching",
  },
  {
    name: "Token Management",
    icon: "./dash-9.svg",
    isDropdown: true,
    activeIcon: "./dash-8-active.svg",
    link: "/token-management",
  },
  {
    name: "Lime Light Robot",
    icon: "./dash-10.svg",
    isDropdown: false,
    activeIcon: "./dash-10-active.svg",
    link: "/lime-light-robot",
  },
  {
    name: "Sugar Bot",
    icon: "./sugarbot.svg",
    isDropdown: false,
    activeIcon: "./sugarbot-active.svg",
  },
  {
    name: "Sugar High",
    icon: "./sugarbot.svg",
    isDropdown: false,
    activeIcon: "./sugarbot-active.svg",
  },
  {
    name: "Liquidity Manage",
    icon: "./dash-11.svg",
    isDropdown: true,
    children: [
      { name: "Create OpenBook Id" },
      { name: "Create Liquidity" },
      { name: "Burn Liquidity" },
      { name: "Remove Liquidity" },
      { name: "Create Liquidity & Buy" },
      { name: "SnapShot" },
      { name: "Batch Wallet Freezer" },
    ],
    activeIcon: "./dash-11-active.svg",
    link: "/liquidity-manage",
  },
  {
    name: "Clone Solana Token",
    icon: "./dash-12.svg",
    isDropdown: false,
    activeIcon: "./dash-12-active.svg",
    link: "/clone-solana-token",
  },
  {
    name: "DexTool Trending Robot",
    icon: "./dash-13.svg",
    isDropdown: false,
    activeIcon: "./dash-13-active.svg",
    link: "/dextool-trending-robot",
  },
  {
    name: "Wallet Manager",
    icon: "./dash-14.svg",
    isDropdown: true,
    children: [{ name: "Wallets Generator" }, { name: "Custom Address" }],

    activeIcon: "./dash-14-active.svg",
    link: "/wallet-manager",
  },
  {
    name: "Market Maker Robots",
    icon: "./dash-15.svg",
    isDropdown: false,
    activeIcon: "./dash-15-active.svg",
    link: "/market-maker-robots",
  },
  {
    name: "Help Centre",
    icon: "./dash-16.svg",
    isDropdown: false,
    activeIcon: "./dash-16-active.svg",
    link: "/help-centre",
  },
  {
    name: "Web3 Blogs",
    icon: "./dash-17.svg",
    isDropdown: false,
    activeIcon: "./dash-17-active.svg",
    link: "/web3-blogs",
  },
];
