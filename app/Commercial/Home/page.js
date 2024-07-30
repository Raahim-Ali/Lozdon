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
        title="Comprehensive cleaning for a pristine workspace"
        paragraph="Experience exceptional cleanliness with our professional commercial cleaning services. We ensure your business environment remains spotless and inviting, enhancing both appearance and hygiene."
        imgSrc="/Assets/Herosection/heroCommercial.png"
      />
      <About />
      <Products />
      <Process />
      <Idea />
    </>
  );
}

export default HomePage;
