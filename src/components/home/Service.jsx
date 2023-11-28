import React from 'react'
import ArrowRight from '../../assets/hero/arrowRight.jpg'
const btn_Style = "bg-[#F0F0F0] rounded-badge md:w-[15%] focus:font-bold border-none rounded-xl text-black px-4 py-2 mt-2 focus:bg-green-500 focus:text-white ";
const Service = () => {
  return (
    <div  className="mt-2">
    <div className='font-5xl font-bold px-2 '> Popular Service </div>
    <div id ="Badge" className='flex justify-center '>
    <div className='flex flex-wrap gap-2 justify-evenly w-4/5 '>
    
    <button type="radio" name="service-op" value="1:1 Mentorship"  aria-label="1:1 Mentorship" className={` ${btn_Style}` }>1:1 Mentorship</button> 
    <button type="radio" name="service-op" value="Services"  aria-label="Services" className={` ${btn_Style}` }>Services</button> 
    <button type="radio" name="service-op" value="Influence Connect" aria-label="Influence Connect" className={` ${btn_Style}`}>Influence Connect</button> 
    <button type="radio" name="service-op" value="Digital Products" aria-label="Digital Products" className={` ${btn_Style}`}>Digital Products</button> 
    <button type="radio" name="service-op" value="Webinars" aria-label="Webinars" className={` ${btn_Style}`} >Webinars</button>
    </div>
    </div>
    
    
    
    

    <div className='my-4 mx-8 text-2xl font-bold text-black'>Struggling with <span className='text-green-300'>
    UI / UX</span> Get Specialized help from experts !!! </div>
    <button className=" my-4 btn text-white hover:text-black max-w-xs bg-green-400 hover:bg-white shadow-sm shadow-black "> <img src={ArrowRight} className="max-w-[2rem]  rounded-full shadow-2xl"/>Explore Marketplace  </button>
    </div>
    )
}

export default Service