import React from "react";

const ProjectShowcase = () => {
  return (
    <div>
      <div className="text-left font-bold text-3xl text-slate-400 ">
        Inspiring Projects made on EZ !
      </div>
      <div className="flex flex-col "> 
        <div class=" grid grid-rows-6 grid-flow-col p-2  text-white   h-[80vh] items-center ">
          <div class="row-span-2 ... bg-red-400    h-full w-full text-center ">01</div>
          <div class=" ... bg-yellow-400   h-full w-full text-center ">02</div>
          <div class="...  bg-zinc-600   h-full w-full text-center ">03</div>
          <div class="... bg-slate-400   h-full w-full text-center  ">04</div>
          <div class="... bg-blue-400   h-full w-full text-center ">05</div>
          <div class=" ... bg-orange-400   h-full w-full text-center ">02</div>
          <div class="... bg-green-400   h-full w-full text-center ">03</div>
          <div class="row-span-2 ...  bg-lime-200    h-full w-full text-center  ">01</div>
          <div class="... bg-red-400   h-full w-full text-center  ">04</div>
          <div class="... bg-pink-400   h-full w-full text-center ">05</div>
          <div class=" ...  bg-amber-600   h-full w-full text-center ">02</div>
          <div class="... bg-lime-900   h-full w-full text-center ">03</div>
          <div class="... bg-purple-400   h-full w-full text-center  ">04</div>
          <div class="... bg-teal-400   h-full w-full text-center ">05</div>
          <div class="row-span-2 ... bg-cyan-400    h-full w-full text-center  ">01</div>
    </div>
        
      </div>
      <button className="bg-orange-400 btn hover:bg-orange-600 join-item w-[15%] text-white ">
        View More Projects
      </button>
    </div>
  );
};

export default ProjectShowcase;
