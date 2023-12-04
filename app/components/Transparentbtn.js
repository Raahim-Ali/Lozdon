import React from "react";

export default function Transparentbtn({ buttonText, width }) {
  return (
    <button className="TransparentBtn" style={width ? { width } : {}}>
      <p className="TransparentBtnText poppins uppercase">{buttonText}</p>
    </button>
  );
}
