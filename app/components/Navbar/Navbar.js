"use client";
import "./Navbar.css";
import { useRouter } from "next/navigation";
import Greenbtn from "../Greenbtn";
function Navbar() {
  const router = useRouter();
  return (
    <div className="navbar">
      <div
        className="logo"
        onClick={() => {
          router.push("/Home");
        }}
      >
        OCTALCODE
      </div>
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
        <Greenbtn buttonText="Contact us" href="/Contact" />
      </div>
      <button className="sidebarBtn">☰</button>
    </div>
  );
}

export default Navbar;
