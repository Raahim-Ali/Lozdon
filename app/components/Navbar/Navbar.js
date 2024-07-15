"use client";
import "./Navbar.css";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation"; // Import usePathname
import { useState } from "react";
import Greenbtn from "../Greenbtn";
import Link from "next/link";

function Navbar() {
  const router = useRouter();
  const pathname = usePathname(); // Get the current path
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <>
      <div className="navbar">
        <div className="social-icons">
          <img className="iconStyle" src="/Assets/Navbar/facebookIcon.svg" />
          <img className="iconStyle" src="/Assets/Navbar/instagramIcon.svg" />
          <img className="iconStyle" src="/Assets/Navbar/twitterIcon.svg" />
          <img className="iconStyle" src="/Assets/Navbar/linkedinIcon.svg" />
        </div>
        <div className="contacts">
          <div className="phone">
            <img src="/Assets/Navbar/phoneIcon.svg" />
            <p style={{ fontFamily: "poppins", color: "white" }}>
              +971 4 240 6453
            </p>
          </div>
          <div className="mail">
            <img src="/Assets/Navbar/mailIcon.svg" />
            <p style={{ fontFamily: "poppins", color: "white" }}>
              info@integris.com
            </p>
          </div>
        </div>
      </div>
      <div className={`header ${pathname === "/" ? "header-transparent" : ""}`}>
        <div
          className="logo"
          onClick={() => {
            router.push("/Home");
          }}
        >
          <img className="logoImg" src="/Assets/Navbar/logo.png" alt="logo" />
        </div>
        <div className="navbar-items">
          <p
            className={`navbarIcon ${pathname === "/" ? "active" : ""}`}
            onClick={() => {
              router.push("/");
            }}
          >
            HOME
          </p>
          <p
            className={`navbarIcon ${pathname === "/Products" ? "active" : ""}`}
          >
            <Link href="/Products">OUR PRODUCTS</Link>
          </p>
          <p className={`navbarIcon ${pathname === "/Blog" ? "active" : ""}`}>
            <Link href="/Blog">NEWS</Link>
          </p>
          <p
            className={`navbarIcon ${pathname === "/about-us" ? "active" : ""}`}
          >
            <Link href="/about-us">ABOUT US</Link>
          </p>
        </div>
        <div className="contactBttn" style={{ marginTop: "10px" }}>
          <Greenbtn buttonText="Contact us" href="/Contact" />
        </div>

        <button
          className="sidebarBtn"
          onClick={toggleDropdown}
          style={{ color: "white" }}
        >
          ☰
        </button>
      </div>
      {isDropdownOpen ? (
        <div className="dropdownMenu">
          <div
            className="navbarIcon"
            onClick={() => {
              router.push("/");
              toggleDropdown();
            }}
          >
            HOME
          </div>
          <div
            className="navbarIcon"
            onClick={() => {
              toggleDropdown();
            }}
          >
            <Link href="/#Services">OUR PRODUCTS</Link>
          </div>
          <div
            className="navbarIcon"
            onClick={() => {
              toggleDropdown();
            }}
          >
            <Link href="/#Work">NEWS</Link>
          </div>
          <div
            className="navbarIcon"
            onClick={() => {
              toggleDropdown();
            }}
          >
            <Link href="/#Industries">ABOUT US</Link>
          </div>

          <Greenbtn
            buttonText="Contact us"
            href="/Contact"
            onClick={toggleDropdown}
          />
        </div>
      ) : null}
    </>
  );
}

export default Navbar;
