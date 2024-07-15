import axios from "axios";
import HeroSection from "../Products/HeroSection";
import BlogCard from "./container/BlogCard";
async function fetchPosts() {
  const res = await axios.get(
    "http://localhost/rar/wp-json/wp/v2/posts?_embed"
  );
  return res.data;
}

export default async function page() {
  const posts = await fetchPosts();
  return (
    <>
      <HeroSection
        heading="OUR NEWS"
        subHeading="More Overview and News about us"
        text="In the international market, Integris International FZE is a specialist in the import and export of petrochemical."
        imageSrc="/Assets/Products/Image1.svg"
      />
      <div className="flex flex-col gap-10 py-0 px-10 md:py-16 md:px-12 xl:pt-2 xl:pb-24 xl:px-40">
        <BlogCard posts={posts} />
      </div>
    </>
  );
}
