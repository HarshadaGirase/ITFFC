import { useState, useEffect } from "react";
import logo1 from "../../assets/logo1.png";

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
    <header className="fixed top-0  w-full bg-white xl:shadow-md z-50 justify-center  font-roboto p-4 ">
      <div className="flex items-center justify-between px-2 sm:px-8 md:px-12    h-18 sm:h-20 lg:h-30">
        {/* Logo */}
      <div className=" p-4 rounded-full flex justify-center items-center">
        <img
          src={logo1} // Replace with the correct image path
          alt="ITFFC Logo"
          className="w-20 h-18 sm:h-18 md:h-20 lg:h-30 object-contain p-2"
        />
        <div className="p-2 h-[55px] border-l-2 border-black sm:h-[55px] md:h-[55px] lg:h-[55px]"></div>
      {/* Text Section */}
      <div>
        <h1 className="text-xl font-bold text-blue-900  text-[15px] sm:text-[15px] lg:text-[20px]">ITFFC</h1>
        <p className="text-sm text-gray-500">Innocent Times Foundation For Children</p>
      </div>

      </div>
      

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
          } absolute sm:static top-[120px] sm:top-auto left-0 w-full sm:w-auto bg-white sm:bg-transparent  sm:flex items-center flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6 px-6 sm:px-0 py-6 sm:py-0 `}
        >
          <ul className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-6 text-[15px] sm:text-[12px] md:text-[15px] lg:text-[18px] text-black font-sans ">
            <li>
              <a
                href="#home"
                className="block hover:text-blue-500 transition-all font-normal"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#work"
                className="block hover:text-blue-500 transition-all font-normal"
              >
                Our Work
              </a>
            </li>
            <li>
              <a
                href="#involved"
                className="block hover:text-blue-500 transition-all font-normal"
              >
                Get Involved
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block hover:text-blue-500 transition-all font-normal"
              >
                About Us
              </a>
            </li>
          </ul>
          <button className="bg-blue-800 text-white px-6 py-2  rounded-full hover:bg-blue-500 transition-all text-[10px] sm:text-[15px] font-roboto">
            Donate
          </button>
          <div>
          <hr  className=' border-blue-600 p-2 mr-10'  />
          </div>
         
        </nav>
      </div>
    </header>
  );
}

export default Header;
