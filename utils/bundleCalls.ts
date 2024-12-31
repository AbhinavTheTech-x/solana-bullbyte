import {
  Connection,
  PublicKey,
  TransactionInstruction,
  TransactionMessage,
  VersionedTransaction,
  ComputeBudgetProgram,
} from "@solana/web3.js";
import { MAX_CU, MAX_PRIORITY_FEE } from "../constants";
import { delay, validateFuncParam } from "../utils";

export const getLookUpTableAccount = async (
  connection: Connection,
  lookupTableAddress: PublicKey
) => {
  const lookupTableAccount = (
    await connection.getAddressLookupTable(lookupTableAddress)
  ).value;

  return lookupTableAccount;
};

// create batches
export const batchCall = async <S>(
  pendingCallPromises: S[] = [],
  batch: number = 10,
  batchSize: number
) => {
  try {
    validateFuncParam(pendingCallPromises, "Batch failed");

    // 98/10 = 9.8 = 10
    let batchCounts = Math.ceil(batchSize / batch);
    let resolvedPromises = [] as Awaited<S>[][];
    //
    if (pendingCallPromises.length <= batch) {
      const promisedResolved = await Promise.all(pendingCallPromises);
      return promisedResolved;
    } else {
      for (let k = 0; k < batchCounts; k++) {
        try {
          let batchedPromises = pendingCallPromises.slice(
            k * batch,
            k + 1 * batch > batchSize ? batchSize : (k + 1) * batch
          );

          const promisedResolved = await Promise.all(batchedPromises);
          resolvedPromises.push(promisedResolved);
          await delay(3000);
        } catch (err) {
          if (err instanceof Error) {
            console.log(`Batching Internal Error: ${err.message}`);
          }
        }
      }
      return resolvedPromises?.flat(1);
    }
  } catch (err) {
    if (err instanceof Error) {
      console.log("Batch Failed", err.message);
      return [];
    }
  }
};

export const batchCallAllSettled = async <S>(
  pendingCallPromises: S[] = [],
  batch: number = 10,
  batchSize: number,
  batchDelay: number
) => {
  try {
    validateFuncParam(pendingCallPromises, "Batch failed");

    let batchCounts = Math.ceil(batchSize / batch);
    let resolvedPromises = [] as PromiseSettledResult<Awaited<S>>[][];

    if (pendingCallPromises.length <= batch) {
      const promisedResolved = await Promise.allSettled(pendingCallPromises);
      return promisedResolved;
    } else {
      for (let k = 0; k < batchCounts; k++) {
        try {
          let batchedPromises = pendingCallPromises.slice(
            k * batch,
            k + 1 * batch > batchSize ? batchSize : (k + 1) * batch
          );

          const promisedResolved = await Promise.allSettled(batchedPromises);
          resolvedPromises.push(promisedResolved);
          await delay(batchDelay);
        } catch (err) {
          if (err instanceof Error) {
            console.log("Internal Build failed", err.message);
          }
        }
        return resolvedPromises?.flat(1);
      }
    }
  } catch (err) {
    if (err instanceof Error) {
      console.log("Batch All Settled failed");
      return [];
    }
  }
};

export const getVersionedTx = (
  instructions: TransactionInstruction[],
  payerPublicKey: PublicKey,
  recentBlockhash: string
) => {
  const messageV0 = new TransactionMessage({
    payerKey: payerPublicKey,
    recentBlockhash,
    instructions,
  }).compileToV0Message();

  const transaction = new VersionedTransaction(messageV0);
  return transaction;
};

export const createBatchVersionedTransaction = (
  instructions: TransactionInstruction[],
  payerPublicKey: PublicKey,
  recentBlockHash: string,
  batch: number,
  batchSize: number
): VersionedTransaction[] => {
  const numCounts = batchSize / batch;

  let callCounts = 0;
  const { modifyComputeUnits, addPriorityFee } = getComputedTxs();

  if (instructions.length <= batch) {
    const transaction = getVersionedTx(
      [modifyComputeUnits, addPriorityFee, ...instructions],
      payerPublicKey,
      recentBlockHash
    );
    return [transaction];
  } else {
    // vTxs 100/5 = 20/10 = 2
    let vTxs = [] as VersionedTransaction[];
    while (callCounts < numCounts) {
      let newBatch = 0;
      let innrerVTxs = [] as VersionedTransaction[];
      for (let j = newBatch; j < newBatch + batch; j++) {
        if (newBatch >= batchSize) {
          break;
        }
        const transaction = getVersionedTx(
          [
            modifyComputeUnits,
            addPriorityFee,
            ...instructions.slice(newBatch, newBatch + batch),
          ],
          payerPublicKey,
          recentBlockHash
        );
        innrerVTxs.push(transaction);
        newBatch += batch;
      }
      vTxs = [...innrerVTxs];
      callCounts++;
    }
    return vTxs;
  }
};

export const getComputedTxs = () => {
  const modifyComputeUnits = ComputeBudgetProgram.setComputeUnitLimit({
    units: MAX_CU,
  });

  const addPriorityFee = ComputeBudgetProgram.setComputeUnitPrice({
    microLamports: MAX_PRIORITY_FEE,
  });
  return {
    modifyComputeUnits,
    addPriorityFee,
  };
};
