import React from "react";
import CustomerCount from "./container/CustomerCount";
import OurServices from "./container/OurServices";
import TakeAdvantage from "./container/TakeAdvantage";
import LatestTechnologies from "./container/LatestTechnologies";
import HealthTech from "./container/HealthTech";
import Clients from "../work/Components/Clients";
import Services from "../Home/About";
// import "../Home/Services.css";
export default function ContentAfterHeroSection() {
  return (
    <>
      <div>
        <CustomerCount />
        <Services />
        <TakeAdvantage />
        <LatestTechnologies />
        <HealthTech />
        <div>
          <Clients />
        </div>
      </div>
    </>
  );
}
