
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
const OurProgram = () => {
  return (
    <section className="py-12 px-12 md:px-8 lg:px-[120px] bg-gray-100">
      <h2 className="text-[24px] text-[24px]  text-[24px] sm:text-[24px] md:text-[34px] lg:text-[40px]  font-semibold font-quicksand leading-[30px] sm:leading-[30px] md:leading-[42px] lg:leading-[50px] text-center mb-8">Our Programs</h2>
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <div className="bg-white shadow-lg  rounded-2xl px-0 xl:px-0 lg:px-8">
          <img
            src={img4}
            alt="Preschool for Neurodiverse Children"
            className="w-full h-48 object-cover rounded-t-lg mb-4"
          />
          <h3 className=" px-5 mx:px-10  text-[17px] leading-[20.84px] sm:text-[17px] sm:leading-[20.84px] md:text-[20px] md:leading-[25px]  lg:text-[25px] lg:leading-[32px] font-semibold font-quicksand mb-2">
            Preschool for Neurodiverse Children (Ages 2-6)
          </h3>
          <p className=" px-5 mx:px-10 mt-8 mb-8 text-black font-intern text-[11px] leading-[13px]  sm:text-[11px] sm:leading-[13px] md:text-[16px] md:leading-[20px] lg:text-[16px] lg:leading-[20px]">
            A supportive program fostering cognitive, social, and emotional
            growth for neurodiverse children using UN CRPD principles.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-2xl  px-0 xl:px-0 lg:px-8">
          <img
            src={img2}
            alt="Comprehensive Support Services"
            className="w-full h-48 object-cover rounded-t-lg mb-4"
          />
          <h3 className="px-5 mx:px-10  text-[17px] leading-[20.84px] sm:text-[17px] sm:leading-[20.84px] md:text-[20px] md:leading-[25px]  lg:text-[25px] lg:leading-[32px] font-semibold font-quicksand mb-2">
            Comprehensive Support Services
          </h3>
          <p className=" px-5 mx:px-10 mt-8 mb-8 text-black font-intern text-[11px] leading-[13px]  sm:text-[11px] sm:leading-[13px] md:text-[16px] md:leading-[20px] lg:text-[16px] lg:leading-[20px]">
            Offering yoga, occupational, and physical therapies alongside
            sensory learning to enhance motor skills, sensory processing, and
            communication abilities.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-2xl  px-0 xl:px-0 lg:px-8">
          <img
            src={img3}
            alt="Remediation Programs"
            className="w-full h-48 object-cover rounded-t-lg mb-4"
          />
          <h3 className="px-5 mx:px-10  text-[17px] leading-[20.84px] sm:text-[17px] sm:leading-[20.84px] md:text-[20px] md:leading-[25px]  lg:text-[25px] lg:leading-[32px] font-semibold font-quicksand mb-2">Remediation Programs</h3>
          <p className=" px-5 mx:px-10 mt-8 mb-8 text-black font-intern text-[11px] leading-[13px]  sm:text-[11px] sm:leading-[13px] md:text-[16px] md:leading-[20px] lg:text-[16px] lg:leading-[20px]">
            Providing personalized interventions to address cognitive,
            behavioral, and sensory challenges, fostering academic growth and
            social integration.
          </p>
        </div>
      </div>

      <div className="text-center mt-8">
        <button className="bg-[#304598] font-semibold text-[16px] sm:text-[16px] md:text-[20px] lg:text-[20px] text-white font-quicksand  rounded-full hover:bg-blue-700 transition duration-300 w-[201px] h-[35px] md:w-[253px] md:h-[45px] lg:h-[45px] lg:w-[253px] leading-[20px] ">
          View All Programs
        </button>
      </div>
    </section>
  );
};

export default OurProgram;
