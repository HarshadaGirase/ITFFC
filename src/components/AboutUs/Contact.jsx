import React from 'react';

const Contact = () => {
  return (
    <div className="bg-[#FF8100] min-h-screen flex items-center justify-center ">
      <div className=" rounded-lg  max-w-5xl w-full  py-16 md:p-12">
        <h1 className="text-[48px] leading-[60px]  font-bold text-center text-white font-quicksand mb-4">
          Contact Us
        </h1>
        <p className="text-center text-white text-[20px] leading-[30px] mb-8 font-inter p-8 " >
          Reach out to us for more information about our programs, volunteer opportunities, or to discuss partnership possibilities. We are here to answer your questions and work together towards a common goal of child welfare and empowerment.
        </p>
        <p className="text-center text-white  text-[16px] leading-[20px] font-quicksand mb-6">
          We would love to hear from you!
        </p>
        <div className='flex flex-col gap-8 items-center justify-center   '>
        <form  className=''>
          <div className="p-4  space-y-4 text-center">
          <input
            type="text"
            placeholder="Name"
            className="w-full max-w-md px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
           
           
          <input
            type="email"
            placeholder="Email"
            className="w-full max-w-md  px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
             
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full max-w-md  px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
             </div>
             <div className='text-center'>
          <button
            type="submit"
            className="w-[276px] h-[36px] bg-[#304598] font-inter text-white text-[16px] leading-[24px] font-normal py-2 rounded-full hover:bg-blue-700 transition duration-300 text-center "
          >
            Submit
          </button>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
