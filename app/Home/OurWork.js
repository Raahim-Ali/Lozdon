import "./OurWork.css";
import Greenbtn from "../components/Greenbtn";
import Transparentbtn from "../components/Transparentbtn";
import Image from "next/image";
function OurWork() {
  const works = [
    {
      imageSrc: "/Assets/Home/WorkCard.svg",
      imageSrc1: "/Assets/Home/WorkCardLogo.svg",
      description:
        "This metaphor implies every aspect of the industry in recent times",
    },
    {
      imageSrc: "/Assets/Home/WorkCard.svg",
      imageSrc1: "/Assets/Home/WorkCardLogo.svg",
      description:
        "This metaphor implies every aspect of the industry in recent times",
    },
    {
      imageSrc: "/Assets/Home/WorkCard.svg",
      imageSrc1: "/Assets/Home/WorkCardLogo.svg",
      description:
        "This metaphor implies every aspect of the industry in recent times",
    },
    {
      imageSrc: "/Assets/Home/WorkCard.svg",
      imageSrc1: "/Assets/Home/WorkCardLogo.svg",
      description:
        "This metaphor implies every aspect of the industry in recent times",
    },
  ];
  return (
    <div className="OurWork">
      <div>
        <p className="Heading2">our work</p>
      </div>
      <div className="workCardsContainer">
        {works.map((work, index) => (
          <div className="workcard" key={index}>
            <div className="cardTop">
              <div className="cardImage">
                <Image src={work.imageSrc} alt="/" width={395} height={269} />
              </div>
            </div>
            <div className="cardBottom">
              <div className="cardLogo">
                <Image src={work.imageSrc1} alt="/" width={115} height={45} />
              </div>
              <div className="cardText">
                <p className="cardTextContent">{work.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="buttons">
        <Greenbtn buttonText="see all services" href="/work" />
        <Transparentbtn buttonText="contact us" href="/Contact" />
      </div>
    </div>
  );
}

export default OurWork;
