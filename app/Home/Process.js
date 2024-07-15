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
            <p>Discovery Phase</p>
          </div>
          <div className="ProcessDescription">
            <p>
              Integris International FZE is a leading international trading
              company specializing in petrochemicals. We have years of
              experience in both importing and exporting petrochemicals and raw
              products, such as Linear Alkyl Benzene, Xylene, Methanol, Rubbers,
              Phthalic Anhydride, and more.
            </p>
          </div>
        </div>
        <div className="ProcessCard">
          <div className="ProcessTitle">
            <p>Define Problem</p>
          </div>

          <div className="ProcessDescription">
            <p>
              Integris International FZE is a leading international trading
              company specializing in petrochemicals. We have years of
              experience in both importing and exporting petrochemicals and raw
              products, such as Linear Alkyl Benzene, Xylene, Methanol, Rubbers,
              Phthalic Anhydride, and more.
            </p>
          </div>
        </div>
        <div className="ProcessCard">
          <div className="ProcessTitle">
            <p>Problem Solving</p>
          </div>

          <div className="ProcessDescription">
            <p>
              Integris International FZE is a leading international trading
              company specializing in petrochemicals. We have years of
              experience in both importing and exporting petrochemicals and raw
              products, such as Linear Alkyl Benzene, Xylene, Methanol, Rubbers,
              Phthalic Anhydride, and more.
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
