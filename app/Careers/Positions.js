"use client";
import { useEffect, useState } from "react";
import "./Positions.css";
import Link from "next/link";

function Positions() {
  const [jobOpenings, setJobOpenings] = useState([]);

  useEffect(() => {
    fetchJobOpenings();
  }, []);

  const fetchJobOpenings = async () => {
    try {
      const response = await fetch("http://localhost/rar/wp-json/wp/v2/jobs");
      if (!response.ok) {
        throw new Error("Failed to fetch job openings");
      }
      const data = await response.json();
      setJobOpenings(data);
    } catch (error) {
      console.error("Error fetching job openings:", error);
    }
  };

  return (
    <div className="positions">
      <div className="positionsContainer">
        <p className="Heading">Positions</p>
        <p className="subHeading">Latest Open Positions</p>
      </div>
      <div className="jobCards">
        {jobOpenings.map((opening, index) => (
          <div className="jobCardMain" key={index}>
            <div className="Jobcard">
              <p
                className="cardTitle"
                style={{ fontFamily: "Liason Caslon", fontSize: "24px" }}
              >
                {opening.title.rendered}
              </p>
              <div
                className="cardDescription"
                dangerouslySetInnerHTML={{
                  __html: opening.position_description,
                }}
                style={{ color: "#343434", fontSize: "18px" }}
              />
              <Link href={`/Careers/${opening.id}`}>
                <button className="applyButton">Apply Now</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Positions;
