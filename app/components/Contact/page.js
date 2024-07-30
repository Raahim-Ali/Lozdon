import HeroSection from "../../Commercial/Products/HeroSection";
import Contact from "./Contact";

function ContactUs() {
  return (
    <div>
      <>
        <HeroSection
          heading="Contact Us"
          subHeading="Let's Partner up"
          text="We’re here to address all your needs and offer tailored solutions across security, cleaning, and IT services. Contact us today to discuss how we can enhance your environment and provide peace of mind."
          imageSrc="/Assets/Herosection/contact.png"
        />
        <Contact />
      </>
    </div>
  );
}

export default ContactUs;
