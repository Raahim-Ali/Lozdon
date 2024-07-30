import "./Benefits.css";
function Benefits() {
  const benefits = [
    {
      icon: "/Assets/Careers/Team.svg",
      heading: "Team Work",
      CardText:
        "Integris provides a culture that fosters teamwork and collaboration. Our diverse team works seamlessly together to achieve excellence in trading, ensuring collective success and mutual growth. We are dedicated to nurturing careers that pave the way for a secure future.",
    },
    {
      icon: "/Assets/Careers/Secure.svg",
      heading: "Secured Future",
      CardText:
        "At Integris, we offer robust training programs, competitive benefits, and growth opportunities to ensure our employees thrive both professionally and personally. Join us to build a stable and fulfilling career with a company committed to your success and well-being.",
    },
    {
      icon: "/Assets/Careers/Learn.svg",
      heading: "Learning Opportunity",
      CardText:
        "Explore limitless learning opportunities with Integris, where we empower you to expand your knowledge and skills in the dynamic field of commodity trading. We provide comprehensive training and hands-on experience to support your professional development every step of the way.",
    },
    {
      icon: "/Assets/Careers/Upgrade.svg",
      heading: "Upgrade Skills",
      CardText:
        "Integris is committed to enhancing your skills through continuous mentorship and exposure to cutting-edge industry practices. By joining us, you will elevate your career and stay ahead in the competitive global marketplace, making a meaningful impact.",
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
              By joining our team at Integris you will be part of a company that
              values innovation, diversity, and excellence. With competitive
              benefits, a stimulating work environment, and opportunities for
              career advancement, you can unleash your potential and shape the
              future of commodity trading with us.
            </p>
          </div>
          <div className="benefitsCards">
            {benefits.map((card, index) => (
              <div className="cardMain" key={index}>
                <div className="benefitcard">
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
