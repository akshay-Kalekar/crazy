import React from "react";
import ArrowRight from '../../assets/hero/arrowRight.jpg'
import stats from '../../assets/hero/stats.png'
const Showcase = () => {
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={stats}
            height={360}
            width={360}
            className="rounded-lg hidden md:block "
          />
          <div>
            <h1 className="text-3xl text-black font-bold">Build your store. Showcase work.
            Sell Service -
            <br/>
            <span className="bg-blue-800 mx-2 px-2 text-white">
                All with ''ez''
            </span>
            <img
            src={stats}
            height={240}
            width={240}
            className="mx-auto my-8 rounded-lg  md:hidden "
          />
            </h1>   
            <button className=" text-white  hover:text-black my-4 btn btn-primary max-w-xs bg-green-400 hover:bg-white shadow-sm shadow-black "> <img src={ArrowRight} className="max-w-[2rem]  rounded-full shadow-2xl "/>Launch Your Page  </button>
          </div>
        </div>
      </div>
      <div>
      
      </div>
    </div>
  );
};

export default Showcase;
