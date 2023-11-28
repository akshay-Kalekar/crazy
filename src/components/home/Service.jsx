import React from 'react'
import ArrowRight from '../../assets/hero/arrowRight.jpg'
const badge_Style = "badge bg-[#F0F0F0] border-none text-black p-4";
const Service = () => {
  return (
    <div  className="mt-2">
    <div className='font-5xl font-bold p-2'> Popular Service </div>
    <div id ="Badge" className='flex justify-center '>
    <div className='flex flex-wrap gap-2 justify-evenly w-3/5 '>
    <div className={`  ${badge_Style}`}  >1:1 Mentorship</div>
    <div className={badge_Style}>Services</div>
    <div className={badge_Style}>Influence Connect</div>
    <div className={badge_Style}>Digital Products</div>
    <div className={badge_Style}>Webinars</div>
    </div>
    </div>

    <div id ="ServiceCorossal">
    <div>
     <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    </div>
    </div>

    <div className='my-4 mx-8 text-2xl font-bold text-black'>Struggling with <span className='text-green-300'>
    UI / UX</span> Get Specialized help from experts !!! </div>
    <button className=" my-4 btn btn-primary max-w-xs bg-green-400 hover:bg-white shadow-sm shadow-black "> <img src={ArrowRight} className="max-w-[2rem]  rounded-full shadow-2xl"/>Explore Marketplace  </button>
    </div>
    )
}

export default Service