import PackageCard from "./PackageCard";

const Packages = () => {
    const btn_Style =
        "bg-[#F0F0F0] rounded-badge md:w-[15%] focus:font-semibold  rounded-xl text-black px-4 py-2 mt-2 focus:shadow-green-500 focus:shadow-md focus:border-2 ";

  return (
    <div className="w-full p-8 flex flex-col gap-4">
    <div className='flex flex-wrap gap-2 justify-evenly w-4/5 '>
    <button
              type='radio'
              name='service-op'
              value='1:1 Mentorship'
              aria-label='1:1 Mentorship'
              className={` ${btn_Style}`}
              >
              Consultation
              </button>
              <button
              type='radio'
              name='service-op'
              value='Services'
              aria-label='Services'
              className={` ${btn_Style}`}
              >
              Services
              </button>
              <button
              type='radio'
              name='service-op'
              value='Influence Connect'
              aria-label='Influence Connect'
              className={` ${btn_Style}`}
          >
          Influence Connect
          </button>
          </div>
          <div className="font-bold text-xl ">Packages</div>
          <div className="flex flex-wrap gap-4">
          <PackageCard/>
          <PackageCard/>
          </div>
          </div>
          );
        }
        
        export default Packages
        