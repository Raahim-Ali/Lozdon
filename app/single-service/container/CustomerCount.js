import React from "react";

export default function CustomerCount() {
  return (
    <div
      className="flex w-full justify-between pt-20 pb-20 pr-36 pl-36"
      style={{}}
    >
      <div style={{ width: "50%" }}>
        <h5 className="inter text-2xl font-light text-gray-700">
          We tailor solutions to meet the diverse needs of businesses, ensuring
          efficiency and innovation in the ever-evolving digital landscape
        </h5>
      </div>
      <div className="flex gap-16 justify-end" style={{ width: "40%" }}>
        <div className="flex flex-col gap-4 pr-3 pl-3">
          <p className="text-6xl font-normal poppins">70</p>
          <p className="uppercase inter text-xl text-gray-600">Clients</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-6xl font-normal poppins">150</p>
          <p className="uppercase inter text-xl text-gray-600">Projects</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-6xl font-normal poppins">150</p>
          <p className="uppercase inter text-xl text-gray-600">Experience</p>
        </div>
      </div>
    </div>
  );
}
