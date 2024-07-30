import React from "react";
import HeroSection from "../Products/HeroSection";
import ProductCategories from "../Products/ProductCategories";
import Capabilities from "./Capabilities";
import About from "../Home/About";

export default function AboutUs() {
  return (
    <>
      <HeroSection
        heading="Meet the Team Protecting Your Future"
        subHeading="Trust Us to Keep You Safe"
        text="At Octal Securities, we invest in our team’s growth with continuous training and support. By enhancing their skills and knowledge, we ensure they deliver top-notch protection and stay at the forefront of security innovation. Our commitment to their professional development aligns with our dedication to exceptional safety and service."
        imageSrc="/Assets/aboutUs/securityAbout.png"
      />
      <ProductCategories
        heading="Core Competencies"
        subHeading={"Precision and Reliability in Security "}
      />
      <Capabilities />
      <About />
    </>
  );
}
