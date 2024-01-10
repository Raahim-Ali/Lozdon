import Greenbtn from "@/app/components/Greenbtn";
import Image from "next/image";
import React from "react";
const yourArray = [
  {
    title: "iOS App Development",
    description:
      "Crafting iOS Excellence: Seamless Solutions, Endless Possibilities",
    text: "Our iOS App Development service creates sleek and functional applications for iPhones, iPads, and Apple Watches. Our expert developers prioritize user-friendly interfaces and seamless experiences. Whether you're targeting the App Store or need custom enterprise solutions, we deliver quality with a focus on the latest Apple technologies. Our commitment is to bring your ideas to life in the vibrant iOS ecosystem.",
    imageSrc: "/Assets/OurServices/app1.jpg",
  },
  {
    title: "Android App Development",
    description:
      "Turning Ideas into Interactive Excellence: Your Vision, Our Code.",
    text: "Our Android App Development service creates user-friendly and efficient applications tailored for various Android devices. With a focus on intuitive interfaces, our skilled developers ensure your app excels in the competitive Android ecosystem. Whether you're aiming for the Google Play Store or need customized business solutions, our team is committed to delivering high-quality applications that leverage the latest Android technologies.",

    imageSrc: "/Assets/OurServices/app2.jpg",
  },
  {
    title: "Cross-Platform Development",
    description:
      "Code Once, Thrive Everywhere: Seamless Cross-Platform Solutions.",
    text: "Our Cross-Platform App Development service ensures efficient app performance on both iOS and Android using frameworks like Flutter and React Native. With a streamlined development process and a single codebase, we optimize efficiency and reduce time-to-market. Whether you're aiming for a broad user base or optimizing resource utilization, our cross-platform expertise extends your app's reach across different platforms with consistency and impact.",
    imageSrc: "/Assets/OurServices/app3.jpg",
  },
  {
    title: "Mobile App Monetization Strategies",
    description:
      "Monetize Smart, Prosper Mobile: Elevating App Revenue Strategies.",
    text: "Maximize your app's earnings with our Mobile App Monetization service. From in-app purchases to ad integration, our experts provide strategic guidance tailored to your app's characteristics and user base. We ensure effective monetization, helping your app achieve financial success in the competitive market.",
    imageSrc: "/Assets/OurServices/app4.jpg",
  },
  {
    title: "Mobile App Maintenance and Support",
    description:
      "Sustain, Enhance, Prosper: Elevating Mobile Apps Through Expert Maintenance and Support.",
    text: "Our Mobile App Maintenance service guarantees sustained performance through timely updates and bug fixes. Focused on seamless user experiences, we prioritize enhancements and provide dedicated user support. Committed to your app's lifecycle, we ensure optimal functionality, addressing issues promptly, and implementing improvements to meet evolving user needs.",
    imageSrc: "/Assets/OurServices/app5.jpg",
  },
  {
    title: "Mobile App Consulting",
    description:
      "Navigating Success in the App World: Your Vision, Our Expertise.",
    text: "Engage our Mobile App Consulting service for comprehensive guidance in navigating the complexities of app development. From initial project planning and strategic considerations to meticulous technology stack selection, our expert consultants provide invaluable insights. Whether you're a startup embarking on your app journey or an enterprise aiming to optimize processes, we customize strategies to ensure a robust and successful mobile app development experience.",
    imageSrc: "/Assets/OurServices/app6.jpg",
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
          <div className="flex flex-col gap-4 w-full xl:w-1/2 justify-center">
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
          </div>
        </div>
      ))}
    </>
  );
}
