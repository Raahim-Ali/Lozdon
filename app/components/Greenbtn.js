import React from "react";
import "../components/Navbar/Navbar.css";
import Link from "next/link";

export default function Greenbtn({ buttonText, href, onClick }) {
  return (
    <Link className="w-fit" href={href} onClick={onClick}>
      <button className="btn">
        <p className="btnText poppins uppercase">{buttonText}</p>
      </button>
    </Link>
  );
}
