import React from "react";
import "../components/Navbar/Navbar.css";
import Link from "next/link";

export default function Greenbtn({ buttonText, width }) {
  return (
    <Link href="#">
      <button className="btn" style={width ? { width } : {}}>
        <p className="btnText poppins uppercase">{buttonText}</p>
      </button>
    </Link>
  );
}
