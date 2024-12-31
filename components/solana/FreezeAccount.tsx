import React from "react";
import InfoContent from "../InfoContent";

const FreezeAccount = () => {
  return (
    <div className="meta_data-section w-full h-full flex justify-center items-center flex-col">
      <div className="p-5 w-full flex justify-start items-center flex-col gap-10">
        <div className="border border-[#E4D4FB] w-full rounded-xl h-max flex justify-center items-center flex-col p-4">
          <div className=" w-full">
            <h6 className=" font-poppins text-left text-black text-sm font-medium">
              Manage: {" "}
              <span className=" font-normal text-[#747474]">
                View & Freeze Authority
              </span>
            </h6>
          </div>
          <div className=" w-full flex justify-center items-end gap-5 mt-5">
            <div className="flex flex-col gap-3 w-full justify-center items-start">
              <label
                className="text-xs text-[#231F20] font-[OpenSauceRegular]"
                htmlFor="tokenName"
              >
                Mint Address
              </label>
              <input
                id="tokenName"
                type="text"
                style={{ boxShadow: "2px 2px 10px 0px #4B68DA47" }}
                className="w-full px-3 py-2.5 rounded-lg border border-[#C0C7E1] text-black text-sm placeholder:text-[#AFAF9F] bg-white focus:outline-none focus:border-blue-500"
                placeholder="|"
              />
            </div>
            <button className="bg-purple-gradient w-[140px] shadow-normalShadow rounded-full px-5 py-3 flex justify-center items-center gap-1 font-poppins font-semibold text-sm cursor-pointer text-[#FCFCFC]">
              Load Token
            </button>
          </div>
          <div className=" mt-3 w-full">
            <textarea
              name="address"
              className="border-[#C0C7E1] border bg-white rounded-xl h-[150px] w-full outline-none p-2 text-sm"
            ></textarea>
          </div>
        </div>
        <InfoContent />
      </div>
    </div>
  );
};

export default FreezeAccount;
