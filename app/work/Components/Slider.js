"use client";
// Import necessary modules
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ClientOne from "../../../public/Assets/Work/ClientOne.svg";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import "./Slider.css";

const sliderData = [
  {
    title: "The best Digital Agency",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
    name: "Sophia Moore1",
  },
  {
    title: "The best Digital Agency",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
    name: "Sophia Moore1",
  },
  {
    title: "The best Digital Agency",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
    name: "Sophia Moore1",
  },
  {
    title: "The best Digital Agency",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
    name: "Sophia Moore1",
  },
  {
    title: "The best Digital Agency",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
    name: "Sophia Moore1",
  },
  {
    title: "The best Digital Agency",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
    name: "Sophia Moore1",
  },
  {
    title: "The best Digital Agency",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
    name: "Sophia Moore1",
  },
  {
    title: "The best Digital Agency",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
    name: "Sophia Moore1",
  },
  {
    title: "The best Digital Agency",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
    name: "Sophia Moore1",
  },
];

const Slider = () => {
  return (
    <div className="SwiperContainer">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {sliderData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div style={{ marginBottom: "20px" }}>
              <p className="swiperTitle">{slide.title}</p>
            </div>
            <div style={{ marginBottom: "29px" }}>
              <p className="SwiperText">{slide.text}</p>
            </div>
            <div className="SwiperClient">
              <div>
                <Image src={ClientOne} alt="/" width={100} height={100} />
              </div>
              <div>
                <p className="SwiperClientName">{slide.name}</p>
                <p className="SwiperClientDetail">CEO at Webflow Agency</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
