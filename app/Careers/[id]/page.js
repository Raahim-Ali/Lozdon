"use client";
import HeroSection from "@/app/Products/HeroSection";
import { useEffect, useState } from "react";
import "./JobDetailss.css";
import Transparentbtn from "@/app/components/Transparentbtn";

function JobDetails({ params }) {
  const id = params.id;
  const [jobDetails, setJobDetails] = useState(null);

  useEffect(() => {
    console.log("params", params);
    const fetchJobDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost/rar/wp-json/wp/v2/jobs/${id}`
        );
        console.log("response", response);
        if (!response.ok) {
          throw new Error("Failed to fetch job details");
        }
        const data = await response.json();
        setJobDetails(data);
      } catch (error) {
        console.error("Error fetching job details:", error);
      }
    };

    if (id) {
      fetchJobDetails();
    }
  }, [id]);

  if (!jobDetails) {
    return <div>Loading job details...</div>;
  }

  return (
    <>
      <HeroSection
        heading="job details"
        subHeading={jobDetails.title.rendered}
        text={jobDetails.position_description}
      />
      <div className="JobDetailsContainer">
        <div className="jobDetails">
          <p className="subHeading">Who are we Looking for</p>
          <p className="text">{jobDetails.position_description}</p>
        </div>
        <div className="jobDetails">
          <p className="subHeading">What you will be doing</p>
          <p className="text">{jobDetails.position_responsibilities}</p>
        </div>
        <div className="jobDetails">
          <p className="subHeading">Benefits of joining Integris </p>
          <p className="text">{jobDetails.position_job_benefits}</p>
        </div>

        <Transparentbtn TbtnText="Apply Now" href="#" />
      </div>
    </>
  );
}

export default JobDetails;
