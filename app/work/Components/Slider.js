"use client";
// Import necessary modules
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ClientOne from "../../../public/Assets/Work/google.png";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

import Image from "next/image";
import "./Slider.css";

const sliderData = [
  {
    title: "Outstanding Service",
    text: "I recently had a dental checkup at Dental Essence and I'm impressed. The staff is friendly, and the clinic is clean and inviting. The dentists were thorough, explaining each step with patience. I highly recommend Dental Essence for top-notch dental care.",
    name: "Hammad Abid",
  },

  {
    title: " Caring Professionals",
    text: "My experience at Dental Essence was excellent. The dentists and staff are compassionate and attentive. They made me feel at ease throughout my procedure.",
    name: "Saad Rana",
  },
  {
    title: "Modern Clinic, Expert Care",
    text: "I'm impressed with the modern facilities and expert care. The dental team is knowledgeable, and the clinic uses cutting-edge technology. I felt well-informed about my treatment options, and the staff made my visit comfortable.",
    name: "Ayesha",
  },
  {
    title: "Quick and Convenient Dental Service",
    text: "I had a convenient experience. The appointment started on time. The clinic's efficiency and friendliness make it a go-to choice for those with a busy schedule. I'm pleased with the service and will continue to choose Dental Essence for my dental needs.",
    name: "Muhammad Hasnain",
  },
  {
    title: "Top-Notch Cosmetic Dentistry",
    text: "I recently had cosmetic dental work done, and the results exceeded my expectations. The attention to detail and commitment to achieving the desired outcome were impressive. The cosmetic dentists are true professionals, and the staff provided exceptional service.",
    name: "Ahmad Kaleem",
  },
  {
    title: "Emergency Care Excellence",
    text: "I had an unexpected dental emergency and needed immediate assistance. The team at Dental Essence demonstrated outstanding responsiveness and professionalism. The dentist addressed my issue promptly, and the support staff was reassuring.",
    name: "Rida Fatima",
  },
];

const Slider = () => {
  return (
    <div className="swiper-container">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          1500: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 1,
          },
          100: {
            slidesPerView: 1,
          },
        }}
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
                <Image src={ClientOne} alt="/" width={40} height={40} />
              </div>
              <div>
                <p className="SwiperClientName">{slide.name}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-next">
        <img
          src="/Assets/Work/right.svg"
          style={{ transform: "rotate(90deg)" }}
        />
      </div>
      <div className="swiper-button-prev">
        <img
          src="/Assets/Work/right.svg"
          style={{ transform: "rotate(-90deg)" }}
        />
      </div>
    </div>
  );
};

export default Slider;
