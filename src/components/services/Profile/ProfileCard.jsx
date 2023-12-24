import React from "react";
import Rating from "./Rating";
import profile from "../../../assets/BuyerService/profile.png";
import location from "../../../assets/location.png";
import info from "../../../assets/info.jpg";
import ArrowRight from "../../../assets/hero/arrowRight.jpg";
import orangePlus from "../../../assets/orangePlus.png";

const ProfileCard = () => {
    return (
        <div className='flex flex-col w-2/6 justify-center gap-2 border-2 shadow-xl py-4 px-4 rounded-box '>
            <div className='mx-auto'>
                <img
                    src={profile}
                    width={180}
                    height={180}
                    alt='Profile Image'
                    className='p-4'
                />
            </div>
            <div className='w-full text-center font-bold text-3xl'>
                Kashish Malhotra
            </div>
            <div >
                BCG | XLRI Placement Committee | Citi Leadership Award | P&G
                Emerging Leader | 10+ National Case Competitions | ExxonMobil |
                Urban Company
            </div>
            <div className='flex gap-2 items-center'>
                <img src={info} width={25} height={25} />
                <div className='badge badge-neutral shadow-md text-white p-2'>Consultant</div>
                <div className='badge badge-neutral shadow-md text-white p-2'>Angle Investor</div>
            </div>
            <div className="flex gap-2 items-center ">
            <div className='border px-2 rounded-box shadow-md w-fit'>
            <div>
            4.0 <Rating />
            </div>
            </div>
            <div className='border px-2 rounded-box shadow-md w-fit'>
            <div className='flex gap-2'>
            <img src={location} width={25} height={25} />
            Mumbai, India
            </div>
            </div>
            </div>
            <div className='badge badge-none'>1345+ Bookings</div>
            <div className='flex gap-2'>
                <button className='btn text-black border-orange-400  max-w-[12rem]  bg-white hover:bg-orange-400   hover:text-white shadow-lg  '>
                    Follow
                    <img
                        src={orangePlus}
                        className='max-w-[2rem]  rounded-full shadow-2xl'
                    />
                </button>
                <button className='btn text-white  max-w-[12rem]  bg-green-400 hover:bg-green-600 shadow-lg  '>
                    {" "}
                    <img
                        src={ArrowRight}
                        className='max-w-[2rem]  rounded-full shadow-2xl'
                    />{" "}
                    eZ Karo{" "}
                </button>
            </div>
        </div>
    );
};

export default ProfileCard;
