import "./About.css";

import Transparentbtn from "@/app/components/Transparentbtn";
function Services() {
  return (
    <div className="Services" id="Services">
      <div className="ServicesContainer">
        <div className="textContent">
          <p className="Heading">who we are</p>
          <p className="Heading2"> Trusted Cleaning Experts</p>
          <p className="text" style={{ paddingBottom: "25px" }}>
            we are committed to delivering top-notch cleaning services with a
            focus on quality and reliability. Our experienced team uses advanced
            equipment and eco-friendly products to keep your space spotless and
            healthy.
          </p>
          <p className="text">
            Whether it&apos;s office spaces, retail environments, or specialized
            facilities, we tailor our services to meet your unique needs. Our
            commitment is to create a pristine and welcoming environment every
            time, reflecting our dedication to excellence in every job we
            undertake.
          </p>
          <div style={{ paddingTop: "40px" }}>
            <Transparentbtn TbtnText="LEARN MORE" href="/Commercial/about-us" />
          </div>
        </div>
        <div className="roundedImage">
          <img
            className="CommercialroundBorderImage"
            src="/Assets/aboutUs/commercialAbout.png"
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
