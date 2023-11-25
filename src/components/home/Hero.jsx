import React from 'react'
import ginny from '../../assets/hero/ginny.jpg'
import ArrowRight from '../../assets/hero/arrowRight.jpg'
const Hero = () => {
  return (
    <div className="hero min-h-screen  text-black pt-[4rem]">
    <div className="  hero-content flex-col lg:flex-row-reverse">
      <img src={ginny} className="max-w-[12rem] rounded-lg shadow-2xl" />
      <div className="flex flex-col text-left"> 
        <h1 className="text-2xl font-semibold">Introducing World's <span className="font-bold text-black">  First Service <br/> Marketplace  </span>with <span className="font-bold text-green-400 ">   AI-Powered<br/> MatchMaking </span><br/></h1>
        <p className="py-6">No more surfing  through numerous platforms or struggling to identify <br/>the perfect professional.</p>
        <button className="btn btn-primary  max-w-[12rem]  bg-green-400 hover:bg-white shadow-lg shadow-black "> <img src={ArrowRight} className="max-w-[2rem]  rounded-full shadow-2xl"/> eZ Karo </button>
        
      </div>
    </div>
  </div>
  )
}

export default Hero