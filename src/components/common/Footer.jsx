import logo1 from "../../assets/logo1.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-[#304598] text-white py-8 lg:p-20">
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-3 md:grid-cols-4 gap-6 sm:grid-cols-3  ">
          {/* Column 1 */}
          <div>
            <h3 className="font-semibold text-[16px] leading-[20px] sm:text-[16px] sm:leading-[20px] md:text-[24px] md:leading-[29px] lg:text-[24px] lg:leading-[30px] font-quicksand mb-4">  <Link to="/ourwork">Our Work</Link></h3>
            <ul>
              <li className="mb-2 text-[12px] leading-[15px] sm:text-[12px] sm:leading-[15px] md:text-[18px] md:leading-[21px] lg:text-[16px] lg:leading-[20px]">Our Impact</li>
              <li className="mb-2 text-[12px] leading-[15px] sm:text-[12px] sm:leading-[15px] md:text-[18px] md:leading-[21px] lg:text-[16px] lg:leading-[20px]">Programs</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-semibold text-[16px] leading-[20px] sm:text-[16px] sm:leading-[20px] md:text-[24px] md:leading-[29px] lg:text-[24px] lg:leading-[30px] font-quicksand mb-4  ">Company</h3>
            <ul>
              <li className="mb-2 text-[12px] leading-[15px] sm:text-[12px] sm:leading-[15px] md:text-[18px] md:leading-[21px] lg:text-[16px] lg:leading-[20px]"><Link to="/aboutus">About Us</Link></li>
              <li className="mb-2 text-[12px] leading-[15px] sm:text-[12px] sm:leading-[15px] md:text-[18px] md:leading-[21px] lg:text-[16px] lg:leading-[20px]">Team</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-semibold text-[16px] leading-[20px] sm:text-[16px] sm:leading-[20px] md:text-[24px] md:leading-[29px] lg:text-[24px] lg:leading-[30px] font-quicksand mb-4"><Link to="/getinvolved">Get Involved</Link></h3>
            <ul>
              <li className="mb-2 text-[12px] leading-[15px] sm:text-[12px] sm:leading-[15px] md:text-[18px] md:leading-[21px] lg:text-[16px] lg:leading-[20px]">Events</li>
              <li className="mb-2 text-[12px] leading-[15px] sm:text-[12px] sm:leading-[15px] md:text-[18px] md:leading-[21px] lg:text-[16px] lg:leading-[20px]">Opportunities</li>
            </ul>
          </div>

          {/* Column 4: Logo */}
          {/* <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2   ">
              <div className="bg-white rounded-full p-4 ">
                <img
                  src={logo1}
                  alt="ITFFC Logo"
                  className="w-12 h-12"
                />
               
                <h3 className="text-xl font-bold">ITFFC</h3>
                <p className="text-sm">Innocent Times Foundation For Children</p>
             
              </div>
              
            </div>
         </div> */}<Link to="/">
            <div className=" ml-28 sm:ml-28 md:ml-0 lg:ml-0  rounded-2xl flex justify-center items-center bg-white h-[47px] w-[126px] sm:h-[47px] sm:w-[126px] md:h-[119px] md:w-[320px] lg:h-[115px] lg:w-[309.75px]">
        <img
          src={logo1} // Replace with the correct image path
          alt="ITFFC Logo"
          className="w-[37px] h-[36px]  sm:w-[37px] sm:h-[36px] md:w-[92.39px] md:h-[90.54px] lg:w-[89.5px] lg:h-[87.71px] object-contain p-2"
        />
        <div className="p-2 h-[20px] border-l-2 border-black sm:h-[55px] md:h-[55px] lg:h-[55px]"></div>
      {/* Text Section */}
      <div>
        <h1 className="text-xl font-bold text-blue-900  text-[14px] sm:text-[15px] md:text-[36px] lg:text-[35px] leading-[18px] sm:leading-[18px] md:leading-[45px] lg:leading-[44px]">ITFFC</h1>
        <p className="text-black text-[5px] sm:text-[5px]  md:text-[5px] lg:text-[11.32px]  leading-[5px] sm:leading-[5px] md:leading-[14.15px] lg:leading-[13px]">Innocent Times Foundation</p> <p className="text-black text-[5px] sm:text-[5px]  md:text-[5px] lg:text-[11.32px]  leading-[5px] sm:leading-[5px] md:leading-[14.15px] lg:leading-[13px]">For Children</p>
      </div>

      </div> </Link>         
        </div>
        {/* Horizontal Line */}
        <hr className="border-t border-white mt-10 mb-10" />
      </div>
    </footer>
  );
};

export default Footer;
