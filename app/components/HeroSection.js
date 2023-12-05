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
        word.toLowerCase() === "service" ||
        word.toLowerCase() === "contact"
          ? "text-green-600"
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
    <div className="bg-primaryBlack flex relative overflow-hidden">
      {/* Ellipse Section */}
      <div
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
      ></div>
      <div
        className="flex justify-between align-center  z-10"
        style={{ padding: "123.5px 165px" }}
      >
        <div className="flex flex-col justify-center gap-5">
          {/* Text Section */}
          <h1
            style={{ width: titleWidth || "100%", fontSize: "86px" }}
            className="custom-text-64  poppins font-black uppercase "
          >
            {highlightServices(title)}
          </h1>
          <div style={{ width: pWidth || "90%" }} className="mb-3 ">
            <p className="text-whitePrimary text-xl pr-9 inter">{paragraph}</p>
          </div>
          <Greenbtn buttonText={btnText} />
        </div>

        <img
          src={imgSrc}
          className="absolute"
          style={{
            // width: "502px",
            // height: "540px",
            right: "0px",
            overflow: "hidden",
            bottom: "-160px",
            objectFit: "fill",
          }}
        />
      </div>
    </div>
  );
};

export default HeroSection;
