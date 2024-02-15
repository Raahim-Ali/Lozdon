import React from "react";
import ImageAndDiv from "./container/ImageAndDiv";
import Idea from "../../Home/Idea";
import LatestTechnologies from "./container/LatestTechnologies";

export default function ContentAfterHeroSection() {
  return (
    <>
      <div>
        <LatestTechnologies />
        <ImageAndDiv />
        <Idea />
      </div>
    </>
  );
}
