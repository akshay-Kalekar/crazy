import React from 'react'
import ArrowRight from '../../assets/hero/arrowRight.jpg'
import ezLogo from '../../assets/hero/ezLogo.png'

const Catch = () => {
  return (
    <div className="hero min-h-screen text-black">
    <div className="hero-content text-center">
      <div className="max-w-xl">
      <img className=" mx-auto mb-10" height={80} width={80} src={ezLogo}/>
        <h1 className="text-5xl font-bold">Build your<br/>
        Personal  Brand </h1>
        <p className="py-6  text-slate-400">Your All-in-One Bio Link Engineered Landing Page  for Conversions. Showcase Your Entire Portfolio & Sell Services in One Integrated Personal Page</p>
        <button className=" my-4 btn text-white  hover:btn-primary max-w-xs bg-green-400 hover:bg-white shadow-sm shadow-black "> <img src={ArrowRight} className="max-w-[2rem]  rounded-full shadow-2xl"/>Create Your eZ  Link  </button>
    
        </div>
    </div>
  </div>
  )
}

export default Catch