import React from "react";
import ContentAfterHeroSection from "./ContentAfterHeroSection";
import HeroSection from "../../components/HeroSection";

export default function page() {
  return (
    <>
      <HeroSection
        title="Mobile Devlopment"
        paragraph="It encompasses design, coding, testing and optimization to deliver user-friendly and efficient mobile applications across iOS and Android platforms."
        btnText="let’s work together"
        btnWidth="28%"
        imgSrc="/Assets/Herosection/HeroSectionImage.svg"
      />
      <ContentAfterHeroSection />
    </>
  );
}
