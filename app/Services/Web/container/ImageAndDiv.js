import Greenbtn from "@/app/components/Greenbtn";
import Image from "next/image";
import React from "react";
const yourArray = [
  {
    title: "Advanced Frontend Technologies",
    description: "Custom development to meet your needs",
    li1: " Single Page Application (SPA).",
    li2: "Development Progressive Web App (PWA).",
    li3: "  Development Web Components Integration.",
    imageSrc: "/Assets/OurServices/WebDevelopment.svg",
  },
  {
    title: "Backend Technologies",
    description: "Custom development to meet your needs",
    li1: " Single Page Application (SPA).",
    li2: "Development Progressive Web App (PWA).",
    li3: "  Development Web Components Integration.",

    imageSrc: "/Assets/OurServices/WebDevelopment.svg",
  },
  {
    title: "Database Solutions",
    description: "Custom development to meet your needs",
    li1: " Single Page Application (SPA).",
    li2: "Development Progressive Web App (PWA).",
    li3: "  Development Web Components Integration.",
    imageSrc: "/Assets/OurServices/WebDevelopment.svg",
  },
  {
    title: "Cloud Services Integration",
    description: "Custom development to meet your needs",
    li1: " Single Page Application (SPA).",
    li2: "Development Progressive Web App (PWA).",
    li3: "  Development Web Components Integration.",
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
          className={`flex  flex-col${
            index % 2 === 0 ? " xl:flex-row" : " xl:flex-row-reverse"
          } ${
            index % 2 === 0 ? "bg-newGrey" : "bg-anotherColor"
          } md:py-20 md:px-36 gap-12  py-10 px-10 `}
          // style={{ flexDirection: "column" }}
        >
          {/* Image Section on the top for small screens */}
          <div className="xl:w-1/2">
            <img
              className="w-full object-cover rounded-2xl  xl:max-h-96"
              src={item.imageSrc}
            />
          </div>

          {/* Text Section on the bottom for small screens */}
          <div className="flex flex-col gap-8 w-full xl:w-1/2">
            <h5 className="md:text-4xl text-2xl font-bold uppercase tracking-wider poppins text-primaryTextColor ">
              {item.title}
            </h5>
            <div className="flex flex-col gap-2">
              <h5 className="text-xl font-medium uppercase inter tracking-wider text-primaryTextColor md:flex hidden ">
                {item.description}
              </h5>
              <ol className="font-light text-base text-primaryTextColor  md:text-xl inter ">
                <li>{item.li1}</li>
                <li>{item.li2}</li>
                <li>{item.li3}</li>
              </ol>
            </div>
            {/* ... Other text elements */}
            <Greenbtn buttonText="Learn more" href="#" />
          </div>
        </div>
      ))}
    </>
  );
}
