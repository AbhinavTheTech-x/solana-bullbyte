import React from "react";

const BackDrop = ({ text }: { text: string }) => {
  return (
    <div className="backdrop">
      <div className="loader"></div>
      <p>{text}</p>
    </div>
  );
};

export default BackDrop;
