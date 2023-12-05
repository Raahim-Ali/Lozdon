import React from "react";
import HeroSection from "../components/HeroSection";
import ContentAfterHeroSection from "./ContentAfterHeroSection";

export default function page() {
  return (
    <>
      <HeroSection
        title="custom Web Development "
        paragraph="We design and build industry-leading web-based products that bring 
        value to your customers, delivered with compelling UX."
        btnText="let’s work together"
        // btnWidth="28%"
        imgSrc="/Assets/Herosection/HeroSectionImage.svg"
        pWidth="70%"
        // titleWidth=""
      />
      <ContentAfterHeroSection />
    </>
  );
}
