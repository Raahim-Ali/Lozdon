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
            <p style={{ fontSize: "48px", lineHeight: "60px" }}>{subHeading}</p>
          </div>
          <div className="text1">
            <p style={{ fontSize: "18px", lineHeight: "30px" }}>{text}</p>
          </div>
        </div>
        <div className="imageSection">
          <img
            src={imageSrc}
            className="heroImg"
            style={{ borderTopLeftRadius: "55px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
