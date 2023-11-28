import React from "react";

const Subscription = () => {
  return (
    <div className="flex justify-center my-2 ">
      <div className="border border-black bg-green-400 shadow-lg shadow-black w-4/5 flex flex- flex-wrap items-center justify-center gap-2 p-2 rounded-sm">
        <div className="join-item text-white font-medium text-center ">
          Get Started in 30 Seconds
        </div>
        <input
          className="input input-bordered join-item bg-white w-4/5 md:w-fit "
          placeholder="Email"
        />
        <button className="btn join-item text-white rounded-sm ">Start free trail</button>
      </div>
    </div>
  );
};

export default Subscription;
