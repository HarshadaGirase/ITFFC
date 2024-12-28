import innocenttimeslogo from '../../assets/innocenttimeslogo.png';

const StatsCard = () => {
  return (
    <div className="bg-[#304598] text-white py-10 px-6">
      <div className="max-w-8xl mx-auto">
        {/* Logo and Stats Grid */}
        <div className="flex flex-col md:flex-row items-center justify-center text-center">
          {/* Logo */}
          <div className="mb-8 md:mb-0 flex items-center justify-center md:mr-16">
            <img
              src={innocenttimeslogo}
              alt="School Logo"
              className="h-[69px]"
            />
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div>
              <p className="text-[64px] sm:text-[64px] md:text-[65px] lg:text-[80px] font-quicksand font-semibold">
                1500+
              </p>
              <p className="text-[12px] sm:text-[12px] md:text-[13px] lg:text-[16px] mt-2 font-inter leading-[15.46px] sm:leading-[15.46px] md:leading-[15.61px] lg:leading-[19.36px]">
                Children Impacted
              </p>
            </div>
            <div>
              <p className="text-[64px] sm:text-[64px] md:text-[65px] lg:text-[80px] font-quicksand font-semibold">
                100+
              </p>
              <p className="text-[12px] sm:text-[12px] md:text-[13px] lg:text-[16px] mt-2 font-inter leading-[15.46px] sm:leading-[15.46px] md:leading-[15.61px] lg:leading-[19.36px]">
                Combined Staff Years Of Experience
              </p>
            </div>
            <div>
              <p className="text-[64px] sm:text-[64px] md:text-[65px] lg:text-[80px] font-quicksand font-semibold">
                16+
              </p>
              <p className="text-[12px] sm:text-[12px] md:text-[13px] lg:text-[16px] mt-2 font-inter leading-[15.46px] sm:leading-[15.46px] md:leading-[15.61px] lg:leading-[19.36px]">
                Years Of Service
              </p>
            </div>
          </div>
        </div>

        {/* Heading and Button */}
        <div className="mt-20 text-center max-w-4xl mx-auto">
          <p className="text-[20px] sm:text-[20px] md:text-[24px] lg:text-[32px] font-semibold font-quicksand leading-[25px] sm:leading-[25px] md:leading-[25px] lg:leading-[40px]">
            At Innocent Times School, we believe in specialized education to
            empower neurodiverse children for holistic development.
          </p>

          <button className="mt-10 bg-white text-[#304598] font-semibold font-quicksand rounded-full shadow hover:bg-gray-200 w-[151px] h-[36px] sm:h-[26px] sm:w-[151px] md:w-[266px] md:h-[45px] lg:w-[266px] lg:h-[45px]">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
