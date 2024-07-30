import "./About.css";
import Transparentbtn from "@/app/components/Transparentbtn";
function Services() {
  return (
    <div className="Services" id="Services">
      <div className="ServicesContainer">
        <div className="textContent">
          <p className="Heading">who we are</p>
          <p className="Heading2"> Pioneers in IT Excellence</p>
          <p className="text" style={{ paddingBottom: "25px" }}>
            At Octal Securities, we specialize in delivering innovative IT
            solutions tailored to meet your unique business needs. Our expert
            team combines industry knowledge with advanced technology to enhance
            efficiency and drive growth.
          </p>
          <p className="text">
            Committed to excellence and integrity, we build strong partnerships
            with our clients, ensuring that our solutions align with your goals
            and adapt to the ever-evolving digital landscape.
          </p>
          <div style={{ paddingTop: "40px" }}>
            <Transparentbtn TbtnText="LEARN MORE" href="/about-us" />
          </div>
        </div>
        <div className="roundedImage">
          <img className="roundBorderImage" src="/Assets/Home/aboutIT.png" />
        </div>
      </div>
    </div>
  );
}

export default Services;
