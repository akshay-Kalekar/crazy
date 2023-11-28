import React from 'react'
import ginny from '../../assets/hero/ginny.png'
import ArrowRight from '../../assets/hero/arrowRight.jpg'
const Hero = () => {
  return (
    <div className="hero min-h-screen  text-black pt-[4rem] bg-hero-img">
    <div className="  hero-content flex-col lg:flex-row-reverse px-16">
      <img src={ginny} className="max-w-48  sm:w-72 sm:shadow-none md:w-3/5 lg:w-2/5 rounded-lg shadow-2xl" />
      <div className="flex flex-col text-left sm:justify-center  lg:w-3/5"> 
        <h1 className="text-2xl md:text-4xl font-semibold">Introducing World's <span className="font-bold text-black">  First Service <br/> Marketplace  </span>with <span className="font-bold text-green-400 ">   AI-Powered<br/> MatchMaking </span><br/></h1>
        <p className="py-6 md:text-xl lg:font-bold ">No more surfing  through numerous platforms or struggling to <br/> identify the perfect professional.</p>
        <button className="btn text-white  max-w-[12rem]  bg-green-400 hover:bg-white hover:text-black shadow-lg shadow-black "> <img src={ArrowRight} className="max-w-[2rem]  rounded-full shadow-2xl"/> eZ Karo </button>
      </div>
    </div>
  </div>
  )
}

export default Hero