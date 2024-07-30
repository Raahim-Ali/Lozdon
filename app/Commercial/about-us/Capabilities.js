import Transparentbtn from "@/app/components/Transparentbtn";
import "./Capabilities.css";

function Capabilities() {
  const cabilitiesList = [
    {
      icon: "/Assets/aboutUs/truck.svg",
      heading: "Deep Cleaning Excellence",
      subHeading:
        "We specialize in comprehensive deep cleaning services. Our thorough approach ensures every corner is spotless, using advanced techniques and high-quality products for exceptional results.",
    },
    {
      icon: "/Assets/aboutUs/tick.svg",
      heading: "Eco-Friendly Solutions",
      subHeading:
        "Committed to sustainability, we use eco-friendly cleaning products and practices. Our green cleaning solutions minimize environmental impact while maintaining high standards of cleanliness and safety.",
    },
    {
      icon: "/Assets/aboutUs/dollar.svg",
      heading: "Competitive Pricing",
      subHeading:
        "Leveraging our extensive network and operational efficiencies, we offer the most competitive prices, which will help in reducing the cost burden, thereby enhancing their profitability and yield capacities. ",
    },
    {
      icon: "/Assets/aboutUs/clock.svg",
      heading: "Professional Staff Training",
      subHeading:
        "Our team is extensively trained in the latest cleaning techniques and safety protocols. We ensure that every staff member is skilled, reliable, and equipped to deliver top-notch service.",
    },
    {
      icon: "/Assets/aboutUs/tick.svg",
      heading: "Customized Cleaning Plans",
      subHeading:
        "We offer tailored cleaning plans designed to meet the specific needs of each client. Whether it's for offices, retail spaces, or specialized facilities, our solutions are adaptable and efficient.",
    },
    {
      icon: "/Assets/aboutUs/hands.svg",
      heading: "Advanced Equipment Utilization",
      subHeading:
        "Utilizing state-of-the-art cleaning equipment, we enhance the efficiency and effectiveness of our services. Our advanced tools help achieve superior cleanliness and quicker turnaround times.",
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
