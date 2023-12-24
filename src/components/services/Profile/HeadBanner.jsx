import React from "react";
import profile from "../../../assets/BuyerService/profile.png";
import banner from "../../../assets/BuyerService/banner.png";

const HeadBanner = () => {
    return (
        <div className='bg-white rounded-lg shadow-lg w-full flex items-center h-[14vh] mt-4 border-2 '>
            <div className='flex-none w-1/5 '>
                <img
                    src={profile}
                    width={120}
                    height={120}
                    alt='Profile Image'
                    className='p-4'
                />
            </div>
            <div className='flex-grow pl-8 pr-4 w-full'>
                <h1 className='text-4xl font-bold uppercase w-fit'>
                    Kashish Malhotra
                </h1>
            </div>

            <div
                className='flex-none w-2/5 bg-cover bg-center rounded-r-xl'
                style={{
                    backgroundImage: `url(${banner})`,
                    minHeight: "108px",
                    overflow: "hidden",
                }}
            ></div>
        </div>
    );
};

export default HeadBanner;
