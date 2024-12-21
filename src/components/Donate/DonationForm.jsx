import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { useNavigate } from "react-router-dom";
const DonationForm = () => {
  const [donationType, setDonationType] = useState("oneTime");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleDonateClick = () => {
    navigate("/upi-payment"); // Redirect to the UPI Payment page
  };

  return (
    <div className="max-w-2xl mx-auto p-4  bg-white border border-gray-100 ">
      <h1 className="text-[48px] leading-[60px] font-quicksand font-bold text-center mb-4">Make A Donation!</h1>
      <p className="text-center mb-10 text-black text-[20px] leading-[30px] font-inter">
        Your time and skills can have a profound impact on the lives of the
        children we serve.
      </p>

      <form>
        {/* Donation Type */}
        <div className="mb-6">
          <h2 className="text-[32px] leading-[20px] font-quicksand font-semibold mb-10">Donation Type</h2>
          <div className="space-y-8">
            <div>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="donationType"
                  value="oneTime"
                  checked={donationType === "oneTime"}
                  onChange={() => setDonationType("oneTime")}
                  className="form-radio text-black font-bold"
                />
                <span className='text-[16px] leading-[20px] font-quicksand font-semibold'>One Time Donation</span>
              </label>
             
                <input
                  type="number"
                  placeholder="Enter Amount INR"
                  className="w-full mt-2 p-2 border rounded-md"
                />
            
            </div>
            <div>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="donationType"
                  value="monthly"
                  checked={donationType === "monthly"}
                  onChange={() => setDonationType("monthly")}
                  className="form-radio text-indigo-600"
                />
                <span className='text-[16px] leading-[20px] font-quicksand font-semibold'>Monthly Donation</span>
              </label>
             
                <input
                  type="number"
                  placeholder="Enter Amount INR"
                  className="w-full mt-2 p-2 border rounded-md"
                />
            
            </div>
            <div>
              <label className="flex items-center space-x-2 ">
                <input
                  type="radio"
                  name="donationType"
                  value="gifts"
                  checked={donationType === "gifts"}
                  onChange={() => setDonationType("gifts")}
                  className="form-radio text-indigo-600 "
                />
                <span className='text-[16px] leading-[20px] font-quicksand font-semibold'>Gifts</span>
              </label>
             
                <div className="space-y-4 mt-4 ">
                  <label className="block">
                    <input
                      type="checkbox"
                      className="form-checkbox text-indigo-600"
                    />
                    <span className='text-[16px] leading-[20px] font-quicksand font-semibold ml-2 '>Donate Items</span>
                    <p className='lg:mr-40 text-gray-500 text-[16px] leading-[24px] font-inter font-medium mt-2'> Donate goods or services that can benefit our children or organization, such as equipment, furniture, or professional services. </p>
                  </label>
                  <input
                    placeholder="Enter number of items"
                    className="w-full mt-2 p-2 border rounded-md"
                  />
                  <label className="block">
                    <input
                      type="checkbox"
                      className="form-checkbox text-indigo-600"
                    />
                    <span className="ml-2  text-[16px] leading-[20px] font-quicksand font-semibold">Tribute Gifts</span>
                    <p className='text-gray-500 text-[16px] leading-[24px] font-inter font-medium mt-2 lg:mr-36 '>  Make a donation in honor or memory of someone special, with acknowledgment sent to the honoree or their family.
                    </p>
                  </label>
                  <input
                    placeholder="In Memory Of"
                    className="w-full mt-2 p-2 border rounded-md"
                  />
                  <textarea
                    placeholder="Acknowledgement Message"
                    className="w-full mt-2 p-2 border rounded-md"
                  />
                  <input
                    placeholder="Recipient Name"
                    className="w-full mt-2 p-2 border rounded-md"
                  />
                  <input
                    placeholder="Recipient Email"
                    className="w-full mt-2 p-2 border rounded-md"
                  />
                </div>
           
            </div>
            <div>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="donationType"
                  value="corporate"
                  checked={donationType === "corporate"}
                  onChange={() => setDonationType("corporate")}
                  className="form-radio text-indigo-600"
                />
                <span className="ml-2  text-[16px] leading-[20px] font-quicksand font-semibold">Corporate Sponsorship</span>
              </label>
            
                <div className="mt-2 space-y-2">
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full p-2 border rounded-md"
                  />
                  <input
                    type="number"
                    placeholder="Enter Amount INR"
                    className="w-full p-2 border rounded-md"
                  />
                </div>
             
            </div>
          </div>
        </div>

        {/* Donor Information */}
        <div className="mb-6 ">
          <h2 className="text-[32px] leading-[20px] font-semibold mb-8 mt-6 font-quicksand ">Donor Information</h2>
          <div className="space-y-8">
            <label>
            <span className='font-quicksand font-semibold mb-4'>Name  </span>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 border rounded-md mb-6"
            />
           
            </label>
            <label>
            <span className='font-quicksand font-semibold'>Email  </span>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded-md mb-6"
            />
             
              </label>
              <label>
              <span className='font-quicksand font-semibold mb-4'>Phone Number</span>
            <div className="flex">
              
              
              <PhoneInput
                type="text"
               
                value={phone}
                onChange={setPhone}
                placeholder="Phone Number"
                inputClass="!w-full !h-full !pl-16 !border-gray-300 !rounded-lg !px-4 !py-2 !focus:outline-none !focus:ring-2 !focus:ring-blue-400"
                buttonClass="!absolute !left-0 !h-full !bg-gray-100 !border-r !border-gray-300 !focus:outline-none"
                dropdownClass="!bg-white !border-gray-300 !rounded-md !shadow-md"
                containerClass="relative w-full"
              />
              
            </div>
            </label>
          </div>
        </div>

      
        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-[#304598] text-white  h-[36px]  font-inter text-[16px] leading-[24px] rounded-full hover:bg-indigo-700 transition"
            onClick={handleDonateClick}>
            Proceed
          </button>
        </div>
      </form>
    </div>
  );
};

export default DonationForm;
