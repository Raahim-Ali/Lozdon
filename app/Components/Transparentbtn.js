import React from "react";
import "../Navbar/Navbar.css";

export default function Transparentbtn({ buttonText, width }) {
  return (
    <button className="btn" style={width ? { width } : {}}>
      <p className="btnText poppins uppercase">{buttonText}</p>
    </button>
  );
}
