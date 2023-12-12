import Link from "next/link";
import React from "react";

export default function Transparentbtn({ buttonText, href }) {
  return (
    <Link href={href && href}>
      <button className="TransparentBtn">
        <p className="TransparentBtnText poppins uppercase">{buttonText}</p>
      </button>
    </Link>
  );
}
