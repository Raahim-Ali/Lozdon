import Greenbtn from "@/app/components/Greenbtn";
import Image from "next/image";
import React from "react";
const yourArray = [
  {
    title: "Continuous Integration and Deployment (CI/CD)",
    description:
      "Automate the building, testing, and deployment of software changes.",
    text: "Streamline your development workflow with our CI/CD service. We automate the integration, testing, and deployment processes, ensuring rapid, reliable, and error-free delivery of your software. Accelerate time-to-market, enhance collaboration, and elevate your development efficiency with our seamless CI/CD solutions.",
    imageSrc: "/Assets/OurServices/WebDevelopment.svg",
  },
  {
    title: "Infrastructure as Code (IaC)",
    description:
      "Manage and provision infrastructure through code for consistency and scalability.",
    text: "Elevate your infrastructure management with our IaC service. We transform manual processes into code, allowing you to provision, configure, and scale infrastructure seamlessly. Enhance consistency, reduce errors, and increase scalability through automated infrastructure deployment. Experience the agility of IaC for efficient, reliable, and responsive IT operations.",
    imageSrc: "/Assets/OurServices/WebDevelopment.svg",
  },
  {
    title: "Containerization and Orchestration",
    description:
      "Package applications into containers and orchestrate their deployment with tools like Docker and Kubernetes.",
    text: "Revolutionize your application deployment with our Containerization and Orchestration service. We leverage cutting-edge technologies like Docker and Kubernetes to encapsulate your applications into portable containers and seamlessly orchestrate their deployment.",
    imageSrc: "/Assets/OurServices/WebDevelopment.svg",
  },
  {
    title: "Monitoring and Logging",
    description:
      "Implement continuous monitoring and logging for applications and infrastructure.",
    text: "Optimize your operations with our Monitoring and Logging service. We implement robust monitoring solutions to track the performance and health of your applications and infrastructure in real-time. Coupled with advanced logging capabilities, we provide actionable insights, enabling proactive issue resolution. Enhance reliability, detect anomalies, and ensure peak performance with our comprehensive Monitoring and Logging services.",
    imageSrc: "/Assets/OurServices/WebDevelopment.svg",
  },
  {
    title: "Security in DevOps",
    description:
      "Embed security practices throughout the development and operations lifecycle.",
    text: "Fortify your digital landscape with our Security in DevOps service. We seamlessly embed security throughout your development and operations lifecycle. From automated vulnerability assessments to robust threat detection, we prioritize protection without compromising agility. Safeguard your assets, comply with industry standards, and foster a secure, resilient environment with our comprehensive Security in DevOps solutions.",
    imageSrc: "/Assets/OurServices/WebDevelopment.svg",
  },
  {
    title: "Configuration Management",
    description:
      "Manage and maintain the configuration of servers and infrastructure for consistency.",
    text: "Streamline and standardize your IT infrastructure with our Configuration Management service. We automate the setup, maintenance, and tracking of system configurations, ensuring consistency and reliability. From server provisioning to software deployments, our solution optimizes operations, reduces errors, and enhances scalability.",
    imageSrc: "/Assets/OurServices/WebDevelopment.svg",
  },
  {
    title: "Collaboration and Communication",
    description:
      "Enhance collaboration and communication between development and operations teams.",
    text: "Empower teamwork and boost productivity with our Collaboration and Communication service. We integrate cutting-edge tools like Slack, Teams, and collaborative platforms to enhance communication and cooperation across your development and operations teams. Break down silos, foster real-time collaboration, and accelerate project delivery.",
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
          <div className="flex flex-col gap-8 w-full xl:w-1/2 justify-center ">
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
