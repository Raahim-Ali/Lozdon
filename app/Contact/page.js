import HeroSection from "../components/HeroSection";
import FormSection from "./FormSection";
import Touch from "./Touch";

function ContactUs() {
  return (
    <div>
      <>
        <HeroSection
          title="Contact us"
          paragraph=""
          btnText="book session with us"
          showButton={false}
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
