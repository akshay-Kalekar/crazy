import React from "react";
import hero2Img from "../../assets/seller/hero2Img.png";
import ArrowRight from "../../assets/marketPlace/rightArrow.svg";
const Reason = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold ">Why Sell on eZ ? </h1>
      <div className="hero w-full flex justify-center ">
        <div className="hero-content w-full flex flex-col lg:flex-row text-left justify justify-between">
          <img src={hero2Img} className="max-w-sm rounded-lg" />
          <div className="flex flex-col">
            <span className="badge rounded-box font-bold bg-indigo-100 p-4">
              {" "}
              {} NO COMMISSION
            </span>
            <h1 className="text-2xl font-bold">Sell at 0% commission</h1>
            <p className="py-6 w-4/5"></p>
            <button className="btn text-white rounded-full max-w-[12rem]  bg-green-400 hover:bg-white hover:text-black ">
              {" "}
              <img
                src={ArrowRight}
                className="max-w-[2rem]  rounded-full shadow-2xl"
              />{" "}
              Become an eZer
            </button>
            <div className="stats my-4 rounded-none border-top-2 border-black">
              <div className="stat place-items-center">
                <div className="stat-value">$1200</div>
                <div className="stat-title">Average savings per customer</div>
              </div>
              <div className="stat place-items-center">
                <div className="stat-value">135+</div>
                <div className="stat-title">Currencies Supported</div>
              </div>
            </div>
            </div>
            </div>
            </div>
    </div>
  );
};

export default Reason;
