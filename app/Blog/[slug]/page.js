import React from "react";

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
    <div
      className="blog-post"
      style={{ marginTop: "100px", marginBottom: "100px" }}
    >
      <h1 className="text-3xl font-bold mb-4">{post.title.rendered}</h1>
      {post.featured_media_url && (
        <img
          className="rounded-md w-full mb-4"
          src={post._embedded["wp:featuredmedia"][0].source_url}
          alt={post.title.rendered}
        />
      )}
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </div>
  );
}
