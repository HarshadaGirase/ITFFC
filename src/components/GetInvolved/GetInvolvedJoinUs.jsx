import React from 'react';
import img6 from '../../assets/img6.png';
const GetInvolvedJoinUs = () => {
  return (
    <div className="min-h-screen  flex flex-col md:flex-row items-center justify-center mb-6">
      {/* Left Side Image */}
      <div className="md:w-1/2 w-full">
        <img
          src={img6}// Replace with your image URL
          alt="Children playing"
          className="w-[671px] h-[946px] object-cover hidden lg:block"
        />
      </div>

      {/* Right Side Form */}
      <div className="md:w-1/2 w-full px-4  bg-white  md:p-10 lg:p-10">
        <h2 className="   text-[33px]  leading-[41px] sm:text-[34px]  sm:leading-[41px] md:text-[48px]  md:leading-[60px]  lg:text-[48px]  lg:leading-[60px] font-bold font-quicksand text-gray-800 mb-4">
          Join us in making a difference!
        </h2>
      
        <p className="mr-8  text-gray-600 text-[16px] leading-[26.28px] sm:text-[16px] sm:leading-[26.28px] md:text-[20px]  md:leading-[30px] lg:text-[20px] lg:leading-[30px] mb-6">
          Your time and skills can have a profound impact on the lives of the children we serve.
        </p>
      
        <form className="space-y-4  ">
          {/* Name Field */}
          <div>
            <label className="block text-black font-medium mb-2 font-inter text-[14px] leading-[18px]">Name</label>
            <input
              type="text"
              placeholder=""
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-black font-medium mb-2 font-inter text-[14px] leading-[18px]" >Email</label>
            <input
              type="email"
              placeholder=""
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Phone Number Field */}
          <div className=''>
            <label className="block text-black font-medium  mb-2 font-inter text-[14px] leading-[18px]">Phone number</label>
            <div className="flex font-inter text-[15px]">
              <select className="border border-gray-300 rounded-l-lg px-4 py-2  focus:ring-2 focus:ring-blue-400">
                <option value="IN">IN</option>
                <option value="US">US</option>
                <option value="UK">UK</option>
              </select>
              <input
                type="tel"
                placeholder=""
                className="flex-1 border  border-gray-300 rounded-r-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Profession Checkboxes */}
          <div>
            <label className="block text-black font-medium mb-2  font-inter text-[14px] leading-[20px]">Profession</label>
            <div className="grid grid-cols-2 gap-2">
              <label className="flex items-center text-[16px] leading-[24px] font-inter">
                <input
                  type="checkbox"
                  className="mr-2"
                />
                Therapist
              </label>
              <label className="flex items-center text-[16px] leading-[24px] font-inter">
                <input
                  type="checkbox"
                  className="mr-2"
                />
                Special Educator
              </label>
              <label className="flex items-center text-[16px] leading-[24px] font-inter">
                <input
                  type="checkbox"
                  className="mr-2"
                />
                Pediatrician
              </label>
              <label className="flex items-center text-[16px] leading-[24px] font-inter">
                <input
                  type="checkbox"
                  className="mr-2"
                />
                Neurologist
              </label>
              <label className="flex items-center text-[16px] leading-[24px] font-inter">
                <input
                  type="checkbox"
                  className="mr-2"
                />
                Other
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-[#304598] text-white font-medium py-2 rounded-full hover:bg-blue-700 transition duration-300 font-inter text-[15px]" 
            >
              Apply
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetInvolvedJoinUs;
