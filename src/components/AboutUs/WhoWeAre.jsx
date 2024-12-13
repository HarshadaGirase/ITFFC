import React from 'react';
import aboutimg from '../../assets/aboutimg.png';
import img5 from '../../assets/img5.png';
const WhoWeAre = () => {
  return (
    <div className="bg-gray-50 py-10  ">
      {/* Text Section */}
      <div className="  lg:max-w-7xl mx-auto text-center  px-12 flex flex-col gap-2   ">
        <div className='border-2 border-gray-200 bg-white '>
        
        <h2 className="text-[40px]  leading-[50px] text-black font-quicksand px-6 mb-16 mt-8">Who Are We?</h2>
        
        <p className="px-10 text-black text-[16px] leading-[19.36px] sm:text-[16px] sm:leading-[19.36px] md:text-[24px] md:leading-[29px] lg:text-[24px] lg:leading-[29px]   ">
          At Innocent Times Foundation, we are dedicated to nurturing the potential of every child, embracing diversity, and building a brighter future.
        </p>
        <p className=" px-11 text-black text-[16px] leading-[19.36px] sm:text-[16px] sm:leading-[19.36px] md:text-[24px] md:leading-[29px] lg:text-[24px] lg:leading-[29px]   mb-8">
          Your support can help us continue our mission to provide inclusive education, support services, and a caring community for neurodiverse and underprivileged children. 
          <span className="font-bold  text-black text-[16px] leading-[19.36px] sm:text-[16px] sm:leading-[19.36px] md:text-[24px] md:leading-[29px] lg:text-[24px] lg:leading-[29px]"> Together, we can make a difference.</span>
        </p>
        </div>
        <div className="max-w-7xl">
        <img
          src={aboutimg} // Replace this placeholder with the actual image URL
          alt="Community working together"
          className="w-full  lg:h-[251px]  shadow-md object-cover mx-auto hidden md:block lg:block "
        />
        <img src={img5}
        alt=""
        className=" block md:hidden w-full h-auto "/>
      </div>
      </div>

      {/* Full-Width Image Section */}
      
    </div>
  );
};

export default WhoWeAre;
