import React from "react";
import ContentAfterHeroSection from "./ContentAfterHeroSection";
import HeroSection from "../../components/HeroSection";

export default function page() {
  return (
    <>
      <HeroSection
        title="Software Testing"
        paragraph=" Elevate software reliability with Quality Assurance and Testing. We rigorously evaluate, detect, and
        resolve issues to deliver flawless applications for your business."
        btnText="let’s work together"
        btnWidth="28%"
        imgSrc="/Assets/Herosection/HeroSectionImage.svg"
      />
      <ContentAfterHeroSection />
    </>
  );
}
