import React from "react";
import styles from "styles/pages/Token.module.scss";
import BackDrop from "../../components/BackDrop";
import useMintAuthority, { MintTxStatus } from "../../hooks/useMintAuthority";
import useSetMintAddress from "../../hooks/useSetMintAddress";

export default function Mint() {
  const [mintAddress, setMintAddress] = useSetMintAddress();
  const { mintTxStatus, handleMintAhtority } = useMintAuthority(mintAddress);

  return (
    <div className={styles.token}>
      <h1>Revoke Mint Authority</h1>
      <div className={styles.form}>
        <input
          placeholder="Mint Address"
          onChange={(e) => setMintAddress(e.target.value)}
          value={mintAddress}
        />
        <button type="submit" onClick={handleMintAhtority}>
          Revoke Mint Authority
        </button>
      </div>
      {mintTxStatus === MintTxStatus.LOADING && (
        <BackDrop text="Revoking Mint Authority" />
      )}
    </div>
  );
}
