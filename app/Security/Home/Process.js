import Transparentbtn from "@/app/components/Transparentbtn";
import "./Process.css";
import Image from "next/image";
function Process() {
  return (
    <div className="Process">
      <div>
        <p className="Heading">Securing Your Future</p>
        <p className="Heading2">
          Our Comprehensive Approach to Robust Security
        </p>
      </div>
      <div className="ProcessContainer">
        <div className="ProcessCard">
          <div className="ProcessTitle">
            <p>Assessment & Vulnerability Analysis</p>
          </div>
          <div className="ProcessDescription">
            <p>
              Our security process begins with a thorough assessment and
              vulnerability analysis. We meticulously identify potential
              weaknesses in your digital infrastructure and evaluate risks to
              understand where improvements are needed. By examining current
              security measures and potential threats, we create a detailed
              picture of your security posture. This foundational step enables
              us to tailor our approach and deploy the most effective solutions
              to safeguard your assets.
            </p>
          </div>
        </div>
        <div className="ProcessCard">
          <div className="ProcessTitle">
            <p>Implementation of Security Measures</p>
          </div>

          <div className="ProcessDescription">
            <p>
              Once vulnerabilities are identified, we implement robust security
              measures designed to protect your digital assets. Our team deploys
              advanced security technologies and configurations to create a
              fortified defense against threats. We ensure that all measures
              comply with industry standards and regulatory requirements,
              offering a comprehensive shield against potential breaches. This
              proactive approach helps to secure your systems and maintain the
              integrity of your data.
            </p>
          </div>
        </div>
        <div className="ProcessCard">
          <div className="ProcessTitle">
            <p>Ongoing Monitoring & Response</p>
          </div>

          <div className="ProcessDescription">
            <p>
              Security is not a one-time setup but an ongoing commitment. Our
              process includes continuous monitoring of your systems to detect
              any suspicious activities or compliance issues in real-time. We
              provide prompt incident response to address and mitigate any
              security breaches swiftly. Regular updates and adjustments ensure
              that your security measures remain effective and adapt to evolving
              threats, guaranteeing long-term protection and peace of mind.
            </p>
          </div>
        </div>
      </div>
      <div style={{ paddingTop: "40px" }}>
        <Transparentbtn TbtnText="CONTACT US" href="/Contact" />
      </div>
    </div>
  );
}

export default Process;
