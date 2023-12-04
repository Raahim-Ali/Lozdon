import React from "react";
import Cards from "./container/Cards";
import ImageAndDiv from "./container/ImageAndDiv";
import Clients from "../work/Components/Clients";

export default function ContentAfterHeroSection() {
  return (
    <>
      <div>
        <Cards />
        <ImageAndDiv />
        <Clients />
      </div>
    </>
  );
}
