

const UPIPayment = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50 ">
      {/* Title and Subheading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold mb-10 font-quicksand">Payment Information</h2>
        <p className="text-gray-600 max-w-3xl mb-10 font-inter">
          At Innocent Times Foundation, our mission is to address the urgent challenges faced by families seeking quality education and therapy for their children.
        </p>
      </div>
      
      {/* Container */}
      <div className="bg-white shadow-md rounded-lg p-6 max-w-lg w-full mb-10">
        {/* Payment Options */}
        <div className="space-y-8">
          {/* Credit/Debit Card Section */}
          {/* <div className="border p-4 rounded-md"> */}
            {/* <div className="flex items-center mb-4">
              <input
                type="radio"
                id="credit-card"
                name="payment-method"
                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <label htmlFor="credit-card" className="ml-2 font-medium text-gray-700">
                Pay by Credit Card
              </label>
              <span className="ml-auto">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Mastercard-logo.svg/1024px-Mastercard-logo.svg.png"
                  alt="Card Logos"
                  className="h-6 inline mr-1"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
                  alt="Visa Logo"
                  className="h-6 inline mr-1"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Discover_Card_logo.png"
                  alt="Discover Logo"
                  className="h-6 inline"
                />
              </span>
            </div>
            {/* Card Details */}
            {/* <div className="space-y-3">
              <input
                type="text"
                placeholder="Card Number"
                className="w-full border p-2 rounded-md focus:outline-blue-500"
              />
              <div className="flex space-x-3">
                <input
                  type="text"
                  placeholder="Expiry (MM/YY)"
                  className="w-1/2 border p-2 rounded-md focus:outline-blue-500"
                />
                <input
                  type="text"
                  placeholder="CVV"
                  className="w-1/2 border p-2 rounded-md focus:outline-blue-500"
                />
              </div>
            </div>
            <button className="mt-4 w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition duration-300">
              Pay
            </button> */}
          {/* </div>  */}

          {/* UPI Section */}
          <div className="border p-4 rounded-md">
            <div className="flex items-center mb-4">
              <input
                type="radio"
                id="upi"
                name="payment-method"
                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <label htmlFor="upi" className="ml-2 font-medium text-gray-700">
                UPI
              </label>
              <span className="ml-auto">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/UPI-Logo-vector.svg/1200px-UPI-Logo-vector.svg.png"
                  alt="UPI Logo"
                  className="h-6 inline"
                />
              </span>
            </div>
            <button className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition duration-300">
              Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UPIPayment;
