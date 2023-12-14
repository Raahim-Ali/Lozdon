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
  // Add more objects for additional cards
];
export default function Cards() {
  return (
    <div className=" pt-20 pb-20 pr-6 pl-6 md:pr-36 md:pl-36 flex-wrap md:flex hidden">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="p-10  flex-col gap-6 lg:w-1/3 xl:w-1/4 md:flex hidden"
        >
          <div className="flex justify-center align-center">
            <Image src={card.imageSrc} width={62} height={62} alt="cardImage" />
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
