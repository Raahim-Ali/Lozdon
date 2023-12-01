import React from "react";
<<<<<<< Updated upstream
import HeroSection from "../components/HeroSection";
=======
>>>>>>> Stashed changes
import ContentAfterHeroSection from "./ContentAfterHeroSection";
import HeroSection from "../components/HeroSection";

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
