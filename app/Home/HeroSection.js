"use client";
import React from "react";

const HeroSection = ({ title, paragraph, imgSrc }) => {
  return (
    <div
      className="bg-cover bg-center flex items-center justify-center shadow-md"
      style={{
        backgroundImage: `url(${imgSrc})`,
      }}
    >
      <div className="text-white px-4 sm:px-8 max-w-full flex flex-col gap-[30px] py-[180px] items-start text-left">
        <ul className="flex gap-8 list-disc items-start md:text-base sm:text-xs text-[0.7rem] justify-start">
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
  );
};

export default HeroSection;
