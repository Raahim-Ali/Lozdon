"use client";
import axios from "axios";
import HeroSection from "../Products/HeroSection";
import BlogCard from "./container/BlogCard";
import { useEffect, useState } from "react";
import { client } from "../Library/contentful";

export default function Blogs() {
  const [fetchedBlogs, setFetchedBlogs] = useState([]);

  useEffect(() => {
    client.getEntries({ content_type: "blog" }).then((res) => {
      console.log("res", res);
      setFetchedBlogs(res.items);
    });
  }, []);
  return (
    <>
      <HeroSection
        heading="OUR NEWS"
        subHeading="More Overview and News about us"
        text="At Integris, we prioritize our employees' growth and well-being, offering continuous support and guidance. Through regular training sessions, we empower our team to excel and evolve professionally, ensuring their success aligns with our company's values."
        imageSrc="/Assets/Products/Image1.svg"
      />

      <BlogCard blogs={fetchedBlogs} />
    </>
  );
}
