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
      <div className="flex flex-col justify-between pt-20 pb-20 pr-36 pl-36 gap-12 w-full bg-newGrey">
        <div className="flex gap-8  ">
          <p className="text-4xl font-medium poppins leading-relaxed">
            Take advantage of our proven web development process and make your
            project a success
          </p>
          <p className="text-xl font-light inter " style={{ width: "95%" }}>
            We advise property owners in all issues in respect of such works and
            entitlements in respect of boundari- -es. We assess the location of
            the boundaries and advise. We advise property owners in all issues
            in respect of such works and entitlements in respect of boundari-
            -es. We assess the location of the boundaries and advise.
          </p>
        </div>
        <div className="flex ">
          {cardData.map((card, index) => (
            <div
              key={index}
              style={{}}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 max-w-sm pt-10 pb-10  flex flex-col gap-6"
            >
              <div
                className="h-2 bg-green-400  relative   "
                style={{ width: `${card.progress}%`, top: "4.7rem" }}
              ></div>
              <p
                className=" w-full text-green-500 text-center text-opacity-20 poppins custom-text-64  relative"
                style={{ zIndex: 1 }}
              >
                {card.number}
              </p>

              <h5
                className="w-full text-2xl font-bold uppercase text-center tracking-wider inter"
                style={{ color: "#3B3F5C" }}
              >
                {card.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center text-lg inter">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
