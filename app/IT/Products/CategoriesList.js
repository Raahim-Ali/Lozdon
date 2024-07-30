import React from "react";
import Transparentbtn from "@/app/components/Transparentbtn";
const yourArray = [
  {
    title: "Mobile Development",
    description:
      "Our mobile development services create intuitive, high-performance apps tailored to your business needs. We specialize in both iOS and Android platforms, delivering seamless user experiences and cutting-edge functionality. From concept to deployment, our team ensures that your mobile applications are scalable, secure, and optimized for performance, helping you engage with your audience and achieve your business goals.",
    imageSrc: "/Assets/Products/mobileDev.png",
  },
  {
    title: "Web Development",
    description:
      "“Our web development services focus on building dynamic, responsive websites that drive engagement and deliver results. We combine creative design with robust technology to develop custom solutions that meet your unique business needs. Whether you need a new website or want to enhance an existing one, our team ensures your site is user-friendly, secure, and optimized for all devices, helping you connect with your audience and grow your online presence.”",
    imageSrc: "/Assets/Products/webDev.png",
  },
  {
    title: "DEVOPS",
    description:
      "Our DevOps services streamline your development and operations processes, enhancing collaboration and accelerating delivery. We implement best practices in automation, continuous integration, and continuous deployment to ensure faster, reliable, and scalable software releases. By optimizing workflows and maintaining robust infrastructure, we help you achieve greater efficiency, minimize downtime, and improve overall system performance.",
    imageSrc: "/Assets/Products/devops.png",
  },
  {
    title: "Special Services",
    description:
      "Our special services include CTO as a Service for expert tech leadership, Staff Augmentation for flexible team expansion, and Application Architecture for robust software design. We also offer Maintenance and Support to keep your applications running smoothly, Machine Learning Development to drive intelligent insights, and Cloud Migrations for seamless transitions to the cloud. These solutions are designed to enhance your operations and support your business goals.",
    imageSrc: "/Assets/Products/special.png",
  },
  {
    title: "UI/UX",
    description:
      "Our UI/UX services focus on creating engaging and user-friendly digital experiences. We design intuitive interfaces and seamless user journeys to ensure your applications are visually appealing and easy to navigate. By prioritizing user needs and leveraging industry best practices, we enhance usability and drive higher user satisfaction.",
    imageSrc: "/Assets/Products/uiux.png",
  },
  {
    title: "Software Testing",
    description:
      "Our software testing services ensure the reliability and quality of your applications through thorough and systematic testing. We employ a range of methodologies, including manual and automated testing, to identify and resolve issues before deployment. Our goal is to deliver flawless, high-performance software that meets your requirements and exceeds user expectations.",
    imageSrc: "/Assets/Products/testing.png",
  },
];
export default function ImageAndDiv() {
  return (
    <>
      {yourArray.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col ${
            index % 2 === 0 ? "xl:flex-row-reverse bg-[#F9F9F9]" : "xl:flex-row"
          } md:py-20 md:px-40 gap-16 px-10 py-8  `}
        >
          <div
            className="xl:w-1/2"
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "100px 20px 100px 20px",
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "80%", // Adjust this value to control the gradient height
                backgroundImage:
                  "linear-gradient(180deg, rgba(9, 14, 142, 0) 0%, #090E8E 100%)",
                zIndex: 1,
              }}
            />
            <img
              src={item.imageSrc}
              style={{
                width: "100%",
                height: "100%",
                zIndex: 2,
              }}
            />
          </div>
          <div className="flex gap-5 flex-col w-full xl:w-1/2 justify-center pb-10">
            <h5 className="md:text-4xl text-2xl font-bold uppercase tracking-wider Heading2 ">
              <p className="text-[32px]">{item.title}</p>
            </h5>
            <h5 className="text-xl font-medium uppercase inter tracking-wider ">
              <p className="text-[15px] text-[#343434]">{item.description}</p>
            </h5>
            <ul className="text-lg pb-5">
              {item.list &&
                item.list.map((listItem, listIndex) => (
                  <li
                    className="pb-2 font-normal"
                    key={listIndex}
                    // style={{ fontWeight: "500", paddingBottom: "8px" }}
                  >
                    {">"} {"\u00A0"} {listItem}
                  </li>
                ))}
            </ul>
            <Transparentbtn TbtnText="CONTACT US" href="/IT/Contact" />
          </div>
        </div>
      ))}
    </>
  );
}
