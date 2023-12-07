import React from "react";
import "../components/Navbar/Navbar.css";
import Link from "next/link";

export default function Greenbtn({ buttonText, width, href }) {
  const buttonStyle = {
    width: width || null,
  };
  return (
    <Link className="w-fit" href={href}>
      <button className="btn" style={buttonStyle}>
        <p className="btnText poppins uppercase">{buttonText}</p>
      </button>
    </Link>
  );
}
