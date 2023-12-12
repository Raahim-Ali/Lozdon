import React from "react";
import "../components/Navbar/Navbar.css";
import Link from "next/link";

export default function Greenbtn({ buttonText, href }) {
  return (
    <Link className="w-fit" href={href}>
      <button className="btn">
        <p className="btnText poppins uppercase">{buttonText}</p>
      </button>
    </Link>
  );
}
