import HeroSection from "../components/HeroSection";
import FormSection from "./FormSection";
import Touch from "./Touch";

function ContactUs() {
  return (
    <div>
      <>
        <HeroSection
          title="Contact us"
          paragraph="Octal Code, we excel in web development, offering a comprehensive suite of services and software development lifecycle."
          btnText="book session with us"
          btnWidth="28%"
          imgSrc="/Assets/Herosection/HeroSectionImage.svg"
        />
        <FormSection />
        <Touch />
      </>
    </div>
  );
}

export default ContactUs;
