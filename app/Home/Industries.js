import Greenbtn from "../components/Greenbtn";
import Transparentbtn from "../components/Transparentbtn";

import "./Industries.css";
function Industries() {
  const industries = [
    {
      imageSrc: "/Assets/Home/IndustryCardBg.svg",
      description: "Information Tech",
    },
    {
      imageSrc: "/Assets/Home/IndustryCardBg.svg",
      description: "Information Tech",
    },
    {
      imageSrc: "/Assets/Home/IndustryCardBg.svg",
      description: "Information Tech",
    },
    {
      imageSrc: "/Assets/Home/IndustryCardBg.svg",
      description: "Information Tech",
    },
    {
      imageSrc: "/Assets/Home/IndustryCardBg.svg",
      description: "Information Tech",
    },
    {
      imageSrc: "/Assets/Home/IndustryCardBg.svg",
      description: "Information Tech",
    },
  ];
  return (
    <div className="Industries">
      <div>
        <p className="IndustriesHeading">industries we focus</p>
      </div>
      <div className="IndustriesContainer">
        {industries.map((industry, index) => (
          <div className="Industrycard" key={index}>
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
