import "./PressSection.css";
import Washington from "../../../public/Assets/Work/Washington.svg";
import TechCrunch from "../../../public/Assets/Work/TechCrunch.svg";
import Bloomberg from "../../../public/Assets/Work/Bloomberg.svg";
import Gizmodo from "../../../public/Assets/Work/Gizmodo.svg";
import Forbes from "../../../public/Assets/Work/Forbes.svg";
import Image from "next/image";
export default function PressSection() {
  return (
    <div className="press-main">
      <p className="press-text">Worked with amazing companies</p>
      <div className="companies-logos">
        <Image src={Washington} />
        <Image src={TechCrunch} />
        <Image src={Bloomberg} />
        <Image src={Gizmodo} />
        <Image src={Forbes} />
      </div>
    </div>
  );
}
