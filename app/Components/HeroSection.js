import React from "react";
import Greenbtn from "./Greenbtn";
import Image from "next/image";

const highlightServices = (title) => {
  const words = title.split(" ");
  return words.map((word, index) => (
    <span
      key={index}
      className={
        word.toLowerCase() === "services" ||
        word.toLowerCase() === "web" ||
        word.toLowerCase() === "development" ||
        word.toLowerCase() === "work" ||
        word.toLowerCase() === "us" ||
        word.toLowerCase() === "contact"
          ? "text-green-500"
          : "text-whitePrimary"
      }
    >
      {word}
      {index < words.length - 1 && " "} {/* Add space between words */}
    </span>
  ));
};

const HeroSection = ({ title, paragraph, btnText, btnWidth, imgSrc }) => {
  return (
    <div className="bg-primaryBlack">
      <div
        className="flex justify-between align-center"
        style={{ padding: "123.5px 165px" }}
      >
        <div className="flex flex-col justify-center gap-5">
          {/* Text Section */}
          <h1 className="custom-text-64 font-extrabold uppercase poppins">
            {highlightServices(title)}
          </h1>
          <div style={{ width: "70%" }} className="mb-3 ">
            <p className="text-whitePrimary text-xl pr-9 inter">{paragraph}</p>
          </div>
          <Greenbtn buttonText={btnText} width={btnWidth} />
        </div>
        <div>
          <Image src={imgSrc} width={300} height={280} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
