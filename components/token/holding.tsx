import React from "react";
import styles from "styles/pages/Token.module.scss";
import { PublicKey, RpcResponseAndContext, TokenAmount } from "@solana/web3.js";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";
import { LuCopy } from "react-icons/lu";
import { store } from "../../state/StateProvider";
import { useGetMintIdsAndDeployerPubKeys } from "../../hooks/useAppData";
import { batchCall, batchCallAllSettled } from "../../utils/bundleCalls";
import { getATAAddress, preciseTo } from "../../utils";

export default function Holdings() {
  const { connection } = useConnection();
  const { publicKey } = useWallet();

  const { tokenMetaData } = store.useContainer();
  const data = useGetMintIdsAndDeployerPubKeys();
  const [balances, setBalances] = useState<{ [mint: string]: number }>();

  useEffect(() => {
    async function fetchHoldings() {
      try {
        if (!data || !connection) return null;

        const balancesPromises = [] as Promise<
          RpcResponseAndContext<TokenAmount>
        >[];
        // check if mint ids available
        if (data.length > 0) {
          // create balance promise
          for (let k = 0; k < data.length; k++) {
            const mint = new PublicKey(data[k][0]);
            const deployer = new PublicKey(data[k][1]);
            const tokenATA = getATAAddress(TOKEN_PROGRAM_ID, deployer, mint);

            const bal = connection.getTokenAccountBalance(tokenATA.publicKey);
            balancesPromises.push(bal);
          }

          let bals = await batchCallAllSettled(
            balancesPromises,
            10,
            balancesPromises.length,
            3000
          ).then((balMap) => {
            let balances_updated: number[] = [];
            balMap?.forEach((b) => {
              if (b.status === "fulfilled") {
                let balance = b?.value.value?.uiAmount ?? 0; // Nullish coalescing operator
                balances_updated.push(balance);
              }
            });
            return balances_updated;
          });
          

          // map the balances data
          let balancesMap = {} as { [mint: string]: number };
          for (let k = 0; k < data.length; k++) {
            let mintId = data[k][0];
            balancesMap[mintId] = preciseTo(bals?.[k], 2) ?? 0;
          }
          setBalances(balancesMap);
        }
      } catch (err) {
        if (err instanceof Error) {
          console.log(err.message);
        }
      }
    }

    fetchHoldings();
  }, [data, connection, publicKey]);

  return (
    <div className={styles.token}>
      <h1>Token Holdings</h1>
      <div className={styles.form}>
        <table>
          <thead>
            <tr>
              <th>Mint</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(tokenMetaData).length > 0 &&
              Object.keys(tokenMetaData).map((m, i) => {
                let { tokenA } = tokenMetaData?.[m] ?? {};
                return (
                  <tr key={`holdings-${i}`}>
                    <td align="left">
                      <a
                        onClick={() => {
                          navigator.clipboard.writeText(String(m));
                        }}
                        style={{ marginRight: "1em" }}
                      >
                        <LuCopy stroke="#1e8030" />
                      </a>
                      {tokenA?.name}({tokenA?.symbol})
                    </td>
                    <td align="right">{balances?.[m] ?? 0}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
