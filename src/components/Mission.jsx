
import bookicon from "../assets/bookicon.png";
import spaicon from "../assets/spaicon.png";
import cardiologyicon from "../assets/cardiologyicon.png";
const Mission = () => {
  return (
    <section className="bg-gray-100 py-10 px-6">
      <div className="max-w-7xl mx-auto  sm:px-10 lg:px-20 leading-[25px] sm:leading-[25px]  ">
        <h1 className="text-[20px] text-center sm:text-[20px] md:text-[27px] lg:text-[40px] font-bold mb-4 font-quicksand ">Making dreams happen, that’s our mission.</h1>
        <p className="text-black align-center text-center px-[28px] sm:px-[28px] lg:px-[100px] align-center mb-10 font-inter text-[9px] sm:text-[9px] md:text-[16px] lg:text-[16px] leading-[10px] sm:leading-[10px] lg:leading-[19px]">
          At Innocent Times Foundation, our mission is to address the urgent challenges faced by families
          seeking quality education and therapy for their children.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-md p-6 border-2  max-w-xs hover:bg-gray-200 transition-colors duration-300">
            <div className=" mb-6">
            <img src={bookicon} alt="" className='h-[28px] w-[28px] sm:h-[28px] md:h-[28px] lg:h-[40px] sm:w-[28px] md:w-[40px] lg:w-[40px]' />
            </div>
           
            <h2 className="text-[17px] sm:text-[17px] sm:text-[24px] md:text-[24px] lg:text-[24px] font-semibold mb-2 font-quicksand mb-6">Empowering Children</h2>
            <p className="text-black  font-inter text-[12px] sm:text-[12pxpx] md:text-[16px] lg:text-[16px] leading-[14px]  sm:leading-[14px] md:leading-[20px] lg:leading-[20px]">
              We provide education, healthcare, nutrition, and essential support to specially-abled and
              under-privileged children.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-md p-6 border-2 max-w-xs hover:bg-gray-200 transition-colors duration-300">
            <div className=" mb-6 ">
              <img src={cardiologyicon} alt="" className='h-[28px] w-[28px] sm:h-[28px] md:h-[28px] lg:h-[40px] sm:w-[28px] md:w-[40px] lg:w-[40px]'/>
            </div>
           
            <h2 className=" font-semibold mb-6 font-quicksand text-[17px] sm:text-[17px] sm:text-[24px] md:text-[24px] lg:text-[24px]">Holistic Development</h2>
            <p className="text-black font-inter text-[12px] sm:text-[12pxpx] md:text-[16px] lg:text-[16px] leading-[14px]  sm:leading-[14px] md:leading-[20px] lg:leading-[20px]">
              We focus on educational, social, cultural, economic, and medical support to nurture overall
              growth and well-being.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-md p-6 border-2  max-w-xs hover:bg-gray-200 transition-colors duration-300 ">
            <div className=" mb-6">
            <img src={spaicon} alt="" className='h-[28px] w-[28px] sm:h-[28px] md:h-[28px] lg:h-[40px] sm:w-[28px] md:w-[40px] lg:w-[40px]' />
            </div>
           
            <h2 className=" font-semibold mb-2 font-quicksand text-[17px] sm:text-[17px] sm:text-[24px] md:text-[24px] lg:text-[24px] mb-6">Family Welfare</h2>
            <p className="text-black font-inter text-[12px] sm:text-[12pxpx] md:text-[16px] lg:text-[16px] leading-[14px]  sm:leading-[14px] md:leading-[20px] lg:leading-[20px]">
              We extend our efforts to uplift families, ensuring sustainable support and a brighter future
              for the children.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
