import React from "react";
import { CiTimer } from "react-icons/ci";
import { AiFillLinkedin } from "react-icons/ai";

const FillOption = () => {
  return (
    <div className="w-full  flex flex-col mt-10 md:flex-row gap-16">
      <div className="flex flex-1 flex-row shadow-xl gap-5 items-center justify-center  rounded-xl md:w-[400px] ">
        
          <CiTimer size={96} className="fill-green-600" />
          <div className="flex flex-col text-center gap-2">
          <h1 className="text-3xl text-green-600 font-bold">Fill Manually</h1>
          <p className="text-xl">[ Typically takes 5 mins] </p>
          </div>
        
      </div>
      <div className="flex flex-1 flex-row shadow-xl gap-5 items-center justify-center  rounded-xl md:w-[400px] ">
        <AiFillLinkedin size={96} className="fill-blue-800" />
        <div className="flex flex-col text-center gap-2">
          <h1 className="text-3xl text-green-600 font-bold">
            Import from LinkedIn
          </h1>
          <p className="text-xl">[ Quickest to import details ] </p>
        </div>
      </div>
    </div>
  );
};

export default FillOption;
