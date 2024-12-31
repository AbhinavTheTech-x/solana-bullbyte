import {
  createBurnCheckedInstruction,
  getAssociatedTokenAddress,
} from "@solana/spl-token";
import {
  Connection,
  Keypair,
  PublicKey,
  TransactionMessage,
  VersionedTransaction,
  Transaction,
} from "@solana/web3.js";

const burnSplToken = async (
  connection: Connection,
  fromWallet: PublicKey,
  mint: PublicKey,
  amount: number,
  mintDecimals: number,
  signTransaction: <T extends Transaction | VersionedTransaction>(
    transaction: T
  ) => Promise<T>
) => {
  // ata
  const account = await getAssociatedTokenAddress(mint, fromWallet);
  const afterDecimalBurnAmount = amount * 10 ** mintDecimals;

  // create burn instructions
  const burnIx = createBurnCheckedInstruction(
    account,
    mint,
    fromWallet,
    afterDecimalBurnAmount,
    mintDecimals
  );

  // fetch blockhash
  const { blockhash } = await connection.getLatestBlockhash("finalized");

  // assemble tx
  const messageV0 = new TransactionMessage({
    payerKey: fromWallet,
    recentBlockhash: blockhash,
    instructions: [burnIx],
  }).compileToV0Message();

  const transaction = new VersionedTransaction(messageV0);
  let tx = await signTransaction(transaction);

  // Sign and send the transaction
  const signature = await connection.sendTransaction(tx, {
    skipPreflight: true,
  });
  return signature;
};

export default burnSplToken;
