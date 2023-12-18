import React from "react";

export default function CustomerCount() {
  return (
    <div className="flex flex-col gap-8 text-center px-8 py-6 sm:justify-between sm:items-center w-full  md:py-20  md:px-10  md:gap-4 md:flex-row xl:px-36 ">
      <div className="w-full md:w-1/2 lg:w-3/5">
        <h5 className="inter text-xl  font-light  text-primaryTextColor sm:text-left md:text-left   lg:w-4/5 md:text-2xl sm:text-2xl">
          We tailor solutions to meet the diverse needs of businesses, ensuring
          efficiency and innovation in the ever-evolving digital landscape
        </h5>
      </div>
      <div className="flex flex-col justify-center xl:gap-16 sm:flex-row sm:gap-16 md:w-1/2  lg:justify-end md:gap-8 gap-3">
        <div className="flex flex-row  justify-center items-center gap-4 sm:flex-col ">
          <p className="text-3xl sm:text-6xl text-center  font-semibold poppins text-primaryTextColor">
            70
          </p>
          <div className="flex items-center">
            <p className="uppercase inter text-center text-sm sm:text-xl text-primaryTextColor font-light">
              Clients
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-4 sm:flex-col">
          <p className="text-3xl sm:text-6xl text-center font-semibold poppins text-primaryTextColor">
            150
          </p>
          <div className="flex items-center">
            <p className="uppercase text-center inter text-sm sm:text-xl  text-primaryTextColor font-light">
              Projects
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-4 sm:flex-col ">
          <p className="text-3xl sm:text-6xl text-center font-semibold poppins text-primaryTextColor ">
            150
          </p>
          <div className="flex items-center">
            <p className="uppercase inter text-center text-sm sm:text-xl text-primaryTextColor font-light">
              Experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
