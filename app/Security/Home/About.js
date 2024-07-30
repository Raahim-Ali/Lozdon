import "./About.css";
import Transparentbtn from "@/app/components/Transparentbtn";

function Services() {
  return (
    <div className="Services" id="Services">
      <div className="ServicesContainer">
        <div className="textContent">
          <p className="Heading">who we are</p>
          <p className="Heading2"> Your Shield of Security and Trust</p>
          <p className="text" style={{ paddingBottom: "25px" }}>
            Welcome to Lozdon, your trusted partner in comprehensive security
            solutions. At Lozdon, we are dedicated to safeguarding what matters
            most to you. Whether it&apos;s your business, home, or valuable
            assets. Founded on a commitment to excellence and a passion for
            security.{" "}
          </p>
          <p className="text">
            Lozdon offers a range of top-notch security services tailored to
            meet the unique needs of each client. Our team of highly trained
            professionals brings years of experience and expertise to every
            project, ensuring that our security solutions are both effective and
            reliable.
          </p>
          <div style={{ paddingTop: "40px" }}>
            <Transparentbtn TbtnText="LEARN MORE" href="./about-us" />
          </div>
        </div>
        <div className="roundedImage">
          <img
            className="roundBorderImage"
            src="/Assets/Home/aboutSecurity.png"
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
