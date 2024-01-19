"use client";
import "./Navbar.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Greenbtn from "../Greenbtn";
import Link from "next/link";
function Navbar() {
  const router = useRouter();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };
  // const backgroundImageUrl = "/Assets/Herosection/heroBg.svg";

  return (
    <>
      <div
        className="navbar"
        // style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        <div
          className="logo"
          onClick={() => {
            router.push("/Home");
          }}
        >
          <img className="logoImg" src="/Assets/Navbar/logo.svg" alt="logo" />
          <p className="logoText">OCTALCODE</p>
        </div>
        <div className="navbar-items">
          <p
            className="navbarIcon"
            onClick={() => {
              router.push("/");
            }}
          >
            HOME
          </p>

          <p className="navbarIcon">
            <Link href="/#Services">SERVICES</Link>
          </p>
          <p className="navbarIcon">
            <Link href="/#Work">PORTFOLIO</Link>
          </p>
          <p className="navbarIcon">
            <Link href="/#Industries">INDUSTRIES</Link>
          </p>
          <p className="navbarIcon">
            <Link href="/about-us">ABOUTS US</Link>
          </p>
          <Greenbtn buttonText="Contact us" href="/Contact" />
        </div>
        <button className="sidebarBtn" onClick={toggleDropdown}>
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
            <Link href="/#Services">SERVICES</Link>
          </div>
          <div
            className="navbarIcon"
            onClick={() => {
              toggleDropdown();
            }}
          >
            <Link href="/#Work">PORTFOLIO</Link>
          </div>
          <div
            className="navbarIcon"
            onClick={() => {
              toggleDropdown();
            }}
          >
            <Link href="/#Industries">INDUSTRIES</Link>
          </div>
          <div
            className="navbarIcon"
            onClick={() => {
              toggleDropdown();
            }}
          >
            <Link href="/about-us">ABOUT US</Link>
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
