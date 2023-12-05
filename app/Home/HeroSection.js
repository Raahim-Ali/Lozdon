import React from "react";
import Image from "next/image";
import Greenbtn from "../components/Greenbtn";

const highlightServices = (title) => {
  const words = title.split(" ");
  return words.map((word, index) => (
    <span
      key={index}
      className={
        word.toLowerCase() === "full" || word.toLowerCase() === "service"
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
    <div
      className="bg-primaryBlack flex relative  "
      style={{ width: "100%", padding: "123.5px 165px" }}
    >
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
      <div
        className="flex justify-between align-center  z-10"
        style={{ width: "70%" }}
      >
        <div
          className="flex flex-col justify-center gap-5"
          style={{ width: "100%" }}
        >
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
          <Greenbtn buttonText={btnText} width={btnWidth} />
        </div>
      </div>
      <div
        className="top-0 right-0"
        style={{
          background:
            "linear-gradient(157deg, #389D04 -6.19%, #B318FF 140.72%)",
          position: "absolute",
          width: "30%", // Adjust as needed
          height: "100%", // Adjust as needed
        }}
      >
        <div
          className="flex absolute justify-center items-center"
          style={{ width: "100%", height: "100%", right: "50%" }}
        >
          <img
            src={imgSrc}
            alt="Image Lgai yaar"
            style={{
              objectFit: "fill",
              width: "900px",
              height: "900px",
              maxWidth: "180%",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
