import React from "react";
import CustomerCount from "./container/CustomerCount";
import OurServices from "./container/OurServices";
import TakeAdvantage from "./container/TakeAdvantage";

export default function ContentAfterHeroSection() {
  return (
    <>
      <div>
        <CustomerCount />
        <OurServices />
        <TakeAdvantage />
      </div>
    </>
  );
}
