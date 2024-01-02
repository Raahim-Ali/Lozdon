import React from "react";
import ContentAfterHeroSection from "./ContentAfterHeroSection";
import HeroSection from "../../components/HeroSection";

export default function page() {
  return (
    <>
      <HeroSection
        title="Devops"
        paragraph="Integrating development and operations, emphasizing collaboration, automation, and continuous delivery to streamline software development for faster and more reliable results."
        btnText="let’s work together"
        btnWidth="28%"
        imgSrc="/Assets/Herosection/HeroSectionImage.svg"
      />
      <ContentAfterHeroSection />
    </>
  );
}
