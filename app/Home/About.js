import "./About.css";

import Transparentbtn from "../components/Transparentbtn";
function Services() {
  return (
    <div className="Services" id="Services">
      <div className="ServicesContainer">
        <div className="textContent">
          <p className="Heading">who we are</p>
          <p className="Heading2"> a trusted and respected partner</p>
          <p className="text" style={{ paddingBottom: "25px" }}>
            Integris has established its reputation over the years as a reliable
            and innovative supplier, handling diverse needs across the
            agricultural and energy sectors.
          </p>
          <p className="text">
            Our strategic partnerships and robust supply chain infrastructure
            ensure that we maintain flexibility and efficiency in our
            operations, making us well-equipped to manage large-scale and
            time-sensitive deliveries.
          </p>
          <div style={{ paddingTop: "40px" }}>
            <Transparentbtn TbtnText="LEARN MORE" href="/about-us" />
          </div>
        </div>
        <div className="roundedImage">
          <img className="roundBorderImage" src="/Assets/Home/image1.svg" />
        </div>
      </div>
    </div>
  );
}

export default Services;
