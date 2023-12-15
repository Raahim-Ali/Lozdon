import Image from "next/image";
const cardData = [
  {
    imageSrc: "/Assets/OurServices/CardImage.svg",
    title: "Transparent processes",
    description:
      "Lorem ipsum dolor sit amet, conse-ctetur adipiscing elit. Nulla in luctus tortor. In molestie diam magna, nec faucibus ex mollis non.,",
  },
  {
    imageSrc: "/Assets/OurServices/CardImage.svg",
    title: "Transparent processes",
    description:
      "Lorem ipsum dolor sit amet, conse-ctetur adipiscing elit. Nulla in luctus tortor. In molestie diam magna, nec faucibus ex mollis non.,",
  },
  {
    imageSrc: "/Assets/OurServices/CardImage.svg",
    title: "Transparent processes",
    description:
      "Lorem ipsum dolor sit amet, conse-ctetur adipiscing elit. Nulla in luctus tortor. In molestie diam magna, nec faucibus ex mollis non.,",
  },
  {
    imageSrc: "/Assets/OurServices/CardImage.svg",
    title: "Transparent processes",
    description:
      "Lorem ipsum dolor sit amet, conse-ctetur adipiscing elit. Nulla in luctus tortor. In molestie diam magna, nec faucibus ex mollis non.,",
  },
  {
    imageSrc: "/Assets/OurServices/CardImage.svg",
    title: "Transparent processes",
    description:
      "Lorem ipsum dolor sit amet, conse-ctetur adipiscing elit. Nulla in luctus tortor. In molestie diam magna, nec faucibus ex mollis non.,",
  },
  {
    imageSrc: "/Assets/OurServices/CardImage.svg",
    title: "Transparent processes",
    description:
      "Lorem ipsum dolor sit amet, conse-ctetur adipiscing elit. Nulla in luctus tortor. In molestie diam magna, nec faucibus ex mollis non.,",
  },

  // Add more objects for additional cards
];
export default function AboutClient() {
  return (
    <>
      <div
        className="flex flex-col py-10 px-8 md:py-20  md:px-36  bg-primaryBlack gap-12"
        style={{ paddingTop: "100px", paddingBottom: "100px" }}
      >
        <div className="gap-3 flex flex-col">
          {/* text Section */}
          {/* <p className="custom-text-24 text-whitePrimary">.why they love</p> */}
          <p className="text-3xl md:text-5xl font-bold uppercase text-whitePrimary poppins  ">
            What clients love about us
          </p>
        </div>
        <div className="flex flex-wrap gap-8 w-full">
          {/* Card Section */}
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
