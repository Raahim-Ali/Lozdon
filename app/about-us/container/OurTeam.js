import Image from "next/image";
import React from "react";
const cardData = [
  {
    imageSrc: "/Assets/aboutUs/TeamMember.svg",
    title: "Waqas Sarwar",
    description: "Business Development Manager",
  },
  {
    imageSrc: "/Assets/aboutUs/TeamMember.svg",
    title: "Waqas Sarwar",
    description: "Business Development Manager",
  },
  {
    imageSrc: "/Assets/aboutUs/TeamMember.svg",
    title: "Waqas Sarwar",
    description: "Business Development Manager",
  },
  {
    imageSrc: "/Assets/aboutUs/TeamMember.svg",
    title: "Waqas Sarwar",
    description: "Business Development Manager",
  },
  {
    imageSrc: "/Assets/aboutUs/TeamMember.svg",
    title: "Waqas Sarwar",
    description: "Business Development Manager",
  },
  {
    imageSrc: "/Assets/aboutUs/TeamMember.svg",
    title: "Waqas Sarwar",
    description: "Business Development Manager",
  },

  // Add more objects for additional cards
];
export default function OurTeam() {
  return (
    <>
      <div
        className=" flex-col  pr-36 pl-36 gap-12 lg:flex hidden"
        style={{ paddingTop: "100px", paddingBottom: "100px" }}
      >
        <div className="gap-3 flex flex-col">
          {/* text Section */}
          {/* <p className="custom-text-24">.here we are</p> */}
          <p className="text-5xl font-bold uppercase  poppins  ">
            our Amazing team
          </p>
        </div>

        <div className="flex flex-wrap  w-full" style={{ gap: "20px" }}>
          {/* Card Section */}
          {cardData.map((card, index) => (
            <div
              key={index}
              className="flex-grow flex flex-col gap-4 md:w-1/3 lg:w-1/4 self-stretch  pl-8 pr-8 pt-6 pb-6"
            >
              <div className="flex w-full">
                <img
                  src={card.imageSrc}
                  style={{
                    borderRadius: "10px",
                    // height: "316px",
                  }}
                />
              </div>
              <p className="text-2xl font-semibold uppercase  tracking-tight poppins w-full ">
                {card.title}
              </p>
              <p className="w-2/2  font-normal  text-base poppins ">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
