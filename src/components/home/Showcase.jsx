import React from "react";
import ArrowRight from "../../assets/hero/arrowRight.jpg";
import stats from "../../assets/hero/stats.png";
const Showcase = () => {
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={stats}
            height={360}
            width={360}
            className="rounded-lg hidden md:block w-3/5"
          />
          <div className="md:text-left">
            <h1 className="text-3xl md:text-5xl text-black font-bold">
              Build your store. Showcase work.
              <br />
              <h1 className="pt-2 ">
                Sell Service -{" "}
                <br className=" sm:hidden md:block "/>
                <span className="md:hidden bg-blue-600  px-4 text-white rounded-md md:mt-2 w-fit ">
                   All with ''ez''
                </span>
                <div className="hidden md:block bg-blue-600  px-4 text-white rounded-md md:mt-2 w-fit ">
                 All with ''ez''
                </div>
              </h1>
              <img
                src={stats}
                height={240}
                width={240}
                className="mx-auto my-8 rounded-lg  md:hidden "
              />
            </h1>
            <button className=" text-white  hover:text-black my-4 btn btn-primary max-w-xs bg-green-400 hover:bg-white shadow-sm shadow-black ">
              {" "}
              <img
                src={ArrowRight}
                className="max-w-[2rem]  rounded-full shadow-2xl "
              />
              Launch Your Page{" "}
            </button>
            <hr />
            <div className="stats rounded-sm    bg-white text-black shadow-xl shadow-green-200 border mt-2 text-center w-full">
              <div className="stat  ">
                <div className="stat-value  text-lg lg:text-2xl">1111+</div>
                <div className="stat-desc text-black lg:text-lg">Demands fullfilled</div>
              </div>

              <div className="stat">
                <div className="stat-value text-lg lg:text-2xl">300+</div>
                <div className="stat-desc text-black lg:text-lg">Service Categories</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Showcase;
