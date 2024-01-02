import Greenbtn from "@/app/components/Greenbtn";
import Transparentbtn from "@/app/components/Transparentbtn";
import Image from "next/image";
import React from "react";
// import "./Blog.css";
export default function BlogCard() {
  const blogs = [
    {
      imageSrc: "/Assets/Home/BlogCard.svg",
      buttonText: "development",
      read: "10 min read",
      title: "Why Conversational Banking is the Future of Customer Experience",
      description:
        "This metaphor implies every aspect of the industry in recent times",
    },
    {
      imageSrc: "/Assets/Home/BlogCard.svg",
      buttonText: "development",
      read: "10 min read",
      title: "Why Conversational Banking is the Future of Customer Experience",
      description:
        "This metaphor implies every aspect of the industry in recent times",
    },
    {
      imageSrc: "/Assets/Home/BlogCard.svg",
      buttonText: "development",
      read: "10 min read",
      title: "Why Conversational Banking is the Future of Customer Experience",
      description:
        "This metaphor implies every aspect of the industry in recent times",
    },
    {
      imageSrc: "/Assets/Home/BlogCard.svg",
      buttonText: "development",
      read: "10 min read",
      title: "Why Conversational Banking is the Future of Customer Experience",
      description:
        "This metaphor implies every aspect of the industry in recent times",
    },
    {
      imageSrc: "/Assets/Home/BlogCard.svg",
      buttonText: "development",
      read: "10 min read",
      title: "Why Conversational Banking is the Future of Customer Experience",
      description:
        "This metaphor implies every aspect of the industry in recent times",
    },
    {
      imageSrc: "/Assets/Home/BlogCard.svg",
      buttonText: "development",
      read: "10 min read",
      title: "Why Conversational Banking is the Future of Customer Experience",
      description:
        "This metaphor implies every aspect of the industry in recent times",
    },
    {
      imageSrc: "/Assets/Home/BlogCard.svg",
      buttonText: "development",
      read: "10 min read",
      title: "Why Conversational Banking is the Future of Customer Experience",
      description:
        "This metaphor implies every aspect of the industry in recent times",
    },
    {
      imageSrc: "/Assets/Home/BlogCard.svg",
      buttonText: "development",
      read: "10 min read",
      title: "Why Conversational Banking is the Future of Customer Experience",
      description:
        "This metaphor implies every aspect of the industry in recent times",
    },
    {
      imageSrc: "/Assets/Home/BlogCard.svg",
      buttonText: "development",
      read: "10 min read",
      title: "Why Conversational Banking is the Future of Customer Experience",
      description:
        "This metaphor implies every aspect of the industry in recent times",
    },
  ];
  return (
    <>
      <div className="flex flex-wrap gap-8 ">
        {blogs.map((blog, index) => (
          <div
            className="flex-grow flex flex-col  w-full  md:w-1/2 lg:w-2/5  xl:w-1/4 rounded-md self-stretch"
            key={index}
          >
            <img
              className="rounded-t-lg w-full"
              src={blog.imageSrc}
              alt={blog.title}
            />
            <div className="px-4  md:px-8 rounded-lg shadow-md w-full">
              <div className="flex justify-between items-center py-4 ">
                <button className="bg-gray-300  p-2 flex  sm:items-center sm:justify-center rounded-lg cursor-pointer uppercase">
                  <p className="text-sm font-semibold text-gray-500">
                    {blog.buttonText}
                  </p>
                </button>
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
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* </div> */}
    </>
  );
}
