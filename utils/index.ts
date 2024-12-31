import {
  buildSimpleTransaction,
  findProgramAddress,
  InnerSimpleV0Transaction,
  SPL_ACCOUNT_LAYOUT,
  TOKEN_PROGRAM_ID,
  TokenAccount,
  LOOKUP_TABLE_CACHE,
  TxVersion,
} from "@raydium-io/raydium-sdk";
import {
  Connection,
  Keypair,
  PublicKey,
  SendOptions,
  Signer,
  Transaction,
  VersionedTransaction,
  SystemProgram,
} from "@solana/web3.js";
import base58 from "bs58";
import { APP_DATA } from "../constants";
import { AppData } from "../hooks/useAppData";
import resizer from "react-image-file-resizer";
import { batchCallAllSettled } from "./bundleCalls";
// import { decrypt, encrypt } from "./aes";

export type WalletTokenAccounts = Awaited<
  ReturnType<typeof getWalletTokenAccount>
>;

export async function sendTx(
  connection: Connection,
  txs: (VersionedTransaction | Transaction)[],
  payer?: Keypair | Signer,
  signTransaction?: <T extends VersionedTransaction | Transaction>(
    transaction: T
  ) => Promise<T>,
  options?: SendOptions
): Promise<string[]> {
  const txids: string[] = [];

  for (let iTx of txs) {
    if (iTx instanceof VersionedTransaction) {
      // Handle when `payer` is not available
      if (payer === undefined) {
        if (!signTransaction) {
          throw new Error(
            "signTransaction function is required when payer is not provided"
          );
        }
        iTx = await signTransaction(iTx);
      } else {
        // Handle when `payer` is available
        iTx.sign([payer]);
      }
      txids.push(await connection.sendTransaction(iTx, options));
    }
  }

  return txids;
}


export async function getWalletTokenAccount(
  connection: Connection,
  wallet: PublicKey
): Promise<TokenAccount[]> {
  const walletTokenAccount = await connection.getTokenAccountsByOwner(wallet, {
    programId: TOKEN_PROGRAM_ID,
  });
  return walletTokenAccount.value.map((i) => ({
    pubkey: i.pubkey,
    programId: i.account.owner,
    accountInfo: SPL_ACCOUNT_LAYOUT.decode(i.account.data),
  }));
}

export async function buildAndSendTx(
  connection: Connection,
  innerSimpleV0Transaction: InnerSimpleV0Transaction[],
  signer?: Keypair | Signer,
  signerPubKey?: PublicKey,
  signTransaction?: <T extends VersionedTransaction | Transaction>(
    transaction: T
  ) => Promise<T>,
  options?: SendOptions,
  dontSend?: boolean
) {
  if (!signerPubKey) {
    throw new Error("Signer public key is required.");
  }

  const willSendTx = await buildSimpleTransaction({
    connection,
    makeTxVersion: TxVersion.V0,
    payer: signerPubKey,
    innerTransactions: innerSimpleV0Transaction,
    addLookupTableInfo: LOOKUP_TABLE_CACHE,
  });

  if (dontSend) {
    if (!signer) {
      throw new Error("Signer is required to sign transactions.");
    }

    let newTxs = [] as VersionedTransaction[];
    for (let iTx of willSendTx) {
      if (iTx instanceof VersionedTransaction) {
        iTx.sign([signer]);
        newTxs.push(iTx);
      }
    }
    return newTxs;
  } else {
    return await sendTx(
      connection,
      willSendTx,
      signer,
      signTransaction,
      options
    );
  }
}


export function getATAAddress(
  programId: PublicKey,
  owner: PublicKey,
  mint: PublicKey
) {
  const { publicKey, nonce } = findProgramAddress(
    [owner.toBuffer(), programId.toBuffer(), mint.toBuffer()],
    new PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL")
  );
  return { publicKey, nonce };
}

export async function sleepTime(ms: number) {
  console.log(new Date().toLocaleString(), "sleepTime", ms);
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const get = <T>(key: string): T | null => {
  // let item = decrypt(localStorage.getItem(key) ?? null, "");
  let item = localStorage.getItem(key);
  return item ? (JSON.parse(item) as T) : null;
};

export const set = <T>(key: string, value: T): void => {
  // const encrypted = encrypt(JSON.stringify(value), null);
  return localStorage.setItem(key, JSON.stringify(value));
};

export const transferSol = (
  fromPubkey: PublicKey,
  toPubkey: PublicKey,
  lamports: number
) => {
  const tx = SystemProgram.transfer({
    fromPubkey,
    toPubkey,
    lamports,
  });

  return tx;
};

export function randomInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const roundTo = (num: number) => {
  if (num === null || num === undefined) return null;
  return Math.round(num * 1000000) / 1000000;
};

export const preciseTo = (num: number, to: number) => {
  if (num === null || num === undefined) return null;
  return Math.round(num * 10 ** to) / 10 ** to;
};

export const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

const maxRetries = 5;

// Function to poll for the status of a transaction signature
export const pollSignatureStatus = async (
  connection: Connection,
  transactionSignatures: string[],
  retries = 0
) => {
  try {
    if (!(connection || transactionSignatures.length > 0)) return;

    // Retrieve the status of the transaction
    const statusus = await connection.getSignatureStatuses(
      transactionSignatures
    );

    if (statusus?.value?.length > 0) {
      for (let k = 0; k < statusus.value.length; k++) {
        let status = statusus.value[k];
        if (status?.confirmationStatus === "confirmed") {
          if (status.slot) {
            console.log("Transaction confirmed in slot:", status.slot);
            return; // Exit the recursion once transaction is confirmed
          } else if (status.err) {
            console.error("Transaction failed:", status.err);
            return; // Exit the recursion if transaction fails
          }
        }
      }
    }
  } catch (error) {
    console.error("Error polling signature status:", error);
  }

  if (retries < maxRetries) {
    // Wait for a short interval (e.g., 5 seconds) before polling again
    await new Promise((resolve) => setTimeout(resolve, 5000));

    // Recursively call the function to continue polling
    await pollSignatureStatus(connection, transactionSignatures, retries + 1);
  } else {
    console.error("Exceeded maximum number of retries");
  }
};

export const validateWebsiteURL = (url: string) => {
  // Regular expression to validate website URL
  const websiteURLRegex =
    /^(?:https:\/\/)?(?:www\.)?[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})(?:\/[\w-]+)*\/?$/;
  return websiteURLRegex.test(url);
};

export const validateTelegramProfileURL = (url: string) => {
  // Regular expression to validate Telegram profile URL
  const telegramURLRegex =
    /^https?:\/\/(?:t(?:elegram)?\.me|telegram\.org)\/[a-zA-Z0-9_]{5,32}(?:\/?)$/;
  return telegramURLRegex.test(url);
};

export const validateTwitterProfileURL = (url: string) => {
  // Regular expression to validate Twitter profile URL
  const twitterURLRegex =
    /^https?:\/\/(?:www\.)?twitter\.com\/(?:#!\/)?[a-zA-Z0-9_]{1,15}(?:\/?)$/;
  const xURLRegex =
    /^https?:\/\/(?:www\.)?x\.com\/(?:#!\/)?[a-zA-Z0-9_]{1,15}(?:\/?)$/;
  return twitterURLRegex.test(url) || xURLRegex.test(url);
};

export const validateFuncParam = <T>(input: T, error: string) => {
  if (!input) throw Error(error);
};

export const customAssert = <T>(isValid: boolean, error: string) => {
  if (!isValid) throw Error(error);
};

export const resizeAndCompressImage = (file: File) => {
  return new Promise((resolve, reject) => {
    // check if file in png format
    const options = {
      maxSizeMB: 0.01, // Maximum file size in MB (10KB)
      maxWidthOrHeight: 512, // Maximum width or height of the image
      useWebWorker: true, // Use WebWorker for faster processing (optional)
    };

    resizer.imageFileResizer(
      file,
      options.maxWidthOrHeight,
      options.maxWidthOrHeight,
      "PNG",
      80,
      0,
      (resizedFile) => {
        resolve(resizedFile);
      },
      "file",
      options.maxSizeMB * 1024,
      options.maxSizeMB * 1024
    );
  });
};

export const sumArray = (arr: number[] = []) => {
  if (arr.length === 0) return 0;
  return arr.reduce(
    (accumulator, currentValue) => Number(accumulator) + Number(currentValue),
    0
  );
};

export const calculateAmountToBuy = (
  min: number,
  max: number,
  aLiquidity: number,
  bLiquidity: number,
  wallets: string[],
  eachWalletSol?: number
) => {
  if (!(min && max && aLiquidity && bLiquidity && wallets))
    return { buyAmounts: [], totalBuyAmount: 0 };
  let buyAmounts = [] as number[];
  let buyAmountsMap = {} as { [account: string]: number };

  // one person can buy
  let averageBuy = (min + max) / 2;
  let initialPoolPrice = bLiquidity / aLiquidity;

  // one person can buy with sol
  let onePersonCanBuyWithSol =
    bLiquidity /* (averageBuy * initialPoolPrice) */ / wallets.length;

  let aNewLiquidity = aLiquidity;
  let bNewLiquidity = bLiquidity;

  for (let h = 0; h < wallets.length; h++) {
    let weight = aNewLiquidity / bNewLiquidity;
    let buyAmount = onePersonCanBuyWithSol * weight;

    // check the range
    //if (buyAmount > max) buyAmount = max;
    //if (buyAmount < min) buyAmount = min;

    // calculate the pool weight
    aNewLiquidity = aNewLiquidity - buyAmount;
    bNewLiquidity = bNewLiquidity + onePersonCanBuyWithSol;
    buyAmountsMap[wallets[h]] = buyAmount;
    buyAmounts.push(buyAmount);
  }

  // fetch the total buy
  let totalBuyAmount = sumArray(buyAmounts);
  return { buyAmountsMap, totalBuyAmount };
};

export const deriveUiWallets = () => {
  let appData = get<AppData>(APP_DATA);

  // Safely handle undefined values
  let generatedWallets =
    appData?.generatedWallets && appData.generatedWallets.length > 0
      ? appData.generatedWallets.map((w) =>
          Keypair.fromSecretKey(base58.decode(w)).publicKey.toString()
        )
      : [];

  let importedWallets = appData?.importedWallets ?? [];
  let removedWallets = appData?.removedWallets ?? [];

  let wallets = generatedWallets.concat(importedWallets);

  let allUIWallets = wallets.filter(function (item, pos) {
    return wallets.indexOf(item) === pos; // Ensure unique wallets
  });

  let activeWallets = allUIWallets.filter(
    (a) => !removedWallets.includes(a) // Exclude removed wallets
  );

  return {
    allUIWallets,
    activeWallets,
  };
};


export const pollTransactionMulti = async (
  connection: Connection,
  txResults: string[]
) => {
  let pollingTx = [] as Promise<void>[];
  let chunkedResults = chunkArray<string>(txResults);
  chunkedResults.forEach((chunkedArray) =>
    pollingTx.push(pollSignatureStatus(connection, chunkedArray))
  );
  await batchCallAllSettled(pollingTx, 5, pollingTx.length, 5000);
};

export const chunkArray = <T>(arr: T[], chunkSize = 50) => {
  const chunkededArray = [] as T[][];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunkededArray.push(arr.slice(i, i + chunkSize));
  }
  return chunkededArray;
};
