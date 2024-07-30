import React from "react";
import Transparentbtn from "@/app/components/Transparentbtn";
const yourArray = [
  {
    title: "Manned Guarding",
    description:
      "Professional security personnel stationed on-site to provide vigilant surveillance, deterrent presence, and immediate response, ensuring a secure environment and protection against potential threats.",
    description2:
      "These professionals are equipped to handle various security challenges, including access control, incident response, and emergency management, ensuring a secure and safe environment for your premises. With a focus on vigilance and proactive measures, our manned guarding solutions are designed to deliver peace of mind and protect your assets around the clock.",
    imageSrc: "/Assets/Products/product1.png",
  },
  {
    title: "Retail Security",
    description:
      "Our retail security services are designed to safeguard your store from theft, vandalism, and other disruptions. By deploying trained security personnel and advanced surveillance systems, we ensure continuous monitoring of store activity, effective loss prevention, and a secure environment for both customers and staff.",
    description2:
      "We focus on proactive measures and rapid response capabilities to address potential threats efficiently. This comprehensive approach maintains a safe shopping experience and protects your assets around the clock.",
    imageSrc: "/Assets/Products/product2.png",
  },
  {
    title: "Event Security",
    description:
      "Our event security services are meticulously designed to provide a safe and controlled environment for all types of events, whether they are private gatherings, corporate functions, or large public assemblies. We deploy skilled security personnel to manage crowd control, supervise access points, and address any potential incidents, ensuring the safety and smooth operation of your event.",
    description2:
      "We work closely with event organizers to understand specific security requirements and potential risks. Our proactive approach includes detailed planning, real-time monitoring, and swift response to any emerging issues, ensuring a secure and enjoyable experience for all attendees.",
    imageSrc: "/Assets/Products/product3.png",
  },
  {
    title: "Construction Security",
    description:
      "Our construction security services are tailored to protect your construction site from theft, vandalism, and unauthorized access. We deploy trained security personnel and advanced surveillance technology to monitor the site, manage access points, and secure valuable equipment and materials.",
    description2:
      "Our approach includes 24/7 on-site presence, routine patrols, and immediate response to any suspicious activities. By combining vigilance with proactive security measures, we ensure that your construction site remains secure, minimizing disruptions and safeguarding your investment throughout the project's duration.",
    imageSrc: "/Assets/Products/product4.png",
  },
  {
    title: "House Security",
    description:
      "Our house security services are designed to provide comprehensive protection for your home and family. We offer a range of solutions, including 24/7 monitoring, smart security systems, and professional patrols to safeguard your property against break-ins, vandalism, and other threats.",
    description2:
      "We tailor our services to meet your specific needs, ensuring robust protection through advanced technology and vigilant personnel. Our proactive approach helps prevent security breaches, giving you peace of mind and ensuring that your home remains a safe and secure haven for you and your loved ones.",
    imageSrc: "/Assets/Products/product5.png",
  },
  {
    title: "Hotel Security",
    description:
      "Our hotel security services are crafted to ensure a safe and welcoming environment for guests, staff, and property. We provide a combination of trained security personnel and advanced surveillance systems to oversee all areas of the hotel, including entrances, guest rooms, and common areas.",
    description2:
      "Our approach includes proactive measures such as access control, incident response, and regular patrols to address potential security concerns. By integrating our services with the hotel's operations, we ensure a secure and pleasant stay for your guests, maintaining a high standard of safety and service throughout the premises.",
    imageSrc: "/Assets/Products/product6.png",
  },
  {
    title: "Hospital Security",
    description:
      "Our hospital security services are designed to ensure a safe and secure environment for patients, staff, and visitors. We deploy skilled security personnel and advanced surveillance systems to monitor key areas of the hospital, including entrances, patient wards, and sensitive zones.",
    description2:
      "Our approach focuses on comprehensive protection through access control, emergency response, and routine patrols. We work closely with hospital administration to address specific security needs and potential risks, ensuring a secure and supportive environment that enhances patient care and operational efficiency.",
    imageSrc: "/Assets/Products/product7.png",
  },
  {
    title: "School Security",
    description:
      "Our school security services are tailored to create a safe and supportive environment for students, staff, and visitors. We provide a combination of trained security personnel and cutting-edge surveillance systems to oversee school grounds, monitor entrances, and ensure the safety of all campus areas.",
    description2:
      "Our approach includes proactive measures such as access control, emergency response planning, and routine patrols. By working closely with school administrators, we address specific security needs and potential threats, ensuring a secure learning environment that fosters both safety and peace of mind for the entire school community.",
    imageSrc: "/Assets/Products/product8.png",
  },
  {
    title: "Door Man",
    description:
      "Our doorman services offer a professional and attentive presence at your building’s entrance, enhancing security and providing exceptional guest management. Our doormen are trained to monitor and control access, assist with visitor management, and ensure a welcoming atmosphere for residents and guests.",
    description2:
      "In addition to overseeing entry and exit points, our doormen are equipped to handle various security situations, manage deliveries, and provide assistance with any concerns. By combining vigilance with courteous service, we create a secure and hospitable environment for your property.",
    imageSrc: "/Assets/Products/product9.png",
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
            <h5 className="text-xl font-medium uppercase inter tracking-wider ">
              <p className="text-[15px] text-[#343434]">{item.description2}</p>
            </h5>

            <Transparentbtn TbtnText="CONTACT US" href="/Security/Contact" />
          </div>
        </div>
      ))}
    </>
  );
}
