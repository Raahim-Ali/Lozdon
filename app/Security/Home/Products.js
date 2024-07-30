import Transparentbtn from "@/app/components/Transparentbtn";

import "./Products.css";
function Industries() {
  const products = [
    {
      imageSrc: "/Assets/Home/MannedSecurity.png",
      description: "Manned Security",
      text: "",
    },
    {
      imageSrc: "/Assets/Home/cctv.jpeg",
      description: "CCTV Operators",
      text: "",
    },
    {
      imageSrc: "/Assets/Home/alarm.jpg",
      description: "Alarm Respnose Team",
      text: "",
    },
    {
      imageSrc: "/Assets/Home/patrol.png",
      description: "Mobile Patrol Security",
      text: "",
    },
  ];
  return (
    <div className="Industries" id="Industries">
      <div>
        <p className="Heading">our services</p>
        <p className="Heading2">Comprehensive Protection for Every Need</p>
      </div>
      <div className="IndustriesContainer">
        {products.map((industry, index) => (
          <div
            className="Industrycard"
            key={index}
            style={{ backgroundImage: `url(${industry.imageSrc})` }}
          >
            <div className="IndustrycardDescription">
              <p>{industry.description}</p>
              <div>
                <p
                  style={{
                    fontFamily: "Inter",
                    fontSize: "16px",
                    fontWeight: "300",
                    color: "FFFFFF",
                  }}
                >
                  {industry.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Transparentbtn TbtnText="VIEW ALL SERVICES" href="/Security/Products" />
    </div>
  );
}

export default Industries;
