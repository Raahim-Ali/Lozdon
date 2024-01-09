import "./OurWork.css";
import Greenbtn from "../components/Greenbtn";
import Transparentbtn from "../components/Transparentbtn";
import Image from "next/image";
import Link from "next/link";
function OurWork() {
  const works = [
    {
      imageSrc: "/Assets/Home/Work1.JPG",
      title: "DRONE VIDEOS",
      link: "https://dronevideos.com/",
      description:
        "OctalCode seamlessly blended creativity and functionality to bring the aerial cinematography services to life online. From captivating visuals to user-friendly navigation, this website reflects our commitment to delivering impactful digital experiences.",
    },
    {
      imageSrc: "/Assets/Home/Work2.JPG",
      link: "https://www.pooltime.se/",
      title: "POOL TIME",
      description:
        "OctalCode crafted an immersive online experience that mirrors the excellence of our client's aquatic creations. From sleek design elements to seamless navigation, our digital dive showcases the artistry and expertise of PoolTime.",
    },
    {
      imageSrc: "/Assets/Home/Work3.JPG",
      link: "https://www.daileybythesea.com/",
      title: "REALTY ONE GROUP",
      description:
        "OctalCode meticulously designed and developed a website that mirrors the sophistication and diversity of Realty One Group's property portfolio. From intuitive property search to immersive visual tours, our digital architecture ensures a seamless online experience for potential buyers and investors.",
    },
    {
      imageSrc: "/Assets/Home/Work4.JPG",
      link: "https://www.butcherbox.com/",
      title: "BUTCHER BOX",
      description:
        "OctalCode blended technology to craft an online platform that captures the essence of ButcherBox's culinary excellence. From mouth-watering visuals to a seamless ordering process, our digital recipe enhances the online journey for meat enthusiasts. Take a bite into innovation with our collaboration on ButcherBox's digital presence.",
    },
  ];
  return (
    <div className="OurWork" id="Work">
      <div>
        <p className="Heading" style={{ color: "white" }}>
          our work
        </p>
      </div>
      <div className="workCardsContainer">
        {works.map((work, index) => (
          <div className="workcard" key={index}>
            <div className="cardTop">
              <Link href={work.link} target="_blank">
                <div className="cardImage">
                  <Image
                    src={work.imageSrc}
                    alt="/"
                    width={500}
                    height={269}
                    style={{ borderRadius: "15px" }}
                  />
                </div>
              </Link>
            </div>
            <div className="cardBottom">
              <div className="cardLogo">
                <p
                  style={{
                    color: "#0388ca",
                    fontWeight: "bold",
                  }}
                >
                  <Link href={work.link} target="_blank">
                    {work.title}
                  </Link>
                </p>
              </div>
              <div>
                <p className="cardTextContent">{work.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="buttons">
        <Greenbtn buttonText="see all work" href="/work" />
        <Transparentbtn TbtnText="contact us" href="/Contact" />
      </div>
    </div>
  );
}

export default OurWork;
