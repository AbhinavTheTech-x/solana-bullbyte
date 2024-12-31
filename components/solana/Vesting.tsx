import React from "react";
import InfoContent from "../InfoContent";

const Vesting = () => {
  return (
    <div className="v1Token-section w-full h-full flex justify-center items-center flex-col">
      <div className="p-5 w-full flex justify-start items-center flex-col gap-10">
        <div className="border border-[#E4D4FB] w-full rounded-xl h-[300px] flex justify-center items-center">
          <div className=" w-[50%] mx-auto">
            <h6 className=" font-poppins text-center text-black text-sm font-medium">
              Coming Soon...
            </h6>
          </div>
        </div>
        <InfoContent />
      </div>
    </div>
  );
};

export default Vesting;
