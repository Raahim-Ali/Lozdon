"use client";
// Import necessary modules
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

import Image from "next/image";
import "./Slider.css";

const sliderData = [
  {
    title: "Empowering Ecommerce Success.",
    text: "Octal Code proved to be an excellent collaborator throughout our partnership. The team facilitated a successful negotiation with a development firm to undertake the complete reconstruction of our application suite. This suite is now utilized by over 3000 ecommerce sellers.",
    name: "Matt Hall",
    description: "Founder & CEO - Ecom Circles",
    image: "/Assets/Work/client1.jpg",
  },

  {
    title: "Delivering Excellence.",
    text: "My collaboration with Octal Code has been exceptional. Their technical expertise, skilled team, and effective strategies for product development have proven invaluable. Octal Code consistently delivers outstanding products and seamlessly adapts to the evolving landscape for successful client onboarding.",
    name: "Jacob Cutler",
    description: "CEO - Ampli-fi.io",
    image: "/Assets/Work/client2.jpg",
  },
  {
    title: "Elevating Collaborations.",
    text: "Having Octal Code as my professional collaborator has been truly exceptional. Their managerial prowess has created an environment where team members are empowered to depend on their unique strengths. I am enthusiastic about the prospect of future collaborations with Octal Code and its team.",
    name: "Vivi Poit",
    description: "Senior Software Engineer",
    image: "/Assets/Work/client3.jpg",
  },
  {
    title: "Inspiring Growth, Driving Success.",
    text: "Octal Code not only serves as outstanding mentors but also excels in the role of Business Development Managers. Their mastery of the sales process and skillful construction of effective sales funnels position Octal Code as a valuable partner in propelling business growth and achieving success.",
    name: "Noel Deyzel",
    description: "Managing Director at Thought Inc",
    image: "/Assets/Work/client4.jpg",
  },
  {
    title: "Crafting Success, Defining Excellence.",
    text: "Octal Code have consistently provided invaluable support as guiding mentors and enhancing the capabilities of both peers and the workforce. This client-centered approach underscores Octal Code's dedication to fostering growth and achieving shared objectives.",
    name: "Purpose Katakwa",
    description: "Software Engineer at Cyest SIMS",
    image: "/Assets/Work/client5.jpg",
  },
];

const Slider = () => {
  return (
    <div className="swiper-container">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={false}
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
                <Image
                  src={slide.image}
                  alt="/"
                  width={60}
                  height={60}
                  style={{ borderRadius: "50%" }}
                />
              </div>
              <div>
                <p className="SwiperClientName">{slide.name}</p>
                <p className="SwiperText">{slide.description}</p>
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
