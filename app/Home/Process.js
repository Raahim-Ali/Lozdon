import Greenbtn from "../components/Greenbtn";
import "./Process.css";
import Image from "next/image";
import ProcessCards from "./ProcessCards";
function Process() {
  return (
    <div className="Process">
      <div>
        <p className="ProcessHeading">our process</p>
      </div>
      <ProcessCards />
      <div className="Processbuttons">
        <Greenbtn buttonText="start your journey with us" href="/Contact" />
      </div>
    </div>
  );
}

export default Process;
