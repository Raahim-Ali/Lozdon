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
            At Octal Code, our journey began with a shared passion for
            transforming ideas into technological marvels. Founded on the
            principles of innovation and client-centricity, we embarked on a
            mission to redefine the digital landscape. From our humble
            beginnings, we&apos;ve evolved into a dynamic software house known
            for pushing boundaries, fostering collaboration, and delivering
            cutting-edge solutions.
          </p>
          <p className="text-base w-full md:text-xl lg:text-2xl font-light inter">
            Our story is one of continuous growth, fueled by a commitment to
            excellence, an agile mindset, and a relentless pursuit of
            innovation. Along the way, we&apos;ve built lasting partnerships,
            earned the trust of clients worldwide, and embraced the challenges
            of a fast-paced industry.
          </p>
          <p className="text-base w-full md:text-xl lg:text-2xl font-light inter">
            Join us in celebrating the milestones, challenges, and successes
            that shape our narrative. Explore the Octal Code story—a journey
            marked by innovation, collaboration, and a steadfast dedication to
            shaping the future of technology.
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
