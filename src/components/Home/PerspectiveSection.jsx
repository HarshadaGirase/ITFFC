import boyImg from "../../assets/boyImg.png"; // Update the path to the correct location

const PerspectiveSection = () => {
  return (
    <div className="flex flex-col bg-gray-50 p-6 px-10  xl:px-10 2xl:px-40  gap-4">
      <div>
        <h2 className="text-center text-[21px] sm:text-[24px] md:text-[32px] lg:text-[40px] font-bold mb-4 font-quicksand leading-[26px] sm:leading-[30px] md:leading-[40px] lg:leading-[50px]">
          A Global Perspective
        </h2>
      </div>
      <div>
        <p className="px-8 text-center text-black text-[9px] sm:text-[9px] md:text-[18px] lg:text-[24px] mb-6 leading-[10px] sm:leading-[20px] md:leading-[26px] lg:leading-[29px]">
        The World Health Organization (WHO) estimates that approximately 15-20% of the global population exhibits some form of neurodivergence. Neurodiverse individuals, including children, often face significant challenges related to empowerment and support.
             {" "}
          <span className="lg:font-bold text-black ">
            Our goal is to change this.
          </span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full max-w-5xl  mx-auto">
        {/* Left Box */}
        <div className="bg-white shadow-lg rounded-2xl border-2 flex-1 flex items-center justify-center  ">
          <p className="text-black text-[14px] sm:text-[18px] md:text-[36px] lg:text-[40px] font-quicksand leading-[18px] sm:leading-[24px] md:leading-[32px] lg:leading-[46px] text-left font-semibold p-10 lg:p-10">
            Every <span className="text-orange-500 font-bold">2 in 10</span>{" "}
           children exhibit some form of neurodivergence globally.
          </p>
        </div>
        {/* Right Box */}   
        <div className=" rounded-lg flex-1 flex items-center justify-center lg:p-4 ">
          <img
            src={boyImg}
            alt="Global Hardship Graphic"
            className="rounded-lg object-contain h-full w-full"
          />
        </div>
      </div>
      <p className="text-black font-quicksand text-[11px] sm:text-[12px] md:text-[14px] lg:text-[16px] text-center md:text-right lg:text-right ">
        *Data from UNICEF September 2024
      </p>
    </div>
  );
};

export default PerspectiveSection;
