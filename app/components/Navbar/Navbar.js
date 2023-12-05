"use client";
import Link from "next/link";
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
<<<<<<< Updated upstream
        <Link href="/Contact" className="btn">
          <span className="btnText">CONTACT US</span>
        </Link>
=======
        <button className="btn">
          <p
            className="btnText"
            onClick={() => {
              router.push("/Contact");
            }}
          >
            CONTACT US
          </p>
        </button>
>>>>>>> Stashed changes
      </div>
    </div>
  );
}

export default Navbar;
