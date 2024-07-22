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
        text="In the international market, Integris International FZE is a specialist in the import and export of petrochemical."
        imageSrc="/Assets/Careers/heroSectionImg.svg"
      />
      <Benefits />
      <Positions jobs={fetchedJobs} />
    </>
  );
}

export default Careers;
