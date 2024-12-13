import React from "react";
import img4 from '../../assets/img2.png';
const ComprehensiveSupport = () => {
  const services = [
    {
      id: 1,
      title: "Physical Education and Yoga",
      description:
        "Promoting physical health and well-being through tailored physical activities, including yoga sessions designed to enhance motor skills and body awareness.",
      image: img4, // Replace with actual image URL
    },
    {
      id: 2,
      title: "Occupational Therapy (OT)",
      description:
        "Addressing sensory processing issues, motor skills development, and daily living activities to improve the overall quality of life for neurodiverse children.",
      image: img4, // Replace with actual image URL
    },
    {
        id: 3,
        title: "Art Based Therapy (ABT)",
        description:
          "Enhancing physical abilities, coordination, balance, and motor skills to enable children to participate more fully in various activities.",
        image: img4, // Replace with actual image URL
      },
      {
        id: 4,
        title: "Physical Therapy (PT)",
        description:
          "Enhancing physical abilities, coordination, balance, and motor skills to enable children to participate more fully in various activities.",
        image: img4, // Replace with actual image URL
      }, {
        id: 5,
        title: "Sensory Integration",
        description:
          "Utilizing a sensory-rich environment to stimulate learning and development, ensuring children receive the appropriate sensory input necessary for their growth. change content to this",
        image: img4, // Replace with actual image URL
      }, {
        id: 6,
        title: "Speech Therapy (Coming Soon)",
        description:
          "Addressing sensory processing issues, motor skills development, and daily living activities to improve the overall quality of life for neurodiverse children.",
        image: img4, // Replace with actual image URL
      },
      {
        id: 7,
        title: "Parent Training",
        description:
          "Focusing on improving communication skills, speech articulation, and language comprehension, helping children express themselves and interact more effectively with their peers and surroundings.",
        image: img4, // Replace with actual image URL
      },
      {
        id: 8,
        title: "Remediation Programs",
        description:
          "Our remediation programs are tailored to meet the unique learning profiles of neurodiverse children. By addressing cognitive, behavioral, and sensory needs, we aim to foster academic progress and promote social integration.",
        image: img4, // Replace with actual image URL
      },
  ];

  return (
    <div className="p-8 bg-gray-100">
      <h2 className="p-6 font-quicksand text-[16.67px] leading-[20.84px] sm:text-[] sm:leading-[]  md:text-[40px] md:leading-[48.41px] lg:leading-[48.41px] lg:text-[40px]  font-bold text-center mb-8">
      
        <span className="block lg:hidden text-[24px] leading-[30px] " > Comprehensive Support Programs</span>
        <span className="hidden lg:block text-[40px] leading-[50px]">    Comprehensive Support Services</span>
      </h2>
      <div className="flex flex-col gap-8 md:gap-12 px-6 sm:px-8 md:px-40 lg:px-48  ">
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
              <p className="mt-4 lg:mt-8 font-inter text-[10.67px] sm:text-[10.67px] md:text-[17.23px] md:leading-[20.85px] lg:text-[17.23] lg:leading-[20.85px] text-black">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComprehensiveSupport;
