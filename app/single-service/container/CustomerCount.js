import React from "react";

export default function CustomerCount() {
  return (
    <div
      className="flex w-full justify-between pt-20 pb-20 pr-36 pl-36"
      style={{}}
    >
      <div style={{ width: "50%" }}>
        <h5
          className="inter text-2xl font-light text-gray-700"
          style={{ color: "#3B3F5C" }}
        >
          We tailor solutions to meet the diverse needs of businesses, ensuring
          efficiency and innovation in the ever-evolving digital landscape
        </h5>
      </div>
      <div className="flex gap-16 justify-end" style={{ width: "40%" }}>
        <div className="flex flex-col gap-4 pr-3 pl-3">
          <p
            className="text-6xl font-semibold poppins"
            style={{ color: "#3B3F5C" }}
          >
            70
          </p>
          <p className="uppercase inter text-center text-xl text-gray-600 font-light">
            Clients
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <p
            className="text-6xl font-semibold poppins"
            style={{ color: "#3B3F5C" }}
          >
            150
          </p>
          <p className="uppercase text-center inter text-xl text-gray-600 font-light">
            Projects
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <p
            className="text-6xl text-center font-semibold poppins"
            style={{ color: "#3B3F5C" }}
          >
            150
          </p>
          <p className="uppercase inter text-center text-xl text-gray-600 font-light">
            Experience
          </p>
        </div>
      </div>
    </div>
  );
}
