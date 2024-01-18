import "./CompanyOne.css";
import Image from "next/image";
import LearnMore from "../../../public/Assets/Work/LearnMore.svg";
import Link from "next/link";
const companies = [
  {
    companyName: "PARADIGM FIT",
    tagline: "A quick sequence to get you started on your PinkFit Mat",
    description:
      "Ready to launch your practice or shift your current one into 6th gear? Look no further than the eye-catching and extra thick PinkFit Yoga + Pilates Mat.",
    website: "http://www.myparadigmfit.com/",
    image: "/Assets/Work/work1.JPG",
    Logo: "/Assets/Work/work1Logo.JPG",
  },
  {
    companyName: "Traders4traders",
    tagline: "We strive to give our traders the edge they need to succeed.",
    description:
      "Back in 2009 Brad had a vision to build the best trading team globally, that could take advantage in upswing or downswing markets across all asset classes. The aim is to draw talent from our training program & give everyday people from all over the globe the opportunity to trade for a living.",
    website: "https://traders4traders.com/",
    image: "/Assets/Work/work3.JPG",
    Logo: "/Assets/Work/work3Logo.JPG",
  },
  {
    companyName: "Bedford Commons",
    tagline:
      "Caring for women and helping families grow for 40 years and looking forward to many more.",
    description:
      "Bedford Commons OB-GYN is dedicated to the goal of combining quality medicine with individualized care. Our comprehensive list of on-site services include obstetrics, gynecology, well-women exams, pediatric and adolescent gynecology, family planning, fertility treatments, menopausal and hormonal management, diagnostic ultrasounds, cosmetic and laser services, and personalized nutrition services.",
    website: "https://traders4traders.com/",
    image: "/Assets/Work/work5.JPG",
    Logo: "/Assets/Work/work5Logo.JPG",
  },
  {
    companyName: "Perfect-Tone",
    tagline: "The Art Of Beautiful Looking Skin",
    description:
      "We manufacture products and provide skin care services for all skin types, with varying levels of skincare concerns. Our mission is to help our customers achieve the skin they’ve always desired through use of our products and restoration services – getting flawless results in the fewest steps.",
    website: "https://perfec-tone.com/",
    image: "/Assets/Work/work2.JPG",
    Logo: "/Assets/Work/work2Logo.JPG",
  },
  {
    companyName: "DirectFunder",
    tagline: "Self-Employed Workers Can Still Get Tax Relief",
    description:
      "If you're a sole proprietor, freelancer, gig worker, or independent business owner, our team of tax experts has developed the fastest, easiest, and most accurate system available to calculate your federal FFCRA tax credit and get you qualified instantly.",
    website: "https://directfunder.com/",
    image: "/Assets/Work/work4.JPG",
    Logo: "/Assets/Work/work4Logo.JPG",
  },
];
function CompanyOne() {
  return (
    <>
      <div className="main">
        <div style={{ padding: "20px" }}>
          {companies.map((company, index) => (
            <div className="Card" key={index}>
              <div className="Content">
                <div key={index} className="ContentText">
                  <div className="Companylogo">
                    <Image
                      style={{ borderRadius: "20px" }}
                      src={company.Logo}
                      width={150}
                      height={20}
                      alt="/"
                    />
                  </div>
                  <div className="Companyheading">
                    <p>{company.companyName}</p>
                  </div>
                  <p className="tagline">{company.tagline}</p>
                  <div className="text">
                    <p>{company.description}</p>
                  </div>
                  <Link href={company.website} target="_blank">
                    <div className="LearnMore">
                      <p className="LearnMoreText">VISIT WEBSITE</p>
                      <Image
                        style={{ marginLeft: "10px" }}
                        src={LearnMore}
                        alt="/"
                        width={20}
                        height={20}
                      />
                    </div>
                  </Link>
                </div>
              </div>
              <Image
                style={{ borderRadius: "20px" }}
                src={company.image}
                width={300}
                height={20}
                alt="/"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CompanyOne;
