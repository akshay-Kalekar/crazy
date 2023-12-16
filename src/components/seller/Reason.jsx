import React from "react";
import hero2Img from "../../assets/seller/hero2Img.png";
import ArrowRight from "../../assets/hero/arrowRight.jpg";

const Reason = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold ">Why Sell on eZ ? </h1>
      <div className="hero w-full flex justify-center ">
        <div className="hero-content w-full flex flex-col lg:flex-row text-left justify justify-between h-full">
          <img src={hero2Img} className="max-w-3xl rounded-lg w-50%" />
          <div className="flex flex-col h-full justify-between gap-8 w-50% p-4 pl-32">
            <span className="badge rounded-box font-bold bg-indigo-100 p-4">
              {" "}
              {} NO COMMISSION
            </span>
            <h1 className="text-2xl font-bold">Sell at 0% commission</h1>
            <p className="py-6 w-4/5">You can sell and host a variety of offerings on your website. Ranging from courses,workshops,appointments to communities and affiliate products communties and affiliate products- you can sell it all! All this at 0% cut.</p>
            <button className=" my-4 btn text-white hover:text-black max-w-xs bg-green-400 hover:bg-white shadow-sm shadow-black "> <img src={ArrowRight} className="max-w-[2rem] bg-white  rounded-full shadow-2xl"/>Explore Marketplace  </button>
   
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
