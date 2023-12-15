import Image from "next/image";
import React from "react";
const cardData = [
  {
    imageSrc: "/Assets/aboutUs/haveFaith.svg",
    title: "Have Faith",
  },
  {
    imageSrc: "/Assets/aboutUs/haveFaith.svg",
    title: "Have Faith",
  },
  {
    imageSrc: "/Assets/aboutUs/haveFaith.svg",
    title: "Have Faith",
  },
  {
    imageSrc: "/Assets/aboutUs/haveFaith.svg",
    title: "Have Faith",
  },

  // Add more objects for additional cards
];
export default function OurValues() {
  return (
    <>
      <div
        className=" flex-col  pr-36 pl-36 gap-12 bg-newGrey lg:flex hidden"
        style={{ paddingTop: "100px", paddingBottom: "100px" }}
      >
        <div className="gap-3 flex flex-col">
          {/* text Section */}
          {/* <p className="custom-text-24">.what we value most</p> */}
          <p className="text-5xl font-bold uppercase  poppins  ">Our Values</p>
        </div>

        <div className="flex flex-wrap  w-full" style={{ gap: "30px" }}>
          {/* Card Section */}
          {cardData.map((card, index) => (
            <div
              key={index}
              className="flex-grow flex flex-col gap-6  border-2 border-solid border-opacity-20 border-gray-300 rounded-md pl-8 pr-8 pt-6 pb-6  bg-whitePrimary"
            >
              <div className="flex justify-center items-center w-full">
                <Image
                  src={card.imageSrc}
                  width={62}
                  height={62}
                  alt="Card Image"
                />
              </div>
              <p className="text-xl font-medium uppercase text-center tracking-tight poppins w-full ">
                {card.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
