import Image from "next/image";
const cardData = [
  {
    imageSrc: "/Assets/OurServices/CardImage.svg",
    title: "Exceptional Quality Deliverables",
    description:
      "Our clients appreciate the unwavering commitment to delivering top-notch, quality solutions that consistently exceed expectations, ensuring their success in every project.",
  },
  {
    imageSrc: "/Assets/OurServices/CardImage.svg",
    title: "Innovative Problem Solving",
    description:
      "We are recognized for our innovative problem-solving approach. Clients appreciate our ability to think outside the box, providing creative solutions to complex challenges.",
  },
  {
    imageSrc: "/Assets/OurServices/CardImage.svg",
    title: "Tailored Solutions for Every Need",
    description:
      "Clients love our personalized approach. We understand their unique requirements and deliver customized solutions, ensuring our services align seamlessly with their business goals.",
  },
  {
    imageSrc: "/Assets/OurServices/CardImage.svg",
    title: "Responsive Communication",
    description:
      "Clients value our transparent and responsive communication. We keep them informed at every step, fostering a collaborative partnership and building trust through open dialogue.",
  },
  {
    imageSrc: "/Assets/OurServices/CardImage.svg",
    title: "Timely Project Delivery",
    description:
      "We take pride in our punctuality. Clients consistently commend us for delivering projects on time, allowing them to meet their milestones and launch products with confidence.",
  },
  {
    imageSrc: "/Assets/OurServices/CardImage.svg",
    title: "TProactive Support and Maintenance",
    description:
      "Beyond project completion, our commitment extends to proactive support and maintenance. Clients appreciate our ongoing assistance, ensuring their systems remain robust and up-to-date.",
  },
];
export default function AboutClient() {
  return (
    <>
      <div className="flex flex-col py-10 px-8 md:py-20  md:px-36  bg-primaryBlack gap-12">
        <div className="gap-3 flex flex-col">
          <p className="text-3xl md:text-5xl font-bold uppercase text-whitePrimary poppins  ">
            What clients love about us
          </p>
        </div>
        <div className="flex flex-wrap gap-8 w-full">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="flex-grow flex flex-col gap-6 w-full  md:w-1/2 lg:w-2/5  xl:w-1/4 border-2 border-solid border-opacity-20 border-gray-300 rounded-md self-stretch bg-cardBg  px-4 py-3 sm:px-8  sm:py-6 "
            >
              <div className="flex w-full">
                <Image
                  src={card.imageSrc}
                  width={62}
                  height={62}
                  alt="CardImage"
                />
              </div>
              <p className="text-xl text-whitePrimary font-bold uppercase  tracking-tight poppins w-full ">
                {card.title}
              </p>
              <p className="w-full md:w-2/2  font-normal text-whitePrimary text-lg inter ">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
