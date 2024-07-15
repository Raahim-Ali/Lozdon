import React from "react";
import "./HeroSection.css";
import "../Home/About.css";

function HeroSection({ heading, subHeading, text, imageSrc }) {
  return (
    <div>
      <div className="heroSection">
        <div className="textSection" style={{ paddingTop: "30px" }}>
          <div className="Heading">
            <p>{heading}</p>
          </div>
          <div className="Heading2" style={{ paddingBottom: "20px" }}>
            <p style={{ fontSize: "48px", width: "500px", lineHeight: "60px" }}>
              {subHeading}
            </p>
          </div>
          <div className="text">
            <p>{text}</p>
          </div>
        </div>
        <div className="imageSection">
          <img src={imageSrc} style={{ borderTopLeftRadius: "55px" }} />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
