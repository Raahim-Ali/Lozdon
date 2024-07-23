import React from "react";
import Transparentbtn from "../components/Transparentbtn";
const yourArray = [
  {
    title: "Fertilizers",
    description:
      "Here can be more details about the product category, which helps user to know more about that specific category of product. Please add there more details about the category.",
    imageSrc: "/Assets/Home/product1.svg",
    list: ["Urea", "DAP", "MAP", "Acetone", "Sulphur", "Ammonia"],
  },
  {
    title: "Glycols",
    description:
      "Here can be more details about the product category, which helps user to know more about that specific category of product. Please add there more details about the category.",
    imageSrc: "/Assets/Home/product2.svg",
    list: ["MEG", "TEG", "DEG"],
  },
  {
    title: "Solvents",
    description:
      "Code Once, Thrive Everywhere: Seamless Cross-Platform Solutions.",
    imageSrc: "/Assets/Home/product3.svg",
    list: ["White Spirit", "Mixed Xylene", "Toluene", "Styrene Monomer"],
  },
  {
    title: "Oils & Gas",
    description:
      "Monetize Smart, Prosper Mobile: Elevating App Revenue Strategies.",
    imageSrc: "/Assets/Home/product4.svg",
    list: ["Petroleum", "Gas Oil", "Gasoline", "LPG"],
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
          } md:py-20 md:px-36 gap-16 px-10 py-8  `}
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
            <Transparentbtn TbtnText="CONTACT US" href="#" />
          </div>
        </div>
      ))}
    </>
  );
}
