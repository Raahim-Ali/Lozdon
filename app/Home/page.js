import HeroSection from "../components/HeroSection";

function Page() {
  return (
    <div>
      <HeroSection
        title="full service software agency"
        paragraph="Octal Code, we excel in web development, offering a comprehensive suite of services and software development lifecycle."
        btnText="See all services"
        btnWidth="28%"
        imgSrc="/Assets/Home/HeroSectionImage.svg"
      />
    </div>
  );
}

export default Page;
