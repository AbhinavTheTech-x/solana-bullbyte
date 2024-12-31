import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { PublicKey } from "@solana/web3.js";
import {
  Token,
  MarketV2,
  TxVersion,
  MAINNET_PROGRAM_ID,
  buildSimpleTransaction,
  TOKEN_PROGRAM_ID,
} from "@raydium-io/raydium-sdk";
import { Metadata, MPL_TOKEN_METADATA_PROGRAM_ID } from "@metaplex-foundation/mpl-token-metadata";
import { AppDataKeys, useDispatchMintData } from "./useAppData";
import { customAssert, validateFuncParam } from "../utils";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { deserializeUnchecked } from "borsh";

export enum MarketCreateTxStatus {
  LOADING,
  ERRORED,
  COMPLETED,
}

const MINIMUM_LAMPORTS = 3 * LAMPORTS_PER_SOL;

const useCreateOpenBookMarket = (
  mintAddress: string,
  orderSize: number,
  priceSize: number,
  isAlreadyCreated: boolean
) => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction, connected } = useWallet();
  const [marketCreateTxStatus, setMarketCreateTxStatus] =
    useState<MarketCreateTxStatus>();

  const dispatch = useDispatchMintData();

  const handleOpenMarket = useCallback(async () => {
    try {
      validateFuncParam(publicKey && connection && connected, "Not connected.");
      validateFuncParam(new PublicKey(mintAddress), "Invalid mint address.");
      validateFuncParam(orderSize, "Invalid minimum order size.");
      validateFuncParam(priceSize, "Invalid minimum price tick size.");

      if (isAlreadyCreated) {
        toast.info("Openbook Market Already Created");
        return;
      }
      if (!publicKey) {
        throw new Error("Public key is required to fetch balance.");
      }
      
      const solBalance = await connection.getBalance(publicKey);
      customAssert(
        solBalance > MINIMUM_LAMPORTS,
        "You should have atleast 3 SOL to create a marketID"
      );
      

      setMarketCreateTxStatus(MarketCreateTxStatus.LOADING);
      const tokenMint = new PublicKey(mintAddress);
      const mint = await connection.getParsedAccountInfo(tokenMint);
      const metadataPDA = PublicKey.findProgramAddressSync(
        [
          Buffer.from("metadata"),
          new PublicKey(MPL_TOKEN_METADATA_PROGRAM_ID.toString()).toBuffer(),
          tokenMint.toBuffer(),
        ],
        new PublicKey(MPL_TOKEN_METADATA_PROGRAM_ID.toString())
      )[0];   

      const metadataAccount = await connection.getAccountInfo(metadataPDA);
      if (!metadataAccount) throw new Error("Cannot find metadata");
      
      // Define the schema manually
      class Metadata {
        key: number = 0; // Default value
        updateAuthority: string = ""; // Default value
        mint: string = ""; // Default value
        data: {
          name: string;
          symbol: string;
          uri: string;
          sellerFeeBasisPoints: number;
          creators: Array<{
            address: string;
            verified: boolean;
            share: number;
          }>;
        } = {
          name: "",
          symbol: "",
          uri: "",
          sellerFeeBasisPoints: 0,
          creators: [],
        }; // Default value
        primarySaleHappened: boolean = false; // Default value
        isMutable: boolean = false; // Default value
      
        constructor(args: any) {
          Object.assign(this, args);
        }
      }
      
      
      // Define the borsh schema for Metadata
      const METADATA_SCHEMA = new Map([
        [
          Metadata,
          {
            kind: "struct",
            fields: [
              ["key", "u8"],
              ["updateAuthority", [32]],
              ["mint", [32]],
              [
                "data",
                {
                  kind: "struct",
                  fields: [
                    ["name", "string"],
                    ["symbol", "string"],
                    ["uri", "string"],
                    ["sellerFeeBasisPoints", "u16"],
                    [
                      "creators",
                      {
                        kind: "array",
                        fields: [
                          ["address", [32]],
                          ["verified", "u8"],
                          ["share", "u8"],
                        ],
                      },
                    ],
                  ],
                },
              ],
              ["primarySaleHappened", "u8"],
              ["isMutable", "u8"],
            ],
          },
        ],
      ]);
      
      // Deserialize the metadata account data
      const metadata = deserializeUnchecked(
        METADATA_SCHEMA,
        Metadata,
        metadataAccount.data
      );
      
      const baseToken = new Token(
        TOKEN_PROGRAM_ID,
        tokenMint,
        (mint.value?.data as any).parsed?.info.decimals,
        metadata.data.symbol.replaceAll("\x00", ""),
        metadata.data.name.replaceAll("\x00", "")
      );
      const quoteToken = new Token(
        TOKEN_PROGRAM_ID,
        new PublicKey("So11111111111111111111111111111111111111112"),
        9,
        "WSOL",
        "WSOL"
      );
      const makeTxVersion = TxVersion.V0;

      const createMarketInstruments =
        await MarketV2.makeCreateMarketInstructionSimple({
          connection,
          wallet: publicKey,
          baseInfo: baseToken,
          quoteInfo: quoteToken,
          lotSize: orderSize, // default 1
          tickSize: priceSize, // default 0.01
          // eslint-disable-next-line
          dexProgramId: MAINNET_PROGRAM_ID.OPENBOOK_MARKET,
          makeTxVersion,
        });
      const marketId = createMarketInstruments.address.marketId;

      const willSendTx = await buildSimpleTransaction({
        connection,
        makeTxVersion,
        payer: publicKey,
        innerTransactions: createMarketInstruments.innerTransactions,
      });

      const txids = [];
      for (const iTx of willSendTx) {
        txids.push(
          await sendTransaction(iTx, connection, { skipPreflight: true })
        );
      }

      dispatch(mintAddress, AppDataKeys.MARKET_ID, marketId.toString());
      console.log("Market Created");
      console.log("Create Market Transactions :", txids);
      console.log("Market Address :", marketId);
      toast.success("Successfully Created!");
      setMarketCreateTxStatus(MarketCreateTxStatus.COMPLETED);
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message);
        console.log(err);
        setMarketCreateTxStatus(MarketCreateTxStatus.ERRORED);
      }
    }
  }, [
    publicKey,
    connection,
    sendTransaction,
    dispatch,
    connected,
    mintAddress,
    orderSize,
    priceSize,
    isAlreadyCreated,
  ]);

  return {
    handleOpenMarket,
    marketCreateTxStatus,
  };
};

export default useCreateOpenBookMarket;
