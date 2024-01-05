"use client";
import "./Navbar.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Greenbtn from "../Greenbtn";
function Navbar() {
  const router = useRouter();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <>
      <div className="navbar">
        <div
          className="logo"
          onClick={() => {
            router.push("/Home");
          }}
        >
          <img className="logoImg" src="/Assets/Navbar/logo.svg" alt="logo" />
          <p>OCTALCODE</p>
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
          <p
            className="navbarIcon"
            onClick={() => {
              router.push("/work");
            }}
          >
            WHY US
          </p>
          <p className="navbarIcon">CASE STUDIES</p>
          <p className="navbarIcon">FAQs</p>
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
              router.push("/work");
              toggleDropdown();
            }}
          >
            WHY US
          </div>
          <div className="navbarIcon">CASE STUDIES</div>
          <div className="navbarIcon">FAQs</div>
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
