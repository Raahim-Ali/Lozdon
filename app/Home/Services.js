import Greenbtn from "../components/Greenbtn";
import Transparentbtn from "../components/Transparentbtn";
import "./Services.css";
import Image from "next/image";
function Services() {
  const services = [
    {
      imageSrc: "/Assets/Home/MobileDevelopment.svg",
      title: "mobile development",
      description:
        "This metaphor implies every aspect of the industry in recent times",
    },
    {
      imageSrc: "/Assets/Home/Webdevelopment.svg",
      title: "web development",
      description:
        "This metaphor implies every aspect of the industry in recent times",
    },
    {
      imageSrc: "/Assets/Home/DEVOPS.svg",
      title: "devops",
      description:
        "This metaphor implies every aspect of the industry in recent times",
    },
    {
      imageSrc: "/Assets/Home/CloudDevelopment.svg",
      title: "cloud development",
      description:
        "This metaphor implies every aspect of the industry in recent times",
    },
    {
      imageSrc: "/Assets/Home/UI-UX.svg",
      title: "ui/ux",
      description:
        "This metaphor implies every aspect of the industry in recent times",
    },
    {
      imageSrc: "/Assets/Home/SoftwareTesting.svg",
      title: "software testing",
      description:
        "This metaphor implies every aspect of the industry in recent times",
    },
  ];
  return (
    <div className="Services">
      <div>
        <p className="Heading">our services</p>
      </div>
      <div className="ServicesContainer">
        {services.map((service, index) => (
          <div className="card" key={index}>
            <div className="cardIcon">
              <Image src={service.imageSrc} alt="/" width={45} height={45} />
            </div>
            <div className="cardTitle">{service.title}</div>
            <div className="cardDescription">{service.description}</div>
          </div>
        ))}
      </div>
      <div className="buttons">
        <Greenbtn buttonText="see all services" />
        <Transparentbtn buttonText="contact us" />
      </div>
    </div>
  );
}

export default Services;
