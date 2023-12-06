import React from "react";
import UltimateGuideToWeb from "./container/UltimateGuideToWeb";
import BlogCard from "./container/BlogCard";
// import ContentAfterHeroSection from "./ContentAfterHeroSection";

export default function page() {
  return (
    <>
      <div
        className="flex flex-col gap-12"
        style={{ padding: "5rem 10.3125rem 6.25rem 10.3125rem" }}
      >
        <UltimateGuideToWeb />
        <BlogCard />
      </div>
    </>
  );
}
