import React from 'react'
import mob from "../../assets/marketPlace/mobile.png";
const Display = () => {
  return (
    <div>      <div className=" p-16 w-[0%] h-[200px] mt-[50px] flex flex-row justify-between  bg-[#fffafa] md:w-[700px] md:h-[300px] lg:w-full lg:h-fit rounded-[10px] shadow-md border-4">
    <div className="flex flex-col items-center justify-center gap-8">
      <h2 className=" text-center text-shadow-custom text-[10px] font-bold leading-[20px] text-[#146B1E] md:text-[20px] md:leading-[40px] lg:text-[50px] lg:leading-[60px] ">
        Grow your Business with
         eZ <br />Consulting
      </h2>
      <p className=" text-[9px] font-normal  md:text-[13px] lg:text-[24px] text-[#146B1E]   ">
        “eZ helps brands grow faster, better !
      </p>
      <button className="  w-[100px] h-[50px] md:w-[150px] md:h-[70px] lg:w-[223px] lg:h-[50px]  md:text-[20px] lg:text-[24px] rounded-[15px] bg-[#1DB86D] text-[white] text-[13px]   ">
        Book 1:1 Call
      </button>
    </div>
    <div>
      <img
        src={mob}
        alt="Image 2"
        className=" md:w-[230px] md:h-[300px] lg:w-[373px] lg:h-[343px]   w-[150px] h-[200px] "
      />
    </div>
  </div></div>
  )
}

export default Display