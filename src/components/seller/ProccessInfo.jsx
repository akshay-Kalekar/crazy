import React from "react";

const ProccessInfo = () => {
  return (
    <div className="my-16">
      <h1 className="text-5xl font-bold ">
        Join the eZ revolution, and start monetizing your solutions !
      </h1>
      <div className="m-auto w-fit ">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
        {/**card1**/}
          <div className="card w-96 p-0 shadow-xl rounded-t-xl">
              <div
                className="h-[4rem] w-full bg-orange-400 rounded-t-xl "
              >
              </div>
            
            <div className="card-body text-left">
              <h2 className="card-title text-[#146B1E]">Sign up:</h2>
              <p>
                Create your account by filling out some basic information about
                yourself, such as your name, email address, and location.?
              </p>
            </div>
          </div>
          <div className="card w-96 p-0 shadow-xl rounded-t-xl">
          <div
            className="h-[4rem] w-full bg-[#ABA6A2] rounded-t-xl "
          >
          </div>
        
        <div className="card-body text-left">
          <h2 className="card-title text-[#146B1E]">Set up your profile: </h2>
          <p>
          This is where you showcase your skills, experience, education, and achievements. Make your profile more attractive and professional.
          </p>
        </div>
      </div>
      <div className="card w-96 p-0 shadow-xl rounded-t-xl">
      <div
        className="h-[4rem] w-full bg-[#5AC96C] rounded-t-xl "
      >
      </div>
    
    <div className="card-body text-left">
      <h2 className="card-title text-[#146B1E]">List your services: </h2>
      <p>
      Sell your have that people might need, and create listings that describe your services in detail. You can set your own prices, and offer different packages or add-ons to make your services more attractive.

      </p>
    </div>
  </div>
        </div>
      </div>
    </div>
  );
};

export default ProccessInfo;
