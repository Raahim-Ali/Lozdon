import React from "react";
import ContentAfterHeroSection from "./ContentAfterHeroSection";
import HeroSection from "../../components/HeroSection";

export default function page() {
  return (
    <>
      <HeroSection
        title="UI / UX"
        paragraph="seamless and engaging user interfaces. We prioritize user satisfaction,
        making software more intuitive and efficient."
        btnText="let’s work together"
        btnWidth="28%"
        imgSrc="/Assets/Herosection/HeroSectionImage.svg"
      />
      <ContentAfterHeroSection />
    </>
  );
}
