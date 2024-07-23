import React from "react";
import HeroSection from "../Products/HeroSection";
import ProductCategories from "../Products/ProductCategories";
import Capabilities from "./Capabilities";
import About from "../Home/About";

export default function AboutUs() {
  return (
    <>
      <HeroSection
        heading="who we are"
        subHeading="A Trusted and Respected Partner"
        text="At Integris, we prioritize our employees' growth and well-being, offering continuous support and guidance. Through regular training sessions, we empower our team to excel and evolve professionally, ensuring their success aligns with our company's values."
        imageSrc="/Assets/Products/Image1.svg"
      />
      <ProductCategories
        heading="capabilities"
        subHeading={"our key capabilities "}
      />
      <Capabilities />
      <About />
    </>
  );
}
