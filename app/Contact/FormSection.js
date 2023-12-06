import Image from "next/image";
import "./FormSection.css";
import Greenbtn from "../components/Greenbtn";
function FormSection() {
  const lists = [
    {
      imageSrc: "/Assets/ContactUs/Tick.svg",
      text: "Web Development",
    },
    {
      imageSrc: "/Assets/ContactUs/Tick.svg",
      text: "Mobile Development",
    },
    {
      imageSrc: "/Assets/ContactUs/Tick.svg",
      text: "DevOps",
    },
    {
      imageSrc: "/Assets/ContactUs/Tick.svg",
      text: "UI/UX Design",
    },
    {
      imageSrc: "/Assets/ContactUs/Tick.svg",
      text: "Software Testing",
    },
    {
      imageSrc: "/Assets/ContactUs/Tick.svg",
      text: "e-Commerce Development",
    },
  ];
  const Logos = [
    {
      imageSrc: "/Assets/Work/CardOneLogo.svg",
    },
    {
      imageSrc: "/Assets/Work/CardOneLogo.svg",
    },
    {
      imageSrc: "/Assets/Work/CardOneLogo.svg",
    },
    {
      imageSrc: "/Assets/Work/CardOneLogo.svg",
    },
  ];
  return (
    <div className="Contact">
      <div className="firstSection">
        <div className="listSection">
          <p className="listHeading">
            we are all about business tech and growth
          </p>
          <div className="list">
            {lists.map((list, index) => (
              <div className="listContent" key={index}>
                <div className="tick">
                  <Image src={list.imageSrc} alt="/" width={18} height={18} />
                </div>
                <div className="listText">{list.text}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="companiesInfo">
          <div className="companiesInfoHeading">
            <p className="companiesInfoHeadingText">trusted by</p>
          </div>
          <div className="companiesLogos">
            {Logos.map((Logo, index) => (
              <div className="companyLogo" key={index}>
                <Image src={Logo.imageSrc} alt="/" height={150} width={150} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="formSection">
        <div className="formHeading">
          <p className="formHeadingText">tell us about you.</p>
        </div>
        <div className="form">
          <div className="formName">
            <input type="text" className="nameInput" placeholder="YOUR NAME" />
          </div>
          <div className="formName">
            <input
              type="text"
              className="nameInput"
              placeholder="COMPANY NAME"
            />
          </div>
          <div className="formName">
            <input
              type="text"
              className="nameInput"
              placeholder="MONTHLY BUDGET"
            />
          </div>
          <div className="formName">
            <textarea
              type="text"
              className="message"
              placeholder="YOUR MESSAGE"
            />
          </div>
        </div>
        <Greenbtn buttonText="send message" width={"100%"} href="href" />
      </div>
    </div>
  );
}

export default FormSection;
