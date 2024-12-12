import { useState, useEffect } from "react";
import logo1 from "../../assets/logo1.png";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <header className="relative fixed top-0  w-full bg-white xl:shadow-md z-50 justify-center  ">
      <div className="flex items-center justify-between px-0 sm:px-0 md:px-12    h-18 sm:h-20 lg:h-30 ">
        {/* Logo */}<Link to="/">
       <div className="  rounded-full flex justify-center items-center p-2">
        <img
          src={logo1} // Replace with the correct image path
          alt="ITFFC Logo"
          className="w-[38px] h-[38px] sm:h-[38px] sm:w-[38px] md:h-[52.05px] md:w-[53.11px] lg:h-[64.28px] lg:w-[65.59px] object-contain p-2"
        />
        <div className="p-2 h-[22px] border-l-2 border-black sm:h-[55px] md:h-[55px] lg:h-[35px]"></div>
      {/* Text Section */}
      <div>
        <h1 className="text-[15px] leading-[19px] sm:text-[15px] sm:leading-[19px] md:text-[15px] md:leading-[19px] lg:text-[21px] lg:leading-[26px] font-bold text-[#304598]  font-quicksand ">ITFFC</h1>
        <p className="text-[4.75px] leading-[6px] sm:text-[4.75px] sm:leading-[6px] md:text-[6.51px] md:leading-[8.13px] lg:text-[8.03px] lg:leading-[10.04px]  text-black font-inter">Innocent Times Foundation</p>  <p className="text-[4.75px] leading-[6px] sm:text-[4.75px] sm:leading-[6px] md:text-[6.51px] md:leading-[8.13px] lg:text-[8.03px] lg:leading-[10.04px]  text-black font-inter" > For Children</p>
      </div>

      </div>
      </Link>
      

        {/* Menu Button for Mobile */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-blue-700 focus:outline-none"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Navigation */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } fixed inset-x-0 sm:static top-[60px] sm:top-auto left-0 w-full sm:w-auto bg-white  sm:flex items-center flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6 px-4 sm:px-0 py-6 sm:py-0 font-quicksand font-semibold transition-all h-screen sm:h-fit `}
        >
          <ul className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-6 text-[13px] sm:text-[13px] md:text-[13px] lg:text-[16px] sm:text-[12px] md:text-[13px] lg:text-[16px] text-black font-quicksand font-bold">
            <li className='block hover:text-blue-500 transition-all font-normal'>
              
            <Link to="/">Home</Link>
              
            </li>
            <li>
              <a
                href="#work"
                className="block hover:text-blue-500 transition-all font-normal"
              >
                  <Link to="/ourwork">Our Work</Link> 
              </a>
            </li>
            <li>
              <a
                href="#involved"
                className="block hover:text-blue-500 transition-all font-normal"
              >
               <Link to="/getinvolved">Get Involved</Link> 
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block hover:text-blue-500 transition-all font-normal"
              >
                <Link to="/aboutus">  About Us</Link>
              </a>
            </li>
          </ul>
          <button className="bg-[#304598] text-white w-[86px] h-[32.2px] sm:w-[86px] sm:h-[32.2px] md:w-[97px] md:h-[40px] lg:w-[] lg:h-[] rounded-full hover:bg-blue-500 transition-all text-[13px] sm:text-[13px] md:text-[16px] lg:text-[16px] font-quicksand">
           <Link to="/donate">Donate</Link>
          </button>
          <div className='hidden xs:block'>
          <hr  className=' border-blue-600 p-2 mr-8'  />
          </div>
         
        </nav>
      </div>
    </header>
  );
}

export default Header;
