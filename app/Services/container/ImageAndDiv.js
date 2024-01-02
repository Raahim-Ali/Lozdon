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
            <h5 className="text-xl font-medium uppercase inter tracking-wider text-primaryTextColor md:flex hidden ">
              {item.description}
            </h5>
            <p className="mb-3 font-light text-base text-primaryTextColor  md:text-xl inter ">
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
