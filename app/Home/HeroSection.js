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
          className=" md:min-h-screen bg-cover bg-center flex items-center justify-center shadow-md"
          style={{
            backgroundImage: `linear-gradient(256.89deg, rgba(9, 14, 142, 0) -17.66%, rgba(9, 14, 142, 0.9) 90%), url(${imgSrc})`,
          }}
        >
          <div className="text-white px-4 sm:px-8 max-w-full flex flex-col gap-[30px] py-[180px] items-start text-left">
            <ul className="flex  gap-8 list-disc items-start md:text-left sm:text-xs md:text-[1.2rem] sm:text-center justify-start">
              <li className="marker:font-normal list-none uppercase">
                Professionalism
              </li>
              <li className="marker:font-normal uppercase">Excellence</li>
              <li className="marker:font-normal uppercase">Timeliness</li>
            </ul>
            <h1
              className="uppercase text-3xl sm:text-4xl font-bold md:text-[4rem] md:leading-[1.3]  text-left md:w-[70vw]"
              style={{
                fontFamily: "Libre Caslon Text",
              }}
            >
              {title}
            </h1>
            <p
              className="sm:text-whitePrimary text-restext sm:w-full md:text-base sm:text-xs pt-[20px]  font-light  leading-[2rem] md:w-[45vw]"
              style={{
                fontFamily: "Inter",
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
