import HeroSection from "../Products/HeroSection";
import FormSection from "./FormSection";

function ContactUs() {
  return (
    <div>
      <>
        <HeroSection
          heading="Contact Us"
          subHeading="Let's Partner up"
          text="We’re here to meet all your IT needs with customized solutions that drive success. Contact us today to discuss how we can help you optimize your technology and achieve your business goals."
          imageSrc="/Assets/ContactUs/ITContact.png"
        />
        <FormSection />
      </>
    </div>
  );
}

export default ContactUs;
