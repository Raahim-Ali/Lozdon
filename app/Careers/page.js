import HeroSection from "../Products/HeroSection";
import Benefits from "./Benefits";
import Positions from "./Positions";

function Careers() {
  return (
    <>
      <HeroSection
        heading="Careers"
        subHeading="Be a part of Integris"
        text="In the international market, Integris International FZE is a specialist in the import and export of petrochemical."
        imageSrc="/Assets/Careers/heroSectionImg.svg"
      />
      <Benefits />
      <Positions />
    </>
  );
}

export default Careers;
