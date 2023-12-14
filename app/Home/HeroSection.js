"use client";
import React, { useEffect, useState } from "react";
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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const showImage = windowWidth <= 1023;
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="flex flex-col w-full lg:flex-row">
      <div className="bg-primaryBlack flex flex-col relative overflow-hidden  py-10 px-8 w-full lg:w-3/4 lg:px-40  lg:py-24">
        {/* Ellipse Section */}
        <div
          className="absolute left-0 bottom-0 lg:flex hidden"
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
          className="flex flex-col justify-center gap-5 w-full  z-10 "
          // style={{ maxWidth: "70%" }}
        >
          {/* Text Section */}
          <h1
            className="  poppins font-black uppercase text-5xl w-3/4  md:text-7xl md:w-2/4"
            style={{ lineHeight: 1.3 }}
          >
            {highlightServices(title)}
          </h1>
          <div className="mb-3 ">
            <p className="sm:text-whitePrimary text-restext w-3/4 text-base sm:text-xl sm:pr-9 inter">
              {paragraph}
            </p>
          </div>
          <div className="sm:flex hidden">
            <Greenbtn buttonText={btnText} href="#" />
          </div>
        </div>
        {showImage && (
          <div className="flex justify-center align-center">
            {/* Your Image Component */}
            <img src={imgSrc} alt="your-image" />
          </div>
        )}
      </div>

      <div
        className="top-0 right-0 w-1/4 lg:flex hidden"
        style={{
          background:
            "linear-gradient(157deg, #389D04 -6.19%, #B318FF 140.72%)",
          position: "relative",
          width: "30%", // Adjust as needed
          // height: "100%", // Adjust as needed
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
              maxWidth: "180%",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
