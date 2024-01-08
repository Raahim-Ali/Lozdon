"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Pages = ["Home", "Services", "Our Work", "About Us", "Contact Us"];
const Resources = ["Blog", "Careers", "Podcast", "Forum"];

export default function Footer() {
  return (
    <div className="flex flex-col  bg-primaryBlack">
      <div
        className="flex flex-col gap-10 md:flex-row px-10 py-11 lg:px-40 lg:py-32"
        // style={{
        //   padding: "130px 165px",
        // }}
      >
        {/* Left Section */}
        <div className="flex flex-col w-full gap-6">
          <p className="text-main text-4xl font-bold poppins">OCTALCODE</p>
          <div className="flex flex-col gap-8">
            <p
              className="text-base text-whitePrimary font-medium inter xl:w-3/4"
              // change thw width if wants
              style={{ lineHeight: 1.6 }}
            >
              Elevating your digital presence through a symphony of expertise,
              weaving technological brilliance, innovative designs, and seamless
              functionality into every project.
            </p>
            <div className="flex gap-5">
              <Link href="https://www.facebook.com/OctalCode.code?_rdc=2&_rdr">
                <Image
                  alt="Social Media"
                  src="/Assets/Footer/Facebook.svg"
                  width={30}
                  height={30}
                />
              </Link>
              <Link href="https://www.instagram.com/octalcode2/">
                <Image
                  alt="Social Media"
                  src="/Assets/Footer/Insta.svg"
                  width={30}
                  height={30}
                />
              </Link>
              <Link href="https://twitter.com/octalcode_info">
                <Image
                  alt="Social Media"
                  src="/Assets/Footer/Twitter.svg"
                  width={30}
                  height={30}
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-4/5 flex flex-col gap-6 md:flex-row  justify-end md:gap-10">
          {/* pages Section */}
          <div className="sm:w-1/3 flex flex-col  gap-6">
            <p className="text-whitePrimary text-2xl font-bold uppercase poppins">
              Pages
            </p>
            <div className="flex flex-col gap-3 ">
              {Pages.map((item, index) => (
                <p
                  className="text-base text-whitePrimary font-medium inter"
                  key={index}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Resources Section */}
          <div className="w-1/3 flex flex-col  gap-6">
            <p className="text-whitePrimary text-2xl font-bold uppercase poppins">
              Resources
            </p>
            <div className="flex flex-col gap-3">
              {Resources.map((item, index) => (
                <p
                  className="text-base text-whitePrimary font-medium inter"
                  key={index}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Legal Section */}
          <div className=" flex flex-col  gap-6">
            <p className="text-whitePrimary text-2xl font-bold uppercase poppins">
              Legal
            </p>
            <div className="flex flex-col gap-3">
              <p className="text-whitePrimary text-base font-normal inter">
                <Link href="#">Terms</Link>
              </p>
              <p className="text-whitePrimary text-base font-normal inter">
                <Link href="#">Privacy</Link>
              </p>
              <p className="text-whitePrimary text-base font-normal inter">
                <Link href="#">Others</Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Content */}
      <div className="text-center text-gray-600 pt-5 pb-5">
        © 2023 OctalCode. All rights reserved.
      </div>
    </div>
  );
}
