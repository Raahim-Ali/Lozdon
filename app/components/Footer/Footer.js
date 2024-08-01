"use client";
import Link from "next/link";
import React from "react";
import "./footer.css";

const Pages = [
  { name: "Commercial Services", link: "/Commercial/Home" },
  { name: "Security Services", link: "/Security/Home" },
  { name: "IT Services Services", link: "/IT/Home" },
  { name: "Contact Us", link: "/components/Contact" },
];
const Legal = [
  { name: "Terms", link: "#" },
  { name: "Privacy Policy", link: "#" },
  { name: "Others", link: "#" },
];

export default function Footer() {
  return (
    <div
      className="flex flex-col"
      style={{
        background: "linear-gradient(rgb(64 162 242), rgb(222 220 220))",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.50)",
      }}
    >
      <div className="flex flex-col gap-10 md:flex-row px-10 py-11 lg:px-40 lg:py-20">
        {/* Left Section */}
        <div className="flex flex-col w-full gap-6">
          <img className="logoImg" src="/Assets/Navbar/logo1.png" alt="logo" />
          <div className="flex flex-col gap-8">
            <p
              className="text-base text-whitePrimary font-medium inter xl:w-3/4"
              // change thw width if wants
              style={{ lineHeight: 1.6 }}
            >
              Octal Securities has established its reputation over the years as
              a reliable and innovative supplier, handling diverse needs across
              the agricultural and energy sectors.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex gap-3" style={{ paddingBottom: "20px" }}>
                <img src="/Assets/Footer/Address.svg" />
                <Link href="mailto:Info@integrisuae.com">
                  <p className="inter text-white text-base font-normal">
                    116, Tamar Way Langley SL38TA
                  </p>
                </Link>
              </div>
              <div className="flex gap-3">
                <img src="/Assets/Footer/Phone.svg" />
                <Link href="tel:+97142406453">
                  <p className="inter text-white text-base font-normal">
                    +44 7311 861572
                  </p>
                </Link>
              </div>
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
            <div className="flex flex-col gap-3 w-fit ">
              {Pages.map((item, index) => (
                <Link href={item.link} key={index}>
                  <p className="text-base text-whitePrimary font-medium inter">
                    {item.name}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Legal Section */}
          <div className="w-1/3 flex flex-col  gap-6">
            <p className="text-whitePrimary text-2xl font-bold uppercase poppins">
              Legal
            </p>
            <div className="flex flex-col gap-3 w-fit">
              {Legal.map((item, index) => (
                <Link href={item.link} key={index}>
                  <p
                    className="text-base text-whitePrimary font-medium inter"
                    key={index}
                  >
                    {item.name}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Legal Section */}
        </div>
      </div>

      {/* Additional Content */}
      <div className="rights">
        © 2024 by Octal Securities. All rights reserved.
      </div>
    </div>
  );
}
