import Transparentbtn from "../components/Transparentbtn";
import "./Capabilities.css";

function Capabilities() {
  const cabilitiesList = [
    {
      icon: "/Assets/aboutUs/truck.svg",
      heading: "Supply Chain Excellence",
      subHeading:
        "Our logistical capabilities include partnership with leading shipping and freight companies worldwide, enabling us to deliver Urea seamlessly and efficiently directly to Pakistani ports. ",
    },
    {
      icon: "/Assets/aboutUs/tick.svg",
      heading: "Quality Assurance",
      subHeading:
        "Montage Oil DMCC guarantees that all Urea supplied will meet the stringent quality standards required by the agricultural sector, ensuring optimal results for the farmers across Pakistan.",
    },
    {
      icon: "/Assets/aboutUs/dollar.svg",
      heading: "Competitive Pricing",
      subHeading:
        "Leveraging our extensive network and operational efficiencies, we offer the most competitive prices, which will help in reducing the cost burden on Pakistani farmers, thereby enhancing their profitability and yield capacities. ",
    },
    {
      icon: "/Assets/aboutUs/clock.svg",
      heading: "Timely Delivery",
      subHeading:
        "We understand the importance of timely fertiliser application in agriculture. Our delivery schedules are meticulously planned and executed to align with the cropping seasons of Pakistan, ensuring that Urea is available when most needed. ",
    },
    {
      icon: "/Assets/aboutUs/tick.svg",
      heading: "Experience and Reliability",
      subHeading:
        "With years of experience in managing large-scale supply contacts, Montage Oil DMCC has proven its capability and reliability in delivering on its promises successfully. ",
    },
    {
      icon: "/Assets/aboutUs/hands.svg",
      heading: "Support and Collaboration",
      subHeading:
        "We believe in building long-term relationships with our clients. Out team is committed to providing ongoing support and working closely with the Government to address any challenges and adapt to changing needs.  ",
    },
  ];
  return (
    <>
      <div className="CardsContainer">
        {cabilitiesList.map((capability, index) => (
          <div className="cardMain" key={index}>
            <div className="card">
              <div className="cardIcon">
                <img src={capability.icon} alt="/" />
              </div>
              <p
                className="cardTitle"
                style={{ fontFamily: "Liason Caslon", fontSize: "24px" }}
              >
                {" "}
                {capability.heading}
              </p>
              <p
                className="cardDescription"
                style={{ color: "#343434", fontSize: "18px" }}
              >
                {capability.subHeading}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="contactButton">
        <Transparentbtn TbtnText="CONTACT US" href="#" />
      </div>
    </>
  );
}

export default Capabilities;
