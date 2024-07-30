import React from "react";
import HeroSection from "../Products/HeroSection";
import ProductCategories from "../Products/ProductCategories";
import Capabilities from "./Capabilities";
import About from "../Home/About";

export default function AboutUs() {
  return (
    <>
      <HeroSection
        heading="Meet the Experts Ensuring Your Clean Space"
        subHeading="Commitment to Exceptional Cleaning"
        text="We are dedicated to providing top-tier cleaning services with a focus on excellence and attention to detail. Our mission is to deliver spotless results and maintain the highest standards of cleanliness for every client."
        imageSrc="/Assets/Herosection/heroCleaning.jpeg"
      />
      <ProductCategories
        heading="Core Competencies"
        subHeading={"Our Cleaning Skills "}
      />
      <Capabilities />
      <About />
    </>
  );
}
