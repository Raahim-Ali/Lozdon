import Greenbtn from "@/app/components/Greenbtn";
import Transparentbtn from "@/app/components/Transparentbtn";
import "./Process.css";
import Image from "next/image";
function Process() {
  return (
    <div className="Process">
      <div>
        <p className="Heading">how we do</p>
        <p className="Heading2">our successfull process</p>
      </div>
      <div className="ProcessContainer">
        <div className="ProcessCard">
          <div className="ProcessTitle">
            <p>Our Commitment</p>
          </div>
          <div className="ProcessDescription">
            <p>
              Octal Securities is renowned for delivering exceptional commercial
              cleaning services. We build strong, long-lasting relationships
              with our clients and manage cleaning operations with the utmost
              efficiency. Our commitment to excellence is reflected in our
              adherence to the 10 principles of the UN Global Compact, ensuring
              that our operations align with international standards and meet
              each client&apos;s specific country requirements.
            </p>
          </div>
        </div>
        <div className="ProcessCard">
          <div className="ProcessTitle">
            <p> Our Approach</p>
          </div>

          <div className="ProcessDescription">
            <p>
              Octal Securities offers sustainable cleaning services that
              prioritize environmental protection while bridging the gap between
              global demand and effective cleaning solutions. Our comprehensive
              range of services includes everything from routine cleaning to
              specialized sanitation, designed to meet the highest standards of
              cleanliness and efficiency. We are dedicated to delivering
              effective services that meet the needs of our partners and
              clients.
            </p>
          </div>
        </div>
        <div className="ProcessCard">
          <div className="ProcessTitle">
            <p>Compliance and Integrity</p>
          </div>

          <div className="ProcessDescription">
            <p>
              Octal Securities adheres to all applicable legislative and
              regulatory requirements, including international standards, for
              every cleaning activity and service we provide globally. To
              protect our clients and uphold human rights, we strictly follow
              the UN Global Compact Ten Principles. Additionally, we enforce
              rigorous policies against bribery and corruption, ensuring full
              compliance with relevant legislation.
            </p>
          </div>
        </div>
      </div>
      <div style={{ paddingTop: "40px" }}>
        <Transparentbtn TbtnText="CONTACT US" href="/Commercial/Contact" />
      </div>
    </div>
  );
}

export default Process;
