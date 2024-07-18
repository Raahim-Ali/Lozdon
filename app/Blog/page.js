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

      <BlogCard posts={posts} />
    </>
  );
}
