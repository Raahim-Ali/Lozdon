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
            OctalCode Your Trusted Partner in Web Development and Digital
            Solutions
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
              src="/Assets/Blog/UltimateGuideToWebImage.svg"
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
              OctalCode is a leading provider of web development, mobile
              application development, and digital solutions, offering a
              comprehensive range of services to help businesses establish a
              robust online presence. With a team of skilled professionals and a
              proven track record of delivering exceptional results, OctalCode
              has become a trusted partner for businesses seeking to leverage
              technology to drive growth and innovation.
            </p>
            <div className="UltimateGuideContentTextDetails">
              <p className="UltimateGuideContentTextHeading">
                Innovative Web Development Solutions
              </p>
              <div className="Detailsparagraphs">
                <p className="UltimateGuideContentTextParagraph">
                  At the core of OctalCode's offerings is its expertise in web
                  development, with a focus on creating responsive,
                  user-friendly, and SEO-optimized websites that engage users
                  and drive conversions. By utilizing the latest technologies
                  and best practices in web development, OctalCode ensures that
                  each website is tailored to meet the unique needs and
                  objectives of its clients, thereby maximizing their online
                  visibility and ROI.
                </p>
              </div>
            </div>
            <div className="UltimateGuideContentTextDetails">
              <p className="UltimateGuideContentTextHeading">
                Customized Digital Solutions for Modern Challenges
              </p>
              <div className="Detailsparagraphs">
                <p className="UltimateGuideContentTextParagraph">
                  In addition to web development, OctalCode offers a wide range
                  of digital solutions, including mobile application
                  development, software development, and digital marketing
                  services. By understanding the specific requirements and goals
                  of each client, OctalCode delivers customized solutions that
                  address their unique challenges and help them achieve their
                  business objectives.
                </p>
              </div>
            </div>
            <div className="UltimateGuideContentTextDetails">
              <p className="UltimateGuideContentTextHeading">
                Embracing Emerging Technologies
              </p>
              <div className="Detailsparagraphs">
                <p className="UltimateGuideContentTextParagraph">
                  OctalCode is committed to staying at the forefront of
                  technological advancements and continuously exploring new
                  technologies and trends. With expertise in emerging
                  technologies such as AI, IoT, blockchain, and more, OctalCode
                  helps businesses leverage these technologies to gain a
                  competitive edge and drive innovation in their respective
                  industries.
                </p>
              </div>
            </div>
            <div className="UltimateGuideContentTextDetails">
              <p className="UltimateGuideContentTextHeading">
                A Partnership for Success
              </p>
              <div className="Detailsparagraphs">
                <p className="UltimateGuideContentTextParagraph">
                  What sets OctalCode apart is its collaborative approach and
                  commitment to client success. By fostering strong
                  relationships with its clients and working closely with them
                  throughout the project lifecycle, OctalCode ensures that it
                  delivers solutions that not only meet but exceed expectations.
                  With a focus on quality, innovation, and customer
                  satisfaction, OctalCode is dedicated to helping businesses
                  unlock their full potential in the digital age.
                </p>
              </div>
            </div>{" "}
            <div className="UltimateGuideContentTextDetails">
              <p className="UltimateGuideContentTextHeading">Conclusion</p>
              <div className="Detailsparagraphs">
                <p className="UltimateGuideContentTextParagraph">
                  In conclusion, OctalCode is your trusted partner for web
                  development and digital solutions, offering a comprehensive
                  suite of services designed to help businesses succeed in
                  today's competitive online landscape. With its innovative
                  approach, commitment to excellence, and expertise in emerging
                  technologies, OctalCode is shaping the future of digital
                  innovation and helping businesses achieve their goals.
                </p>
                <p className="UltimateGuideContentTextParagraph">
                  If you are looking for a reliable and experienced partner to
                  guide you through your digital journey, I highly recommend
                  exploring the services offered by OctalCode and experiencing
                  the difference that their expertise can make.
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
