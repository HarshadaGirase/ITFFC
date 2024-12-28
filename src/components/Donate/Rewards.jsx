import staricon from "../../assets/staricon.png";
import certificateicon from "../../assets/certificateicon.png";
import handshakeicon from "../../assets/handshakeicon.png";
import bellicon from "../../assets/bellicon.png";
import saveicon from "../../assets/saveicon.png";

const cardsData = [
  {
    id: 1,
    icon: staricon,
    title: "ATG Benefits",
    description:
      "Enjoy tax deductions for eligible donations under Section 80G of the Income Tax Act, reducing your taxable income and making your support even more impactful."
  },
  {
    id: 2,
    icon: certificateicon,
    title: "Certificates",
    description:
      "Every donor will receive a certificate acknowledging their contribution, symbolizing our gratitude and your commitment to making a positive difference."
  },
  {
    id: 3,
    icon: handshakeicon,
    title: "Acknowledgment",
    description:
      "Corporate sponsors and major donors will be recognized on our website and in our publications, highlighting your support to a broader audience."
  },
  {
    id: 4,
    icon: bellicon,
    title: "Updates",
    description:
      "Stay informed about the impact of your donations with regular updates, impact reports, and success stories from our programs. See firsthand how your support is changing lives."
  },
  {
    id: 5,
    icon: saveicon,
    title: "Transparency",
    description:
      "We ensure every donation is fully tracked and utilized for its intended purpose, fostering trust and accountability with our supporters."
  }
];

const Card = ({ icon, title, description }) => (
  <div className="bg-white rounded-2xl shadow-md p-8 border-2 transition hover:shadow-lg">
    <div className="flex mb-4">
      <img
        src={icon}
        alt={`${title} Icon`}
        className="h-[22px] w-[22px] md:h-[33px] md:w-[33px] lg:h-[33px] lg:w-[33px]"
      />
    </div>
    <h2 className="text-[16px] leading-[20px] md:text-[24px] md:leading-[30px] lg:text-[24px] lg:leading-[30px] font-semibold font-quicksand mb-2">
      {title}
    </h2>
    <p className="text-[11px] leading-[13px] sm:text-[11px] sm:leading-[13px] md:text-[16px] md:leading-[19px] lg:text-[16px] lg:leading-[19px] font-inter text-black">
      {description}
    </p>
  </div>
);

const Rewards = () => {
  return (
    <section className="bg-white border border-gray-200 py-16">
      <div className="max-w-8xl mx-auto">
        {/* Heading */}
        <h1 className="text-[32px] leading-[40px] sm:text-[32px] sm:leading-[40px] md:text-[40px] md:leading-[50px] lg:text-[40px] lg:leading-[50px] font-bold text-center mb-8 font-quicksand">
          Be a part of this movement
        </h1>
        <p className="px-4 text-[16px] leading-[19px] text-center mb-10 font-inter text-black max-w-4xl mx-auto">
          At Innocent Times Foundation, our mission is to address the urgent challenges faced by families seeking quality education and therapy for their children.
        </p>
      </div>

   {/* Cards Section */}
<div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-10 px-12 xl:px-52 2xl:px-4 max-w-5xl mx-auto">
  <div className="col-span-full xl:col-span-2 2xl:col-span-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 justify-items-center gap-10">
    {cardsData.map((card) => (
      <Card key={card.id} icon={card.icon} title={card.title} description={card.description} />
    ))}
  </div>
</div>

    </section>
  );
};

export default Rewards;
