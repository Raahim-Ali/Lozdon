import "./Blog.css";
import Greenbtn from "../components/Greenbtn";
import Transparentbtn from "../components/Transparentbtn";
import Image from "next/image";
import Link from "next/link";
function Blog() {
  const blogs = [
    {
      imageSrc: "/Assets/Home/ruby.jpg",
      buttonText: "development",
      read: "10 min read",
      title: "Ruby on Rails A Comprehensive Guide for Beginners",
      description:
        "Ruby on Rails, often simply called Rails, is a popular web application framework written in the Ruby programming...",
      link: "/Blog/Ruby-on-rails",
    },
    {
      imageSrc: "/Assets/Home/ruby2.jpg",
      buttonText: "development",
      read: "10 min read",
      title:
        "The Power and Potential of Ruby on Rails Unveiling the Web Development Marvel",
      description:
        "The Power and Potential of Ruby on Rails Unveiling the Web Development Marvels...",
      link: "/Blog/the-power-potential",
    },
    {
      imageSrc: "/Assets/Home/react.jpg",
      buttonText: "development",
      read: "10 min read",
      title: "Harnessing the Power of React.js A Comprehensive Guide",
      description:
        "In the ever-evolving world of web development, React.js has emerged as a game-changing library that...",
      link: "/Blog/Harnessing-the-power",
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
              width={455}
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
            <Link href={blog.link} className="flex w-fit">
              <p className="learnMore w-fit mt-3 hover:text-main">Learn more</p>
            </Link>
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
