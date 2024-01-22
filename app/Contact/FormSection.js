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
      imageSrc: "/Assets/Work/Work1Logo.JPG",
    },
    {
      imageSrc: "/Assets/Work/Work3Logo.JPG",
    },
    {
      imageSrc: "/Assets/Work/Work5Logo.JPG",
    },
    {
      imageSrc: "/Assets/Work/Work2Logo.JPG",
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
                <Image
                  src={Logo.imageSrc}
                  alt="/"
                  height={150}
                  width={150}
                  style={{ borderRadius: "10px" }}
                />
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
            <input
              type="text"
              className="nameInput"
              placeholder="YOUR NAME"
              required
            />
          </div>
          <div className="formName">
            <input
              type="text"
              className="nameInput"
              placeholder="COMPANY NAME"
              required
            />
          </div>
          <div className="formName">
            <input
              type="text"
              className="nameInput"
              placeholder="YOUR BUDGET"
              required
            />
          </div>
          <div className="formName">
            <select
              className="w-full p-2 mt-1 border rounded-md"
              style={{
                color: "black",
                fontWeight: 600,
                border: "1px solid #6161619c",
                background: "transparent",
              }}
              required
            >
              <option className="text-pTextColor" value="">
                Select Service
              </option>
              <option className="text-pTextColor" value="Web Development">
                Web Development
              </option>
              <option
                className="text-pTextColor"
                value="  Application Development"
              >
                Application Development
              </option>
              <option className="text-pTextColor" value="DevOps">
                DevOps
              </option>
              <option className="text-pTextColor" value="UI/UX">
                UI/UX
              </option>
              <option className="text-pTextColor" value="Software Testing">
                Software Testing
              </option>

              <option className="text-pTextColor" value=" Special Services">
                Special Services
              </option>

              <option className="text-pTextColor" value="Other Services">
                Other Services
              </option>
            </select>
          </div>
          <div className="formName">
            <textarea
              type="text"
              className="message"
              placeholder="YOUR MESSAGE"
              required
            />
          </div>
        </div>
        <Greenbtn buttonText="send message" width={"100%"} href="href" />
      </div>
    </div>
  );
}

export default FormSection;
