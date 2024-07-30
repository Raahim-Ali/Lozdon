"use client";
import HeroSection from "../Products/HeroSection";
import Benefits from "./Benefits";
import Positions from "./Positions";
import { client } from "../Library/contentful";
import { useEffect, useState } from "react";

function Careers() {
  const [fetchedJobs, setFetchedJobs] = useState([]);

  useEffect(() => {
    client.getEntries({ content_type: "careers" }).then((res) => {
      console.log("res", res);
      setFetchedJobs(res.items);
    });
  }, []);
  return (
    <>
      <HeroSection
        heading="Careers"
        subHeading="Be a part of Integris"
        text="At Integris, we prioritize our employees' growth and well-being, offering continuous support and guidance. Through regular training sessions, we empower our team to excel and evolve professionally, ensuring their success aligns with our company's values."
        imageSrc="/Assets/Careers/heroSectionImg.svg"
      />
      <Benefits />
      <Positions jobs={fetchedJobs} />
    </>
  );
}

export default Careers;
