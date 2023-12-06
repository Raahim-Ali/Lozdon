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
      link: "LEARN MORE",
    },
    {
      imageSrc: "/Assets/Home/Webdevelopment.svg",
      title: "web development",
      description:
        "This metaphor implies every aspect of the industry in recent times",
      link: "LEARN MORE",
    },
    {
      imageSrc: "/Assets/Home/DEVOPS.svg",
      title: "devops",
      description:
        "This metaphor implies every aspect of the industry in recent times",
      link: "LEARN MORE",
    },
    {
      imageSrc: "/Assets/Home/CloudDevelopment.svg",
      title: "cloud development",
      description:
        "This metaphor implies every aspect of the industry in recent times",
      link: "LEARN MORE",
    },
    {
      imageSrc: "/Assets/Home/UI-UX.svg",
      title: "ui/ux",
      description:
        "This metaphor implies every aspect of the industry in recent times",
      link: "LEARN MORE",
    },
    {
      imageSrc: "/Assets/Home/SoftwareTesting.svg",
      title: "software testing",
      description:
        "This metaphor implies every aspect of the industry in recent times",
      link: "LEARN MORE",
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
            <p className="cardTitle">{service.title}</p>
            <p className="cardDescription">{service.description}</p>
            <p className="learnMore">{service.link}</p>
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

export default Services;
