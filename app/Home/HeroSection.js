"use client";
import "./Style.css";
import React, { useEffect, useState } from "react";
import Transparentbtn from "../components/Transparentbtn";

const highlightServices = (title) => {
  const words = title.split(" ");
  return words.map((word, index) => (
    <span
      key={index}
      className={
        word.toLowerCase() === "infinite" || word.toLowerCase() === "solutions"
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
  const backgroundImageUrl = "/Assets/Herosection/heroBg.jpg";
  const handleWhatsAppClick = () => {
    // Replace '1234567890' with your actual WhatsApp number
    const phoneNumber = "+923214349743";

    // Create the WhatsApp URL with a pre-filled message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello%20from%20your%20website!`;

    // Open the WhatsApp URL in a new tab/window using the Link component
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div
      className="flex flex-col w-full lg:flex-row"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        // height: "100vh",
      }}
    >
      <div
        className="flex flex-col relative   pt-20 pb-0  px-8 w-full sm:pt-20 sm:pb-0  md:px-12 md:pt-20  lg:px-36  lg:pt-28  lg:pb-36 "
        // style={{ height: "100vh" }}
      >
        {/* Ellipse Section */}

        <div
          className="flex flex-col justify-center md:items-center  w-full  z-10 gap-16 pt-20  "
          // style={{ maxWidth: "70%" }}
        >
          {/* Text Section */}
          <div className="flex flex-col justify-center md:items-center gap-5 w-[82%]">
            <h1
              className="font-black uppercase text-2xl sm:text-5xl md:text-[4.125rem] w-full  sm:w-2/4  md:w-full lg:w-[60%]  md:text-center res "
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
          <div
            className="sm:flex  hidden gap-8 mb-10"
            style={{ display: "flex" }}
            onClick={handleWhatsAppClick}
          >
            <Transparentbtn TbtnText={TbtnText} href="#" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
