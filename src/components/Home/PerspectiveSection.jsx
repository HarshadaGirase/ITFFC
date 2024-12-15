import boyImg from "../../assets/boyImg.png"; // Update the path to the correct location

const PerspectiveSection = () => {
  return (
    <div className="flex flex-col bg-gray-50 p-6 sm:p-10 lg:px-40  gap-6">
      <div>
        <h2 className="text-center text-[21px] sm:text-[24px] md:text-[32px] lg:text-[40px] font-bold mb-4 font-quicksand leading-[26px] sm:leading-[30px] md:leading-[40px] lg:leading-[50px]">
          A Global Perspective
        </h2>
      </div>
      <div>
        <p className="px-14 0text-center text-black text-[12px] sm:text-[14px] md:text-[18px] lg:text-[24px] mb-6 leading-[16px] sm:leading-[20px] md:leading-[26px] lg:leading-[29px]">
          Over the past 15 years, we have seen firsthand how the high cost of
          therapy and education forces parents to make difficult choices—often
          delaying essential services that can significantly impact a child’s
          developmental health.{" "}
          <span className="font-bold text-gray-800">
            Our goal is to change this.
          </span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full">
        {/* Left Box */}
        <div className="bg-white shadow-lg rounded-2xl border-2 flex-1 flex items-center justify-center lg:p-4 min-h-[151px] sm:min-h-[250px] md:min-h-[200px] lg:min-h-[335px] ">
          <p className="text-black text-[14px] sm:text-[18px] md:text-[24px] lg:text-[30px] font-quicksand leading-[18px] sm:leading-[24px] md:leading-[32px] lg:leading-[46px] text-left font-semibold p-10">
            Every <span className="text-orange-500 font-bold">5 in 10</span>{" "}
            children are experiencing severe economic hardships globally.
          </p>
        </div>
        {/* Right Box */}   
        <div className=" rounded-lg flex-1 flex items-center justify-center p-4 min-h-[151px] sm:min-h-[250px] md:min-h-[330px]">
          <img
            src={boyImg}
            alt="Global Hardship Graphic"
            className="rounded-lg object-contain max-h-full max-w-full"
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
