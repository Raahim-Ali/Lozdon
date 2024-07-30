import Transparentbtn from "@/app/components/Transparentbtn";

import "./Products.css";
function Industries() {
  const products = [
    {
      imageSrc: "/Assets/Home/Cleaning1.png",
      description: "Office Cleaning",
    },
    {
      imageSrc: "/Assets/Home/Cleaning2.png",
      description: "Kitchen Cleaning",
    },
    {
      imageSrc: "/Assets/Home/Cleaning3.png",
      description: "Pressure Washing",
    },
    {
      imageSrc: "/Assets/Home/Cleaning4.png",
      description: "Pest Control",
    },
  ];
  return (
    <div className="Industries" id="Industries">
      <div>
        <p className="Heading">our services</p>
        <p className="Heading2">
          Comprehensive Solutions for Every Cleaning Need
        </p>
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
      <Transparentbtn
        TbtnText="VIEW ALL PRODUCTS"
        href="/Commercial/Products"
      />
    </div>
  );
}

export default Industries;
