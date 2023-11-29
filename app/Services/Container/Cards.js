import Greenbtn from "@/app/Components/Greenbtn";
import Image from "next/image";
import React from "react";
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
  // Add more objects for additional cards
];
export default function Cards() {
  return (
    <div className="flex pt-20 pb-20 pr-36 pl-36">
      {cardData.map((card, index) => (
        <div key={index} className="max-w-sm p-10 flex flex-col gap-6">
          <div className="flex justify-center align-center">
            <Image src={card.imageSrc} width={62} height={62} />
          </div>
          <h5
            className="text-2xl font-bold uppercase text-center tracking-wider poppins"
            style={{ color: "#3B3F5C" }}
          >
            {card.title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center text-lg inter">
            {card.description}
          </p>
          <a
            href={card.learnMoreLink}
            className="flex justify-center align-center px-3 py-2 text-md font-medium text-center text-main poppins uppercase"
          >
            Learn more
          </a>
        </div>
      ))}
    </div>
  );
}
