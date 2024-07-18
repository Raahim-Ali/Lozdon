// import HeroSection from "@/app/Products/HeroSection";
import React from "react";
import "./page.css";
import Transparentbtn from "@/app/components/Transparentbtn";
import Image from "next/image";

// Function to fetch a single post by slug
async function fetchPost(slug) {
  const res = await fetch(
    `http://localhost/rar/wp-json/wp/v2/posts?slug=${slug}&_embed`
  );
  const data = await res.json();
  return data.length > 0 ? data[0] : null;
}

// Dynamic page component
export default async function BlogPostPage({ params }) {
  const { slug } = params;
  const post = await fetchPost(slug);

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <>
      {/* <HeroSection /> */}
      <div className="blogpage">
        <div className="navigation">
          <Transparentbtn TbtnText="<- Blogs and News" href="/Blog" />
        </div>
        <div className="blogdetail">
          <div>
            <p className="blogtitle">{post.title.rendered}</p>
            <div
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <div>
                <img src="/Assets/Blog/authorimg.svg" />
              </div>
              <div>
                <p className="text" style={{ color: "#495367" }}>
                  Integris Team
                </p>
                <p style={{ color: "#96A2BE" }}>{post.date.split("T")[0]}</p>
              </div>
            </div>
          </div>

          <div>
            <Image
              className="blogImage"
              width={900}
              height={800}
              src={post._embedded["wp:featuredmedia"][0].source_url}
              alt=""
            />
          </div>
          <div>
            <p
              className="blogContent"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
