import Transparentbtn from "@/app/components/Transparentbtn";
import "./Capabilities.css";

function Capabilities() {
  const cabilitiesList = [
    {
      icon: "/Assets/aboutUs/truck.svg",
      heading: "Advanced Surveillance Systems",
      subHeading:
        "Utilizes high-resolution cameras and real-time monitoring to provide comprehensive coverage and immediate alerts, ensuring enhanced security and rapid response to potential threats.",
    },
    {
      icon: "/Assets/aboutUs/tick.svg",
      heading: "Risk Assessment and Management",
      subHeading:
        "Thorough evaluation of potential security threats combined with tailored strategies to effectively manage and mitigate risks, ensuring a safer environment and robust protection.",
    },
    {
      icon: "/Assets/aboutUs/dollar.svg",
      heading: "Emergency Response and Crisis Management",
      subHeading:
        "Expert handling of emergencies with swift action plans and crisis management strategies, ensuring rapid resolution and minimal disruption during critical incidents.",
    },
    {
      icon: "/Assets/aboutUs/clock.svg",
      heading: "Custom Security Training Programs",
      subHeading:
        "Tailored training solutions designed to equip clients and staff with essential skills and knowledge, enhancing their ability to handle security challenges and maintain a safe environment.",
    },
    {
      icon: "/Assets/aboutUs/tick.svg",
      heading: "Integrated Security Solutions",
      subHeading:
        "Seamlessly combines various security technologies and services into a unified system, providing comprehensive protection and streamlined management for enhanced safety and efficiency.",
    },
    {
      icon: "/Assets/aboutUs/hands.svg",
      heading: "Support and Collaboration",
      subHeading:
        "Dedicated support and collaborative partnerships to address security needs, ensuring effective solutions and continuous improvement through proactive communication and joint efforts.",
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
