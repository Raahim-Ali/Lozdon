import React from "react";
import OurStory from "./container/OurStory";
import CustomerCount from "../single-service/container/CustomerCount";
import AboutClient from "./container/AboutClient";
import OurValues from "./container/OurValues";
// import OurTeam from "./container/OurTeam";
import Clients from "../work/Components/Clients";

export default function ContentAfterHeroSection() {
  return (
    <>
      <OurStory />
      <CustomerCount />
      <AboutClient />
      <OurValues />
      {/* <OurTeam /> */}
      <Clients />
    </>
  );
}
