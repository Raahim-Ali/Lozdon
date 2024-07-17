"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import "./BlogCard.css";
import Transparentbtn from "@/app/components/Transparentbtn";

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

        const formattedBlogs = await Promise.all(
          data.map(async (post) => {
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
              imageSrc: post._embedded["wp:featuredmedia"][0].source_url || "",
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
    <div className="blog-container">
      {blogs.map((blog, index) => (
        <div
          key={index}
          className={`blog-item ${index % 2 === 0 ? "normal" : "reversed"}`}
        >
          <div className="blog-text">
            <div>
              <p className="Heading" style={{ paddingBottom: "20px" }}>
                {blog.title}
              </p>
            </div>
            <div>
              <p
                className="text1"
                dangerouslySetInnerHTML={{ __html: blog.description }}
              />
            </div>
            <div className="divbtn">
              <Transparentbtn TbtnText="READ MORE" href={blog.link} />
            </div>
          </div>
          <div className="blog-image">
            <Image
              className="blogimg"
              src={blog.imageSrc}
              alt={blog.title}
              width={800}
              height={800}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blog;
