"use client";
import React, { useEffect, useState } from "react";
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
  const [windowWidth, setWindowWidth] = useState(1200);
  const showImage = windowWidth <= 1023;
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const backgroundImageUrl = "/Assets/Herosection/heroBg.svg";
  return (
    <div className="flex flex-col w-full lg:flex-row">
      <div
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        className="flex flex-col relative overflow-hidden  pt-20 pb-0  px-8 w-full sm:pt-20 sm:pb-0  md:px-12 md:pt-20  lg:px-40  lg:pt-28  lg:pb-36 "
        // style={{ height: "100vh" }}
      >
        {/* Ellipse Section */}

        <div
          className="flex flex-col justify-center items-center gap-5 w-full  z-10  "
          // style={{ maxWidth: "70%" }}
        >
          {/* Text Section */}
          <h1
            className="font-black uppercase text-5xl w-full  sm:w-2/4 md:text-7xl md:w-2/4 lg:text-center "
            style={{ lineHeight: 1.3 }}
          >
            {highlightServices(title)}
          </h1>
          <div className="mb-3 lg:w-2/4 ">
            <p className="sm:text-whitePrimary text-restext w-full text-base sm:text-xl   lg:text-center inter">
              {paragraph}
            </p>
          </div>
          <div className="sm:flex md:flex lg:flex hidden">
            <Greenbtn buttonText={btnText} href="/#Services" />
          </div>
        </div>
        {showImage && (
          <div className="flex justify-center align-center">
            {/* Your Image Component */}
            <img src={imgSrc} alt="your-image" />
          </div>
        )}
      </div>

      {/* <div
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
      </div> */}
    </div>
  );
};

export default HeroSection;
