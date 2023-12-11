import React from "react";

const SearchSection = () => {
  const btn_Style = "bg-[#F0F0F0] rounded-badge md:w-[15%] focus:font-bold border-none rounded-xl text-black px-4 py-2 mt-2 focus:bg-[#62CB99]  focus:text-white ";

  return (
    <div>
    <div className="flex justify-between  py-2 text-white">
    <div className="join w-[80%]">
    <select className="select  join-item w-1/5 bg-[#62CB99]  ">
          <option disabled selected>
            Try Services
            </option>
          <option>Services</option>
          <option>Influencers</option>
          <option>Mentorship</option>
          <option>Digital Products</option>
          <option>Webinars</option>
          </select>
        <div className="w-full">
        <div>
            <input
              className="input join-item w-full bg-[#62CB99] focus:outline-none border-l-1 border-l-white placeholder-gray-300  "
              placeholder="Demand Anything - You Demand We Supply "
              />
          </div>
          </div>
          </div>
          <button className="btn join-item w-[15%] bg-[#329062] hover:bg-[#1e5037]  text-white ">Search</button>
          </div>
          <div id ="Badge" className='flex justify-center '>
    <div className='flex flex-wrap gap-2 justify-evenly w-4/5 '>
    
    <button type="radio" name="service-op" value="Website Design" aria-label="Webinars" className={` ${btn_Style}`} >Website Design</button>
    <button type="radio" name="service-op" value="T-Shirt Printing"  aria-label="T-Shirt Printing" className={` ${btn_Style}` }>T-Shirt Printing</button> 
    <button type="radio" name="service-op" value="Company Regn"  aria-label="Company Regn" className={` ${btn_Style}` }>Company Regn</button> 
    <button type="radio" name="service-op" value="Interior Design" aria-label="Interior Design" className={` ${btn_Style}`}>Interior Design</button> 

    </div>
    </div>

          </div>
          );
};

export default SearchSection;
