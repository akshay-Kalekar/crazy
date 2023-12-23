import Rating from "./Rating";
import packages from "../../../assets/BuyerService/package.png";
import location from "../../../assets/location.png";
import info from "../../../assets/info.jpg";
import ArrowRight from "../../../assets/hero/arrowRight.jpg";
import rupee from "../../../assets/rupee.png";
const PackageCard = () => {
    return (
        <div className='flex flex-col w-2/6 justify-center gap-2 border-2 shadow-xl py-4 px-4 rounded-box '>
            <div className='mx-auto'>
                <img
                    src={packages}
                    alt='Profile Image'
                    className='w-full h-full'
                />
            </div>
            <div className="text-lg  w-6/4 font-bold">I will design responsive website UI UX design in figma
            </div>
            <div className='flex gap-2 items-center'>
                <img src={info} width={25} height={25} />
                <div className='badge shadow-md px-4 '>Designing </div>
            </div>
            <div className='flex gap-2'>
                <button className='btn text-black border-orange-400  max-w-[12rem]  bg-white hover:bg-orange-400   hover:text-white shadow-lg  '>
                    <img
                        src={rupee}
                        className='max-w-[2rem]  rounded-full shadow-2xl'
                    />
                    ₹ 19,265
                </button>
                <button className='btn text-white  max-w-[12rem]  bg-green-400 hover:bg-green-600 shadow-lg  '>
                    Buy Services
                    <img
                        src={ArrowRight}
                        className='max-w-[2rem]  rounded-full shadow-2xl'
                    />{" "}
                </button>
            </div>
        </div>
    );
};

export default PackageCard;
