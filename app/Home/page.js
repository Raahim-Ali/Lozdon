import HeroSection from "./HeroSection";
import Blog from "./Blog";
import Idea from "./Idea";
import Products from "./Products";
import Process from "./Process";
import About from "./About";

function HomePage() {
  const slides = [
    {
      imgSrc: "/Assets/Herosection/bg1.png",
      title: "Slide 1 Title",
      paragraph: "Slide 1 Paragraph",
    },
    {
      imgSrc: "/Assets/Herosection/bg1.png",
      title: "Slide 2 Title",
      paragraph: "Slide 2 Paragraph",
    },
  ];
  return (
    <>
      <HeroSection
        title="Driven by a Passion for Innovation and Improvement"
        paragraph="In the international market, Integris International FZE is a specialist in the import
and export of petrochemical products across a variety of countries."
        imgSrc="/Assets/Herosection/bg.png"
        slides={slides}
      />
      <About />
      <Products />
      <Process />
      <Idea />
      <Blog />
    </>
  );
}

export default HomePage;
