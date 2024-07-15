import "./Benefits.css";
function Benefits() {
  const benefits = [
    {
      icon: "/Assets/Careers/Team.svg",
      heading: "Team Work",
      CardText:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
    },
    {
      icon: "/Assets/Careers/Secure.svg",
      heading: "Secured Future",
      CardText:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
    },
    {
      icon: "/Assets/Careers/Learn.svg",
      heading: "Learning Opportunity",
      CardText:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
    },
    {
      icon: "/Assets/Careers/Upgrade.svg",
      heading: "Upgrade Skills",
      CardText:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
    },
  ];
  return (
    <>
      <div className="benefits">
        <div className="benefitsContainer">
          <div className="leftText">
            <p className="Heading">benefits</p>
            <p className="subHeading">Why you Should Join Our Awesome Team</p>
            <p className="benefitsText">
              We want to feel like home when you are working at JMC (Japan
              Marketing & Consultancy Limited) & for that we have curated a
              great set of benefits for you. It all starts with the free lunch!
            </p>
          </div>
          <div className="benefitsCards">
            {benefits.map((card, index) => (
              <div className="cardMain" key={index}>
                <div className="card">
                  <div className="cardIcon">
                    <img src={card.icon} alt="/" />
                  </div>
                  <p
                    className="cardTitle"
                    style={{ fontFamily: "Liason Caslon", fontSize: "24px" }}
                  >
                    {" "}
                    {card.heading}
                  </p>
                  <p
                    className="cardDescription"
                    style={{ color: "#343434", fontSize: "18px" }}
                  >
                    {card.CardText}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Benefits;
