"use client";
import "./Positions.css";
import Link from "next/link";

function Positions({ jobs }) {
  return (
    <div className="positions" id="positions">
      <div className="positionsContainer">
        <p className="Heading">Positions</p>
        <p className="subHeading">Latest Open Positions</p>
      </div>
      {jobs.slice(0, 3).map((job, index) => {
        const { jobTitle, excerpt, slug } = job.fields;
        return (
          <div className="jobCards">
            <div className="jobCardMain" key={job.fields.slug}>
              <div className="Jobcard">
                <p
                  className="cardTitle"
                  style={{ fontFamily: "Liason Caslon", fontSize: "20px" }}
                >
                  {jobTitle}
                </p>
                <div
                  className="cardDescription"
                  style={{ color: "#343434", fontSize: "16px" }}
                >
                  {excerpt}
                </div>
                <Link href={`/Careers/${slug}`}>
                  <button className="applyButton">Apply Now</button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Positions;
