import React from "react";
import UltimateGuideToWeb from "./container/UltimateGuideToWeb";
import BlogCard from "./container/BlogCard";
import HeroSection from "../components/HeroSection";
// import ContentAfterHeroSection from "./ContentAfterHeroSection";

export default function page() {
  return (
    <>
      <HeroSection
        title="Our Blogs"
        paragraph="Octal Code, we excel in web development, offering a comprehensive suite of services."
        btnText="let’s work together"
        // btnWidth="28%"
        imgSrc="/Assets/Herosection/HeroSectionImage.svg"
      />
      <div className="flex flex-col gap-12 py-14 px-10 md:py-16 md:px-12  xl:pt-20 xl:pb-24 xl:px-40">
        <UltimateGuideToWeb />
        <BlogCard />
      </div>
    </>
  );
}
