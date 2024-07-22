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
        text="In the international market, Integris International FZE is a specialist in the import and export of petrochemical."
        imageSrc="/Assets/Products/Image1.svg"
      />

      <BlogCard blogs={fetchedBlogs} />
    </>
  );
}
