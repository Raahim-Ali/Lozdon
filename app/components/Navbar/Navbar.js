"use client";
import Link from "next/link";
import "./Navbar.css";
import { useRouter } from "next/navigation";
import Greenbtn from "../Greenbtn";
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
        {/* <Link href="/Contact" className="btn">
          <span className="btnText">CONTACT US</span>
        </Link> */}

        <Greenbtn buttonText="Contact us" href="#" />
      </div>
    </div>
  );
}

export default Navbar;
