import React from "react";
import Link from "next/link";

export default function UltimateGuideToWeb() {
  return (
    <div className="flex flex-col gap-7 sm:gap-11 lg:flex-row w-full">
      {/* Left Section: Image */}
      <div className="lg:w-2/5 overflow-hidden xl:h-96 rounded-2xl">
        <img
          src="/Assets/Home/ruby.jpg"
          className="max-w-full w-full object-cover"
          alt="Web Authentication"
        />
      </div>

      <div className="flex flex-col gap-12  xl:gap-8 lg:w-1/2">
        <div className="flex flex-col gap-6  w-full">
          <p className="poppins font-semibold text-3xl md:font-bold md:tracking-wide md:text-4xl">
            Ruby on Rails A Comprehensive Guide for Beginners
          </p>

          <p className="inter font-normal md:tracking-wide text-base">
            Ruby on Rails, often simply called Rails, is a popular web
            application framework written in the Ruby programming language.
            Known for its convention over configuration principle, Rails offers
            developers a streamlined and efficient way to build robust web
            applications. If you`&apos;`re new to Rails or considering learning
            it, this article will provide you with a foundational understanding
            of its key concepts and benefits.
          </p>

          <div>
            <button className="bg-grey py-3 px-6 rounded-xl">
              <Link
                href="/Blog/Ruby-on-rails"
                className="flex justify-center items-center gap-3"
              >
                <span className="text-sm md:text-base inter font-semibold uppercase">
                  <p className="learnMore w-fit">Learn more</p>
                </span>
                <div className="w-4 md:w-5">
                  <img
                    src="/Assets/Blog/Arrow.svg"
                    alt="Continue Reading Arrow"
                  />
                </div>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
