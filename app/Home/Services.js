import Link from "next/link";
import "./Services.css";

import Image from "next/image";
function Services() {
  const services = [
    {
      imageSrc: "/Assets/Home/icon.png",
      title: "mobile development",
      description:
        "Elevate Experiences: Unleash Seamless Power for Empowered Mobile Solutions.",
      link: "LEARN MORE",
      href: "/Services/App",
    },
    {
      imageSrc: "/Assets/Home/WebDevelopment.svg",
      title: "web development",
      description:
        "Crafting Digital Excellence: Transforming Ideas into Dynamic Web Solutions.",
      link: "LEARN MORE",
      href: "/Services/Web",
    },
    {
      imageSrc: "/Assets/Home/DEVOPS.svg",
      title: "devops",
      description:
        "Streamlined DevOps: Elevate Development and Operations Efficiency.",
      link: "LEARN MORE",
      href: "/Services/devOps",
    },
    {
      imageSrc: "/Assets/Home/CloudDevelopment.svg",
      title: "Special Services",
      description:
        "Specialized Services, Tailored Solutions: Turning Visions into Reality.",
      link: "LEARN MORE",
      href: "/Services/special-services",
    },
    {
      imageSrc: "/Assets/Home/UI-UX.svg",
      title: "ui/ux",
      description:
        "Crafting Intuitive Experiences: Lasting Impressions and Seamless Interfaces.",
      link: "LEARN MORE",
      href: "/Services/UiUx",
    },
    {
      imageSrc: "/Assets/Home/SoftwareTesting.svg",
      title: "software testing",
      description: "Quality Unleashed: Precision in Software Testing Solutions",
      link: "LEARN MORE",
      href: "/Services/software-testing",
    },
  ];
  return (
    <div className="Services">
      <div>
        <p className="Heading">our services</p>
      </div>
      <div className="ServicesContainer">
        {services.map((service, index) => (
          <div className="cardMain" key={index}>
            <Link href={service.href} className="w-fit">
              <div className="card">
                <div className="cardIcon">
                  <Image
                    src={service.imageSrc}
                    alt="/"
                    width={45}
                    height={45}
                  />
                </div>
                <p className="cardTitle">{service.title}</p>
                <p className="cardDescription">{service.description}</p>

                {/* <p className="learnMore w-fit">{service.link}</p> */}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
