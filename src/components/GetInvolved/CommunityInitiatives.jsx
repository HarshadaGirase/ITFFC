import React from "react";
import img3 from '../../assets/img3.png';
import img4 from '../../assets/img4.png';


const CommunityInitiatives = () => {
  const services = [
    {
      id: 1,
      title: "Subsidized Services and Admissions",
      description:
        "We ensure financial challenges don’t block access to quality education, offering subsidized services so every child gets the care they deserve.",
      image: img4, // Replace with actual image URL
    },
    {
      id: 2,
      title: "Meal a Day Scheme",
      description:
        "Our Meal a Day Scheme offers nutritious meals to underprivileged children, ensuring they receive the essential dietary support for their physical and mental development.",
      image: img3, // Replace with actual image URL
    },
    
  ];

  return (
    <div className="p-8 bg-gray-50">
      <p className="p-2 font-quicksand text-[24px] leading-[30px] sm:text-[24px] sm:leading-[30px]  md:text-[40px] md:leading-[50px] lg:leading-[50x] lg:text-[40px] font-bold  text-center mb-8">
      
      Community Initiatives
       
      </p>
      <div className="flex flex-col gap-8 md:gap-12 px-6 sm:px-8 md:px-40 lg:px-48  mb-8 ">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col md:flex-row bg-white shadow-md rounded-xl  border-slate-600  overflow-hidden"
          >
            {/* Image Section */}
            <div className="md:w-1/2">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover rounded-t-xl  lg:rounded-t-none object-cover"
              />
            </div>

            {/* Text Section */}
            <div className="p-4 sm:p-4 md:p-6 lg:p-10 lg:w-1/2 ">
              <h3 className="font-quicksand text-[16.67px] leading-[20.84px] sm:text-[16.67px] sm:leading-[20.84px] md:text-[26.92px] md:leading-[33.65px] lg:text-[26.92px] lg:leading-[33.65px] font-semibold mb-4 sm:mb-4 md:mb-">
                {service.title}
              </h3>
              <p className="mt-8 mb-4 lg:mt-8 font-inter text-[10.67px]  leading-[13px] sm:leading-[13px] sm:text-[10.67px] md:text-[17.23px] md:leading-[20.85px] lg:text-[17.23] lg:leading-[20.85px] text-black">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityInitiatives;
