import rightArrow from "../../assets/marketPlace/rightArrow.svg";
import { FaArrowAltCircleRight } from "react-icons/fa";
import React from "react";

const Info = () => {
  return (
    <div className="flex w-full h-[50vh]  text-left gap-2 my-8">
      <div className="w-[50%] h-full text-center justify-center rounded-3xl">
        <div className="w-min-[100%] h-full bg-yellow-500  rounded- rounded-badge "></div>
      </div>
      <div className="w-[50%] flex flex-col gap-4">
        <div className="text-3xl px-2">Make things EZ ,up your game</div>
        <div className="bg-green-200 rounded-box shadow-md ">
        <div className="flex flex-col lg:flex-row">
          <div className="text-left w-[80%]">
            <div className="flex flex-col px-4 py-2 ">
              <h1 className="text-md font-bold px-4">
              eZ Karo ! Get eZ Assured Services 
              </h1>
              <button className="bg-green-400 rounded-btn ml-4 py-1  px-8 w-2/4 text-md h-fit text-white hover:bg-green-600">
                eZ Karo
              </button>
            </div>
          </div>
          <div className="p-auto m-auto">
            <FaArrowAltCircleRight />
          </div>
        </div>
      </div>
        <div className="bg-slate-100 rounded-box shadow-md ">
        <div className="flex flex-col lg:flex-row">
          <div className="text-left w-[80%]">
            <div className="flex flex-col px-4 py-2 ">
              <h1 className="text-md font-bold px-4">
              Post a Requirement and ask talent to bid
              </h1>
              <button className="bg-slate-400 rounded-btn ml-4 py-1  px-8 w-2/4 text-md h-fit text-white hover:bg-green-600">
                Post a Project
              </button>
            </div>
          </div>
          <div className="p-auto m-auto">
            <FaArrowAltCircleRight />
          </div>
        </div>
      </div>
        <div className="bg-orange-200 rounded-box shadow-md ">
          <div className="flex flex-col lg:flex-row">
            <div className="text-left w-[80%]">
              <div className="flex flex-col px-4 py-2 ">
                <h1 className="text-md font-bold px-4">
                  Browse and Buy from Marketplace
                </h1>
                <button className="bg-green-400 rounded-btn ml-4 py-1  px-8 w-2/4 text-md h-fit text-white hover:bg-green-600">
                  Explore
                </button>
              </div>
            </div>
            <div className="p-auto m-auto">
              <FaArrowAltCircleRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
