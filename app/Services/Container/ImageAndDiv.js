import Greenbtn from "@/app/Components/Greenbtn";
import Image from "next/image";
import React from "react";

export default function ImageAndDiv() {
  return (
    <>
      <div className="flex justify-center bg-newGrey pt-20 pb-20 pr-36 pl-36 gap-40">
        <div className="flex flex-col gap-8  ">
          <h5
            className="text-4xl font-bold uppercase  tracking-wider poppins"
            style={{ color: "#3B3F5C" }}
          >
            Web Development
          </h5>
          <h5
            className="text-2xl font-bold uppercase      tracking-wider poppins"
            style={{ color: "#3B3F5C" }}
          >
            Custom development to meet your needs
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400  text-lg inter">
            We advise property owners in all issues in respect of such works and
            entitlements in respect of boundari- -es. We assess the location of
            the boundaries and advise. We advise property owners in all issues
            in respect of such works and entitlements in respect of boundari-
            -es. We assess the location of the boundaries and advise.
          </p>
          <Greenbtn buttonText="Learn more" width="23%" />
        </div>
        <div className="flex justify-end">
          <Image
            src="/Assets/OurServices/WebDevelopment.svg"
            width="550"
            height="420"
          />
        </div>
      </div>
    </>
  );
}
