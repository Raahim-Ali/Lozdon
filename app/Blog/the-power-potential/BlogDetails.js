import Link from "next/link";
import "./BlogDetails.css";
import Image from "next/image";
function BlogDetails() {
  const navigations = [
    {
      text: "Introduction",
    },
    {
      text: "Customer Overview",
    },
    {
      text: "Problem Statement",
    },
    {
      text: "Solution",
    },
    {
      text: "Result",
    },
  ];
  return (
    <div className="blogDetailsPage">
      <div className="blogDetailsContent">
        <div className="navigationSection">
          <Link href={"/Blog"}>
            <div className="navigator">
              <Image
                src="/Assets/BlogsDetails/BackIcon.svg"
                alt=""
                width={30}
                height={30}
              />
              <p className="BackIconText">Blogs</p>
            </div>
          </Link>
          <div className="navigatorSectionDetails">
            <div className="navigatorHeading">
              <p className="navigatorHeadingText">In the Blog Post</p>
            </div>
            <div className="navigatorText">
              {navigations.map((navigation, index) => (
                <div key={index}>
                  <p className="navigatorTextDetails">{navigation.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="UltimateGuideContent">
          <p className="UltimateGuideContentHeading">
            The Power and Potential of Ruby on Rails Unveiling the Web
            Development Marvel
          </p>
          <div className="TeamLogo">
            <div className="flex items-center gap-3">
              <img
                src="/Assets/Blog/Icon.svg"
                className=" rounded-full"
                alt="Author Icon"
              />
              <div className="flex flex-col">
                <p className="poppins text-base font-semibold text-gray-700">
                  OctalCode Team
                </p>
                <p
                  className="inter font-normal text-sm"
                  style={{ color: "#96A2BE" }}
                >
                  Jan 12, 2023 • 8 min read
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              overflow: "hidden",
              height: "500px",
              borderRadius: "14px",
              marginTop: "41px",
            }}
          >
            <img
              src="/Assets/Home/ruby2.jpg"
              className="max-w-full h-auto"
              alt="Web Authentication"
              style={{
                width: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          <div className="UltimateGuideContentText">
            <p className="UltimateGuideContentTextParagraph">
              Ruby on Rails (RoR), commonly known as Rails, has been making
              waves in the web development community since its introduction.
              Developed by David Heinemeier Hansson, Rails has redefined the way
              developers approach building web applications. In this article,
              we'll explore the key aspects of Ruby on Rails and why it
              continues to be a preferred choice for developers worldwide.
            </p>
            <div className="UltimateGuideContentTextDetails">
              <p className="UltimateGuideContentTextHeading">
                What is Ruby on Rails?
              </p>
              <div className="Detailsparagraphs">
                <p className="UltimateGuideContentTextParagraph">
                  Ruby on Rails is a server-side web application framework
                  written in Ruby, a dynamic, reflective, object-oriented
                  programming language. Rails is designed to simplify the
                  development of web applications by emphasizing convention over
                  configuration, enabling developers to write less code and
                  achieve more.
                </p>
              </div>
            </div>
            <div className="UltimateGuideContentTextDetails">
              <p className="UltimateGuideContentTextHeading">
                Key Features of Ruby on Rails :
              </p>
              <div className="Detailsparagraphs">
                <ul className="UltimateGuideContentTextParagraph list-decimal">
                  <li>
                    <span className="font-bold">
                      Convention over Configuration :
                    </span>{" "}
                    Rails minimizes the need for configuration by making
                    assumptions about what developers need, allowing them to
                    focus on writing application code rather than boilerplate
                    setup.
                  </li>
                  <li>
                    <span className="font-bold">
                      Model-View-Controller (MVC) Architecture :
                    </span>{" "}
                    Rails follows the MVC architectural pattern, promoting the
                    separation of concerns and facilitating the development,
                    testing, and maintenance of applications.
                  </li>
                  <li>
                    <span className="font-bold"> JActiveRecord : </span> Rails'
                    built-in Object-Relational Mapping (ORM) library,
                    ActiveRecord, simplifies database interactions by providing
                    a rich set of methods for querying and manipulating data.
                  </li>
                  <li>
                    <span className="font-bold">Rich Libraries and Gems :</span>{" "}
                    RubyGems, the package manager for Ruby, offers a plethora of
                    gems (libraries) that extend the functionality of Rails
                    applications, ranging from authentication and authorization
                    to pagination and image processing.
                  </li>
                </ul>
              </div>
            </div>
            <div className="UltimateGuideContentTextDetails">
              <p className="UltimateGuideContentTextHeading">
                Advantages of Using Ruby on Rails :
              </p>
              <div className="Detailsparagraphs">
                <ol className="UltimateGuideContentTextParagraph list-disc">
                  <li>
                    <span className="font-bold">Rapid Development : </span>{" "}
                    Rails' conventions and built-in tools enable developers to
                    build robust web applications quickly, reducing
                    time-to-market and accelerating development cycles.
                  </li>
                  <li>
                    <span className="font-bold">
                      Scalability and Maintainability :
                    </span>{" "}
                    Rails' modular design and emphasis on best practices promote
                    scalability and maintainability, allowing applications to
                    grow and evolve over time with minimal hassle.
                  </li>
                  <li>
                    <span className="font-bold">
                      Vibrant Community and Ecosystem :{" "}
                    </span>{" "}
                    Ruby on Rails boasts a vibrant community of developers,
                    contributors, and enthusiasts who actively contribute to its
                    growth and development, ensuring its relevance and longevity
                    in the ever-evolving landscape of web development.
                  </li>
                </ol>
              </div>
            </div>
            <div className="UltimateGuideContentTextDetails">
              <p className="UltimateGuideContentTextHeading">Conclusion</p>
              <div className="Detailsparagraphs">
                <p className="UltimateGuideContentTextParagraph">
                  Ruby on Rails has revolutionized web development by offering a
                  developer-friendly framework that emphasizes productivity,
                  scalability, and maintainability. Whether you're a seasoned
                  developer or new to web development, exploring Ruby on Rails
                  can open doors to new possibilities and opportunities in your
                  journey as a web developer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BlogDetails;
