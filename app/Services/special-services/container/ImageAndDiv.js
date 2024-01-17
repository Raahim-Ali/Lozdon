import Greenbtn from "@/app/components/Greenbtn";
import Image from "next/image";
import React from "react";
const yourArray = [
  {
    title: "CTO as a service",
    description: "Strategic tech leadership for innovation optimization.",
    text: "Octal Code's CTO as a Service provides essential strategic technology leadership, offering expert guidance and oversight to optimize your technology decisions. Our seasoned professionals excel in formulating technology roadmaps, implementing cutting-edge solutions, and ensuring robust security and compliance measures. As your dedicated partner, we drive innovation, helping you leverage the latest technologies for a competitive advantage. With Octal Code's CTO as a Service, rest assured that your business is equipped to thrive and adapt in today's ever-evolving digital landscape.",
    imageSrc: "/Assets/OurServices/ss1.jpeg",
  },
  {
    title: "Staff Augmentation",
    description: "Integrate skilled professionals to boost project success.",
    text: "Octal Code's Staff Augmentation service seamlessly integrates skilled professionals into your workforce, enhancing capacity and project execution success. Our experts bring expertise to the table, addressing your need for additional skills, experience, or manpower. With Octal Code's Staff Augmentation, confidently scale your team up or down as required, ensuring timely and successful project completion. We provide the right talent and skills to meet and exceed your goals, offering a flexible solution for workforce enhancement.",
    imageSrc: "/Assets/OurServices/ss2.jpeg",
  },
  {
    title: "Software Architecture Design",
    description:
      "Elevate projects with efficient, scalable software architecture.",
    text: "Octal Code's Software Architecture Design service empowers your projects with efficient, scalable, and innovative blueprints. We specialize in crafting the structural foundation that brings your ideas to life. Our experienced team designs software architecture to optimize performance, scalability, and innovation. With expert guidance, your projects gain a strong, strategic framework, ensuring success and longevity in the ever-evolving digital landscape.",
    imageSrc: "/Assets/OurServices/ss3.jpeg",
  },
  {
    title: "Application Maintenance and Support",
    description:
      "Ensure application durability with continuous care and updates.",
    text: "Octal Code's Application Maintenance and Support service ensures continuous care, updates, and troubleshooting for the durability and dependability of your applications. Dedicated to seamless software operation, we keep your applications running smoothly, addressing any issues promptly. With expert support, trust in the ongoing performance and reliability of your software.",
    imageSrc: "/Assets/OurServices/ss4.jpeg",
  },
  {
    title: "Re-Engineering and Optimization",
    description:
      "Data-Driven Excellence: Crafting, Deploying, Excelling in Machine Learning.",
    text: "Octal Code's Re-Engineering and Optimization service revitalizes your software systems for enduring success. Our expert team enhances efficiency, specializing in upgrading and streamlining to meet evolving business demands. With us, your software becomes a valuable, competitive asset in the dynamic digital landscape. Let Octal Code be your partner in achieving enduring excellence in software systems.",
    imageSrc: "/Assets/OurServices/ss5.jpeg",
  },
  {
    title: "Machine Learning Development",
    description: "Leveraging data for cutting-edge machine learning solutions.",
    text: "Octal Code's Machine Learning Development: Empowering Intelligent Solutions through Data. Our expert team specializes in designing, developing, and deploying cutting-edge machine learning models with formal rigor. Trust us to keep your software at the forefront of data-driven innovation, ensuring competitiveness in the dynamic digital landscape.",
    imageSrc: "/Assets/OurServices/ss6.jpeg",
  },
  {
    title: " Cloud Migrations",
    description:
      "Seamless cloud transitions for optimized performance and scalability.",
    text: "Octal Code's Cloud Migration: Streamlining your transition to cloud infrastructure with expert precision. Our dedicated team ensures a seamless transfer of systems, optimizing performance, scalability, and cost-efficiency. Leverage the full potential of cloud technology with our guidance, enhancing software performance while maintaining cost-effectiveness. Seamlessly scale resources and position your organization for success in the digital era with Octal Code's Cloud Migration service.",
    imageSrc: "/Assets/OurServices/ss7.jpeg",
  },
  {
    title: " Data Migrations",
    description:
      "Simplify data transitions with secure, smooth Data Migration.",
    text: "Octal Code's Data Migration: Simplifying and securing data transitions with a structured approach. Our specialized team prioritizes data integrity and availability, ensuring a seamless and secure transfer process. Trust us for a meticulous transition, enabling your organization to maximize data asset utilization without disruptions or loss. With Octal Code, ensure the integrity and security of your data, making it readily available and fully functional in its new environment.",
    imageSrc: "/Assets/OurServices/ss8.jpeg",
  },
  {
    title: " Reporting & Analytics & 3rd Party Integrations",
    description:
      "Empower decisions with Reporting & Analytics, seamless 3rd Party Integrations",
    text: "Octal Code's Reporting & Analytics: Empowering data-driven decisions through robust solutions. Our expert team delivers valuable insights for strategic decision-making. Seamless 3rd Party Integrations expand your software capabilities, broadening data resources for comprehensive business intelligence. Leverage our services for reliable, accurate data-driven insights, ensuring your organization's success and competitive edge in today's dynamic business landscape.",
    imageSrc: "/Assets/OurServices/ss9.jpeg",
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
            {/* <Greenbtn buttonText="Learn more" href="#" /> */}
          </div>
        </div>
      ))}
    </>
  );
}
