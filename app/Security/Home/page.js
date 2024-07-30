"use client";
import HeroSection from "./HeroSection";
import Idea from "./Idea";
import Products from "./Products";
import Process from "./Process";
import About from "./About";

function HomePage() {
  return (
    <>
      <HeroSection
        title="Innovative Protection Tailored to Your Unique Security Needs"
        paragraph="Comprehensive Security for Every Situation. Trust Our Expertise to Keep You Safe."
        imgSrc="/Assets/Herosection/SecurityHero.png"
      />
      <About />
      <Products />
      <Process />
      <Idea />
    </>
  );
}

export default HomePage;
