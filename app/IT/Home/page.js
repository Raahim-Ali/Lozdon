"use client";
import HeroSection from "./HeroSection";
import Blog from "./Blog";
import Idea from "./Idea";
import Products from "./Products";
import Process from "./Process";
import About from "./About";

function HomePage() {
  return (
    <>
      <HeroSection
        title="Empowering Your Future with Cutting-Edge IT Solutions"
        paragraph="Unlock the full potential of your business with our cutting-edge IT solutions. Our expertise drives innovation, ensuring you stay ahead in a rapidly evolving digital landscape."
        imgSrc="/Assets/Herosection/heroIT2.png"
      />
      <About />
      <Products />
      <Process />
      <Idea />
    </>
  );
}

export default HomePage;
