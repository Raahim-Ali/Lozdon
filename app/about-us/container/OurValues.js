import Image from "next/image";
import React from "react";
import "./OurValues.css";
const cardData = [
  {
    imageSrc: "/Assets/aboutUs/haveFaith.svg",
    title: "Innovation Excellence",
    description:
      "We foster a culture of relentless innovation, pushing boundaries to redefine industry standards with cutting-edge solutions.",
  },

  {
    imageSrc: "/Assets/aboutUs/haveFaith.svg",
    title: "Collaborative Synergy",
    description:
      "We thrive on collaborative synergy, where diverse talents unite for success. Teamwork is our cornerstone.",
  },
  {
    imageSrc: "/Assets/aboutUs/haveFaith.svg",
    title: "Agile Mindset",
    description:
      "Adapting swiftly in tech's dynamic landscape, our agile mindset ensures continuous learning, innovation, and staying ahead.",
  },

  // Add more objects for additional cards
];
export default function OurValues() {
  return (
    <>
      <div className="Values">
        <div>
          <p className="Heading">our values</p>
        </div>
        <div className="ValuesContainer">
          {cardData.map((cardData, index) => (
            <div className="cardMain" key={index}>
              <div className="card">
                <Image
                  src={cardData.imageSrc}
                  style={{ marginBottom: "20px" }}
                  width={50}
                  height={50}
                />
                <p className="cardTitle">{cardData.title}</p>
                <p className="cardDescription">{cardData.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
