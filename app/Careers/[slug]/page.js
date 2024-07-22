"use client";
import React from "react";
import HeroSection from "@/app/Products/HeroSection";
import { useEffect, useState } from "react";
import "./JobDetailss.css";
import { client } from "../../Library/contentful";
import MyForm from "./applyForm";

function JobDetails({ params }) {
  const [jobDetail, setjobDetail] = useState([]);
  console.log("params", params);
  useEffect(() => {
    const { slug } = params;
    client
      .getEntries({
        content_type: "careers",
        "fields.slug": slug,
      })
      .then((res) => {
        console.log("response", res);
        setjobDetail(res.items);
      });
    console.log("jobDetail", jobDetail);
  }, []);

  if (!jobDetail.length) {
    return;
  }

  const { jobTitle, excerpt, qualities, responsibilities, benefits } =
    jobDetail[0].fields;
  if (!jobDetail) {
    return;
  }

  return (
    <>
      <HeroSection heading="job details" subHeading={jobTitle} text={excerpt} />
      <div className="JobDetailsContainer">
        <div className="jobDetails">
          <p className="subHeading" style={{ fontWeight: "400px" }}>
            Who are we Looking for
          </p>
          <p className="text">{qualities}</p>
        </div>
        <div className="jobDetails">
          <p className="subHeading">What you will be doing</p>
          <p className="text">{responsibilities}</p>
        </div>
        <div className="jobDetails">
          <p className="subHeading">Benefits of joining Integris </p>
          <p className="text">{benefits}</p>
        </div>
        <MyForm position={jobTitle} />
      </div>
    </>
  );
}

export default JobDetails;
