import img1 from "../../src/assets/img1.png";

const MissionSection = () => {
  return (
    <div className="relative w-full bg-cover bg-center h-[357px] sm:h-[357px] md:h-[303px]  lg:h-[240px]" style={{ backgroundImage: `url(${img1})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative flex items-center justify-center  px-4 mt-8 sm:mt-8 text-center">
        <div className="text-white  p-4 max-w-5xl ">
          <p className=" text-[16px] sm:text-[16px] md:text-[24px] lg:text-[24px] font-quicksand leading-[20px] sm:leading-[20px] md:leading-[30px] lg:leading-[30px] font-semibold">
            At Innocent Times Foundation, we believe that every child deserves access to
            quality education and therapy, regardless of financial limitations.
          </p>
          <p className="  text-[16px] sm:text-[16px] md:text-[24px] lg:text-[24px] font-quicksand leading-[20px] sm:leading-[20px] md:leading-[30px] lg:leading-[30px] font-semibold">
            Our purpose is to ensure that these essential services are within reach for all families, fostering a healthier, more promising future for the next generation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionSection;
