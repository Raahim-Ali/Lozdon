"use client";
import "./Navbar.css";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Transparentbtn from "../Transparentbtn";
import Link from "next/link";

function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
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
              +92 000 0000
            </p>
          </div>
          <div className="mail">
            <img src="/Assets/Navbar/mailIcon.svg" />
            <p style={{ fontFamily: "poppins", color: "white" }}>
              info@octalsecurities.com
            </p>
          </div>
        </div>
      </div>
      <div className={`header ${pathname === "/" ? "header-transparent" : ""}`}>
        <div className="logo">
          <img className="logoImg" src="/Assets/Navbar/logo1.png" alt="logo" />
        </div>
        {pathname !== "/" && (
          <div className="navbar-items">
            <div className="navbarIcon">
              <p className={`navbarIcon`} style={{ paddingTop: "4px" }}>
                <Link href="/Security/Home">SECURITY SERVICES</Link>
              </p>
            </div>
            <p className={`navbarIcon`}>
              <Link href="/Commercial/Home">COMMERCIAL SERVICES</Link>
            </p>
            <p className={`navbarIcon `}>
              <Link href="/IT/Home">IT SERVICES</Link>
            </p>
          </div>
        )}
        <div className="contactBttn" style={{ marginTop: "10px" }}>
          <Transparentbtn TbtnText="Contact us" href="/components/Contact" />
        </div>

        <button
          className="sidebarBtn"
          onClick={toggleDropdown}
          style={{ color: "white", fontSize: "25px" }}
        >
          ☰
        </button>
      </div>
      {isDropdownOpen && (
        <div className="dropdownMenu">
          {pathname !== "/" && (
            <>
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
                <Link href="/Products">OUR PRODUCTS</Link>
              </div>
              <div
                className="navbarIcon"
                onClick={() => {
                  toggleDropdown();
                }}
              >
                <Link href="/Blog">NEWS</Link>
              </div>
              <div
                className="navbarIcon"
                onClick={() => {
                  toggleDropdown();
                }}
              >
                <Link href="/about-us">ABOUT US</Link>
              </div>
              <div
                className="navbarIcon"
                onClick={() => {
                  toggleDropdown();
                }}
              >
                <Link href="/Careers">CAREERS</Link>
              </div>
            </>
          )}
          <Transparentbtn
            TbtnText="Contact us"
            href="/Contact"
            onClick={toggleDropdown}
          />
        </div>
      )}
    </>
  );
}

export default Navbar;
