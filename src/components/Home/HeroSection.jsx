import { useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import heroImg2 from "../../assets/heroImg2.jpeg";
import heroImg3 from "../../assets/heroImg3.jpg";
import heroImg4 from "../../assets/heroImg4.jpeg";
import heroImg5 from "../../assets/heroImg5.jpeg";
import heroImg6 from "../../assets/heroImg6.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [heroImg2, heroImg3, heroImg4, heroImg5, heroImg6];

  const handleLineClick = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-auto">
      <div className="w-full bg-white shadow-lg overflow-hidden">
        <Slider {...settings} ref={sliderRef}>
          {images.map((image, index) => (
            <div key={index} className="relative h-64 sm:h-[248px] md:h-[660px]">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              ></div>

              {/* Gradient Overlay */}
              <div
                className="absolute inset-y-0 left-0 w-3/4"
                style={{
                  background: `linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0))`,
                }}
              ></div>

              {/* Content Over Image */}
              <div className="absolute inset-0 flex flex-col lg:gap-4 justify-center items-start p-6 space-y-4 text-white lg:ml-12 font-quicksand">
                <div className="leading-1 sm:leading-1 md:leading-2 lg:leading-[55px]">
                  <h1 className="text-[17px] sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                    <p>Empowering Children,</p>
                    <p>Embracing Neurodiversity.</p>
                  </h1>
                </div>
                <div>
                  <p className="text-[9px] sm:text-[9px] md:text-lg font-inter leading-[11px]">
                    <p>We envision a world where every child thrives,</p>
                    <p>embracing diversity and empowering neurodiverse kids</p>
                    <p>to reach their full potential.</p>
                  </p>
                </div>
                <div className="flex gap-2 font-quicksand mt-10">
                  <div>
                    <button className="text-[#304598] bg-white hover:bg-yellow-500 rounded-3xl shadow-md h-[19px] w-[87px] sm:h-[19px] sm:w-[87px] md:h-[57px] lg:h-[45px] md:w-[100px] lg:w-[199px] text-[9px] sm:text-[9px] md:text-[20px] lg:text-[25px]">
                      <Link to="/getinvolved">Get Involved</Link>
                    </button>
                  </div>
                  <div>
                    <button className="bg-[#304598] hover:bg-yellow-500 rounded-3xl shadow-md text-[9px] sm:text-[9px] md:text-[20px] lg:text-[25px] w-[65px] h-[19px] sm:w-[65px] sm:h-[19px] md:w-[193px] md:h-[57px] lg:w-[151px] lg:h-[45px]">
                      <Link to="/donate">Donate</Link>
                    </button>
                  </div>
                </div>
              </div>
              {/* Horizontal Line Controls on Image */}
              <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4">
                {images.map((_, lineIndex) => (
                  <div
                    key={lineIndex}
                    onClick={() => handleLineClick(lineIndex)}
                    className={`w-12 h-1 ${
                      index === lineIndex
                        ? "bg-gray-600"
                        : "bg-gray-400 hover:bg-gray-600"
                    } cursor-pointer transition-all duration-200`}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HeroSection;
