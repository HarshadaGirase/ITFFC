
import heroImg from '../../assets/heroImg.png';
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <div className="flex justify-center items-center min-h-auto w-full ">
    <div className="w-full  bg-white shadow-lg  overflow-hidden">
      <div className="relative h-64 sm:h-[248px] md:h-[660px]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImg})`,
          }}
        ></div>

        {/* Black opacity overlay on the left */}
        {/* <div className="absolute inset-y-0 left-0 w-1/2 bg-black bg-opacity-50"></div> */}
        <div
            className="absolute inset-y-0 left-0 w-3/4"
            style={{
              background: `linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0))`,
            }}
          ></div>

        {/* Content Over Image */}
        <div className="absolute inset-0 flex flex-col lg:gap-4 justify-center items-start p-6 space-y-4 text-white lg:ml-12 font-quicksand ">
        <div className='leading-1 sm:leading-1 md:leading-2 lg:leading-[55px] '>
          <h1 className="text-[17px] sm:text-2xl md:text-3xl lg:text-4xl font-bold">
          <p >Empowering Children,</p>  <p>Embracing Neurodiversity.</p>
          </h1>
        </div> 
        <div className=''>
          <p className="text-[9px] sm:text-[9px] md:text-lg font-inter leading-[11px]">
           <p>  We envision a world where every child thrives,</p>  <p>embracing diversity and empowering neurodiverse kids</p>  <p>to reach their full potential.</p>
          </p>
        </div>
          <div className='flex gap-2 font-quicksand mt-10 '>
            <div className=''>
              <button className="text-[#304598] bg-white hover:bg-yellow-500 rounded-3xl shadow-md h-[19px] w-[87px] sm:h-[19px]  sm:w-[87px] md:h-[57px] lg:h-[45px]  md:w-[100] lg:w-[199px] text-[9px] sm:text-[9px] md:text-[20px] lg:text-[25px]">
              <Link to="/getinvolved">  Get Involved</Link>
              </button>
            </div>
            <div className=''>
              <button className="bg-[#304598] hover:bg-yellow-500 rounded-3xl shadow-md text-[9px] sm:text-[9px] md:text-[20px] lg:text-[25px] w-[65px] h-[19px] sm:w-[65px] sm:h-[19px] md:w-[193px] md:h-[57px] lg:w-[151px] lg:h-[45px]">
              <Link to="/donate"> Donate</Link> 
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
    
  );
};

export default HeroSection;
