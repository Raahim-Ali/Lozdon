import React from "react";
import Transparentbtn from "@/app/components/Transparentbtn";
const yourArray = [
  {
    title: "Window Cleaning",
    description:
      "Our window cleaning service ensures your windows are spotless and streak-free. We use specialized techniques and high-quality solutions to tackle both interior and exterior surfaces, including hard-to-reach areas.",
    imageSrc: "/Assets/Products/window.png",
    description2:
      "With a focus on safety and efficiency, we employ professional-grade equipment to deliver clear, bright windows that enhance the appearance of your property and improve natural light flow.",
  },
  {
    title: "Builder Cleans - new build plots",
    description:
      "Our builder cleans for new build plots ensure your construction site is pristine and ready for occupancy. We thoroughly remove dust, debris, and construction residues from all surfaces, including floors, windows, and fixtures.",
    imageSrc: "/Assets/Products/plot.png",
    description2:
      "Our detailed cleaning process helps reveal the true beauty of newly built properties, making them shine and be move-in ready. We adhere to the highest standards to ensure a spotless finish that enhances the overall presentation of your new build.",
  },
  {
    title: "End of Tenancy Cleans for Landlords",
    description:
      "Our end-of-tenancy cleaning service for landlords ensures that properties are left in pristine condition for new tenants. We meticulously clean every corner, from deep-cleaning carpets and floors to sanitizing kitchens and bathrooms.",
    imageSrc: "/Assets/Products/tenancy.png",
    description2:
      "By addressing all aspects of property cleanliness, we help landlords meet tenancy agreements and maintain high standards, ensuring a smooth transition between tenants and a fresh, welcoming environment for the next occupant.",
  },
  {
    title: "Carpet Cleans",
    description:
      "Our carpet cleaning service revitalizes your carpets by removing deep-seated dirt, stains, and allergens. We use advanced cleaning techniques and eco-friendly products to ensure a thorough and gentle clean.",
    imageSrc: "/Assets/Products/carpet.png",
    description2:
      "Our professional team revitalizes the appearance and extends the life of your carpets, leaving them fresh, hygienic, and looking like new. Enjoy a cleaner, healthier home with our expert carpet cleaning solutions.",
  },
  {
    title: "Ground Maintenance",
    description:
      "Our ground maintenance service ensures your outdoor spaces remain neat and well-maintained. We provide comprehensive care, including lawn mowing, weed control, and general landscaping to keep your grounds looking their best.",
    imageSrc: "/Assets/Products/ground.png",
    description2:
      "Our skilled team uses top-quality equipment and techniques to manage and enhance your property's exterior, promoting a healthy and attractive environment year-round.",
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

            <Transparentbtn TbtnText="CONTACT US" href="/Commercial/Contact" />
          </div>
        </div>
      ))}
    </>
  );
}
