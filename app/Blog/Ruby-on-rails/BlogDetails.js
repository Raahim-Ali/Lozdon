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
            Ruby on Rails A Comprehensive Guide for Beginners
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
              height: "700px",
              borderRadius: "14px",
              marginTop: "41px",
            }}
          >
            <img
              src="/Assets/Home/ruby.jpg"
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
              Ruby on Rails, often simply called Rails, is a popular web
              application framework written in the Ruby programming language.
              Known for its convention over configuration principle, Rails
              offers developers a streamlined and efficient way to build robust
              web applications. If you're new to Rails or considering learning
              it, this article will provide you with a foundational
              understanding of its key concepts and benefits.
            </p>
            <div className="UltimateGuideContentTextDetails">
              <p className="UltimateGuideContentTextHeading">
                What is Ruby on Rails?
              </p>
              <div className="Detailsparagraphs">
                <p className="UltimateGuideContentTextParagraph">
                  Rails is an open-source framework that provides developers
                  with a set of tools and libraries for building web
                  applications. Created by David Heinemeier Hansson, Rails was
                  designed to emphasize software engineering principles that
                  prioritize simplicity, readability, and productivity.
                </p>
              </div>
            </div>
            <div className="UltimateGuideContentTextDetails">
              <p className="UltimateGuideContentTextHeading">
                Key Features of Ruby on Rails
              </p>
              <div className="Detailsparagraphs">
                <ul className="UltimateGuideContentTextParagraph list-decimal">
                  <li>
                    <span className="font-bold">
                      Convention over Configuration (CoC) :
                    </span>{" "}
                    Rails follows the principle of "convention over
                    configuration," meaning that it makes assumptions about the
                    best way to do things, reducing the need for explicit
                    configuration and boilerplate code.
                  </li>
                  <li>
                    <span className="font-bold">
                      Don't Repeat Yourself (DRY) :
                    </span>{" "}
                    Rails encourages the DRY principle by minimizing repetition
                    in code, promoting modular design, and providing built-in
                    helpers and generators.
                  </li>
                  <li>
                    <span className="font-bold"> Active Record : </span> Rails
                    includes the Active Record ORM (Object-Relational Mapping)
                    framework, which simplifies database interactions by mapping
                    database tables to Ruby objects and providing a rich set of
                    methods for querying and manipulating data.
                  </li>
                  <li>
                    <span className="font-bold"> RESTful Architecture :</span>{" "}
                    Rails promotes RESTful design principles, making it easy to
                    build RESTful APIs and web services.
                  </li>
                </ul>
              </div>
            </div>
            <div className="UltimateGuideContentTextDetails">
              <p className="UltimateGuideContentTextHeading">
                Getting Started with Ruby on Rails
              </p>
              <div className="Detailsparagraphs">
                <p className="UltimateGuideContentTextParagraph">
                  To start building applications with Rails, you'll need to
                  install Ruby and Rails on your system. Once installed, you can
                  create a new Rails application using the Rails new command and
                  follow the conventions and best practices of the framework to
                  develop your application.
                </p>
              </div>
            </div>
            <div className="UltimateGuideContentTextDetails">
              <p className="UltimateGuideContentTextHeading">
                Advantages of Using Ruby on Rails
              </p>
              <div className="Detailsparagraphs">
                <ol className="UltimateGuideContentTextParagraph list-decimal">
                  <li>
                    <span className="font-bold">Productivity : </span> Rails'
                    emphasis on convention over configuration and the DRY
                    principle allows developers to write less code and focus on
                    solving business problems, leading to faster development
                    cycles.
                  </li>
                  <li>
                    <span className="font-bold">Community and Ecosystem :</span>{" "}
                    Rails has a vibrant community and a rich ecosystem of gems
                    (libraries) that extend its functionality, making it easier
                    to integrate with other technologies and services.
                  </li>
                  <li>
                    <span className="font-bold"> Scalability : </span> Rails
                    applications are scalable and can handle a large number of
                    users and transactions, thanks to its efficient caching
                    mechanisms, database optimizations, and support for
                    distributed computing.
                  </li>
                </ol>
              </div>
            </div>
            <div className="UltimateGuideContentTextDetails">
              <p className="UltimateGuideContentTextHeading">Conclusion</p>
              <div className="Detailsparagraphs">
                <p className="UltimateGuideContentTextParagraph">
                  Ruby on Rails is a powerful and versatile framework that
                  offers developers a productive and enjoyable experience for
                  building modern web applications. Whether you're a seasoned
                  developer or just starting your journey in web development,
                  Rails provides a solid foundation for creating robust,
                  maintainable, and scalable applications.
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
