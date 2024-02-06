"use client";
import React from "react";
import CountUp from "react-countup";

export default function CustomerCount() {
  return (
    <div className="flex flex-col gap-12 text-center px-8 py-10 justify-between items-center w-full  md:py-20  md:px-10  md:gap-4  xl:px-36 ">
      <div className="w-full flex justify-center ">
        <h5 className="inter text-xl  font-light  text-primaryTextColor   lg:w-1/2  md:text-2xl sm:text-2xl">
          We tailor solutions to meet the diverse needs of businesses, ensuring
          efficiency and innovation in the ever-evolving digital landscape
        </h5>
      </div>
      <div className="flex  justify-center  xl:gap-16 flex-row sm:gap-16    md:gap-8 gap-6">
        <div className="flex    items-center  gap-4 flex-col ">
          <p className="text-3xl sm:text-6xl text-center  font-semibold poppins text-primaryTextColor">
            <CountUp
              start={0}
              end={50}
              delay={1}
              duration={7}
              useEasing={true}
              useGrouping={true}
              separator=","
              decimal="."
              scrollSpyOnce="boolean"
              enableScrollSpy={true}
              onEnd={() => console.log("Counting animation completed")}
            />
            <span className="text-[#61DF5C]">+</span>
          </p>
          <div className="flex items-center ">
            <p className="uppercase inter text-center text-sm sm:text-xl text-primaryTextColor font-light">
              Employees
            </p>
          </div>
        </div>
        <div className="flex  items-center gap-4 flex-col">
          <p className="text-3xl sm:text-6xl text-center font-semibold poppins text-primaryTextColor">
            <CountUp
              start={0}
              end={70}
              delay={1}
              duration={7}
              useEasing={true}
              useGrouping={true}
              separator=","
              decimal="."
              scrollSpyOnce="boolean"
              enableScrollSpy={true}
              onEnd={() => console.log("Counting animation completed")}
            />
            <span className="text-[#61DF5C]">+</span>
          </p>
          <div className="flex items-center">
            <p className="uppercase text-center inter text-sm sm:text-xl  text-primaryTextColor font-light">
              Clients
            </p>
          </div>
        </div>
        <div className="flex gap-4 flex-col ">
          <p className="text-3xl sm:text-6xl text-center font-semibold poppins text-primaryTextColor ">
            <CountUp
              start={0}
              end={100}
              delay={1}
              duration={7}
              useEasing={true}
              useGrouping={true}
              separator=","
              decimal="."
              scrollSpyOnce="boolean"
              enableScrollSpy={true}
              onEnd={() => console.log("Counting animation completed")}
            />
            <span className="text-[#61DF5C]">+</span>
          </p>
          <div className="flex justify-center items-center">
            <p className="w-3/4 uppercase inter text-center text-sm sm:text-xl text-primaryTextColor font-light">
              Projects
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
