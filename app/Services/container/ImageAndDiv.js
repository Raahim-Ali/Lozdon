import Greenbtn from "@/app/components/Greenbtn";
import Image from "next/image";
import React from "react";
const yourArray = [
  {
    title: "Web Development",
    description: "Custom development to meet your needs",
    text: " We advise property owners in all issues in respect of such works and entitlements in respect of boundari- -es. We assess the location of the boundaries and advise. We advise property owners in all issues in respect of such works and entitlements in respect of boundari- -es. We assess the location of the boundaries and advise.",
    imageSrc: "/Assets/OurServices/WebDevelopment.svg",
  },
  {
    title: "Mobile Development",
    description: "Custom development to meet your needs",
    text: " We advise property owners in all issues in respect of such works and entitlements in respect of boundari- -es. We assess the location of the boundaries and advise. We advise property owners in all issues in respect of such works and entitlements in respect of boundari- -es. We assess the location of the boundaries and advise.",

    imageSrc: "/Assets/OurServices/WebDevelopment.svg",
  },
  {
    title: "Web Development",
    description: "Custom development to meet your needs",
    text: " We advise property owners in all issues in respect of such works and entitlements in respect of boundari- -es. We assess the location of the boundaries and advise. We advise property owners in all issues in respect of such works and entitlements in respect of boundari- -es. We assess the location of the boundaries and advise.",

    imageSrc: "/Assets/OurServices/WebDevelopment.svg",
  },
  {
    title: "Web Development",
    description: "Custom development to meet your needs",
    text: " We advise property owners in all issues in respect of such works and entitlements in respect of boundari- -es. We assess the location of the boundaries and advise. We advise property owners in all issues in respect of such works and entitlements in respect of boundari- -es. We assess the location of the boundaries and advise.",

    imageSrc: "/Assets/OurServices/WebDevelopment.svg",
  },
  // Add more items as needed
];
export default function ImageAndDiv() {
  // const getModulesForFLex = (index) => {
  //   if (index % 2 === 0) {
  //     return "row";
  //   } else if (index % 2 !== 0) {
  //     return "row-reverse";
  //   }
  //   console.log("index", index);
  //   return index;
  // };
  return (
    <>
      {yourArray.map((item, index) => (
        <div
          key={index}
          className={`flex  ${
            index % 2 === 0 ? "flex-row" : "flex-row-reverse"
          } ${
            index % 2 === 0 ? "bg-newGrey" : "bg-anotherColor"
          } pt-20 pb-20 pr-36 pl-36 gap-12   `}
          // style={{ flexDirection: "column" }}
        >
          {/* Image Section on the top for small screens */}
          <div className="w-1/2">
            <img
              style={{ width: "100%", maxHeight: "350px", objectFit: "cover" }}
              src={item.imageSrc}
            />
          </div>

          {/* Text Section on the bottom for small screens */}
          <div className="flex flex-col gap-8 w-full sm:w-1/2">
            <h5 className="text-4xl font-bold uppercase tracking-wider poppins text-primaryTextColor">
              {item.title}
            </h5>
            <h5 className="text-xl font-medium uppercase inter tracking-wider text-primaryTextColor ">
              {item.description}
            </h5>
            <p className="mb-3 font-light text-gray-700 dark:text-gray-400 text-xl inter">
              {item.text}
            </p>
            {/* ... Other text elements */}
            <Greenbtn buttonText="Learn more" href="#" />
          </div>
        </div>
      ))}
    </>
  );
}
