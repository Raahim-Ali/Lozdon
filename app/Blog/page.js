import React from "react";
import UltimateGuideToWeb from "./container/UltimateGuideToWeb";
import BlogCard from "./container/BlogCard";
// import ContentAfterHeroSection from "./ContentAfterHeroSection";

export default function page() {
  return (
    <>
      <div className="flex flex-col gap-12 py-14 px-10 md:py-16 md:px-12  xl:pt-20 xl:pb-24 xl:px-40">
        <UltimateGuideToWeb />
        <BlogCard />
      </div>
    </>
  );
}
