import React from "react";
import HeroSection from "../Components/HeroSection";
import ContentAfterHeroSection from "./ContentAfterHeroSection";

export default function page() {
  return (
    <>
      <HeroSection
        title="Our Services "
        paragraph="Octal Code, we excel in web development, offering a comprehensive suite of services."
        btnText="let’s work together"
        btnWidth="28%"
        imgSrc="/Assets/OurServices/HeroSectionImage.svg"
      />
      <ContentAfterHeroSection />
    </>
  );
}
