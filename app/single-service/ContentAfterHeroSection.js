import React from "react";
import CustomerCount from "./container/CustomerCount";
import OurServices from "./container/OurServices";
import TakeAdvantage from "./container/TakeAdvantage";
import LatestTechnologies from "./container/LatestTechnologies";
import HealthTech from "./container/HealthTech";

export default function ContentAfterHeroSection() {
  return (
    <>
      <div>
        <CustomerCount />
        <OurServices />
        <TakeAdvantage />
        <LatestTechnologies />
        <HealthTech />
      </div>
    </>
  );
}
