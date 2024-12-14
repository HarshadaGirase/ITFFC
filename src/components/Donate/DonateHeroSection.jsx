
import ourworkimg from '../../assets/ourwork.png';
function DonateHeroSection(){

    return(  
        <div className="relative w-full  h-[181px] sm:h-[181px]  md:h-[346px] lg:h-[346px]  flex items-center justify-center bg-cover bg-center sm:bg-" style={{ backgroundImage: `url(${ourworkimg})` }}>
             <div
            className="absolute inset-y-0 left-0 w-full"
            style={{
              background: `linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0))`,
            }}
          ></div>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center px-8">
        <h1 className="text-[20px] leading-[25px] sm:text-[20px] sm:leading-[25px] md:text-[40px] md:leading-[50px] lg:text-[40px] lg:leading-[50px]   font-bold text-white mb-2 sm:mb-2 md:mb-6 font-quicksand ">
        Make a Difference and Donate Today!
        </h1>
       
      </div>
    </div>
    );
}
export default DonateHeroSection;