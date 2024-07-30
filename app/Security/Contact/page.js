import HeroSection from "../Products/HeroSection";
import FormSection from "./FormSection";

function ContactUs() {
  return (
    <div>
      <>
        <HeroSection
          heading="Contact Us"
          subHeading="Let's Partner up"
          text="We’re here to address all your security needs and offer customized solutions. Contact us today to discuss how we can enhance your safety and provide peace of mind."
          imageSrc="/Assets/ContactUs/securityContact.png"
        />
        <FormSection />
      </>
    </div>
  );
}

export default ContactUs;
