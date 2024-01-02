import React from "react";
import ContentAfterHeroSection from "./ContentAfterHeroSection";
import HeroSection from "../../components/HeroSection";

export default function page() {
  return (
    <>
      <HeroSection
        title="Web Devlopment"
        paragraph="Our SDLC cycle comprises Planning, Design, Coding, Testing and Maintenance of Applications to cater to diverse business needs ensuring efficiency and innovation in the digital landscape."
        btnText="let’s work together"
        btnWidth="28%"
        imgSrc="/Assets/Herosection/HeroSectionImage.svg"
      />
      <ContentAfterHeroSection />
    </>
  );
}
