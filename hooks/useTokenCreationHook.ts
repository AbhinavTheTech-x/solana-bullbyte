/* eslint-disable no-undef */
import {
  MPL_TOKEN_METADATA_PROGRAM_ID,
  CreateMetadataAccountV3InstructionData,
} from "@metaplex-foundation/mpl-token-metadata";
import { createGenericFile } from "@metaplex-foundation/umi";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { nftStorageUploader } from "@metaplex-foundation/umi-uploader-nft-storage";
import {
  MINT_SIZE,
  TOKEN_PROGRAM_ID,
  createInitializeMintInstruction,
  getAssociatedTokenAddress,
  getMinimumBalanceForRentExemptAccount,
  createAssociatedTokenAccountInstruction,
  createMintToInstruction,
} from "@solana/spl-token";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  Keypair,
  PublicKey,
  SystemProgram,
  Transaction,
  ComputeBudgetProgram,
  TransactionInstruction,
} from "@solana/web3.js";
import { useCallback, useMemo, useState } from "react";
import {
  customAssert,
  delay,
  pollSignatureStatus,
  resizeAndCompressImage,
  validateFuncParam,
  validateTelegramProfileURL,
  validateTwitterProfileURL,
  validateWebsiteURL,
} from "../utils";
import {
  AppDataKeys,
  useDispatchAppData,
  useDispatchMintData,
} from "./useAppData";
import base58 from "bs58";
import { toast } from "react-toastify";
import { getComputedTxs } from "../utils/bundleCalls";
import { MintChild } from '../hooks/useAppData';


export interface TokenCreationFormState {
  tokenName: string | null;
  symbol: string | null;
  description: string | null;
  telegram: string | null;
  twitter: string | null;
  website: string | null;
  imageFile: File | null;
  decimals: number | null;
  amount: number | null;
}

const TOKEN_CREATION_FORM_INITIAL_STATE: TokenCreationFormState = {
  tokenName: null,
  symbol: null,
  description: null,
  telegram: null,
  twitter: null,
  website: null,
  imageFile: null,
  decimals: null,
  amount: null,
};

export enum TokenCreationTxUpdate {
  DERIVING_ONCHAIN_DATA = "Deriving Onchain Data",
  UPLOADING_IMAGE = "Uploading Image",
  ADDING_META_DATA = "Adding Metadata",
  CRAFTING_INSTRUCTIONS = "Crafting Instructions",
  MINT_INSTRUCTION_SEND = "Mint Instructions Sent",
  ERROED = "Errored",
  COMPLETED = "Completed",
}

enum TokenFieldKeys {
  TOKEN_NAME = "tokenName",
  SYMBOL = "symbol",
  DESCRIPTION = "description",
  TELEGRAM = "telegram",
  TWITTER = "twitter",
  WEBSITE = "website",
  IMAGE_FILE = "imageFile",
  DECIMALS = "decimals",
  AMOUNT = "amount",
}

export enum TokenCreationFieldType {
  TEXT = "text",
  NUMBER = "number",
  FILE = "file",
}

export interface TokenCreationFormField {
  [fieldName: string]: {
    type: TokenCreationFieldType;
    placeHolder: string;
    onChangeHandler: <T>(input: T) => void;
    isDisabled?: boolean;
    value?: string;
  };
}

const useTokenCreationState = () => {
  // form state
  const [tokenCreationFormState, setTokenCreationFormState] =
    useState<TokenCreationFormState>(TOKEN_CREATION_FORM_INITIAL_STATE);

  const onChangeHanlderTokenCreationState = useCallback(
    <T>(field: string, fieldValue: T) => {
      let newField = { [field]: fieldValue };
      let newObject = {
        ...tokenCreationFormState,
        ...newField,
      };
      setTokenCreationFormState(newObject);
    },
    [tokenCreationFormState]
  );

  const eraseTokenCreationState = useCallback(() => {
    setTokenCreationFormState(TOKEN_CREATION_FORM_INITIAL_STATE);
  }, []);

  return {
    onChangeHanlderTokenCreationState,
    tokenCreationFormState,
    eraseTokenCreationState,
  };
};

export const useTokenCreationFormField = () => {
  const {
    onChangeHanlderTokenCreationState,
    tokenCreationFormState,
    eraseTokenCreationState,
  } = useTokenCreationState();

  const formFields = useMemo(() => {
    // Extract enum keys safely and get their string values
    const fieldKeys = Object.values(TokenFieldKeys) as Array<keyof TokenCreationFormState>;

    // Initialize token creation form fields
    let tokenCreationFormFields: TokenCreationFormField = {};
    for (let j = 0; j < fieldKeys.length; j++) {
      const field = fieldKeys[j];

      // Determine the field type
      let fieldType =
        field === "imageFile"
          ? TokenCreationFieldType.FILE
          : field === "decimals" || field === "amount"
          ? TokenCreationFieldType.NUMBER
          : TokenCreationFieldType.TEXT;

      // Create field configuration
      tokenCreationFormFields[field] = {
        type: fieldType,
        placeHolder: field,
        onChangeHandler: <T>(input: T) =>
          onChangeHanlderTokenCreationState<T>(field, input),
        isDisabled: field === "imageFile",
        value:
          field === "imageFile"
            ? tokenCreationFormState?.imageFile?.name || undefined
            : undefined,
      };
    }
    return tokenCreationFormFields;
  }, [tokenCreationFormState, onChangeHanlderTokenCreationState]);

  return { formFields, tokenCreationFormState, eraseTokenCreationState };
};



export const useTokenCreationHook = () => {
  const [tokenCreationTxUpdate, setTokenCreationTxUpdate] =
    useState<TokenCreationTxUpdate>();

  const { publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();

  // dispatch app data
  const dispatch = useDispatchMintData();
  const dispatchAppData = useDispatchAppData();

  const handleTokenCreation = useCallback(
    async (
      tokenCreationFormState: TokenCreationFormState,
      eraseTokenCreationState: () => void
    ) => {
      try {
        validateFuncParam(publicKey && connection, "Not Connected");
        // check if null object
        let checkNullObj = Object.keys(tokenCreationFormState).length === 0;
        if (checkNullObj) return null;

        // check if there is empty some empty field
    let hasEmptyField: boolean = false;
      for (const key in tokenCreationFormState) {
        if (Object.prototype.hasOwnProperty.call(tokenCreationFormState, key)) {
          const typedKey = key as keyof TokenCreationFormState; // Ensure the key is typed
          if (!tokenCreationFormState[typedKey]) {
            hasEmptyField = true;
          }
        }
      }


        if (hasEmptyField) customAssert(!hasEmptyField, "Empty Input Fields");

        // object destruct
        let {
          tokenName,
          decimals,
          description,
          telegram,
          twitter,
          website,
          amount,
          imageFile,
          symbol,
        } = tokenCreationFormState;

        // check if url valid
        customAssert(
          validateTelegramProfileURL(telegram ?? ""),
          "Invalid telegram url"
        );
        customAssert(
          validateTwitterProfileURL(twitter ?? ""),
          "Invalid twitter url"
        );
        customAssert(
          validateWebsiteURL(website ?? ""),
          "Invalid website url"
        );        

        setTokenCreationTxUpdate(TokenCreationTxUpdate.DERIVING_ONCHAIN_DATA);
        const lamports = await getMinimumBalanceForRentExemptAccount(
          connection
        );
        const mintKeypair = Keypair.generate();
        if (!publicKey) {
          throw new Error("Wallet public key is required.");
        }
        
        const tokenATA = await getAssociatedTokenAddress(
          mintKeypair.publicKey,
          publicKey
        );        

        if (!process.env.NEXT_PUBLIC_RPC_URL) {
          throw new Error("RPC URL is not defined in the environment variables.");
        }
        
        if (!process.env.NEXT_PUBLIC_METAPLAX_API_KEY) {
          throw new Error("Metaplex API key is not defined in the environment variables.");
        }
        
        setTokenCreationTxUpdate(TokenCreationTxUpdate.UPLOADING_IMAGE);
        
        const umi = createUmi(process.env.NEXT_PUBLIC_RPC_URL);
        umi.use(
          nftStorageUploader({
            token: process.env.NEXT_PUBLIC_METAPLAX_API_KEY,
          })
        );        

        if (!imageFile) {
          throw new Error("Image file is not provided.");
        }
        
        const resizedFile = (await resizeAndCompressImage(imageFile)) as File;        

        let buffer: Buffer;
         const reader = new FileReader();
         reader.onload = async (event) => {
           if (event.target) {
             buffer = Buffer.from(event.target.result as ArrayBuffer);
           } else {
             throw new Error("FileReader event target is null.");
           }
         };
         reader.readAsArrayBuffer(resizedFile);


        // delay about 3s
        await delay(3000);

        const getBufferFromFile = (file: File): Promise<Buffer> => {
          return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (event) => {
              if (event.target?.result) {
                resolve(Buffer.from(event.target.result as ArrayBuffer));
              } else {
                reject(new Error("FileReader event target is null."));
              }
            };
            reader.onerror = () => reject(new Error("Failed to read the file."));
            reader.readAsArrayBuffer(file);
          });
        };
        
        try {
          const buffer = await getBufferFromFile(resizedFile); // Ensure buffer is ready
          const [imageUri] = await umi.uploader.upload([
            createGenericFile(buffer, `${resizedFile.name}`),
          ]);
        
          console.log("Image URI:", imageUri);
        } catch (error) {
          console.error("Error during file processing:", error);
        }        

        setTokenCreationTxUpdate(TokenCreationTxUpdate.ADDING_META_DATA);
          
          try {
            // Ensure buffer is defined before use
            let buffer: Buffer | null = null;
          
            const bufferPromise = new Promise<Buffer>((resolve, reject) => {
              const reader = new FileReader();
              reader.onload = (event) => {
                if (event.target?.result) {
                  resolve(Buffer.from(event.target.result as ArrayBuffer));
                } else {
                  reject(new Error("Failed to read file as ArrayBuffer."));
                }
              };
              reader.onerror = () => reject(new Error("FileReader encountered an error."));
              reader.readAsArrayBuffer(resizedFile);
            });
          
            buffer = await bufferPromise; // Wait for FileReader to complete
          
            if (!buffer) {
              throw new Error("Failed to assign buffer.");
            }
          
            // Proceed with uploading
            const [imageUri] = await umi.uploader.upload([
              createGenericFile(buffer, `${resizedFile.name}`),
            ]);
          
            if (!imageUri) {
              throw new Error("Failed to upload image and retrieve URI.");
            }
          
            const uri = await umi.uploader.uploadJson({
              name: tokenName,
              description,
              image: imageUri, // Use the uploaded image URI here
              extensions: {
                website,
                twitter,
                telegram,
              },
              creator: {
                name: tokenName,
                site: website,
              },
            });
          
            console.log("Metadata URI:", uri);
          } catch (error) {
            console.error("Error during metadata upload:", error);
          }



        setTokenCreationTxUpdate(TokenCreationTxUpdate.CRAFTING_INSTRUCTIONS);

        // sample uri
        let uri: string | null = null; // Declare and initialize `uri` at the beginning

try {
  // Ensure the buffer is prepared correctly for the image upload
  const buffer = await getBufferFromFile(resizedFile); 

  // Upload the image and retrieve the image URI
  const [imageUri] = await umi.uploader.upload([
    createGenericFile(buffer, `${resizedFile.name}`),
  ]);

  if (!imageUri) {
    throw new Error("Failed to upload image and retrieve URI.");
  }

  console.log("Image URI:", imageUri);

  // Upload the metadata JSON and retrieve the metadata URI
  uri = await umi.uploader.uploadJson({
    name: tokenName || "Default Name", // Ensure a fallback value
    description: description || "Default Description", // Provide a fallback
    image: imageUri, // Use the uploaded image URI here
    extensions: {
      website: website || "https://example.com", // Provide a fallback
      twitter: twitter || "https://twitter.com/example", // Provide a fallback
      telegram: telegram || "https://t.me/example", // Provide a fallback
    },
    creator: {
      name: tokenName || "Default Creator", // Ensure a fallback value
      site: website || "https://example.com", // Provide a fallback
    },
  });

  if (!uri) {
    throw new Error("Failed to upload metadata and retrieve URI.");
  }

  console.log("Metadata URI:", uri);
} catch (error) {
  console.error("Error during metadata upload:", error);
}
// ensure that above is  a sample uri 
        
        if (!uri) {
          throw new Error("URI is not defined."); // Handle undefined `uri`
        }
        
        const createMetadataInstruction: TransactionInstruction =
          createCreateMetadataAccountV3InstructionData(
            {
              metadata: PublicKey.findProgramAddressSync(
                [
                  Buffer.from("metadata"),
                  new PublicKey(MPL_TOKEN_METADATA_PROGRAM_ID).toBuffer(),
                  mintKeypair.publicKey.toBuffer(),
                ],
                new PublicKey(MPL_TOKEN_METADATA_PROGRAM_ID)
              )[0],
              mint: mintKeypair.publicKey,
              mintAuthority: publicKey!,
              payer: publicKey!,
              updateAuthority: publicKey!,
            },
            {
              createMetadataAccountArgsV3: {
                data: {
                  name: tokenName || "Default Name", // Ensure a fallback value
                  symbol: symbol || "SYM",          // Ensure a fallback value
                  uri: uri,                         // Ensure `uri` is defined
                  creators: null,
                  sellerFeeBasisPoints: 0,
                  uses: null,
                  collection: null,
                },
                isMutable: false,
                collectionDetails: null,
              },
            }
          );
        
        const { modifyComputeUnits, addPriorityFee } = getComputedTxs();

        const createNewTokenTransaction = new Transaction()
          .add(modifyComputeUnits)
          .add(addPriorityFee)
          .add(
            SystemProgram.createAccount({
              fromPubkey: publicKey,
              newAccountPubkey: mintKeypair.publicKey,
              space: MINT_SIZE,
              lamports: lamports,
              programId: TOKEN_PROGRAM_ID,
            })
          )
          .add(
            createInitializeMintInstruction(
              mintKeypair.publicKey,
              Number(decimals),
              publicKey,
              publicKey,
              TOKEN_PROGRAM_ID
            )
          )
          .add(
            createAssociatedTokenAccountInstruction(
              publicKey,
              tokenATA,
              publicKey,
              mintKeypair.publicKey
            )
          )
          .add(
            createMintToInstruction(
              mintKeypair.publicKey,
              tokenATA,
              publicKey,
              Number(amount) * Math.pow(10, Number(decimals))
            )
          )
          .add(createMetadataInstruction);

        const hash = await connection.getLatestBlockhash();
        createNewTokenTransaction.recentBlockhash = hash.blockhash;

        setTokenCreationTxUpdate(TokenCreationTxUpdate.MINT_INSTRUCTION_SEND);

        const sig = await sendTransaction(
          createNewTokenTransaction,
          connection,
          {
            signers: [mintKeypair],
            maxRetries: 5,
          }
        );

        // wait for 5s
        await pollSignatureStatus(connection, [sig]);
        console.log("sig", sig);
        // await delay(2000);
        
        if (!decimals) decimals = 0; // Ensure decimals is always defined

        let mint = mintKeypair.publicKey.toString();
        let mintSecret = base58.encode(mintKeypair.secretKey);
        
        // Dispatch directly without extra type arguments
        dispatch(mint, "mintSecret", mintSecret); // 'mintSecret' is a valid key in MintChild
        dispatch(mint, "mintDecimals", decimals); // 'mintDecimals' is a valid key in MintChild
        dispatch(
          mint,
          "deployerPubKey",
          publicKey!.toString() // Ensure `publicKey` is non-null
        );
        
        

        dispatchAppData<string>(AppDataKeys.CURRENT_MINT, mint);
        console.log("token", tokenATA.toString(), mint);
        toast.success("Successfully created!");
        setTokenCreationTxUpdate(TokenCreationTxUpdate.COMPLETED);
        // erase the token creation state
        eraseTokenCreationState();
      } catch (err) {
        if (err instanceof Error) {
          setTokenCreationTxUpdate(TokenCreationTxUpdate.ERROED);
          toast.error(err.message);
        }
      }
    },
    [connection, dispatch, publicKey, sendTransaction, dispatchAppData]
  );

  return {
    handleTokenCreation,
    tokenCreationTxUpdate,
  };
};
function createCreateMetadataAccountV3InstructionData(arg0: { metadata: PublicKey; mint: PublicKey; mintAuthority: PublicKey; payer: PublicKey; updateAuthority: PublicKey; }, arg1: {
  createMetadataAccountArgsV3: {
    data: {
      name: string; // Ensure a fallback value
      symbol: string; // Ensure a fallback value
      uri: any; // Ensure `uri` is defined
      creators: null; sellerFeeBasisPoints: number; uses: null; collection: null;
    }; isMutable: boolean; collectionDetails: null;
  };
}): TransactionInstruction {
  throw new Error("Function not implemented.");
}

