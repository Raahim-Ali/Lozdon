import Link from "next/link";
import React from "react";
// import "./Blog.css";
export default function BlogCard() {
  const blogs = [
    {
      imageSrc: "/Assets/Home/BlogCard.svg",
      buttonText: "development",
      read: "10 min read",
      title: "Harnessing the Power of React.js A Comprehensive Guide",
      description:
        "In the ever-evolving world of web development, React.js has emerged as a game-changing library that has...",
      link: "/BlogDetails/Harnessing-the-power",
    },
    {
      imageSrc: "/Assets/Home/BlogCard.svg",
      buttonText: "development",
      read: "10 min read",
      title:
        "The Power and Potential of Ruby on Rails Unveiling the Web Development Marvel",
      description:
        "The Power and Potential of Ruby on Rails Unveiling the Web Development Marvels...",
      link: "/BlogDetails/the-power-potential",
    },

    {
      imageSrc: "/Assets/Home/BlogCard.svg",
      buttonText: "development",
      read: "10 min read",
      title:
        "OctalCode Your Trusted Partner in Web Development and Digital Solutions",
      description:
        "OctalCode is a leading provider of web development, mobile application development...",
      link: "/BlogDetails/Octalcode-trusted",
    },
  ];
  return (
    <>
      <div className="flex flex-wrap gap-8 ">
        {blogs.map((blog, index) => (
          <div
            className="flex-grow flex flex-col  w-full  md:w-1/2   lg:w-1/4 rounded-md self-stretch"
            key={index}
          >
            <img
              className="rounded-t-lg w-full"
              src={blog.imageSrc}
              alt={blog.title}
            />
            <div className="px-4  md:px-8 rounded-lg shadow-md w-full">
              <div className="flex justify-between items-center py-4 ">
                <div className="bg-gray-300  p-2 flex  sm:items-center sm:justify-center rounded-lg cursor-default uppercase">
                  <p className="text-sm font-semibold text-gray-500">
                    {blog.buttonText}
                  </p>
                </div>
                <p className="text-base font-medium text-gray-700">
                  {blog.read}
                </p>
              </div>

              <div className="mb-2">
                <p className="text-xl font-semibold text-gray-700">
                  {blog.title}
                </p>
              </div>

              <div className="mb-4">
                <p className="text-base font-light text-gray-700">
                  {blog.description}
                </p>
                <Link href={blog.link} className="flex w-fit">
                  <p className="learnMore w-fit mt-3 hover:text-main">
                    Learn more
                  </p>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* </div> */}
    </>
  );
}
