import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useCallback, useState } from "react";
import {
  AppDataKeys,
  useDispatchMintData,
  useGetSpecificMintData,
} from "./useAppData";
import { PublicKey, Transaction } from "@solana/web3.js";
import {
  AuthorityType,
  TOKEN_PROGRAM_ID,
  createSetAuthorityInstruction,
} from "@solana/spl-token";
import { toast } from "react-toastify";
import { validateFuncParam } from "../utils";
import { getComputedTxs } from "../utils/bundleCalls";

export enum MintTxStatus {
  LOADING,
  ERRORED,
  COMPLETED,
}

const useMintAuthority = (mintAddress: string, skip?: boolean) => {
  const [mintTxStatus, setMintTxStatus] = useState<MintTxStatus>();

  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const [_, mintData] = useGetSpecificMintData(mintAddress);
  const dispatch = useDispatchMintData();

  const handleMintAhtority = useCallback(async () => {
    try {
      validateFuncParam(publicKey && connection, "Not connected.");
      validateFuncParam(mintAddress, "Invalid Mint Id.");

      if (mintData?.isRevoked === true && !skip) {
        toast.info("Skip this Step! No Changes Required");
        return null;
      }

      if (mintData?.isRevoked === true && skip) {
        toast.success("Saved Successfully");
        return null;
      }

      setMintTxStatus(MintTxStatus.LOADING);
      const tokenMint = new PublicKey(mintAddress);
      const { modifyComputeUnits, addPriorityFee } = getComputedTxs();

  if (!publicKey) {
  throw new Error("Public key is required to create a transaction.");
}

const revokeTokenTransaction = new Transaction()
  .add(modifyComputeUnits)
  .add(addPriorityFee)
  .add(
    createSetAuthorityInstruction(
      tokenMint,
      publicKey,
      AuthorityType.MintTokens,
      null,
      [],
      TOKEN_PROGRAM_ID
    )
  );

  await sendTransaction(revokeTokenTransaction, connection);

  // Dispatch the correct type
  dispatch(mintAddress, AppDataKeys.IS_REVOKED, true);
  
  setMintTxStatus(MintTxStatus.COMPLETED);
  toast.success("Successfully revoked!");  
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message);
        setMintTxStatus(MintTxStatus.ERRORED);
      }
    }
  }, [
    publicKey,
    connection,
    sendTransaction,
    dispatch,
    mintData?.isRevoked,
    mintAddress,
    skip,
  ]) as () => Promise<void>;

  return {
    handleMintAhtority,
    mintTxStatus,
  };
};

export default useMintAuthority;
