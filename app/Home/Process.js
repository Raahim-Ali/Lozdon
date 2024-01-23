import Greenbtn from "../components/Greenbtn";
import "./Process.css";
import Image from "next/image";
function Process() {
  return (
    <div className="Process">
      <div>
        <p className="ProcessHeading">our process</p>
      </div>
      <div className="ProcessContainer">
        <div className="ProcessCard">
          <div>
            <Image
              src="/Assets/Home/Process1.svg"
              alt=""
              width={70}
              height={70}
            />
          </div>
          <div className="ProcessTitle">
            <p>explore together</p>
          </div>
          <div className="ProcessDescription">
            <p>Embark on the Journey of Discovery</p>
          </div>
        </div>
        <div className="ProcessCard">
          <div>
            <Image
              src="/Assets/Home/Process2.svg"
              alt=""
              width={70}
              height={70}
            />
          </div>
          <div className="ProcessTitle">
            <p>define strategy</p>
          </div>
          <div className="ProcessDescription">
            <p>Crafting Precision, Defining Success</p>
          </div>
        </div>
        <div className="ProcessCard">
          <div>
            <Image
              src="/Assets/Home/Process3.svg"
              alt=""
              width={70}
              height={70}
            />
          </div>
          <div className="ProcessTitle">
            <p>Build & iterate</p>
          </div>
          <div className="ProcessDescription">
            <p>Iterate Towards Perfection</p>
          </div>
        </div>
      </div>
      <div className="Processbuttons">
        <Greenbtn buttonText="start your journey with us" href="/Contact" />
      </div>
    </div>
  );
}

export default Process;
