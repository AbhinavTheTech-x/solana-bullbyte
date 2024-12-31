import { Token } from "@raydium-io/raydium-sdk";
import { useState } from "react";
import { createContainer } from "unstated-next";

export interface TokenMetaData {
  [mint: string]: {
    tokenA: Token;
    tokenB: Token;
  };
}

function useStore() {
  const [forceRefreshedAppData, updateRefreshAppData] = useState<number>(1);
  const [tokenMetaData, setTokenMetaData] = useState<TokenMetaData>({});
  const [forceRefreshSolBalance, setForceRefreshSolBalance] = useState(1);
  const [forceRefreshedSplBalance, setForceRefreshSplBalance] = useState(1);

  const refreshAppData = (newValue: number) => {
    updateRefreshAppData(newValue);
  };

  const setFetchedTokenMetaData = (
    mint: string,
    mintTokenMetaData: {
      tokenA: Token;
      tokenB: Token;
    }
  ) => {
    setTokenMetaData({
      ...tokenMetaData,
      [mint]: { ...mintTokenMetaData },
    });
  };

  const refreshSolanaBalances = () => {
    setForceRefreshSolBalance(forceRefreshSolBalance + 1);
  };

  const refreshSplTokenBalances = () => {
    setForceRefreshSplBalance(forceRefreshedSplBalance + 1);
  };

  return {
    forceRefreshedAppData,
    refreshAppData,
    setFetchedTokenMetaData,
    tokenMetaData,
    refreshSolanaBalances,
    forceRefreshSolBalance,
    refreshSplTokenBalances,
    forceRefreshedSplBalance,
  };
}
export const store = createContainer(useStore);
