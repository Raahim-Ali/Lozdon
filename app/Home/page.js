import Awards from "./Awards";
import Blog from "./Blog";
import HeroSection from "./HeroSection";
import CustomerCount from "../single-service/container/CustomerCount";
import Clients from "../work/Components/Clients";
import PressSection from "../work/Components/PressSection";
import Idea from "./Idea";
import Industries from "./Industries";
import OurWork from "./OurWork";
import Process from "./Process";
import Services from "./Services";

function HomePage() {
  return (
    <>
      <HeroSection
        // titleWidth="80%"
        title="full service software agency"
        paragraph="Elevating your digital presence through a symphony of expertise, weaving technological brilliance, innovative designs, and seamless functionality into every project."
        btnText="See all services"
        TbtnText="book session with us"
        // btnWidth="28%"
        // pWidth="70%"
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
