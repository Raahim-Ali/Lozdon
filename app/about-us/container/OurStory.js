import Image from "next/image";
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
      <div className="py-10 px-8  md:py-20  md:px-36  flex flex-col gap-12">
        <div className="flex flex-col gap-3 lg:gap-8">
          <p className="poppins text-3xl font-extrabold md:text-5xl uppercase sm:font-black">
            Our Story
          </p>
          <p className="text-base w-full md:text-xl lg:text-2xl font-light inter">
            Octal Code specializes in crafting bespoke software solutions
            tailored to meet the unique requirements of your organization. Our
            dedicated team works closely with you to understand your specific
            needs and objectives. From conceptualization to design, coding,
            rigorous testing, and final deployment, we ensure that the resulting
            software aligns seamlessly with your business processes. With Octal
            Code, you&apos;ll experience the power of custom-built software that
            optimizes efficiency, productivity, and innovation, giving your
            organization a competitive edge in today&apos;s dynamic business
            landscape
          </p>
        </div>
        <div className="w-full ">
          <img
            alt="AboutUsImage"
            src="/Assets/aboutUs/Image.svg"
            className="rounded-3xl object-cover w-full"
          />
        </div>
        <div>
          <div className="flex gap-12 flex-col lg:flex-row">
            {/* Card Section */}
            {cardData.map((card, index) => (
              <div
                key={index}
                className="  flex flex-col gap-6  lg:w-1/2"
                style={{ padding: "19px 0px" }}
              >
                <div>
                  <img src={card.imageSrc} alt="Card Image" />
                </div>
                <p className="font-bold uppercase  text-2xl md:text-3xl poppins tracking-wider">
                  {card.title}
                </p>
                <p className="font-light text-base md:text-2xl  inter ">
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
