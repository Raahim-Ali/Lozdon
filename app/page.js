"use client";
import { useRouter } from "next/navigation";
import "./app.css";

export default function Home() {
  const router = useRouter();

  const handleButtonClick = (service) => {
    if (service === "IT Services") {
      router.push("/IT/Home");
    }
    if (service === "Security Services") {
      router.push("/Security/Home");
    }
    if (service === "Commercial Services") {
      router.push("/Commercial/Home");
    }
  };

  const services = [
    {
      heading: "Commercial Services",
      description:
        "Experience cleanliness with our professional commercial cleaning services. We ensure your business environment remains spotless and inviting, enhancing both appearance and hygiene.",
      text: "MORE",
      icon: "📦", // Example icon
    },
    {
      heading: "Security Services",
      description:
        "Discover tailored security solutions crafted to meet your unique needs with innovative technology and personalized protection. We deliver exceptional safety designed specifically for you.",
      text: "MORE",
      icon: "🔒", // Example icon
    },
    {
      heading: "IT Services",
      description:
        "Unlock the full potential of your business with our experts providing cutting-edge IT solutions. Our expertise drives innovation, ensuring you stay ahead in a rapidly evolving digital landscape.",
      text: "MORE",
      icon: "💻", // Example icon
    },
  ];

  return (
    <>
      <div className="mainContainer" />
      <h1 className="servicesHeadingHero">OUR SERVICES</h1>
      <div className="homeCardsMain">
        <div className="homeCardsContainer">
          {services.map((service, index) => (
            <div className="homeCard" key={index}>
              <div className="iconCircle">{service.icon}</div>
              <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                {service.heading}
              </p>
              <p className="description">{service.description}</p>
              <p>{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
