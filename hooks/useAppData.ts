import { useCallback, useMemo } from "react";
import { get, set } from "../utils";
import { APP_DATA } from "../constants";
import { store } from "../state/StateProvider";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";

// app data initial state
const APP_DATA_INITIAL_STATE: AppData = {
  currentMint: "", // Use an empty string instead of null
  mintData: {},
  generatedWallets: [],
  importedWallets: [],
  removedWallets: [],
  zombieWallet: "",
  collectedAddress: "",
};

export type MintChild = {
  mintSecret: string;
  marketId: string;
  aTokenAmount: number;
  bTokenAmount: number;
  simulatedAmount: number;
  isRevoked: boolean;
  deployerPubKey: string;
  mintDecimals: number | null;
  minTokenAmountForEachWallet: number | null;
  maxTokenAmountForEachWallet: number | null;
  solAmountForEachWallet: number | null;
  buyAmounts: Record<string, number>;
};


const MINT_DATA_INITIAL_STATE: MintChild = {
  mintSecret: "",
  marketId: "",
  aTokenAmount: 0,
  bTokenAmount: 0,
  simulatedAmount: 0,
  isRevoked: true,
  deployerPubKey: "",
  mintDecimals: null, // Null is now allowed
  minTokenAmountForEachWallet: null, // Null is now allowed
  maxTokenAmountForEachWallet: null, // Null is now allowed
  solAmountForEachWallet: null, // Null is now allowed
  buyAmounts: {},
};

// app data keys
export enum AppDataKeys {
  CURRENT_MINT = "currentMint",
  MINT_DATA = "mintData",
  MINT_SECRET = "mintSecret",
  MARKET_ID = "marketId",
  A_TOKEN_AMOUNT = "aTokenAmount",
  B_TOKEN_AMOUNT = "bTokenAmount",
  SIMULATED_AMOUNT = "simulatedAmount",
  GENERATED_WALLETS = "generatedWallets",
  IMPORTED_WALLETS = "importedWallets",
  REMOVED_WALLETS = "removedWallets",
  ZOMBIE_WALLET = "zombieWallet",
  COLLECT_AT_ADDRESS = "collectedAddress",
  IS_REVOKED = "isRevoked",
  DEPLOYER_PUB_KEY = "deployerPubKey",
  MINT_DECIMALS = "mintDecimals",
  MIN_TOKEN_AMOUNT_FOR_EACH_WALLET = "minTokenAmountForEachWallet",
  MAX_TOKEN_AMOUNT_FOR_EACH_WALLET = "maxTokenAmountForEachWallet",
  SOL_AMOUNT_FOR_EACH_WALLET = "solAmountForEachWallet",
  BUY_AMOUNTS = "buyAmounts",
}

// mint data interface
interface MintData {
  [mint: string]: MintChild;
}

// app data interface
export interface AppData {
  currentMint: string;
  mintData: MintData;
  generatedWallets: string[];
  importedWallets: string[];
  removedWallets: string[];
  zombieWallet: string;
  collectedAddress: string;
}

export const useAppData = () => {
  const { forceRefreshedAppData } = store.useContainer();
  const { connection } = useConnection();
  const { connected, publicKey } = useWallet();

  return useMemo(() => {
    return get<AppData>(APP_DATA) ?? APP_DATA_INITIAL_STATE;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [forceRefreshedAppData, connection, connected, publicKey]);
};

export const useGetSpecificMintData = (mint?: string): [string, MintChild] => {
  let appData = useAppData();
  let appMintData = appData?.mintData;

  return useMemo(() => {
    let initial: MintChild =
      appMintData?.[appData?.currentMint] ?? MINT_DATA_INITIAL_STATE;

    let currentMint: string = appData?.currentMint ?? ""; // Default to empty string
    let mintData: MintChild =
      mint && appMintData?.[mint] ? appMintData[mint] : initial; // Ensure mint is defined

    return [currentMint, mintData];
  }, [appData, mint, appMintData]);
};


export const useGetMintIdsAndDeployerPubKeys = (): string[][] => {
  let appData = useAppData();
  return useMemo(() => {
    let mintData = appData?.mintData ?? {};
    if (Object.keys(mintData).length === 0) return [];
    return Object.keys(mintData).map((m) => [m, mintData[m]?.deployerPubKey]);
  }, [appData]);
};

export const useDispatchAppData = () => {
  const { refreshAppData, forceRefreshedAppData } = store.useContainer();
  return useCallback(
    <T>(stateKey: AppDataKeys, value: T) => {
      const existAppData = get<AppData>(APP_DATA) ?? APP_DATA_INITIAL_STATE;
      set<AppData>(APP_DATA, { ...existAppData, ...{ [stateKey]: value } });
      refreshAppData(forceRefreshedAppData + 1);
    },
    [refreshAppData, forceRefreshedAppData]
  );
};

export const useDispatchBuyAmounts = () => {
  const dispatchMintData = useDispatchMintData();
  return useCallback(
    (mint: string, buyer: string, amount: number) => {
      // dispatch data
      let appData = get<AppData>(APP_DATA) ?? APP_DATA_INITIAL_STATE;
      let buyAmounts = appData?.mintData?.[mint]?.buyAmounts ?? {};
      buyAmounts[buyer] = amount;
      dispatchMintData(mint, AppDataKeys.BUY_AMOUNTS, buyAmounts);
    },
    [dispatchMintData]
  );
};

export const useDispatchMintData = () => {
  const dispatchAppData = useDispatchAppData();

  return useCallback(
    <T extends keyof MintChild>(mint: string, innerKey: T, value: MintChild[T]) => {
      // Derive previous app mintdata
      if (!mint) return null;

      let appData = get<AppData>(APP_DATA) ?? APP_DATA_INITIAL_STATE;
      let appMintData = appData?.mintData ?? {};

      let mintData = appMintData?.[mint] ?? MINT_DATA_INITIAL_STATE;
      const updatedMintData: MintChild = { ...mintData };

      // Safely set the property
      updatedMintData[innerKey] = value;

      let newInstance = {
        ...appMintData,
        [mint]: updatedMintData,
      };

      // Dispatch state
      dispatchAppData<MintData>(AppDataKeys.MINT_DATA, newInstance);
    },
    [dispatchAppData]
  );
};



