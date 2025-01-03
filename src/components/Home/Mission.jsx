import bookicon from "../../assets/bookicon.png";
import spaicon from "../../assets/spaicon.png";
import saveicon from "../../assets/saveicon.png";
import cardiologyicon from "../../assets/cardiologyicon.png";
import handshakeicon from "../../assets/handshakeicon.png";
const cards = [
  {
    icon: bookicon,
    title: "Making Education and Therapy Affordable",
    description:
      " We are committed to reducing the financial burden on families by bringing down the cost of education and therapy. Too often, the high cost of these services becomes a barrier, preventing children from receiving the help they need when they need it most.",
  },
  {
    icon: cardiologyicon,
    title: "Comprehensive Services Under One Roof",
    description:
      "One of the key issues parents face is the lack of access to both education and therapy in a single location. We offer a holistic approach by providing both essential services under one roof, ensuring convenience and consistency for families. This integrated approach makes it easier for parents to manage their child’s progress without the added stress of coordinating multiple providers.",
  },
  {
    icon: saveicon,
    title: "Addressing Expensive, Long-Term Therapies",
    description:
      "Therapeutic interventions often require long-term commitments. With many therapies needing up to six sessions per week and lasting for months or even years, the cumulative costs become overwhelming for many families. We are dedicated to making these critical services more affordable and accessible.",
  },
  {
    icon: spaicon,
    title: "Supporting Early Intervention",
    description:
      "Early intervention is key to ensuring the best outcomes for children with developmental delays. Unfortunately, due to unaffordability, many families are forced to delay intervention, leading to further cognitive delays and other developmental challenges. Innocent Times Foundation is committed to providing timely and affordable therapies to prevent these costly delays.",
  },
  {
    icon: handshakeicon,
    title: "Prioritizing Health Over Delays",
    description:
      "Every delay in accessing therapy or educational support can have a lasting impact on a child's future. We aim to remove the financial and logistical barriers that force families to wait, allowing children to receive the immediate help they need to thrive. Add more specific stats only talking about neurodiverse children Increasing rate of autism",
  },
];

const Mission = () => {
  return (
    <section className="bg-gray-50 py-10 px-6 flex justify-center items-center">
      <div className="max-w-6xl w-full mx-auto">
        {/* Title */}
        <h1 className="text-center text-[20px] md:text-[27px] lg:text-[40px] font-bold font-quicksand mb-6">
          Making dreams happen, that’s our mission.
        </h1>
        <p className="text-center text-[#304598] px-[28px] lg:px-[80px] font-inter text-[9px] md:text-[16px] lg:text-[20px] leading-[10px] lg:leading-[24px] mb-10">
          At Innocent Times Foundation, our mission is to address the urgent challenges faced by families
          seeking quality education and therapy for their children.
        </p>

        {/* Cards Grid Centered */}
        <div className="flex justify-center items-center ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-14 ">
            {cards.map((card, index) => (
              <div
                key={index}
                className=" rounded-2xl shadow-md p-6 border-2 hover:bg-[#78b0f0] transition-colors bg-[#99bde8] duration-300 pr-8"
              >
                <div className="mb-6 font-semibold">
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="h-[28px] w-[28px] lg:h-[40px] lg:w-[40px]"
                  />
                </div>
                <h2 className="text-[17px] lg:text-[24px] font-semibold font-quicksand mb-4 pr-8">
                  {card.title}
                </h2>
                <p className=" text-black mt-6 font-inter font-light text-[12px] md:text-[16px] lg:text-[16px] leading-[14px] lg:leading-[20px]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
