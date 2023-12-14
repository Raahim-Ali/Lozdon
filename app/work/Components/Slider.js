"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ClientOne from "../../../public/Assets/Work/ClientOne.svg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Slider.css";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";

export default function Slider() {
  return (
    <>
      <div className="SwiperContainer">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div
              style={{
                marginBottom: "20px",
              }}
            >
              <p className="swiperTitle">“The best Digital Agency”</p>
            </div>
            <div style={{ marginBottom: "29px" }}>
              <p className="SwiperText">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat aute irure sint
                amet occaecat cupidatat non proident
              </p>
            </div>
            <div className="SwiperClient">
              <div>
                <Image src={ClientOne} alt="/" width={100} height={100} />
              </div>
              <div>
                <p className="SwiperClientName">Sophia Moore1</p>
                <p className="SwiperClientDetail">CEO at Webflow Agency</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              style={{
                marginBottom: "20px",
              }}
            >
              <p className="swiperTitle">“The best Digital Agency”</p>
            </div>
            <div style={{ marginBottom: "29px" }}>
              <p className="SwiperText">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat aute irure sint
                amet occaecat cupidatat non proident
              </p>
            </div>
            <div className="SwiperClient">
              <div>
                <Image src={ClientOne} alt="/" width={100} height={100} />
              </div>
              <div>
                <p className="SwiperClientName">Sophia Moore2</p>
                <p className="SwiperClientDetail">CEO at Webflow Agency</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                marginBottom: "20px",
              }}
            >
              <p className="swiperTitle">“The best Digital Agency”</p>
            </div>
            <div style={{ marginBottom: "29px" }}>
              <p className="SwiperText">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat aute irure sint
                amet occaecat cupidatat non proident
              </p>
            </div>
            <div className="SwiperClient">
              <div>
                <Image src={ClientOne} alt="/" width={100} height={100} />
              </div>
              <div>
                <p className="SwiperClientName">Sophia Moore3</p>
                <p className="SwiperClientDetail">CEO at Webflow Agency</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                marginBottom: "20px",
              }}
            >
              <p className="swiperTitle">“The best Digital Agency”</p>
            </div>
            <div style={{ marginBottom: "29px" }}>
              <p className="SwiperText">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat aute irure sint
                amet occaecat cupidatat non proident
              </p>
            </div>
            <div className="SwiperClient">
              <div>
                <Image src={ClientOne} alt="/" width={100} height={100} />
              </div>
              <div>
                <p className="SwiperClientName">Sophia Moore4</p>
                <p className="SwiperClientDetail">CEO at Webflow Agency</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                marginBottom: "20px",
              }}
            >
              <p className="swiperTitle">“The best Digital Agency”</p>
            </div>
            <div style={{ marginBottom: "29px" }}>
              <p className="SwiperText">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat aute irure sint
                amet occaecat cupidatat non proident
              </p>
            </div>
            <div className="SwiperClient">
              <div>
                <Image src={ClientOne} alt="/" width={100} height={100} />
              </div>
              <div>
                <p className="SwiperClientName">Sophia Moore5</p>
                <p className="SwiperClientDetail">CEO at Webflow Agency</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                marginBottom: "20px",
              }}
            >
              <p className="swiperTitle">“The best Digital Agency”</p>
            </div>
            <div style={{ marginBottom: "29px" }}>
              <p className="SwiperText">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat aute irure sint
                amet occaecat cupidatat non proident
              </p>
            </div>
            <div className="SwiperClient">
              <div>
                <Image src={ClientOne} alt="/" width={100} height={100} />
              </div>
              <div>
                <p className="SwiperClientName">Sophia Moore6</p>
                <p className="SwiperClientDetail">CEO at Webflow Agency</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                marginBottom: "20px",
              }}
            >
              <p className="swiperTitle">“The best Digital Agency”</p>
            </div>
            <div style={{ marginBottom: "29px" }}>
              <p className="SwiperText">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat aute irure sint
                amet occaecat cupidatat non proident
              </p>
            </div>
            <div className="SwiperClient">
              <div>
                <Image src={ClientOne} alt="/" width={100} height={100} />
              </div>
              <div>
                <p className="SwiperClientName">Sophia Moore7</p>
                <p className="SwiperClientDetail">CEO at Webflow Agency</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                marginBottom: "20px",
              }}
            >
              <p className="swiperTitle">“The best Digital Agency”</p>
            </div>
            <div style={{ marginBottom: "29px" }}>
              <p className="SwiperText">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat aute irure sint
                amet occaecat cupidatat non proident
              </p>
            </div>
            <div className="SwiperClient">
              <div>
                <Image src={ClientOne} alt="/" width={100} height={100} />
              </div>
              <div>
                <p className="SwiperClientName">Sophia Moore8</p>
                <p className="SwiperClientDetail">CEO at Webflow Agency</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                marginBottom: "20px",
              }}
            >
              <p className="swiperTitle">“The best Digital Agency”</p>
            </div>
            <div style={{ marginBottom: "29px" }}>
              <p className="SwiperText">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat aute irure sint
                amet occaecat cupidatat non proident
              </p>
            </div>
            <div className="SwiperClient">
              <div>
                <Image src={ClientOne} alt="/" width={100} height={100} />
              </div>
              <div>
                <p className="SwiperClientName">Sophia Moore9</p>
                <p className="SwiperClientDetail">CEO at Webflow Agency</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
