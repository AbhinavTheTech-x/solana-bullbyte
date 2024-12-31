import React from "react";
import styles from "styles/pages/Token.module.scss";
import { useState } from "react";
import CopyComponent from "../../components/CopyComponent";
import BackDrop from "../../components/BackDrop";
import useCreateOpenBookMarket, {
  MarketCreateTxStatus,
} from "../../hooks/useCreateOpenBookMarket";
import useSetMintAddress from "../../hooks/useSetMintAddress";
import { useGetSpecificMintData } from "../../hooks/useAppData";

export default function Market() {
  const [mintAddress, setMintAddress] = useSetMintAddress();
  const [orderSize, setOrderSize] = useState("");
  const [priceSize, setPriceSize] = useState("");

  const [_, mintData] = useGetSpecificMintData(mintAddress);
  const { handleOpenMarket, marketCreateTxStatus } = useCreateOpenBookMarket(
    mintAddress,
    Number(orderSize),
    Number(priceSize),
    !(mintData?.marketId !== undefined && mintData?.marketId !== null)
  );

  return (
    <div className={styles.token}>
      <h1>OpenBook Market</h1>
      <div className={styles.form}>
        <input
          placeholder="Mint Address"
          value={mintAddress}
          onChange={(e) => setMintAddress(e.target.value)}
        />
        <input
          placeholder="Minimum Order Size"
          onChange={(e) => setOrderSize(e.target.value)}
        />
        <input
          placeholder="Minimum Price Tick Size"
          onChange={(e) => setPriceSize(e.target.value)}
        />
        <button type="submit" onClick={async () => await handleOpenMarket()}>
          Create OpenBook Market
        </button>
      </div>
      {mintData?.marketId && (
        <div
          style={{
            marginTop: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ color: "white", margin: "5px" }}>
            OrderBook Market: {mintData.marketId}
          </span>
          <CopyComponent content={mintData.marketId} showButtonOnly={true} />
        </div>
      )}
      {marketCreateTxStatus === MarketCreateTxStatus.LOADING && (
        <BackDrop text="Creating Open Market Book" />
      )}
    </div>
  );
}
