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
          <div className="navigator">
            <Image
              src="/Assets/BlogsDetails/BackIcon.svg"
              alt=""
              width={30}
              height={30}
            />
            <p className="BackIconText">Blogs</p>
          </div>
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
            Ultimate Guide to Web Authentication
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
            <div className="UltimateGuideContentTextDetails">
              <p className="UltimateGuideContentTextHeading">
                What is authentication and how does it differ from
                authorization?
              </p>
              <div className="Detailsparagraphs">
                <p className="UltimateGuideContentTextParagraph">
                  When we talk about authentication, we are referring to the
                  process of verifying someone is who they say they are. In
                  turn, authorization is the process of verifying that person
                  has the right to do something.
                </p>
                <p className="UltimateGuideContentTextParagraph">
                  Authentication (AuthN) is the process of verifying the
                  identity of a user. You can do that in many ways, but the most
                  common methods are username- and password-based
                  authentication, two-factor authentication, or biometric
                  authentication.
                </p>
                <p className="UltimateGuideContentTextParagraph">
                  Users can also validate themselves with a certificate or
                  hardware token. When an authentication process fails, the
                  service responds with the HTTP Response Code “401
                  Unauthorized”.
                </p>
                <p className="UltimateGuideContentTextParagraph">
                  When we talk about authentication, we are referring to the
                  process of verifying someone is who they say they are. In
                  turn, authorization is the process of verifying that person
                  has the right to do something.
                </p>
              </div>
            </div>
            <div className="UltimateGuideContentTextDetails">
              <p className="UltimateGuideContentTextHeading">
                Different types of authentication mechanisms
              </p>
              <div className="Detailsparagraphs">
                <p className="UltimateGuideContentTextParagraph">
                  The first step in authenticating a user against a service
                  requires them to provide their credentials. The requested
                  credentials can take multiple forms. We think of a username
                  and password as the most popular credential type, but the user
                  can also present a hardware token or a certificate.
                </p>
                <p className="UltimateGuideContentTextParagraph">
                  And nowadays, we increasingly use biometric characteristics
                  and OTPs (one-time passwords). Here are a couple of ways users
                  can submit credentials to an application:
                </p>
              </div>
            </div>
            <div className="UltimateGuideContentTextDetails">
              <p className="UltimateGuideContentTextHeading">
                HTTP Basic Authentication (RFC 1945)
              </p>
              <div className="Detailsparagraphs">
                <p className="UltimateGuideContentTextParagraph">
                  This type of authentication offers more secure access control
                  than Basic Authentication. Instead of sending the credentials
                  in plain text, they are encoded using a one-way hashing
                  algorithm.
                </p>
                <p className="UltimateGuideContentTextParagraph">
                  Even if the credentials are intercepted, they can not be
                  decoded. However, not all user agents support Digest
                  Authentication, so it is not suitable for all applications.
                </p>
              </div>
            </div>
            <div className="UltimateGuideContentTextDetails">
              <p className="UltimateGuideContentTextHeading">
                Form-based Authentication
              </p>
              <div className="Detailsparagraphs">
                <p className="UltimateGuideContentTextParagraph">
                  This is the most common form of web authentication. It uses an
                  HTML form to collect the username and password, which are then
                  submitted to the server. The advantage of this method is it is
                  simple to implement and supported by all browsers.
                </p>
                <p className="UltimateGuideContentTextParagraph">
                  However, the disadvantage is the credentials are sent in plain
                  text, so it is not suitable for applications with
                  high-security requirements.
                </p>
              </div>
            </div>
            <div className="UltimateGuideContentTextDetails">
              <p className="UltimateGuideContentTextHeading">
                Certificate Verification
              </p>
              <div className="Detailsparagraphs">
                <p className="UltimateGuideContentTextParagraph">
                  This is the most common form of web authentication. It uses an
                  HTML form to collect the username and password, which are then
                  submitted toThis one is more secure than the above-mentioned
                  methods. Either a mutual authentication or a client
                  certificate authentication is implemented, depending on
                  requirements, and the communication is held over a secure
                  access HTTPS channel.
                </p>
              </div>
            </div>
            <div className="UltimateGuideContentTextDetails">
              <p className="UltimateGuideContentTextHeading">WebAuth</p>
              <div className="Detailsparagraphs">
                <p className="UltimateGuideContentTextParagraph">
                  WebAuthn is a modern passwordless open standard that uses
                  asymmetric public key cryptography instead of password-based
                  authentication. This strong authentication method involves a
                  private key and a public key and is considered a type of
                  multi-factor authentication.
                </p>
                <p className="UltimateGuideContentTextParagraph">
                  Passwordless authentication is supported by all main browsers,
                  user agents, and operating systems. Indeed, many believe we
                  are heading toward a passwordless future.
                </p>
                <p className="UltimateGuideContentTextParagraph">
                  Once the user presents their credentials through whatever
                  means configured, the service proceeds with the next steps in
                  the authentication flow. There are two main types of
                  authentication flows: stateful and stateless.
                </p>
                <p className="UltimateGuideContentTextParagraph">
                  The following sections dive deeper into the technical details
                  of these processes, highlighting the differences, use cases,
                  and pros and cons of each.
                </p>
              </div>
            </div>
            <div className="UltimateGuideContentTextDetails">
              <p className="UltimateGuideContentTextHeading">
                Benefits and drawbacks of different authentication methods
              </p>
              <div className="Detailsparagraphs">
                <p className="UltimateGuideContentTextParagraph">
                  {`The benefits of stateful authentication are it's typically
                  more secure and less complicated to implement. Security is
                  enforced with the proper configuration of cookie flags (i.e.
                  HTTPOnly, SameSite).`}
                </p>
                <p className="UltimateGuideContentTextParagraph">
                  {`The drawbacks? It can be slow and doesn't scale well, because
                  the server must keep data on each user session. Also, there is
                  concern about CSRF (cross-site request forgery) attacks, and
                  the application has to be secured against this attack vector.`}
                </p>
                <p className="UltimateGuideContentTextParagraph">
                  {`Meanwhile, the benefits of stateless authentication are that
                  it's typically faster and more scalable. The downsides? It's
                  less secure (prone to XSS attacks) and more complicated to
                  implement.`}
                </p>
                <p className="UltimateGuideContentTextParagraph">
                  And you must remember that even though the session data is not
                  stored on the server, it still has to maintain a database of
                  tokens that were invalidated or revoked.
                </p>
                <p className="UltimateGuideContentTextParagraph">
                  Regardless of the chosen authentication mechanism, ensure your
                  web application is well protected against cross-site scripting
                  attacks. These can compromise user credentials by leaking them
                  from localStorage or intercepting the session with AJAX
                  requests.
                </p>
                <p className="UltimateGuideContentTextParagraph">
                  As such, proper implementation of HTTP security headers and
                  TLS encryption are a must. The authentication method you
                  choose depends on your specific needs. But hopefully, this
                  overview has given you a better understanding of how
                  authentication works and the options available to you.
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
