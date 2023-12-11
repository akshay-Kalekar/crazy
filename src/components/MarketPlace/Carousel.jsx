import React from "react";
import c0_ser from "../../assets/marketPlace/c0_ser.png";
import c1_men from "../../assets/marketPlace/c1_men.png";
import c2_influ from "../../assets/marketPlace/c2_influ.png";
import c3_prod from "../../assets/marketPlace/c3_prod.png";
import c4_webinar from "../../assets/marketPlace/c4_webinar.png";
const Carousel = () => {
  return (
    <>
    <div className="text-left text-3xl mt-8 mb-4">
      Browser By Category
    </div>
    <div className="carousel carousel-center flex justify-between  p-4 space-x-4 bg-none rounded-box w-full">
    <div className="carousel-item lg:w-1/6">
    <div className="bg-blue-500 flex flex-col py-8 rounded-box w-full hover:bg-blue-600">
        <h3 className="text-white font-bold text-lg"> Services </h3>
        <img src={c0_ser} className="rounded-box w-3/4 m-auto" />
        </div>
      </div>
      <div className="carousel-item lg:w-1/6">
        <div className=" bg-slate-500 flex flex-col py-8 rounded-box w-full hover:bg-slate-600">
        <h3 className="text-white font-bold text-lg"> Mentorship </h3>
        <img src={c1_men} className="rounded-box w-full m-auto h-full" />
        </div>
      </div>
      <div className="carousel-item lg:w-1/6">
      <div className=" bg-orange-400 flex flex-col py-8 rounded-box w-full hover:bg-orange-500">
        <h3 className="text-white font-bold text-lg"> Influencers </h3>
          <img src={c2_influ} className="rounded-box w-full m-auto" />
          </div>
          </div>
          <div className="carousel-item lg:w-1/6">
          <div className="bg-green-400 flex flex-col py-8 rounded-box w-full hover:bg-green-600">
          <h3 className="text-white font-bold text-lg"> Digital Products </h3>
          <img src={c3_prod} className="rounded-box w-full m-auto" />
          </div>
      </div>
      <div className="carousel-item lg:w-1/6">
        <div className="bg-purple-500 flex flex-col py-8 rounded-box w-full hover:bg-purple-600">
        <h3 className="text-white font-bold text-lg"> Webinar </h3>
        <img src={c4_webinar} className="rounded-box w-full m-auto" />
        </div>
        </div>
        </div>
        </>
        );
};

export default Carousel;
