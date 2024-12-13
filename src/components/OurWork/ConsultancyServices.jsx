import React from "react";
import img4 from '../../assets/img2.png';
const ConsultancyServices = () => {
  const services = [
    {
      id: 1,
      title: "",
      description:
        "In addition to our in-house programs, Innocent Times Foundation offers consultancy services to other schools and organizations working with neurodiverse children. Our experts provide guidance on creating inclusive educational environments, developing specialized curricula, and implementing effective intervention strategies.",
      image: img4, // Replace with actual image URL
    }
  ];

  return (
    <div className="p-8 bg-gray-50">
      <p className="p-6 font-inter text-[16.67px] leading-[20.84px] sm:text-[] sm:leading-[]  md:text-[40px] md:leading-[48.41px] lg:leading-[48.41px] lg:text-[40px]   text-center mb-8">
      
      Consultancy Services

      </p>
      <div className="flex flex-col gap-8 md:gap-12 px-6 sm:px-8 md:px-40 lg:px-48 mb-8 ">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col md:flex-row bg-white shadow-md rounded-xl sm:rounded-xl md:rounded-none lg:rounded-none  border-slate-600 rounded-lg overflow-hidden"
          >
            {/* Image Section */}
            <div className="md:w-1/2">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-[102px] sm:h-[102px] md:h-[266px] lg:h-[266px] object-cover rounded-t-xl  lg:rounded-t-none object-cover"
              />
            </div>

            {/* Text Section */}
            <div className="p-4 sm:p-4 md:p-6 lg:p-10 lg:w-1/2 ">
              <h3 className="font-quicksand text-[16.67px] leading-[20.84px] sm:text-[16.67px] sm:leading-[20.84px] md:text-[26.92px] md:leading-[33.65px] lg:text-[26.92px] lg:leading-[33.65px] font-semibold mb-4 sm:mb-4 md:mb-">
                {service.title}
              </h3>
              <p className=" font-inter text-[10.67px] sm:text-[10.67px] md:text-[17.23px] md:leading-[20.85px] lg:text-[17.23] lg:leading-[20.85px] text-black">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConsultancyServices;
