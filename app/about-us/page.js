import React from "react";
import HeroSection from "../components/HeroSection";
import ContentAfterHeroSection from "./ContentAfterHeroSection";

export default function page() {
  return (
    <>
      <HeroSection
        title="About Us"
        paragraph="Octal Code, we excel in web development, offering a comprehensive suite of services."
        btnText="let’s work together"
        imgSrc="/Assets/Herosection/HeroSectionImage.svg"
        // btnWidth="28%"
        // pWidth=""
        // titleWidth=""
      />
      <ContentAfterHeroSection />
    </>
  );
}
