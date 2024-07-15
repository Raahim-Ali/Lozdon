"use client";
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HeroSection = ({ slides, title, paragraph, imgSrc }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <Carousel
      selectedItem={currentSlide}
      onChange={handleSlideChange}
      showThumbs={false}
      showArrows={false}
      showStatus={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={200000}
      stopOnHover={false}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className="min-h-screen bg-cover bg-center flex items-center justify-center shadow-md"
          style={{
            backgroundImage: `linear-gradient(256.89deg, rgba(9, 14, 142, 0) -17.66%, rgba(9, 14, 142, 0.9) 90%), url(${imgSrc})`,
          }}
        >
          <div
            className="text-white px-4 sm:px-8"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              padding: "180px 0px",
              alignItems: "flex-start", // Aligns content to the left
              textAlign: "left", // Ensures left alignment of text
              maxWidth: "100%", // Ensures the text does not overflow
            }}
          >
            <ul
              className="flex gap-8 list-disc items-start text-left"
              style={{
                fontSize: "1.2rem", // 1.25rem equals 20px, adjusts with the root font size
                textAlign: "center",
                justifyContent: "left",
                width: "100%",
              }}
            >
              <li className="marker:font-normal list-none uppercase">
                Professionalism
              </li>
              <li className="marker:font-normal uppercase">Excellence</li>
              <li className="marker:font-normal uppercase">Timeliness</li>
            </ul>
            <h1
              className="uppercase text-3xl sm:text-5xl md:text-[4rem]"
              style={{
                lineHeight: 1.3,
                fontFamily: "Libre Caslon Text",
                width: "70vw",
              }}
            >
              {title}
            </h1>
            <p
              className="sm:text-whitePrimary text-restext w-full text-base sm:text-xl"
              style={{
                fontFamily: "Inter",
                paddingTop: "20px",
                fontWeight: "300",
                fontSize: "1.25rem", // Adjusts with the root font size
                lineHeight: "2rem", // 32px, adjusts with the root font size
                width: "45vw",
              }}
            >
              {paragraph}
            </p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default HeroSection;
