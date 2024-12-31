import React from "react";
import styles from "styles/pages/Token.module.scss";
import CopyComponent from "../../components/CopyComponent";
import BackDrop from "../../components/BackDrop";
import {
  TokenCreationFieldType,
  TokenCreationTxUpdate,
  useTokenCreationFormField,
  useTokenCreationHook,
} from "../../hooks/useTokenCreationHook";
import { useAppData } from "../../hooks/useAppData";

export default function Token() {
  const { formFields, tokenCreationFormState, eraseTokenCreationState } =
    useTokenCreationFormField();
  const { handleTokenCreation, tokenCreationTxUpdate } = useTokenCreationHook();
  const appData = useAppData();

  return (
    <div className={styles.token}>
      <h1>Create Token</h1>
      <div className={styles.form}>
        {Object.keys(formFields).map((f, i) => {
          let fields = formFields[f];
          return (
            <div key={i} style={{ width: "100%" }}>
              {fields.type === TokenCreationFieldType.FILE ? (
                <>
                  <div className="group">
                    <input
                      placeholder="Logo URI"
                      value={fields.value}
                      disabled={true}
                    />
                   <button style={{ position: "relative" }}>
                     Upload Logo
                     <input
                       type="file"
                       accept="image/png"
                       onChange={(e) => {
                         if (e.target.files && e.target.files[0]) {
                           fields.onChangeHandler(e.target.files[0]); // Handle the file
                         }
                         e.target.value = ""; // Reset the input value
                                        }}
                     />
                   </button>

                  </div>
                </>
              ) : (
                <>
                  <input
                    placeholder={fields.placeHolder}
                    onChange={(e) => fields.onChangeHandler(e.target.value)}
                  />
                </>
              )}
            </div>
          );
        })}

        <p style={{ color: "white" }}>
          Note: This token launcher creates tokens WITHOUT freeze authority so
          there is no need to revoke it.
        </p>
        <button
          type="submit"
          onClick={async () => {
            await handleTokenCreation(
              tokenCreationFormState,
              eraseTokenCreationState
            );
            //eraseTokenCreationState();
          }}
        >
          Create Token
        </button>
      </div>
      {appData?.currentMint && (
        <div
          style={{
            marginTop: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ color: "white", margin: "5px" }}>
            Mint: {appData.currentMint}
          </span>
          <CopyComponent content={appData.currentMint} showButtonOnly={true} />
        </div>
      )}
            {tokenCreationTxUpdate &&
      ([
        TokenCreationTxUpdate.DERIVING_ONCHAIN_DATA,
        TokenCreationTxUpdate.UPLOADING_IMAGE,
        TokenCreationTxUpdate.ADDING_META_DATA,
        TokenCreationTxUpdate.CRAFTING_INSTRUCTIONS,
        TokenCreationTxUpdate.MINT_INSTRUCTION_SEND,
      ]     as TokenCreationTxUpdate[]).includes(tokenCreationTxUpdate) && (
        <BackDrop text={tokenCreationTxUpdate} />
      )}


    </div>
  );
}
