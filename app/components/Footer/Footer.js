"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Pages = [
  { name: "Home", link: "/Home" },
  { name: "Services", link: "/single-service" },
  { name: "Our Work", link: "/work" },
  { name: "About Us", link: "/about-us" },
  { name: "Contact Us", link: "/Contact" },
];
const Resources = [
  { name: "Blog", link: "/Blog" },
  { name: "Careers", link: "#" },
  { name: "Podcast", link: "#" },
  { name: "Forum", link: "#" },
];

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
              Octal Code, we excel in web development, offering a comprehensive
              suite of services encompassing the entire software development
              lifecycle. Octal Code, we excel in web development, offering a
              comprehensive suite of services encompassing the entire software
              offering a comprehensive suite of services and encompassing the
              entire software lifecycle.
            </p>
            <div className="flex gap-5">
              <Link
                href="https://www.facebook.com/OctalCode.code?_rdc=2&_rdr"
                target="_blank"
              >
                <Image
                  alt="Social Media"
                  src="/Assets/Footer/Facebook.svg"
                  width={30}
                  height={30}
                />
              </Link>
              <Link
                href="https://www.instagram.com/octalcode2/"
                target="_blank"
              >
                <Image
                  alt="Social Media"
                  src="/Assets/Footer/Insta.svg"
                  width={30}
                  height={30}
                />
              </Link>
              <Link href="https://twitter.com/octalcode_info" target="_blank">
                <Image
                  alt="Social Media"
                  src="/Assets/Footer/Twitter.svg"
                  width={30}
                  height={30}
                />
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <img src="/Assets/Footer/mail.svg" />
                <Link href="mailto:Info@octalcode.com">
                  <p className="inter text-white text-base font-normal">
                    Info@octalcode.com
                  </p>
                </Link>
              </div>
              <div className="flex gap-3">
                <img src="/Assets/Footer/Call.svg" />
                <Link href="tel:0342-32020441">
                  <p className="inter text-white text-base font-normal">
                    +92 42 32020441
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
                <Link href={item.link}>
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

          {/* Resources Section */}
          <div className="w-1/3 flex flex-col  gap-6">
            <p className="text-whitePrimary text-2xl font-bold uppercase poppins">
              Resources
            </p>
            <div className="flex flex-col gap-3 w-fit">
              {Resources.map((item, index) => (
                <Link href={item.link}>
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
