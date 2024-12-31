import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useAppData } from "./useAppData";

const useSetMintAddress = (): [string, Dispatch<SetStateAction<string>>] => {
  const [mintAddress, setMintAddress] = useState("");
  const appData = useAppData();
  useEffect(() => {
    if (appData?.currentMint) {
      setMintAddress(appData.currentMint);
    }
  }, [appData?.currentMint]);
  return [mintAddress, setMintAddress];
};

export default useSetMintAddress;
