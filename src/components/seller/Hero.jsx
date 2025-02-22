import React from 'react'
import heroImg from '../../assets/seller/heroImg.png'
const Hero = () => {
  return (
    <div className="hero min-h-screen text-left lg:min-h-full">
    <div className="hero-content flex-col lg:flex-row-reverse justify-between">
      <img src={heroImg} className="max-w-sm lg:max-w-3xl rounded-lg shadow-2xl" />
      <div className='flex flex-col justify-between h-full gap-8'>
        <h1 className="text-5xl font-bold ">Join the eZ revolution, and start monetizing your solutions !</h1>
        <p className="py-6 text-[#5D5D5D] font-bold text-md">As a seller on eZ, you'll be able to showcase your skills, monetize your knowledge and expertise to a wider audience and earn money doing what you love.</p>
        <button className=" my-4 btn text-white hover:text-black max-w-xs bg-green-400 hover:bg-white shadow-sm shadow-black "> Become eZer ! </button>
   
      </div>
    </div>
  </div>
  )
}

export default Hero