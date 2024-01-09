import React from "react";
const yourArray = [
  {
    title: "User Research and Analysis",
    description: "Understanding user needs, behaviors, and preferences.",
    text: "User Research and Analysis is the foundation of exceptional design, delving into the intricacies of user behaviors and preferences. Through surveys, interviews, and usability testing, we extract valuable insights to inform every aspect of the design process. By understanding your users intimately, we create interfaces that not only meet their needs but also exceed expectations. Our meticulous research ensures a user-centric approach, fostering a seamless and engaging experience that resonates with your target audience.",
    imageSrc: "/Assets/OurServices/WebDevelopment.svg",
  },
  {
    title: "Information Architecture and Wireframing",
    description: "Organizing content and creating structural blueprints.",
    text: "Crafting seamless user experiences starts with Information Architecture and Wireframing. We meticulously organize content, creating a strategic structural blueprint for intuitive navigation. Our wireframing process visualizes the layout, ensuring clarity and simplicity. This approach guarantees user-friendly designs that enhance overall satisfaction and usability.",
    imageSrc: "/Assets/OurServices/WebDevelopment.svg",
  },
  {
    title: "Visual Design and Branding",
    description:
      "Crafting visually appealing interfaces and establishing brand identity.",
    text: "Visual Design and Branding bring interfaces to life with captivating aesthetics and a strong brand identity. We specialize in creating visually stunning elements, including color schemes, typography, and imagery, aligned with your brand. By harmonizing these elements, we ensure a cohesive and memorable user experience. Elevate your digital presence with our expertise, where every design choice reflects your brand essence, fostering recognition and user engagement.",
    imageSrc: "/Assets/OurServices/WebDevelopment.svg",
  },
  {
    title: "Interaction and Responsive Design",
    description:
      "Defining user interactions and ensuring adaptability across devices.",
    text: "Transforming user engagement, our Interaction and Responsive Design expertise focuses on seamless interactions and adaptability across devices. Captivate users with engaging designs that ensure a consistent, user-friendly experience on every platform, creating dynamic and enjoyable digital journeys.",
    imageSrc: "/Assets/OurServices/WebDevelopment.svg",
  },
  {
    title: "Prototyping and Usability Testing",
    description:
      "Creating interactive prototypes and evaluating user experience.",
    text: "Elevate design precision with Prototyping and Usability Testing. Our interactive prototypes ensure optimal functionality, complemented by rigorous usability testing to guarantee a user-friendly final product. Meticulously refining the user journey, we deliver a seamless and purpose-aligned experience, ensuring your objectives are met with precision and user satisfaction.",

    imageSrc: "/Assets/OurServices/WebDevelopment.svg",
  },
  {
    title: "Accessibility and Inclusive Design",
    description:
      "Designing interfaces that are accessible to diverse user groups.",
    text: "Accessibility and Inclusive Design are the foundation of user-centric solutions. Committed to diversity, we craft interfaces catering to users with varied needs. Our focus ensures seamless access and interaction for everyone, regardless of abilities. Through inclusive design, we foster an environment where every user feels valued, contributing to a more equitable and user-friendly digital experience for all.",
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
