import "./Touch.css";
import Image from "next/image";
function Touch() {
  const touchCards = [
    {
      imageSrc: "/Assets/ContactUs/mail.svg",
      title: "Chat us",
      description: "Speak to our friendly team.",
      detail: "info@octalcode.ie",
    },
    {
      imageSrc: "/Assets/ContactUs/visit.svg",
      title: "Visit us",
      description: "Visit our office HQ.",
      detail: "4 Herbert PlaceDublin 2Ireland",
    },
    {
      imageSrc: "/Assets/ContactUs/call.svg",
      title: "Call us",
      description: "Mon-Fri from 8am to 5pm.",
      detail: "+353 (0)1 531 3055",
    },
  ];
  return (
    <div className="Touch">
      <div className="touchHeading">
        <p className="touchHeadingText">
          get in touch with us and let&apos;s talk
        </p>
      </div>
      <div className="touchCardsContainer">
        {touchCards.map((touch, index) => (
          <div className="touchCard" key={index}>
            <div className="touchCardLogo">
              <Image src={touch.imageSrc} alt="/" width={50} height={50} />
            </div>
            <div className="touchCardTitle">
              <p className="touchCardTitleText">{touch.title}</p>
            </div>
            <div className="touchCardDescription">
              <p className="touchCardDescriptionText">{touch.description}</p>
            </div>
            <div className="touchCardDetail">
              <p className="touchCardDetailText">{touch.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Touch;
