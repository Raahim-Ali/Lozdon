import React from "react";
import "./HeroSection.css";

function HeroSection({ heading, subHeading, text, imageSrc }) {
  return (
    <div>
      <div className="heroSection">
        <div className="textSection" style={{ paddingTop: "30px" }}>
          <div>
            <p className="HeroHeading">{heading}</p>
          </div>
          <div style={{ paddingBottom: "20px" }}>
            <p className="HeroHeading2" style={{ lineHeight: "60px" }}>
              {subHeading}
            </p>
          </div>
          <div className="text1">
            <p style={{ fontSize: "1.1rem", lineHeight: "30px" }}>{text}</p>
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
