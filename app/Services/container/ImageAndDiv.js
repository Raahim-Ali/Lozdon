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
  const getModulesForFLex = (index) => {
    if (index % 2 === 0) {
      return "row";
    } else if (index % 2 !== 0) {
      return "row-reverse";
    }
    console.log("index", index);
    return index;
  };
  return (
    <>
      {yourArray.map((item, index) => (
        <div
          key={index}
          className={`flex ${
            index % 2 === 0 ? "bg-newGrey" : "bg-anotherColor"
          } pt-20 pb-20 pr-36 pl-36`}
          style={{
            width: "100%",
            gap: "56px",
            flexDirection: getModulesForFLex(index),
          }}
        >
          <>
            {/* Text Section on the left */}
            <div className="flex flex-col gap-8 " style={{ width: "50%" }}>
              <h5
                className="text-4xl font-bold uppercase  tracking-wider poppins"
                style={{ color: "#3B3F5C" }}
              >
                {item.title}
              </h5>
              <h5
                className="text-xl font-medium uppercase  inter tracking-wider "
                style={{ color: "#3B3F5C" }}
              >
                {item.description}
              </h5>
              <p className="mb-3 font-light text-gray-700 dark:text-gray-400  text-xl inter  ">
                {item.text}
              </p>
              {/* ... Other text elements */}
              <Greenbtn buttonText="Learn more" />
            </div>

            {/* Image Section on the right */}
            <div
              style={{
                width: "50%",
                background: `url(${item.imageSrc})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              {/* <Image width={544} height={415} src={item.imageSrc} /> */}
            </div>
          </>
        </div>
      ))}
    </>
  );
}
