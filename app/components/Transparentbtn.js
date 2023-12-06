import Link from "next/link";
import React from "react";

export default function Transparentbtn({ buttonText, width, href }) {
  return (
    <Link href={href && href}>
      <button className="TransparentBtn" style={width ? { width } : {}}>
        <p className="TransparentBtnText poppins uppercase">{buttonText}</p>
      </button>
    </Link>
  );
}
