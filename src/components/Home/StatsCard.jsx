import innocenttimeslogo from '../../assets/innocenttimeslogo.png'

const StatsCard = () => {
  return (
    <div className="bg-[#304598] text-white py-10  md:px-20">
      <div className="max-w-8xl mx-auto">
        <div className="flex flex-col md:flex-row  items-center ">
          <div className="mb-2  md:mb-0 flex items-center">
            <img
              src={innocenttimeslogo} // Replace with the logo's actual path
              alt="School Logo"
              className="h-[69px]  lg:mr-32"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center  ">
            <div>
              <p className="text-[64px] sm:text-[64px] md:text-[65px] lg:text-[80px] font-quicksand font-semibold">1500+</p>
              <p className="text-[12px] sm:text-[12px] md:text-[13px] lg:text-[16px] mt-2 font-inter leading-[15.46px] sm:leading-[15.46px] md:leading-[15.61px] lg:leading-[19.36px] mt-2">Children Impacted</p>
            </div>

            <div>
              <p className="text-[64px] sm:text-[64px] md:text-[65px] lg:text-[80px] font-quicksand font-semibold">100+</p>
              <p className="text-[12px] sm:text-[12px] md:text-[13px] lg:text-[16px] mt-2 font-inter leading-[15.46px] sm:leading-[15.46px] md:leading-[15.61px] lg:leading-[19.36px] mt-2">Combined Staff Years Of Experience</p>
            </div>

            <div>
              <p className="text-[64px] sm:text-[64px] md:text-[65px] lg:text-[80px] font-quicksand font-semibold">16+</p>
              <p className="text-[12px] sm:text-[12px] md:text-[13px] lg:text-[16px] mt-2 font-inter leading-[15.46px] sm:leading-[15.46px] md:leading-[15.61px] lg:leading-[19.36px] mt-2">Years Of Service</p>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center px-5 md:px-10 lg:px-28  ">
          <p className=" text-[20px] sm:text-[20px] md:text-[24px] lg:text-[32px] font-semibold font-quicksand leading-[25px] sm:leading-[25px] md:leading-[25px] lg:leading-[40px]">
            At Innocent Times School, we believe in specialized education to
            empower neurodiverse children for holistic development.
          </p>

          <button className="mt-20  bg-white text-[#304598] font-semibold font-quicksand rounded-full shadow hover:bg-gray-200 w-[151px] h-[36px] sm:h-[26px] sm:w-[151px] md:w-[266px] md:h-[45px]   lg:w-[266px] lg:h-[45px]">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
