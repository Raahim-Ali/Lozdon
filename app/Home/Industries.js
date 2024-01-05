import Greenbtn from "../components/Greenbtn";
import Transparentbtn from "../components/Transparentbtn";

import "./Industries.css";
function Industries() {
  const industries = [
    {
      imageSrc: "/Assets/Home/indTele.png",
      description: "Information Technology",
    },
    {
      imageSrc: "/Assets/Home/indFin.png",
      description: "Fintech",
    },
    {
      imageSrc: "/Assets/Home/indEqu.png",
      description: "Equipment Financing",
    },
    {
      imageSrc: "/Assets/Home/IndEcom.png",
      description: "E-Commerce",
    },
    {
      imageSrc: "/Assets/Home/indHeal.png",
      description: "Healthcare",
    },
    {
      imageSrc: "/Assets/Home/indTele.png",
      description: "Telecommunication",
    },
  ];
  return (
    <div className="Industries">
      <div>
        <p className="IndustriesHeading">industries we focus</p>
      </div>
      <div className="IndustriesContainer">
        {industries.map((industry, index) => (
          <div
            className="Industrycard"
            key={index}
            style={{ backgroundImage: `url(${industry.imageSrc})` }}
          >
            <div className="IndustrycardDescription">
              {industry.description}
            </div>
          </div>
        ))}
      </div>

      <div className="buttons">
        <Greenbtn buttonText="see all services" href="/Services" />
        <Transparentbtn buttonText="contact us" href="/Contact" />
      </div>
    </div>
  );
}

export default Industries;
