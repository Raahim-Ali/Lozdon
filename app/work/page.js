import PressSection from "./Components/PressSection";
import CompanyOne from "./Components/CompanyOne";
import Clients from "./Components/Clients";
import HeroSection from "../components/HeroSection";

export default function Work() {
  return (
    <>
      <HeroSection
        title="Our Work"
        paragraph="Octal Code, we excel in web development, offering a comprehensive suite of services."
        btnText="let’s work together"
        // btnWidth="28%"
        imgSrc="/Assets/OurServices/HeroSectionImage.svg"
      />
      <PressSection />
      <CompanyOne />
      <CompanyOne />
      <CompanyOne />
      <CompanyOne />
      <Clients />
    </>
  );
}
