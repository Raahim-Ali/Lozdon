import Transparentbtn from "@/app/components/Transparentbtn";

import "./Products.css";
function Industries() {
  const products = [
    {
      imageSrc: "/Assets/Home/ITproduct.png",
      description: "Mobile Development",
    },
    {
      imageSrc: "/Assets/Home/webIT.png",
      description: "Web Development",
    },
    {
      imageSrc: "/Assets/Home/devopsIT.png",
      description: "DEVOPS",
    },
    {
      imageSrc: "/Assets/Home/testingIT.png",
      description: "Software Testing",
    },
  ];
  return (
    <div className="Industries" id="Industries">
      <div>
        <p className="Heading">our services</p>
        <p className="Heading2">
          Transforming Challenges into Solutions with Expert IT Services
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
      <Transparentbtn TbtnText="VIEW ALL PRODUCTS" href="/IT/Products" />
    </div>
  );
}

export default Industries;
