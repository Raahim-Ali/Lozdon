import Greenbtn from "@/app/components/Greenbtn";
import Image from "next/image";
import React from "react";
const yourArray = [
  {
    title: "Functional Testing",
    description: "Ensuring Every Function Delivers Excellence.",
    text: "Functional Testing ensures every component of your software functions precisely as intended. Our rigorous approach involves testing each feature, validating inputs, and verifying expected outputs. From unit and integration testing to system and acceptance testing, we meticulously evaluate functionalities, guaranteeing a robust and reliable software solution. With our Functional Testing, you can be confident in the flawless performance of your software, meeting and exceeding user expectations.",
    imageSrc: "/Assets/OurServices/testing1.jpeg",
  },
  {
    title: "Automated Testing",
    description: "Precision and Speed for Flawless Software.",
    text: "Automated Testing optimizes precision and speed in software verification. Employing automated tools, we systematically execute test cases, comparing actual outcomes with expected results. This efficient approach enhances testing coverage, accelerates testing cycles, and ensures the reliability of your software. Embrace Automated Testing for a streamlined and efficient quality assurance process, allowing you to deliver high-quality software with confidence and speed.",
    imageSrc: "/Assets/OurServices/testing2.jpeg",
  },
  {
    title: "Non-Functional Testing",
    description: "Elevating Software Beyond Functionality.",
    text: "Non-Functional Testing goes beyond functionality, focusing on performance, usability, and security. Our meticulous approach evaluates software aspects that impact user experience and system stability. From load testing for performance to usability testing for a seamless interface, we ensure your software meets the highest non-functional standards. Elevate your software's overall quality, performance, and security with our Non-Functional Testing, ensuring it exceeds expectations in every dimension.",
    imageSrc: "/Assets/OurServices/testing3.jpeg",
  },
  {
    title: "Compatibility Testing",
    description: "Seamless Performance Across Every Platform.",
    text: "Compatibility Testing ensures your software's seamless performance across diverse environments. We meticulously verify its functionality on different browsers, devices, and operating systems, guaranteeing a consistent user experience. Our thorough approach identifies and resolves compatibility issues, ensuring your software reaches its full potential and delights users across various platforms. Trust in our Compatibility Testing for a robust and universally accessible software solution that resonates with your diverse user base.",
    imageSrc: "/Assets/OurServices/testing4.jpeg",
  },
  {
    title: "Regression Testing",
    description: "Safeguarding Functionality Across Every Update.",
    text: "Regression Testing safeguards your software's existing functionalities through each update. Our meticulous process ensures that new code changes do not adversely impact previously tested features. By systematically retesting the software, we identify and address potential issues, maintaining its reliability and stability. With our Regression Testing, you can confidently introduce enhancements and updates, knowing your software's core functionalities remain intact, delivering a seamless and consistent user experience.",
    imageSrc: "/Assets/OurServices/testing5.jpeg",
  },
  {
    title: "User Interface (UI) Testing",
    description: "Crafting Seamless and Intuitive User Experiences.",
    text: "Crafting Seamless and Intuitive User Experiences. Our meticulous approach evaluates the visual and interactive elements of your software, ensuring an intuitive and delightful user interface. From layout consistency to responsive design, we guarantee that your application not only looks appealing but also functions seamlessly across various devices. Elevate user satisfaction and engagement with our UI Testing, delivering a polished and user-friendly interface that resonates with your audience.",
    imageSrc: "/Assets/OurServices/testing6.jpeg",
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
          <div className="flex flex-col gap-8 w-full xl:w-1/2 justify-center">
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
