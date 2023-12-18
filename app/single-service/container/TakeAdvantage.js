import Image from "next/image";
import React from "react";
const cardData = [
  {
    number: "01",

    title: "Explore Idea",
    description:
      "This metaphor implies every aspect of the industry in recent times",
  },
  {
    number: "02",
    title: "Choose Technology",
    description:
      "This metaphor implies every aspect of the industry in recent times",
  },
  {
    number: "03",
    title: "Design",
    description:
      "This metaphor implies every aspect of the industry in recent times",
  },
  {
    number: "04",
    title: "Develop",
    description:
      "This metaphor implies every aspect of the industry in recent times",
  },
  // Add more objects for additional cards
];
export default function TakeAdvantage() {
  return (
    <>
      <div className=" flex-col justify-between pt-20 pb-20 pr-36 pl-36 gap-12 w-full bg-newGrey  xl:flex  hidden">
        <div className="flex gap-8  w-full">
          <p className="text-4xl font-medium poppins leading-relaxed w-1/2">
            Take advantage of our proven web development process and make your
            project a success
          </p>
          <p className="text-xl font-light inter w-1/2 ">
            We advise property owners in all issues in respect of such works and
            entitlements in respect of boundari- -es. We assess the location of
            the boundaries and advise. We advise property owners in all issues
            in respect of such works and entitlements in respect of boundari-
            -es. We assess the location of the boundaries and advise.
          </p>
        </div>
        <div className="flex" style={{ width: "100%" }}>
          {cardData.map((card, index) => (
            <div
              key={index}
              style={{}}
              className="pt-10 pb-10  flex flex-col gap-6"
            >
              <p
                className="  text-green-500 text-center text-opacity-20  custom-text-64  font-bold relative"
                style={{ zIndex: 1 }}
              >
                {card.number}
              </p>

              <p className=" text-xl font-semibold uppercase text-center tracking-wider inter">
                {card.title}
              </p>
              <p className="mb-3 font-light  text-center text-lg inter">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
