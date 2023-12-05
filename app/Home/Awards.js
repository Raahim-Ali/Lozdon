import "./Awards.css";
import Image from "next/image";

function Awards() {
  const awards = [
    {
      imageSrc: "/Assets/Home/award1.svg",
      awardName: "Clutch Awards",
      description: "Best Mobile and Web Development Agency of the Year 2023",
    },
    {
      imageSrc: "/Assets/Home/award2.svg",
      awardName: "Pasha Awards",
      description: "Best Mobile and Web Development Agency of the Year 2023",
    },
    {
      imageSrc: "/Assets/Home/award3.svg",
      awardName: "Upwork",
      description: "Best Mobile and Web Development Agency of the Year 2023",
    },
  ];
  return (
    <div className="Awards">
      <div className="awardsContainer">
        <div className="awardsTextMain">
          <p className="awardsHeading">We are proud to be recognized at</p>
          <p className="awardsText">
            Here is list of the companies we have worked with, always excited to
            collaborate with amazing people in tech.
          </p>
        </div>
        <div className="awardsList">
          {awards.map((award, index) => (
            <div className="awardCard" key={index}>
              <div className="awardImg">
                <Image src={award.imageSrc} alt="/" width={120} height={150} />
              </div>
              <div className="awardDetails">
                <div className="awardName">
                  <p className="name">{award.awardName}</p>
                  <p className="description">{award.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Awards;
