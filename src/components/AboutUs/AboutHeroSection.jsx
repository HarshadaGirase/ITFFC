
import ourworkimg from '../../assets/ourwork.png';
function AboutHeroSection(){

    return(  
        <div className="relative w-full  h-[343px] sm:h-[343px]  md:h-[346px] lg:h-[346px]  flex items-center justify-center bg-cover bg-center sm:bg-" style={{ backgroundImage: `url(${ourworkimg})` }}>
             <div
            className="absolute inset-y-0 left-0 w-full"
            style={{
              background: `linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0))`,
            }}
          ></div>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center px-4 flex flex-col gap-10">
        <h1 className="text-[40px] leading-[50px]    font-bold text-white font-quicksand ">
          About Us
        </h1>
        <p className="text-[20px] leading-[24px] sm:text-[8.71px] sm:leading-[10.54px] md:text-[20px] md:leading-[24.2px] lg:text-[20px] lg:leading-[24.2px]  md:text-lg text-white max-w-xl sm:max-w-xl md:max-w-4xl xl:max-w-4xl  2xl:max-w-6xl  font-inter ">
        A team of individuals driven to propose a change that makes the world a better place.
        </p>
      </div>
    </div>
    );
}
export default AboutHeroSection;