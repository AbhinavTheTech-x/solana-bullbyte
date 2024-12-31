import React, { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import Label from "../reusable/Label";
import DarkInput from "../reusable/DarkInput"; // Make sure the path is correct
import CopyComponent from "../../components/CopyComponent";
import BackDrop from "../../components/BackDrop";
import {
  TokenCreationFieldType,
  TokenCreationFormState,
  TokenCreationTxUpdate,
  useTokenCreationFormField,
  useTokenCreationHook,
} from "../../hooks/useTokenCreationHook"; // Adjust path as needed
import { useAppData } from "../../hooks/useAppData"; // Adjust path as needed

const TokenManagerForm: React.FC = () => {
  const { theme } = useTheme();
  const { formFields, tokenCreationFormState, eraseTokenCreationState } =
    useTokenCreationFormField();
  const { handleTokenCreation, tokenCreationTxUpdate } = useTokenCreationHook();
  const appData = useAppData();
  const [fileError, setFileError] = useState<string | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError(null);
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (file.size > 100 * 1024) {
        setFileError("File size exceeds 100KB.");
        return;
      }
      formFields.logoURI.onChangeHandler(file);
    }
    e.target.value = null;
  };

  const handleCreateToken = async () => {
    try {
      await handleTokenCreation(
        tokenCreationFormState,
        eraseTokenCreationState
      );
    } catch (error) {
      console.error("Error creating token:", error);
      // Handle error appropriately, e.g., show an error message.
    }
  };

  return (
    <div className="w-full h-full flex-col flex justify-start items-start">
      <h2
        className={`text-sm font-semibold font-poppins mb-5 ${
          theme === "light" ? "text-black" : "text-[#FCFCFC]"
        }`}
      >
        SPL:{" "}
        <span
          className={`${
            theme === "light" ? "text-[#747474]" : "text-[#A7A3D5]"
          } font-normal`}
        >
          Create SPL Token
        </span>
      </h2>

      <form className="w-full flex flex-col gap-4">
        {Object.keys(formFields).map((key) => {
          const field = formFields[key as keyof typeof formFields];
          return (
            <div key={key} className="flex flex-col gap-1 w-full">
              <Label labelText={field.placeHolder} />
              {field.type === TokenCreationFieldType.FILE ? (
                <div className="flex w-full items-center">
                  <DarkInput
                    type="text"
                    value={(field.value as File | undefined)?.name ?? ""}
                    placeholder="No file chosen"
                    // IMPORTANT: Only include className if DarkInput supports it
                    className="w-full" // Remove this line if DarkInput doesn't have className in props
                  />
                  <button
                    type="button"
                    className={`ml-2 px-4 py-2 rounded-lg ${
                      theme === "light"
                        ? "bg-[#6C41EB] text-white"
                        : "bg-[#9691C6] text-inputDark"
                    }`}
                    onClick={() => {
                      const fileInput = document.getElementById(
                        "fileInput"
                      ) as HTMLInputElement;
                      if (fileInput) fileInput.click();
                    }}
                  >
                    Choose File
                  </button>
                  <input
                    type="file"
                    id="fileInput"
                    className="hidden"
                    accept="image/png, image/jpeg, image/gif, image/webp, image/svg+xml"
                    onChange={handleFileUpload}
                  />
                </div>
              ) : (
                <DarkInput
                  type={
                    field.type === TokenCreationFieldType.NUMBER
                      ? "number"
                      : "text"
                  }
                  value={field.value != null ? field.value.toString() : ""}
                  placeholder="|"
                  onChange={(e) => field.onChangeHandler(e.target.value)}
                  min={
                    field.type === TokenCreationFieldType.NUMBER ? 0 : undefined
                  } // Add min for number input
                />
              )}
              {fileError && (
                <p className="text-red-500 text-sm mt-1">{fileError}</p>
              )}
            </div>
          );
        })}

        <button
          type="button"
          className={`w-full px-6 py-3 rounded-lg mt-4 ${
            theme === "light"
              ? "bg-[#6C41EB] text-white"
              : "bg-[#9691C6] text-inputDark"
          }`}
          onClick={handleCreateToken}
        >
          Create Token
        </button>
        <p
          className={`mt-2 text-sm ${
            theme === "light" ? "text-gray-600" : "text-gray-400"
          }`}
        >
          Note: This token launcher creates tokens WITHOUT freeze authority so
          there is no need to revoke it.
        </p>
      </form>

      {appData?.currentMint && (
        <div className="mt-4 flex items-center justify-center">
          <span
            className={`text-white mr-2 ${
              theme === "light" ? "text-black" : "text-white"
            }`}
          >
            Mint: {appData.currentMint}
          </span>
          <CopyComponent content={appData.currentMint} showButtonOnly />
        </div>
      )}

      {tokenCreationTxUpdate &&
        Object.values(TokenCreationTxUpdate).includes(
          tokenCreationTxUpdate
        ) && <BackDrop text={tokenCreationTxUpdate} />}
    </div>
  );
};

export default TokenManagerForm;
