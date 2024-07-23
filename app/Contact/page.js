import HeroSection from "../Products/HeroSection";
import FormSection from "./FormSection";

function ContactUs() {
  return (
    <div>
      <>
        <HeroSection
          heading="Contact Us"
          subHeading="Let's Partner up"
          text="At Integris, we prioritize our employees' growth and well-being, offering continuous support and guidance. Through regular training sessions, we empower our team to excel and evolve professionally, ensuring their success aligns with our company's values."
          imageSrc="/Assets/Products/Image1.svg"
        />
        <FormSection />
      </>
    </div>
  );
}

export default ContactUs;
