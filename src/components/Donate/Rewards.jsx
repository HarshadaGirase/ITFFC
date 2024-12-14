
import staricon from "../../assets/staricon.png";
import certificateicon from "../../assets/certificateicon.png";
import handshakeicon from "../../assets/handshakeicon.png";
import bellicon from "../../assets/bellicon.png";
const Rewards = () => {
  return (
    <section className="bg-gray-50 py-10 px-4 ">
      <div className="max-w-8xl  mx-auto">
        
        {/* Heading */}
        <h1 className="text-[32px] leading-[40px]  sm:text-[32px] sm:leading-[40px]  md:text-[40px] sm:leading-[50px]  lg:text-[40px] lg:leading-[50px]   font-bold text-center mb-4 font-quicksand">
          Support brighter futures and unlock meaningful rewards
        </h1>
        <p className=" text-[16px] leading-[19px]    text-center mb-10 font-inter text-black max-w-4xl mx-auto">
          At Innocent Times Foundation, our mission is to address the urgent challenges faced by families seeking quality education and therapy for their children.
        </p>
      </div>
        {/* Cards Section */}
        <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-4 gap-10 sm:px-10 xl:px-52 2xl:px-4 ">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-md p-6 border-2 transition hover:shadow-lg">
            <div className="flex  mb-4">
              <img src={staricon} alt="Star Icon" className="h-10 w-10" />
            </div>
            <h2 className=" text-[16px] leading-[20px] md:text-[24px] md:leading-[30px] lg:text-[24px] lg:leading-[30px] font-semibold font-quicksand mb-2">ATG Benefits</h2>
            <p className="text-[16px] leading-[20px] font-inter text-black">
              Enjoy tax deductions for eligible donations under Section 80G of the Income Tax Act, reducing your taxable income and making your support even more impactful.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-md p-6 border-2 transition hover:shadow-lg">
            <div className="flex mb-4">
              <img src={certificateicon} alt="Certificate Icon" className="h-10 w-10" />
            </div>
            <h2 className="text-[16px] leading-[20px] md:text-[24px] md:leading-[30px] lg:text-[24px] lg:leading-[30px] font-semibold font-quicksand mb-2">Certificates</h2>
            <p className="text-[16px] leading-[20px] font-inter text-black">
              Every donor will receive a certificate acknowledging their contribution, symbolizing our gratitude and your commitment to making a positive difference.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-md p-6 border-2 transition hover:shadow-lg">
            <div className="flex  mb-4">
              <img src={handshakeicon} alt="Handshake Icon" className="h-10 w-10" />
            </div>
            <h2 className="text-[16px] leading-[20px] md:text-[24px] md:leading-[30px] lg:text-[24px] lg:leading-[30px] font-semibold font-quicksand mb-2">Acknowledgment</h2>
            <p className="text-[16px] leading-[20px] font-inter text-black">
              Corporate sponsors and major donors will be recognized on our website and in our publications, highlighting your support to a broader audience.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl shadow-md p-6 border-2 transition hover:shadow-lg">
            <div className="flex  mb-4">
              <img src={bellicon} alt="Bell Icon" className="h-10 w-10" />
            </div>
            <h2 className="text-[16px] leading-[20px] md:text-[24px] md:leading-[30px] lg:text-[24px] lg:leading-[30px] font-semibold font-quicksand mb-2">Updates</h2>
            <p className="text-[16px] leading-[20px] font-inter text-black">
              Stay informed about the impact of your donations with regular updates, impact reports, and success stories from our programs. See firsthand how your support is changing lives.
            </p>
          </div>
       
      </div>
    </section>
  );
};

export default Rewards;
