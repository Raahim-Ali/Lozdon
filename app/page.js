"use client";
import { useRouter } from "next/navigation";
import "./app.css";

export default function Home() {
  const router = useRouter();

  const handleButtonClick = (service) => {
    router.push(service.link); // Correctly pass the URL directly
  };

  const services = [
    {
      heading: "Commercial Services",
      description:
        "Experience cleanliness with our professional commercial cleaning services. We ensure your business environment remains spotless and inviting, enhancing both appearance and hygiene.",
      icon: "📦", // Example icon
      link: "/Commercial/Home",
    },
    {
      heading: "Security Services",
      description:
        "Discover tailored security solutions crafted to meet your unique needs with innovative technology and personalized protection. We deliver exceptional safety designed specifically for you.",
      icon: "🔒", // Example icon
      link: "/Security/Home",
    },
    {
      heading: "IT Services",
      description:
        "Unlock the full potential of your business with our experts providing cutting-edge IT solutions. Our expertise drives innovation, ensuring you stay ahead in a rapidly evolving digital landscape.",
      icon: "💻", // Example icon
      link: "/IT/Home",
    },
  ];

  return (
    <>
      <div className="mainContainer" />
      <h1 className="servicesHeadingHero">OUR SERVICES</h1>
      <div className="homeCardsMain">
        <div className="homeCardsContainer">
          {services.map((service, index) => (
            <div
              className="homeCard"
              key={index}
              onClick={() => handleButtonClick(service)} // Use the correct function call
            >
              <div className="iconCircle">{service.icon}</div>
              <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                {service.heading}
              </p>
              <p className="description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
