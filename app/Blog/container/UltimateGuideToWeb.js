import Greenbtn from "@/app/components/Greenbtn";
import React from "react";

export default function UltimateGuideToWeb() {
  return (
    <div className="flex gap-4">
      {/* Left Section: Image */}
      <div
        style={{
          width: "100%",
          overflow: "hidden",
          height: "500px",
          borderRadius: "14px",
        }}
      >
        <img
          src="/Assets/Blog/UltimateGuideToWebImage.svg"
          className="max-w-full h-auto"
          alt="Web Authentication"
          style={{
            width: "100%",
            // height: "70s%",
            objectFit: "cover",
          }}
        />
      </div>

      <div className="flex flex-col max-w-xl gap-16">
        <div className="flex flex-col gap-6 ">
          <p className="poppins font-bold tracking-wide text-4xl">
            Ultimate Guide to Web Authentication
          </p>

          <p className="inter font-normal tracking-wide text-base">
            When we talk about authentication, we&apos;re referring to the
            process of verifying someone is who they say they are. In turn,
            authorization is the process of verifying that person has the right
            to do something.
          </p>

          <div>
            <button className="bg-grey py-3 px-6 flex gap-3 rounded-xl justify-center items-center">
              <span className="text-base inter font-semibold uppercase">
                Continue Reading
              </span>
              <img src="/Assets/Blog/Arrow.svg" alt="Continue Reading Arrow" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <img
            src="/Assets/Blog/Icon.svg"
            className=" rounded-full"
            alt="Author Icon"
          />

          <div className="flex flex-col">
            <p className="poppins text-base font-semibold text-gray-700">
              OctalCode Team
            </p>
            <p
              className="inter font-normal text-sm"
              style={{ color: "#96A2BE" }}
            >
              Jan 12, 2023 • 8 min read
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
