import "./CompanyOne.css";
import Image from "next/image";
import Logo from "../../../public/Assets/Work/CardOneLogo.svg";
import LearnMore from "../../../public/Assets/Work/LearnMore.svg";
import CardImage from "../../../public/Assets/Work/CardOneImage.svg";
function CompanyOne() {
  return (
    <div className="main">
      <div className="Card">
        <div className="Content">
          <div className="ContentText">
            <div className="logo">
              <Image src={Logo} alt="/" />
            </div>
            <div className="heading">
              <p>Vehicle Sale System</p>
              <p>Enable Digital Record and Payments</p>
            </div>
            <div className="text">
              <p>
                We advise property owners in all issues in respect of such works
                and entitlements in respect of boundaries. We assess the
                location of the boundaries and advise.
              </p>
            </div>
            <div className="LearnMore">
              <p className="LearnMoreText">LEARN MORE</p>
              <Image style={{ marginLeft: "10px" }} src={LearnMore} alt="/" />
            </div>
          </div>
          <Image src={CardImage} alt="/" />
        </div>
      </div>
    </div>
  );
}

export default CompanyOne;
