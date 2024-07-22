"use client";
import "./Blog.css";
import Transparentbtn from "../components/Transparentbtn";
import Link from "next/link";
import ContentfulImage from "../components/ContentfulImage";

function Blog({ blogs }) {
  return (
    <div className="Blog">
      <p className="Heading">Our News</p>
      <p className="Heading2">What We Are Up To</p>

      <div className="blogContainer">
        {blogs.slice(0, 3).map((blog, index) => {
          const { blogTitle, slug, excerpt, coverImage, blogDate } =
            blog.fields;
          return (
            <div className="blogCard" key={blog.fields.slug}>
              <div className="blogImageContainer">
                <ContentfulImage
                  alt={`Cover Image for ${blogTitle}`}
                  src={coverImage.fields.file.url}
                  width={coverImage.fields.file.details.image.width}
                  height={coverImage.fields.file.details.image.height}
                />
              </div>
              <div className="blogCardTop">
                <div className="cardTitle">
                  <p>{blogTitle}</p>
                </div>
                <div className="cardDescription">
                  <p>{excerpt}</p>
                </div>
              </div>
              <div
                style={{
                  fontFamily: "Inter",
                  fontSize: "12px",
                  fontWeight: "300",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                    marginTop: "20px",
                    marginBottom: "20px",
                  }}
                >
                  <div>
                    <img src="/Assets/Blog/authorimg.svg" />
                  </div>
                  <div>
                    <p className="text" style={{ color: "#495367" }}>
                      Integris Team
                    </p>
                    <p>{blogDate}</p>
                  </div>
                </div>
              </div>
              <Link href={`/Blog/${slug}`}>
                <p style={{ color: "#090e8e" }}>Read More</p>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="buttons">
        <Transparentbtn TbtnText="VIEW ALL NEWS" href="/Blog" />
      </div>
    </div>
  );
}

export default Blog;
