import Greenbtn from "@/app/components/Greenbtn";
import React from "react";
const yourArray = [
  {
    title: "Advanced Frontend Technologies",
    description: "Custom development to meet your needs",
    text: " SPA development loads a single HTML page, updating content dynamically for a seamless user experience. PWAs combine web and mobile app features, offering offline capabilities and push notifications. Web Components Integration enables reusable, modular frontend code, enhancing maintainability in web projects.",
    imageSrc: "/Assets/OurServices/WebDevelopment.svg",
  },
  {
    title: "Backend Technologies",
    description: "Custom development to meet your needs",
    text: " Serverless Architecture streamlines application development by eliminating server management, automatically scaling and reducing infrastructure overhead. Microservices Development enhances scalability and maintainability by breaking down large applications into independent services. API Development and Integration are crucial for seamless communication between software systems, creating interconnected and interoperable components.",

    imageSrc: "/Assets/OurServices/WebDevelopment.svg",
  },
  {
    title: "Database Solutions",
    description: "Custom development to meet your needs",
    text: "NoSQL databases like MongoDB and Cassandra offer flexibility and scalability for handling large unstructured or semi-structured data. SQL databases such as MySQL and PostgreSQL ensure structured data storage with integrity. Database Scaling distributes load for performance, and Sharding horizontally partitions data, enhancing scalability.",

    imageSrc: "/Assets/OurServices/WebDevelopment.svg",
  },
  {
    title: "Cloud Services Integration",
    description: "Custom development to meet your needs",
    text: "AWS Integration brings Amazon Web Services' cloud services, ensuring scalable and reliable infrastructure. Microsoft Azure Integration offers diverse cloud tools for global application development. Google Cloud Platform Integration enhances web app scalability and performance with cloud services.",

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
