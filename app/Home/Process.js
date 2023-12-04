import "./Process.css";
import Image from "next/image";
import EllipseLine from "../../public/Assets/Home/EllipseLine.svg";
function Process() {
  return (
    <div className="Process">
      <div>
        <p className="ProcessHeading">our process</p>
      </div>
      <Image className="ElipseLine" src={EllipseLine} alt="/" />
      <div className="ProcessContainer">
        <div className="ProcessCard">
          <div>
            <p className="ProcessNumber">01</p>
          </div>
          <div className="ProcessTitle">
            <p>explore idea</p>
          </div>
          <div className="ProcessDescription">
            <p>
              This metaphor implies every aspect of the industry in recent times
            </p>
          </div>
        </div>
        <div className="ProcessCard">
          <div>
            <p className="ProcessNumber">02</p>
          </div>
          <div className="ProcessTitle">
            <p>choose technology</p>
          </div>
          <div className="ProcessDescription">
            <p>
              This metaphor implies every aspect of the industry in recent times
            </p>
          </div>
        </div>
        <div className="ProcessCard">
          <div>
            <p className="ProcessNumber">03</p>
          </div>
          <div className="ProcessTitle">
            <p>design</p>
          </div>
          <div className="ProcessDescription">
            <p>
              This metaphor implies every aspect of the industry in recent times
            </p>
          </div>
        </div>
        <div className="ProcessCard">
          <div>
            <p className="ProcessNumber">04</p>
          </div>
          <div className="ProcessTitle">
            <p>develop</p>
          </div>
          <div className="ProcessDescription">
            <p>
              This metaphor implies every aspect of the industry in recent times
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Process;
