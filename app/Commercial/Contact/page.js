import HeroSection from "../Products/HeroSection";
import FormSection from "./FormSection";

function ContactUs() {
  return (
    <div>
      <>
        <HeroSection
          heading="Contact Us"
          subHeading="We're Here to Help"
          text="We’re here to address all your cleaning needs and provide tailored solutions. Contact us today to discuss how we can help you maintain a spotless and welcoming environment."
          imageSrc="/Assets/Herosection/heroCleaningContact.png"
        />
        <FormSection />
      </>
    </div>
  );
}

export default ContactUs;
