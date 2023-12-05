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
      title: "Why Conversational Banking is the Future of Customer Experience",
      description:
        "This metaphor implies every aspect of the industry in recent times",
    },
    {
      imageSrc: "/Assets/Home/BlogCard.svg",
      buttonText: "development",
      read: "10 min read",
      title: "Why Conversational Banking is the Future of Customer Experience",
      description:
        "This metaphor implies every aspect of the industry in recent times",
    },
    {
      imageSrc: "/Assets/Home/BlogCard.svg",
      buttonText: "development",
      read: "10 min read",
      title: "Why Conversational Banking is the Future of Customer Experience",
      description:
        "This metaphor implies every aspect of the industry in recent times",
    },
  ];
  return (
    <div className="Blog">
      <p className="Heading">our blog</p>

      <div className="blogContainer">
        {blogs.map((blog, index) => (
          <div className="blogCard" key={index}>
            <div className="blogCardTop">
              <Image
                className="blogImage"
                src={blog.imageSrc}
                alt="/"
                width={395}
                height={269}
              />

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
        <Greenbtn buttonText="see all blogs" />
        <Transparentbtn buttonText="contact us" />
      </div>
    </div>
  );
}

export default Blog;
