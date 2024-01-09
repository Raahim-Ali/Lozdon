"use client";
import "./Style.css";
import React, { useEffect, useState } from "react";
import Greenbtn from "../components/Greenbtn";
import Transparentbtn from "../components/Transparentbtn";

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
  TbtnText,
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
    <div
      className="flex flex-col w-full lg:flex-row"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="flex flex-col relative overflow-hidden  pt-20 pb-0  px-8 w-full sm:pt-20 sm:pb-0  md:px-12 md:pt-20  lg:px-36  lg:pt-28  lg:pb-36"
        style={{ marginTop: "150px" }}
        // style={{ height: "100vh" }}
      >
        {/* Ellipse Section */}

        <div
          className="flex flex-col justify-center md:items-center  w-full  z-10 gap-16  "
          // style={{ maxWidth: "70%" }}
        >
          {/* Text Section */}
          <div className="flex flex-col justify-center md:items-center gap-5 w-[82%]">
            <h1
              className="font-black uppercase text-4xl sm:text-5xl md:text-[5.125rem] w-full  sm:w-2/4 md:text-7xl md:w-full lg:w-3/4  md:text-center res "
              style={{ lineHeight: 1.3 }}
            >
              {highlightServices(title)}
            </h1>
            <div className="mb-3 md:w-3/4 xl:w-[54%] flex flex-col gap-6 w-full">
              <p className="sm:text-whitePrimary text-restext w-full text-base sm:text-xl   md:text-center inter">
                {paragraph}
              </p>
              <div className="sm:flex md:justify-center hidden">
                <ul className="flex gap-8 list-disc items-center text-center">
                  <li className="text-white text-lg inter marker:font-normal list-none">
                    Business Analysis
                  </li>
                  <li className="text-white text-lg inter marker:font-normal ">
                    Development
                  </li>
                  <li className="text-white text-lg inter marker:font-normal">
                    Consultancy
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="sm:flex md:flex lg:flex hidden gap-8">
            <Transparentbtn TbtnText={TbtnText} href="/Contact" />
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
