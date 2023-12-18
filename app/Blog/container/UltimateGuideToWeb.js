import Greenbtn from "@/app/components/Greenbtn";
import React from "react";
import Link from "next/link";

export default function UltimateGuideToWeb() {
  return (
    <div className="flex flex-col gap-7 sm:gap-11 xl:flex-row w-full">
      {/* Left Section: Image */}
      <div className="xl:w-2/5 overflow-hidden xl:h-96 rounded-2xl">
        <img
          src="/Assets/Blog/UltimateGuideToWebImage.svg"
          className="max-w-full w-full object-cover"
          alt="Web Authentication"
        />
      </div>

      <div className="flex flex-col gap-12 xl:max-w-xl xl:gap-16 xl:w-1/2">
        <div className="flex flex-col gap-6  w-full">
          <p className="poppins font-semibold text-3xl md:font-bold md:tracking-wide md:text-4xl">
            Ultimate Guide to Web Authentication
          </p>

          <p className="inter font-normal md:tracking-wide text-base">
            When we talk about authentication, we&apos;re referring to the
            process of verifying someone is who they say they are. In turn,
            authorization is the process of verifying that person has the right
            to do something.
          </p>

          <div>
            <button className="bg-grey py-3 px-6 flex gap-3 rounded-xl justify-center items-center">
              <Link href="/BlogDetails">
                <span className="text-sm md:text-base inter font-semibold uppercase">
                  Continue Reading
                </span>
              </Link>
              <div className="w-4 md:w-5">
                <img
                  src="/Assets/Blog/Arrow.svg"
                  alt="Continue Reading Arrow"
                />
              </div>
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
