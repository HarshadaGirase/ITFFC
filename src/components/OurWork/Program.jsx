import React from "react";
// import program1 from '../../assets/program1.jpg';
// import program2 from '../../../assets/program2.jpg';
// import program3 from '../../../assets/program3.jpg';
import img4 from '../../assets/img4.png';

const Program = () => {
  const programs = [
    {
      id: 1,
      title: "Preschool for Neurodiverse Children (Ages 2-6)",
      description:
        "Our preschool program is designed to cater to the unique needs of neurodiverse children. Adopting the principles of the UN Convention on the Rights of Persons with Disabilities (CRPD), we ensure that all our young learners receive personalized attention and support to foster their cognitive, social, and emotional development. Through innovative teaching methods and continuous knowledge upgrades, we aim to provide the best learning environment for these children.",
      image:img4, // Replace with the actual image path
    },
    {
      id: 2,
      title:
        "School Readiness Program for Children with Developmental Delays (Ages 2-6)",
      description:
        "We understand the challenges faced by children with developmental delays and their families. Our School Readiness Program offers early intervention services, focusing on creating specialized individual plans for each child. By working closely with parents, we prepare these young learners for a smoother transition into formal education settings.",
      image: img4, // Replace with the actual image path
    },
    {
        id: 3,
        title:
          "Individualized Education Program (IEP) Based School for Neurodiverse Children (Ages 6-14)",
        description:
          "Our school program for neurodiverse children is built on the foundation of Individualized Education Programs (IEP). Each child's unique strengths, challenges, and learning styles are taken into account to create a tailored educational path. We provide a nurturing environment that encourages academic, social, and personal growth.",
        image:img4, // Replace with the actual image path
      },
      {
      id: 4,
      title:
        "Prevocational Program for Teenagers (Ages 14-18)",
      description:
        "The transition to adulthood can be particularly challenging for neurodiverse teenagers. Our Prevocational Program equips these young adults with essential life skills, vocational training, and social skills needed to thrive in the outside world. We aim to foster independence and prepare them for meaningful employment and community participation.",
      image: img4, // Replace with the actual image path
    },
  ];

  return (
    <div className="p-4 bg-gray-100">
      <h2 className=" font-bold text-center mb-6 mt-2 font-quicksand  ">
      <span className="block lg:hidden text-[24px] leading-[30px] ">Community Initiatives</span>
      <span className="hidden lg:block text-[40px] leading-[50px]">Programs</span>
      </h2>
      <div className="flex flex-col gap-8 px-8 sm:px-8 lg:px-40 py-4 sm:py-4 md:py-8 lg:py-10 ">
        {programs.map((program) => (
          <div
            key={program.id}
            className="flex flex-col lg:flex-row bg-white shadow-lg rounded-xl sm:rounded-xl md:rounded-none lg:rounded-none  overflow-hidden  "
          >
            {/* Image Section */}
            <div className="  lg:w-1/2 w-full">
              <img
                src={program.image}
                alt={program.title}
                className="p-2 sm:p-2 md:p-0 lg:p-0 rounded-t-2xl  lg:rounded-t-none  w-full h-full object-cover"
              />
            </div>

            {/* Text Section */}
            <div className="p-4 sm:p-4 md:p-6 lg:p-10 lg:w-1/2   ">
              <h3 className="text-[16.67px] leading-[20.84px] sm:[27px] sm:leading-[33px] md:text-[17.23px] md:leading-[20.85px] lg:text-[27px] lg:leading-[34px] font-semibold mb-4">{program.title}</h3>
              <p className="mr-0 sm:mr-0 md:mr-4 lg:mr-6 text-[10.67px] leading-[12.91px] sm:text-[10.67px] sm:leading-[12.91px] md:text-[17.23px] md:leading-[20.85px] lg:text-[17px] lg:leading-[20.85px] text-gray-700 mb-4">{program.description}</p>
              <button className="ml-[55px] sm:ml-[60px] md:ml-0 lg:ml-0 bg-[#304598] text-white text-[9.23px] sm:text-[9.23px] md:text-[16px] lg:text-[16px] rounded-full hover:bg-blue-600 h-[23.54px] sm:h-[23.54px] w-[56.09px] sm:w-[56.09px] md:w-[97px] md:h-[40px] lg:w-[97px] lg:h-[40px] font-quicksand ">
                Donate
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Program;
