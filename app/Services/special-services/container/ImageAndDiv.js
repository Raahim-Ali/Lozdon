import Greenbtn from "@/app/components/Greenbtn";
import Image from "next/image";
import React from "react";
const yourArray = [
  {
    title: "CTO as a service",
    description: "Strategic tech leadership for innovation optimization.",
    text: " Octal Code's CTO as a Service is your trusted source for strategic technology leadership. We provide expert guidance and oversight to optimize your technology decisions. Whether it's formulating a technology roadmap, assessing and implementing the latest solutions, or ensuring security and compliance, we're your strategic partner every step of the way. We drive innovation, helping you harness cutting-edge technologies to gain a competitive edge. With Octal Code's CTO as a Service, you gain a reliable and forward-thinking technology partner, ensuring that your business leverages the full potential of technology to thrive and adapt in an ever-evolving digital world.",
    imageSrc: "/Assets/OurServices/WebDevelopment.svg",
  },
  {
    title: "Team Augmentation",
    description: "Integrate skilled professionals to boost project success.",
    text: " Octal Code's Team Augmentation service is designed to enhance your workforce by seamlessly integrating skilled professionals into your team. Our experts bring their expertise and capabilities to the table, boosting both your team's capacity and project execution success. Whether you need additional skills, experience, or manpower, we provide the resources necessary to ensure your projects meet and exceed your goals. With Octal Code's Team Augmentation, you can confidently scale your team up or down as needed, ensuring the timely and successful completion of your projects with the right talent and skills.",

    imageSrc: "/Assets/OurServices/WebDevelopment.svg",
  },
  {
    title: "Software Architecture Design",
    description:
      "Elevate projects with efficient, scalable software architecture.",
    text: " Octal Code's Software Architecture Design service empowers your software projects with efficient, scalable, and innovative architectural blueprints. We specialize in crafting the structural foundation that brings your ideas to life. Our experienced team works to design software architecture that optimizes performance, scalability, and innovation. With our expert guidance, your projects will have a strong and strategic architectural framework, ensuring their success and longevity in the ever-evolving digital landscape.",

    imageSrc: "/Assets/OurServices/WebDevelopment.svg",
  },
  {
    title: "Application Maintenance and Support",
    description:
      "Ensure application durability with continuous care and updates.",
    text: "Octal Code's Application Maintenance and Support service is your assurance of continuous care, updates, and troubleshooting to guarantee the durability and dependability of your applications. We are dedicated to ensuring seamless software operation, keeping your applications running smoothly, and addressing any issues that may arise. With our expert support, you can have confidence in the ongoing performance and reliability of your software, allowing you to focus on your core business functions without interruption",

    imageSrc: "/Assets/OurServices/WebDevelopment.svg",
  },
  {
    title: "Re-Engineering and Optimization",
    description:
      "Leverage data for intelligent software solutions, expert in designing, building, and deploying machine learning models.",
    text: "Octal Code's Re-Engineering and Optimization service unlocks the potential of your software systems. Our expert team is here to revitalize and elevate your software, enhancing its efficiency and performance for sustainable, long-term success. We specialize in the fine art of upgrading and streamlining, breathing new life into your existing systems. With us, your software will not only meet the ever-changing demands of your business but will also remain a valuable and competitive asset in the dynamic digital landscape. Let Octal Code be your partner in achieving enduring excellence in software systems",

    imageSrc: "/Assets/OurServices/WebDevelopment.svg",
  },
  {
    title: "Machine Learning Development",
    description: "Leveraging data for cutting-edge machine learning solutions.",
    text: " Octal Code's Machine Learning Development service is dedicated to leveraging data for the creation of intelligent software solutions. Our expert team specializes in the meticulous design, development, and deployment of cutting-edge machine learning models. We bring formal rigor to the process, ensuring that your software remains at the forefront of data-driven innovation. By entrusting us with your machine learning needs, you're embracing the power of data to drive intelligent, forward-thinking solutions that keep your business competitive in the ever-evolving digital landscape.",

    imageSrc: "/Assets/OurServices/WebDevelopment.svg",
  },
  {
    title: " Cloud Migrations",
    description:
      "Seamless cloud transitions for optimized performance and scalability.",
    text: " Octal Code's Cloud Migration service streamlines and simplifies the process of transitioning to cloud infrastructure. Our team of experts handles the migration process with precision, ensuring the seamless transfer of your systems. We are dedicated to optimizing the performance, scalability, and cost-efficiency of your digital operations as you make the move to the cloud. Our service enables you to fully harness the potential of cloud technology, enhancing your software's performance and scalability while maintaining cost-effectiveness. With our guidance, you can seamlessly scale your resources and leverage the benefits of cloud infrastructure, positioning your organization for success in the digital era.",

    imageSrc: "/Assets/OurServices/WebDevelopment.svg",
  },
  {
    title: " Data Migrations",
    description:
      "Simplify data transitions with secure, smooth Data Migration.",
    text: " Octal Code's Data Migration service offers a structured approach to simplify and secure data transitions. We specialize in facilitating seamless and secure data transfers, prioritizing data integrity and availability throughout the process. Our experienced team ensures a meticulous transition, allowing your organization to focus on maximizing the effective utilization of its data assets without encountering disruptions or data loss. By entrusting us with your data migration needs, you can be confident in the integrity and security of your data, ensuring that it remains readily available and fully functional in its new environment.",

    imageSrc: "/Assets/OurServices/WebDevelopment.svg",
  },
  {
    title: " Reporting & Analytics & 3rd Party Integrations",
    description:
      "Empower decisions with Reporting & Analytics, seamless 3rd Party Integrations",
    text: " Octal Code's Reporting & Analytics service is dedicated to facilitating data-driven decision-making through the provision of robust reporting and analytical solutions. Our expert team empowers your organization with valuable insights, ensuring that you are well-informed for strategic decisions. Furthermore, our proficiency in seamless 3rd Party Integrations enhances your software capabilities, broadening the spectrum of data resources available for comprehensive business intelligence. By leveraging our services, you can be confident in the reliability and accuracy of the data-driven insights that drive your organization's success and competitive edge in today's dynamic business landscape.",

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
