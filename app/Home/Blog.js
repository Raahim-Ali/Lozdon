"use client";
import { useEffect, useState } from "react";
import "./Blog.css";
import Transparentbtn from "../components/Transparentbtn";
import Image from "next/image";
import Link from "next/link";

function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost/rar/wp-json/wp/v2/posts?_embed"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();

        // Extract relevant data from API response
        const formattedBlogs = await Promise.all(
          data.map(async (post) => {
            // Fetch category information using wp:term link
            const categoryResponse = await fetch(
              post._links["wp:term"][0].href
            );
            if (!categoryResponse.ok) {
              throw new Error("Failed to fetch category data");
            }
            const categories = await categoryResponse.json();
            const categoryName =
              categories.length > 0 ? categories[0].name : "Uncategorized";

            const formattedDate = new Date(post.date).toLocaleDateString(
              "en-US",
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              }
            );

            return {
              imageSrc: post._embedded["wp:featuredmedia"][0].source_url,
              buttonText: categoryName,
              read: formattedDate,
              title: post.title.rendered,
              description: post.excerpt.rendered,
              link: `/Blog/${post.slug}`,
            };
          })
        );

        setBlogs(formattedBlogs);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="Blog">
      <p className="Heading">Our News</p>
      <p className="Heading2">What We Are Up To</p>

      <div className="blogContainer">
        {blogs.slice(0, 3).map((blog, index) => (
          <div className="blogCard" key={index}>
            <div className="blogImageContainer">
              <Image
                className="blogImage"
                src={blog.imageSrc}
                alt=""
                width={455}
                height={269} // Adjust height as needed to maintain aspect ratio
              />
            </div>
            <div className="blogCardTop">
              <div className="buttonContainer">
                <button className="devBtn">
                  <p>{blog.buttonText}</p>
                </button>
                <p className="readText">{blog.read}</p>
              </div>
              <div className="cardTitle">
                <p dangerouslySetInnerHTML={{ __html: blog.title }}></p>
              </div>
              <div className="cardDescription">
                <p dangerouslySetInnerHTML={{ __html: blog.description }}></p>
              </div>
            </div>
            <Link href={blog.link} className="flex w-fit">
              <p className="learnMore w-fit mt-3 hover:text-main">Learn more</p>
            </Link>
          </div>
        ))}
      </div>
      <div className="buttons">
        <Transparentbtn TbtnText="VIEW ALL NEWS" href="/Blog" />
      </div>
    </div>
  );
}

export default Blog;
