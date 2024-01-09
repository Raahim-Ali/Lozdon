import "./Blog.css";
import Greenbtn from "../components/Greenbtn";
import Transparentbtn from "../components/Transparentbtn";
import Image from "next/image";
function Blog() {
  const blogs = [
    {
      imageSrc: "/Assets/Home/BlogCard.svg",
      buttonText: "development",
      read: "10 min read",
      title: "Ruby on Rails A Comprehensive Guide for Beginners",
      description:
        "Ruby on Rails, often simply called Rails, is a popular web application framework written in the Ruby programming...",
    },
    {
      imageSrc: "/Assets/Home/BlogCard.svg",
      buttonText: "development",
      read: "10 min read",
      title:
        "The Power and Potential of Ruby on Rails Unveiling the Web Development Marvel",
      description:
        "The Power and Potential of Ruby on Rails Unveiling the Web Development Marvels...",
    },
    {
      imageSrc: "/Assets/Home/BlogCard.svg",
      buttonText: "development",
      read: "10 min read",
      title: "Harnessing the Power of React.js A Comprehensive Guide",
      description:
        "In the ever-evolving world of web development, React.js has emerged as a game-changing library that...",
    },
  ];
  return (
    <div className="Blog">
      <p className="Heading">our blogs</p>

      <div className="blogContainer">
        {blogs.map((blog, index) => (
          <div className="blogCard" key={index}>
            <Image
              className="blogImage"
              src={blog.imageSrc}
              alt="/"
              width={395}
              height={269}
            />
            <div className="blogCardTop">
              <div className="buttonContainer">
                <button className="devBtn">
                  <p>{blog.buttonText}</p>
                </button>
                <p className="readText">{blog.read}</p>
              </div>
              <div className="cardTitle">
                <p>{blog.title}</p>
              </div>
              <div className="cardDescription">
                <p>{blog.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="buttons">
        <Greenbtn buttonText="see all blogs" href="/Blog" />
        <Transparentbtn TbtnText="contact us" href="/Contact" />
      </div>
    </div>
  );
}

export default Blog;
