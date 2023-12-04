import React from "react";
import Image from "next/image";

const cardData = [
  {
    imageSrc: "/Assets/OurServices/CardImage.svg",
    title: "Web Development",
    description:
      "This metaphor implies every aspect of the industry in recent times",
    learnMoreLink: "#",
  },
  {
    imageSrc: "/Assets/OurServices/CardImage.svg",
    title: "Mobile Development",
    description:
      "This metaphor implies every aspect of the industry in recent times",
    learnMoreLink: "#",
  },
  {
    imageSrc: "/Assets/OurServices/CardImage.svg",
    title: "DevOps",
    description:
      "This metaphor implies every aspect of the industry in recent times",
    learnMoreLink: "#",
  },
  {
    imageSrc: "/Assets/OurServices/CardImage.svg",
    title: "UI/UX Design",
    description:
      "This metaphor implies every aspect of the industry in recent times",
    learnMoreLink: "#",
  },
  {
    imageSrc: "/Assets/OurServices/CardImage.svg",
    title: "UI/UX Design",
    description:
      "This metaphor implies every aspect of the industry in recent times",
    learnMoreLink: "#",
  },
  {
    imageSrc: "/Assets/OurServices/CardImage.svg",
    title: "UI/UX Design",
    description:
      "This metaphor implies every aspect of the industry in recent times",
    learnMoreLink: "#",
  },
  // Add more objects for additional cards
];
export default function OurServices() {
  return (
    <>
      <div className="flex flex-col justify-between pt-20 pb-20 pr-36 pl-36 gap-12 ">
        <div className="gap-3 flex flex-col">
          {/* text Section */}
          <p className="custom-text-24">our web expertise</p>
          <p className="custom-text-64  poppins">Our Services</p>
        </div>
        <div className="flex flex-wrap gap-4 w-full">
          {/* Card Section */}
          {cardData.map((card, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 max-w-sm flex flex-col gap-6 border border-gray-300 rounded-lg  self-stretch"
              style={{ padding: "19px 0px", width: "31.3%" }}
            >
              <div className="flex justify-center align-center w-full">
                <Image src={card.imageSrc} width={62} height={62} />
              </div>
              <h5
                className="text-2xl font-bold uppercase text-center tracking-wider poppins w-full pr-5 pl-5"
                style={{ color: "#3B3F5C" }}
              >
                {card.title}
              </h5>
              <p className="w-2/2  font-normal text-gray-700 dark:text-gray-400 text-center text-lg inter pr-5 pl-5">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
