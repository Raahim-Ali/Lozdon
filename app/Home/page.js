import HeroSection from "../components/HeroSection";
import CustomerCount from "../single-service/container/CustomerCount";
import Clients from "../work/Components/Clients";
import PressSection from "../work/Components/PressSection";
import Awards from "./Awards";
import Blog from "./Blog";
import Idea from "./Idea";
import Industries from "./Industries";
import OurWork from "./OurWork";
import Process from "./Process";
import Services from "./Services";

function HomePage() {
  return (
    <>
      <HeroSection
        // titleWidth="70%"
        title="full service software agency"
        paragraph="Octal Code, we excel in web development, offering a comprehensive suite of services and software development lifecycle."
        btnText="See all services"
        btnWidth="28%"
        imgSrc="/Assets/Home/HeroSectionImage.svg"
      />
      <CustomerCount />
      <Services />
      <OurWork />
      <Clients />
      <Industries />
      <Process />
      <Idea />
      <PressSection />
      <Blog />
      <Awards />
    </>
  );
}

export default HomePage;
