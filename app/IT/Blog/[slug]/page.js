"use client";
import React, { useEffect, useState } from "react";
import "./page.css";
import Transparentbtn from "@/app/components/Transparentbtn";
import Image from "next/image";
import { client } from "../../Library/contentful";
import ContentfulImage from "@/app/components/ContentfulImage";

export default function BlogPostPage({ params }) {
  const [blogDetail, setBlogDetail] = useState([]);
  console.log("params", params);
  useEffect(() => {
    const { slug } = params;
    client
      .getEntries({
        content_type: "blog",
        "fields.slug": slug,
      })
      .then((res) => {
        console.log("response", res);
        setBlogDetail(res.items);
      });
    console.log("blogDetail", blogDetail);
  }, []);

  if (!blogDetail.length) {
    return;
  }

  const { blogTitle, coverImage, blogDate, blogContent } = blogDetail[0].fields;

  return (
    <div className="blogpage">
      <div className="navigation">
        <Transparentbtn TbtnText="<- Blogs and News" href="/Blog" />
      </div>
      <div className="blogdetail">
        <div>
          <p className="blogtitle">{blogTitle}</p>
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
              <p style={{ color: "#96A2BE" }}>{blogDate}</p>
            </div>
          </div>
        </div>

        <div>
          <ContentfulImage
            className="blogImage"
            alt={`Cover Image for ${blogTitle}`}
            src={coverImage.fields.file.url}
            width={coverImage.fields.file.details.image.width}
            height={coverImage.fields.file.details.image.height}
          />
        </div>
        <div>
          <p className="blogContent">{blogContent}</p>
        </div>
      </div>
    </div>
  );
}
