import React from "react";
import ImageAndDiv from "./container/ImageAndDiv";
import Clients from "../../work/Components/Clients";
import Idea from "@/app/Home/Idea";

export default function ContentAfterHeroSection() {
  return (
    <>
      <div>
        {/* <Cards /> */}
        <ImageAndDiv />
        <Idea />
      </div>
    </>
  );
}
