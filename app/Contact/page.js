import HeroSection from "../Products/HeroSection";
import FormSection from "./FormSection";

function ContactUs() {
  return (
    <div>
      <>
        <HeroSection
          heading="Contact Us"
          subHeading="Let's Partner up"
          text="In the international market, Integris International FZE is a specialist in the import and export of petrochemical."
          imageSrc="/Assets/Products/Image1.svg"
        />
        <FormSection />
      </>
    </div>
  );
}

export default ContactUs;
