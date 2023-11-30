import React from "react";
import "../components/Navbar/Navbar.css";

export default function Greenbtn({ buttonText, width }) {
  return (
    <button className="btn" style={width ? { width } : {}}>
      <p className="btnText poppins uppercase">{buttonText}</p>
    </button>
  );
}
