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
        text="In the international market, Integris International FZE is a specialist in the import and export of petrochemical."
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
