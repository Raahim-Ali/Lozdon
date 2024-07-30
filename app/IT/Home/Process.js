import Greenbtn from "@/app/components/Transparentbtn";

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
            <p>Expertise and Innovation</p>
          </div>
          <div className="ProcessDescription">
            <p>
              At Octal Securities, we are renowned for delivering cutting-edge
              IT solutions that drive business success. We leverage our
              extensive industry expertise and advanced technologies to provide
              innovative solutions tailored to your specific needs. Our
              commitment to excellence is reflected in our proactive approach to
              problem-solving and our dedication to staying at the forefront of
              technological advancements.
            </p>
          </div>
        </div>
        <div className="ProcessCard">
          <div className="ProcessTitle">
            <p>Client-Centric Solutions</p>
          </div>

          <div className="ProcessDescription">
            <p>
              Octal Securities is dedicated to understanding and addressing the
              unique requirements of each client. We offer a range of IT
              services designed to optimize performance and support growth. From
              bespoke software development to comprehensive IT infrastructure
              management, our solutions are crafted to enhance your operational
              capabilities and drive measurable results.
            </p>
          </div>
        </div>
        <div className="ProcessCard">
          <div className="ProcessTitle">
            <p>Compliance and Integrity</p>
          </div>

          <div className="ProcessDescription">
            <p>
              Octal Securities adheres to all relevant legislative and
              regulatory standards, ensuring that our IT services comply with
              industry best practices and legal requirements. We uphold the
              highest standards of integrity and transparency in our operations,
              enforcing rigorous policies against any form of malpractice. Our
              commitment to compliance protects your business and fosters a
              trustworthy partnership.
            </p>
          </div>
        </div>
      </div>
      <div style={{ paddingTop: "40px" }}>
        <Transparentbtn TbtnText="CONTACT US" href="/IT/Contact" />
      </div>
    </div>
  );
}

export default Process;
