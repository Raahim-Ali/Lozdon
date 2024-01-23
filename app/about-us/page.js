import React from "react";
import HeroSection from "../components/HeroSection";
import ContentAfterHeroSection from "./ContentAfterHeroSection";

export default function page() {
  return (
    <>
      <HeroSection
        title="About Us"
        paragraph="Crafting Digital Success Stories, One Innovation at a Time: Unveiling the Essence of Octal Code."
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
