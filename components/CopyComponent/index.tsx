import React, { useRef } from "react";
import useClipboard from "react-use-clipboard";
import { FaRegCopy } from "react-icons/fa";
import { FaCopy } from "react-icons/fa";

const CopyComponent = ({
  content,
  showButtonOnly,
}: {
  content?: string;
  showButtonOnly?: boolean;
}) => {
  const textAreaRef = useRef(null);
  const [isCopied, setCopied] = useClipboard(content ?? "", {
    successDuration: 1000,
  });

  return (
    <div>
      {/* Text area to hold the content */}
      {!showButtonOnly && (
        <span
          style={{
            background: "transparent",
            color: "white",
            border: "none",
            marginRight: "10px",
          }} // Hide the text area
        >
          {content}
        </span>
      )}
      {/* Button with copy icon to trigger the copy action */}
      <button onClick={setCopied} style={{ background: "transparent" }}>
        <span role="img" aria-label="Copy">
          {isCopied ? <FaCopy color="white" /> : <FaRegCopy color="white" />}
        </span>
      </button>
    </div>
  );
};


export default CopyComponent;
