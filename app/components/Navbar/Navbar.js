"use client";
import "./Navbar.css";
import { useRouter } from "next/navigation";
function Navbar() {
  const router = useRouter();
  return (
    <div className="navbar">
      <div className="logo">OCTALCODE</div>
      <div className="navbar-items">
        <div
          className="navbarIcon"
          onClick={() => {
            router.push("/");
          }}
        >
          HOME
        </div>
        <div
          className="navbarIcon"
          onClick={() => {
            router.push("/work");
          }}
        >
          WHY US
        </div>
        <div className="navbarIcon">CASE STUDIES</div>
        <div className="navbarIcon">FAQs</div>
        <button className="btn">
          <p
            className="btnText"
            onClick={() => {
              router.push("/about-us");
            }}
          >
            CONTACT US
          </p>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
