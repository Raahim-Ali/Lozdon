import Image from "next/image";
import React from "react";
const cardData = [
  {
    imageSrc: "/Assets/aboutUs/bulb.svg",
    title: "Mission",
    description:
      "Octal Code specializes in crafting bespoke software solutions tailored to meet the unique requirements of your organization. Our dedicated team works closely with you to understand your specific needs and ",
    learnMoreLink: "#",
  },
  {
    imageSrc: "/Assets/aboutUs/bulb.svg",
    title: "Vision  ",
    description:
      "Octal Code specializes in crafting bespoke software solutions tailored to meet the unique requirements of your organization. Our dedicated team works closely with you to understand your specific needs and ",
    learnMoreLink: "#",
  },
];
export default function OurStory() {
  return (
    <>
      <div className="pt-20 pb-20 pr-36 pl-36 flex flex-col gap-12">
        <div className="flex flex-col gap-8">
          <p className="poppins text-5xl uppercase font-bold">Our Story</p>
          <p className="custom-text-24 font-light inter">
            Octal Code specializes in crafting bespoke software solutions
            tailored to meet the unique requirements of your organization. Our
            dedicated team works closely with you to understand your specific
            needs and objectives. From conceptualization to design, coding,
            rigorous testing, and final deployment, we ensure that the resulting
            software aligns seamlessly with your business processes. With Octal
            Code, you'll experience the power of custom-built software that
            optimizes efficiency, productivity, and innovation, giving your
            organization a competitive edge in today's dynamic business
            landscape
          </p>
        </div>
        <img
          src="/Assets/aboutUs/Image.svg"
          style={{ borderRadius: "18px", width: "100%" }}
        />
        <div>
          <div className="flex gap-12">
            {/* Card Section */}
            {cardData.map((card, index) => (
              <div
                key={index}
                className="  flex flex-col gap-6 w-1/2"
                style={{ padding: "19px 0px" }}
              >
                <div>
                  <Image src={card.imageSrc} width={62} height={62} />
                </div>
                <p
                  className="font-bold uppercase  poppins tracking-wider pr-5 "
                  style={{ fontSize: "32px" }}
                >
                  {card.title}
                </p>
                <p className="font-light custom-text-24  inter pr-5 ">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
