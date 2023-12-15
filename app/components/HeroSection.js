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
        word.toLowerCase() === "full" ||
        word.toLowerCase() === "service"
          ? "text-green-500"
          : "text-whitePrimary"
      }
    >
      {word}
      {index < words.length - 1 && " "} {/* Add space between words */}
    </span>
  ));
};

const HeroSection = ({
  title,
  paragraph,
  btnText,
  btnWidth,
  imgSrc,
  titleWidth,
  pWidth,
}) => {
  return (
    <div className="bg-primaryBlack flex relative overflow-hidden sm:px-10 ">
      {/* Ellipse Section */}
      {/* <div
        className="absolute left-0 bottom-0"
        style={{
          background: "#B318FF",
          width: "340px",
          zIndex: 1,
          height: "200px",
          borderRadius: "30%",
          filter: "blur(200px)",
          // overflow: "hidden", // Adjust the blur value as needed
        }}
      ></div> */}
      <div className="flex justify-between align-center xl:px-40  pt-20 pb-10  px-8 xl:py-32 z-10">
        <div className="flex flex-col justify-center gap-5">
          {/* Text Section */}
          <h1
            style={{ lineHeight: 1.2 }}
            className="poppins text-4xl w-full sm:texl-6xl md:text-7xl  md:w-full lg:text-7xl lg:w-full xl:w-full xl:text-7xl font-black uppercase "
          >
            {highlightServices(title)}
          </h1>
          <div className="mb-3 ">
            <p className="text-whitePrimary text-xs  sm:w-full sm:text-lg md:text-xl  md:w-full lg:w-full lg:text-xl xl:w-full xl:text-xl   inter">
              {paragraph}
            </p>
          </div>
          <Greenbtn buttonText={btnText} href="/Services" />
        </div>

        {/* <div className="">
          <img
            src={imgSrc}
            className="absolute "
            style={{
              right: "0px",
              overflow: "hidden",
              bottom: "-160px",
              objectFit: "fill",
            }}
          />
        </div> */}
      </div>
    </div>
  );
};

export default HeroSection;
