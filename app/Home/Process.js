import Greenbtn from "../components/Greenbtn";
import Transparentbtn from "../components/Transparentbtn";
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
            <p>Responsibility</p>
          </div>
          <div className="ProcessDescription">
            <p>
              Integris is renowned for providing exceptional trading services
              for its commodities. We maintain strong, long-lasting
              relationships with our clients and manage physical assets
              effectively. Our commitment to excellence is demonstrated by
              aligning our operations with the 10 principles of the UN Global
              Compact, ensuring efficiency and adherence to international
              standards based on each client's country requirements.
            </p>
          </div>
        </div>
        <div className="ProcessCard">
          <div className="ProcessTitle">
            <p>Operations</p>
          </div>

          <div className="ProcessDescription">
            <p>
              Integris offers sustainable services that protect the environment
              by bridging the gap between global demand and supply. Our
              extensive trading services encompass fertilizers and petrochemical
              products. We are dedicated to delivering effective and efficient
              services to our partners, ensuring their needs are met with the
              highest standards.
            </p>
          </div>
        </div>
        <div className="ProcessCard">
          <div className="ProcessTitle">
            <p>Laws and Regulations</p>
          </div>

          <div className="ProcessDescription">
            <p>
              Integris adheres to all applicable legislative and regulatory
              regimes, including international sanctions, for every trading
              activity and commodity service we provide globally. To protect our
              partners and uphold human rights, we strictly follow the UN Global
              Compact Ten Principles. Additionally, we enforce rigorous policies
              against bribery and corruption, in full compliance with relevant
              legislation.
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
